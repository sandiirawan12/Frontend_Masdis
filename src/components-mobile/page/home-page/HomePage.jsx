import { Icon } from "@iconify/react";
import SearchIcon from '@iconify/icons-fa-solid/search';
import BestCity from "@/components/shared/BestCity";
import PopularFlight from "@/components/shared/PopularFlight";
import { useMemo } from "react";
import BlogSlider from "@/components/shared/BlogSlider";
import Benefit from "@/components/page/home-page/Benefit";
import Link from "next/link";
import Header from "@/components-mobile/header/Header";
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import homeApi from "@/api/home";
import shopApi from "@/api/shop";
import CategoryCard from "@/components-mobile/shared/CategoryCard";
import Image from 'next/image'
import PromoSlider from "@/components-mobile/shared/PromoSlider";
import NewProduct from "@/components/shared/NewProduct";
import Promo from "@/components/shared/Promo";

function HomePage(props) {
    const { access_token } = useSelector(state => state.token);
    const [state, setState] = useState({
        blogs: { data: undefined, isLoading: true },
        coupon: { data: undefined, isLoading: true },
        infoCovid: { data: undefined, isLoading: true },
        popularFlight: { data: undefined, isLoading: true },
        bestTenCity: { data: undefined, isLoading: true },
        promo: { data: undefined, isLoading: true },
        categoryProduct: { data: undefined, isLoading: true },
        newProduct: { data: undefined, isLoading: true },
    })


    const handleChange = (name, action) => {
        setState(prevState => ({ ...prevState, [name]: { ...prevState[name], [action.name]: action.value } }))
    }

    useEffect(() => {
        handleChange('blogs', { name: 'isLoading', value: true })
        homeApi.getBlogs(access_token).then(res => {
            if (res.success) {
                handleChange('blogs', { name: 'data', value: res.data })
            }
            handleChange('blogs', { name: 'isLoading', value: false })
        })
    }, [])

    useEffect(() => {
        handleChange('infoCovid', { name: 'isLoading', value: true })
        homeApi.getBlogs(access_token, { category: 'covid-19', limit: 10 }).then(res => {
            if (res.success) {
                handleChange('infoCovid', { name: 'data', value: res.data })
            }
            handleChange('infoCovid', { name: 'isLoading', value: false })
        })
    }, [])

    useEffect(() => {
        handleChange('promo', { name: 'isLoading', value: true })
        homeApi.getPromo(access_token, { limit: 10 }).then(res => {
            if (res.success) {
                handleChange('promo', { name: 'data', value: res.data })
            }
            handleChange('promo', { name: 'isLoading', value: false })
        })
    }, [])

    useEffect(() => {
        handleChange('popularFlight', { name: 'isLoading', value: true })
        homeApi.getPopularFlight(access_token, { limit: 10 }).then(res => {
            if (res.success) {
                handleChange('popularFlight', { name: 'data', value: res.data })
            }
            handleChange('popularFlight', { name: 'isLoading', value: false })
        })
    }, [])

    useEffect(() => {
        handleChange('bestTenCity', { name: 'isLoading', value: true })
        homeApi.getBestTenCity(access_token, { limit: 10 }).then(res => {
            if (res.success) {
                handleChange('bestTenCity', { name: 'data', value: res.data })
            }
            handleChange('bestTenCity', { name: 'isLoading', value: false })
        })
    }, [])

    useEffect(() => {
        handleChange('categoryProduct', { name: 'isLoading', value: true })
        shopApi.getCategoryGeneralProduct(access_token, { status: 1, part: 'all' }).then(res => {
            if (res.success) {
                handleChange('categoryProduct', { name: 'data', value: res.data })
            }
            handleChange('categoryProduct', { name: 'isLoading', value: false })
        })
    }, [])

    useEffect(() => {
        handleChange('newProduct', { name: 'isLoading', value: true })
        shopApi.getGeneralProducts(access_token, { status: 1, limit: 9, page: 1 }, {}).then(res => {
            if (res.success) {
                handleChange('newProduct', { name: 'data', value: res.data })
            }
            handleChange('newProduct', { name: 'isLoading', value: false })
        })
    }, [])

    return (
        <>
            {/* <Header /> */}
            <div style={{
                backgroundColor: '#18c5f4',
                display: 'flex',
                flexDirection: 'column',
            }} className='pt-3 px-3'>
                <div className="d-flex mb-2 justify-content-between align-items-center">
                    <Link href='/' >
                        <a className="navbar-brand">
                            <LogoStyled placeholder='blur' src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/masterdiskon_logo_big.png" />
                        </a>
                    </Link>
                    <div className="text-white">
                        <h6 className="font-weight-bold" style={{
                            fontSize: '16px', fontFamily: 'Century Gothic,sans-serif', fontStyle: 'italic'
                        }}>Travel, Live, Discover</h6>
                    </div>
                </div>
                <Link href='/hotels?search=destination'><a className="text-dark">
                    <div style={{
                        width: '100%',
                        background: 'white',
                        cursor: 'pointer',
                        padding: '5px 15px',
                        borderRadius: '20px',
                        boxShadow: '0 0 10px -3px rgba(0,0,0,.5)',
                        display: 'flex',
                        // flexDirection: 'row',
                        // position: 'relative'
                        fontSize: '12px',
                        alignItems: "center",
                    }}>
                        <div style={{ width: '25px', height: '25px', position: 'relative', }} className='d-inline-block'>
                            <Image layout='fill' src={'https://cdn.masterdiskon.com/masterdiskon/icon/fe/luv.png'} />
                        </div>
                        {/* <Icon icon={SearchIcon} className='mr-2 text-primary' /> */}
                        <div className="w-100">
                            <label className="d-block" style={{ marginBottom: '-10px' }}>Mau kemana?</label>
                            <label className="my-0 text-secondary">City, hotel, place to go</label>
                        </div>
                    </div>
                </a></Link>
                <CategoryCard data={state.categoryProduct.data} />

            </div>
            <div className="container-fluid my-2">

                {/* <section className="mt-3">
                    <PromoSlider />
                </section> */}

                {/* new product */}
                <section className='my-3'>
                    {useMemo(() =>
                        <NewProduct data={state.newProduct} />
                        , [state.newProduct])}
                </section>

                {/* 10 kota terbaik */}
                <section className="mt-3">
                    {useMemo(() =>
                        <BestCity data={state.bestTenCity} />
                        , [state.bestTenCity])}
                </section>

                {/* penerbangan popular */}
                <section className="mt-3">
                    {useMemo(() =>
                        <PopularFlight data={state.popularFlight} />
                        , [state.popularFlight])}
                </section>

                {state.promo.data?.length > 0 &&
                    <Promo data={state.promo} />
                }

                {/* info covid-19 */}
                <section style={{ background: '#F5F6FA' }}>
                    <section className='mt-4'>
                        {useMemo(() => {
                            return <BlogSlider title='Info Covid-19' data={state.infoCovid} />
                        }, [state.infoCovid])}
                    </section>
                    <section style={{
                        // marginTop: '-6rem'
                    }}>
                        {useMemo(() => {
                            return <BlogSlider title='Inspirasi' data={state.blogs} />
                        }, [state.blogs])}
                    </section>
                    <section style={{
                        marginTop: '1rem'
                    }}>
                        <Benefit />
                    </section>
                </section >
            </div >
        </>
    );
}


const LogoStyled = styled.img`
    height:50px;
    vertical-align:middle;
`



export default HomePage;