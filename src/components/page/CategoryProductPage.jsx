import { useRouter } from 'next/router'
import { useEffect, useReducer, useState } from 'react';
import queryString from 'query-string';
import shopApi from '@/api/shop';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import WidgetFilter from '../widgets/WidgetFilter';
import MDPagination from '../shared/MDPagination';
import SortIcon from '@iconify-icons/fa/filter';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';
import HeaderBack from '@/components-mobile/header/HeaderBack';
import WidgetFilterFlight from '@/components-mobile/shared/WidgetFilterFlight';
import { BottomSheet, SheetContent } from '@biotic-ui/bottom-sheet';
import CardProductGeneral from '@/components/shared/CardProductGeneral';
import HeaderAll from '../header/HeaderAll'

import ReactGA from 'react-ga';
ReactGA.initialize('G-56R5954QCE');

const initialState = {
    options: {},
    filters: {},
    meta: {},
    products: [],
    isLoading: true,
    dataFilters: []
};

function parseQueryOptions(location) {
    const query = queryString.parse(location);
    // category=hotels&limit=9&page=1&tag=&id_city=
    const optionValues = {
        price_from: '',
        price_to: '',
        status: '1',
    };

    if (typeof query.price_from === "string") {
        optionValues.price_from = query.price_from
    }
    if (typeof query.price_to === "string") {
        optionValues.price_to = query.price_to
    }
    if (typeof query.status === "string") {
        optionValues.status = query.status
    }

    return optionValues;
}

function parseQueryFilters(location) {
    const query = queryString.parse(location);
    const filterValues = {
        page: 1,
        limit: 12,
        id_city: '',
        tag: '',
        price: '',
        sort: ''
    }

    Object.keys(query).forEach((param) => {
        const mr = param.match(/^filter_([-_A-Za-z0-9]+)$/);

        if (!mr) {
            return;
        }

        const filterSlug = mr[1];

        filterValues[filterSlug] = query[param];
    });

    return filterValues;
}

function parseQuery(location) {
    return [parseQueryOptions(location), parseQueryFilters(location)];
}

function buildQuery(options, filters) {
    const params = {};
    if (options.price_from !== "") {
        params.price_from = options.price_from
    }
    if (options.price_to !== "") {
        params.price_to = options.price_to
    }
    // if (options.tag !== "") {
    //     params.tag = options.tag
    // }
    if (options.limit !== "") {
        params.limit = options.limit
    }
    if (options.page !== "") {
        params.page = options.page
    }
    if (options.status !== "") {
        params.status = options.status
    }

    Object.keys(filters)
        .forEach((filterSlug) => {
            params[`filter_${filterSlug}`] = filters[filterSlug];
        });

    return queryString.stringify(params, { encode: false });
}

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return { ...state, isLoading: true }
        case 'FETCH_PRODUCTS_SUCCESS':
            return { ...state, products: action.payload, isLoading: false }
        case 'SET_FILTER_VALUE':
            let page;
            if (action.filter !== 'page') {
                page = 1;
            } else {
                page = action.value;
            }
            return {
                ...state,
                filters: { ...state.filters, [action.filter]: action.value, page },
            };
        case 'SET_DATA_FILTERS':
            return {
                ...state,
                dataFilters: [...state.dataFilters.filter(item => !item.slug.includes(action.value.slug)), action.value],
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
        case 'SET_OPTIONS_VALUE':
            return {
                ...state,
                options: action.value,
            };
        case 'RESET_FILTER':
            return {
                ...state,
                filters: { page: 1, limit: 12 },
            };
        default:
            throw new Error();
    }
}

function init(state) {
    const [options, filters] = parseQuery(window.location.search);
    return { ...state, options, filters };
}


function CategoryProductPage() {
    const [state, dispatch] = useReducer(reducer, initialState, init);
    const router = useRouter();
    const { access_token } = useSelector(state => state.token);


    const [open, setOpen] = useState({ filter: false, sort: false })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' });

    const handleOpen = (field) => {
        setOpen(state => ({ ...state, [field]: !state[field] }));
    }

    const onNext = () => {
        if (state?.meta?.page >= 1 && state?.meta?.page < Math.ceil(state?.meta?.total / state?.meta?.limit)) {
            handleChangePage(state?.meta?.page + 1);
        }
    };

    const onPrevious = () => {
        if (state?.meta?.page > 1) {
            handleChangePage(state?.meta?.page - 1);
        }
    };

    // replace url
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);

        if (router.isReady) {
            const query = buildQuery(state.options, state.filters);
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
        }
    }, [state.options, state.filters, router.asPath]);

    useEffect(() => {

        ReactGA.pageview(window.location.pathname + window.location.search);
        dispatch({ type: 'FETCH_PRODUCTS' })
        if (router.isReady) {
            console.log(state.filters);
            shopApi.getGeneralProducts(access_token, { ...state.options, category: router.query.slug }, state.filters).then(res => {
                if (res.success) {
                    dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: res.data })
                    dispatch({ type: 'SET_META', payload: res.meta || {} })
                }
            })
        }
    }, [state.options, state.filters, router.query.slug])

    useEffect(() => {

        ReactGA.pageview(window.location.pathname + window.location.search);
        if (router.isReady) {
            shopApi.getTagCategory(access_token, { category: router.query.slug }).then(res => {
                if (res.success) {
                    if (res.data.length > 0) {
                        const value = {
                            name: 'Tag',
                            type: 'check',
                            value: [],
                            slug: 'tag',
                            items: res.data.map(item => ({ slug: item.slug_product_tag, name: item.name_product_tag }))
                        }
                        dispatch({ type: 'SET_DATA_FILTERS', value })
                    }
                }
            }).then(() => {
                // shopApi.getFilterCity(access_token).then(res => {
                //     if (res.success) {

                //         dispatch({
                //             type: 'SET_DATA_FILTERS', value: {
                //                 name: 'Kisaran Harga',
                //                 type: 'option-button',
                //                 value: '',
                //                 slug: 'price',
                //                 items: [
                //                     { slug: '0-25000', name: 'Rp0-Rp25.000' },
                //                     { slug: '25000-50000', name: 'Rp25.000-Rp50.000' },
                //                     { slug: '50000-100000', name: 'Rp50.000-Rp100.000' },
                //                     { slug: '100000-0', name: 'Lebih dari Rp100.000' },
                //                 ]
                //             }
                //         })

                //         const value = {
                //             name: 'Lokasi (~10Km)',
                //             type: 'check',
                //             value: [],
                //             slug: 'id_city',
                //             items: res.data.map(item => ({ slug: String(item.id_city), name: item.city_name }))
                //         }
                //         dispatch({ type: 'SET_DATA_FILTERS', value })
                //     }

                // })
            })

        }
    }, [router.query.slug]);

    const handleChangePage = (value) => {
        dispatch({ type: 'SET_FILTER_VALUE', filter: 'page', value })
    }

    const renderContent = () => {
        return state.products?.length > 0 ?
            state.products?.map(item => (
                <div className="col-lg-3 col-6 mb-4">
                    <CardProductGeneral data={item} />
                </div>
            ))
            : <div className="d-flex justify-content-center w-100">
                <div className="text-center mt-5 mb-5 opsi-empty">
                    <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/no-room.svg" className="mt-4" height="280px" />
                    <h5>Hasil pencarian tidak ditemukan</h5><p>Silahkan perbaharui pencarian Anda.</p>
                </div>
            </div>
    }

    return (
        <>
            <HeaderAll />

            {isTabletOrMobile &&
                <HeaderBack title='Tours' onBack={() => router.back()} />
            }

            <section className="pt-3 pb-5">
                <div className="container">
                    {!isTabletOrMobile &&
                        <div className="row">
                            <div className="col-3">
                                <h4>
                                    {router.query.slug}
                                </h4>
                            </div>
                            <div className="col-3">
                                <h5>Hasil pencarian</h5>
                            </div>
                            <div className='col-2' />
                            <div className='col-4'>
                                <div className="form-group d-flex align-items-center">
                                    <label for="" className='mr-3'>Urutkan</label>
                                    <select className="form-control" value={state.filters.sort} onChange={e => dispatch({ type: 'SET_FILTER_VALUE', filter: 'sort', value: e.target.value })} name="" id="">
                                        <option value={''}>Terbaru</option>
                                        <option value={'price-ASC'}>Harga (Rendah ke tinggi)</option>
                                        <option value={'price-DESC'}>Harga (Tinggi ke rendah)</option>
                                        <option value={'name-ASC'}>Nama (A - Z)</option>
                                        <option value={'name-DESC'}>Nama (Z - A)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="row">
                        {!isTabletOrMobile &&
                            <div className="col-3">
                                <WidgetFilter title='Filter' filters={state.dataFilters} values={state.filters} dispatch={dispatch} />
                            </div>
                        }
                        <div className={classNames("col-9", {
                            'col-12': isTabletOrMobile
                        })}>
                            <div className="form-row">
                                {renderContent()}
                            </div>
                            {Object.keys(state.meta).length > 0 &&
                                <div className='d-flex justify-content-end w-100'>
                                    <MDPagination onPageChange={handleChangePage} currentPage={Number(state.meta.page)} pageSize={Number(state.meta.limit)} totalCount={Number(state.meta.total)} className="pagination-bar" />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>

            {isTabletOrMobile &&
                <nav style={{
                    zIndex: '99', height: '40px'
                }} className="navbar bg-white fixed-bottom shadow pb-0">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <div onClick={() => handleOpen('sort')}>
                                <h6><Icon icon={SortIcon} className='text-primary' />  Sort</h6>
                            </div>
                            <div className="d-flex flex-1 align-items-center">
                                <h6>
                                    <i className="fas fa-caret-left mr-2" onClick={onPrevious}></i>
                                    Page {state?.meta?.page ?? 1} - {!!(state?.meta?.total / state?.meta?.limit) ? Math.ceil(state?.meta?.total / state?.meta?.limit) : 1} <i onClick={onNext} className="fas fa-caret-right ml-2"></i>
                                </h6>
                            </div>
                            <h6 onClick={() => handleOpen('filter')}><i className="fas fa-sliders-h text-primary"></i> Filter</h6>
                        </div>
                    </div>
                </nav>
            }

            {isTabletOrMobile &&
                <>
                    <WidgetFilterFlight open={open.filter} toggle={handleOpen} title='Filter' filters={state.dataFilters} values={state.filters} dispatch={dispatch} />

                    <BottomSheet open={open.sort} onClose={() => handleOpen('sort')}>
                        <SheetContent>
                            <ul className="list-group" style={{ border: 'none', borderRadius: 0 }}>
                                {sorts.map(item => (
                                    <li onClick={() => dispatch({ type: 'SET_FILTER_VALUE', filter: 'sort', value: item.value })} className="list-group-item" style={{ borderBottom: '1px solid #eaeaea', cursor: 'pointer', borderLeft: 0, borderTop: 0, borderRight: 0, borderRadius: 0 }}>
                                        <div className="form-check p-0" style={{ cursor: 'pointer' }}>
                                            <label className="form-check-label w-100 d-flex justify-content-between align-items-center">
                                                <div>
                                                    {item.name}
                                                </div>
                                                <div>
                                                    <input type="radio" name="sort" className="form-check-input position-relative" checked={state.filters.sort === item.value} />
                                                </div>
                                            </label>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </SheetContent>
                    </BottomSheet>
                </>
            }

        </>

    );
}

const sorts = [
    { name: 'Terbaru', value: '' },
    { name: 'Harga (Rendah ke tinggi)', value: 'price-ASC' },
    { name: 'Harga (Tinggi ke rendah)', value: 'price-DESC' },
    { name: 'Nama (A - Z)', value: 'name-ASC' },
    { name: 'Nama (Z - A)', value: 'name-DESC' },
]

const ContainerImage = styled.div`
  position: relative;
  width: 100%;
  height: 180px;

  @media (max-width:1224px){
    .cp_shadow{
        font-size:12px;
    }

  }

  .cp_shadow {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    padding: 8px 12px;
    background: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0)
    );
    border-top-right-radius: 15px !important;
    border-top-left-radius: 15px !important;
}
.label-flash {
    position: absolute;
    bottom: 10px;
    left: 10px;
}
`;

const CardDesc = styled.div`
padding:10px;
    .md-product-name{
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis; 
        line-height: 1.349;
        height: 48px; 
        font-weight:bold;
        color:#0070BA;
        max-height: 49px; 
        -webkit-box-orient: vertical;
        -webkit-line-clamp:2;
        
    }

    `

const ImgStyled = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-right-radius: 15px !important;
    border-top-left-radius: 15px !important;

                                            

`

const CardStyled = styled.div`
border-radius:15px;
box-shadow:5px 5px 5px -5px rgba(0,0,0,.5);

.md-label-discount{
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    border-top-right-radius:0;
    border-bottom-right-radius:0;
    position:relative;
    margin-bottom:5px;
    padding:3px 5.7px;
    font-size:10px;
 &::after{
    content:'';
    position:absolute;
    background:inherit;
    width:5px;
    height:5px;
    bottom:-5px;
    right:0;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%);


 }

}
`

export default CategoryProductPage;