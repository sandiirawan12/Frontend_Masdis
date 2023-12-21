import userApi from "@/api/user";
import AccountLayoutDesktop from "@/components/account/AccountLayout";
import AccountLayoutMobile from "@/components-mobile/Layout";
import AccountQuickpick from "@/components/account/AccountQuickpick";
import withAuth from "lib/withAuth";
import Head from "next/head";
import React, { useEffect, useReducer, useState } from "react";
import queryString from 'query-string'
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import MDPagination from "@/components/shared/MDPagination";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";
import { toast } from "react-toastify";
const initialState = {
    options: {},
    listQuickpick: []
};

function parseQueryOptions(location) {
    const query = queryString.parse(location);

    const optionValues = {
        page: 1,
        limit: 5,
    };

    if (typeof query.page === "string") {
        optionValues.page = parseFloat(query.page);
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

    return queryString.stringify(params, { encode: false });
}

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return { ...state, listQuickpick: action.payload }
        case 'SET_OPTION_VALUE':
            return {
                ...state,
                options: { ...state.options, page: 1, [action.option]: action.value },
            };
        case 'SET_META':
            return {
                ...state, meta: action.payload,
            };
        default:
            throw new Error();
    }
}

function init(state) {
    const [options] = parseQuery(window.location.search);

    return { ...state, options };
}



function Page() {
    const { access_token } = useSelector(state => state.token)
    const [state, dispatch] = useReducer(reducer, initialState, init);
    const router = useRouter();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    const [edited, setEdited] = useState(false)

    const handlePageChange = (page) => {
        dispatch({
            type: "SET_OPTION_VALUE",
            option: "page",
            value: page,
        });
    };

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
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
                dispatch({ type: 'SET_META', payload: res.meta })
            }
        })
    }, [state.options, edited])


    const handleDeleteQuickpick = (id) => {
        userApi.deleteQuickpick(access_token, id).then(res => {
            if (res.success) {
                toast.success('Data berhasil dihapus')
                setEdited(prev => !prev)
            } else {
                toast.error('Data gagal dihapus')
            }

        })
    }

    return <>
        <Head>
            <title>Masterdiskon - Passenger Quick Pick</title>
        </Head>
        <AccountQuickpick deleteQuickpick={handleDeleteQuickpick} handlePageChange={handlePageChange} data={state.listQuickpick} />
        {state.meta &&
            <div className={classNames("mt-4 d-flex w-100", {
                'justify-content-end': !isTabletOrMobile,
                'justify-content-center': isTabletOrMobile,
            })}>
                <MDPagination onPageChange={handlePageChange} currentPage={state.meta.page} pageSize={state.meta.limit} totalCount={state.meta.total} className="pagination-bar" />
            </div>
        }
    </>
}

Page.Layout = { desktop: AccountLayoutDesktop, mobile: React.Fragment }

export default withAuth(Page, { auth: true, pathAfterFailure: '/login' });
// export default Page