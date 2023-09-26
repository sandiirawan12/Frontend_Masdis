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
import userApi from "@/api/user";
import Swal from "sweetalert2";
import ButtonChekout from "../shared/ButtonChekout";

import ReactGA from 'react-ga';
ReactGA.initialize('G-56R5954QCE');

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

        shopApi.submitCheckoutVia(access_token, req).then(res => {
            if (res.success) {
                router.push(`/user/purchase/detail/${res.data.key}`);
            } else {
                toast.error('Pesanan gagal dibuat, pastikan data lengkap')
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
        shopApi.getPrebookHotelVia(access_token, { ...state.options, id: state.options.hotelId }).then(res => {
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
            shopApi.getCheckoutHotelVia(access_token, prebook.data).then(res => {
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
        <section className="my-3">
            <div className="container">
                <h5 className="font-weight-bold">Pemesanan Hotel</h5>
                <div className="row">
                    <div className="col-md-8">
                        <div className="card shadow-sm mb-2" style={{ borderRadius: '20px' }}>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h5 className="mb-0 font-weight-bold text-primary">{hotel.name}</h5>
                                        <p className="mb-2 namakamar">{hotel.booked.option[0]?.name}</p>
                                        <p className="mb-2 "><div className="d-inline-block" style={{ width: '20px', height: '20px', position: 'relative' }}>
                                            <Image src={'https://cdn.masterdiskon.com/masterdiskon/icon/fe/location.png'} layout='fill' />
                                        </div><span className="namakota">{
                                            hotel.detail.address}</span></p>
                                    </div>
                                    <ImageContianer>
                                        <Image layout="fill" src={hotel.image} className="rounded image" />
                                    </ImageContianer>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-6">
                                        <strong><span>Check-in</span></strong>
                                        <div>
                                            <p className="mb-0 ckiNckoIndonesia">{hotel.booked.dateFrom} - {hotel.booked.dateTo}</p>
                                            <p className="mb-2">Malam</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 offset-md-3">
                                        <strong><span>Jumlah Kamar</span></strong>
                                        <p className="mb-2 jumlahkamardantamu">{hotel?.booked?.traveller?.length} Kamar / {hotel?.booked?.traveller?.reduce((a, b) => (Number(a) + Number(b.adult) + Number(b.child) + Number(b.infant)), 0)} Tamu</p>
                                    </div>
                                    <div className="col-md-12 mt-4">
                                        <p id="textmealname" className="mb-0 ">
                                            <strong>Fasilitas</strong>
                                        </p>
                                        <p className="font-weight-bold text-danger">
                                            {hotel.booked.option[0].facilities}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="alert shadow-sm alert-warning" style={{
                            borderRadius: '15px'
                        }}>
                            <p className="mb-1">
                                {/* <i className="fa fa-exclamation-triangle" />  */}
                                <b>Perhatian</b></p>
                            <span>Pengisian nama harus sesuai dengan ID Card yang berlaku (KTP/Passport/KITAS). Master Diskon tidak bertanggung jawab atas kesalahan pengisian nama.</span>
                        </div>
                        <div className="card mb-2 shadow-sm" style={{ borderRadius: '20px' }}>
                            <div className="card-header" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px', background: '#0070BA', color: 'white' }}>
                                <p className="card-title mb-0"><b>Info Kontak (untuk E-ticket/Voucher)</b></p>
                            </div>
                            <div className="card-body">
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
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" checked={forOthers} className="custom-control-input sebagai-tamu" id="customCheck1" onClick={handleChangeForOther} />
                                    <label className="custom-control-label" htmlFor="customCheck1">Memesan untuk orang lain</label>
                                </div>
                            </div>
                        </div>
                        {forOthers &&
                            <div className="guest-container mb-2">
                                <ul className="list-group shadow mb-2" style={{ borderRadius: '20px' }}>
                                    <li className="list-group-item text-white font-weight-bold" style={{ background: '#0070BA' }}>
                                        Guest Kamar
                                    </li>
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
                        <ul className="list-group shadow-sm" style={{ borderRadius: '20px' }}>
                            <li className="list-group-item text-white" style={{
                                background: '#0070BA'
                            }}>
                                <span><b>Permintaan Khusus (opsional)</b>
                                    <button type="button" onClick={() => setOpenInfoRequest(or => !or)} className="btn btn-sm text-white float-right"><Icon icon={QuestionIcon} /></button> </span>
                                <Collapse isOpen={openInfoRequest} >
                                    <small>permintaan khusus atau fasilitas penyandang cacat (misalnya tempat tidur lipat, check-in terlambat, dan kamar penyandang cacat tidak dijamin. Jika Anda tidak menerima informasi apa pun dari properti, Anda mungkin harus menghubungi mereka secara langsung untuk mengonfirmasi. Properti mungkin mengenakan biaya untuk permintaan khusus tertentu.</small>
                                </Collapse>
                            </li>
                            <li className="list-group-item">
                                <div className="my-2" id="special_request">
                                    <textarea onChange={(e) => setSpecialRequest(e.target.value)} className="form-control" rows={3} />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <div className="sticky-top20">
                            <div className="card shadow-sm" style={{ borderRadius: '20px' }}>
                                <div className="card-header font-weight-bold text-white" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px', background: '#0070BA' }}>
                                    <span>Rincian Belanja</span>
                                </div>
                                <div className="card-body">

                                    {contact?.role == 'corporate' ?
                                        <>
                                            <span > Company <br />
                                                <span className="mb-0 font-weight-bold text-primary">{contact.company?.name}</span>
                                            </span><br />
                                            <span > Sisa Saldo <br />
                                                <span className="mb-0 font-weight-bold text-primary">Rp {contact.company.saldo.toLocaleString().replaceAll(',', '.')}</span>
                                            </span>
                                            <hr />
                                        </>
                                        :
                                        <></>
                                    }
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span><strong>Jumlah 1 Kamar</strong></span>
                                        <span className="harga_markup_for_midrans" style={{ position: 'absolute', right: '4%' }}><strong /></span><br />
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span><strong>Sub Total</strong></span>
                                        <span><strong className="text_fee">Rp{price?.subtotal.toLocaleString()}</strong></span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span><strong>Pajak</strong></span>
                                        <span className="text_fee"><strong>Rp{(price?.total - price?.subtotal).toLocaleString()}</strong></span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span><strong>Biaya Penanganan</strong></span>
                                        <span><strong className="text_fee">Rp{price?.fee.toLocaleString()}</strong></span>
                                    </div>

                                    {contact?.role == 'user' ?
                                        <>
                                            <div id="coupon_checkout" className="d-flex justify-content-between align-items-center mb-2">
                                                <span><strong>Kupon</strong></span>
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
                                                    <h6><strong className="text-danger">-{price?.point}</strong></h6>
                                                </div>
                                            }
                                            <div className="kotakambilpoint">
                                                <input onClick={handleUsePoint} checked={point} type="checkbox" id="ambilpoint" />
                                                <label className="font-weight-bold font-italic" htmlFor="ambilpoint">Gunakan poin untuk pembayaran</label>
                                            </div>
                                        </>
                                        :
                                        <></>
                                    }

                                    <hr />
                                    <div className="d-flex my-2 justify-content-between mt-2">
                                        <h5>Total</h5>
                                        <h4 id="total_teks" className="total_teks harga_terkini">Rp{price?.total.toLocaleString()}</h4>
                                    </div>
                                    <p>
                                        <div style={{
                                            cursor: 'pointer'
                                        }} onClick={() => setOpenCancellationPolicy(d => !d)}><strong>Kebijakan pembatalan <Icon icon={InfoIcon} /> </strong></div>
                                        <Collapse isOpen={openCancellationPolicy}>
                                            <p className="text-justify">
                                                {hotel?.detail?.cancellationPolicy}
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

        </section >

    );
}


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

export default HotelCheckout;