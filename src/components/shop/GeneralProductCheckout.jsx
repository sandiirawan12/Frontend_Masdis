import { useRouter } from "next/router";
import { useEffect, useReducer, useState } from "react";
import TabPayment from "../shared/TabPayment";
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
import Image from "next/image";

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
    const { token, user } = useSelector(state => state)

    const [paymentMethodSelected, setPaymentMethodSelected] = useState(0);
    const router = useRouter();
    const { access_token } = token

    const [countries, setCountries] = useState([]);
    const [contact, setContact] = useState({
        ...user, phoneCode: '62', "firstName": user.first,
        "lastName": user.last
    })
    const [price, setPrice] = useState()

    const [coupon, setCoupon] = useState([])
    const [point, setPoint] = useState(false)
    const [guest, setGuest] = useState([])

    const [isOpenCoupon, setIsOpenCoupon] = useState(false)
    const [textCoupon, setTextCoupon] = useState('')
    const [specialRequest, setSpecialRequest] = useState('')


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
                if (res.message.includes('coupon')) {
                    setCoupon([...coupon].filter(item => item !== res.note))
                    toast.error('Kupon sudah digunakan', { position: 'top-right', toastId: 'coupon' })
                }
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
        <section>
            <div className="container py-3">
                <h3 className="font-weight-bold">Checkout</h3>
                <div className="row">
                    <div className="col-md-7 px-0-sm order-md-1 order-2">
                        <div className="kontak_details">
                            <p>Kontak detail digunakan untuk menerima e-voucher, pastikan menggunakan email yang valid.</p>
                            <div className="card mb-2" style={{ borderRadius: '20px', boxShadow: '5px 5px 10px -5px rgba(0,0,0,.5)' }}>
                                <div style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} className="card-header bg-primary font-weight-bold text-white pointer" data-toggle="collapse" data-target="#contact_details">
                                    <Icon className="float-right" icon={AngleDownIcon} />
                                    <p className="card-title mb-0"><b>Kontak Detail (untuk E-ticket/Voucher)</b></p>
                                </div>
                                <div className="card-body" id="contact_details">
                                    <div className="form-row">
                                        <div className="col-3">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Title</label>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon1">
                                                            <Icon icon={UserGraduateIcon} />
                                                        </span>
                                                    </div>
                                                    <select value={contact.title} name="title" onChange={handleChangeContact} className="form-control title">
                                                        <option value="Mr">Mr.</option>
                                                        <option value="Mrs">Mrs.</option>
                                                        <option value="Ms">Ms.</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Nama depan</label>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon1"><Icon icon={UserIcon} /></span>
                                                    </div>
                                                    <input value={contact.firstName} onChange={handleChangeContact} name="firstName" type="text" className="textonly form-control" defaultValue="malih" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-5">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Nama belakang</label>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon1"><Icon icon={UserIcon} /></span>
                                                    </div>
                                                    <input value={contact.lastName} onChange={handleChangeContact} name="lastName" type="text" className="textonly form-control form-control" defaultValue="pamungkas" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">No telepon</label>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon1" style={{ borderRight: 'none' }}><Icon icon={PhoneIcon} /></span>
                                                        <select value={contact.phoneCode} name="phoneCode" onChange={handleChangeContact} className="form-control select2 pilihnegara" style={{ width: '30%', borderLeft: 'none' }}>
                                                            {countries.map(item => (
                                                                <option value={item.phone}>{item.phone}</option>
                                                            ))}
                                                        </select>
                                                        <input value={contact.phone} name="phone" onChange={handleChangeContact} maxLength={15} type="text" className="numberonly form-control" style={{ width: '70%' }} required />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Email</label>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon1">@</span>
                                                    </div>
                                                    <input name="email" value={contact.email} onChange={handleChangeContact} type="text" className="textonly form-control form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pax_type" style={{ display: 'none' }}>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input sebagai-tamu" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Sebagai tamu</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {state.product.conditions.paxRequired &&
                                guest.map((item, index) => (
                                    <div className="pax_type" >
                                        <ul className="list-group mb-2" style={{ borderRadius: '20px', boxShadow: '5px 5px 10px -5px rgba(0,0,0,.5)' }}>
                                            <li className="list-group-item bg-primary font-weight-bold text-white">
                                                <span>Guest {++index}</span>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="form-row">
                                                    <div className="col-3">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputEmail1">Title</label>
                                                            <div className="input-group mb-3">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text" id="basic-addon1">
                                                                        <Icon icon={UserGraduateIcon} />
                                                                    </span>
                                                                </div>
                                                                <select onChange={e => handleChangeGuest(e, index)} value={item.title} className="form-control" name="title">
                                                                    <option value="Mr">Mr.</option>
                                                                    <option value="Mrs">Mrs.</option>
                                                                    <option value="Ms">Ms.</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputEmail1">Nama depan</label>
                                                            <div className="input-group mb-3">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text" id="basic-addon1">
                                                                        <Icon icon={UserIcon} />
                                                                    </span>
                                                                </div>
                                                                <input onChange={e => handleChangeGuest(e, index)} value={item.firstName} type="text" className="textonly form-control" name="firstName" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-5">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputEmail1">Nama belakang</label>
                                                            <div className="input-group mb-3">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text" id="basic-addon1">
                                                                        <Icon icon={UserIcon} />
                                                                    </span>
                                                                </div>
                                                                <input onChange={e => handleChangeGuest(e, index)} value={item.lastName} type="text" className="textonly form-control" name="lastName" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-5">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputEmail1">No. Telepon</label>
                                                            <div className="input-group mb-3">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text" id="basic-addon1">
                                                                        <Icon icon={PhoneIcon} />
                                                                    </span>
                                                                </div>
                                                                <input onChange={e => handleChangeGuest(e, index)} value={item.phone} type="text" maxLength={15} className="textonly form-control" name="phone" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputEmail1">Email</label>
                                                            <div className="input-group mb-3">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text" id="basic-addon1">@</span>
                                                                </div>
                                                                <input onChange={e => handleChangeGuest(e, index)} value={item.email} type="email" className="textonly form-control" name="email" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                ))
                            }

                            <ul className="list-group mb-2" style={{ borderRadius: '20px', boxShadow: '5px 5px 10px -5px rgba(0,0,0,.5)' }}>
                                <li className="list-group-item bg-primary font-weight-bold text-white">
                                    <span><b>Special request (optional)</b></span>
                                </li>
                                <li className="list-group-item">
                                    <div className="collapse show my-2" id="special_request1">
                                        <textarea rows={2} onChange={e => setSpecialRequest(e.target.value)} name="special_request" className="form-control" id="exampleFormControlTextarea1" placeholder="If you don't receive any information, you may have to contact them directly to confirm" value={specialRequest} />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5 px-0-sm order-md-2 order-1">
                        <div className="mb-2">
                            <div className="card border-0" style={{ borderRadius: '20px', boxShadow: '5px 5px 10px -5px rgba(0,0,0,.5)' }}>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <p className="badge badge-warning mb-1">product</p>
                                            <h5 className="text-primary font-weight-bold">{state.product?.name}</h5>
                                            <p className="mb-0">
                                                <div style={{
                                                    width: '20px', height: '20px', position: 'relative', display: 'inline-block'
                                                }}>
                                                    <Image src={'https://cdn.masterdiskon.com/masterdiskon/icon/fe/location.png'} layout='fill' />
                                                </div>
                                                <span className="city_name">{state.product?.detail.city}</span>,
                                                <span className="country_name">Indonesia</span>
                                            </p>
                                            <p className="address">{state.product?.detail.address}</p>
                                        </div>
                                        <img style={{ maxWidth: '60px', objectFit: 'cover' }} src={state.product?.image} className="mr-3 rounded img-fluid" alt="..." />

                                    </div>
                                    <div className="d-flex justify-content-between my-2">
                                        <span><strong>Jumlah</strong></span>
                                        <span className="qty">{state.options.qty} Qty</span>
                                    </div>
                                    <div id="coupon_checkout" className="d-flex justify-content-between align-items-center">
                                        <span><strong>Kupon</strong></span>
                                        <div>
                                            <button type="button" id="pilihKupon" onClick={handleOpenCoupon} className="btn btn-primary">
                                                Gunakan Kupon
                                            </button>
                                        </div>
                                    </div>

                                    <hr />
                                    <div className="d-flex justify-content-between my-2">
                                        <span><strong>Subtotal</strong></span>
                                        <span className="subtotal_text">Rp{price?.subtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="d-flex justify-content-between my-2">
                                        <span><strong>Tax</strong></span>
                                        <span className="text-success">Included</span>
                                    </div>
                                    <div className="d-flex justify-content-between my-2">
                                        <span><strong>Biaya Penanganan</strong></span>
                                        <span className="text_fee">Rp{price?.fee.toLocaleString()}</span>
                                    </div>
                                    <div className="d-flex justify-content-between my-2">
                                        <span><strong>Poin</strong></span>
                                        <span className="text_fee">{price?.user?.point.toLocaleString()}</span>
                                    </div>
                                    {price?.point > 0 &&
                                        <div className="d-flex justify-content-end align-items-center">
                                            <p className="total_poin text-danger">- {price?.point.toLocaleString()}</p>
                                        </div>
                                    }
                                    {price?.coupon.map(item => (
                                        <div className="d-flex justify-content-between">
                                            <span className="pb-2 text-danger">{item.name}</span>
                                            <p className="text-danger">- Rp{item.amount.toLocaleString()}<Icon style={{ cursor: 'pointer' }} icon={TimesCircle} onClick={() => handleRemoveCoupon(item)} /></p>
                                        </div>
                                    ))}
                                    <hr />
                                    <div className="datapoint">
                                        <div className="kotakambilpoint">
                                            <input type="checkbox" id="ambilpoint" checked={point} onClick={handleUsePoint} />
                                            <label className="font-weight-bold font-italic" htmlFor="ambilpoint">Gunakan Point untuk pembayaran</label>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center my-2">
                                        <span><strong>Total</strong></span>
                                        <h4><strong className="total_teks">Rp{price?.total.toLocaleString()}</strong></h4>
                                    </div>
                                    <button onClick={handleSubmitCheckout} className="btn btn-primary btn-lg btn-block mt-4 submit-book desktop-only" type="button">Book Now</button>
                                    <div className="text-center mt-2">
                                        <div className="daftarpoint">
                                            <span className="bg-warning rounded-circle"><i className="fa fa-coins" /></span>
                                            <small className="nominalpoint ml-2">Dapatkan Point Diskon <b><span className="text-gold">{price?.user?.point?.toLocaleString()}</span></b> poin</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                                <div className="col-3 rounded d-flex bg-warning align-items-center justify-content-center">
                                    <h6>
                                        {item.name}
                                    </h6>
                                </div>
                                <div className="col-9 d-flex justify-content-between p-3">
                                    <div>
                                        <h6>Potongan {item.amount.toLocaleString()}</h6>
                                        {item.minimum_transaction > 0 &&
                                            <p>Min.Blnj Rp{item.minimum_transaction.toLocaleString()}</p>
                                        }
                                        <button onClick={() => handleSubmitCoupon(item.id.toString())} type="button" className="btn btn-primary">Gunakan</button>
                                    </div>
                                    <div>
                                        <small>
                                            Hingga: {item.expired}
                                        </small>
                                        <p>
                                            {item.term}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ModalBody>
            </Modal>

        </section>

    );
}

export default GeneralProductCheckout;