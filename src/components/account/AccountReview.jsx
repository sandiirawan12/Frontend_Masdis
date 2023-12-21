
import userApi from '@/api/user';
import HeaderBack from '@/components-mobile/header/HeaderBack';
import { url } from '@/services/utils';
import StarIcon from '@iconify/icons-fa-solid/star'
import { Icon } from "@iconify/react";
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import queryString from 'query-string'
import { useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import MDPagination from '../shared/MDPagination';


const initialState = {
    options: {},
    meta: null,
    listReview: []
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
            return { ...state, listReview: action.payload }
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


function AccountReview() {
    const [state, dispatch] = useReducer(reducer, initialState, init);
    const { access_token } = useSelector(state => state.token)
    const router = useRouter()
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' })

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
        userApi.getListReview(access_token, state.options).then((res) => {
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

    const generateRating = (rating) => {
        const arr = [];
        for (let index = 1; index <= rating; index++) {
            arr[index] = index;
        }
        return arr
    }

    let listReview = state.listReview?.map(item => (
        <div key={item} className="list-group-item" style={{ borderRadius: '15px', boxShadow: '5px 5px 5px -5px rgba(0,0,0,.5)' }}>
            <div className="row">
                <div className="col-md-2 text-center kotak-img">
                    <Link href={url.generalProduct(item.id_product)}>
                        <a>
                            <img className="rounded" style={{
                                objectFit: 'cover',
                                width: '100%',
                                background: '#e3e3e3',
                            }} src={item?.review_product?.img_featured ? `https://cdn.masterdiskon.com/masterdiskon/product/${item?.review_product?.img_featured}` : 'https://dummyimage.com/400x600/e3e3e3/ffffff&text=No+Picture'} />
                        </a>
                    </Link>
                </div>
                <div className="col-md-10">
                    {
                        generateRating(item.rating).map((item) => (
                            <Icon color='gold' icon={StarIcon} key={item} />
                        ))}
                    <small className="float-right">Diulas pada {new Date(item.date_added).toLocaleString('UTC', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}</small>
                    <h4 className='font-weight-bold text-primary mt-3'>{item.title_review}</h4>
                    <p>{item.content_review}</p>
                </div>
            </div>
        </div>

    ))
    return (
        <>
            {isTabletOrMobile &&
                <HeaderBack title='My Review' onBack={() => router.back()} />
            }
            {!isTabletOrMobile &&
                <>
                    <h3 className='font-weight-bold text-primary'>Ulasan</h3>
                    <p>Terdapat <span className="total_review">{state.meta?.total}</span> Ulasan</p>
                </>
            }
            <div className={classNames("", {
                'p-3': isTabletOrMobile
            })}>
                {listReview}
            </div>
            {state.meta &&
                <div className="mt-4 d-flex justify-content-end w-100">
                    <MDPagination onPageChange={handlePageChange} currentPage={state.meta.page} pageSize={state.meta.limit} totalCount={state.meta.total} className="pagination-bar" />
                </div>
            }
        </>
    );
}

export default AccountReview;