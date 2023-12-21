import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import { useEffect, useState, useReducer } from "react";
import Image from 'next/image';

import { Collapse, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Modal, ModalBody } from 'reactstrap';
import HeaderBack from '@/components-mobile/header/HeaderBack';
import { useRouter } from "next/router";
import queryString from 'query-string';
import shopApi from "@/api/shop";
import EditIcon from '@iconify/icons-fa-regular/edit';
import { useDispatch, useSelector } from 'react-redux';
import { changeRedirectUrl } from "@/store/redirectUrl/redirectUrlActions";
import { toast } from "react-toastify";
import { BottomSheet, SheetContent } from "@biotic-ui/bottom-sheet";
import { Icon } from "@iconify/react";
import HotelPage from "@/components-mobile/page/HotelPage";


const initialState = {
    options: {},
    filters: {},
    meta: {},
    hotel: {},
    isLoading: true
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

function DetailHotel() {
    const [state, dispatch] = useReducer(reducer, initialState, init);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [openModal, setOpenModal] = useState(false);
    const [roomSelected, setRoomSelected] = useState();
    const [openShare, setOpenShare] = useState(false);

    const { access_token } = useSelector(state => state.token);
    const auth = useSelector(state => state.auth);
    const [openCollapse, setOpenCollapse] = useState({});

    const dispatchRedux = useDispatch();
    const [openDetail, setOpenDetail] = useState({})
    const [showSearch, setShowSearch] = useState(false);

    const [openImageSlider, setOpenImageSlider] = useState(false);
    const [imageSelected, setImageSelected] = useState(0)

    const handleOpenDetail = (field) => {
        setOpenDetail(prev => ({ ...prev, [field]: !prev[field] }))
    }

    const handleOpenShare = () => {
        setOpenShare(prev => !prev)
    }

    const handleOpenCollapse = (field) => {
        setOpenCollapse(prev => ({ ...prev, [field]: !prev[field] }));
    }

    const handleOpenModal = (room) => {
        setRoomSelected(room)
        setOpenModal(open => !open)
    }

    /* end fetch filters */
    const handleChangeOptions = (options) => {
        dispatch({ type: 'SET_OPTIONS_VALUE', value: options })
    }

    const router = useRouter();


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
        dispatch({ type: 'FETCH_HOTEL' })
        shopApi.getDetailHotel(access_token, state.options).then(res => {
            if (res.success) {
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

    const doHandleSubmit = (room) => {
        const { options } = state

        if (process.env.NEXT_PUBLIC_HOTELEX_API_URL) {
            shopApi.getAvailHotel(access_token, {
                "productId": options.productId,
                "dateFrom": options.dateFrom,
                "dateTo": options.dateTo,
                "pax": {
                    "room": options?.room,
                    "adult": options?.adult,
                    "child": options?.child,
                    "infant": options?.infant,
                    "childAge": options?.childAge,
                    numOfAdults: room.guest
                },
                "roomId": room.id,
                "rateKey": room.detailId[0]
            }).then(res => {
                if (res.success) {
                    if (!auth) {
                        console.log('test');
                        dispatchRedux(changeRedirectUrl(`/product/hotel/checkout?${queryString.stringify(
                            {
                                key: hotel?.key,
                                hotelId: options.productId,
                                option: room.id,
                                optionDetail: res.data.identifier
                            }
                        )}`))
                    }
                    router.push(`checkout?${queryString.stringify(
                        {
                            key: hotel?.key,
                            hotelId: options.productId,
                            option: room.id,
                            optionDetail: res.data.identifier
                        }
                    )}`)
                } else {
                    toast.error('Kamar tidak tersedia');
                }
            })

        } else {
            if (!auth) {
                dispatchRedux(changeRedirectUrl(`/product/hotel/checkout?${queryString.stringify(
                    {
                        key: hotel?.key,
                        hotelId: options.productId,
                        option: room.id,
                        optionDetail: room.detailId
                    }
                )}`))
            }
            router.push(`checkout?${queryString.stringify(
                {
                    key: hotel?.key,
                    hotelId: options.productId,
                    option: room.id,
                    optionDetail: room.detailId
                }
            )}`)
        }

    }

    const renderClass = () => {
        let arr = []
        for (let index = 0; index < hotel.class; index++) {
            arr[index] = index;
        }
        return arr.map(() => (
            <div style={{ width: '15px', height: '15px', position: 'relative', display: 'inline-block' }}>
                <Image src='https://cdn.masterdiskon.com/masterdiskon/icon/fe/star.png' layout='fill' objectFit='cover' />
            </div>
        )

        )
    }

    const { hotel } = state

    if (state.isLoading) {
        return <>
            <div style={{
                height: '50vh',
                marginBottom: '5rem'
            }} className="d-flex flex-column align-items-center justify-content-center">
                <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/pulse-spinner.svg" />
                <h4>Sedang menyiapkan data...</h4>
            </div>
        </>
    }

    const images = [...new Set([...hotel?.detail?.images, hotel?.image])];

    if (showSearch) {
        return <HotelPage isDetail={true} productId={state.options.productId} onBack={() => setShowSearch(false)} handleChangeOptions={handleChangeOptions} options={state.options} />
    }

    return <>
        <HeaderBack onBack={() => router.back()}>
            <div className="col-8 d-flex justify-content-center">
                <div className="position-relative" style={{ width: '80px', height: '30px' }}>
                    <Image src='https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/masterdiskon_logo_big.png' objectFit="contain" layout="fill" />
                </div>
            </div>
            <div className="col-2 d-flex justify-content-end align-items-center">
                <Icon onClick={() => setShowSearch(true)} icon={EditIcon} style={{ fontSize: '23px' }} className='text-white text-right' />
            </div>
        </HeaderBack>
        <div className="container w-100 pt-2" style={{ paddingBottom: '4rem' }}>
            <div className="row">
                <div className="col-12 py-2">
                    <div className="card" style={{ borderRadius: '0' }}>
                        <div className="card-body p-1">
                            <>
                                {(!!thumbsSwiper && !thumbsSwiper?.destroyed) &&
                                    <Swiper
                                        style={{
                                            "--swiper-navigation-color": "#fff",
                                            "--swiper-pagination-color": "#fff",
                                            height: '218px',
                                            marginBottom: '5px'
                                        }}
                                        spaceBetween={5}
                                        navigation={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        thumbs={{ swiper: thumbsSwiper }}
                                    >
                                        {images.map((item, index) => (
                                            <SwiperSlide onClick={() => {
                                                setImageSelected(index)
                                                setOpenImageSlider(v => !v)
                                            }}>
                                                <div style={{ width: '100%', height: '218px' }}>
                                                    <img src={item} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                }
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    spaceBetween={2}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    style={{ height: '50px' }}
                                >
                                    {images.map(item => (
                                        <SwiperSlide>
                                            <div style={{ width: '100%', height: '50px', backgroundImage: `url(${item})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center/center' }}>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </>
                        </div>
                    </div>

                </div>
                <div className="col-12">
                    <div className="card" style={{ borderRadius: '0' }}>
                        <div className="card-body p-2">
                            <div className="d-flex align-items-center">
                                <h6 className="font-weight-bold text-primary mb-0 mr-2">{hotel?.name}</h6>
                                {renderClass()}
                            </div>
                            <p className="mb-0 text-secondary mt-2 d-flex">
                                <div style={{
                                    width: '20px', height: '20px', position: 'relative', display: 'inline-block'
                                }}>
                                    <Image src={'https://cdn.masterdiskon.com/masterdiskon/icon/fe/location.png'} layout='fill' />
                                </div>
                                <small className="ml-1">{hotel?.detail?.city}, {hotel?.detail?.country}</small></p>
                        </div>
                        <div className="row m-0 text-center ">
                            {/* <div className="col-6 border">
                                <p className='mb-0' style={{ fontSize: '12px' }}>
                                    <i class="fas fa-bookmark mr-2"></i> Tambahkan ke wishlist</p>
                            </div> */}
                            <div className="col-12 border">
                                <Dropdown size="sm" isOpen={openShare} toggle={handleOpenShare}>
                                    <DropdownToggle className='mb-0' style={{ fontSize: '12px' }} tag='p' data-toggle='dropdown' aria-expanded={true}>
                                        <i class="fas fa-share-alt mr-2"></i>
                                        Bagikan penawaran ini
                                    </DropdownToggle>
                                    <DropdownMenu right style={{ minWidth: '100%' }}>
                                        <DropdownItem><a className="text-dark" target={'_blank'} href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(document.location)}`}><i className="fab fa-facebook" /> Facebook</a></DropdownItem>
                                        <DropdownItem><a className="text-dark" target={'_blank'} href={`http://www.twitter.com/share?url=${encodeURIComponent(document.location)}&text=${hotel?.name}via=Master Diskon`}><i className="fab fa-twitter" /> Twitter</a></DropdownItem>
                                        <DropdownItem><a className="text-dark" target={'_blank'} data-action="share/whatsapp/share" href={`https://api.whatsapp.com/send?text=${encodeURIComponent(document.location)}`}><i className="fab fa-whatsapp" /> Whatsapp</a></DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-12 mt-2">
                    <div className="card">
                        <div className="card-body p-2">
                            <div onClick={() => handleOpenCollapse('price')} className="d-flex justify-content-between align-items-center">
                                <h6 className="mb-0 font-weight-bold">
                                    Harga untuk 1 malam
                                </h6>
                                <i class="fas fa-angle-down"></i>
                            </div>
                            <Collapse isOpen={openCollapse['price']}>
                                <hr className="mt-2 mb-0" />
                                <small className="font-weight-bold">Rp{hotel?.options[0] && hotel?.options[0]?.price?.toLocaleString()}</small>
                            </Collapse>
                        </div>
                    </div>
                </div> */}
                <div className="col-12 mt-2">
                    <div className="card">
                        <div className="card-body p-2">
                            <div onClick={() => handleOpenCollapse('description')} className="d-flex justify-content-between align-items-center">
                                <h6 className="mb-0 font-weight-bold">
                                    Description
                                </h6>
                                <i class="fas fa-angle-down"></i>

                            </div>
                            <Collapse isOpen={openCollapse['description']}>
                                <hr className="mt-2 mb-0" />
                                <div style={{ height: '100px', overflowY: 'auto' }}>
                                    <small style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: hotel?.detail?.description }}></small>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-2">
                    <div className="card">
                        <div className="card-body p-2">
                            <div onClick={() => handleOpenCollapse('facilities')} className="d-flex justify-content-between align-items-center">
                                <h6 className="mb-0 font-weight-bold">
                                    Fasilitas
                                </h6>
                                <i class="fas fa-angle-down"></i>

                            </div>
                            <Collapse isOpen={openCollapse['facilities']}>
                                <hr className="mt-2 mb-0" />
                                <div style={{ height: '100px', overflowY: 'auto' }}>
                                    <small>
                                        <ul className="pl-3">
                                            {hotel?.detail?.facilities.map(item => (
                                                <li>{item.name}</li>
                                            ))}
                                        </ul>
                                    </small>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-2">
                    <div className="card">
                        <div className="card-body p-2">
                            <div onClick={() => handleOpenCollapse('room')} className="d-flex justify-content-between align-items-center">
                                <h6 className="mb-0 font-weight-bold">
                                    Kamar
                                </h6>
                                <i class="fas fa-angle-down"></i>

                            </div>
                            <section id='room'>
                                <Collapse isOpen={openCollapse['room']}>
                                    <hr className="mt-2 mb-2" />
                                    {hotel?.options?.length > 0 ? hotel?.options?.map((room, index) => (
                                        <>
                                            <div className="row" key={index}>
                                                <div className="col-6">
                                                    <h6 className="mb-0 text-primary font-weight-bold">{room?.name}</h6>
                                                    <small className='m-0'>Fasilitas Kamar</small>
                                                    <small style={{
                                                        display: '-webkit-box',
                                                        WebkitLineClamp: 2,
                                                        WebkitBoxOrient: 'vertical',
                                                        overflow: 'hidden',
                                                    }} className="text-danger font-weight-bold">{room.detail[0].facilities}</small>
                                                    <small className="mt-4 d-inline-block text-danger" style={{ fontSize: '12px' }} onClick={() => handleOpenModal(room)}>Kebijakan Pembatalan</small>
                                                </div>
                                                <div className="col-6 text-right d-flex justify-content-between flex-column">
                                                    <div onClick={() => handleOpenDetail(`detail-${index}`)}>
                                                        <small className="text-success" style={{ fontSize: '12px' }}>Lihat detail</small>
                                                    </div>
                                                    {room.isFull ?
                                                        <small className="text-danger mb-4">Kamar tidak tersedia</small>
                                                        :
                                                        <div>
                                                            <small>Total Harga</small>
                                                            <h6 className="text-secondary mb-1"><del>Rp{room.price.toLocaleString()}</del></h6>
                                                            <h5 className="text-primary mb-1 font-weight-bold">Rp{room.promoPrice.toLocaleString()}</h5>
                                                            <button onClick={() => doHandleSubmit(room)} type="button" class="btn btn-warning font-weight-bold btn-sm" style={{ fontSize: '10px' }}>Pesan Sekarang</button>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                            {index < hotel.options.length - 1 &&
                                                <hr />
                                            }
                                            <BottomSheet open={openDetail[`detail-${index}`]} onClose={() => handleOpenDetail(`detail-${index}`)}>
                                                <SheetContent>
                                                    <Swiper style={{
                                                        "--swiper-navigation-color": "#fff",
                                                        "--swiper-pagination-color": "#fff",
                                                        height: '218px',
                                                        marginBottom: '5px'
                                                    }}
                                                        spaceBetween={5}
                                                        navigation={true}
                                                        modules={[FreeMode, Navigation]}>
                                                        {room?.detail[0]?.images.map(img => (
                                                            <SwiperSlide>
                                                                <img style={{ width: '100%', height: '200px', objectFit: 'cover' }} src={img} />
                                                            </SwiperSlide>
                                                        ))}
                                                    </Swiper>
                                                    <div className="container pb-3">
                                                        <h5 className="mt-2 text-primary font-weight-bold mb-1">
                                                            {room?.name}
                                                        </h5>
                                                        <h6 className="text-secondary mb-1"><del>Rp{room.price.toLocaleString()}</del></h6>
                                                        <h5 className="font-weight-bold">
                                                            Rp{room.promoPrice.toLocaleString()}
                                                        </h5>
                                                        <div className="text-right">
                                                            {room.isFull ?
                                                                <h6 className="text-danger">
                                                                    Kamar tidak tersedia
                                                                </h6>
                                                                :
                                                                <button onClick={() => doHandleSubmit(room)} type="button" class="btn btn-warning font-weight-bold btn-sm">Pesan Sekarang</button>
                                                            }

                                                        </div>
                                                    </div>
                                                </SheetContent>
                                            </BottomSheet>
                                        </>
                                    ))

                                        :
                                        <div className="col-12 text-center my-5">
                                            <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/no-room.svg" style={{
                                                width: '100%', height: "100px"
                                            }} />
                                            <h6>Kamar tidak tersedia</h6>
                                        </div>
                                    }
                                </Collapse>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav style={{
            zIndex: '1', height: '50px'
        }} className="navbar bg-white fixed-bottom shadow pb-1">
            <a href='#room' className="btn btn-primary btn-sm btn-block">Pilih Kamar</a>
        </nav>

        {/* policy */}
        <Modal isOpen={openModal} centered size='xl'>
            <ModalBody style={{ overflowY: 'auto' }}>
                <h6 className="font-weight-bold mb-4">
                    Detail Biaya Pembatalan Perkamar
                </h6>
                {roomSelected?.detail[0]?.cancelation?.length > 0 &&
                    <table className="table table-bordered table-responsive">
                        <thead>
                            <tr>
                                <th>Nomor Kamar</th>
                                <th>Tipe Kamar</th>
                                <th>Dari Tanggal</th>
                                <th>Sampai Tanggal</th>
                                <th>Biaya Pembatalan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {roomSelected?.detail[0]?.cancelation?.map((item, index) => (
                                <tr>
                                    <td>{++index}</td>
                                    <td>{roomSelected?.detail[0]?.name}</td>
                                    <td>{item.FromDate}</td>
                                    <td>{item.ToDate}</td>
                                    <td>Rp{item.CancellationPrice.toLocaleString().replaceAll(',', '.')}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
                <h6 className="text-center font-weight-bold">Informasi Penting (Essential Information)</h6>
                <p className="text-center" dangerouslySetInnerHTML={{ __html: roomSelected?.detail[0]?.cancellationPolicyDisplay }}></p>
                <div onClick={handleOpenModal} className="d-flex justify-content-center">
                    <button type="button" className="btn btn-warning">Tutup</button>
                </div>
            </ModalBody>
        </Modal>


        {/* image slider */}
        <Modal id='carousel-image' centered toggle={() => setOpenImageSlider(v => !v)} isOpen={openImageSlider} size="lg" >
            <ModalBody className='position-relative p-0'>
                <h5 className='position-absolute text-white' onClick={() => setOpenImageSlider(v => !v)} style={{
                    right: '3px', top: '0', cursor: 'pointer', zIndex: '2'
                }}>
                    <i class="fas fa-times-circle    "></i>
                </h5>
                {(!!thumbsSwiper && !thumbsSwiper?.destroyed) &&
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                            height: '300px',
                        }}
                        initialSlide={imageSelected}
                        spaceBetween={5}
                        navigation={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        thumbs={{ swiper: thumbsSwiper }}
                    >
                        {images.map((item, index) => (
                            <SwiperSlide>
                                <div style={{ width: '100%', height: '300px' }}>
                                    <img src={item} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                }
            </ModalBody>

        </Modal>

    </>
}

export default DetailHotel;