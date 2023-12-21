import { useRouter } from "next/router";
import { useEffect, useReducer, useState } from "react";
import queryString from 'query-string'
import shopApi from "@/api/shop";
import { useSelector } from 'react-redux'
import userApi from "@/api/user";
import AngleDownIcon from '@iconify/icons-fa-solid/angle-down'
import LocationArrowIcon from '@iconify/icons-fa-solid/location-arrow'
import UserIcon from '@iconify/icons-fa-solid/user-alt'
import UserGraduateIcon from '@iconify/icons-fa-solid/user-graduate'
import PhoneIcon from '@iconify/icons-fa-solid/phone-alt'
import { Icon } from '@iconify/react'
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import SignAlt from '@iconify/icons-fa-solid/sign-in-alt';
import TimesCircle from '@iconify/icons-fa-solid/times-circle';
import QuestionIcon from '@iconify/icons-fa-solid/question-circle';
import { toast } from "react-toastify";
import HeaderBack from "../header/HeaderBack";
import { BottomSheet, SheetContent } from "@biotic-ui/bottom-sheet";

const initialState = {
    options: {},
    filters: {},
    meta: {},
    product: undefined,
    isLoading: true
};

function parseQueryOptions(location) {
    const query = queryString.parse(location);

    const optionValues = {
        product: 'general',
        key: '',
        qty: '1',
    };

    if (typeof query.product === "string") {
        optionValues.product = query.product
    }
    if (typeof query.key === "string") {
        optionValues.key = query.key
    }
    if (typeof query.qty === "string") {
        optionValues.qty = query.qty
    }

    return optionValues;
}

function parseQuery(location) {
    return [parseQueryOptions(location)];
}

function buildQuery(options) {
    const params = {};
    if (options.key !== "") {
        params.key = options.key
    }
    if (options.product !== "") {
        params.product = options.product
    }
    if (options.qty !== "") {
        params.qty = options.qty
    }

    return queryString.stringify(params, { encode: false });
}

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_PRODUCT':
            return { ...state, isLoading: true }
        case 'FETCH_PRODUCT_SUCCESS':
            return { ...state, product: action.payload, isLoading: false }
        case 'SET_FILTER_VALUE':
            return {
                ...state,
                options: { ...state.options, page: 1 },
                filters: { ...state.filters, [action.filter]: action.value },
            };
        case 'SET_META':
            return {
                ...state, meta: action.payload,
            };
        case 'SET_OPTION_VALUE':
            return {
                ...state,
                options: { ...state.options, page: 1, [action.option]: action.value },
            };
        case 'SET_OPTIONS_VALUE':
            return {
                ...state,
                options: action.value,
            };
        default:
            throw new Error();
    }
}

function init(state) {
    const [options] = parseQuery(window.location.search);
    return { ...state, options };
}

function GeneralProductCheckout() {
    const [state, dispatch] = useReducer(reducer, initialState, init);
    const { token, user } = useSelector(state => state);
    const [openDrawer, setOpenDrawer] = useState({});

    const [paymentMethodSelected, setPaymentMethodSelected] = useState(0);
    const router = useRouter();
    const { access_token } = token;

    const [countries, setCountries] = useState([]);
    const [contact, setContact] = useState({
        ...user, phoneCode: '62', "firstName": user.first,
        "lastName": user.last
    });
    const [price, setPrice] = useState();

    const [coupon, setCoupon] = useState([]);
    const [point, setPoint] = useState(false);
    const [guest, setGuest] = useState([]);

    const [isOpenCoupon, setIsOpenCoupon] = useState(false);
    const [textCoupon, setTextCoupon] = useState('');
    const [specialRequest, setSpecialRequest] = useState('');

    const [contactAsGuest, setContactAsGuest] = useState(false);

    const handleSetAsGuest = () => {
        const guestList = guest;
        if (!contactAsGuest) {
            guestList[0] = {
                ...guestList[0], "title": contact.title,
                "firstName": contact.first,
                "lastName": contact.last
            };
            setGuest(guestList)
        } else {
            guestList[0] = { type: 'adult', title: 'Mr' }
            setGuest(guestList)
        }
        setContactAsGuest(!contactAsGuest)
    }

    const handleOpenDrawer = (field) => {
        setOpenDrawer(prev => ({ ...prev, [field]: !prev[field] }))
    }


    const handleSubmitCoupon = (value) => {
        const arr = new Set([...coupon]);
        arr.add(value);
        setCoupon([...arr])
        handleOpenCoupon()
    }

    const handleRemoveCoupon = (value) => {
        if (value.type === 'umum') {
            setCoupon(coupon.filter(item => item !== value.code));
        } else {
            setCoupon(coupon.filter(item => item !== value.id.toString()));
        }
    }

    const handleUsePoint = () => {
        setPoint(prev => !prev)
    }


    const handleOpenCoupon = () => {
        setIsOpenCoupon(prevState => !prevState)
    }

    const handleChangePaymentMethod = (id) => {
        setPaymentMethodSelected(id);
    }

    const handleChangeContact = (e) => {
        const { name, value } = e.target
        setContact({ ...contact, [name]: value })
    }

    const handleSubmitCheckout = () => {
        const req = {
            "product": "general",
            "key": state.options.key,
            "qty": state.options.qty,
            "price": { ...price, discount: price.discount.grandTotal },
            coupon,
            "paymentMethod": paymentMethodSelected,
            contact,
            guest,
            specialRequest
        }
        shopApi.submitCheckout(access_token, req).then(res => {
            if (res.success) {
                router.push(`/user/purchase/detail/${res.data.id_order}`);
            } else {
                toast.error(res.message, { toastId: 'error' })
            }
        })
    }

    useEffect(() => {
        const query = buildQuery(state.options);
        const href = queryString.stringifyUrl({
            ...queryString.parseUrl(router.asPath),
            query: queryString.parse(query),
        }, { encode: false });

        router.replace(router.pathname, href, {
            shallow: true,
        }).then(() => {
            // This is necessary for the "History API" to work.
            window.history.replaceState(
                {
                    ...window.history.state,
                    options: {
                        ...window.history.state.options,
                        shallow: false,
                    },
                },
                '',
                href,
            );
        });
    }, [state.options])

    useEffect(() => {
        dispatch({ type: 'FETCH_PRODUCT' })
        shopApi.getCheckoutGeneralProduct(access_token, state.options).then(res => {
            if (res.success) {
                dispatch({ type: 'FETCH_PRODUCT_SUCCESS', payload: res.data })
            }

        })

    }, [state.options])

    useEffect(() => {
        userApi.getCountries().then(res => {
            if (res.success) {
                setCountries(res.data)
            }
        })
    }, [])

    useEffect(() => {
        const req = {
            "product": "general",
            "key": state.options.key,
            "qty": state.options.qty,
            point,
            coupon,
            "insurance": false,
            "paymentMethod": paymentMethodSelected,
        }
        shopApi.getCountPrice(access_token, req).then(res => {
            if (res.success) {
                setPrice(res.data)
            } else {
                toast.warning(res.message, { toastId: 'price' })
            }
        })

    }, [state.options, paymentMethodSelected, point, coupon])

    useEffect(() => {
        if (state.product) {
            if (state.product.conditions.paxRequired) {
                let guest = []
                for (let index = 0; index < state.options.qty; index++) {
                    guest[index] = { type: 'adult', title: 'Mr' }
                }
                setGuest(guest)
            } else {
                setGuest([contact])
            }
        }
    }, [state.product?.conditions.paxRequired, state.options.qty, contact])

    const handleChangeGuest = (e, index) => {
        const { value, name } = e.target
        const arr = [...guest];
        arr[index - 1] = { ...arr[index - 1], [name]: value }
        setGuest(arr)
    }

    if (state.isLoading) {
        return <div style={{
            height: '50vh',
            marginBottom: '5rem'
        }} className="d-flex flex-column align-items-center justify-content-center">
            <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/pulse-spinner.svg" />
            <h4>Sedang menyiapkan data...</h4>
        </div>
    }
    return (
        <>
            <HeaderBack onBack={() => router.back()} title='Booking' />
            <div className="container pt-3  pb-5">
                <div className="card px-2" style={{
                    borderRadius: '15px',
                    boxShadow: '5px 5px 15px -5px rgba(0,0,0,.5)'
                }}>
                    <div className="row w-100 pt-3 px-3">
                        <div className="col-4 h-100">
                            <img src={state.product?.image} style={{ width: '100%', objectFit: 'cover', height: '100%' }} />
                        </div>
                        <div className="col-8 h-100 pb-2">
                            <h6 className="font-weight-bold text-primary mb-0" style={{
                                lineHeight: '17px', maxHeight: '49px',
                                WebkitBoxOrient: 'vertical', overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                WebkitLineClamp: 2, display: '-webkit-box'
                            }}>{state.product?.name}</h6>
                            <small className="text-secondary d-block mt-2" style={{ lineHeight: '17px' }}>{state.product?.detail.address}</small>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                        <div className="card px-2" style={{
                            borderRadius: '15px',
                            boxShadow: '5px 5px 15px -5px rgba(0,0,0,.5)'
                        }}>
                            <div className="card-body p-2">
                                <small className="text-primary font-weight-bold">Detail Pemesanan</small>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <small className="text-secondary d-block" style={{ marginBottom: '-8px' }}>Contact</small>
                                        <small>{`${contact?.title} ${contact?.first} ${contact.last}`}</small>
                                    </div>
                                    <div>
                                        <i onClick={() => handleOpenDrawer('contact')} className="fas fa-edit text-primary" />
                                    </div>
                                </div>
                                <hr className="my-1" />
                                <small className="text-primary font-weight-bold">Detail Traveller</small>
                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="d-block">Sama dengan pemesan</small>
                                    <div className="custom-control custom-switch">
                                        <input onClick={handleSetAsGuest} checked={contactAsGuest} type="checkbox" className="custom-control-input" id='directOnly' />
                                        <label style={{ fontSize: '12px' }} className="custom-control-label" htmlFor='directOnly'>
                                        </label>
                                    </div>
                                </div>
                                {guest?.map((item, index) => (
                                    <>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <small className="text-secondary d-block" style={{ marginBottom: '-8px' }}>Traveller {++index} : {item.type}</small>
                                                <small> {`${item?.title ?? ''} ${item?.firstName ?? ''} ${item?.lastName ?? ''}`}</small>
                                            </div>
                                            <div>
                                                <i onClick={() => handleOpenDrawer(`guest-${index}`)} className="fas fa-edit text-primary" />
                                            </div>
                                        </div>
                                        <BottomSheet open={openDrawer[`guest-${index}`]} onClose={() => handleOpenDrawer(`guest-${index}`)}>
                                            <SheetContent className="p-3">
                                                <div className="form-row">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputEmail1">Titel</label>
                                                            <select onChange={e => handleChangeGuest(e, index)} className="form-control all_title title_" value={item.title} name="title">
                                                                <option value="Mr">Mr.</option>
                                                                <option value="Mrs">Mrs.</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputEmail1">Nama Depan</label>
                                                            <input type="text" className="textonly form-control all_firstname firstname_" value={item.firstName} name="firstName" onChange={e => handleChangeGuest(e, index)} autoComplete="off" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputEmail1">Nama Belakang</label>
                                                            <input type="text" value={item.lastName} onChange={e => handleChangeGuest(e, index)} className="textonly form-control all_lastname lastname_" name="lastName" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </SheetContent>
                                        </BottomSheet>
                                    </>
                                ))}
                                <div className="d-flex justify-content-between align-items-center my-2">
                                    <p className="mb-0 font-weight-bold">Pilih Kupon</p>
                                    <button type="button" onClick={handleOpenCoupon} className="btn btn-primary btn-sm">Gunakan</button>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="d-block text-secondary">Sub Total</small>
                                    <small className="d-block">IDR {price?.subtotal.toLocaleString()}</small>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="d-block text-secondary">Biaya Penanganan</small>
                                    <small className="d-block">IDR {price?.fee.toLocaleString()}</small>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="d-block text-secondary">Poin</small>
                                    <small className="d-block">{price?.user?.point}</small>
                                </div>
                                {price?.point > 0 &&
                                    <div className="d-flex justify-content-end align-items-center">
                                        <small><strong className="text-danger">-{price?.point?.toLocaleString()}</strong></small>
                                    </div>
                                }
                                {price?.coupon?.map(item => (
                                    <div className="d-flex justify-content-between">
                                        <small className="pb-2 text-danger">{item.name}</small>
                                        <small className="text-danger">- Rp{item.amount.toLocaleString()}<Icon style={{ cursor: 'pointer' }} icon={TimesCircle} onClick={() => handleRemoveCoupon(item)} /></small>
                                    </div>
                                ))}
                                <div className="kotakambilpoint">
                                    <input onClick={handleUsePoint} checked={point} type="checkbox" id="ambilpoint" />
                                    <small className="font-weight-bold font-italic" htmlFor="ambilpoint">Gunakan poin untuk pembayaran</small>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <small className="d-block text-secondary">Total</small>
                                    <small className="d-block">IDR {price?.total.toLocaleString()}</small>
                                </div>
                                <button type="button" onClick={handleSubmitCheckout} style={{ borderRadius: '10px' }} className="btn font-weight-bold btn-warning btn-sm mt-2 btn-block">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BottomSheet open={openDrawer['contact']} onClose={() => handleOpenDrawer('contact')}>
                <SheetContent className="p-3">
                    <div className="form-row">
                        <div className="col-2">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Titel</label>
                                <select name="title" value={contact?.title} onChange={handleChangeContact} id="title_guest" className="form-control title">
                                    <option value="Mr">Mr.</option>
                                    <option value="Mrs">Mrs.</option>
                                    <option value="Ms">Ms.</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Nama Depan</label>
                                <input name="first" value={contact?.first} onChange={handleChangeContact} type="text" className="textonly form-control firstnamecontact" required />
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Nama Belakang</label>
                                <input name="last" value={contact?.last} onChange={handleChangeContact} type="text" className="textonly form-control form-control lastnamecontact" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Telepon</label>
                                <div className="input-group">
                                    <select value={contact?.phoneCode} onChange={handleChangeContact} name="phoneCode" className="form-control select2 pilihnegara" style={{ width: '30%' }}>
                                        {countries?.map(item => (
                                            <option value={item.phone}>{item.phone}</option>
                                        ))}
                                    </select>
                                    <input value={contact?.phone} onChange={handleChangeContact} name="phone" type="text" className="numberonly form-control" style={{ width: '70%' }} defaultValue placeholder="masukan nomor telepon anda" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input name="email" value={contact?.email} onChange={handleChangeContact} type="text" className="textonly form-control form-control" defaultValue placeholder="masukan email anda" />
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </BottomSheet>


            <Modal isOpen={isOpenCoupon} toggle={handleOpenCoupon} centered size="lg">
                <ModalHeader toggle={handleOpenCoupon}>
                    <h5>Pilih kupon <Icon icon={QuestionIcon} /></h5>
                </ModalHeader>
                <ModalBody>
                    <div className="input-group mb-3">
                        <input type="text" value={textCoupon} onChange={(e) => setTextCoupon(e.target.value)} className="form-control" placeholder="Enter Code . . . " />
                        <div className="input-group-append">
                            <button onClick={() => handleSubmitCoupon(textCoupon)} className="btn btn-outline-primary" type="button">
                                <Icon icon={SignAlt} />
                            </button>
                        </div>
                    </div>
                    <div className="container">
                        {price?.user.coupon.map(item => (
                            <div className="row border rounded">
                                <div className="col-12 py-2 d-flex bg-warning align-items-center justify-content-center">
                                    <h6 className="font-weight-bold">
                                        {item.name}
                                    </h6>
                                </div>
                                <div className="col-12 d-flex justify-content-between p-3">
                                    <div>
                                        <small>Potongan {item.amount.toLocaleString()}</small>
                                        {item.minimum_transaction > 0 &&
                                            <small className="d-block">Min.Blnj Rp{item.minimum_transaction.toLocaleString()}</small>
                                        }
                                        <button onClick={() => handleSubmitCoupon(item.id.toString())} type="button" className="btn btn-sm btn-primary mt-3">Gunakan</button>
                                    </div>
                                    <div>
                                        <small>
                                            Hingga: {item.expired}
                                        </small>
                                        <small className="d-block">
                                            {item.term}
                                        </small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
}

export default GeneralProductCheckout;