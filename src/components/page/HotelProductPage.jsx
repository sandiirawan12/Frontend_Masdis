import { useReducer, useEffect, useState, createRef, useRef } from "react";
import CardHotelDesktop from "../shared/CardHotel";
import CardHotelMobile from "@/components-mobile/shared/CardHotel";
import WidgetSorting from "../shared/WidgetSorting";
import WidgetFilter from "../widgets/WidgetFilter";
import WidgetHotel from "../widgets/WidgetHotel";
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import queryString from 'query-string';
import shopApi from "@/api/shop";
import ArrowLeft from '@iconify/icons-fa-solid/arrow-left'
import { Icon } from '@iconify/react'
import MapIcon from '@iconify-icons/fa/map';
import MDPagination from "../shared/MDPagination";
import Map from "../shared/Map";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";
import HeaderBack from "@/components-mobile/header/HeaderBack";
import EditIcon from '@iconify/icons-fa-regular/edit';
import SortIcon from '@iconify-icons/fa/filter';
import HotelPage from "@/components-mobile/page/HotelPage";
import moment from 'moment';
import homeApi from "@/api/home";
import DrawerSortHotel from "@/components-mobile/shared/DrawerSortHotel";
import DrawerFilterHotel from "@/components-mobile/shared/DrawerFilterHotel";
import filtersApi from "@/api/filters";
import Link from 'next/link'
import Image from 'next/image'

import ReactGA from 'react-ga';
ReactGA.initialize('G-56R5954QCE');

const initialState = {
    options: {},
    filters: {},
    meta: {},
    listHotel: [],
    listHotelTerdekat: [],
    isLoading: true
};

function parseQueryOptions(location) {
    const query = queryString.parse(location);

    const optionValues = {
        product: 'hotel',
        adult: '1',
        child: '0',
        infant: '0',
        keyword: '',
        from: '',
        dateFrom: '',
        dateTo: '',
        room: '1',
        childAge: [],
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
        if (query.childAge !== '') {
            optionValues.childAge = [query.childAge]
        }
    }
    if (typeof query.childAge === "object") {
        optionValues.childAge = query.childAge
    }
    if (typeof query.room === "string") {
        optionValues.room = query.room
    }

    return optionValues;
}
function parseQueryFilters(location) {
    const query = queryString.parse(location);

    const filterValues = {
        search: '', // filter result by hotelname (hotel)
        page: 1,
        limit: 15,
        orderType: '', // order price
        price: '0, 20000000', // filter price from
        class: '', // array of class to want 
        recomendedOnly: false,
        reviews: '',
    }

    Object.keys(query).forEach((param) => {
        const mr = param.match(/^filter_([-_A-Za-z0-9]+)$/);

        if (!mr) {
            return;
        }

        const filterSlug = mr[1];

        filterValues[filterSlug] = query[param];
    });

    return filterValues;
}

function parseQuery(location) {
    return [parseQueryOptions(location), parseQueryFilters(location)];
}

function buildQuery(options, filters) {
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
    if (options.childAge !== '') {
        params.childAge = [options.childAge]
    }
    if (options.childAge !== []) {
        params.childAge = options.childAge
    }

    if (options.room !== "") {
        params.room = options.room
    }

    if (options.keyword !== "") {
        params.keyword = options.keyword
    }

    Object.keys(filters)
        .forEach((filterSlug) => {
            params[`filter_${filterSlug}`] = filters[filterSlug];
        });

    return queryString.stringify(params, { encode: false });
}

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_HOTEL':
            return { ...state, isLoading: true }
        case 'FETCH_HOTEL_SUCCESS':
            // alert(JSON.stringify(action.payload))
            return { ...state, listHotel: action.payload, isLoading: false }
        case 'FETCH_SEARCHHOTEL_SUCCESS':
            return { ...state, listHotelTerdekat: action.payload, isLoadingSearch: false }
        case 'SET_FILTER_VALUE':
            let page;
            if (action.filter !== 'page') {
                page = 1;
            } else {
                page = action.value;
            }
            return {
                ...state,
                filters: { ...state.filters, [action.filter]: action.value, page },
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
        case 'RESET_FILTER':
            return {
                ...state,
                filters: { page: 1, limit: 15, recomendedOnly: false, price: '0,100000000' },
            };
        default:
            throw new Error();
    }
}

function init(state) {
    const [options, filters] = parseQuery(window.location.search);
    return { ...state, options, filters };
}


function HotelProductPage() {
    const [state, dispatch] = useReducer(reducer, initialState, init);
    const { access_token } = useSelector(state => state.token);
    const { auth } = useSelector(state => state)
    const router = useRouter();

    const [coordinates, setCoordinates] = useState({});
    const [showMaps, setShowMaps] = useState(false);
    const [childClicked, setChildClicked] = useState(null);

    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' });
    const [elRefs, setElRefs] = useState([]);
    const [showSearch, setShowSearch] = useState(false);

    const [searchResult, setSearchResult] = useState();

    const [showDrawer, setShowDrawer] = useState({
        sort: false,
        filter: false
    })
    const [filtersAddon, setFiltersAddon] = useState([]);
    const completeFilters = dataFilters.concat(filtersAddon)
    const [cityUser, setCityUser] = useState("Jakarta")

    const CardHotel = isTabletOrMobile ? CardHotelMobile : CardHotelDesktop

    /* fetch filters */
    useEffect(() => {
        // ReactGA.pageview(window.location.pathname + window.location.search);
        filtersApi.getFilters({ product: 'hotel', type: 'to_do' }).then(res => {
            if (res.success) {
                setFiltersAddon(res.data)
            }
        })
    }, [])


    /* end fetch filters */
    const handleChangeOptions = (options) => {
        dispatch({ type: 'SET_OPTIONS_VALUE', value: options })
    }

    // fetch result 
    useEffect(() => {

        // ReactGA.pageview(window.location.pathname + window.location.search);
        if (state.options?.from) {
            homeApi.getAutocomplete(access_token, { product: 'hotel', q: state.options?.keyword }).then(res => {
                if (res.success) {
                    let selected = [];
                    selected = res.data.filter(item => item.id == state.options?.from)
                    setSearchResult(selected[0])
                }
            })
        }
    }, [state.options?.from, state.options?.keyword, isTabletOrMobile])

    // replace url
    useEffect(() => {

        // ReactGA.pageview(window.location.pathname + window.location.search);
        const query = buildQuery(state.options, state.filters);
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
    }, [state.options, state.filters]);

    useEffect(() => {
        // ReactGA.pageview(window.location.pathname + window.location.search);
        let canceled = true
        if (canceled) {
            dispatch({ type: 'FETCH_HOTEL' })
            shopApi.getHotelProducts(access_token, state.options, state.filters).then(res => {
                if (res.success) {
                    dispatch({ type: 'SET_META', payload: res.meta })
                    setCoordinates({ lng: Number(res.data.productOptions[0]?.detail.longitude), lat: Number(res.data.productOptions[0]?.detail.latitude) })
                    dispatch({ type: 'FETCH_HOTEL_SUCCESS', payload: res.data.productOptions })
                } else {
                    dispatch({ type: 'FETCH_HOTEL_SUCCESS', payload: [] })
                    dispatch({ type: 'SET_META', payload: {} })
                }
            })
        }
        return () => {
            canceled = false
        }
    }, [state.options, state.filters])

    //FETCH_SEARCHHOTEL_SUCCESS

    useEffect(() => {
        // ReactGA.pageview(window.location.pathname + window.location.search);
        if (state.listHotel) {
            const refs = Array(state?.listHotel?.length).fill().map((_, i) => elRefs[i] || createRef())
            setElRefs(refs)
        }

    }, [state.listHotel])

    const handleShowDrawer = (type) => {
        setShowDrawer(state => ({ ...state, [type]: !state[type] }))
    }

    const handleChangePage = (value) => {
        dispatch({ type: 'SET_FILTER_VALUE', filter: 'page', value })
        window.scrollTo(0, 0);
    }
    const onNext = () => {
        if (state?.meta?.page >= 1 && state?.meta?.page < Math.ceil(state?.meta?.total / state?.meta?.limit)) {
            handleChangePage(state?.meta?.page + 1);
        }
    };

    const onPrevious = () => {
        if (state?.meta?.page > 1) {
            handleChangePage(state?.meta?.page - 1);
        }
    };

    const handleShowMap = () => {
        setShowMaps(prev => !prev);
    }

    function toDate(date) {
        var from = date.split("-")
        return new Date(from[2], from[1] - 1, from[0])
    }

    const renderContentTerdekat = (forMaps) => {
        return state.listHotelTerdekat?.length > 0 ? state.listHotelTerdekat?.map((item, index) => (<div ref={elRefs[index]} key={index}>
            <CardHotel
                style={{ boxShadow: "5px 5px 15px -5px rgb(32, 0, 255) !important" }}
                refProp={elRefs[index]}
                selected={Number(childClicked) === index} forMaps={forMaps} key={index} options={state.options} type="terdekat" loading={state.isLoading} hotel={item} listHotel={state.listHotel} />
        </div>)) :
            <></>
    }

    const renderContent = (forMaps) => {
        return state.listHotel?.length > 0 ? state.listHotel?.map((item, index) => (<div ref={elRefs[index]} key={index}>
            <CardHotel
                refProp={elRefs[index]}
                selected={Number(childClicked) === index} forMaps={forMaps} key={index} options={state.options} loading={state.isLoading} hotel={item} listHotel={state.listHotel} />
        </div>)) :
            <div className="text-center mt-5 mb-5 ">
                <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/no-room.svg" style={{
                    width: '100%', height: "280px"
                }} className="mt-4" />
                <h5>Hasil pencarian tidak ditemukan</h5><p>Silahkan perbaharui pencarian Anda.</p>
            </div>
    }

    useEffect(() => {
        if (navigator.geolocation) {
            // alert("Geolocation is useEffect.");
            navigator.geolocation.getCurrentPosition(
                handleSuccess,
                handleError
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }, [])

    const handleSuccess = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setTimeout(() => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            homeApi.getHotelTerdekatCard(latitude, longitude).then(res => {
                if (res.success === true) {
                    dispatch({ type: 'FETCH_SEARCHHOTEL_SUCCESS', payload: res.data })
                } else {
                    dispatch({ type: 'FETCH_SEARCHHOTEL_SUCCESS', payload: [] })
                }
            })
        }, 100);

        homeApi.getGeocoder(latitude, longitude).then(res => {
            if (res.status === 'OK') {

                if (res.results[0]) {
                    const address = res.results[0].formatted_address;
                    const addressComponents = res.results[0].address_components;
                    const cityComponent = addressComponents.find(component =>
                        component.types.includes('administrative_area_level_2')
                    );

                    // alert("Current latitude:" + addressComponents + ", " + cityComponent);
                    if (cityComponent) {
                        const city = cityComponent.long_name.replace('Kota ', '');;
                        setCityUser(city);
                        const lat = parseFloat(latitude, 2);
                        const long = parseFloat(longitude, 1);

                    } else {
                        alert("City not found in geocode results.");
                        // this.setState({ city: '', error: 'City not found in geocode results.' });
                    }
                    // alert("Current location:" + address);
                    // setAddressNow(address)


                } else {
                    alert("No results found.");
                }
            } else {
                alert("Geocoder failed due to:" + res.status);
            }
        })
    };

    const handleError = (error) => {
        console.log("Error occurred while retrieving geolocation:", error);
    };

    function ReactTitle(text) {
        document.title = 'Hotel di ' + text + ' - Booking Hotel Online Promo dan Diskon Spesial 2023';
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    if (isTabletOrMobile && showSearch) {
        return <HotelPage resetFilter={() => dispatch({ type: 'RESET_FILTER' })} onBack={() => setShowSearch(false)} handleChangeOptions={handleChangeOptions} options={state.options} />
    }

    return (
        <>
            {isTabletOrMobile &&
                <HeaderBack onBack={() => router.back()}>
                    <div className="col-8 font-weight-bold d-flex align-items-center justify-content-center flex-column p-0">
                        <p className="text-center text-white d-block" style={{ fontSize: '14px', marginBottom: '-5px' }}>{searchResult?.name || state.options.keyword} - {`${Number(state.options.adult || 0) + Number(state.options.child || 0)} Tamu, ${state.options.room} Kamar`}</p>
                        <p className="text-center text-white mb-0" style={{ fontSize: '12px' }}>{moment(toDate(state.options.dateFrom)).format('DD MMM YYYY')} - {moment(toDate(state.options.dateTo)).format('DD MMM YYYY')}
                        </p>
                    </div>
                    <div className="col-2 d-flex justify-content-end align-items-center">
                        <Icon onClick={() => setShowSearch(true)} icon={EditIcon} style={{ fontSize: '23px' }} className='text-white text-right' />
                    </div>
                </HeaderBack>
            }
            {!isTabletOrMobile &&
                <div className="w-100 pt-3 pb-2">
                    <div className="container">
                        <WidgetHotel handleChangeOptions={handleChangeOptions} options={state.options} cityUser={cityUser} />
                    </div>
                </div>
            }
            <div className="container mb-3 pb-5">
                <div className="row mt-2">
                    {showMaps ?
                        <>
                            <div className="col-12 my-3">
                                <span className="text-center text-white bg-primary p-2 rounded" style={{ cursor: 'pointer', fontSize: '16px' }} onClick={handleShowMap}>
                                    <Icon icon="ic:round-chevron-left" style={{ fontSize: '22px' }} /> Kembali</span>
                            </div>
                            <div id={'hotels'} className="col-6" style={{
                                maxHeight: '100vh',
                                overflowX: 'auto'
                            }}>
                                {
                                    (state.isLoading) ?
                                        [1, 2, 3, 4, 5].map(item => <CardHotel key={item} loading={state.isLoading} hotel={item} />)
                                        : renderContent(true)

                                }
                            </div>
                            <div className="col-6">
                                {!state.isLoading &&
                                    <Map
                                        setCoordinates={setCoordinates}
                                        coordinates={coordinates}
                                        places={state.listHotel}
                                        setChildClicked={setChildClicked}
                                    />
                                }
                            </div>
                            <div className="col-12 my-2">
                                {(!state.isLoading && state.listHotel?.length > 0 && Object.keys(state?.meta).length > 0) &&
                                    <div className="d-flex justify-content-center w-100 mt-3">
                                        <MDPagination onPageChange={handleChangePage} currentPage={state?.meta?.page} pageSize={state?.meta?.limit} totalCount={state?.meta?.total} className="pagination-bar" />
                                    </div>
                                }
                            </div>
                        </>
                        :
                        <>
                            {!isTabletOrMobile &&
                                <div className="col-3">
                                    <div onClick={handleShowMap} style={{
                                        padding: '5px',
                                        height: 'auto',
                                        marginBottom: '12px'
                                    }}>
                                        <div className="mb-2" style={{ cursor: 'pointer', position: 'relative', background: "url('https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/map-view-bg.svg') no-repeat center center/cover", width:'100%', borderRadius: '10px', height: '80px' }}>
                                            <div style={{
                                                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'
                                            }} className="text-center text-white bg-primary w-50 font-weight-bold p-2 rounded"> <Icon icon="mingcute:location-2-line" style={{fontSize: '18px'}} className="mr-1" />Open Maps</div>
                                        </div>
                                    </div>

                                    <WidgetFilter forCom='hotel' dispatch={dispatch} values={state.filters} filters={completeFilters} title='Filter' />
                                </div>
                            }
                            <div className={classNames("", {
                                'col-9': !isTabletOrMobile,
                                'col-12': isTabletOrMobile
                            })}>
                                {!isTabletOrMobile &&
                                    <div>
                                        <div className="row my-1 align-items-center justify-content-center">
                                            <div className="col-12 pt-3 rounded" style={{ background: '#015386', boxShadow: '-1px 3px 11px -7px rgba(156,156,156,0.75)' }}>
                                                <p className="text-white font-weight-bold" style={{ fontSize: '14px' }}>
                                                    <Icon icon="solar:calendar-bold-duotone" className="mr-2" style={{fontSize: '18px'}}></Icon> Dapatkan Kamar dan Tanggal Pasti buat Liburan Sesuka Hati
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row mt-2 mb-3 align-items-center justify-content-center bg-white rounded" style={{ boxShadow: '-1px 3px 11px -7px rgba(156,156,156,0.75)' }}>
                                            <div className="col-4 pt-3">
                                                <p style={{ fontSize: '16px' }}>
                                                    <span class="text-primary font-weight-bold">{state.meta.total || 0}</span> properti ditemukan di
                                                    <span class="text-primary font-weight-bold"> {searchResult?.name || state.options.keyword} {ReactTitle(searchResult?.name || state.options.keyword)}</span>
                                                </p>
                                            </div>
                                            <div className="col-3 pt-3">
                                                <p className="text-right text-primary font-weight-bold">
                                                    Per kamar, per malam
                                                </p>
                                            </div>
                                            <div className="col-2 pt-3">
                                                <p>
                                                    Layout
                                                    <span className="text-primary px-2"><Icon icon="tabler:layout-list" style={{ fontSize: '18px', cursor: 'pointer' }} /></span>
                                                    <span><Icon icon="tabler:layout-grid" style={{ fontSize: '18px', cursor: 'pointer' }} /></span>
                                                </p>
                                            </div>
                                            <div className="col-3 pt-1">
                                                <WidgetSorting dispatch={dispatch} state={state} data={sort} />
                                            </div>
                                        </div>
                                    </div>
                                }
                                <div>
                                    {!auth ? <>
                                        <section className="my-3">
                                            <div className="card" style={{
                                                border: '4px dashed #0070BA',
                                                borderRadius: '20px',
                                                background: 'rgb(250, 249, 237)'
                                            }}>
                                                <div className="p-3">
                                                    <div className="d-flex flex">
                                                        <div style={{ width: '90px', height: '90px', display: 'inline-block', position: 'relative' }}>
                                                            <Image layout='fill' src={`https://cdn.masterdiskon.com/masterdiskon/icon/fe/add-user.png`} />
                                                        </div>
                                                        <div className='ml-3'>
                                                            <p className="mb-0">Login untuk promo khusus member</p>
                                                            {/* <p className="mb-0">{laptopPosition}, {laptopPosition}</p> */}
                                                            <p className="mb-3">Lihat semua Diskon Rahasia</p>
                                                            <Link href='/login' passHref>
                                                                <a className="btn btn-sm btn-primary mr-3">Login</a>
                                                            </Link>
                                                            <Link href='/register' passHref>
                                                                <a className="btn btn-sm btn-danger">Daftar</a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </> : <></>}
                                </div>
                                {
                                    (state.isLoading) ?
                                        [1, 2, 3, 4, 5].map(item => <CardHotel key={item} loading={state.isLoading} hotel={item} />)
                                        : renderContentTerdekat()

                                }
                                {
                                    (state.isLoading) ?
                                        [1, 2, 3, 4, 5].map(item => <CardHotel key={item} loading={state.isLoading} hotel={item} />)
                                        : renderContent()

                                }
                                {(!state.isLoading && state.listHotel?.length > 0 && Object.keys(state.meta).length > 0 && !isTabletOrMobile) &&
                                    <div className="d-flex justify-content-center w-100 mt-4">
                                        <MDPagination onPageChange={handleChangePage} currentPage={state.meta.page} pageSize={state.meta.limit} totalCount={state.meta.total} className="pagination-bar" />
                                    </div>
                                }
                            </div>
                        </>
                    }
                </div>
            </div>
            {isTabletOrMobile &&
                <nav style={{
                    zIndex: '9999', height: '40px'
                }} className="navbar bg-white fixed-bottom shadow pb-0">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <div onClick={() => handleShowDrawer('sort')}>
                                <h6><Icon icon={SortIcon} className='text-primary' />  Sort</h6>
                            </div>
                            <div className="d-flex flex-1 align-items-center">
                                <h6>
                                    <i className="fas fa-caret-left mr-2" onClick={onPrevious}></i>
                                    Page {state?.meta?.page ?? 1} - {!!(state?.meta?.total / state?.meta?.limit) ? Math.ceil(state?.meta?.total / state?.meta?.limit) : 1} <i onClick={onNext} className="fas fa-caret-right ml-2"></i>
                                </h6>
                            </div>
                            <h6 onClick={() => handleShowDrawer('filter')}><i className="fas fa-sliders-h text-primary"></i> Filter</h6>
                        </div>
                    </div>
                </nav>
            }

            {/* drawer sorting */}
            {isTabletOrMobile &&
                <>
                    <DrawerSortHotel open={showDrawer.sort} toggle={handleShowDrawer} data={sort} dispatch={dispatch} state={state} />
                    <DrawerFilterHotel open={showDrawer.filter} toggle={handleShowDrawer} dispatch={dispatch} values={state.filters} filters={completeFilters} title='Filter' />
                </>
            }

        </>
    );
}

const dataFilters = [
    { name: 'Pencarian Hotel', value: '', type: 'search', slug: 'search' },
    // {
    //     name: '', slug: 'recomendedOnly', value: [], type: 'check', items: [
    //         { slug: 'true', name: 'Rekomendasi Hotel' },
    //     ]
    // },
    { name: 'Kisaran Harga', slug: 'price', value: [], type: 'range', defaultValue: [0, 20000000] },
    {
        name: 'Bintang', value: [], type: 'check', slug: 'class',
        items: [
            { slug: '5', name: 'Bintang 5', icon: 'fluent-emoji-flat:star', isImg: true, loop: true, className: 'text-warning' },
            { slug: '4', name: 'Bintang 4', icon: 'fluent-emoji-flat:star', isImg: true, loop: true, className: 'text-warning' },
            { slug: '3', name: 'Bintang 3', icon: 'fluent-emoji-flat:star', isImg: true, loop: true, className: 'text-warning' },
            { slug: '2', name: 'Bintang 2', icon: 'fluent-emoji-flat:star', isImg: true, loop: true, className: 'text-warning' },
            { slug: '1', name: 'Bintang 1', icon: 'fluent-emoji-flat:star', isImg: true, loop: true, className: 'text-warning' },
        ]
    },
    {
        name: 'Reviews', value: [], type: 'check', slug: 'reviews',
        items: [
            { slug: '9.0', range: '9.0', name: 'Superb 9+' },
            { slug: '8.0', range: '8.0', name: 'Impressive 8+' },
            { slug: '7.0', range: '7.0', name: 'Convenient 7+' },
            { slug: '6.0', range: '6.0', name: 'Good 6+' },
            // { slug: '1', name: '< 63', title: '',},
        ]
    },
]

const sort = {
    type: 'select',
    sorts: [
        { name: 'Rating Tertinggi', value: 'ratingDesc' },
        { name: 'Rating Terendah', value: 'ratingAsc' },
        { name: 'Ulasan Terbaik', value: 'ulasanDesc' },
        { name: 'Harga Terendah', value: 'asc' },
        { name: 'Harga Tertinggi', value: 'desc' },
    ]
}

export default HotelProductPage;