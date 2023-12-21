import styled from "styled-components";
import HeaderBack from "../header/HeaderBack";
import { Icon } from '@iconify/react';
import LocationArrowIcon from '@iconify-icons/fa/location-arrow';
import UserIcon from '@iconify-icons/fa/user'
import CalenderIcon from '@iconify-icons/fa/calendar';
import { useRouter } from 'next/router'
import DestinationHotel from "./DestinationHotel";
import { useEffect, useState } from "react";
import classNames from "classnames";
import DrawerDate from "../shared/DrawerDate";
import queryString from 'query-string'
import moment from 'moment';
import DrawerVisitorHotel from "../shared/DrawerVisitorHotel";
import homeApi from "@/api/home";
import { useSelector } from "react-redux";

function HotelPage(props) {

    const { options, handleChangeOptions, productId, onBack, resetFilter, isDetail } = props;

    const router = useRouter();
    const [open, setOpen] = useState({
        destination: false,
        primary: true
    });
    const [keyword, setKeyword] = useState(options?.keyword ? options?.keyword : '');

    const [openDrawer, setOpenDrawer] = useState({
        date: false,
        visitor: false
    });
    const [date, setDate] = useState(
        {
            checkin: options?.dateFrom ? toDate(options?.dateFrom) : moment().add(1, 'days').toDate(),
            checkout: options?.dateTo ? toDate(options?.dateTo) : moment().add(2, 'days').toDate()
        }
    )
    const [dateActive, setDateActive] = useState('checkin');

    const [room, setRoom] = useState(options?.room ?? 1)
    const [visitor, setVisitor] = useState({
        adult: options?.adult ?? 1,
        child: options?.child ?? 0
    })
    const [childAge, setChildAge] = useState(options?.childAge ?? []);
    const [hotelSelected, setHotelSelected] = useState();
    const { access_token } = useSelector(state => state.token);

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
                    setHotelSelected(selected[0])
                }
            })
        }
    }, [options?.from, options?.keyword, productId])

    const handleSearch = () => {
        if (!hotelSelected || hotelSelected.length === 0) {
            alert('Masukan detail tujuan')
        } else {
            let url = '/product/hotel'
            let params = {
                ...visitor,
                from: hotelSelected?.id,
                dateFrom: moment(date.checkin).format('DD-MM-YYYY').toString(),
                dateTo: moment(date.checkout).format('DD-MM-YYYY').toString(),
                room,
                keyword: hotelSelected?.name,
                childAge
            }

            if (hotelSelected?.productId) {
                url = `/product/hotel/detail`
                params = { ...params, productId: hotelSelected.productId }
            } else if (isDetail) {
                return router.push(`${url}?${queryString.stringify(params)}`)
            }

            if (handleChangeOptions) {
                handleChangeOptions(params)
            }

            if (resetFilter) {
                resetFilter()
            }

            if (onBack) {
                onBack()
            }

            router.push(`${url}?${queryString.stringify(params)}`)
        }
    }

    const handleChangeDateActive = (val) => {
        setDateActive(val);
    }

    const handleChangeCheckin = (checkin) => {
        setDate(prevState => ({ ...prevState, checkin, checkout: moment(checkin).add(1, 'days').toDate() }));
    }

    const handleChangeCheckout = (checkout) => {
        if (!moment(checkout).startOf('D').isSame(moment(date.checkin).startOf('D'))) {
            setDate(prevState => ({ ...prevState, checkout }));
        } else {
            setDate(prevState => ({ ...prevState, checkout: moment(date.checkout).toDate() }));
        }
    }

    function toDate(date) {
        var from = date.split("-")
        return new Date(from[2], from[1] - 1, from[0])
    }

    const handleOpen = (name) => {
        let newObj = { ...open };
        if (name === 'primary') {
            Object.keys(newObj).filter(item => item !== name).forEach(item => {
                newObj[item] = false
            })
            if (!options) {
                router.replace({ pathname: '/hotels', query: null })
            }
        } else {
            if (!newObj[name] === false) {
                newObj['primary'] = true;
                if (!options) {
                    router.replace({ pathname: '/hotels', query: null })
                }
                Object.keys(newObj).filter(item => item !== 'primary').forEach(item => {
                    newObj[item] = false
                });
            } else {
                Object.keys(newObj).filter(item => item !== name).forEach(item => {
                    newObj[item] = false
                });
                newObj[name] = !newObj[name];
            }
        }
        setOpen(newObj)
    }

    const handleChangeDate = (type, val) => {
        if (type === 'checkin') {
            handleChangeCheckin(val);
        } else {
            handleChangeCheckout(val);
        }
    }

    useEffect(() => {
        if (router.isReady) {
            if (router?.query?.search) {
                handleOpen('destination')
            }
        }

    }, [router.query])


    const handleOpenDrawer = (type, val) => {
        if (val) {
            handleChangeDateActive(val)
        }
        setOpenDrawer(prev => ({ ...prev, [type]: !prev[type] }))
    }

    // keyword function
    const handleChangeKeyword = (e) => {
        const { value } = e.target
        setKeyword(value)
    }

    // visitor function
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

    return (
        <>
            <RootStyled className={classNames("position-relative", { 'd-none': !open.primary })}>
                <HeaderBack style={{ background: 'rgb(253,191,73)', color: 'black' }} title='Hotel' onBack={() => onBack ? onBack() : router.back()} />
                <img src='https://cdn.masterdiskon.com/masterdiskon/icon/fe/sign-in.png' style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    minHeight: '30vh',
                    width: '100%',
                    objectFit: 'cover'
                }} />
                <div className="container pt-3">
                    <div className="card text-dark">
                        <div className="p-3">
                            <h6 className="font-weight-bold">Pencarian Hotel</h6>
                            <div className="container">
                                <div onClick={() => handleOpen('destination')} className="d-flex align-items-center" style={{ borderBottom: '1px solid gray', paddingBottom: '5px' }}>
                                    <Icon icon={LocationArrowIcon} className='mr-2 text-primary' />
                                    <div>
                                        <label className="title font-weight-bold">Tujuan</label>
                                        <small className="md-result">{hotelSelected ? hotelSelected.fullname : 'Cari tujuan'}</small>
                                    </div>
                                </div>
                                <div className="d-flex mt-3" style={{ borderBottom: '1px solid gray', paddingBottom: '5px' }}>
                                    <div onClick={() => handleOpenDrawer('date', 'checkin')} className="w-100 d-flex align-items-center">
                                        <Icon icon={CalenderIcon} className='mr-2 text-primary' />
                                        <div>
                                            <label className="title">Check In</label>
                                            <small className="md-result">{moment(date.checkin).format('ddd, DD MMM YYYY')}</small>
                                        </div>
                                    </div>
                                    <div onClick={() => handleOpenDrawer('date', 'checkout')} className="w-100 d-flex align-items-center">
                                        <Icon icon={CalenderIcon} className='mr-2 text-primary' />
                                        <div>
                                            <label className="title">Check Out</label>
                                            <small className="md-result">{moment(date.checkout).format('ddd, DD MMM YYYY')}</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mt-3" style={{ borderBottom: '1px solid gray', paddingBottom: '5px' }}>
                                    <Icon icon={UserIcon} className='mr-2 text-primary' />
                                    <div onClick={() => handleOpenDrawer('visitor')} className='w-100'>
                                        <label className="title font-weight-bold">Tamu Hotel</label>
                                        <small className="md-result">{`${Number(visitor['child'] || 0) + Number(visitor['adult'] || 0)} Tamu, ${room} Kamar`}</small>
                                    </div>
                                </div>
                            </div>
                            <button type="button" onClick={handleSearch} className="btn btn-primary mt-3 font-weight-bold shadow btn-sm btn-block">Search</button>
                        </div>
                    </div>
                </div>
            </RootStyled>
            <DestinationHotel keyword={keyword} handleChangeKeyword={handleChangeKeyword} open={open.destination} hotelSelected={hotelSelected} setHotelSelected={setHotelSelected} toggle={handleOpen} />

            <DrawerDate isOpen={openDrawer.date} onClose={() => handleOpenDrawer('date', 'checkin')} date={date} handleChange={handleChangeDate} dateActive={dateActive} handleChangeDateActive={handleChangeDateActive} />

            <DrawerVisitorHotel isOpen={openDrawer.visitor} onClose={() => handleOpenDrawer('visitor')} visitor={visitor} childAge={childAge} room={room} handleAddVisitor={handleAddVisitor} handleChangeAge={handleChangeAge} handleChangeRoom={handleChangeRoom} handleReduceVisitor={handleReduceVisitor} />
        </>
    );
}

const RootStyled = styled.div`
    min-height:100vh;
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(253,191,73,1) 40%);;
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


export default HotelPage;