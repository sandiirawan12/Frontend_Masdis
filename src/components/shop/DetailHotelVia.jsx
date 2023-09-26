import { useEffect, useReducer, useRef, useState, useId } from 'react';
import Image from 'next/image';
import ReactDOM from 'react-dom';
import { Navigation, A11y } from 'swiper';
import ImageGallery from 'react-image-gallery';
import MDPagination from "../shared/MDPagination";
import CardHotelDesktop from "../shared/CardHotel";
import CardHotelMobile from "@/components-mobile/shared/CardHotel";
import pin from '../../svg/icon-research.svg';

import BedIcon from '@iconify/icons-fa-solid/bed';

import GoogleMapReact, { Marker, InfoWindow } from 'google-map-react';

import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Icon } from '@iconify/react';
import StarIcon from '@iconify/icons-fa-solid/star';
import WifiIcon from '@iconify/icons-fa-solid/wifi';
import { useMediaQuery } from "react-responsive";

import MapMarkerIcon from '@iconify/icons-fa-solid/map-marker';
import WidgetHotel from '../widgets/WidgetHotel';
import CardProductHotel from './CardProductHotelVia';

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

import ReactGA from 'react-ga';
ReactGA.initialize('G-56R5954QCE');


const initialState = {
    options: {},
    filters: {},
    meta: {},
    hotel: {},
    isLoading: true
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

function DetailHotelVia() {

    const bg = {
        overlay: {
            background: "#000b"
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState, init);
    const { access_token } = useSelector(state => state.token)
    const router = useRouter()

    const [showOtherImage, setShowOtherImage] = useState(false)
    const [indexSwiperActive, setIndexSwiperActive] = useState(0);
    const [imgSelected, setImgSelected] = useState(0)

    const [moreBreakfastInfo, setMoreBreakfastInfo] = useState(false)


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

        // ReactGA.pageview(window.location.pathname + window.location.search);

        dispatch({ type: 'FETCH_HOTEL' })
        shopApi.getDetailHotel(access_token, state.options).then(res => {
            if (res.success) {

                toast.error('Kamar hotel tidak tersedia', res)
                setCoordinates({ lng: Number(res.data?.detail.longitude), lat: Number(res.data?.detail.latitude) })
                dispatch({
                    type: 'FETCH_HOTEL_SUCCESS',
                    payload: res.data
                })

            } else {
                toast.error('Kamar hotel tidak tersedia', { toastId: 'not-found' })
                setTimeout(() => {
                    router.back()
                }, 2000);
            }
        })
    }, [state.options])



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

    const renderClass = () => {
        let arr = []
        for (let index = 0; index < hotel.class; index++) {
            arr[index] = index;
        }
        return arr.map(() => (
            <div style={{ width: '20px', height: '20px', position: 'relative', display: 'inline-block' }}>
                <Image src='https://cdn.masterdiskon.com/masterdiskon/icon/fe/star.png' layout='fill' objectFit='cover' />
            </div>
        )

        )
    }
    const ratingHotel = (idx) => {
        let arr = []
        for (let index = 0; index < idx; index++) {
            arr[index] = index;
        }
        return arr.map(() => (
            <div style={{ width: '15px', height: '15px', position: 'relative', display: 'inline-block' }}>
                <Image src='https://cdn.masterdiskon.com/masterdiskon/icon/fe/star.png' layout='fill' objectFit='cover' />
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
    // const images = [hotel.images, ...hotel.options.map(item => item.detail.map(item2 => item2.images.map(item3 => item3))).map(item => item.toString()).filter(item => item !== '')]

    const handlePropertyImages = (item) => {
        try {
            setpropertyImage(JSON.parse(item.propertyImages)[0].entries[0].url)
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
        <section className="py-3" style={{ background: '#F5F6FA' }}>
            <div className="container">
                <div className="tampungSumary">
                    <nav className="mt-3 bg-transparent">
                        <ol className="breadcrumb p-0 bg-transparent">
                            <li className="breadcrumb-item"><Link className=' text-primary' href="/">Home</Link></li>
                            <li className="breadcrumb-item">
                                <Link href='/hotels'>
                                    <a className=' text-primary'>Hotel</a>
                                </Link>
                            </li>
                            <li className="breadcrumb-item"><Link className=' text-primary' href={`/product/hotel?${queryString.stringify({ ...state.options, keyword: hotel?.detail.city })}`}>{hotel?.detail.city}</Link></li>
                            <li className="breadcrumb-item font-weight-bold" aria-current="page">{hotel.name}</li>
                        </ol>
                    </nav>

                    <div className="row">
                        <div className="col-md-3 d-flex flex-column">
                            <div className="card" style={{ borderRadius: '20px', background: 'radial-gradient(60% 80%, rgba(253, 185, 51, 0.573) 44.79%, rgb(244, 121, 61) 100%)' }}>
                                <div className="card-body">
                                    <label className='font-weight-bold'>Kota</label>
                                    <h6 className='font-weight-bold bg-white p-1' style={{
                                        marginTop: '-7px'
                                    }}>{hotel?.detail?.city},{hotel?.detail?.country}</h6>
                                    <label className='font-weight-bold'>Check In</label>
                                    <h6 className='font-weight-bold bg-white p-1' style={{
                                        marginTop: '-7px'
                                    }}>{moment(toDate(state.options.dateFrom)).format('ddd, DD MMM YYYY')}</h6>
                                    <label className='font-weight-bold'>Check Out</label>
                                    <h6 className='font-weight-bold bg-white p-1' style={{
                                        marginTop: '-7px'
                                    }}>{moment(toDate(state.options.dateTo)).format('ddd, DD MMM YYYY')}</h6>
                                    <label className='font-weight-bold'>Tamu</label>
                                    <h6 className='font-weight-bold bg-white p-1' style={{
                                        marginTop: '-7px'
                                    }}>{Number(state.options.adult || 0) > 0 && `${state.options.adult} Dewasa`}{Number(state.options.child || 0) > 0 && `, ${state.options.child} Anak-anak`}</h6>
                                    <label className='font-weight-bold'>Kamar</label>
                                    <h6 className='font-weight-bold bg-white p-1' style={{
                                        marginTop: '-7px'
                                    }}>{state.options.room}</h6>
                                    {/* <label className='text-secondary'>Hotel ID</label>
                                    <h6 className='font-weight-bold bg-white p-1' style={{
                                        marginTop: '-7px'
                                    }}>{hotel.id}</h6> */}
                                </div>
                            </div>
                            <section id='facility' className="card mt-3 d-flex flex-column" style={{ flex: 1, borderRadius: '20px', background: '#0070BA' }}>
                                <div className="card-body text-white flex-fill">
                                    <div className=' pb-3'>
                                        <h6 className='font-weight-bold mb-0'>Keunggulan Properti</h6>
                                        {
                                            hotel?.detail?.propertyAdvantage?.length > 0 ?
                                                hotel?.detail?.propertyAdvantage.map(item => (
                                                    <span className="badge badge-light mr-1 text-primary">{item.name}</span>
                                                )) : '-'
                                        }
                                    </div>
                                    {/* <div className='flex-fill'>
                                        <label className='d-block mb-0'>Top Location</label>
                                        <label className='font-weight-bold'>Easy City Access</label>
                                    </div> */}
                                    <div className='mb-3'>
                                        <label className='font-weight-bold d-block mb-0'>Breakfast Info</label>
                                        <label className='mb-0' style={{
                                            display: '-webkit-box',
                                            WebkitBoxOrient: 'vertical',
                                            ...!moreBreakfastInfo && {
                                                WebkitLineClamp: 3,
                                                overflow: 'hidden'
                                            }
                                        }}>
                                            {hotel?.detail?.breakfastInfo.map(item => (
                                                item.name
                                            )).toString().replaceAll(',', ', ') || '-'}
                                        </label>
                                        {hotel?.detail?.breakfastInfo.map(item => (
                                            item.name
                                        )).toString().replaceAll(',', ', ').length > 75 &&
                                            <small onClick={() => setMoreBreakfastInfo(v => !v)} style={{
                                                cursor: 'pointer'
                                            }} className='font-weight-bold badge badge-light'>
                                                {!moreBreakfastInfo ? 'See More' : 'See Less'}</small>
                                        }
                                    </div>
                                    <div className=''>
                                        <label className='font-weight-bold d-block mb-0'>Activities</label>
                                        <label className=''>
                                            {
                                                hotel?.detail?.activities?.map(item => (
                                                    item.name
                                                )).toString().replaceAll(',', ', ') || '-'
                                            }
                                        </label>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col-md-9 d-flex flex-column">
                            <div className="mb-2 d-flex">
                                <div className="flex-fill px-1">
                                    <a style={{
                                        background: 'radial-gradient(50% 50%, rgba(241, 100, 137, 0.933) 20%, rgb(216, 20, 94) 93.40%)'
                                    }} className="btn btn-sm font-weight-bold text-white btn-block" href='#infoprice'>Info & Harga</a>
                                </div>
                                <div className="flex-fill px-1">
                                    <a style={{
                                        background: 'radial-gradient(50% 50%, rgba(241, 100, 137, 0.933) 20%, rgb(216, 20, 94) 93.40%)'
                                    }} className="btn btn-sm font-weight-bold text-white btn-block" href='#facility'>Fasilitas</a>
                                </div>
                                <div className="flex-fill px-1">
                                    <a style={{
                                        background: 'radial-gradient(50% 50%, rgba(241, 100, 137, 0.933) 20%, rgb(216, 20, 94) 93.40%)'
                                    }} className="btn btn-sm font-weight-bold text-white btn-block" href='#stayRules'>Aturan Menginap</a>
                                </div>
                                <div className="flex-fill px-1">
                                    <a style={{
                                        background: 'radial-gradient(50% 50%, rgba(241, 100, 137, 0.933) 20%, rgb(216, 20, 94) 93.40%)'
                                    }} className="btn btn-sm font-weight-bold text-white btn-block" href='#stayRules'>Informasi Penting</a>
                                </div>
                                <div className="flex-fill px-1">
                                    <a style={{
                                        background: 'radial-gradient(50% 50%, rgba(241, 100, 137, 0.933) 20%, rgb(216, 20, 94) 93.40%)'
                                    }} className="btn btn-sm font-weight-bold text-white btn-block" href='#guestReviews'>Ulasan Tamu</a>
                                </div>
                            </div>
                            <div className="d-flex row align-items-center">
                                <div className='col-9'>
                                    <span style={{
                                        background: 'radial-gradient(circle,#ffd363 30%,#fdb933 100%)'
                                    }} className="badge  font-weight-bold py-1 px-2 mb-2">{hotel?.accommodationType}</span>
                                    <h4 className='font-weight-bold m-0'>{hotel.name}</h4> {ReactTitle(hotel)}
                                    {renderClass()}
                                </div>
                                <div className='col-3 text-right ' style={{ margin: '13px 0', width: '50%' }}>
                                    <h6 className="d-flex justify-content-end align-items-start">
                                        <span className="text-grey " style={{
                                            fontSize: '12px',
                                            marginRight: '5px'
                                        }}> <span className=" font-weight-bold" style={{ fontSize: '15px', }} >{hotel.reviewScore >= 8.0 ? 'Very Good' : hotel.reviewScore >= 7.0 ? 'Good' : 'Review Score'}</span>
                                            <br /> Reviews
                                        </span>
                                        <span className={`badge badge-lg badge-warning mr-1`} style={{ height: '30px', fontSize: '15px', padding: '6px' }}>{hotel.reviewScore}</span>
                                    </h6>
                                    {Number(hotel.reviewScore) == 0 &&
                                        <span>Unrated</span>
                                    }
                                </div>
                                <div className="col-12">
                                    <div className='mb-2 mt-2' onClick={handleOpenMap}>
                                        <p className="mb-0 text-secondary">
                                            <div style={{
                                                width: '20px', height: '20px', position: 'relative', display: 'inline-block'
                                            }}>
                                                <Image src={'https://cdn.masterdiskon.com/masterdiskon/icon/fe/location.png'} layout='fill' />
                                            </div>
                                            <span className="ml-1">{hotel.detail.address}, {hotel.detail.city}, {hotel.detail.country} - <span className='text-primary  font-weight-bold  '> Great location - Show Map </span> </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="photo">
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
                                                <div style={{ background: "#FFF", position: "absolute", width: 330, height: "60vh", zIndex: 100, display: (popUpTitleHotel == 'none' ? 'none' : 'block') }}>
                                                    <div >

                                                        <div className="d-flex row align-items-center">
                                                            <div className='col-3'>
                                                                {popUpImages === 'none' ?
                                                                    <div style={{
                                                                        width: '85px', height: '85px', position: 'relative', display: 'inline-block'
                                                                    }}>
                                                                        <Image src={'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20017895-7283d6800c301956dd11d1063ad78168.jpeg?tr=q-40,w-740,h-465&_src=imagekit'} layout='fill' />
                                                                    </div>
                                                                    :
                                                                    <div style={{
                                                                        width: '85px', height: '85px', position: 'relative', display: 'inline-block'
                                                                    }}>
                                                                        <Image src={propertyImage} layout='fill' />
                                                                    </div>

                                                                }

                                                            </div>
                                                            <div className='col-9'>
                                                                <span style={{
                                                                    background: 'radial-gradient(circle,#ffd363 30%,#fdb933 100%)'
                                                                }} className="badge  font-weight-bold py-1 px-2">{popUpDetail?.propertyType}</span>
                                                                <h6 className='font-weight-bold m-0'>{(popUpTitleHotel != 'none' ? popUpTitleHotel : "Masterdiskon")}</h6>
                                                                {ratingHotel(popUpRatingHotel)}
                                                                <h6 className="d-flex  ">
                                                                    <span className={`badge badge-lg badge-primary mr-1`} style={{ height: '30px', fontSize: '15px', padding: '6px' }}>{popUpDetail.reviewScore}</span>

                                                                    <span className="text-grey " style={{
                                                                        fontSize: '12px',
                                                                        marginRight: '5px'
                                                                    }}> <span className=" font-weight-bold" style={{ fontSize: '13px', }} >{popUpDetail.reviewScore >= 8.0 ? 'Very Good' : popUpDetail.reviewScore >= 7.0 ? 'Good' : 'Review Score'}</span>
                                                                        <br /> Reviews
                                                                    </span>
                                                                </h6>
                                                                {Number(popUpDetail.reviewScore) == 0 &&
                                                                    <span>Unrated</span>
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className="col-12 p-0">
                                                            <p className="mb-0 text-secondary">
                                                                <div style={{
                                                                    width: '20px', height: '20px', position: 'relative', display: 'inline-block'
                                                                }}>

                                                                    <img style={markerStyle} src={"https://toppng.com/uploads/preview/simple-location-map-pin-icon-blue-location-icon-11562928973mg6jeytef4.png"} />
                                                                </div>
                                                                <smal style={{ fontSize: 14 }}>{popUpDetail.address},{popUpDetail.city},{popUpDetail.country}</smal>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        {popUpPriceHotel != "Rp0" ? <>
                                                            <hr />
                                                            <h6 className="mt-2 font-weight-bold">{popUpTitleHotel} </h6>
                                                            <small> 1 night, 2 adults</small> </> : ''
                                                        }
                                                        {popUpPromoPriceHotel?.isPromo &&
                                                            <h6 className="text-danger"><s>{popUpPriceHotel}</s></h6>
                                                        }
                                                        {popUpPriceHotel != "Rp0" ?
                                                            <h5 className="mb-0 text-primary font-weight-bold">{popUpPromoPriceHotel}</h5>
                                                            : <h5 className="mb-0 text-danger font-weight-bold"> <br />Full Booking</h5>
                                                        }<hr />
                                                        <div className="mb-0">
                                                            <Link href={`/product/hotel/detail?${queryString.stringify({ ...state.options, productId: popUpIdHotel })}`} >
                                                                <a className="btn font-weight-bold btn-primary" target="_blank">View</a>
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
                                                    // layerTypes={['TrafficLayer']}
                                                    options={''}
                                                    onChange={e => {
                                                        setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                                                    }}
                                                    onChildClick={child => { setChildClicked(child) }}
                                                >
                                                    {hotel.recommendasiHotel.map(item => {
                                                        const handleClick = () => {
                                                            console.log(`You clicked on ${tooltip}`);
                                                        };

                                                        return (
                                                            <div key={1} lng={Number(item.longitude)} lat={Number(item.latitude)} title={item.name + "\n" + (item.starRating > 0 ? (item.starRating + "star") : "") + "\n" + (item.promoPrice > 0 ? 'Rp' + item.promoPrice.toLocaleString().replaceAll(',', '.') : (item.price > 0 ? 'Rp' + item.price.toLocaleString().replaceAll(',', '.') : 'Full Booking'))} onClick={() => (handlePropertyImages(item), setPopUpDetail(item), setPopUpTitleHotel(item.name), setPopUpRatingHotel(item.starRating), setpopUpImages(item.images), setpopUpIdHotel(item.hotelId), setPopUpPriceHotel("Rp" + item.price.toLocaleString().replaceAll(',', '.')), setPopUpPromoPriceHotel("Rp" + item.promoPrice.toLocaleString().replaceAll(',', '.')))} >

                                                                {/* <div className='label' style={{ marginTop: -10 }} >
                                                                    <span style={{ color: '#003580', fontWeight: 'bold', fontSize: '12px', marginLeft: '15px', display: item.price > 0 ? 'block' : 'none' }}> Rp{item.promoPrice.toLocaleString().replaceAll(',', '.')}</span>

                                                                </div> */}

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

                                                    {/* <PlaceStyled className='active' lng={Number(hotel.detail.longitude)} lat={Number(hotel.detail.latitude)} >
                                                        <div className='label' style={{ color: '#000', fontSize: '12px' }}><b> {hotel.name} </b></div>
                                                        <div className='label' >
                                                            <h6  >
                                                                <span style={{ color: '#000', fontSize: '12px', }}> {hotel.reviewScore} </span>
                                                                <span style={{ color: '#000', fontSize: '11px', }}> {hotel.reviewScore >= 8.0 ? 'Very Good' : hotel.reviewScore >= 7.0 ? 'Good' : ''}</span>
                                                                <span style={{ color: '#000', fontSize: '13px', marginLeft: '5px' }}> Rp{hotel.price.toLocaleString().replaceAll(',', '.')}</span>


                                                            </h6>
                                                        </div>
                                                    </PlaceStyled> */}

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
                        <div className="col-md-12 mt-3">
                            <WidgetHotel isDetail={true} productId={state.options.productId} handleChangeOptions={handleChangeOptions} options={state.options} />
                        </div>
                        <section id='infoprice' className="w-100 mt-3" >
                            {hotel?.options.length > 0 ? hotel?.options?.map(item => (
                                <div className="col-12 mb-3">
                                    <CardProductHotel hotelKey={hotel.key} options={state.options} room={item} />
                                </div>
                            )) :
                                <div className="col-12 text-center my-5">
                                    <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/no-room.svg" style={{
                                        width: '100%', height: "280px"
                                    }} />
                                    <h5>Kamar tidak tersedia</h5>
                                </div>
                            }
                        </section>
                        <section id='stayRules' className="col-md-12 mt-3">
                            <AboutAccommodation hotel={hotel} />
                        </section>
                        <section id='stayRules' className="col-md-12 mt-3">
                            <div className="card" style={{ borderRadius: '20px', boxShadow: '2.5px 5px 15px -5px  rgba(0,0,0,.5)' }}>
                                <div className="card-header text-white" style={{ borderTopRightRadius: '20px', borderTopLeftRadius: '20px', background: '#0070BA' }}>
                                    <span className="card-title font-weight-bold">Inspired by properties you looked at</span>
                                </div>
                                <div className="card-body">
                                    <Swiper slidesPerView={isTabletOrMobile ? 2.5 : 3.5}
                                        style={{ padding: '0 0 10px 0' }}
                                        spaceBetween={10}>
                                        {hotel.recommendasiHotel?.map((item) => (
                                            <SwiperSlide key={item.name} style={{ display: (hotel.id === item.hotelId ? "none" : (item.price < 1 ? "none" : "block")) }}>
                                                <Link href={`/product/hotel/detail?${queryString.stringify({ ...state.options, productId: item.hotelId })}`} >
                                                    <a target="_blank">
                                                        <CardStyle className="card" img={item.propertyImages} style={{
                                                            boxShadow: '8px 8px 10px -8px rgba(0,0,0,.5)'
                                                        }} >
                                                            <div className="d-flex flex-column justify-content-between">
                                                                <CardImage image={(JSON.parse(item.propertyImages) != null ? JSON.parse(item.propertyImages)[0].entries[2].url : 'https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/no-room.svg')}>
                                                                    <h5 className='font-weight-bold label-name p-2'>
                                                                        {item.name}
                                                                        <p className="mb-0 label-price__text">{ratingHotel(item.starRating)}</p>
                                                                    </h5>
                                                                </CardImage>
                                                                <div className='text-dark label-price p-2' style={{ marginBottom: '-20px' }}>
                                                                    <p className="mb-0 label-price__text">Starting From</p>
                                                                    <p className="font-weight-bold text-primary label-price__price">
                                                                        Rp.<strong>{(item.price > 0 ? item.promoPrice.toLocaleString().replaceAll(',', '.') : item.price.toLocaleString().replaceAll(',', '.'))}</strong></p>
                                                                </div>
                                                            </div>
                                                        </CardStyle>
                                                    </a></Link>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div >
                        </section>
                        <section id='guestReviews' className="col-md-12 mt-3">
                            <HotelReview />
                        </section>
                    </div>
                </div >
            </div >

            <GalleryContainer open={showOtherImage}>
                <SheetHeader style={{ boxShadow: '0 5px 5px -5px rgba(0,0,0,.5)' }} className='py-3 px-3'>
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
  border: 1px solid #0070BA;
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

background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.image});
                                width: 100%;
                                 height: 210px;
                                background-size: cover;
                                background-repeat: no-repeat;
                                background-position: center center;
                                border-radius: 5px;
                                @media screen and (max-width:1224px){C
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


export default DetailHotelVia;