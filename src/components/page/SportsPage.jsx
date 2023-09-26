import { useEffect, useMemo, useState } from "react";
import { TitleBackgroundStyled } from "../styled/home-page";
import styled from 'styled-components'
import shopApi from "@/api/shop";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { SwiperSlide, Swiper } from "swiper/react";
import { CardImage, CardStyle } from "../styled/bestCity";
import Link from "next/link";
import BlogSlider from "../shared/BlogSlider";
import homeApi from "@/api/home";
import { useRouter } from 'next/router';
import HeaderBack from "@/components-mobile/header/HeaderBack";
import { CardLoading } from '@/components/styled/bestCity'

import ReactGA from 'react-ga';
ReactGA.initialize('G-56R5954QCE');


const CardStyleArea = styled.div`
&:hover {
    background-image: url(${props => props.img});
}
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${props => props.img});
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center center;
    min-height:180px;
    width:100%;
    color:white;
    position: relative;
    z-index:1;
    transition: all .2s;
    .icon{
        font-size:18px;
    }
    @media screen and (max-width:1224px){
        min-height:120px;
        p{
            font-size:10px;
        }
        h5,.icon{
            font-size:12px;
        }
    }
`
// badminton,basket,run,bicycle,golf,futsal
const catalogs = [
    { name: "Run", img: "https://cdn.masterdiskon.com/masterdiskon/icon/fe/running-white.png", slug: "run" },
    { name: "Cycle", img: "https://cdn.masterdiskon.com/masterdiskon/icon/fe/bicycle.png", slug: "bicycle" },
    { name: "Golf", img: "https://cdn.masterdiskon.com/masterdiskon/icon/fe/golf.png", slug: "golf" },
    { name: "Basketball", img: "https://cdn.masterdiskon.com/masterdiskon/icon/fe/basketball.png", slug: "basket" },
    { name: "Badminton", img: "https://cdn.masterdiskon.com/masterdiskon/icon/fe/badminton.png", slug: "badminton" },
    { name: "Soccer/Futsal", img: "https://cdn.masterdiskon.com/masterdiskon/icon/fe/soccer-player.png", slug: "futsal" },
]

function SportsPage() {
    const { access_token } = useSelector(state => state.token);

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const [newProducts, setNewProducts] = useState([]);
    const [article, setArticle] = useState([]);
    const [fetchProduct, setFetchProduct] = useState(true);
    const [fetchBlog, setFetchBlog] = useState(true);

    const [events, setEvents] = useState({ isLoading: true, data: [] })

    let initialProduct = [1, 2, 3, 4]

    if (!isTabletOrMobile) {
        initialProduct = initialProduct.concat([6, 5])
    }

    const router = useRouter();

    useEffect(() => {

        document.title = 'Booking Lapangan | Harga Tiket Pesawat Promo dan Hotel Paling Murah Spesial 2023';
        ReactGA.pageview(window.location.pathname + window.location.search);

        setFetchProduct(true)
        shopApi.getGeneralProducts(access_token, { category: 'sports', limit: 10, page: 1 }, {}).then(res => {
            if (res.success) {
                setNewProducts(res.data)
                setFetchProduct(false)
            }
        })
    }, [])

    useEffect(() => {
        setFetchBlog(true)
        homeApi.getBlogs(access_token).then(res => {
            if (res.success) {
                setArticle(res.data)
                setFetchBlog(false)
            }
        })
    }, [])

    useEffect(() => {
        setEvents(state => ({ ...state, isLoading: true }))
        shopApi.getTagEvent(access_token).then(res => {
            if (res.success) {
                setEvents((state) => ({ ...state, data: res.data }))
            }
            setEvents(state => ({ ...state, isLoading: false }))
        })

    }, [])

    // if (isLoading) {
    //     return <div style={{
    //         height: '50vh',
    //         marginBottom: '5rem'
    //     }} className="d-flex flex-column align-items-center justify-content-center">
    //         <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/pulse-spinner.svg" />
    //         <h4>Sedang menyiapkan data...</h4>
    //     </div>
    // }


    return (
        <>
            {isTabletOrMobile &&
                <HeaderBack title="Sports" onBack={() => router.push('/')} />
            }

            {!isTabletOrMobile &&
                <BannerStyled>
                    <div className="container pt-5">
                        <h1 className="font-weight-bold text-white">Sports</h1>
                    </div>
                </BannerStyled>
            }

            <div className="container mt-4">
                <section className="mb-4">
                    <div className="row">
                        {catalogs?.map(item => (
                            <div className="col-4 col-md-2 text-center d-flex align-items-center flex-column">
                                <Link href={`/product/category/sports?filter_tag=${item.slug}`}><a className="text-dark">
                                    <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: '#0070BA', border: '8px solid white', padding: '12px', boxShadow: '5px 5px 10px -5px rgba(0,0,0,.5)' }}>
                                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={item.img} />
                                    </div>
                                    <h6 className="mt-2 font-weight-bold">{item.name}</h6>
                                </a></Link>
                            </div>
                        ))}
                    </div>
                </section>

                {newProducts &&
                    <section>
                        <TitleBackgroundStyled>
                            Produk Baru
                        </TitleBackgroundStyled>


                        {fetchProduct ?
                            <div className="row mb-5">
                                {initialProduct.map((a, index) => (
                                    <div key={index} style={{ width: isTabletOrMobile ? '25%' : '100%' }} className="col-lg-2">
                                        <CardLoading type='rect' showLoadingAnimation={true} />
                                    </div>
                                ))}
                            </div>
                            :
                            <Swiper slidesPerView={isTabletOrMobile ? 2.5 : 5.5}
                                style={{ padding: '0 0 10px 0' }}
                                spaceBetween={10}>
                                {newProducts?.map((item) => (
                                    <SwiperSlide key={item.id_product}>
                                        <Link href={`/product/category/detail/${item.slug_product}`}><a>
                                            <CardStyle className="card" img={item.img_featured_url} style={{
                                                boxShadow: '8px 8px 10px -8px #0c0b0b7f'
                                            }} >
                                                <div className="d-flex flex-column justify-content-between">
                                                    <CardImage image={item.img_featured_url}>
                                                        <h5 style={{
                                                            display: '-webkit-box',
                                                            WebkitLineClamp: '2',
                                                            WebkitBoxOrient: 'vertical',
                                                            lineClamp: '2',
                                                            overflow: 'hidden',
                                                            height: isTabletOrMobile ? '37px' : '56px',
                                                        }} className='font-weight-bold label-name p-2'>
                                                            {item.product_name}
                                                        </h5>
                                                    </CardImage>
                                                    <div className='text-dark label-price p-2' style={{ marginBottom: '-20px' }}>
                                                        <p className="font-weight-bold mb-0 label-price__text">Mulai dari</p>
                                                        <p className="font-weight-bold text-primary label-price__price">
                                                            Rp<strong>{item.start_price.toLocaleString().replaceAll(',', '.')}</strong></p>
                                                    </div>
                                                </div>
                                            </CardStyle>
                                        </a></Link>
                                    </SwiperSlide>))}
                            </Swiper>
                        }

                    </section>
                }



                {events?.data &&

                    <section className="mt-4">
                        <TitleBackgroundStyled>
                            Jadwal Event
                        </TitleBackgroundStyled>
                        {events?.isLoading ?
                            <div className="row mb-5">
                                {[1, 2, 3, 4].map((a, index) => (
                                    <div key={index} style={{ width: isTabletOrMobile ? '25%' : '100%' }} className="col-lg-3">
                                        <CardLoading style={{ minHeight: '180px', maxHeight: '180px' }} type='rect' showLoadingAnimation={true} />
                                    </div>
                                ))}
                            </div>
                            :
                            <Swiper spaceBetween={10} slidesPerView={isTabletOrMobile ? 1 : 3.5} style={{ paddingBottom: '15px', paddingRight: '8px' }} >
                                {events?.data?.map(item =>
                                    <SwiperSlide>
                                        <Link href={`/event-schedule/${item.name}`}><a>
                                            <div className="card border-0" style={{
                                                background: 'white',
                                                padding: '10px',
                                                boxShadow: '5px 5px 8px -4px rgba(0,0,0,.5)',
                                                borderRadius: '15px'
                                            }}>
                                                <div className="kotak-img position-relative">
                                                    <span className="badge badge-warning position-absolute" style={{ bottom: '10px', left: '10px' }}>{item.name}</span>
                                                    <img style={{ borderRadius: '15px', border: 0 }} src="https://cdn.masterdiskon.com/masterdiskon/product/sports/jadwal-acaraa.png" />
                                                </div>
                                            </div>
                                        </a></Link>
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        }

                    </section>
                }

                <section className="mt-4">
                    <TitleBackgroundStyled>
                        Sewa Lapangan
                    </TitleBackgroundStyled>
                    <Swiper spaceBetween={10} slidesPerView={isTabletOrMobile ? 1 : 3.5} style={{ paddingBottom: '15px', paddingRight: '8px' }} >
                        <SwiperSlide>
                            <Link href='/field-rental'><a>
                                <div className="card border-0" style={{
                                    background: 'white',
                                    padding: '10px',
                                    boxShadow: '5px 5px 8px -4px rgba(0,0,0,.5)',
                                    borderRadius: '15px'
                                }}>
                                    <div className="kotak-img position-relative">
                                        <span className="badge badge-warning position-absolute" style={{ bottom: '10px', left: '10px' }}>Sports</span>
                                        <img style={{ borderRadius: '15px', border: 0 }} src="https://cdn.masterdiskon.com/masterdiskon/product/sports/sewa_arena.png" />
                                    </div>
                                </div>
                            </a></Link>
                        </SwiperSlide>
                    </Swiper>
                </section>

                <section className="mt-4">
                    {useMemo(() => {
                        return <BlogSlider title='Artikel Sports' data={{ data: article, isLoading: fetchBlog }} />
                    }, [article, fetchBlog])}
                </section>

            </div>
        </>
    );
}

const BannerStyled = styled.div`
	background:linear-gradient(0deg, rgba(0, 0,0, 0.3), rgba(0, 0, 0, 0.3)), url('https://cdn.masterdiskon.com/masterdiskon/icon/fe/bg-sports.jpg') no-repeat center center;
	background-size: cover;
    height:350px;
    background-position:center -381px;
`

const eventSchedule = [
    {
        title_slug: '',
        title: 'finally! The last Bromo KOM Challenge, which was held on 14 March 2020, was the last mass start event before the pandemic.',
        img: 'https://www.mainsepeda.com/uploads/event/5/FeaturedImage-1652672187.jpg',
        category: { name_blog_category: 'Bicycle' }
    },
    {
        title_slug: '',
        title: 'Dalam rangkaian ulang tahun bank bjb ke 61 kali ini akan diramaikan dengan acara KolaboRun yang bertema Kola6orAks1 Satukan Visi Bersinergi untuk Negeri.',
        img: 'https://lh6.googleusercontent.com/SFUC7jb0wVXtNMmTpJO5w2RFtWrZOyOEiNcnlrN-IrFHJTO1A4Eh31wCSZtPjVGtvHEMrWrouVgTaTc3DQc20WoglxV4_MrXjG5lCq2_c2NBzgBw2dAfYU8wxi-CjdRi3Q=w1293',
        category: { name_blog_category: 'Run' }
    },
]


export default SportsPage;