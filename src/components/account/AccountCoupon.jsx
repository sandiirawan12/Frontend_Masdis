import styled from "styled-components";
import queryString from 'query-string';
import { useSelector } from 'react-redux';
import { useEffect, useReducer } from "react";
import userApi from "@/api/user";
import { useRouter } from 'next/router'
import MyPagination from "../shared/Pagination";
import { Icon } from "@iconify/react";
import GiftIcon from "@iconify/icons-fa-solid/gift";
import { useMediaQuery } from "react-responsive";

const initialState = {
    options: {},
    meta: {},
    listCoupon: []
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
            return { ...state, listCoupon: action.payload }
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


function AccountCoupon() {
    const [state, dispatch] = useReducer(reducer, initialState, init);
    const { access_token } = useSelector(state => state.token);
    const router = useRouter()

    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' });

    useEffect(() => {
        if (isTabletOrMobile) {
            router.push('/user/profile')
        }

    }, [isTabletOrMobile])


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
        userApi.getListCoupon(access_token, state.options).then((res) => {
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

    const listCoupon = state.listCoupon?.map(item => (
        <div className="col-md-6" key={item.id}>
            <div className="card mb-3 rounded">
                <div className="no-gutters d-flex">
                    <div style={{
                        width: '30%',
                        fontSize: '40px',
                        borderRadius: '9px 0 0 9px !important'
                    }} className="flash-img bg-primary rounded-left text-white text-center d-flex justify-content-center align-items-center">
                        <Icon icon={GiftIcon} />
                    </div>
                    <FlashDealSeparatorStyle />
                    <div className="card-body text-left p-2">
                        <h5 className="card-title mb-1">{item.detail_coupon.coupon_name}</h5>
                        <p>Senilai  {item.detail_coupon.percent !== 'persen' && 'Rp'}  {item.detail_coupon.amount}{item.detail_coupon.percent === 'persen' && '%'} </p>
                        <div>
                            <span className="btn btn-secondary">Diklaim</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))

    let content = <> <div className="row">
        {listCoupon}
    </div>
        <div className="d-flex justify-content-center">
            {/* <MyPagination pagination={state.meta} handlePageChange={handlePageChange} /> */}
        </div></>
    if (listCoupon.length === 0) {
        content = <div className="d-flex justify-content-center mt-3">
            <h4>Belum ada kupon yang diklaim</h4>
        </div>
    }

    return (
        <div className="container">
            <h3 className="text-primary font-weight-bold">Kupon</h3>
            {content}
        </div >
    );
}

const FlashDealSeparatorStyle = styled.div`
	position: relative;
	width: 2px;
	background-image: -webkit-gradient(linear,left top,left bottom,color-stop(70%,#efefef),color-stop(0,hsla(0,0%,100%,0)));
	background-image: -webkit-linear-gradient(#efefef 70%,hsla(0,0%,100%,0) 0);
	background-image: linear-gradient(#efefef 70%,hsla(0,0%,100%,0) 0);
	background-position: 100%;
	background-size: 2px 15px;
	background-repeat: repeat-y;
    &::before {
	content: "";
	width: 15px;
	height: 7px;
	border: 1px solid #efefef;
	border-bottom-color: #efefef;
	border-bottom-color: #f5f6fa;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	background-color: #f5f6fa;
	bottom: -1px;
	position: absolute;
	left: -6px;
}
&::after {
	content: "";
	width: 15px;
	height: 7px;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	border: 1px solid #efefef;
	border-top-color: #efefef;
	border-top-color: #f5f6fa;
	background-color: #f5f6fa;
	top: -1px;
	position: absolute;
	left: -6px;
}

`

export default AccountCoupon;