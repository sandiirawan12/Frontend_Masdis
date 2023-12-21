
import { useEffect, useReducer, useRef } from 'react';
import CardInvoice from "@/components/shared/CardInvoice";
import { Icon } from "@iconify/react";
import SearchIcon from '@iconify/icons-fa-solid/search';
import queryString from 'query-string';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import MomentLocaleUtils, { formatDate, parseDate } from 'react-day-picker/moment';
import moment from 'moment';
import { useSelector } from 'react-redux';
import Image from 'next/image'
import userApi from "@/api/user";
import { useState } from "react";
import { useRouter } from "next/router";
import MDPagination from "../shared/MDPagination";
import styled from "styled-components";
import HeaderBack from '@/components-mobile/header/HeaderBack';
import { useMediaQuery } from "react-responsive";
import Link from 'next/link';

const initialState = {
    options: { limit: 5 },
    filters: {},
    meta: null,
    listPurchase: []
};


function parseQueryOptions(location) {
    const query = queryString.parse(location);

    const optionValues = {
        page: 1,
        limit: 5,
        keyword: '',
        status: ''
    };

    if (typeof query.page === "string") {
        optionValues.page = parseFloat(query.page);
    }
    if (typeof query.status === "string") {
        optionValues.status = query.status
    }
    if (typeof query.keyword === "string") {
        optionValues.keyword = parseFloat(query.keyword);
    }
    return optionValues;
}

function parseQuery(location) {
    return [parseQueryOptions(location)];
}

function buildQuery(options) {
    const params = {};

    if (options.page !== 1) {
        params.page = options.page;
    }

    if (options.status !== 0) {
        params.status = options.status;
    }
    if (options.keyword !== "") {
        params.keyword = options.keyword;
    }

    return queryString.stringify(params, { encode: false });
}

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return { ...state, listPurchase: action.payload }
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
        default:
            throw new Error();
    }
}

function init(state) {
    const [options] = parseQuery(window.location.search);

    return { ...state, options };
}


function AccountInvoice() {
    const [state, dispatch] = useReducer(reducer, initialState, init);
    const user = useSelector(state => state.user);
    const { access_token } = useSelector(state => state.token)
    const [keyword, setKeyword] = useState('')
    const [status, setStatus] = useState(state.options.status ?? 'All Status')
    const router = useRouter()
    const refCheckout = useRef();

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const [date, setDate] = useState(
        {
            checkin: moment().add(-360, 'days').toDate(),
            checkout: moment().add(1, 'days').toDate()
        }
    )
    function toDate(date) {
        var from = date.split("-")
        return new Date(from[2], from[1] - 1, from[0])
    }

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
    }, [state.options]);

    useEffect(() => {
        userApi.getListInvoice(access_token, date.checkin, date.checkout, keyword, user.id_user, status)
        .then((res) => {
            dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
            dispatch({ type: 'SET_META', payload: res.meta });
        });
    }, [state.options]);

    const handleSearch = () => {
        userApi.getListInvoice(access_token, date.checkin, date.checkout, keyword, user.id_user, status)
        .then((res) => {
            dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
            dispatch({ type: 'SET_META', payload: res.meta });
        });
    }
    const handlePageChange = (page) => {
        dispatch({
            type: "SET_OPTION_VALUE",
            option: "page",
            value: page,
        });
    };

    const handleFilter = () => {
        dispatch({
            type: "SET_OPTION_VALUE",
            option: "keyword",
            value: keyword,
        });
        dispatch({
            type: "SET_OPTION_VALUE",
            option: "page",
            value: 1,
        });
        dispatch({
            type: "SET_OPTION_VALUE",
            option: "status",
            value: status,
        });

    }
    return (
        <>
            {isTabletOrMobile &&
                <HeaderBack title='Order' onBack={() => router.back()} />
            }
            <RootStyled>
                {!isTabletOrMobile &&
                    <div className='mb-3'>
                        <h4 className="text-primary font-weight-bold">Invoice Saya</h4>
                        <small>Berikut daftar invoice yang tersedia</small>
                    </div>
                }
                <div className="card mb-3" style={{
                    borderRadius: '15px',
                }}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-3">
                                <label><small className="font-weight-bold mb-3">Dari Tanggal</small> </label>
                                <DayPickerInput
                                    value={date.checkin}
                                    formatDate={formatDate}
                                    format={'ddd, DD MMM YYYY'}
                                    parseDate={parseDate}
                                    dayPickerProps={{
                                        selectedDays: [date.checkin],
                                        modifiers,
                                        numberOfMonths: 2,
                                        locale: 'id',
                                        localeUtils: MomentLocaleUtils,
                                        onDayClick: () => refCheckout.current?.getInput().focus(),
                                    }}
                                    onDayChange={handleChangeCheckin}
                                    inputProps={{
                                        className: 'form-control',
                                        readOnly: true,
                                        style: { cursor: 'pointer', boxShadow: 'none', color: 'black' }
                                    }}
                                />

                            </div>
                            <div className="col-3">
                                <label> <small className="font-weight-bold mb-3"> Sampai Tanggal</small> </label>
                                <DayPickerInput
                                    ref={refCheckout}
                                    format={'ddd, DD MMM YYYY'}
                                    value={date.checkout}
                                    formatDate={formatDate}
                                    parseDate={parseDate}
                                    dayPickerProps={{
                                        selectedDays: [date.checkout],
                                        modifiers,
                                        numberOfMonths: 2,
                                        locale: 'id',
                                        localeUtils: MomentLocaleUtils,
                                        month: date.checkin,
                                        className: 'picker-hotel-checkout',
                                    }}
                                    onDayChange={handleChangeCheckout}
                                    inputProps={{
                                        className: 'form-control',
                                        readOnly: true,
                                        style: { cursor: 'pointer', boxShadow: 'none', color: 'black' }

                                    }}
                                />

                            </div>
                            <div className="col-2">
                                <div className="form-group">
                                    <label> <small className="font-weight-bold mb-3">  Status</small> </label>
                                    <select value={status} onChange={e => setStatus(e.target.value)} className="form-control" id="pilihstatus">
                                        <option value=''>Semua</option>
                                        <option value='Open'>Open</option>
                                        <option value='Unpaid'>Unpaid</option>
                                        <option value='Paid'>Paid</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <label> <small className="font-weight-bold mb-3">  Pencarian</small> </label>
                                    <div className="input-group mb-3">
                                        <input onChange={(e) => setKeyword(e.target.value)} type="text" className="form-control" id="caricode" placeholder="Cari No Invoice" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="form-group mt-3">
                                    <button style={{ marginTop: '15px' }} onClick={handleFilter} className="btn btn-primary btn-md" type="button" id="button-addon2">
                                        <Icon icon={SearchIcon} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {state?.listPurchase?.length === 0 ?
                    <div className="card" style={{
                        borderRadius: '15px',
                    }}>
                        <div className="card-body">
                            <div className="row align-items-center mt-3">
                                <div className="col-md-3">
                                    <img src="https://cdn.masterdiskon.com/masterdiskon/img/data-not-found.png" style={{ width: '100%' }} alt="Gambar Masterdiskon" />
                                </div>
                                <div className="col-md-9">
                                    <h5 className="font-weight-bold">Belum Ada Data</h5>
                                    <p>Data Invoice Anda akan muncul di sini, Mari buat pesanan via homepage!</p>
                                    <Link href="/">
                                        <a className="btn btn-primary" style={{ cursor: "pointer" }}>Homepage</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <>
                        {state.listPurchase.map(item => (
                            <CardInvoice data={item} key={item} />
                        ))}
                        {state.meta &&
                            <div className="mt-4 pb-5 w-100">
                                <MDPagination onPageChange={handlePageChange} currentPage={state.meta.page} pageSize={state.meta.limit} totalCount={state.meta.total} className="pagination-bar" />
                            </div>
                        }
                    </>
                }

            </RootStyled>
        </>
    );
}


const RootStyled = styled.div`
    
@media screen and (max-width:1224px){
    padding:15px;


}

`

export default AccountInvoice;