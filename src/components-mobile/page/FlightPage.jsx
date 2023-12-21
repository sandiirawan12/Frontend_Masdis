import { useEffect } from 'react';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import HeaderBack from '../header/HeaderBack';
import UserIcon from '@iconify-icons/fa/user';
import CalenderIcon from '@iconify-icons/fa/calendar';
import TicketIcon from '@iconify/icons-fa-solid/tag';
import { useRouter } from 'next/router';
import LocationArrowIcon from '@iconify-icons/fa/location-arrow';
import classNames from 'classnames';
import DrawerSearchFlight from '../shared/DrawerSearchFlight';
import queryString from 'query-string'

import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { debounce } from 'lodash';
import homeApi from '@/api/home';
import moment from 'moment'
import DrawerFlightDate from '../shared/DrawerFlightDate';
import DrawerClassFlight from '../shared/DrawerClassFlight';
import DrawerPassangerFlight from '../shared/DrawerPassangerFlight';

const listClass = {
    E: 'ECONOMY CLASS',
    S: 'PREMIUM ECONOMY',
    B: 'BUSINESS CLASS',
    F: 'FIRST CLASS',
}

function FlightPage(props) {
    const { options, handleChangeOptions, onClose } = props
    const { access_token } = useSelector(state => state.token);
    const router = useRouter();

    const debouncedFetchFrom = useRef(
        _.debounce((token, query, handleChange) => {
            homeApi.getAutocomplete(token, { product: 'flight', q: query }).then(res => {
                if (res.success) {
                    handleChange('options', res.data)
                }
                handleChange('isLoading', false)
            })
        }, 2000)).current
    const debouncedFetchTo = useRef(
        _.debounce((token, query, handleChange) => {
            homeApi.getAutocomplete(token, { product: 'flight', q: query }).then(res => {
                if (res.success) {
                    handleChange('options', res.data)
                }
                handleChange('isLoading', false)
            })
        }, 2000)).current


    const [stateFrom, setStateFrom] = useState({
        options: [],
        isLoading: false,
        keyword: options?.from ?? '',
        selected: null
    })
    const [stateTo, setStateTo] = useState({
        options: [],
        isLoading: false,
        keyword: options?.to ?? '',
        selected: null
    })

    const [date, setDate] = useState({
        from: options?.dateFrom ? toDate(options.dateFrom) : moment(new Date()).add(1, 'days').toDate(),
        to: options?.dateTo ? toDate(options.dateTo) : (options?.dateFrom ? moment(toDate(options.dateFrom)).add(1, 'days').toDate() : moment(new Date()).add(2, 'days').toDate())
    });
    const [passanger, setPassanger] = useState({
        adult: options?.adult ? options.adult : 1,
        child: options?.child ? options.child : 0,
        infant: options?.infant ? options.infant : 0
    });
    const [classCabin, setClassCabin] = useState(options?.classCabin ? options.classCabin : 'E')

    const [exchangeFlight, setExchangeFlight] = useState(false);
    const refTo = useRef();
    const [flightReturn, setFlightReturn] = useState(options?.dateTo ? true : false);

    const [directOnly, setDirectOnly] = useState(options?.direct ? !options.direct : false);
    const [open, setOpen] = useState({
        flightFrom: false,
        flightTo: false,
        date: false,
        passanger: false,
        classCabin: false
    });
    const [dateActive, setDateActive] = useState('from');

    const handleChangeDateActive = (val) => {
        setDateActive(val);
    }

    const handleOpen = (field, val) => {
        if (val) {
            handleChangeDateActive(val);
        }
        setOpen(prev => ({ ...prev, [field]: !prev[field] }))
    }

    const handleChangeFrom = (name, value) => {
        setStateFrom(prevState => ({ ...prevState, [name]: value }));
        if (name === 'selected') {
            handleOpen('flightFrom');
        }
    }

    const handleChangeTo = (name, value) => {
        setStateTo(prevState => ({ ...prevState, [name]: value }))
        if (name === 'selected') {
            handleOpen('flightTo');
        }
    }

    useEffect(() => {
        if (options?.from) {
            homeApi.getAutocomplete(access_token, { product: 'flight', q: options?.from }).then(res => {
                if (res.success) {
                    setStateFrom({ ...stateFrom, selected: res.data.filter(item => item.id === options.from)[0] })
                }
            })
        }
    }, [options?.from])

    useEffect(() => {
        if (options?.to) {
            homeApi.getAutocomplete(access_token, { product: 'flight', q: options?.to }).then(res => {
                if (res.success) {
                    setStateTo({ ...stateTo, selected: res.data.filter(item => item.id === options.to)[0] })
                }
            })
        }
    }, [options?.to])

    useEffect(() => {
        handleChangeFrom('isLoading', true);
        if (stateFrom.keyword.length > 2 || stateFrom.keyword.length < 1) {
            debouncedFetchFrom(access_token, stateFrom.keyword, handleChangeFrom)
        }
    }, [stateFrom.keyword, debouncedFetchFrom])

    useEffect(() => {
        handleChangeTo('isLoading', true)
        if (stateTo.keyword.length > 2 || stateTo.keyword.length < 1) {
            debouncedFetchTo(access_token, stateTo.keyword, handleChangeTo)
        }
    }, [stateTo.keyword, debouncedFetchTo])

    const handleSwitch = () => {
        handleChangeTo('selected', stateFrom.selected);
        handleChangeTo('keyword', stateFrom.keyword);
        handleChangeFrom('keyword', stateTo.keyword);
        handleChangeFrom('selected', stateTo.selected);
        setExchangeFlight(prevState => !prevState)
    }

    const handleSearch = () => {
        if (!stateFrom.selected) {
            alert('Kota asal belum diisi')
        }
        if (!stateTo.selected) {
            alert('Kota tujuan belum diisi')
        }
        if (stateFrom.selected && stateTo.selected) {
            const params = {
                ...passanger,
                from: stateFrom.selected.id,
                to: stateTo.selected.id,
                dateFrom: moment(date.from).format('DD-MM-YYYY'),
                dateTo: flightReturn ? moment(date.to).format('DD-MM-YYYY') : '',
                classCabin,
                direct: directOnly
            }
            if (handleChangeOptions) {
                handleChangeOptions(params)
            }
            if (onClose) {
                onClose()
            }
            router.push(`/product/flight?${queryString.stringify(params)}`)
        }
    }

    const handleDateFromChange = (from) => {
        if (moment(from).isBefore(date.to)) {
            setDate(prevState => ({ ...prevState, from }));
        } else {
            setDate(prevState => ({ ...prevState, from, to: moment(from).add(1, 'days').toDate() }));
        }
    }

    const handleDateToChange = (to) => {
        setDate(prevState => ({ ...prevState, to }));
    }
    const modifiers = !flightReturn ? { start: date.from } : { start: date.from, end: date.to }

    const handleChangeFlightReturn = () => {
        setFlightReturn(prevState => !prevState);
    }

    // function widget passanger
    const addPassanger = (name) => {
        setPassanger(prevState => ({ ...prevState, [name]: Number(prevState[name]) + 1 }))
    }

    const reducedPassanger = (name) => {
        if (name === 'adult' && passanger[name] > 1) {
            setPassanger(prevState => ({ ...prevState, [name]: Number(prevState[name]) - 1 }))
        } else if (name !== 'adult' && passanger[name] > 0) {
            setPassanger(prevState => ({ ...prevState, [name]: Number(prevState[name]) - 1 }))
        }
    }

    function toDate(date) {
        var from = date.split("-")
        return new Date(from[2], from[1] - 1, from[0])
    }

    const handleChangeDate = (type, val) => {
        if (type === 'from') {
            handleDateFromChange(val);
        } else {
            handleDateToChange(val);
        }
    }

    // count
    const countPassanger = () => {
        let result = 0;
        Object.keys(passanger).forEach(item => {
            result += Number(passanger[item])
        })
        return result;
    }

    return (
        <>
            <RootStyled className={classNames("position-relative")}>
                <HeaderBack title='Flights' onBack={() => onClose ? onClose() : router.back()} />
                <img src='https://cdn.masterdiskon.com/masterdiskon/icon/fe/sign-in.png' style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '35vh',
                    width: '100%',
                    objectFit: 'cover'
                }} />
                <div className="container pt-2">
                    <div className="card text-dark">
                        <div className="p-3">
                            <h6 className="font-weight-bold">Pencarian tiket pesawat</h6>
                            <span onClick={() => setFlightReturn(false)} className="badge badge-pill p-2 mr-2" style={!flightReturn ? { backgroundColor: '#0070BA', color: '#fff' } : { color: '#0070BA' }}>One Way</span>
                            <span onClick={() => setFlightReturn(true)} className="badge badge-pill p-2" style={flightReturn ? { backgroundColor: '#0070BA', color: '#fff' } : { color: '#0070BA' }}>Round Trip</span>
                            <div className="container">
                                <div onClick={() => handleOpen('flightFrom', 'from')} className="d-flex align-items-center" style={{ borderBottom: '1px solid gray', paddingBottom: '5px' }}>
                                    <Icon icon={LocationArrowIcon} className='mr-2 text-primary' />
                                    <div>
                                        <label className="title font-weight-bold">Dari</label>
                                        <small className="md-result">{stateFrom?.selected?.text || 'Cari tujuan'}</small>
                                    </div>
                                </div>
                                <div onClick={() => handleOpen('flightTo', 'to')} className="d-flex align-items-center mt-2" style={{ borderBottom: '1px solid gray', paddingBottom: '5px' }}>
                                    <Icon icon={LocationArrowIcon} className='mr-2 text-primary' />
                                    <div>
                                        <label className="title font-weight-bold">Ke</label>
                                        <small className="md-result">{stateTo?.selected?.text || 'Cari tujuan'}</small>
                                    </div>
                                </div>
                                <div className="d-flex mt-3" style={{ borderBottom: '1px solid gray', paddingBottom: '5px' }}>
                                    <div onClick={() => handleOpen('date', 'from')} className="w-100 d-flex align-items-center">
                                        <Icon icon={CalenderIcon} className='mr-2 text-primary' />
                                        <div>
                                            <label className="title">Beragkat</label>
                                            <small className="md-result">{moment(date.from).format('DD MMM YYYY')}</small>
                                        </div>
                                    </div>
                                    {flightReturn &&
                                        <div onClick={() => handleOpen('date', 'to')} className="w-100 d-flex align-items-center">
                                            <Icon icon={CalenderIcon} className='mr-2 text-primary' />
                                            <div>
                                                <label className="title">Pulang</label>
                                                <small className="md-result">{moment(date.to).format('DD MMM YYYY')}</small>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div onClick={() => handleOpen('classCabin')} className="d-flex align-items-center mt-3" style={{ borderBottom: '1px solid gray', paddingBottom: '5px' }}>
                                    <Icon icon={TicketIcon} className='mr-2 text-primary' />
                                    <div>
                                        <label className="title font-weight-bold">Kelas Kabin</label>
                                        <small className="md-result">{listClass[classCabin]}</small>
                                    </div>
                                </div>
                                <div onClick={() => handleOpen('passanger')} className="d-flex align-items-center mt-3" style={{ borderBottom: '1px solid gray', paddingBottom: '5px' }}>
                                    <Icon icon={UserIcon} className='mr-2 text-primary' />
                                    <div>
                                        <label className="title font-weight-bold">Penumpang</label>
                                        <small className="md-result">{countPassanger()} Orang</small>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mt-3" style={{ paddingBottom: '5px' }}>
                                    <div className="custom-control custom-switch">
                                        <input type="checkbox" cchecked={directOnly} onChange={() => setDirectOnly(!directOnly)} className="custom-control-input" id='directOnly' />
                                        <label style={{ fontSize: '12px' }} className="custom-control-label" htmlFor='directOnly'>
                                            Penerbangan Langsung
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button type="button" onClick={handleSearch} className="btn btn-warning mt-3 font-weight-bold shadow btn-sm btn-block">Search</button>
                        </div>
                    </div>
                </div>
            </RootStyled>

            <DrawerSearchFlight open={open.flightFrom} onClose={() => handleOpen('flightFrom')} options={stateFrom.options} isLoading={stateFrom.isLoading} handleChange={handleChangeFrom} />
            <DrawerSearchFlight open={open.flightTo} onClose={() => handleOpen('flightTo')} options={stateTo.options} isLoading={stateTo.isLoading} handleChange={handleChangeTo} />

            <DrawerFlightDate flightReturn={flightReturn} isOpen={open.date} onClose={() => handleOpen('date', 'from')} handleChange={handleChangeDate} date={date} dateActive={dateActive} handleChangeDateActive={handleChangeDateActive} />

            <DrawerClassFlight value={classCabin} handleChange={setClassCabin} open={open.classCabin} onClose={() => handleOpen('classCabin')} />
            <DrawerPassangerFlight open={open.passanger} onClose={() => handleOpen('passanger')} passanger={passanger} addPassanger={addPassanger} reducedPassanger={reducedPassanger} />

        </>
    );
}

const RootStyled = styled.div`
    min-height:100vh;
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,112,186,1) 40%);;
    background-position:center bottom;
    background-repeat:no-repeat;
    background-size:200%;
    /* center bottom/200% no-repeat */
    width:100%;
    color:white;
    position:relative;

    label{
        &.title{
            font-size:14px;
            font-weight:bold;
            display:block;
            margin-bottom:-6px;
        }
    }

    .md-result{
        font-size:12px;
    }

`

export default FlightPage;