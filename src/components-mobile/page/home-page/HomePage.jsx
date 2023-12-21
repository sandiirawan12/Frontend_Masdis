import { Icon } from "@iconify/react";
import BestCity from "@/components/shared/BestCity";
import PopularFlight from "@/components/shared/PopularFlight";
import { useMemo } from "react";
import BlogSlider from "@/components/shared/BlogSlider";
import Benefit from "@/components/page/home-page/Benefit";
import Banner from '../../shared/Banner';
import HotelTerdekat from '../../shared/HotelTerdekat';
import Link from "next/link";
import Header from "@/components-mobile/header/Header";
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import homeApi from "@/api/home";
import shopApi from "@/api/shop";
import CategoryCard from "@/components-mobile/shared/CategoryCard";
import Image from 'next/image'
import Promo from "@/components/shared/Promo";
import ListMaskapai from './ListMaskapai'

function HomePage(props) {
    const { access_token } = useSelector(state => state.token);

    const [latUser, setLatUser] = useState(-6.1753871)
    const [lngUser, setLngUser] = useState(106.8245779)
    
    const [state, setState] = useState({
        banner: { data: undefined, isLoading: true },
        blogs: { data: undefined, isLoading: true },
        coupon: { data: undefined, isLoading: true },
        infoCovid: { data: undefined, isLoading: true },
        popularFlight: { data: undefined, isLoading: true },
        bestTenCity: { data: undefined, isLoading: true },
        promo: { data: undefined, isLoading: true },
        categoryProduct: { data: undefined, isLoading: true },
        newProduct: { data: undefined, isLoading: true },
        hotelTerdekat: { data: undefined, isLoading: true },
        maskapaiFlight: { data: undefined, isLoading: true },
    })


    const handleChange = (name, action) => {
        setState(prevState => ({ ...prevState, [name]: { ...prevState[name], [action.name]: action.value } }))
    }

    useEffect(() => {
        document.documentElement.lang = 'id'

        handleChange('banner', { name: 'isLoading', value: true })
        homeApi.getBanner(access_token, { limit: 10 }).then(res => {
            if (res.success) {
                handleChange('banner', { name: 'data', value: res.data })
            }
            handleChange('banner', { name: 'isLoading', value: false })
        })
    }, [])

    useEffect(() => {
        homeApi.getHotelTerdekat('', '').then(res => {
            if (res.success === true) {
                handleChange('hotelTerdekat', { name: 'data', value: res.data })
            } else {
                alert('error get data hotel terdekat')
            }
            handleChange('hotelTerdekat', { name: 'isLoading', value: false })
        })
    }, [])

    useEffect(() => {
        handleChange('maskapaiFlight', { name: 'isLoading', value: true })
        homeApi.getMaskapaiFlight(access_token, { limit: 10 }).then(res => {
            if (res.success) {
                handleChange('maskapaiFlight', { name: 'data', value: res.data })
            }
            handleChange('maskapaiFlight', { name: 'isLoading', value: false })
        })
    }, [])

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                handleSuccess,
                handleError
            );
        } else {
        }
    }, [])

    const handleSuccess = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setLatUser(parseFloat(latitude, 2));
        setLngUser(parseFloat(longitude, 1));

        homeApi.getHotelTerdekat(latitude, longitude).then(res => {
            if (res.success === true) {
                handleChange('hotelTerdekat', { name: 'data', value: res.data })
            } else {
                alert('error get data hotel terdekat')
            }
            handleChange('hotelTerdekat', { name: 'isLoading', value: false })
        })
    };

    const handleError = (error) => {
        homeApi.getHotelTerdekat('', '').then(res => {
            if (res.success === true) {
                handleChange('hotelTerdekat', { name: 'data', value: res.data })
            } else {
                alert('error get data hotel terdekat')
            }
            handleChange('hotelTerdekat', { name: 'isLoading', value: false })
        })
    };

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
        shopApi.getCategoryGeneralProduct(access_token, { status: 1 }).then(res => {
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
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
            }} className='pt-3 px-3'>
                <div className="d-flex mb-2 justify-content-between align-items-center">
                    <Link href='/' >
                        <a className="navbar-brand">
                            <LogoStyled placeholder='blur' src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/masterdiskon_logo_big.png" />
                        </a>
                    </Link>
                    <Link href='/hotels?search=destination'>
                        <div style={{ width: '40px', height: '40px', background: '#FAFAFA', borderRadius: '50%' }} className="d-flex align-items-center justify-content-center">
                            <Icon icon="prime:search" style={{ fontSize: '24px' }} className="text-primary" />
                        </div>
                    </Link>
                </div>
                <CategoryCard data={state.categoryProduct} />
            </div>
            <div className="container-fluid bg-white">
                <section>
                    {useMemo(() =>
                        <Banner data={state.banner} />
                        , [state.banner])}
                </section>
                
                <section className='my-5'>
                    {useMemo(() =>
                        <HotelTerdekat data={state.hotelTerdekat} />
                        , [state.hotelTerdekat])}
                </section>

                {/* new product */}
                {/* <section className='my-4'>
                    {useMemo(() =>
                        <NewProduct data={state.newProduct} />
                        , [state.newProduct])}
                </section> */}

                {/* 10 kota terbaik */}
                <section className="my-4">
                    {useMemo(() =>
                        <BestCity data={state.bestTenCity} />
                        , [state.bestTenCity])}
                </section>

                {/* penerbangan popular */}
                <section className="my-4">
                    {useMemo(() =>
                        <PopularFlight data={state.popularFlight} />
                        , [state.popularFlight])}
                </section>

                {state.promo.data?.length > 0 &&
                    <section className='my-4'>
                        <Promo data={state.promo} />
                    </section>
                }

                {/* info covid-19 */}
                <section style={{ background: '#fff' }}>
                    <section style={{
                        // marginTop: '-6rem'
                    }}>
                        {useMemo(() => {
                            return <BlogSlider title='Baca dan bangkitkan semangat liburanmu' data={state.blogs} />
                        }, [state.blogs])}
                    </section>
                    <section style={{
                        marginTop: '1rem'
                    }}>
                        <Benefit />
                    </section>
                </section >

                <section>
                    {useMemo(() =>
                        <ListMaskapai data={state.maskapaiFlight} />
                        , [state.maskapaiFlight])}
                </section>
            </div >
        </>
    );
}


const LogoStyled = styled.img`
    height:60px;
    vertical-align:middle;
`



export default HomePage;