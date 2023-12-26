import { useEffect, useReducer, useRef, useState, useId } from 'react';
import Image from 'next/image';
import CardHotelDesktop from "../shared/CardHotel";
import CardHotelMobile from "@/components-mobile/shared/CardHotel";

import BedIcon from '@iconify/icons-fa-solid/bed';

import GoogleMapReact, { Marker, InfoWindow } from 'google-map-react';

import { Carousel } from 'react-responsive-carousel';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Icon } from '@iconify/react';
import { useMediaQuery } from "react-responsive";

import WidgetHotel from '../widgets/WidgetHotel';
import CardProductHotel from './CardProductHotel';
import CardProductHotelVia from './CardProductHotelVia';

import AboutAccommodation from '../shared/AboutAccommodation';
import HotelReview from './HotelReview';
import { useRouter } from 'next/router';

import queryString from 'query-string';
import { useSelector } from 'react-redux'
import shopApi from '@/api/shop';

import { toast } from 'react-toastify';
import Link from 'next/link';
import moment from 'moment';

import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";

import styled from 'styled-components';
import { BottomSheet, SheetHeader } from '@biotic-ui/bottom-sheet';
import classNames from 'classnames';

import ReactGA from 'react-ga';
ReactGA.initialize('G-56R5954QCE');


const initialState = {
    options: {},
    filters: {},
    meta: {},
    hotel: {},
    isLoading: true,
    isLoadingRoomVia: true,
    roomvia: {},
};

const markerStyleOK = {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 40
};

const markerStyle = {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 25
};

const renderClassTerdekat = (item) => {
    let arr = []
    for (let index = 0; index < item.starRating; index++) {
        arr[index] = index;
    }
    return arr.map(() => (
        <div style={{ width: '20px', height: '20px', position: 'relative', display: 'inline-block' }} className='mr-1 mb-2'>
            <Icon style={{ fontSize: '20px' }} icon="fluent-emoji-flat:star"></Icon>
        </div>
    ))
}

function parseQueryOptions(location) {

    const query = queryString.parse(location);

    const optionValues = {
        product: 'hotel',
        from: '',
        dateFrom: '',
        dateTo: '',
        room: '',
        childAge: [],
        adult: '1',
        keyword: '',
        child: '0',
        productId: '',
        infant: '0',
    };

    if (typeof query.from === "string") {
        optionValues.from = query.from
    }
    if (typeof query.keyword === "string") {
        optionValues.keyword = query.keyword
    }
    if (typeof query.dateFrom === "string") {
        optionValues.dateFrom = query.dateFrom
    }
    if (typeof query.dateTo === "string") {
        optionValues.dateTo = query.dateTo
    }
    if (typeof query.adult === "string") {
        optionValues.adult = query.adult
    }
    if (typeof query.child === "string") {
        optionValues.child = query.child
    }
    if (typeof query.childAge === "string") {
        if (query.childAge) {
            optionValues.childAge = [query.childAge]
        } else {
            optionValues.childAge = []
        }
    }
    if (typeof query.childAge === 'object') {
        optionValues.childAge = query.childAge
    }
    if (typeof query.room === "string") {
        optionValues.room = query.room
    }
    if (typeof query.productId === "string") {
        optionValues.productId = query.productId
    }

    return optionValues;
}

function parseQuery(location) {
    return [parseQueryOptions(location)];
}

function buildQuery(options) {
    const params = {};
    if (options.from !== "") {
        params.from = options.from
    }
    if (options.to !== "") {
        params.to = options.to
    }
    if (options.dateFrom !== "") {
        params.dateFrom = options.dateFrom
    }
    if (options.dateTo !== "") {
        params.dateTo = options.dateTo
    }
    if (options.adult !== "") {
        params.adult = options.adult
    }
    if (options.child !== "") {
        params.child = options.child
    }
    if (options.childAge !== '' || options.childAge !== []) {
        params.childAge = options.childAge
    }

    if (options.room !== "") {
        params.room = options.room
    }

    if (options.keyword !== "") {
        params.keyword = options.keyword
    }
    if (options.productId !== "") {
        params.productId = options.productId
    }

    return queryString.stringify(params, { encode: false });
}

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_HOTEL':
            return { ...state, isLoading: true }
        case 'FETCH_HOTEL_SUCCESS':
            return { ...state, hotel: action.payload, isLoading: false }
        case 'FETCH_HOTELVIA_SUCCESS':
            return { ...state, roomvia: action.payload, isLoading: false, isLoadingRoomVia: false }
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

function DetailHotel() {
    const bg = {
        overlay: {
            background: "#272e34"
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState, init);
    const { access_token } = useSelector(state => state.token);
    const { auth } = useSelector(state => state);
    const router = useRouter();

    const [showOtherImage, setShowOtherImage] = useState(false);
    const [indexSwiperActive, setIndexSwiperActive] = useState(0);
    const [imgSelected, setImgSelected] = useState(0);

    const [moreBreakfastInfo, setMoreBreakfastInfo] = useState(false);


    const [open, setOpen] = useState(false);

    const handleOpen = (index) => {
        // openMap
        setOpen(!open)
        setImgSelected(index)
    }

    const [childClicked, setChildClicked] = useState(null);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' });
    const CardHotel = isTabletOrMobile ? CardHotelMobile : CardHotelDesktop
    const [coordinates, setCoordinates] = useState({});
    const [openMap, setOpenMap] = useState(false);
    const handleOpenMap = () => {
        setOpenMap(!openMap)
    }

    const { hotel } = state;

    useEffect(() => {
        // document.title = hotel.name + ' -  Promo dan Diskon Spesial 2023';

        // ReactGA.pageview(window.location.pathname + window.location.search);

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
        dispatch({ type: 'FETCH_HOTEL' })
        shopApi.getDetailHotel(access_token, state.options)
            .then(res => {
                if (res.success) {
                    setCoordinates({ lng: Number(res.data?.detail.longitude), lat: Number(res.data?.detail.latitude) })
                    dispatch({
                        type: 'FETCH_HOTEL_SUCCESS',
                        payload: res.data
                    })

                    if (res.data.options.length < 1) {
                        setTimeout(() => {
                            shopApi.getDetailHotelVia(access_token, state.options)
                                .then(res => {
                                    if (res.success) {
                                        dispatch({
                                            type: 'FETCH_HOTELVIA_SUCCESS',
                                            payload: res.data
                                        })

                                    } else {
                                        toast.error('Kamar hotel tidak tersedia', { toastId: 'not-found' })
                                    }
                                }).catch(e => {
                                    toast.error('Kamar hotel tidak tersedia', { toastId: 'not-found' })
                                });
                        }, 2000);
                    }
                }
            }).catch(e => {
                toast.error('Kamar hotel tidak tersedia', { toastId: 'not-found' })
                setTimeout(() => {
                    router.back()
                }, 2000);
            });
    }, [state.options])


    // useEffect(() => {
    //     setTimeout(() => {
    //         shopApi.getDetailHotelVia(access_token, state.options).then(res => {
    //             if (res.success) {
    //                 dispatch({
    //                     type: 'FETCH_HOTELVIA_SUCCESS',
    //                     payload: res.data
    //                 })

    //             } else {
    //                 toast.error('Kamar hotel tidak tersedia', { toastId: 'not-found' })
    //             }
    //         })
    //     }, 2000);
    // }, [state.options])

    const handleChangeOptions = (options) => {
        dispatch({ type: 'SET_OPTIONS_VALUE', value: options })
    }


    const [popUpDetail, setPopUpDetail] = useState([]);
    const [propertyImage, setpropertyImage] = useState('');
    const [roomHotel, setroomHotel] = useState('');

    const [popUpImages, setpopUpImages] = useState("none");
    const [popUpTitleHotel, setPopUpTitleHotel] = useState("none");
    const [popUpRatingHotel, setPopUpRatingHotel] = useState("none");
    const [popUpPriceHotel, setPopUpPriceHotel] = useState();
    const [popUpPromoPriceHotel, setPopUpPromoPriceHotel] = useState();
    const [popUpIdHotel, setpopUpIdHotel] = useState();

    const [activeLink, setActiveLink] = useState('infoumum');

    const handleLinkClick = (id) => {
        setActiveLink(id);
    };

    const renderClass = () => {
        let arr = []
        for (let index = 0; index < hotel.class; index++) {
            arr[index] = index;
        }
        return arr.map(() => (
            <div style={{ width: '20px', height: '20px', position: 'relative', display: 'inline-block' }} className='mr-1 mb-2'>
                <Icon style={{ fontSize: '20px' }} icon="fluent-emoji-flat:star"></Icon>
            </div>
        ))
    }

    const ratingHotel = (idx) => {
        let arr = []
        for (let index = 0; index < idx; index++) {
            arr[index] = index;
        }
        return arr.map(() => (
            <div style={{ width: '20px', height: '20px', position: 'relative', display: 'inline-block' }} className='mr-1 mb-2'>
                <Icon style={{ fontSize: '20px' }} icon="fluent-emoji-flat:star"></Icon>
            </div>
        )
        )
    }

    function ReactTitle(text) {
        document.title = 'Harga ' + text?.accommodationType + ' ' + text.name + ' di ' + text.detail.city + ' - Booking Hotel Online Promo dan Diskon Spesial 2023';
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    function toDate(date) {
        var from = date.split("-")
        return new Date(from[2], from[1] - 1, from[0])
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

    const images = [...new Set([...hotel.detail.images, hotel.image])]
    const mainImg = images.filter((item, index) => index < 5)

    const handleShowImages = (index) => {
        if (typeof index === 'number') {
            setIndexSwiperActive(index);
        } else {
            setIndexSwiperActive(0)
        }
        setShowOtherImage(!showOtherImage)
    }

    const handlePropertyImages = (item) => {
        try {
            setpropertyImage(item.image)
            // setroomHotel(JSON.parse(item.propertyImages)[0].entries[0].url)
        } catch (error) {
            console.log('handlePropertyImages', error);
        }
    }

    const renderRekomendasi = (idx) => {
        let arr = []
        for (let index = 0; index < idx.length; index++) {
            arr[index] = index;
        }
        return arr.map(() => (
            <div style={{ width: '15px', height: '15px', position: 'relative', display: 'inline-block' }}>
                <Image src='https://cdn.masterdiskon.com/masterdiskon/icon/fe/star.png' layout='fill' objectFit='cover' />
            </div>
        )

        )
    }

    return (
        <section className="py-3" style={{ background: '#F5F6FA' }} id='scrollup'>
            <div className="container mt-5" id='infoumum'>
                <div className="tampungSumary mt-5">
                    <br />
                    <nav className="mb-3 bg-transparent">
                        <ol className="breadcrumb p-0 bg-transparent">
                            <li className="breadcrumb-item">
                                <Link href="/">
                                    <a className='text-primary'>Home</a>
                                </Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link href='/hotels'>
                                    <a className='text-primary'>Hotel</a>
                                </Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link href={`/product/hotel?${queryString.stringify({ ...state.options, keyword: hotel?.detail.country })}`}>
                                    <a className='text-primary'>{hotel?.detail.country}</a>
                                </Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link href={`/product/hotel?${queryString.stringify({ ...state.options, keyword: hotel?.detail.city })}`}>
                                    <a className='text-primary'>{hotel?.detail.city}</a>
                                </Link>
                            </li>
                            <li className="breadcrumb-item font-weight-bold" aria-current="page">{hotel.name}</li>
                        </ol>
                    </nav>

                    <nav className="navbar" style={{ position: 'fixed', top: 125, left: 0, right: 0, backgroundColor: '#1a83c8', zIndex: 100 }}>
                        <div className="container mt-2 mb-1">
                            <div className="d-flex justify-content-between align-items-center" style={{fontSize: '14px'}}>
                                <div className='px-1 pb-1'>
                                    <a
                                        style={{
                                            padding: '16px',
                                            textDecoration: 'none',
                                            borderBottom: activeLink === 'infoumum' ? '5px solid red' : 'none',
                                        }}
                                        className="font-weight-bold text-white"
                                        href='#infoumum'
                                        onClick={() => handleLinkClick('infoumum')}
                                    >
                                        Info Umum
                                    </a>
                                </div>
                                <div className='px-1 pb-1'>
                                    <a
                                        style={{
                                            padding: '16px',
                                            textDecoration: 'none', // Menghapus garis bawah bawaan dari tautan
                                            borderBottom: activeLink === 'kamar' ? '5px solid red' : 'none', // Ganti 'your-color' dengan warna yang Anda inginkan
                                        }}
                                        className="font-weight-bold text-white"
                                        href='#kamar'
                                        onClick={() => handleLinkClick('kamar')}
                                    >
                                        Kamar
                                    </a>
                                </div>
                                <div className='px-1 pb-1'>
                                    <a
                                        style={{
                                            padding: '16px',
                                            textDecoration: 'none', // Menghapus garis bawah bawaan dari tautan
                                            borderBottom: activeLink === 'facility' ? '5px solid red' : 'none', // Ganti 'your-color' dengan warna yang Anda inginkan
                                        }}
                                        className="font-weight-bold text-white"
                                        href='#facility'
                                        onClick={() => handleLinkClick('facility')}
                                    >
                                        Fasilitas
                                    </a>
                                </div>
                                <div className='px-1 pb-1'>
                                    <a
                                        style={{
                                            padding: '16px',
                                            textDecoration: 'none', // Menghapus garis bawah bawaan dari tautan
                                            borderBottom: activeLink === 'stayRules' ? '5px solid red' : 'none', // Ganti 'your-color' dengan warna yang Anda inginkan
                                        }}
                                        className="font-weight-bold text-white"
                                        href='#stayRules'
                                        onClick={() => handleLinkClick('stayRules')}
                                    >
                                        Kebijakan
                                    </a>
                                </div>
                                <div className='px-1 pb-1'>
                                    <a
                                        style={{
                                            padding: '16px',
                                            textDecoration: 'none', // Menghapus garis bawah bawaan dari tautan
                                            borderBottom: activeLink === 'guestReviews' ? '5px solid red' : 'none', // Ganti 'your-color' dengan warna yang Anda inginkan
                                        }}
                                        className="font-weight-bold text-white"
                                        href='#guestReviews'
                                        onClick={() => handleLinkClick('guestReviews')}
                                    >
                                        Review
                                    </a>
                                </div>
                                <div className="font-weight-bold px-2" style={{ cursor: 'pointer' }}>
                                    <a href='#scrollup' className='text-white'>Kembali ke Atas <Icon icon="tabler:arrow-big-up-line" className='ml-1' /></a>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <div className="row">
                        <div className="col-md-3 d-flex flex-column">
                            <div className="card" style={{
                                borderRadius: '20px',
                                background: 'white'
                            }}>
                                <div className="card-body">
                                    <label className='font-weight-bold text-primary'>Kota</label> <br />
                                    <small style={{marginTop: '5px', fontSize: '16px'}}>{hotel?.detail?.city}, {hotel?.detail?.country}</small>
                                    <hr />
                                    <label className='font-weight-bold text-primary'>Check In</label> <br />
                                    <small style={{ marginTop: '5px', fontSize: '16px' }}>{moment(toDate(state.options.dateFrom)).format('dddd, DD MMM YYYY')}</small>
                                    <hr />
                                    <label className='font-weight-bold text-primary'>Check Out</label> <br />
                                    <small style={{ marginTop: '5px', fontSize: '16px' }}>{moment(toDate(state.options.dateTo)).format('dddd, DD MMM YYYY')}</small>
                                    <hr />
                                    <div className='row'>
                                        <div className="col-md-6">
                                            <label className='font-weight-bold text-primary'>Tamu</label> <br />
                                            <small style={{ marginTop: '5px', fontSize: '16px' }}>
                                                {Number(state.options.adult || 0) > 0 && `${state.options.adult} Dewasa`}{Number(state.options.child || 0) > 0 && `, ${state.options.child} Anak-anak`}
                                            </small>
                                        </div>
                                        <div className="col-md-6">
                                            <label className='font-weight-bold text-primary'>Jumlah</label> <br />
                                            <small style={{ marginTop: '5px', fontSize: '16px' }}>
                                                {state.options.room} Kamar
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section className="card mt-3 d-flex flex-column" style={{ flex: 1, borderRadius: '20px', background: 'white' }}>
                                <div className="card-body flex-fill">
                                    <div>
                                        <h6 className='font-weight-bold'>Fasilitas Utama</h6>
                                        <div>
                                            <div className='mb-1'>
                                                <Icon icon="iconoir:air-conditioner"
                                                    style={{ fontSize: '18px' }}
                                                    className={classNames(`mr-3 text-secondary`, {
                                                        'text-primary': hotel?.detail?.fasilitasUtama?.acIncluded
                                                    })} />
                                                <span>AC</span>
                                            </div>
                                            <div className='mb-1'>
                                                <Icon icon="tabler:parking"
                                                    style={{ fontSize: '18px' }}
                                                    className={classNames(`mr-3 text-secondary`, {
                                                        'text-primary': hotel?.detail?.fasilitasUtama?.parkingIncluded
                                                    })} />
                                                <span>Parkir</span>
                                            </div>
                                            <div className='mb-1'>
                                                <Icon icon="mingcute:wifi-line"
                                                    style={{ fontSize: '18px' }}
                                                    className={classNames(`mr-3 text-secondary`, {
                                                        'text-primary': hotel?.detail?.fasilitasUtama?.wifiIncluded
                                                    })} />
                                                <span>WiFi</span>
                                            </div>
                                            <div className='mb-1'>
                                                <Icon icon="fluent:food-16-regular"
                                                    style={{ fontSize: '18px' }}
                                                    className={classNames(`mr-3 text-secondary`, {
                                                        'text-primary': hotel?.detail?.fasilitasUtama?.restoranIncluded
                                                    })} />
                                                <span>Restoran</span>
                                            </div>
                                            <div className='mb-1'>
                                                <Icon icon="ep:service"
                                                    style={{ fontSize: '18px' }}
                                                    className={classNames(`mr-3 text-secondary`, {
                                                        'text-primary': hotel?.detail?.fasilitasUtama?.resepsionisIncluded
                                                    })} />
                                                <span>Resepsionis 24 Jam</span>
                                            </div>
                                            <div className='mb-1'>
                                                <Icon icon="ph:elevator"
                                                    style={{ fontSize: '18px' }}
                                                    className={classNames(`mr-3 text-secondary`, {
                                                        'text-primary': hotel?.detail?.fasilitasUtama?.liftIncluded
                                                    })} />
                                                <span>Lift</span>
                                            </div>
                                            <div className='mb-1'>
                                                <Icon icon="cil:pool"
                                                    style={{ fontSize: '18px' }}
                                                    className={classNames(`mr-3 text-secondary`, {
                                                        'text-primary': hotel?.detail?.fasilitasUtama?.poolIncluded
                                                    })} />
                                                <span>Kolam Renang</span>
                                            </div>
                                            <div className='mb-1'>
                                                <Icon icon="bx:cctv"
                                                    style={{ fontSize: '18px' }}
                                                    className={classNames(`mr-3 text-secondary`, {
                                                        'text-primary': hotel?.detail?.fasilitasUtama?.securityIncluded
                                                    })} />
                                                <span>Keamanan</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="card mt-3 d-flex flex-column" style={{ flex: 1, borderRadius: '20px', background: '#0070BA' }}>
                                <div className="card-body text-white flex-fill">
                                    <div>
                                        <label className='font-weight-bold d-block mb-0'>Breakfast Info</label>
                                        <hr />
                                        <div
                                            style={{
                                                display: '-webkit-box',
                                                WebkitBoxOrient: 'vertical',
                                                ...!moreBreakfastInfo && {
                                                    WebkitLineClamp: 5,
                                                    overflow: 'hidden'
                                                }
                                            }}
                                            className='mb-2'
                                        >
                                            <ul style={{marginLeft: '-15px'}}>
                                                {hotel?.detail?.breakfastInfo.map(item => (
                                                    <li key={item.id}>
                                                        {item.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        {hotel?.detail?.breakfastInfo.map(item => (
                                            item.name
                                        )).toString().replaceAll(',', ', ').length > 75 &&
                                            <small onClick={() => setMoreBreakfastInfo(v => !v)} style={{
                                                cursor: 'pointer',
                                                fontSize: '15px',
                                            }} className='font-weight-bold'>
                                                {!moreBreakfastInfo ? 'Lihat Semua' : 'Lihat Sedikit'}</small>
                                        }
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col-md-9 d-flex flex-column">
                            <div className="row d-flex align-items-center">
                                <div className='col-7 mt-2'>
                                    <h4 className='font-weight-bold m-0'>{hotel.name}</h4> {ReactTitle(hotel)}
                                    <span style={{ textTransform: 'uppercase' }} className={`badge badge-lg badge-danger text-white mt-2 mr-3`}>
                                        {hotel?.accommodationType}
                                    </span>
                                    {renderClass()}
                                </div>
                                <div className='col-5 text-right'>
                                    <div className='d-flex justify-content-end'>
                                        <div>
                                            <small>Harga / kamar / malam mulai dari</small> <br />
                                            {Number(hotel.price) == 0 ?
                                                <>
                                                    <h5 className="font-weight-bold my-1 text-primary">Lihat ketersediaan</h5>
                                                </>
                                                :
                                                <>
                                                    <h5 className='font-weight-bold my-1 text-primary'>Rp {hotel.price.toLocaleString().replaceAll(',', '.')}</h5>
                                                </>
                                            }
                                            <a
                                                className="btn btn-sm btn-danger font-weight-bold text-white mt-2"
                                                href='#kamar'
                                            >
                                                Pilih Kamar
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className='my-3' onClick={handleOpenMap}>
                                        <p className="mb-0 text-secondary">
                                            <div className="d-inline-block mr-2" style={{ width: '20px', height: '20px', position: 'relative' }}>
                                                <Icon style={{ fontSize: '20px' }} icon="openmoji:location-indicator-red" />
                                            </div>
                                            <span className="mt-1">{hotel.detail.address}, {hotel.detail.city}, {hotel.detail.country}</span>
                                            <p style={{ cursor: 'pointer', }} className="text-primary font-weight-bold">Tampilkan Peta</p>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div>
                                        <h6 className="d-flex justify-content-end align-items-start">
                                            <span className="text-grey " style={{
                                                fontSize: '12px',
                                                marginRight: '5px'
                                            }}> <span className=" font-weight-bold" style={{ fontSize: '15px', }} >{hotel.reviewScore >= 9 ? 'Superb' : (hotel.reviewScore >= 8 ? 'Impressive' : hotel.reviewScore >= 7 ? 'Convenient' : hotel.reviewScore >= 6 ? 'Good' : 'Review Score')}</span>
                                                <br /> Reviews
                                            </span>
                                            <span className={`badge badge-md text-white ml-2`} style={{ height: '30px', fontSize: '15px', padding: '6px', background: '#003896' }}>{hotel.reviewScore}</span>
                                        </h6>
                                        {Number(hotel.reviewScore) == 0 &&
                                            <span>Unrated</span>
                                        }
                                   </div>
                                </div>
                            </div>

                            <div className="photo" style={{ cursor: 'pointer', }} >
                                <div className="photo-grid c-4">

                                    {mainImg.map((item, index) => {
                                        if (index === 0) {
                                            return <div alt={hotel.name} onClick={() => handleOpen(index)} className="photo-grid__main h-2 w-2">
                                                <div className="image">
                                                    <img alt={hotel.name} src={item} />
                                                </div>
                                            </div>
                                        } else {
                                            return <div className="photo-grid__item">
                                                <div className="image" onClick={() => handleOpen(index)}>
                                                    <img alt={hotel.name} src={item} />
                                                </div>
                                                {(index === mainImg.length - 1 && images.length > 5) &&
                                                    <div onClick={() => handleOpen(0)} className="text"><div className="text__wrapper font-weight-bold"><span>Lihat semua foto</span></div></div>
                                                }
                                                {/* handleShowImages */}
                                            </div>
                                        }
                                    })}

                                </div>
                            </div>

                            <Modal id='carousel-image' toggle={handleOpen} isOpen={open} size="lg" >
                                <ModalBody className='position-relative'>
                                    <h5 className='position-absolute' onClick={handleOpen} style={{
                                        right: '3px', top: '0', cursor: 'pointer', zIndex: '1'
                                    }}>
                                        <i class="fas fa-times-circle    "></i>
                                    </h5>
                                    <Carousel selectedItem={imgSelected}>
                                        {images?.map(item => (
                                            <div>
                                                <img src={item} />
                                            </div>
                                        ))}
                                    </Carousel>

                                </ModalBody>
                            </Modal>

                            <Modal toggle={handleOpenMap} isOpen={openMap} size="xl" styles={bg} >
                                <ModalBody styles={bg}>
                                    <div className="col-12">
                                        {!state.isLoading &&
                                            <div style={{ height: "90vh", width: "100%" }}>
                                                <div style={{ background: "#FFF", position: "absolute", width: 330, height: "auto", zIndex: 100, padding: '20px', display: (popUpTitleHotel == 'none' ? 'none' : 'block') }}>
                                                    <div>
                                                        <div className="d-flex row align-items-center">
                                                            <div className='col-3'>
                                                                {popUpImages === 'none' ?
                                                                    <div style={{
                                                                        width: '85px', height: '85px', position: 'relative', display: 'inline-block'
                                                                    }}>
                                                                        <Image src={'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20017895-7283d6800c301956dd11d1063ad78168.jpeg?tr=q-40,w-740,h-465&_src=imagekit'} layout='fill' />
                                                                    </div>
                                                                    :
                                                                    <div style={{position: 'relative', display: 'inline-block'}}>
                                                                        <img src={propertyImage} alt={`Gambar ${popUpTitleHotel}`} style={{ width: '85px', height: '85px', borderRadius: '15px', }} />
                                                                    </div>
                                                                }
                                                            </div>
                                                            <div className='col-9'>
                                                                <div className='px-3'>
                                                                    <h6 className='font-weight-bold m-0'>{(popUpTitleHotel != 'none' ? popUpTitleHotel : "Masterdiskon")}</h6>
                                                                    {ratingHotel(popUpRatingHotel)}
                                                                    <br />
                                                                    <span className={`badge badge-sm text-white mr-1`} style={{ padding: '4px', fontSize: '12px', background: '#bb00b0' }}>{popUpDetail?.propertyType}</span>

                                                                    <h6 className="d-flex justify-content-between align-items-start mt-2">
                                                                        <span className="text-grey " style={{
                                                                            fontSize: '12px',
                                                                            marginRight: '5px'
                                                                        }}> <span className=" font-weight-bold" style={{ fontSize: '15px', }} >{popUpDetail.reviewScore >= 9 ? 'Superb' : (popUpDetail.reviewScore >= 8 ? 'Impressive' : popUpDetail.reviewScore >= 7 ? 'Convenient' : popUpDetail.reviewScore >= 6 ? 'Good' : 'Review Score')}</span>
                                                                            <br /> Reviews
                                                                        </span>
                                                                        <span className={`badge badge-md text-white ml-2`} style={{ height: '30px', fontSize: '15px', padding: '6px', background: '#003896' }}>{popUpDetail.reviewScore}</span>
                                                                    </h6>
                                                                    {Number(popUpDetail.reviewScore) == 0 &&
                                                                        <span>Unrated</span>
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 p-0">
                                                            <p className="mb-0 text-secondary">
                                                                <div className="d-inline-block mr-2" style={{ width: '20px', height: '20px', position: 'relative' }}>
                                                                    <Icon style={{ fontSize: '20px' }} icon="openmoji:location-indicator-red" />
                                                                </div>
                                                                <small className="mt-1">{popUpDetail.address}, {popUpDetail.city}, {popUpDetail.country}</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className='d-flex justify-content-between'>
                                                        <div>
                                                            {popUpPriceHotel != "Rp0" ? <>
                                                                <small> 1 night, 2 adults</small> </> : ''
                                                            }
                                                            {popUpPromoPriceHotel?.isPromo &&
                                                                <h6 className="text-danger"><s>{popUpPriceHotel}</s></h6>
                                                            }
                                                            {popUpPriceHotel != "Rp0" ?
                                                                <h5 className="mb-0 text-primary font-weight-bold">{popUpPromoPriceHotel}</h5>
                                                                :
                                                                <h5 className="mb-0 mt-2 text-danger font-weight-bold">Full Booking</h5>
                                                            }
                                                        </div>
                                                        <div className="mb-0 mr-3 mt-1">
                                                            <Link href={`/product/hotel/detail?${queryString.stringify({ ...state.options, productId: popUpIdHotel })}`} >
                                                                <a className="btn font-weight-bold btn-primary" target="_blank">Kunjungi</a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <GoogleMapReact
                                                    bootstrapURLKeys={{ key: "AIzaSyC_O0-LKyAboQn0O5_clZnePHSpQQ5slQU" }}
                                                    defaultCenter={coordinates}
                                                    center={coordinates}
                                                    defaultZoom={16}
                                                    margin={[20]}
                                                    debounced={true}
                                                    options={''}
                                                    onChange={e => {
                                                        setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                                                    }}
                                                    onChildClick={child => { setChildClicked(child) }}
                                                >
                                                    {hotel.recommendasiHotelNew?.map(item => {
                                                        return (
                                                            <div key={1} lng={Number(item.longitude)} lat={Number(item.latitude)} title={item.name + "\n" + (item.starRating > 0 ? (item.starRating + "star") : "") + "\n" + (item.promoPrice > 0 ? 'Rp' + item.promoPrice.toLocaleString().replaceAll(',', '.') : (item.price > 0 ? 'Rp' + item.price.toLocaleString().replaceAll(',', '.') : 'Full Booking'))} onClick={() => (handlePropertyImages(item), setPopUpDetail(item), setPopUpTitleHotel(item.name), setPopUpRatingHotel(item.starRating), setpopUpImages(item.images), setpopUpIdHotel(item.hotelId), setPopUpPriceHotel("Rp" + item.price.toLocaleString().replaceAll(',', '.')), setPopUpPromoPriceHotel("Rp" + item.promoPrice.toLocaleString().replaceAll(',', '.')))} >
                                                                {Number(item.longitude) === Number(hotel.detail.longitude) ?
                                                                    <>{item.price > 0 ?
                                                                        <img style={markerStyle} src={"https://toppng.com/uploads/preview/simple-location-map-pin-icon-blue-location-icon-11562928973mg6jeytef4.png"} />
                                                                        :
                                                                        <img style={markerStyle} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Map_pin_icon.svg/564px-Map_pin_icon.svg.png"} />
                                                                    }
                                                                        <PlaceStyled className='active' lng={Number(hotel.detail.longitude)} lat={Number(hotel.detail.latitude)} style={{ color: '#FFF', padding: 5, marginTop: -10, backgroundColor: '#E0A800', borderWidth: 0 }}>
                                                                            <div className='label row' >
                                                                                <> <span style={{ color: '#FFF', fontSize: '14px', }}> <Icon icon={BedIcon} className="ml-4" /> </span> </>
                                                                                <>
                                                                                    <span style={{ color: '#FFF', fontSize: '14px', marginLeft: '5px', display: item.price > 0 ? 'block' : 'none' }}> Rp{item.promoPrice.toLocaleString().replaceAll(',', '.')}</span>
                                                                                    <span style={{ color: '#FFF', fontSize: '14px', marginLeft: '5px', display: item.price < 1 ? 'block' : 'none' }}> Full Booking</span>
                                                                                </>
                                                                            </div>
                                                                        </PlaceStyled>
                                                                    </>
                                                                    :
                                                                    <>{item.price > 0 ?
                                                                        <img style={markerStyle} src={"https://toppng.com/uploads/preview/simple-location-map-pin-icon-blue-location-icon-11562928973mg6jeytef4.png"} />
                                                                        :
                                                                        <img style={markerStyle} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Map_pin_icon.svg/564px-Map_pin_icon.svg.png"} />
                                                                    }
                                                                        <PlaceStyled className='active' lng={Number(hotel.detail.longitude)} lat={Number(hotel.detail.latitude)} style={{ color: '#FFF', padding: 5, marginTop: -8, backgroundColor: item.price > 0 ? '#005EAA' : '#C74545', borderWidth: 0 }}>
                                                                            <div className='label row' >
                                                                                <> <span style={{ color: '#FFF', fontSize: '12px', }}> <Icon icon={BedIcon} className="ml-4" /> </span> </>
                                                                                <>
                                                                                    <span style={{ color: '#FFF', fontSize: '13px', marginLeft: '5px', display: item.price > 0 ? 'block' : 'none' }}> Rp{item.promoPrice.toLocaleString().replaceAll(',', '.')}</span>
                                                                                    <span style={{ color: '#FFF', fontSize: '13px', marginLeft: '5px', display: item.price < 1 ? 'block' : 'none' }}> Full Booking</span>
                                                                                </>
                                                                            </div>
                                                                        </PlaceStyled>
                                                                    </>
                                                                }
                                                            </div>
                                                        );
                                                    })}
                                                </GoogleMapReact>
                                            </div>
                                        }
                                    </div>
                                </ModalBody>
                            </Modal>
                            <CardDescriptionStyled className="card mt-2">
                                <div className="card-body">
                                    <p className='font-weight-bold'>Deskripsi</p>
                                    <p style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: hotel?.detail.description }}></p>
                                </div>
                            </CardDescriptionStyled>
                        </div>
                        <div className="col-md-12 mt-3" id='kamar'>
                            <WidgetHotel isDetail={true} productId={state.options.productId} handleChangeOptions={handleChangeOptions} options={state.options} />
                        </div>
                        <section className="w-100 mt-3" >
                            <div className="container mb-3">
                                <div className='my-3'>
                                    <h5 className='font-weight-bold'>
                                        Tipe Kamar yang Tersedia di {hotel.name}
                                    </h5>
                                </div>
                                <div className="col-12 align-items-center justify-content-center pb-1 pt-3 rounded" style={{ background: '#015386', boxShadow: '-1px 3px 11px -7px rgba(156,156,156,0.75)' }}>
                                    <p className="text-white font-weight-bold" style={{ fontSize: '14px' }}>
                                        <Icon icon="material-symbols:rewarded-ads-rounded" className="mr-2" style={{ fontSize: '20px' }}></Icon>
                                        Pesan di Masterdiskon untuk mendapatkan lebih banyak Promo dan pengalaman menginap yang lebih menyenangkan!
                                    </p>
                                </div>
                           </div>
                            {hotel?.options.length > 0 ? hotel?.options?.map(item => (
                                <div className="col-12 mb-3">
                                    <CardProductHotel hotelKey={hotel.key} options={state.options} room={item} />
                                </div>
                            ))
                            :
                            (state.isLoadingRoomVia ?
                                <div className="col-12 text-center my-5">
                                    <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/pulse-spinner.svg" />
                                    <h4>Silakan tunggu, kami sedang memeriksa ketersediaan dan harga kamar.</h4>
                                </div>
                                :
                                    (state.roomvia?.options?.length > 0 ? state.roomvia?.options?.map(item => (
                                        <div className="col-12 mb-3">
                                            <CardProductHotelVia hotelKey={state.roomvia.key} dateTo={state.options.dateTo} dateFrom={state.options.dateFrom} options={state.options} imgUtama={mainImg[0]} jmlRoom={state.options.room} room={item} detailVia={state.roomvia} />
                                        </div>
                                    ))
                                    :
                                    <div className="col-12 text-center my-5">
                                        <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/no-room.svg" style={{
                                            width: '100%', height: "280px"
                                        }} />
                                        <h5>Kamar tidak tersedia  </h5>
                                    </div>
                                )
                            )
                        }
                        </section>
                        <section className="col-md-12 mt-3" id='facility'>
                            <div className="card" style={{ borderRadius: '20px', boxShadow: '-1px 3px 11px -7px rgba(156,156,156,0.75)' }}>
                                <div className="card-header text-dark" style={{ borderTopRightRadius: '20px', borderTopLeftRadius: '20px' }}>
                                    <span className="card-title font-weight-bold">Semua Fasilitas</span>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <p className='font-weight-bold'>
                                                <Icon icon="solar:donut-line-duotone" className='text-primary mr-3' style={{ fontSize: '24px' }} />
                                                <span className='mt-1'>Makanan dan Minuman</span>
                                            </p>
                                            <ul style={{ marginLeft: '-15px' }}>
                                                {hotel?.detail?.breakfastInfo.map(item => (
                                                    <li key={item.id}>
                                                        {item.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <p className='font-weight-bold'>
                                                <Icon icon="solar:bed-line-duotone" className='text-primary mr-3' style={{ fontSize: '24px' }} />
                                                <span className='mt-1'>Fasilitas Kamar</span>
                                            </p>
                                            <ul style={{ marginLeft: '-15px' }}>
                                                {hotel?.detail?.facilityRoom ?
                                                    <>
                                                        {hotel?.detail?.facilityRoom.map(item => (
                                                            <li key={item.id}>
                                                                {item.name}
                                                            </li>
                                                        ))}
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                                }
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <p className='font-weight-bold'>
                                                <Icon icon="solar:city-line-duotone" className='text-primary mr-3' style={{ fontSize: '24px' }} />
                                                <span className='mt-1'>Fasilitas Publik</span>
                                            </p>
                                            <ul style={{ marginLeft: '-15px' }}>
                                                {hotel?.detail?.facilityPublic ?
                                                    <>
                                                        {hotel?.detail?.facilityPublic.map(item => (
                                                            <li key={item.id}>
                                                                {item.name}
                                                            </li>
                                                        ))}
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                                }
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <p className='font-weight-bold'>
                                                <Icon icon="solar:shop-line-duotone" className='text-primary mr-3' style={{ fontSize: '24px' }} />
                                                <span className='mt-1'>Fasilitas Terdekat</span>
                                            </p>
                                            <ul style={{ marginLeft: '-15px' }}>
                                                {hotel?.detail?.facilityNearby ?
                                                    <>
                                                        {hotel?.detail?.facilityNearby.map(item => (
                                                            <li key={item.id}>
                                                                {item.name}
                                                            </li>
                                                        ))}
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                                }
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <p className='font-weight-bold'>
                                                <Icon icon="solar:delivery-line-duotone" className='text-primary mr-3' style={{ fontSize: '24px' }} />
                                                <span className='mt-1'>Servis Property</span>
                                            </p>
                                            <ul style={{ marginLeft: '-15px' }}>
                                                {hotel?.detail?.propertyService ?
                                                    <>
                                                        {hotel?.detail?.propertyService.map(item => (
                                                            <li key={item.id}>
                                                                {item.name}
                                                            </li>
                                                        ))}
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                                }
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <p className='font-weight-bold'>
                                                <Icon icon="solar:qr-code-line-duotone" className='text-primary mr-3' style={{ fontSize: '24px' }} />
                                                <span className='mt-1'>Fasilitas Umum</span>
                                            </p>
                                            <ul style={{ marginLeft: '-15px' }}>
                                                {hotel?.detail?.facilityUmum ?
                                                    <>
                                                        {hotel?.detail?.facilityUmum.map(item => (
                                                            <li key={item.id}>
                                                                {item.name}
                                                            </li>
                                                        ))}
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                                }
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <p className='font-weight-bold'>
                                                <Icon icon="solar:case-line-duotone" className='text-primary mr-3' style={{ fontSize: '24px' }} />
                                                <span className='mt-1'>Fasilitas Bisnis</span>
                                            </p>
                                            <ul style={{ marginLeft: '-15px' }}>
                                                {hotel?.detail?.facilityBisnis ?
                                                    <>
                                                        {hotel?.detail?.facilityBisnis.map(item => (
                                                            <li key={item.id}>
                                                                {item.name}
                                                            </li>
                                                        ))}
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                                }
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <p className='font-weight-bold'>
                                                <Icon icon="solar:bus-line-duotone" className='text-primary mr-3' style={{ fontSize: '24px' }} />
                                                <span className='mt-1'>Transportasi</span>
                                            </p>
                                            <ul style={{ marginLeft: '-15px' }}>
                                                {hotel?.detail?.propertyTransportasi ?
                                                    <>
                                                        {hotel?.detail?.propertyTransportasi.map(item => (
                                                            <li key={item.id}>
                                                                {item.name}
                                                            </li>
                                                        ))}
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                                }
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <p className='font-weight-bold'>
                                                <Icon icon="solar:routing-line-duotone" className='text-primary mr-3' style={{ fontSize: '24px' }} />
                                                <span className='mt-1'>Jasa Antar Jemput</span>
                                            </p>
                                            <ul style={{ marginLeft: '-15px' }}>
                                                {hotel?.detail?.facilityTransService ?
                                                    <>
                                                        {hotel?.detail?.facilityTransService.map(item => (
                                                            <li key={item.id}>
                                                                {item.name}
                                                            </li>
                                                        ))}
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                                }
                                            </ul>
                                        </div>
                                   </div>
                                </div>
                            </div >
                        </section>
                        <section id='stayRules' className="col-md-12 mt-4">
                            <AboutAccommodation hotel={hotel} />
                        </section>
                        <section className="col-md-12 my-4">
                            <div className='mt-3'>
                                <h4 className='font-weight-bold'>
                                    <Icon icon="solar:bed-line-duotone" className='mr-2 text-primary' /> Akomodasi Lainnya yang Mungkin Kamu Suka
                                </h4>
                                <small>Akomodasi serupa yang dipilih tamu lain sebagai tempat menginap</small>
                            </div>
                            <Swiper className='mt-3 p-1' slidesPerView={isTabletOrMobile ? 2.5 : 5}
                                style={{ padding: '0 0 10px 0' }}
                                spaceBetween={10}>
                                {hotel.recommendasiHotelNew?.map((item) => (
                                    <SwiperSlide key={item.name}>
                                        <Link href={`/product/hotel/detail?${queryString.stringify({ ...state.options, productId: item.hotelId })}`}>
                                            <a target="_blank">
                                                <CardStyle className="card" img={item.image} style={{
                                                    boxShadow: '-1px 3px 11px -7px rgba(156,156,156,0.75)'
                                                }} alt='Image Masterdiskon'>
                                                    <div className="d-flex flex-column justify-content-between">
                                                        <CardImage image={(item.image != null ? item.image : 'https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/no-room.svg')}>
                                                            <h5 className='font-weight-bold label-name p-2' style={{ display: 'none' }}>
                                                                {item.name}
                                                            </h5>
                                                        </CardImage>
                                                        <div className='text-dark label-price p-2' style={{ marginBottom: '-0px' }}>
                                                            <p className="font-weight-bold mb-1 text-primary label-price__text" style={{
                                                                display: '-webkit-box',
                                                                WebkitLineClamp: '2',
                                                                WebkitBoxOrient: 'vertical',
                                                                overflow: 'hidden',
                                                                height: isTabletOrMobile ? '37px' : '50px',
                                                            }}>{item.name}</p>
                                                            {renderClassTerdekat(item)}
                                                            <h6 className="d-flex justify-content-between align-items-center mt-1 mb-1">
                                                                <span className="text-grey " style={{
                                                                    fontSize: '12px',
                                                                    marginRight: '15px'
                                                                }}> <span className=" font-weight-bold" style={{ fontSize: '15px', }} >{item.reviewScore >= 9 ? 'Superb' : (item.reviewScore >= 8 ? 'Impressive' : item.reviewScore >= 7 ? 'Convenient' : item.reviewScore >= 6 ? 'Good' : 'Review Score')}</span>
                                                                    <br /> Reviews
                                                                </span>
                                                                <div>
                                                                    <span className={`badge badge-sm text-white mr-1`} style={{ padding: '4px', fontSize: '12px', background: '#bb00b0' }}>{item.propertyType.replace(/_/g, ' ')}</span>
                                                                </div>
                                                            </h6>
                                                            <div>
                                                                {!auth ?
                                                                    <>
                                                                        {Number(item.price) == 0 ?
                                                                            <>
                                                                                <p className="text-primary mt-2 font-weight-bold">Lihat ketersediaan</p>
                                                                            </>
                                                                            :
                                                                            <>
                                                                                <p className="font-weight-bold label-price__price text-primary">
                                                                                    Rp
                                                                                    <strong>
                                                                                        {item.price.toLocaleString().replaceAll(',', '.')}
                                                                                    </strong>
                                                                                </p>
                                                                            </>
                                                                        }
                                                                    </>
                                                                    :
                                                                    <>
                                                                        {Number(item.price) == 0 ?
                                                                            <>
                                                                                <p className="text-primary mt-4 font-weight-bold" style={{fontSize: '20px'}}>Lihat ketersediaan</p>
                                                                            </>
                                                                            :
                                                                            <>
                                                                                <p className="font-weight-bold mb-0 label-price__text text-danger"><s>Rp {item.price.toLocaleString().replaceAll(',', '.')}</s></p>
                                                                                <p className="font-weight-bold label-price__price text-primary">
                                                                                    Rp <strong>{item.promoPrice.toLocaleString().replaceAll(',', '.')}</strong></p>
                                                                            </>
                                                                        }
                                                                    </>
                                                                }
                                                            </div>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <p className="mb-0 label-price__text mr-3">
                                                                    <strong style={{
                                                                        display: '-webkit-box',
                                                                        WebkitLineClamp: '2',
                                                                        WebkitBoxOrient: 'vertical',
                                                                        overflow: 'hidden',
                                                                        height: isTabletOrMobile ? '37px' : '50px',
                                                                        fontSize: '14px'
                                                                    }}>{item.address}</strong>
                                                                </p>
                                                                <span className={`badge badge-md text-white`} style={{ height: '30px', fontSize: '15px', padding: '6px', background: '#003896' }}>{item.reviewScore}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CardStyle>
                                            </a>
                                        </Link>
                                    </SwiperSlide>
                                ))}
                                <center className='mt-4 font-weight-bold' style={{ cursor: 'pointer'}}>
                                    <Link href={`/product/hotel?${queryString.stringify({ ...state.options, keyword: hotel.detail.city })}`}>
                                        <a target="_blank">
                                            <span style={{ color: '#003896' }}>Lihat Akomodasi Lainnya di {hotel.detail.city}</span>
                                        </a>
                                    </Link>
                                </center>
                            </Swiper>
                        </section>
                        <section id='guestReviews' className="col-md-12 mt-3 mb-5">
                            <HotelReview hotel={hotel} />
                        </section>
                    </div>
                </div >
            </div >

            <GalleryContainer open={showOtherImage}>
                <SheetHeader style={{ boxShadow: '-1px 3px 11px -7px rgba(156,156,156,0.75)' }} className='py-3 px-3'>
                    <button onClick={handleShowImages} type="button" className="btn btn-secondary btn-md">
                        <i class="fas fa-times    "></i> Tutup
                    </button>
                </SheetHeader>
                <div className="container-fluid">
                    <div className="form-row mt-3">
                        {images?.map(item => (
                            <div className="col-3 mb-2">
                                <div style={{ height: '200px', position: 'relative' }}>
                                    <img src={item} layout='fill' style={{ height: '100%', width: '100%', objectFit: 'cover' }} objectFit='cover' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </GalleryContainer>
        </section >
    );
}


const GalleryContainer = styled(BottomSheet)`
min-height:100%;
max-height:100%;
border-radius:0;

`

const CardDescriptionStyled = styled.div`
scrollbar-color: #e4e4e4;
  scrollbar-width: thin;
  flex:1;
  border: 1px solid #dfdfdf;
 border-radius: 20px;
 height: 10px;
 overflow-y: auto; 
`

const CardStyle = styled.div` 
background-repeat:no-repeat;
background-position:center center; */
min-height:270px;//
min-height:170px;//moblie
// width:200; 
color:white;
position: relative;
padding:10px;
z-index:1;
border-radius:10px;
border:none; 
transition: background-position .2s linear;
.label-name,.label-price{
    @media screen and (max-width:1224px){
        font-size:12px;
    }
}
.label-price{
    .label-price__text{
        font-size:15px;
        @media screen and (max-width:1224px){
            font-size:12px;
        }
    }
    .label-price__price{
        font-size:17px;
        @media screen and (max-width:1224px){
            font-size:14px;
        }
    }
    @media screen and (max-width:1224px){
    p:nth-child(1){
        margin-bottom:-5px !important;
    }
        
    }
}
`
const CardImage = styled.div`
&:hover {
    background-image: url(${props => props.image});
}
/* background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.image}); */

background:  url(${props => props.image});
width: 100%;
height: 230px;
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
border-radius: 10px;
@media screen and (max-width:1224px){
    height: 125px;
}
`
const ModalStyled = styled(Modal)`
    .modal-content{
        background:transparent;
        border:0 !important;
    }
`

const PlaceStyled = styled.div`
width:130px;
position:absolute;
transform: translate(-50%, -50%); 
padding:10;
border-radius:50px;
border:1px solid red;
cursor:pointer;
&:hover{
    font-weight:bold;
    border:3px solid red;
    z-index:1;
}
.label,.price{
    font-size:12px;
    color:red;
    text-align:center;
}

.price{
    margin-top:5px;
}


`


export default DetailHotel;