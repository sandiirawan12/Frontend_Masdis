import { Icon } from "@iconify/react";
import EditIcon from '@iconify/icons-fa-solid/edit';
import WidgetSorting from "../shared/WidgetSorting";
import CardFlight from "../shared/CardFlight";
import CardFlightMobile from "@/components-mobile/shared/CardFlight";
import WidgetFilter from "../widgets/WidgetFilter";
import { useRouter } from "next/router";
import queryString from 'query-string';
import { useEffect, useReducer, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import shopApi from "@/api/shop";
import moment from "moment";
import idLocale from 'moment/locale/id';
import { Collapse } from "reactstrap";
import WidgetFlight from "../widgets/WidgetFlight";
import { changeRedirectUrl } from "@/store/redirectUrl/redirectUrlActions";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";
import HeaderBack from "@/components-mobile/header/HeaderBack";
import SortIcon from '@iconify-icons/fa/filter'
import WidgetFilterFlight from "@/components-mobile/shared/WidgetFilterFlight";
import WidgetSort from "@/components-mobile/shared/WidgetSort";
import FlightPage from "@/components-mobile/page/FlightPage";
import Link from 'next/link'
import ReactPlaceholder from 'react-placeholder/lib';

import ReactGA from 'react-ga';
ReactGA.initialize('G-56R5954QCE');


const initialState = {
    options: {},
    filters: {},
    dataFilters: [
        {
            name: 'Jumlah Transit', slug: 'transit', value: [], type: 'check', items: [
                { slug: '0', name: 'Langsung' },
                { slug: '1', name: '1 Transit' },
                { slug: '2', name: '2+ Transit' },
            ]
        },
        {
            name: 'Waktu Berangkat', slug: 'departure_time', value: [], type: 'time', items: [
                { slug: '00:00-06:00', name: 'Malam Ke Pagi', icon: 'moonSolid' },
                { slug: '06:00-12:00', name: 'Pagi Ke Siang', icon: 'sunSolid' },
                { slug: '12:00-18:00', name: 'Siang Ke Sore', icon: 'sunRegular' },
                { slug: '18:00-24:00', name: 'Sore Ke Malam', icon: 'moonRegular' },
            ]
        },
        {
            name: 'Waktu Tiba', slug: 'arrival_time', value: [], type: 'time', items: [
                { slug: '00:00-06:00', name: 'Malam Ke Pagi', icon: 'moonSolid' },
                { slug: '06:00-12:00', name: 'Pagi Ke Siang', icon: 'sunSolid' },
                { slug: '12:00-18:00', name: 'Siang Ke Sore', icon: 'sunRegular' },
                { slug: '18:00-24:00', name: 'Sore Ke Malam', icon: 'moonRegular' },
            ]
        },
        {
            name: 'Fasilitas', value: [], type: 'check', slug: 'facility',
            items: [
                { slug: 'baggage', name: 'Bagasi', icon: 'fluent-emoji:luggage', loop: true, iconType: true, className: 'text-warning' },
                { slug: 'meal', name: 'Makanan Di Pesawat', icon: 'fxemoji:hamburger', loop: true, iconType: true, className: 'text-warning' }
            ]
        },
        { name: 'Kisaran Harga', slug: 'price', value: [], type: 'range', defaultValue: [0, 50000000] },
    ],
    meta: {},
    listFlight: undefined,
    isLoading: true
};

function parseQueryOptions(location) {
    const query = queryString.parse(location);

    const optionValues = {
        product: 'flight',
        from: "",
        to: "",
        dateFrom: "",
        dateTo: "",
        classCabin: "",
        direct: "",
    };

    if (typeof query.from === "string") {
        optionValues.from = query.from
    }
    if (typeof query.to === "string") {
        optionValues.to = query.to
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
    if (typeof query.infant === "string") {
        optionValues.infant = query.infant
    }
    if (typeof query.classCabin === "string") {
        optionValues.classCabin = query.classCabin
    }

    if (typeof query.direct === "string") {
        optionValues.direct = query.direct === false ? false : query.direct === "false" ? false : true
    }
    return optionValues;
}

function parseQueryFilters(location) {
    const query = queryString.parse(location);
    const filterValues = {
        transit: "",
        departure_time: "",
        arrival_time: "",
        facility: "",
        airline_code: "",
        price: "100000,50000000"
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
    if (options.dateTo === "") {
        params.dateTo = options.dateTo
    }
    if (options.adult !== "") {
        params.adult = options.adult
    }
    if (options.child !== "") {
        params.child = options.child
    }
    if (options.infant !== "") {
        params.infant = options.infant
    }
    if (options.classCabin === "") {
        params.classCabin = options.classCabin
    }

    if (options.direct !== "") {
        params.direct = options.direct === false ? false : options.direct === "false" ? false : true 
    }

    Object.keys(filters)
        .forEach((filterSlug) => {
            params[`filter_${filterSlug}`] = filters[filterSlug];
        });


    return queryString.stringify(params, { encode: false });
}

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_FLIGHT':
            return { ...state, isLoading: true }
        case 'FETCH_FLIGHT_SUCCESS':
            return { ...state, listFlight: action.payload, isLoading: false }
        case 'SET_FILTER_VALUE':
            return {
                ...state,
                options: { ...state.options, page: 1 },
                filters: { ...state.filters, [action.filter]: action.value },
            };
        case 'SET_DATA_FILTER':
            let dataFilters = [...state.dataFilters.filter(item => item.slug !== action.value.slug)]
            dataFilters.splice(3, 0, action.value)
            return {
                ...state,
                dataFilters
            };
        case 'SET_META':
            return {
                ...state, meta: action.payload,
            };
        case 'RESET_FILTER':
            return {
                ...state, filters: {},
            };
        case 'SET_OPTION_VALUE':
            return {
                ...state,
                options: action.value,
            };
        default:
            throw new Error();
    }
}

function init(state) {
    const [options, filters] = parseQuery(window.location.search);
    return { ...state, options, filters };
}

function FlightProductPage() {
    const [state, dispatch] = useReducer(reducer, initialState, init);
    const router = useRouter()
    const { access_token } = useSelector(state => state.token);
    const [openSearch, setOpenSearch] = useState(false);

    const [isChange, setIsChange] = useState(false)
    const [optionsRt, setOptionsRt] = useState([])
    const auth = useSelector(state => state.auth);

    const [detailSearch, setDetailSearch] = useState({});

    const [open, setOpen] = useState({ filter: false, sort: false })

    const [passanger, setPassanger] = useState({
        adult: state.options.adult ? state.options.adult : 1,
        child: state.options.child ? state.options.child : 0,
        infant: state.options.infant ? state.options.infant : 0
    })

    const [flightReturn, setFlightReturn] = useState(state.options?.dateTo ? true : false)

    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' })

    const dispatchReduce = useDispatch()
    const [flightChoose, setFlightChoose] = useState({ flight1: undefined, flight2: undefined })
    const [statSort, setStatSort] = useState({
        price: true,
        'departure_time': true,
        'arrival_time': true,
        'duration': true,
    })

    const handleChangeOptions = (options) => {
        dispatch({ type: 'SET_OPTION_VALUE', value: { ...options, product: 'flight' } })
    }

    const handleOpen = (field) => {
        setOpen(state => ({ ...state, [field]: !state[field] }));
    }

    const handleSearch = () => {
        const params = {
            ...passanger,
            from: state.options.from,
            to: state.options.to,
            dateFrom: state.options.dateFrom,
            dateTo: flightReturn ? state.options.dateTo : '',
            classCabin: state.options.classCabin,
            direct: state.options.direct === false ? false : state.options.direct === "false" ? false : true
        }

        if (handleChangeOptions) {
            handleChangeOptions(params)
        }

        router.push(`/product/flight?${queryString.stringify(params)}`)
    }

    // replace url
    useEffect(() => {

        ReactGA.pageview(window.location.pathname + window.location.search);

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
        dispatch({ type: 'FETCH_FLIGHT' })
        shopApi.getFlightProducts(access_token, state.options, { ...state.filters, statSort }).then(res => {
            if (res.success) {
                let items = res.data.filter.airlines.onward.map(item => ({ name: item.name, slug: item.code, img: item.image, imgType: true }))
                if (flightChoose.flight1) {
                    items = res.data.filter.airlines.return.map(item => ({ name: item.name, slug: item.code, img: item.image, imgType: true }))
                }
                const value = {
                    name: 'Maskapai', slug: 'airline_code', value: [], type: 'check', items
                }

                dispatch({ type: 'SET_DATA_FILTER', value })
                setOptionsRt(res.data.optionsRt.length)

                setDetailSearch(res.data.detail)

                if (flightChoose.flight1) {
                    dispatch({ type: 'FETCH_FLIGHT_SUCCESS', payload: res.data.optionsRt })
                } else {
                    dispatch({ type: 'FETCH_FLIGHT_SUCCESS', payload: res.data.options })
                }
                if (!isTabletOrMobile) {
                    setStatSort(prev => ({ ...prev, [state.filters.orderType]: !prev[state.filters.orderType] }))
                }
            }
        })
    }, [state.options, state.filters]);



    const handleApplyFilter = () => {
        handleOpen('filter')
    }

    function toDate(date) {
        var from = date.split("-")
        return new Date(`${from[2]}-${from[1]}-${from[0]}`)
    }
    const handleSelected = (item) => {
        if (optionsRt > 0) {
            if (!flightChoose.flight1) {
                setFlightChoose({ ...flightChoose, flight1: item })
                dispatch({ type: 'RESET_FILTER' })
            } else {
                setFlightChoose({ ...flightChoose, flight2: item })
                if (!auth) {
                    dispatchReduce(changeRedirectUrl(`/product/flight/flight-passenger/${flightChoose.flight1.id}?key=${item.id}`))
                }

                router.push(`/product/flight/flight-passenger/${flightChoose.flight1.id}?key=${item.id}`)
            }
        } else {
            if (!auth) {
                dispatchReduce(changeRedirectUrl(`/product/flight/flight-passenger/${item.id}`))
            }
            router.push(`/product/flight/flight-passenger/${item.id}`)
        }
    }


    const renderContent = () => {
        return state.listFlight?.length > 0 ? state.listFlight?.map((item, index) => isTabletOrMobile ? <CardFlightMobile handleSelected={handleSelected} isLoading={state.isLoading} key={index} index={index} flight={item} /> : <CardFlight handleSelected={handleSelected} isLoading={state.isLoading} key={index} index={index} flight={item} />) : <div className="pesawat-opsi-dep">
            <div className="text-center mt-5 mb-5">
                <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/no-room.svg" className="mt-4" style={{
                    width: '100%', height: "280px"
                }} />
                <h5>Hasil pencarian tidak ditemukan</h5><p>Silahkan perbaharui pencarian Anda.</p>
            </div>
        </div>
    }

    if (openSearch) {
        return <FlightPage onClose={() => setOpenSearch(false)} handleChangeOptions={handleChangeOptions} options={state.options} />
    }

    return (
        <div>
            {isTabletOrMobile &&
                <HeaderBack onBack={() => router.back()}>
                    {(state.options.dateTo && flightChoose.flight1) ?
                        <>
                            <div className="col-8 font-weight-bold">
                                <div className="font-weight-bold p-0">
                                    <p className="text-center text-white d-block" style={{ fontSize: '14px', marginBottom: '-5px' }}>{state.options.to}-{state.options.from}, {Number(state.options.adult || 0) + Number(state.options.infant || 0) + Number(state.options.child || 0)} Penumpang</p>
                                    <p className="text-center text-white mb-0" style={{ fontSize: '12px' }}>{moment(toDate(state.options.dateTo)).locale('id', idLocale).format('DD MMM YYYY')}
                                    </p>
                                </div>
                            </div>
                            <div className="col-2 d-flex justify-content-end align-items-center">
                                <Icon onClick={() => setOpenSearch(true)} style={{ fontSize: '23px' }} icon={EditIcon} className='text-white text-right' />
                            </div>
                        </>
                        :
                        <>
                            <div className="col-8 font-weight-bold">
                                <div className="font-weight-bold p-0">
                                    <p className="text-center text-white d-block" style={{ fontSize: '14px', marginBottom: '-5px' }}>{state.options.from} - {state.options.to}, {Number(state.options.adult || 0) + Number(state.options.infant || 0) + Number(state.options.child || 0)} penumpang</p>
                                    <p className="text-center text-white mb-0" style={{ fontSize: '12px' }}>{moment(toDate(state.options.dateFrom)).locale('id', idLocale).format('DD MMM YYYY')}
                                    </p>
                                </div>
                            </div>
                            <div className="col-2 d-flex justify-content-end align-items-center">
                                <Icon onClick={() => setOpenSearch(true)} icon={EditIcon} style={{ fontSize: '23px' }} className='text-white text-right' />
                            </div>
                        </>
                    }
                </HeaderBack>
            }

            {!isTabletOrMobile && <>
                <section className="border-bottom mt-3" style={{ background: '#f5f6fa' }}>
                    <div className="container">
                        <div className="row mb-2">
                            <div className="py-2 col-md-10">
                                <div className="d-flex text-white font-weight-bold justify-content-around align-items-center p-2 rounded" style={{ background: '#1d81c6', border: '1px solid #dfdfdf' }}>
                                    <span className="mb-0 s_origin">{detailSearch.from} ({state.options.from})</span>
                                    <span className="mx-2">→</span>
                                    <span className="mb-0 s_destination">{detailSearch.to} ({state.options.to})</span>
                                    |
                                    {state.options.dateFrom ?
                                        <p className="mb-0 s_departuredate">{moment(toDate(state.options.dateFrom)).locale('id', idLocale).format('ddd, DD MMM YYYY')}</p>
                                        :
                                        <></>
                                    }
                                    {state.options.dateTo ?
                                        <span>&</span>
                                        :
                                        <></>
                                    }
                                    {state.options.dateTo ?
                                        <p className="mb-0 s_departuredate"> {moment(toDate(state.options.dateTo)).locale('id', idLocale).format('ddd, DD MMM YYYY')}</p>
                                        :
                                        <></>
                                    }
                                    |
                                    <p className="mb-0"><span className="s_guest">
                                        {Number(state.options.adult || 0) + Number(state.options.infant || 0) + Number(state.options.child || 0)}
                                    </span>{" "}Penumpang</p>
                                    |
                                    <p className="mb-0 s_cabinclass">
                                        {
                                            state.options.classCabin === "" ? 'All' :
                                                state.options.classCabin === "E" ? 'Economy' :
                                                    state.options.classCabin === "S" ? 'Premium Economy' :
                                                        state.options.classCabin === "B" ? 'Bussiness' :
                                                            state.options.classCabin === "F" ? 'First Class' : ''
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className="py-2 col-md-2">
                                <span onClick={() => setIsChange(!isChange)} className="text-primary p-2" type="button" >
                                    <Icon icon="icon-park-twotone:search" className="mr-1" /> Ganti pencarian
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                {flightChoose.flight1 ?
                    <div className="border-bottom mt-2" style={{ background: '#f5f6fa' }}>
                        <div className="container">
                            <div className="row mb-2">
                                <div className="col-md-12">
                                    <div className="d-flex align-items-center bg-white p-2 rounded" style={{ border: '1px solid #dfdfdf' }}>
                                        <div className="mx-2">
                                            Pilihan Keberangkatan
                                        </div>
                                        <div className="bg-white mr-3">
                                            <img style={{ width:'42px', height: '42px' }} src={flightChoose.flight1?.image} className="airline-img" alt="airline-img" />
                                        </div>
                                        <div className="d-flex align-items-center my-1">
                                            <div>
                                                <div className="d-flex align-items-center">
                                                    <span className="font-weight-bold">{flightChoose.flight1?.name}</span>
                                                    <span className="mx-2">-</span>
                                                    <span>{flightChoose.flight1?.code}</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center mx-4">
                                                <div className="text-center">
                                                    <span className="mb-0">
                                                        {flightChoose.flight1?.detail.from.city}
                                                    </span>
                                                </div>
                                                <span className="mx-2 text-primary"><Icon icon="pepicons-print:arrow-right" /></span>
                                                <div className="text-center">
                                                    <span className="mb-0">
                                                        {flightChoose.flight1?.detail.to.city}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="mr-4">
                                                <span>{flightChoose.flight1?.detail.flight[0].departure.date} {flightChoose.flight1?.detail.flight[0].departure.time}</span>
                                            </div>
                                            <div className="mr-4">
                                                <span>{flightChoose.flight1?.duration}</span>
                                            </div>
                                            <div>
                                                <p className="mb-1" style={{ fontSize: '20px' }}>
                                                    <b className="text-danger">Rp {flightChoose.flight1?.price.toLocaleString()}</b>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    ''
                }
                <Collapse isOpen={isChange} >
                    <div className="container mt-3">
                        <WidgetFlight handleChangeOptions={handleChangeOptions} options={state.options} />
                    </div>
                </Collapse>

            </>}
            <div className="container my-4 pb-5">
                <div className="row">
                    {!isTabletOrMobile &&
                        <div className="col-3">
                            <div className="mb-4 p-3 bg-white rounded border">
                                <span className="font-weight-bold">
                                    <Icon icon="noto:airplane" className="mr-3" style={{ fontSize: '20px' }} />
                                    Penerbangan Anda
                                </span>
                                {state.isLoading ?
                                    <ReactPlaceholder type='rect' style={{ height: '30px', width: '200px' }} className="mt-3" showLoadingAnimation ready={!state.isLoading} />
                                    :
                                    <div>
                                        {state.options.dateFrom ?
                                            <div className="mt-3" style={{ borderRight: '3px solid #015386' }}>
                                                <small>{moment(toDate(state.options.dateFrom)).locale('id', idLocale).format('ddd, DD MMM YYYY')}</small> <br />
                                                <span className="font-weight-bold">{detailSearch.from} <Icon icon="solar:arrow-right-line-duotone" className="text-primary mx-2" /> {detailSearch.to}</span>
                                            </div>
                                            :
                                            <></>
                                        }
                                        {state.options.dateTo ?
                                            <div>
                                                <hr />
                                                <div style={{ borderRight: '3px solid #015386' }}>
                                                    <small>{moment(toDate(state.options.dateTo)).locale('id', idLocale).format('ddd, DD MMM YYYY')}</small> <br />
                                                    <span className="font-weight-bold">
                                                        {detailSearch.to}
                                                        <Icon icon="solar:arrow-right-line-duotone" className="text-primary mx-2" />
                                                        {detailSearch.from}
                                                    </span>
                                                </div>
                                            </div>
                                            :
                                            <></>
                                        }
                                    </div>
                                }
                            </div>
                            <WidgetFilter title='Filter' filters={state.dataFilters} values={state.filters} dispatch={dispatch} />
                        </div>
                    }
                    <div className={classNames("col-9", {
                        'col-12': isTabletOrMobile
                    })}>

                        {!isTabletOrMobile && <>
                            <div>
                                <div className="d-flex align-items-center justify-content-between px-3 mt-2 mb-3 rounded" style={{ background: '#015386', boxShadow: '-1px 3px 11px -7px rgba(156,156,156,0.75)' }}>
                                    <div className="d-flex align-items-center text-white">
                                        <Icon style={{ fontSize: '20px' }} icon="solar:chat-square-like-bold-duotone" className="mr-2" />
                                        <p style={{ fontSize: '14px' }} className="pt-3 font-weight-bold">
                                            Temukan Promo Lebih Untung Di Sini!
                                        </p>
                                    </div>
                                    <div>
                                        <Link href='/promo'>
                                            <span className="text-warning font-weight-bold" style={{ cursor: 'pointer' }}>Cek Sekarang</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between px-3 mt-2 mb-3 bg-white rounded" style={{ boxShadow: '-1px 3px 11px -7px rgba(156,156,156,0.75)' }}>
                                    <div>
                                        {state.isLoading ?
                                            <ReactPlaceholder type='rect' style={{ height: '30px', width: '150px' }} className="my-2" showLoadingAnimation ready={!state.isLoading} />
                                            :
                                            <p style={{ fontSize: '16px' }} className="pt-3">
                                                Pencarian anda dari <span class="text-primary font-weight-bold">{detailSearch.from}</span> ke <span class="text-primary font-weight-bold">{detailSearch.to}</span>
                                            </p>
                                        }
                                    </div>
                                    <div>
                                        <span onClick={handleSearch} style={{ cursor: 'pointer' }}>
                                            <Icon icon="icon-park-twotone:search" className="mr-2 text-primary"></Icon>
                                            Refresh Schedule
                                        </span>
                                    </div>
                                    <div>
                                        <WidgetSorting data={dataSorting} dispatch={dispatch} state={state} />
                                    </div>
                                </div>
                            </div>
                        </>}
                        {(state.isLoading) ?
                            [1, 2, 3, 4, 5].map((item, index) => (
                                <CardFlight isLoading={state.isLoading} key={index} index={index} flight={item} />
                            ))
                            :
                            renderContent()
                        }
                    </div>
                </div>
            </div>
            {isTabletOrMobile &&
                <nav style={{
                    zIndex: '1', height: '40px'
                }} className="navbar bg-white fixed-bottom shadow pb-0">
                    <div className="container">
                        <div className="d-flex justify-content-between w-100">
                            <div >
                                <h6 style={{ cursor: 'pointer' }} onClick={() => handleOpen('sort')}><Icon icon={SortIcon} className='text-primary' />  Sort</h6>
                            </div>
                            <div className="d-flex">
                                <h6 style={{ cursor: 'pointer' }} className="mr-4" onClick={() => handleOpen('filter')}><i className="fas fa-sliders-h text-primary"></i> Filter</h6>
                                <h6 onClick={() => window.location.reload()} style={{ cursor: 'pointer' }}><i className="fas fa-sync text-primary"></i> Refresh</h6>
                            </div>
                        </div>
                    </div>
                </nav>
            }

            {isTabletOrMobile &&
                <>
                    <WidgetFilterFlight handleApplyFilter={handleApplyFilter} open={open.filter} toggle={handleOpen} title='Filter' filters={state.dataFilters} values={state.filters} dispatch={dispatch} />
                    <WidgetSort setStatSort={setStatSort} open={open.sort} toggle={handleOpen} data={dataSortingMobile} statSort={statSort} dispatch={dispatch} state={state} />
                </>
            }

        </div>

    );
}

const dataSorting = {
    type: 'select',
    sorts: [
       { name: 'Harga Terendah', value: 'price_asc', asc: true },
        { name: 'Harga Tertinggi', value: 'price_desc', asc: false },
        { name: 'Keberangkatan Paling Awal', value: 'departure_time_asc', asc: true },
        { name: 'Keberangkatan Paling Akhir', value: 'departure_time_desc', asc: false },
        { name: 'Tiba Paling Awal', value: 'arrival_time_asc', asc: true },
        { name: 'Tiba Paling Akhir', value: 'arrival_time_desc', asc: false },
        { name: 'Durasi', value: 'duration', asc: true },
    ]
}

const dataSortingMobile = {
    type: 'button',
    sorts: [
        { name: 'Harga Terendah', value: 'price', asc: true },
        { name: 'Harga Tertinggi', value: 'price', asc: false },
        { name: 'Keberangkatan Paling Awal', value: 'departure_time', asc: true },
        { name: 'Keberangkatan Paling Akhir', value: 'departure_time', asc: false },
        { name: 'Tiba Paling Awal', value: 'arrival_time', asc: true },
        { name: 'Tiba Paling Akhir', value: 'arrival_time', asc: false },
        { name: 'Durasi', value: 'duration', asc: true },
    ]
}
export default FlightProductPage;