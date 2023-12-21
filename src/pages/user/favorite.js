import userApi from "@/api/user";
import HeaderBack from "@/components-mobile/header/HeaderBack";
import AccountLayout from "@/components/account/AccountLayout";
import CardProductGeneral from "@/components/shared/CardProductGeneral";
import MDPagination from "@/components/shared/MDPagination";
import classNames from "classnames";
import withAuth from "lib/withAuth";
import { useRouter } from "next/router";
import queryString from 'query-string';
import React, { useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";


const initialState = {
    options: {},
    meta: null,
    listFavourite: []
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
            return { ...state, listFavourite: action.payload }
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


function Page() {
    const [state, dispatch] = useReducer(reducer, initialState, init);
    const { access_token } = useSelector(state => state.token);
    const router = useRouter()
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' });
    let content;

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
        userApi.getListFavourite(access_token, state.options).then((res) => {
            const { data, meta } = res;

            if (data) {
                dispatch({ type: 'FETCH_SUCCESS', payload: data });
                dispatch({ type: 'SET_META', payload: meta });
            }
        });
    }, [state.options]);

    const handlePageChange = (page) => {
        dispatch({
            type: "SET_OPTION_VALUE",
            option: "page",
            value: page,
        });
    };

    if (state.listFavourite.length > 0) {
        content = <>
            {state.listFavourite.map(item => (
                <div className="col-md-4 mr-0 col-6 mb-3" key={item}>
                    <CardProductGeneral data={item} />
                </div>
            ))
            }
            {state.meta &&
                <div className="mt-4 d-flex justify-content-end w-100">
                    <MDPagination onPageChange={handlePageChange} currentPage={state.meta.page} pageSize={state.meta.limit} totalCount={state.meta.total} className="pagination-bar" />
                </div>
            }
        </>
    } else {
        content = <div className="col-md-12">
            <h4 className="text-center">Data tidak ditemukan</h4>
        </div>
    }



    return (
        <>
            {isTabletOrMobile &&
                <HeaderBack title='Masterdiskon - Favorite' onBack={() => router.back()} />
            }
            <div className={classNames("container",{'p-3':isTabletOrMobile})}>
                {!isTabletOrMobile &&
                    <h3 className="font-weight-bold text-primary">Favorit</h3>
                }
                <div className="form-row">
                    {content}
                </div>
            </div>
        </>
    );
}

Page.Layout = { desktop: AccountLayout, mobile: React.Fragment }

export default withAuth(Page, { auth: true, pathAfterFailure: '/login' });