import Link from 'next/link';
import React from 'react';
import queryString from 'query-string';
import { Swiper, SwiperSlide } from 'swiper/react';
import moment from 'moment';
import { TitleBackgroundStyled } from '../styled/home-page';
import { useMediaQuery } from 'react-responsive';
import { CardImage, CardLoading, CardStyle } from '../styled/bestCity';


function NewProduct(props) {
    const { data, isLoading } = props.data
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    let arr = [1, 2, 3, 4]

    if (!isTabletOrMobile) {
        arr = arr.concat([6, 5])
    }


    if (isLoading) {
        return <div className="row mb-5">
            {arr.map((a, index) => (
                <div key={index} style={{ width: isTabletOrMobile ? '25%' : '100%' }} className="col-lg-2">
                    <CardLoading type='rect' showLoadingAnimation={true} />
                </div>
            ))}
        </div>
    }
    if (data) {
        return <>
            <TitleBackgroundStyled>Jelajahi Indonesia</TitleBackgroundStyled>
            <Swiper slidesPerView={isTabletOrMobile ? 2.5 : 5.5}
                style={{ padding: '0 0 10px 0' }}
                spaceBetween={10}>
                {data?.map((item) => (
                    <SwiperSlide key={item.name}>
                        <Link href={`/product/category/detail/${item.slug_product}`}><a>
                            <CardStyle className="card" img={item.image} style={{
                                boxShadow: '8px 8px 10px -8px rgba(0,0,0,.5)'
                            }} >
                                <div className="d-flex flex-column justify-content-between">
                                    <CardImage image={item.img_featured_url}>
                                        <h5 style={{
                                            display: 'none', // '-webkit-box',
                                            WebkitLineClamp: '2',
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            height: isTabletOrMobile ? '37px' : '56px'
                                        }} className='font-weight-bold label-name p-2'>
                                            {item.product_name}
                                        </h5>
                                    </CardImage>
                                    <div className='text-dark label-price p-2' style={{ marginBottom: '-20px' }}>
                                        <p className="font-weight-bold mb-0 text-primary label-price__text" style={{
                                            display: '-webkit-box',
                                            WebkitLineClamp: '2',
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            height: isTabletOrMobile ? '37px' : '50px'
                                        }} >{item.product_name}</p>
                                        <p className="font-weight-bold mb-0 label-price__text">Mulai dari</p>
                                        <p className="font-weight-bold text-primary label-price__price">
                                            Rp.<strong>{item.start_price.toLocaleString().replaceAll(',', '.')}</strong></p>
                                    </div>
                                </div>
                            </CardStyle>
                        </a></Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </ >
    }
    return <></>
}


export default NewProduct
