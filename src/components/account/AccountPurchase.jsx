import CardPurchase from "@/components/shared/CardPurchase";
import { Icon } from "@iconify/react";
import SearchIcon from '@iconify/icons-fa-solid/search';
import queryString from 'query-string';
import { useEffect, useReducer } from 'react';
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


function AccountPurchase() {
    const [state, dispatch] = useReducer(reducer, initialState, init);
    const { access_token } = useSelector(state => state.token)
    const [keyword, setKeyword] = useState('')
    const [status, setStatus] = useState(state.options.status ?? 0)
    const router = useRouter()

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

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
        userApi.getListPurchase(access_token, state.options).then((res) => {
            const { data, meta } = res;
            dispatch({ type: 'FETCH_SUCCESS', payload: data });
            dispatch({ type: 'SET_META', payload: meta });
        });
    }, [state.options]);

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
                <HeaderBack title='Pesanan Saya' onBack={() => router.back()} />
            }
            <RootStyled>
                <div className="mt-3">
                    <h4 className="text-primary font-weight-bold">Daftar Pesanan</h4>
                    <small>Seluruh history pesanan Anda akan muncul di sini</small>
                </div>
                <div className="card my-3" style={{
                    borderRadius: '15px',
                }}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <input style={{ fontSize: '16px' }} onChange={(e) => setKeyword(e.target.value)} type="text" className="form-control" id="caricode" placeholder="Cari No Pesanan" />
                            </div>
                            <div className="col-4">
                                <select style={{ fontSize: '16px' }} value={status} onChange={e => setStatus(e.target.value)} className="form-control" id="pilihstatus">
                                    <option value=''>- Pilih Status -</option>
                                    {state.meta?.orderStatus.map(item => (
                                        <option value={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-2">
                                {!isTabletOrMobile ?
                                    <button onClick={handleFilter} className="btn btn-block btn-primary btn-md" type="button" id="button-addon2">
                                        <Icon icon={SearchIcon} /> <span className="ml-2">Search</span>
                                    </button>
                                    :
                                    <button onClick={handleFilter} className="btn btn-block btn-primary btn-md" type="button" id="button-addon2">
                                        <Icon icon={SearchIcon} />
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    {state?.listPurchase?.length === 0 ?
                        <div>
                            <div className="card" style={{
                                borderRadius: '15px',
                            }}>
                                <div className="card-body">
                                    {!isTabletOrMobile ?
                                        <div className="row align-items-center mt-3">
                                            <div className="col-md-3">
                                                <img src="https://cdn.masterdiskon.com/masterdiskon/img/data-not-found.png" style={{ width: '100%' }} alt="Gambar Masterdiskon" />
                                            </div>
                                            <div className="col-md-9">
                                                <h5 className="font-weight-bold">Belum Ada Data</h5>
                                                <p>Data pesanan Anda akan muncul di sini, Mari buat pesanan via homepage!</p>
                                                <Link href="/">
                                                    <a className="btn btn-primary" style={{ cursor: "pointer" }}>Homepage</a>
                                                </Link>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <div className="d-flex align-items-center mt-3">
                                                <div className="mr-3">
                                                    <img src="https://cdn.masterdiskon.com/masterdiskon/img/data-not-found.png" style={{ width: '100%' }} alt="Gambar Masterdiskon" />
                                                </div>
                                                <div>
                                                    <h6 className="font-weight-bold">Belum Ada Data</h6>
                                                    <small>Data pesanan Anda akan muncul di sini, Mari buat pesanan via homepage!</small>
                                                    <br />
                                                    <Link href="/">
                                                        <a className="btn btn-sm btn-primary mt-3" style={{ cursor: "pointer" }}>Homepage</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                            <br />
                            <br />
                            <br />
                        </div>
                        :
                        <>
                            {state.listPurchase.map(item => (
                                <CardPurchase data={item} key={item} />
                            ))}
                            {state.meta &&
                                <div className="mt-4 w-100">
                                    <MDPagination onPageChange={handlePageChange} currentPage={state.meta.page} pageSize={state.meta.limit} totalCount={state.meta.total} className="pagination-bar" />
                                </div>
                            }
                        </>
                    }
                </div>

            </RootStyled>
        </>
    );
}


const RootStyled = styled.div`
    
@media screen and (max-width:1224px){
    padding: 15px;
    background: #f5f6fa;
}
`

export default AccountPurchase;