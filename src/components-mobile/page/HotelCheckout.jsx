import HeaderBack from "../header/HeaderBack";
import styled from "styled-components";
import Image from "next/image";
import queryString from 'query-string';

import { useSelector } from 'react-redux'
import { useEffect, useReducer, useState } from "react";
import { useRouter } from "next/router";

import shopApi from '@/api/shop';
import { Icon } from "@iconify/react";
import SignAlt from '@iconify/icons-fa-solid/sign-in-alt';

import TimesCircle from '@iconify/icons-fa-solid/times-circle';
import QuestionIcon from '@iconify/icons-fa-solid/question-circle';
import InfoIcon from '@iconify/icons-fa-solid/info-circle';
import { Collapse, Modal, ModalBody, ModalHeader } from "reactstrap";
import { toast } from "react-toastify";
import TabPayment from "@/components//shared/TabPayment";
import userApi from "@/api/user";
import Swal from "sweetalert2";
import { BottomSheet, SheetContent } from "@biotic-ui/bottom-sheet";

const ImageContianer = styled.div`
    width:60px;
    height:80px;
    position: relative;

    > div{
        position: unset !important;
    }

    .image{
        object-fit: cover;
        width: 100% !important;
        position: relative !important;
        height: unset !important;
        border-radius:10px !important;
    }

`

const initialState = {
    options: {},
    filters: {},
    meta: {},
    hotel: undefined,
    isLoading: true
};

function parseQueryOptions(location) {
    const query = queryString.parse(location);

    const optionValues = {
        product: 'hotel',
        key: '',
        hotelId: '',
        option: '',
        optionDetail: [],
    };

    if (typeof query.option === "string") {
        optionValues.option = query.option
    }
    if (typeof query.hotelId === "string") {
        optionValues.hotelId = query.hotelId
    }
    if (typeof query.key === "string") {
        optionValues.key = query.key
    }
    if (typeof query.optionDetail === "string") {
        if (query.optionDetail) {
            optionValues.optionDetail = [query.optionDetail]
        } else {
            optionValues.optionDetail = []
        }
    }
    if (typeof query.optionDetail === 'object') {
        optionValues.optionDetail = query.optionDetail
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
    if (options.option !== "") {
        params.option = options.option
    }
    if (options.hotelId !== "") {
        params.hotelId = options.hotelId
    }
    if (options.optionDetail !== "" || options.optionDetail !== []) {
        params.optionDetail = options.optionDetail
    }

    return queryString.stringify(params, { encode: false });
}

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_HOTEL':
            return { ...state, isLoading: true }
        case 'FETCH_HOTEL_SUCCESS':
            return { ...state, hotel: action.payload, isLoading: false }
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

function HotelCheckout() {
    const [state, dispatch] = useReducer(reducer, initialState, init);
    const { token, user } = useSelector(state => state)
    const router = useRouter()
    const [prebook, setPrebook] = useState()

    const [price, setPrice] = useState()
    const [coupon, setCoupon] = useState([])
    const [point, setPoint] = useState(false)

    const [isOpenCoupon, setIsOpenCoupon] = useState(false)
    const [textCoupon, setTextCoupon] = useState('')
    const { access_token } = token
    const [paymentMethodSelected, setPaymentMethodSelected] = useState(0);
    const [contact, setContact] = useState({ ...user, phoneCode: '62' })

    const [countries, setCountries] = useState([]);
    const [forOthers, setForOthers] = useState(false);
    const [guest, setGuest] = useState({
        "type": "adult"
    })

    const [openInfoRequest, setOpenInfoRequest] = useState(false)
    const [specialRequest, setSpecialRequest] = useState('')
    const [openDrawer, setOpenDrawer] = useState({})

    const [contactAsGuest, setContactAsGuest] = useState(false);

    const handleOpenDrawer = (field) => {
        setOpenDrawer(prev => ({ ...prev, [field]: !prev[field] }))
    }

    const handleSetAsGuest = () => {
        if (!contactAsGuest) {
            setGuest(prev => ({
                ...prev, "title": contact.title,
                "firstName": contact.first,
                "lastName": contact.last
            }))
        } else {
            setGuest({ type: 'adult' })
        }
        setContactAsGuest(!contactAsGuest)
    }

    const handleSubmitCheckout = () => {
        const req = {
            "product": "hotel",
            "key": prebook.data.key,
            price: { ...price, discount: price.discount.grandTotal, insurance: 0, tax: 0 },
            coupon,
            paymentMethod: paymentMethodSelected,
            "contact": {
                ...contact, "firstName": contact.first,
                "lastName": contact.last
            },
            "guest": [
                guest
            ], specialRequest
        }

        shopApi.submitCheckout(access_token, req).then(res => {
            if (res.success) {
                router.push(`/user/purchase/detail/${res.data.key}`);
            } else {
                toast.error('Pesanan gagal dibuat, pastikan data lengkap')
            }
        })
    }

    const handleChangeGuest = (e) => {
        const { name, value } = e.target
        setGuest({ ...guest, [name]: value })
    }

    const handleChangeForOther = () => {
        setForOthers(!forOthers)
    }

    const handleChangeContact = (e) => {
        const { name, value } = e.target
        setContact({ ...contact, [name]: value })
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


    const handleOpenCoupon = () => {
        setIsOpenCoupon(prevState => !prevState)
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
        setPrebook({ ...prebook, isLoading: true })
        shopApi.getPrebookHotel(access_token, { ...state.options, id: state.options.hotelId }).then(res => {
            if (res.success) {
                setPrebook({ ...prebook, isLoading: false, data: res.data })
                localStorage.setItem('prebook', JSON.stringify(res.data))
            } else if (res.message.includes('Booking token already exist for this criteria')) {
                if (localStorage.getItem('prebook')) {
                    setPrebook({ ...prebook, isLoading: false, data: JSON.parse(localStorage.getItem('prebook')) })
                } else {
                    Swal.fire({
                        icon: 'info',
                        title: 'Terjadi Kesalahan',
                        text: 'Silahkan pilih ulang pesanan anda',
                        // allowOutsideClick: false,
                        confirmButtonColor: '#0070ba'
                    }).then(res => {
                        if (res.isConfirmed) {
                            router.back()
                        }
                    })
                }
            } else {
                Swal.fire({
                    icon: 'info',
                    title: 'Terjadi Kesalahan',
                    text: 'Silahkan pilih ulang pesanan anda',
                    // allowOutsideClick: false,
                    confirmButtonColor: '#0070ba'
                }).then(res => {
                    if (res.isConfirmed) {
                        router.back()
                    }
                })
            }
        })

        return () => {
            localStorage.removeItem('prebook')
        }
    }, [state.options])

    useEffect(() => {
        dispatch({ type: 'FETCH_HOTEL' })
        if (prebook?.data) {
            shopApi.getCheckoutHotel(access_token, prebook.data).then(res => {
                if (res.success) {
                    dispatch({
                        type: 'FETCH_HOTEL_SUCCESS',
                        payload: res.data
                    })
                } else {
                    toast.error('Kamar hotel tidak tersedia')
                    router.back()
                }

            })
        }
    }, [prebook])

    useEffect(() => {
        let canceled = true;
        if (canceled) {
            userApi.getCountries().then(res => {
                if (res.success) {
                    setCountries(res.data)
                }

            })
        }

        return () => {
            canceled = false;
        }
    }, [])

    const handleUsePoint = () => {
        setPoint(prev => !prev)
    }

    const handleChangePaymentMethod = (id) => {
        setPaymentMethodSelected(id);
    }

    useEffect(() => {
        const req = {
            "product": "hotel",
            "key": state.hotel?.key,
            "insurance": false,
            point,
            coupon,
            paymentMethod: paymentMethodSelected,
            "platform": "web",
            "ssr": []
        }
        if (state.hotel) {
            // setLoading(true)
            shopApi.getCountPrice(access_token, req).then(res => {
                if (res.success) {
                    setPrice(res.data)
                    // setLoading(false)
                } else {
                    if (res.message.includes('coupon')) {
                        setCoupon([...coupon].filter(item => item !== res.note))
                        toast.error('Kupon sudah digunakan', { position: 'top-right', toastId: 'coupon' })
                    }
                }
            })
        }
    }, [state.hotel, paymentMethodSelected, point, coupon])


    const { hotel } = state

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
            <HeaderBack title="Booking" onBack={() => router.back()} />
            <div className="container mt-2">
                <div className="row">
                    <div className="col-12">
                        <RootStyled className="card mb-2">
                            <div className="card-body p-2">
                                <div className="row">
                                    <div className="col-4 pr-0">
                                        <ImageHotelStyled img={hotel?.image} />
                                    </div>
                                    <div className="col-8">
                                        <div className="row h-100 justify-content-between">
                                            <div className="col-10">
                                                <h5 className="title mb-0">{hotel?.name}</h5>
                                                <small className="text-dark mb-2 d-inline-block">{hotel?.booked?.option?.[0]?.name}</small>
                                                <div className="d-flex align-items-center" style={{ fontSize: '12px' }}>
                                                    <span className="d-flex">
                                                        <div className="d-inline-block mr-1" style={{ width: '15px', height: '15px', position: 'relative' }}>
                                                            <Image src={'https://cdn.masterdiskon.com/masterdiskon/icon/fe/location.png'} layout='fill' />
                                                        </div>
                                                    </span>
                                                    <small style={{ fontSize: '10px', lineHeight: '15px', display: 'block' }}>
                                                        {hotel?.detail?.address}
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="col-12 text-secondary d-flex flex-column justify-content-end">
                                                <div className="d-flex mb-0 justify-content-between align-items-center">
                                                    <small className="d-block">Check in</small>
                                                    <small className="d-block">{hotel?.booked?.dateFrom}</small>
                                                </div>
                                                <div style={{ marginTop: '-10px' }} className="d-flex justify-content-between align-items-center">
                                                    <small className="d-block">Check out</small>
                                                    <small className="d-block">{hotel?.booked?.dateTo}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </RootStyled>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-12">
                        <div className="card px-2" style={{
                            borderRadius: '15px',
                            boxShadow: '5px 5px 15px -5px rgba(0,0,0,.5)'
                        }}>
                            <div className="card-body p-2">
                                <small className="text-primary font-weight-bold d-inline-block mb-2">Detail Pemesanan</small>
                                <div style={{
                                    borderRadius:'13px',backgroundColor:'#f5f5f5',padding:'5px 10px'
                                }} className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <small className="text-secondary d-block" style={{ marginBottom: '-8px' }}>Contact</small>
                                        <small>{`${contact?.title} ${contact?.first} ${contact?.last}`}</small>
                                    </div>
                                    <div>
                                        <i onClick={() => handleOpenDrawer('contact')} className="fas fa-edit text-primary" />
                                    </div>
                                </div>
                                <hr className="my-4" style={{borderBottom:'1px solid black'}} />
                                <small className="text-primary font-weight-bold">Guest Kamar</small>
                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="d-block">Sama dengan pemesan</small>
                                    <div className="custom-control custom-switch">
                                        <input onClick={handleSetAsGuest} checked={contactAsGuest} type="checkbox" className="custom-control-input" id='directOnly' />
                                        <label style={{ fontSize: '12px' }} className="custom-control-label" htmlFor='directOnly'>
                                        </label>
                                    </div>
                                </div>
                                <div style={{
                                    borderRadius:'13px',backgroundColor:'#f5f5f5',padding:'5px 10px'
                                }} className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <small className="text-secondary d-block" style={{ marginBottom: '-8px' }}>Traveller 1 : Dewasa</small>
                                        <small> {`${guest?.title ?? ''} ${guest?.firstName ?? ''} ${guest?.lastName ?? ''}`}</small>
                                    </div>
                                    <div>
                                        <i onClick={() => handleOpenDrawer('guest')} className="fas fa-edit text-primary" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center my-2">
                                    <p className="mb-0 font-weight-bold">Pilih Kupon</p>
                                    <button type="button" onClick={handleOpenCoupon} className="btn btn-primary btn-sm">Gunakan</button>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="d-block text-secondary">Sub Total</small>
                                    <small className="d-block">IDR {price?.subtotal?.toLocaleString().replaceAll(',', '.')}</small>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="d-block text-secondary">Biaya Penanganan</small>
                                    <small className="d-block">IDR {price?.fee?.toLocaleString().replaceAll(',', '.')}</small>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="d-block text-secondary">Poin</small>
                                    <small className="d-block">{price?.user?.point?.toLocaleString().replaceAll(',', '.')}</small>
                                </div>
                                {price?.point > 0 &&
                                    <div className="d-flex justify-content-end align-items-center">
                                        <small><strong className="text-danger">-{price?.point}</strong></small>
                                    </div>
                                }
                                {price?.coupon.map(item => (
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
                                    <small className="d-block">IDR {price?.total?.toLocaleString().replaceAll(',', '.')}</small>
                                </div>
                                <button type="button" onClick={handleSubmitCheckout} style={{ borderRadius: '10px' }} className="btn font-weight-bold btn-warning btn-sm mt-2 btn-block">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BottomSheet open={openDrawer['guest']} onClose={() => handleOpenDrawer('guest')}>
                <SheetContent className="p-3">
                    <div className="form-row">
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Titel</label>
                                <select onChange={handleChangeGuest} className="form-control all_title title_" value={guest.title} name="title">
                                    <option value="Mr">Mr.</option>
                                    <option value="Mrs">Mrs.</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Nama Depan</label>
                                <input type="text" className="textonly form-control all_firstname firstname_" value={guest.firstName} name="firstName" onChange={handleChangeGuest} autoComplete="off" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Nama Belakang</label>
                                <input type="text" value={guest.lastName} onChange={handleChangeGuest} className="textonly form-control all_lastname lastname_" name="lastName" />
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </BottomSheet>

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
        </>
    );
}



const ImageHotelStyled = styled.div`
background:url(${props => props.img});
background-size:cover;
background-position:center center;
background-repeat :no-repeat;
width:100%;
height:136px;
border-radius:15px;

`

const RootStyled = styled.div`
border-radius:15px;
box-shadow:5px 5px 15px -5px rgba(0,0,0,.5);
.title{
    width: 200px;
  white-space: wrap;
  font-size:16px;
  font-weight:bold;
  color:#0070BA;
  overflow: hidden;
  text-overflow: ellipsis;
}

`


export default HotelCheckout;