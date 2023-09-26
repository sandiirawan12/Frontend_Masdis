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
                <HeaderBack title='Order' onBack={() => router.back()} />
            }
            <RootStyled>
                {!isTabletOrMobile &&
                    <h3 className="text-primary font-weight-bold">Purchase</h3>
                }
                <div className="form-row">
                    <div className="col-6">
                        <div className="form-group">
                            <div className="input-group mb-3">
                                <input style={{ fontSize: '12px' }} onChange={(e) => setKeyword(e.target.value)} type="text" className="form-control" id="caricode" placeholder="Cari Transaksi" />
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <select style={{ fontSize: '12px' }} value={status} onChange={e => setStatus(e.target.value)} className="form-control" id="pilihstatus">
                                <option value=''>Pilih Status</option>
                                {state.meta?.orderStatus.map(item => (
                                    <option value={item.id}>{item.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col-2">
                        <button onClick={handleFilter} className="btn btn-block btn-outline-secondary btn-sm" type="button" id="button-addon2">
                            <Icon icon={SearchIcon} />
                        </button>
                    </div>
                </div>
                {state?.listPurchase?.length === 0 ?
                    <div className="row">
                        <div className="col-md-4 offset-4">
                            <div style={{
                                width: '100%',
                                height: '30vh',
                                position: 'relative'
                            }}>
                                <Image src='/assets/images/not-found.png' layout='fill' />
                            </div>
                            <h5 className="text-center">Data Tidak Ditemukan</h5>
                        </div>
                    </div>
                    :
                    <>
                        {state.listPurchase.map(item => (
                            <CardPurchase data={item} key={item} />
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

export default AccountPurchase;