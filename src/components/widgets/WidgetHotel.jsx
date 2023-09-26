import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Icon } from '@iconify/react';

import BedIcon from '@iconify/icons-fa-solid/bed';
import CityIcon from '@iconify/icons-fa-solid/city';

import MapIcon from '@iconify/icons-fa-solid/map-marker-alt';
import GlobeIcon from '@iconify/icons-fa-solid/globe';
import MoonIcon from '@iconify/icons-fa-solid/moon';

import { Typeahead, Highlighter } from 'react-bootstrap-typeahead';
import MomentLocaleUtils, { formatDate, parseDate } from 'react-day-picker/moment';
import homeApi from '@/api/home';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import moment from 'moment';
import DropdownVisitor from './DropdownVisitor';
import classNames from 'classnames';

import queryString from 'query-string';
import { useRouter } from 'next/router';
import ReactPlaceholder from 'react-placeholder';
import Image from 'next/image';
import styled from 'styled-components';

const icon = {
    city: CityIcon,
    area: MapIcon,
    hotel: BedIcon,
    province: GlobeIcon
}

function WidgetHotel(props) {
    const { options, handleChangeOptions, productId, willSearch, isDetail, cityUser, latUser, lngUser } = props

    const [hotelSelected, setHotelSelected] = useState()
    const [listHotel, setListHotel] = useState([])
    const [keyword, setKeyword] = useState(options?.keyword ? options?.keyword : '')

    const { access_token } = useSelector(state => state.token);
    const [loadingSearch, setLoadingSearch] = useState(true);
    const [date, setDate] = useState(
        {
            checkin: options?.dateFrom ? toDate(options?.dateFrom) : moment().add(1, 'days').toDate(),
            checkout: options?.dateTo ? toDate(options?.dateTo) : moment().add(2, 'days').toDate()
        }
    )

    function toDate(date) {
        var from = date.split("-")
        return new Date(from[2], from[1] - 1, from[0])
    }

    const [childAge, setChildAge] = useState(options?.childAge ?? [])
    const router = useRouter()

    const [night, setNight] = useState()
    const datex = new Date();
    const [dayName, setdayName] = useState(moment(datex).format('dddd'))
    const [colorTab, setcolorTab] = useState("")
    const [colorA, setcolorA] = useState("")
    const [colorB, setcolorB] = useState("")
    const [colorC, setcolorC] = useState("")

    const [room, setRoom] = useState(options?.room ?? 1)
    const [visitor, setVisitor] = useState({
        adult: options?.adult ?? 1,
        child: options?.child ?? 0
    })

    const refCheckout = useRef();

    const handleSearch = () => {
        if (!hotelSelected || hotelSelected.length === 0) {
            // alert('Masukan detail tujuan')
            let url = '/product/hotel'
            let params = {
                ...visitor,
                from: keyword,
                city: cityUser,
                dateFrom: moment(date.checkin).format('DD-MM-YYYY').toString(),
                dateTo: moment(date.checkout).format('DD-MM-YYYY').toString(),
                room,
                keyword: keyword,
                childAge
            }

            // if (hotelSelected[0].productId) {
            //     url = `/product/hotel/detail`
            //     params = { ...params, productId: hotelSelected[0].productId }
            // } else if (isDetail) {
            //     return router.push(`${url}?${queryString.stringify(params)}`)
            // }

            if (handleChangeOptions) {
                handleChangeOptions(params)
            }

            router.push(`${url}?${queryString.stringify(params)}`)
        } else {
            let url = '/product/hotel'
            let params = {
                ...visitor,
                from: hotelSelected[0]?.id,
                city: cityUser,
                dateFrom: moment(date.checkin).format('DD-MM-YYYY').toString(),
                dateTo: moment(date.checkout).format('DD-MM-YYYY').toString(),
                room,
                keyword: hotelSelected[0]?.name,
                childAge
            }

            if (hotelSelected[0].productId) {
                url = `/product/hotel/detail`
                params = { ...params, productId: hotelSelected[0].productId }
            } else if (isDetail) {
                return router.push(`${url}?${queryString.stringify(params)}`)
            }

            if (handleChangeOptions) {
                handleChangeOptions(params)
            }

            router.push(`${url}?${queryString.stringify(params)}`)
        }
    }

    const handleChangeAge = (index, value) => {
        const newArr = [...childAge];
        newArr[index] = value
        setChildAge(newArr)
    }

    const handleRemoveAge = (index) => {
        const newArr = [...childAge];
        newArr.splice(index, 1)
        setChildAge(newArr)
    }

    const handleAddVisitor = (name) => {
        if (name === 'adult') {
            if (visitor.adult < 32) {
                setVisitor(prevState => ({ ...prevState, [name]: Number(prevState[name]) + 1 }))
            }
        } else if (Number(visitor.child) < 10) {
            setVisitor(prevState => ({ ...prevState, [name]: Number(prevState[name]) + 1 }));
            handleChangeAge((visitor['child'] + 1) - 1, 1);
        }
    }

    const handleReduceVisitor = (name) => {
        if (name === 'adult') {
            if (visitor[name] > 1) {
                setVisitor(prevState => ({ ...prevState, [name]: Number(prevState[name]) - 1 }))
            }
        } else if (visitor[name] > 0) {
            setVisitor(prevState => ({ ...prevState, [name]: Number(prevState[name]) - 1 }))
            handleRemoveAge(visitor['child'] - 1)
        }
    }

    const handleChangeRoom = (forAct) => {
        if (forAct === 'reduce') {
            if (Number(room) > 1) {
                setRoom(Number(room) - 1)
            }
        } else {
            if (Number(room) < 8) {
                setRoom(Number(room) + 1)
            }
        }
    }

    useEffect(() => {
        setNight(moment(date.checkout).diff(moment(date.checkin), 'days'))

        if (dayName === 'Senin') {
            setcolorA('#0C71B6')
            setcolorB('#DC6506')
            setcolorC('#E1C250')
        }
        else if (dayName === 'Selasa') {
            setcolorA('#BF3013')
            setcolorB('#DC6506')
            setcolorC('#E1C250')
        }
        else if (dayName === 'Rabu') {
            setcolorTab('#0A4D68')
            setcolorA('#0A4D68')
            setcolorB('#05BFDB')
            setcolorC('#00FFCA')
        }
        else if (dayName === 'Kamis') {
            setcolorA('#8B1874')
            setcolorB('#B71375')
            setcolorC('#E1C250')
        }
        else if (dayName === 'Jumat') {
            setcolorA('#00bb1f')
            setcolorB('#3aff93')
            setcolorC('#e4ff50')
        }
        else if (dayName === 'Sabtu') {
            setcolorA('#9300bb')
            setcolorB('#ff3afe')
            setcolorC('#ff50cb')
        } else {
            setcolorA('#0C71B6')
            setcolorB('#DC6506')
            setcolorC('#E1C250')
        }
    }, [date])


    const handleChangeKeyword = (q) => {
        if (q.length > 2) {
            setKeyword(q)
        }
    }

    useEffect(() => {
        setLoadingSearch(true)
        setListHotel([
            { fullname: '' },
            { fullname: '' },
            { fullname: '' },
            { fullname: '' },
            { fullname: '' },
        ])

        // alert("Current WidgetHotel 275:" + latUser + "==" + lngUser);
        homeApi.getAutocomplete(access_token, { product: 'hotel', q: keyword, lat: latUser, lang: lngUser }).then(res => {
            if (res.success) {
                setListHotel(res.data)
                setLoadingSearch(false)
            }
        })
    }, [keyword])

    useEffect(() => {
        if (options?.from || productId) {
            homeApi.getAutocomplete(access_token, { product: 'hotel', q: options?.keyword }).then(res => {
                if (res.success) {
                    let selected = [];
                    if (productId) {
                        selected = res.data.filter(item => item.productId == productId)
                    } else {
                        selected = res.data.filter(item => item.id == options?.from)
                    }
                    setHotelSelected(selected)
                }
            })
        }
    }, [options?.from, options?.keyword, productId])

    const handleChangeCheckin = (checkin) => {
        setDate(prevState => ({ ...prevState, checkin, checkout: moment(checkin).add(1, 'days').toDate() }));
    }

    const handleChangeCheckout = (checkout) => {
        const checkinAndCheckoutIsSame = moment(moment(checkout).format('YYYY-MM-DD'), 'YYYY-MM-DD').isSame(moment(moment(date.checkin).format('YYYY-MM-DD'), 'YYYY-MM-DD'));

        if (moment(checkout).isBefore(date.checkin) || checkinAndCheckoutIsSame) {
            setDate(prevState => ({ ...prevState, checkin: checkout, checkout: moment(checkout).add(1, 'days').toDate() }));
        } else if (moment(checkout).isAfter(moment(date.checkin)) && !checkinAndCheckoutIsSame) {
            setDate(prevState => ({ ...prevState, checkout }));
        }
    }

    const modifiers = { start: date.checkin, end: date.checkout }

    return (
        <div style={{ borderRadius: '20px', background: `linear-gradient(90deg, ${colorA} 0%, ${colorB} 30%, ${colorC} 60%, ${colorA} 100%)`, padding: '10px' }}>
            <ul className="list-group list-group-horizontal">
                <ListItemStyled className="list-group-item pb-0" style={{ width: '40%', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' }}>
                    <label><span className={classNames("", {
                        'font-weight-bold': willSearch
                    })}>Destinasi / Nama Hotel </span></label>
                    <fieldset style={{ marginTop: '-14px' }} className="form-group mb-0">
                        <div className="multiselect">
                            <div id="selectBox1" className="selectBox">
                                <Typeahead
                                    id='from'
                                    placeholder='Pencarian kota, hotel, tempat tujuan'
                                    selected= {hotelSelected}
                                    onChange= {(val) => setHotelSelected(val)}
                                    filterBy= {() => true}
                                    minLength= {3}
                                    labelKey= "fullname"
                                    highlightOnlyResult
                                    onSearch= {handleChangeKeyword}
                                    onInputChange= {handleChangeKeyword}
                                    options= {listHotel}
                                    inputProps= {{
                                        className: classNames('border-0 p-0 bg-transparent', {
                                            'font-weight-bold': !willSearch
                                        }),
                                        style: { boxShadow: 'none', cursor: 'pointer', color: 'black' }
                                    }}

                                    renderMenuItemChildren={(option) => {
                                        return loadingSearch ?
                                        <li className='d-flex justify-content-between align-items-center py-2 px-1'>
                                            <ReactPlaceholder type='text' rows={1} />
                                        </li>
                                        :
                                        <li className='d-flex justify-content-between align-items-center px-1'>
                                            <div className='d-flex align-items-center'>
                                                {/* <Icon icon={icon[option.level]} className='text-primary' /> */}
                                                <Icon icon={
                                                    option.level === 'REGION' ? 'streamline:travel-map-navigation-map-maps-gps' :
                                                        option.level === 'CITY' ? 'solar:city-broken' :
                                                            option.level === 'AREA' ? 'streamline:travel-map-location-pin-navigation-map-maps-pin-gps-location' :
                                                                option.level === 'HOTEL' ? 'solar:bed-line-duotone' :
                                                                    option.level === 'APARTMENT' ? 'fluent-mdl2:city-next' :
                                                                        option.level === 'RESORT' ? 'fluent-mdl2:ski-resorts' :
                                                                            option.level === 'CAMPING' ? 'material-symbols:camping-outline-rounded' :
                                                                                option.level === 'HOSTEL' ? 'icon-park-outline:hotel' :
                                                                                    option.level === 'VILLA' ? 'material-symbols:villa-outline-rounded' :
                                                                                        option.level === 'HOMESTAY' ? 'icon-park-outline:homestay' :
                                                                                            option.level === 'GUESTHOUSE' ? 'uil:house-user' :
                                                                                                option.level === 'BED_AND_BREAKFAST' ? 'fluent-mdl2:breakfast' :
                                                                                                    option.level === 'OTHER' ? 'fluent:home-more-20-regular' : 'fluent:home-more-20-regular'
                                                    }
                                                    style={{
                                                        fontSize: '30px',
                                                        color:
                                                            option.level === 'REGION' ? '#f44336' :
                                                                option.level === 'CITY' ? '#ce7e00' :
                                                                    option.level === 'AREA' ? '#c90076' :
                                                                        option.level === 'HOTEL' ? '#008cf5' :
                                                                            option.level === 'APARTMENT' ? '#514fb7' :
                                                                                option.level === 'RESORT' ? '#24b9ac' :
                                                                                    option.level === 'CAMPING' ? '#38761d' :
                                                                                        option.level === 'HOSTEL' ? '#bcc441' :
                                                                                            option.level === 'VILLA' ? '#c47041' :
                                                                                                option.level === 'HOMESTAY' ? '#c90076' :
                                                                                                    option.level === 'GUESTHOUSE' ? '#d943cd' :
                                                                                                        option.level === 'BED_AND_BREAKFAST' ? '#ea7d41' :
                                                                                                            option.level === 'OTHER' ? '#7f6000' : '#7f6000'
                                                    }}
                                                />
                                                <div className='ml-3' style={{ width: '95%' }}>
                                                    <strong style={{ whiteSpace: 'break-spaces', width: '100%', display: 'inline-block' }}>
                                                        <Highlighter highlightClassName='text-primary bg-transparent p-0 m-0' search={keyword}>
                                                            {option.name}
                                                        </Highlighter>
                                                    </strong><br />
                                                    <small style={{ whiteSpace: 'break-spaces' }}>
                                                        <Highlighter highlightClassName='text-primary bg-transparent m-0 p-0' search={keyword}>
                                                            {option.address}
                                                        </Highlighter>
                                                    </small>
                                                </div>
                                            </div>
                                            <span>
                                                <span
                                                    className="badge text-uppercase text-white"
                                                    style={{
                                                        background:
                                                            option.level === 'REGION' ? '#f44336' :
                                                                option.level === 'CITY' ? '#ce7e00' :
                                                                    option.level === 'AREA' ? '#c90076' :
                                                                        option.level === 'HOTEL' ? '#008cf5' :
                                                                            option.level === 'APARTMENT' ? '#514fb7' :
                                                                                option.level === 'RESORT' ? '#24b9ac' :
                                                                                    option.level === 'CAMPING' ? '#38761d' :
                                                                                        option.level === 'HOSTEL' ? '#bcc441' :
                                                                                            option.level === 'VILLA' ? '#c47041' :
                                                                                                option.level === 'HOMESTAY' ? '#c90076' :
                                                                                                    option.level === 'GUESTHOUSE' ? '#d943cd' :
                                                                                                        option.level === 'BED_AND_BREAKFAST' ? '#ea7d41' :
                                                                                                            option.level === 'OTHER' ? '#7f6000' : '#7f6000'
                                                    }}
                                                >{option.level.split('_').join(' ')}</span>
                                            </span>
                                        </li>
                                    }} />
                            </div>
                        </div>
                    </fieldset>
                </ListItemStyled>
                <ListItemStyled className="list-group-item pb-0">
                    <div className="form-row">
                        <div className="col-md-5 InputFromTo range">
                            <label style={{ marginBottom: '-20px' }}> <span className={classNames("", { 'font-weight-bold': willSearch })}>Check In</span> </label>
                            <DayPickerInput style={{ marginTop: '-14px' }} value={date.checkin} formatDate={formatDate} format={'ddd, DD MMM YYYY'} parseDate={parseDate}
                                dayPickerProps={{
                                    disabledDays: { before: new Date() },
                                    selectedDays: [date.checkin, { from: date.checkin, to: date.checkout }],
                                    modifiers,
                                    numberOfMonths: 2,
                                    locale: 'id',
                                    localeUtils: MomentLocaleUtils,
                                    onDayClick: () => refCheckout.current?.getInput().focus(),
                                }} onDayChange={handleChangeCheckin} inputProps={{
                                    className: classNames('form-control bg-transparent border-0 p-0 m-0', {
                                        'font-weight-bold': !willSearch
                                    }),
                                    readOnly: true,
                                    style: { cursor: 'pointer', boxShadow: 'none', color: 'black' }
                                }} />
                        </div>
                        <div className="col-md-2">
                            <label style={{ marginBottom: '-20px' }}><span className={classNames("", {
                                'font-weight-bold': willSearch
                            })}>Malam</span></label>
                            <div className="text-center" id="night">
                                <span className="mr-3" style={{ fontWeight: '14px' }}>
                                    {night}
                                </span>
                                <Icon icon='mdi:weather-night' style={{ fontSize: '20px', rotate: '15deg', marginTop: '-3.5px', color: '#2986cc' }} />
                            </div>
                        </div>
                        <div className="col-md-5 pl-3 InputFromTo range InputFromTo-to hotel">
                            <label style={{ marginBottom: '-20px' }}> <span className={classNames('', {
                                "font-weight-bold": willSearch
                            })}>Check Out</span> </label>
                            <DayPickerInput
                                ref={refCheckout}
                                style={{ marginTop: '-14px' }}
                                format={'ddd, DD MMM YYYY'}
                                value={date.checkout}
                                formatDate={formatDate}
                                parseDate={parseDate}
                                dayPickerProps={{
                                    selectedDays: [{ from: date.checkin, to: date.checkout }],
                                    disabledDays: [{ before: new Date() }],
                                    modifiers,
                                    localeUtils: MomentLocaleUtils,
                                    month: date.checkin,
                                    // fromMonth: date.checkin,
                                    className: 'picker-hotel-checkout',
                                    locale: 'id',
                                    numberOfMonths: 2,
                                }}
                                onDayChange={handleChangeCheckout}
                                inputProps={{

                                    className: classNames('form-control bg-transparent border-0 p-0 m-0', {
                                        'font-weight-bold': !willSearch
                                    }),
                                    readOnly: true,
                                    style: { cursor: 'pointer', boxShadow: 'none', color: 'black' }

                                }}
                            />
                        </div>
                    </div>
                </ListItemStyled>
                <ListItemStyled className="list-group-item pb-0 w-40">
                    <div className="form-group mb-0">
                        <label htmlFor="exampleInputEmail1" style={{ marginBottom: '-20px' }}><span className={classNames("", {
                            'font-weight-bold': willSearch
                        })}>Tamu &amp; Kamar</span></label>
                        <DropdownVisitor willSearch={willSearch} visitor={visitor} childAge={childAge} room={room} handleAddVisitor={handleAddVisitor} handleChangeAge={handleChangeAge} handleChangeRoom={handleChangeRoom} handleReduceVisitor={handleReduceVisitor} />

                    </div>
                </ListItemStyled>
                <ListItemStyled className="list-group-item p-0 border-0 bg-transparent w-20">
                    <button
                        onClick={handleSearch}
                        style={{
                            width: '100px', borderRadius: '0 !important', borderTopRightRadius: '20px', borderBottomRightRadius: '20px'
                        }}
                        className="btn font-weight-bold btn-warning d-flex justify-content-center align-items-center h-100 btn-block">
                        <div style={{ width: '25px', height: '25px', position: 'relative', }} className='d-inline-block'>
                            <Image layout='fill' src={'https://cdn.masterdiskon.com/masterdiskon/icon/fe/luv.png'} />
                        </div>
                        Search
                    </button>
                </ListItemStyled>
            </ul>
        </div>
    )
}

const ListItemStyled = styled.li`
  height:80px !important;

`

export default WidgetHotel
