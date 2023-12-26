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
import { toast } from "react-toastify";

const TextStyled = styled.span`
	text-transform: capitalize;

    @media screen and (max-width:1224px){
        font-size:14px;
    }
`

const initialState = {
    options: { limit: 10 },
    filters: {},
    meta: null,
    listQuickpick: []
};

function parseQueryOptions(location) {
    const query = queryString.parse(location);

    const optionValues = {
        page: 1,
        limit: 5,
        search: '',
        type: ''
    };

    if (typeof query.page === "string") {
        optionValues.page = parseFloat(query.page);
    }
    if (typeof query.type === "string") {
        optionValues.type = query.type
    }
    if (typeof query.search === "string") {
        optionValues.search = parseFloat(query.search);
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

    if (options.type !== 0) {
        params.type = options.type;
    }
    if (options.search !== "") {
        params.search = options.search;
    }

    return queryString.stringify(params, { encode: false });
}

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return { ...state, listQuickpick: action.payload }
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


function AccountQuickpick() {
    const [state, dispatch] = useReducer(reducer, initialState, init);
    const { access_token } = useSelector(state => state.token)
    const [search, setSearch] = useState('')
    const [type, setType] = useState('')
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
        userApi.getListQuickpick(access_token, state.options).then(res => {
            if (res.success) {
                const { data, meta } = res;
                dispatch({ type: 'FETCH_SUCCESS', payload: data });
                dispatch({ type: 'SET_META', payload: meta });
            } else {
                toast.error(res.message, {
                    position: 'top-right', toastId: 'checkout'
                })
            }
        })
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
            option: "search",
            value: search,
        });
        dispatch({
            type: "SET_OPTION_VALUE",
            option: "page",
            value: 1,
        });
        dispatch({
            type: "SET_OPTION_VALUE",
            option: "type",
            value: type,
        });
    }

    let listQuickpickData = state.listQuickpick?.map((item) => (
        <span className="qp-list" key={item}>
            <div className="card mb-3" style={{ borderRadius: '15px' }}>
                <div className="card-body py-3 d-flex justify-content-between">
                    <TextStyled className="card-title mb-0">
                        <Icon icon="solar:user-check-broken" className='mr-3 text-primary' style={{ fontSize: '24px' }} />
                        {item.firstname} {item.lastname} - {item.identificationNumber}
                    </TextStyled>
                    <div>
                        <Link href={`/user/quickpick/edit/${item.id}`}>
                            <a className="mx-2">
                                Edit
                            </a>
                        </Link>
                        <span onClick={() => handleConfirmDelete(item.id)} className="mx-2 text-danger" style={{ cursor: 'pointer' }}>
                            Hapus
                        </span>
                    </div>
                </div>
            </div>
        </span>
    ))

    return (
        <>
            {isTabletOrMobile &&
                <HeaderBack title='Pesanan Saya' onBack={() => router.back()} />
            }
            <RootStyled>
                <div className="mt-3">
                    <h4 className="text-primary font-weight-bold">Daftar Penumpang</h4>
                    <small>Tambahkan daftar ini untuk proses pemesanan yang lebih cepat</small>
                </div>
                <div className="card my-3" style={{
                    borderRadius: '15px',
                }}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <input style={{ fontSize: '16px' }} onChange={(e) => setSearch(e.target.value)} type="text" className="form-control" id="caricode" placeholder="Cari No Pesanan" />
                            </div>
                            <div className="col-4">
                                <select style={{ fontSize: '16px' }} value={type} onChange={e => setType(e.target.value)} className="form-control" id="pilihstatus">
                                    <option value=''>- Pilih Type -</option>
                                    <option value="adult">Dewasa</option>
                                    <option value="child">Anak</option>
                                    <option value="infant">Bayi</option>
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
                    {state?.listQuickpick?.length === 0 ?
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
                                                <p>Data quickpick Anda akan muncul di sini, Mari buat quickpick!</p>
                                                <Link href="/">
                                                    <a className="btn btn-primary" style={{ cursor: "pointer" }}>Tambah Quickpick</a>
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
                            {listQuickpickData}
                            <Link href="/user/quickpick/new">
                                <a className="btn btn-block btn-primary my-3">Tambahkan penumpang</a>
                            </Link>
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

export default AccountQuickpick;