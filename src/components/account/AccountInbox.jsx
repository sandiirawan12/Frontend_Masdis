import { Icon } from '@iconify/react';
import HistoryIcon from '@iconify/icons-fa-solid/history';
import BellIcon from '@iconify/icons-fa-solid/bell';
import { useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import userApi from '@/api/user';
import Image from 'next/image';
import queryString from 'query-string';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import MDPagination from '../shared/MDPagination';
import { useMediaQuery } from "react-responsive";
import moment from 'moment';
import HeaderBack from '@/components-mobile/header/HeaderBack';

const initialState = {
    options: {},
    listInbox: [],
    meta: null
}


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
            return { ...state, listInbox: action.payload }
        case 'SET_META':
            return {
                ...state, meta: action.payload,
            };
        case 'SET_OPTION_VALUE':
            return {
                ...state,
                options: { ...state.options, [action.option]: action.value },
            };
        default:
            throw new Error();
    }
}

function init(state) {
    const [options] = parseQuery(window.location.search);

    return { ...state, options };
}



function AccountInbox() {
    const { access_token } = useSelector(state => state.token)
    const [state, dispatch] = useReducer(reducer, initialState, init);
    const router = useRouter();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

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
        userApi.getListInbox(access_token, state.options).then(res => {
            if (res.success) {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
                dispatch({ type: 'SET_META', payload: res.meta })
            }
        })
    }, [state.options])

    const handleSeen = (data) => {
        userApi.setSeen(access_token, data.id_notification).then(res => {
            if (res.success) {
                switch (data.type) {
                    case 'value':
                        return router.push('');
                    default:
                        return router.push(`/user/purchase/detail/${data.ref}`)
                }

            }
        })
    }

    const handlePageChange = (value) => {
        dispatch({
            type: 'SET_OPTION_VALUE',
            option: 'page',
            value
        })
    }

    if (state.listInbox.length > 0) {
        content = <>
            <ul className="list-group">
                {state.listInbox.map(item => (
                    <div key={item.id} onClick={() => handleSeen(item)} style={{
                        background: item.seen == 0 ? '#6e6f7019' : 'transparent',
                        cursor: 'pointer'
                    }} className="rounded-0 mb-1 list-group-item border-bottom list-group-item-action">
                        <div className="media text-muted">
                            <div className="media-body mb-0">
                                <small className="text-muted float-right"><Icon icon={HistoryIcon} />
                                    {moment(item.date_added).format('DD MMM YYYY')}</small>
                                <strong className="d-block text-gray-dark">
                                    <Icon icon={BellIcon} /> {item.title}</strong>
                                <small className="mb-0">{item.content}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </ul>
            {state.meta &&
                <div className="mt-4 w-100">
                    <MDPagination onPageChange={handlePageChange} currentPage={state.meta.page} pageSize={state.meta.limit} totalCount={state.meta.total} className="pagination-bar" />
                </div>
            }
        </>
    } else {
        content = <div className="text-center py-5">
            <div className='d-flex justify-content-center'>
                <div style={{ width: '120px', height: '120px', position: 'relative' }}>
                    <Image layout='fill' src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/empty/not-found-notification.png" className="img-kosong" />
                </div>
            </div>
            <h4 className="mt-3">Belum ada pemberitahuan</h4>
            <span>Anda dapat melihat semua pemberitahuan di halaman ini kapan saja </span>
        </div>
    }



    return (
        <>
            {isTabletOrMobile &&
                <HeaderBack title='Inbox' onBack={() => router.back()} />
            }
            <div className={classNames('pb-5', {
                'p-2': isTabletOrMobile,
            })} style={{ fontSize: isTabletOrMobile ? '12px' : '16px' }} >
                {!isTabletOrMobile &&
                    <h3 className='font-weight-bold text-primary'>Inbox</h3>
                }
                {content}
            </div>
        </>

    );
}

export default AccountInbox;