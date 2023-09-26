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

import ReactGA from 'react-ga';
ReactGA.initialize('G-56R5954QCE');


const initialState = {
    options: {},
    filters: {},
    dataFilters: [
        {
            name: 'Transit', slug: 'transit', value: [], type: 'check', items: [
                { slug: '0', name: 'Langsung' },
                { slug: '1', name: '1 Transit' },
                { slug: '2', name: '2+ Transit' },
            ]
        },
        {
            name: 'Jam Berangkat', slug: 'departure_time', value: [], type: 'time', items: [
                { slug: '00:00-05:59', name: 'Dini Hari', icon: 'moonSolid' },
                { slug: '06:00-11:59', name: 'Pagi Hari', icon: 'sunSolid' },
                { slug: '12:00-17:59', name: 'Siang Hari', icon: 'sunRegular' },
                { slug: '18:00-23:59', name: 'Malam Hari', icon: 'moonRegular' },
            ]
        },
        {
            name: 'Jam Kedatangan', slug: 'arrival_time', value: [], type: 'time', items: [
                { slug: '00:00-05:59', name: 'Dini Hari', icon: 'moonSolid' },
                { slug: '06:00-11:59', name: 'Pagi Hari', icon: 'sunSolid' },
                { slug: '12:00-17:59', name: 'Siang Hari', icon: 'sunRegular' },
                { slug: '18:00-23:59', name: 'Malam Hari', icon: 'moonRegular' },
            ]
        },
        {
            name: 'Fasilitas', slug: 'facility', value: [], type: 'check', items: [
                { slug: 'baggage', name: 'Bagasi' },
                { slug: 'meal', name: 'Makanan' },
            ]
        },
        { name: 'Range Harga', slug: 'price', value: [], type: 'range', defaultValue: [100000, 100000000] },
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
        direct: false,
        classCabin: 'E'
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

    if (typeof query.direct === 'string') {
        optionValues.direct = query.direct
    }
    return optionValues;
}

function parseQueryFilters(location) {
    const query = queryString.parse(location);
    const filterValues = {
        transit: '',
        departure_time: '',
        arrival_time: '',
        facility: '',
        airline_code: '',
        price: '100000,100000000'
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
    if (options.infant !== "") {
        params.infant = options.infant
    }
    if (options.classCabin !== "") {
        params.classCabin = options.classCabin
    }

    if (options.direct !== "") {
        params.direct = options.direct
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

    const [open, setOpen] = useState({ filter: false, sort: false })


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
                let items = res.data.filter.airlines.onward.map(item => ({ name: item.name, slug: item.code }))
                if (flightChoose.flight1) {
                    items = res.data.filter.airlines.return.map(item => ({ name: item.name, slug: item.code }))
                }
                const value = {
                    name: 'Maskapai', slug: 'airline_code', value: [], type: 'check', items
                }

                dispatch({ type: 'SET_DATA_FILTER', value })
                setOptionsRt(res.data.optionsRt.length)
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
                <section className="border-bottom" style={{ background: '#0070BA' }}>
                    <div className="container">
                        <div className="row">
                            <div className="py-2 col-md-5">
                                {flightChoose.flight1 ?
                                    <div>
                                        <div className="media bg-white text-primary font-weight-bold p-2 rounded">
                                            <div className="h-100 bg-white mr-3 p-2 rounded">
                                                <img style={{ height: '42px' }} src={flightChoose.flight1?.image} className="airline-img" alt="AirAsia Airways" />
                                            </div>
                                            <div className="media-body"><div className="d-flex align-items-center"><div className="text-center">
                                                <p className="mb-0" /><b>{flightChoose.flight1?.detail.from.code}</b></div>
                                                <span className="mx-2">→</span><div className="text-center"><p className="mb-0"><b>{flightChoose.flight1?.detail.to.code}</b></p></div></div><p className="mb-0">{flightChoose.flight1?.detail.flight[0].departure.date} {flightChoose.flight1?.detail.flight[0].departure.time}</p><p className="mb-0"><b> IDR {flightChoose.flight1?.price.toLocaleString()}</b></p>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="d-flex text-primary font-weight-bold justify-content-around  align-items-center p-2 rounded" style={{ background: 'white' }}>
                                        <span className="mb-0 s_origin">{state.options.from}</span>
                                        <span className="mx-2">→</span>
                                        <span className="mb-0 s_destination">{state.options.to}</span>
                                        |
                                        <p className="mb-0 s_departuredate">{
                                            moment(toDate(state.options.dateFrom)).locale('id', idLocale).format('ddd, DD MMM YYYY')
                                        }</p>
                                        |
                                        <p className="mb-0"><span className="s_guest">
                                            {Number(state.options.adult || 0) + Number(state.options.infant || 0) + Number(state.options.child || 0)}
                                        </span>{" "}Penumpang</p>
                                        |
                                        <p className="mb-0 s_cabinclass">{state.options.classCabin}</p>
                                    </div>
                                }
                            </div>
                            <div className="py-2 col-md-5">
                                {flightChoose.flight2 ?
                                    <div>
                                        <div className="media bg-white text-primary font-weight-bold p-2 rounded">
                                            <div className="h-100 bg-white mr-3 p-2 rounded">
                                                <img style={{ height: '42px' }} src={flightChoose.flight2?.image} className="airline-img" alt="AirAsia Airways" />
                                            </div>
                                            <div className="media-body"><div className="d-flex align-items-center"><div className="text-center">
                                                <p className="mb-0" /><b>{flightChoose.flight2?.detail.from.code}</b></div>
                                                <span className="mx-2">→</span><div className="text-center"><p className="mb-0"><b>{flightChoose.flight2?.detail.to.code}</b></p></div></div><p className="mb-0">{flightChoose.flight2?.detail.flight[0].departure.date} {flightChoose.flight2?.detail.flight[0].departure.time}</p><p className="mb-0"><b> IDR {flightChoose.flight2?.price.toLocaleString()}</b></p>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <>
                                        {state.options.dateTo &&
                                            <div className="d-flex justify-content-around text-primary font-weight-bold align-items-center p-2 rounded" style={{ background: 'white' }}>
                                                <span className="mb-0 s_origin">{state.options.to}</span>
                                                <span className="mx-2">→</span>
                                                <span className="mb-0 s_destination">{state.options.from}</span>
                                                |
                                                <p className="mb-0 s_departuredate">{
                                                    moment(toDate(state.options.dateTo)).locale('id', idLocale).format('ddd, DD MMM YYYY')
                                                }</p>
                                                |
                                                <p className="mb-0"><span className="s_guest">
                                                    {Number(state.options.adult || 0) + Number(state.options.infant || 0) + Number(state.options.child || 0)}
                                                </span>{" "}Penumpang</p>
                                                |
                                                <p className="mb-0">{state.options.classCabin}</p>
                                            </div>
                                        }
                                    </>
                                }
                            </div>
                            <div className="col-md-2 py-2 ">
                                <button onClick={() => setIsChange(!isChange)} className="btn btn-block btn-warning" type="button" >
                                    <Icon icon={EditIcon} /> Ganti pencarian</button>
                            </div>
                        </div>
                    </div></section>
                <Collapse isOpen={isChange} >
                    <div className="container">
                        <WidgetFlight handleChangeOptions={handleChangeOptions} options={state.options} />
                    </div>
                </Collapse>

            </>}
            <div className="container my-4 pb-5">
                <div className="row">
                    {!isTabletOrMobile &&
                        <div className="col-3">
                            <WidgetFilter title='Filter' filters={state.dataFilters} values={state.filters} dispatch={dispatch} />
                        </div>
                    }
                    <div className={classNames("col-9", {
                        'col-12': isTabletOrMobile
                    })}>

                        {!isTabletOrMobile && <>
                            <WidgetSorting data={dataSorting} dispatch={dispatch} state={state} />
                            <h4 className="font-weight-bold text-primary">Keberangkatan</h4>
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
    type: 'button',
    sorts: [
        { name: 'Harga', value: 'price' },
        { name: 'Keberangkatan', value: 'departure_time' },
        { name: 'Kedatangan', value: 'arrival_time' },
        { name: 'Durasi', value: 'duration' },
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