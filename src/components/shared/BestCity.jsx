import Link from 'next/link';
import React from 'react';
import queryString from 'query-string';
import { Swiper, SwiperSlide } from 'swiper/react';
import moment from 'moment';
import { TitleBackgroundStyled } from '../styled/home-page';
import { useMediaQuery } from 'react-responsive';
import { CardImage, CardLoading, CardStyle } from '../styled/bestCity';
import { Icon } from '@iconify/react';


function BestCity(props) {
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

    const makeUrl = (item) => {
        let params = {
            adult: 1,
            from: item.cityid,
            dateFrom: moment(new Date()).format('DD-MM-YYYY').toString(),
            dateTo: moment(new Date()).add(1, 'days').format('DD-MM-YYYY').toString(),
            room: 1,
            keyword: item.name
        }

        return `/product/hotel?${queryString.stringify(params)}`
    }

    return <>
        <TitleBackgroundStyled><Icon icon='solar:bed-line-duotone' className='mr-2 text-info'></Icon> Temukan hotel yang kamu suka di setiap wilayah</TitleBackgroundStyled>
        <Swiper className='mt-3 p-1' slidesPerView={isTabletOrMobile ? 2.5 : 5.5}
            style={{ padding: '0 0 10px 0' }}
            spaceBetween={10}>
            {data?.map((item) => (
                <SwiperSlide key={item.name}>
                    <Link href={makeUrl(item)}><a>
                        <CardStyle className="card" img={item.image} style={{
                            boxShadow: '-1px 3px 11px -7px rgba(156,156,156,0.75)', border: '1px solid #f8f9fa'
                        }} >
                            <div className="d-flex flex-column justify-content-between">
                                {/* 
                                <>
                                    <img style={{
                                        height: '100px',
                                        position: 'absolute',
                                        zIndex: '99',
                                        left: '4.7px',
                                        top: '8px'
                                    }} src="/assets/Icon/card-imlek01.png" alt="" />
                                </> */}
                                <CardImage image={item.image}>
                                    <h5 className='font-weight-bold label-name p-2' style={{ display: 'none' }}>
                                        {item.name}
                                    </h5>
                                </CardImage>
                                <div className='text-dark label-price p-3' style={{ marginBottom: '-10px' }}>
                                    <p className="font-weight-bold mb-0 text-primary label-price__text" style={{
                                        display: '-webkit-box',
                                        WebkitLineClamp: '2',
                                        fontSize: '18px',
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        height: isTabletOrMobile ? '37px' : '37px',

                                    }}>Kota {item.name}</p>
                                    <p className="font-weight-bold mb-2 text-small label-price__text"><span style={{ color: '#bb00b0' }}>{item.total.toLocaleString().replaceAll(',', '.')}</span> akomondasi</p>
                                    <p className="font-weight-bold mb-0 label-price__text">Mulai dari</p>
                                    <p className="font-weight-bold label-price__price" style={{ color: '#de0309', }}>
                                        Rp <strong>{item.price.toLocaleString().replaceAll(',', '.')}</strong></p>
                                </div>
                            </div>
                        </CardStyle>
                    </a></Link>
                </SwiperSlide>
            ))}
        </Swiper>
    </ >
}


export default BestCity
