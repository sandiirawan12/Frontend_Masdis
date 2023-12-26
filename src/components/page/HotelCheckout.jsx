import styled from "styled-components";
import Image from "next/image";
import queryString from 'query-string';

import { useSelector } from 'react-redux'
import { useEffect, useReducer, useState } from "react";
import { useRouter } from "next/router";

import shopApi from '@/api/shop';
import { Icon } from "@iconify/react";
import SignAlt from '@iconify/icons-fa-solid/sign-in-alt';
import TrashIcon from '@iconify/icons-fa-solid/trash';

import TimesCircle from '@iconify/icons-fa-solid/times-circle';
import QuestionIcon from '@iconify/icons-fa-solid/question-circle';
import InfoIcon from '@iconify/icons-fa-solid/info-circle';
import { Collapse, Modal, ModalBody, ModalHeader } from "reactstrap";
import { toast } from "react-toastify";
import userApi from "@/api/user";
import Swal from "sweetalert2";
import ButtonChekout from "../shared/ButtonChekout";
import classNames from 'classnames';

import ReactGA from 'react-ga';
ReactGA.initialize('G-56R5954QCE');

const initialState = {
    options: {},
    filters: {},
    meta: {},
    hotel: undefined,
    isLoading: true
};

function decodeHTMLEntities(text) {
    let textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
}

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
    const [textOTP, setTextOTP] = useState('')
    const { access_token } = token
    const [paymentMethodSelected, setPaymentMethodSelected] = useState(0);
    const [contact, setContact] = useState({ ...user, phoneCode: '62', title: 'Mr' })

    const [countries, setCountries] = useState([]);
    const [forOthers, setForOthers] = useState(false);
    const [guest, setGuest] = useState({
        "type": "adult",
        "title": contact.title,
        "firstName": contact.first,
        "lastName": contact.last
    })

    const [openInfoRequest, setOpenInfoRequest] = useState(false)
    const [specialRequest, setSpecialRequest] = useState('')

    const [isLoading, setIsLoading] = useState(false)
    const [openCancellationPolicy, setOpenCancellationPolicy] = useState(false)

    const handleSubmitCheckout = () => {
        setIsLoading(true)
        const req = {
            "product": "hotel",
            "key": prebook.data.key,
            price: { ...price, discount: price.discount.grandTotal, insurance: 0, tax: price.tax },
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
                Swal.fire({
                    icon: 'success',
                    title: 'Informasi Pemesanan',
                    text: 'Kamar tersedia silahkan lanjut',
                    allowOutsideClick: false,
                    confirmButtonColor: '#0070ba',
                    confirmButtonText: 'Lanjut',
                }).then(respon => {
                    if (respon.isConfirmed) {
                        router.push(`/user/purchase/detail/${res.data.key}`);
                    }
                })
            } else {
                if (res.message == 'Gagal melakukan booking ke traveloka') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Informasi Pemesanan',
                        text: res.note,
                        allowOutsideClick: false,
                        confirmButtonColor: '#0070ba',
                        confirmButtonText: 'Ok, Kembali ke halaman sebelumnya',
                    }).then(res => {
                        if (res.isConfirmed) {
                            router.back()
                        }
                    })
                } else {
                    toast.error('Pesanan gagal dibuat, pastikan data lengkap')
                }
            }
            setIsLoading(false)
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
    const handleSearchCoupon = (value) => {
        const arr = new Set([...coupon]);
        arr.add(value);
        setCoupon([...arr])
        // handleOpenCoupon()
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

        ReactGA.pageview(window.location.pathname + window.location.search);

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
                    allowOutsideClick: false,
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
                }
                else {
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

    const cekKupon = (req) => {
        shopApi.cekCoupon(access_token, req).then(res => {
            if (res.success) {
                // setPrice(res.data)
                // // setLoading(false)
                console.log("coupon = " + JSON.stringify(res.data));
            } else {


                toast.error('Kupon sudah digunakan', { position: 'top-right', toastId: 'coupon' })

            }
        })
    }

    const handleAktifkanCoupon = (code, otp) => {
        shopApi.aktifCoupon(access_token, code, otp).then(res => {
            if (res.statusAktif) {
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
                    shopApi.getCountPrice(access_token, req).then(res => {
                        if (res.success) {
                            setPrice(res.data)
                            handleOpenCoupon()
                        } else {
                            setCoupon(coupon.filter(item => item !== res.note));
                            if (res.message.includes('coupon')) {
                                setCoupon([...coupon].filter(item => item !== res.note))
                                toast.error('Kupon sudah digunakan', { position: 'top-right', toastId: 'coupon' })
                            }
                        }
                    })
                }
            } else {
                toast.error('Kupon sudah digunakan', { position: 'top-right', toastId: 'coupon' })

            }
        })
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
                    cekKupon(textCoupon)
                    // setLoading(false)
                } else {
                    // handleRemoveCoupon(res.data)

                    setCoupon(coupon.filter(item => item !== res.note));
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
        <section className="my-5">
            <div className="container">
                <div className="my-3">
                    <h4 className="font-weight-bold">Pemesanan Akomodasi</h4>
                    <small>Pastikan kamu mengisi semua informasi di halaman ini benar sebelum melanjutkan ke pembayaran.</small>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-8">
                        <div className="card" style={{ borderRadius: '20px' }}>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h5 className="mb-0 font-weight-bold text-primary">
                                            <Icon icon="solar:city-line-duotone" className="mr-3" style={{fontSize: '32px'}} />
                                            <span className="text-dark">{hotel.name}</span>
                                        </h5>
                                        <div className="d-flex">
                                            <p className="my-3 namakamar mr-4">Tipe Kamar: <br /> <span className="font-weight-bold">{hotel.booked.option[0]?.name}</span></p>
                                            <p className="my-3 namakamar mr-4">Tipe Tempat Tidur: <br /> <span className="font-weight-bold">{hotel.booked.option[0]?.typeRoom}</span></p>
                                            <p className="my-3 namakamar mr-4">Tamu per kamar: <br /> <span className="font-weight-bold">{hotel?.booked?.traveller?.reduce((a, b) => (Number(a) + Number(b.adult) + Number(b.child) + Number(b.infant)), 0)} Tamu</span></p>
                                        </div>
                                        
                                        <p className="mb-2 ">
                                            <div className="d-inline-block">
                                                <Icon icon="openmoji:location-indicator-red" className="mr-2 text-danger" style={{ fontSize: '22px' }} />
                                                <span className="mt-1">{hotel.detail.address}</span>
                                            </div>
                                        </p>
                                    </div>
                                    <ImageContianer>
                                        <Image layout="fill" src={hotel.image} className="rounded image" />
                                    </ImageContianer>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-4">
                                        <strong><span>Check-in</span></strong>
                                        <div>
                                            <small className="mb-0 ckiNckoIndonesia">{hotel.booked.dateFrom}, Dari {hotel.detail.checkin}</small>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <strong><span>Check-out</span></strong>
                                        <div>
                                            <small className="mb-0 ckiNckoIndonesia">{hotel.booked.dateTo}, Sebelum {hotel.detail.checkout}</small>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <p className={`mb-1 ${hotel.booked.option[0]?.breakfastIncluded ? 'text-success' : 'text-secondary'} ml-2 mr-2`}>
                                            <Icon icon="fluent:food-24-regular" className="mr-2" />{hotel.booked.option[0]?.breakfastIncluded ? 'Sarapan Gratis' : 'Tanpa Sarapan'}
                                        </p>
                                        <p className={`mb-1 ${hotel.booked.option[0]?.wifiIncluded ? 'text-success' : 'text-secondary'} ml-2 mr-2`}>
                                            <Icon icon="mingcute:wifi-line" className="mr-2" />{hotel.booked.option[0]?.wifiIncluded ? 'WiFi Gratis' : 'Tidak Ada WiFi'}
                                        </p>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <p id="textmealname" className="mb-0 ">
                                            <strong>Customer Service 24/7</strong>
                                        </p>
                                        <small>Agen kami akan selalu tersedia untuk dihubungi kapanpun dibutuhkan.</small>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <p className={`mb-1 ${hotel.booked.option[0]?.refundIncluded ? 'text-success' : 'text-secondary'} ml-2 mr-2`}>
                                            <Icon icon="tabler:free-rights" className="mr-2" />{hotel.booked.option[0]?.refundIncluded ? 'Bisa Refund' : 'Tidak Bisa Refund'}
                                        </p>
                                        <p className={`mb-1 text-secondary ml-2 mr-2`}>
                                            <Icon icon="fluent-mdl2:date-time" className="mr-2" />Tidak Bisa Reschedule
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="alert my-4 alert-warning" style={{
                            borderRadius: '15px'
                        }}>
                            <h5 className="mb-1">
                                <Icon icon="ooui:alert" className="text-danger mr-3" />
                                <b>Informasi Penting</b>
                            </h5>
                            <hr />
                            <div>
                                <div>
                                    <b>Kebijakan Tambahan</b>
                                    <div dangerouslySetInnerHTML={{ __html: decodeHTMLEntities(hotel?.detail?.hotelPolicy) || '' }}></div>
                                </div>
                                <div>
                                    <div dangerouslySetInnerHTML={{ __html: decodeHTMLEntities(hotel?.detail?.checkInInstruction) || '' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="my-3">
                            <h5>Data Pemesan (untuk E-voucher)</h5>
                            <small>Isi semua kolom dengan benar untuk memastikan kamu dapat menerima voucher konfirmasi pemesanan di email yang dicantumkan.</small>
                        </div>
                        <div className="card" style={{ borderRadius: '20px' }}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" className="font-weight-bold">Title</label>
                                            <select name="title" value={contact?.title} onChange={handleChangeContact} id="title_guest" className="form-control title">
                                                <option value="Mr">Mr.</option>
                                                <option value="Mrs">Mrs.</option>
                                                <option value="Ms">Ms.</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" className="font-weight-bold">Nama Depan</label>
                                            <input name="first" value={contact?.first} onChange={handleChangeContact} type="text" className="textonly form-control firstnamecontact" required />
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" className="font-weight-bold">Nama Belakang</label>
                                            <input name="last" value={contact?.last} onChange={handleChangeContact} type="text" className="textonly form-control form-control lastnamecontact" required />
                                        </div>
                                    </div>
                                </div>
                                <small>Isi nama pemesan sesuai KTP/Paspor/SIM (tanpa tanda baca/gelar)</small><br /><br />
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" className="font-weight-bold">Nomor Handphone</label>
                                            <div className="input-group">
                                                <select value={contact?.phoneCode} onChange={handleChangeContact} name="phoneCode" className="form-control select2 pilihnegara" style={{ width: '30%' }}>
                                                    {countries?.map(item => (
                                                        <option value={item.phone}>( +{item.phone} ) - {item.country_name}</option>
                                                    ))}
                                                </select>
                                                <input value={contact?.phone} onChange={handleChangeContact} name="phone" type="text" className="numberonly form-control" style={{ width: '70%' }} defaultValue placeholder="masukan nomor telepon anda" />
                                                <small className="mt-2" style={{fontSize: '14px'}}>
                                                    Contoh: +62812345678, untuk Kode Negara (+62) dan No. Handphone 081234567
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" className="font-weight-bold">Email</label>
                                            <input name="email" value={contact?.email} onChange={handleChangeContact} type="text" className="textonly form-control form-control" defaultValue placeholder="masukan email anda" />
                                        </div>
                                    </div>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" checked={forOthers} className="custom-control-input sebagai-tamu" id="customCheck1" onClick={handleChangeForOther} />
                                    <label className="custom-control-label" htmlFor="customCheck1">Saya memesan untuk orang lain</label>
                                </div>
                            </div>
                        </div>
                        {forOthers &&
                            <div className="guest-container mb-2">
                                <div className="my-4">
                                    <h5>Nama lengkap tamu</h5>
                                </div>
                                <ul className="list-group mb-2" style={{ borderRadius: '20px' }}>
                                    <li className="list-group-item">
                                        <div className="form-row">
                                            <div className="col-2">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Title</label>
                                                    <select onChange={handleChangeGuest} className="form-control all_title title_" value={guest.title} name="title">
                                                        <option value="Mr">Mr.</option>
                                                        <option value="Mrs">Mrs.</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Nama Depan</label>
                                                    <input type="text" className="textonly form-control all_firstname firstname_" value={guest.firstName} name="firstName" onChange={handleChangeGuest} autoComplete="off" />
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Nama Belakang</label>
                                                    <input type="text" value={guest.lastName} onChange={handleChangeGuest} className="textonly form-control all_lastname lastname_" name="lastName" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        }
                        <br />
                        <div className="my-4">
                            <h5>Beri tahu di sini jika ada permintaan khusus</h5>
                            <small>Ketersediaan permintaanmu akan diinformasikan pada waktu check-in. Biaya tambahan mungkin akan dikenakan tapi kamu masih bisa membatalkannya nanti.</small>
                        </div>
                        <ul className="list-group" style={{ borderRadius: '20px' }}>
                            <li className="list-group-item">
                                <div className="my-2" id="special_request">
                                    <textarea onChange={(e) => setSpecialRequest(e.target.value)} className="form-control" rows={3} />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <div className="sticky-top20">
                            <div className="card" style={{ borderRadius: '20px' }}>
                                <div className="card-body">
                                    {contact?.role == 'corporate' ?
                                        <>
                                            <span> Company <br />
                                                <span className="mb-0 font-weight-bold text-primary">{contact.company?.name}</span>
                                            </span>
                                            <br /> <br />
                                            <span > Sisa Saldo <br />
                                                <span className="mb-0 font-weight-bold text-primary">Rp {contact.company.saldo.toLocaleString().replaceAll(',', '.')}</span>
                                            </span>
                                            <hr />
                                        </>
                                        :
                                        <></>
                                    }
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span><strong>Jumlah {hotel?.booked?.traveller?.length} Kamar</strong></span>
                                        <span className="harga_markup_for_midrans" style={{ position: 'absolute', right: '4%' }}><strong /></span><br />
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span>Jumlah Pembayaran</span>
                                        <span><strong className="text_fee">Rp{price?.subtotal.toLocaleString()}</strong></span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span>Biaya Penanganan</span>
                                        <span><strong className="text_fee">Rp{price?.fee.toLocaleString()}</strong></span>
                                    </div>
                                    <hr />
                                    {/* {contact?.role == 'user' ? */}
                                    <>
                                        <div id="coupon_checkout" className="d-flex justify-content-between align-items-center mb-2">
                                            <span>Kupon</span>
                                            <div>
                                                <button type="button" onClick={handleOpenCoupon} className="btn btn-sm btn-warning">
                                                    Gunakan Kupon </button>
                                            </div>
                                        </div>
                                        {price?.coupon.map(item => (
                                            <div className="d-flex justify-content-between">
                                                <span className="pb-2 text-danger">{item.name}</span>
                                                <p className="text-danger">- Rp{item.amount.toLocaleString()}<Icon style={{ cursor: 'pointer' }} icon={TimesCircle} onClick={() => handleRemoveCoupon(item)} /></p>
                                            </div>
                                        ))}
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <div className="text-danger font-weight-bold text-uppercase judul_point">Poin</div>
                                            <h6><strong className="total_poin">{price?.user?.point.toLocaleString()}</strong></h6>
                                        </div>
                                        {price?.point > 0 &&
                                            <div className="d-flex justify-content-end align-items-center mb-2">
                                                <h6><strong className="text-danger">-{price?.point.toLocaleString()}</strong></h6>
                                            </div>
                                        }
                                        <div className="kotakambilpoint">
                                            <input onClick={handleUsePoint} checked={point} type="checkbox" id="ambilpoint" className="mr-2" />
                                            <label className="font-weight-bold font-italic text-success" htmlFor="ambilpoint">Gunakan poin untuk potongan harga</label>
                                        </div>
                                    </>
                                    {/* :
                                        <></>
                                    } */}
                                    <hr />

                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span>Subtotal</span>
                                        <span><strong className="text_fee text-info">Rp{(price?.subtotal + price?.fee - price?.discount?.grandTotal).toLocaleString()}</strong></span>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <span>Pajak 1,1%</span>
                                        {price?.tax === 0 ?
                                            <>
                                                <span className="text_fee text-success"><strong>Include</strong></span>
                                            </>
                                            :
                                            <>
                                                <span className="text_fee"><strong>Rp{price?.tax.toLocaleString()}</strong></span>
                                            </>
                                        }
                                    </div>

                                    <hr />
                                    <div className="d-flex my-2 justify-content-between mt-2">
                                        <h4>Total</h4>
                                        <strong><h4 className="text-primary font-weight-bold">Rp{price?.total.toLocaleString()}</h4></strong>
                                    </div>
                                    <p className="mt-3">
                                        <div style={{
                                            cursor: 'pointer'
                                        }} onClick={() => setOpenCancellationPolicy(d => !d)}><strong><Icon icon={InfoIcon} className="mr-2 text-danger" /><span className="mt-1">Kebijakan Pembatalan & Reschedule</span></strong></div>
                                        <Collapse isOpen={openCancellationPolicy}>
                                            <p className="text-justify mt-3">
                                                Reservasi ini tidak bisa refund & tidak bisa reschedule.
                                            </p>
                                        </Collapse>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div>

            <ButtonChekout total={price?.total} isLoading={isLoading} onSubmit={handleSubmitCheckout} />

            <Modal isOpen={isOpenCoupon} toggle={handleOpenCoupon} centered size="lg">
                <ModalHeader toggle={handleOpenCoupon}>
                    <h5>Pilih kupon <Icon icon={QuestionIcon} /></h5>
                </ModalHeader>
                <ModalBody>
                    <div className="input-group mb-3">
                        <input type="text" value={textCoupon} onChange={(e) => setTextCoupon(e.target.value)} className="form-control" placeholder="Enter Code . . . " />
                        <div className="input-group-append">
                            <button onClick={() => handleSearchCoupon(textCoupon)} className="btn btn-outline-primary" type="button">
                                <Icon icon={SignAlt} />
                            </button>
                        </div>
                    </div>
                    <div className="container">
                        {price?.coupon.map(item => (
                            <div className="row border rounded">
                                <div className="col-3 d-flex bg-danger align-items-center justify-content-center">
                                    <h6 className="text-white">Potongan
                                        <h4>
                                            <small>Rp</small> <strong>{item.amount.toLocaleString()} </strong>
                                        </h4>
                                    </h6>
                                </div>
                                <div className="col-9 d-flex justify-content-between p-3">
                                    <div>
                                        <strong>{item.name.toUpperCase()}</strong> <br />
                                        {item.minimum_transaction > 0 &&
                                            <p>Min.Belanja Rp{item.minimum_transaction.toLocaleString()}</p>
                                        }

                                        {item.isPrivate ?

                                            <div className="input-group mb-3">
                                                <div className="input-group-append">
                                                    <button onClick={() => handleSearchCoupon(textCoupon)} type="button" className="btn btn-info" title="Kirim ulang OTP"><Icon icon="mdi:refresh" /></button>
                                                </div>
                                                <input type="text" onChange={(e) => setTextOTP(e.target.value)} className="form-control" placeholder="Masukan Kode OTP . . . " />
                                                <div className="input-group-append">
                                                    <button onClick={() => handleAktifkanCoupon(textCoupon, textOTP)} type="button" className="btn btn-primary" title="Klik untuk Aktifkan Kupon">Aktifkan</button>
                                                    <button onClick={() => handleRemoveCoupon(item)} type="button" className="ml-1 btn btn-danger" title="Hapus Kupon"><Icon icon={TrashIcon} /></button>
                                                </div>
                                            </div>
                                            :


                                            <div className="input-group mb-3">
                                                <div className="input-group-append">
                                                    <button onClick={() => handleSubmitCoupon(item.id.toString())} type="button" className="btn btn-primary" title="Gunakan Kupon">Gunakan</button>
                                                    <button onClick={() => handleRemoveCoupon(item)} type="button" className="ml-1 btn btn-danger" title="Hapus Kupon"><Icon icon={TrashIcon} /></button>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    {/* <div>
                                        <small>
                                            Hingga: {item.expired}
                                        </small>
                                        <p>
                                            {item.term}
                                        </p>
                                    </div> */}
                                </div>
                            </div>
                        ))}
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

        </section >

    );
}


const ImageContianer = styled.div`
    width: 100px;
    height: 100px;
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

export default HotelCheckout;