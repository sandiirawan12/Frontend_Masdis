import blogsApi from "@/api/blogs";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { A11y, Navigation, Autoplay, } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames';
import queryString from 'query-string';
import { useRouter } from "next/router";
import Head from "next/head"

const initialState = {
    category: ''
}

function parseQueryOptions(location) {
    const query = queryString.parse(location);

    let category = ''

    if (typeof query.category === "string") {
        category = query.category
    }

    return category;
}
function parseQuery(location) {
    return [parseQueryOptions(location)];
}

function buildQuery(category) {
    const params = {};
    if (category !== "") {
        params.category = category
    }

    return queryString.stringify(params, { encode: false });
}

function reducer(state, action) {
    switch (action.type) {
        case 'SET_CATEGORY':
            return { ...state, category: action.payload }
        default:
            throw new Error();
    }
}

function init(state) {
    const [category] = parseQuery(window.location.search);
    return { ...state, category };
}


function Blogs() {
    const [state, dispatch] = useReducer(reducer, initialState, init);
    const [page, setPage] = useState(1);
    let [titleBlogs, setTitleBlogs] = useState('');

    const { access_token } = useSelector(state => state.token)
    const [blogs, setBlogs] = useState([])
    const [slider, setSlider] = useState([])

    const [listCategory, setListCategory] = useState([])
    const [meta, setMeta] = useState()
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    // replace url
    useEffect(() => {
        const query = buildQuery(state.category);
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
    }, [state.category]);

    useEffect(() => {
        setLoading(true)
        blogsApi.getBlogs(access_token, { limit: 9, page, category: state.category }).then(res => {
            if (res.success) {
                setBlogs(blogs => blogs.concat(res.data))
                setMeta(res.meta)
                setLoading(false)
            }
        })
    }, [page, state.category]);

    useEffect(() => {
        blogsApi.getBlogs(access_token, { limit: 10, page: 1, order: 'read_times' }).then(res => {
            if (res.success) {
                setSlider(res.data)
            }
        })
    }, []);

    useEffect(() => {
        blogsApi.getCategory(access_token).then(res => {
            if (res.success) {
                setListCategory(res.data)
            }
        })
    }, []);

    useEffect(() => {
        let obj = listCategory.find(item => item.slug_blog_category === state.category)
        if (obj) {
            setTitleBlogs(obj.name_blog_category)
        } else {
            setTitleBlogs('Artikel Baru')

        }
    }, [state.category]);


    const handleChangeCategory = (category) => {
        dispatch({ type: 'SET_CATEGORY', payload: category })
        setPage(1)
        setBlogs([])
    }

    if (loading) {
        return <div style={{ minHeight: '100vh', background: 'rgba(255,255,255,.5)' }} className='w-100  d-flex justify-content-center align-items-center'>
            <div className='position-relative' style={{ width: '220px', height: '220px' }}>
                <Image layout='fill' objectFit='contain' src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/pulse-spinner.svg" alt="loading.." />
            </div>
        </div>
    }


    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <title>Discover the world, one adventure at a time -  Masterdiskon.com</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Pesan tiket pesawat dan hotel murah di Masterdiskon. Cek harga tiket pesawat online dan dapatkan promo tiket pesawat terbaru. Booking mudah &amp; aman semua maskapai di sini!" />
                <meta property="og:title" content='Discover the world, one adventure at a time -  Masterdiskon.com' />
                <meta property="og:type" content="Website" />
                <meta property="og:url" content="https://masterdiskon.com/blogs" />

            </Head>
            <main>
                <section id="main-banner">
                    <div className="container container-blog py-md-3 rounded banner-container p-0-sm">
                        <Swiper loop autoplay={{
                            delay: 2500,
                        }} spaceBetween={5} style={{
                            borderRadius: '10px'
                        }} modules={[Navigation, A11y, Autoplay,]} navigation={true}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}>
                            {slider.map(item => (
                                <SwiperSlide key={item.id_blog} style={{ width: '100%', height: '350px' }}>
                                    <Link href={`/blogs/${item.title_slug}`}>
                                        <a>
                                            <Image objectFit='cover' layout='fill' src={item.img} />
                                            <div className="slider-text">
                                                <h4 style={{
                                                    borderRadius: '10px',
                                                    background: 'rgba(255,255,255,.9245) '
                                                }} className="mb-0 text-dark p-2">{item.title}</h4>
                                            </div>
                                        </a>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
                <div className="container container-blog my-5">
                    <div className="container-list mb-3">
                        <div className="list">
                            <div onClick={() => handleChangeCategory('')} className={classNames("list-item", {
                                active: state.category === ''
                            })}>
                                Artikel Baru
                            </div>
                            {listCategory.map(item => (
                                <div onClick={() => handleChangeCategory(item.slug_blog_category)} className={classNames("list-item", {
                                    active: state.category === item.slug_blog_category
                                })}>
                                    {item.name_blog_category}
                                </div>
                            ))}
                        </div>
                    </div>
                    <section style={{ minHeight: '100vh' }}>
                        <div className="my-2">
                            <h3 className="font-weight-bolder">{titleBlogs}</h3>
                            <div className="devide-line-comp" />
                        </div>
                        <div className="form-row" >
                            {blogs?.map(item => (
                                <div className="col-6 col-md-4">
                                    <Link href={`/blogs/${item.title_slug}`} key={item.id_blog}>
                                        <a className="no-underline">
                                            <div className="blog-home text-dark mumbul">
                                                <div className="kotak-img">
                                                    <img src={item.img} className="img-fluid rounded" />
                                                    <p className="card-text mb-0" style={{ position: 'absolute', bottom: 8, left: 8 }}>
                                                        <span className="badge badge-warning">{item.category.name_blog_category}</span>
                                                    </p>
                                                </div>
                                                <div className="py-2 ">
                                                    <div className="title-trip cardTitle">
                                                        <p className="mb-0 judul-artikel">{item.title}</p>
                                                    </div>
                                                    <small className="text-black-50 text-date-post">{moment(Date(item.date_added)).format('DD MMM YYYY')}</small>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        {(meta && page < meta?.maxPage) &&
                            <div className="text-center">
                                <button onClick={() => setPage(page => page + 1)} className="btn btn-primary">Selanjutnya</button>
                            </div>
                        }
                    </section></div>
            </main >
        </>

    );
}

export default Blogs;