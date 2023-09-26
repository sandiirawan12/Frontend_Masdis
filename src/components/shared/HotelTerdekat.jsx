import Link from 'next/link';
import React from 'react';
import queryString from 'query-string';
import { Swiper, SwiperSlide } from 'swiper/react';
import moment from 'moment';
import { TitleBackgroundStyled } from '../styled/home-page';
import { useMediaQuery } from 'react-responsive';
import { CardImage, CardLoading, CardStyle } from '../styled/bestCity';
import { Icon } from '@iconify/react';

import Image from 'next/image';

function HotelTerdekat(props) {
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
            child: 0,
            from: '',
            dateFrom: moment(new Date()).add(1, 'days').format('DD-MM-YYYY').toString(),
            dateTo: moment(new Date()).add(2, 'days').format('DD-MM-YYYY').toString(),
            room: 1,
            productId: item.hotelId,
            keyword: item.name
        }

        return `/product/hotel/detail?${queryString.stringify(params)}`
    }

    const renderClass = (item) => {
        let arr = []
        for (let index = 0; index < item.starRating; index++) {
            arr[index] = index;
        }
        return arr.map(() => (
            <div style={{ width: '15px', height: '15px', position: 'relative', display: 'inline-block' }}>
                <Image src='https://cdn.masterdiskon.com/masterdiskon/icon/fe/star.png' layout='fill' objectFit='cover' />
            </div>
        )

        )
    }

    return <>
        <TitleBackgroundStyled><Icon icon='pepicons-print:map' className='mr-2 text-primary'></Icon> Hotel Terdekat dari lokasimu</TitleBackgroundStyled>
        <Swiper className='mt-3' slidesPerView={isTabletOrMobile ? 2.5 : 5.5}
            style={{ padding: '0 0 10px 0' }}
            spaceBetween={10}>
            {data?.map((item) => (
                <SwiperSlide key={item.name}>
                    <Link target="_blank" href={makeUrl(item)}><a>
                        <CardStyle className="card" img={item.image} style={{
                            boxShadow: '-1px 3px 11px -7px rgba(156,156,156,0.75)', border: '1px solid #f8f9fa'
                        }} >
                            <div className="d-flex flex-column justify-content-between">

                                <CardImage image={item.image}>
                                    <h5 className='font-weight-bold label-name p-2' style={{ display: 'none' }}>
                                        {item.name}
                                    </h5>
                                </CardImage>
                                <div className='text-dark label-price p-2' style={{ marginBottom: '-0px' }}>
                                    <p className="font-weight-bold mb-1 text-primary label-price__text" style={{
                                        display: '-webkit-box',
                                        WebkitLineClamp: '2',
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        height: isTabletOrMobile ? '37px' : '50px',
                                    }} >{item.name}</p>
                                    {renderClass(item)}
                                    <h6 className="d-flex justify-content-between align-items-center mt-1 mb-1">
                                        <span className="text-grey " style={{
                                            fontSize: '12px',
                                            marginRight: '15px'
                                        }}> <span className=" font-weight-bold" style={{ fontSize: '15px', }} >{item.reviewScore >= 9 ? 'Superb' : (item.reviewScore >= 8 ? 'Impressive' : item.reviewScore >= 7 ? 'Convenient' : item.reviewScore >= 6 ? 'Good' : 'Review Score')}</span>
                                            <br /> Reviews
                                        </span>
                                        <div>
                                            <span className={`badge badge-sm badge-warning text-white mr-1`} style={{ padding: '4px', fontSize: '12px', }}>{item.propertyType}</span>
                                        </div>
                                    </h6>
                                    <div>
                                        <p className="font-weight-bold mb-0 label-price__text text-danger"><s>Rp {item.price.toLocaleString().replaceAll(',', '.')}</s></p>
                                        <p className="font-weight-bold label-price__price text-primary">
                                            Rp <strong>{item.promoPrice.toLocaleString().replaceAll(',', '.')}</strong></p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="mb-0 label-price__text">
                                            <strong style={{
                                                display: '-webkit-box',
                                                WebkitLineClamp: '2',
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                                height: isTabletOrMobile ? '37px' : '50px',
                                            }}>{item.address}</strong>
                                        </p>
                                        <span className={`badge badge-md badge-info text-white`} style={{ height: '30px', fontSize: '15px', padding: '6px' }}>{item.reviewScore}</span>
                                    </div>
                                </div>
                                <div className='text-center bg-primary mt-1' style={{ borderRadius: '0px 0px 10px 10px' }}><small className="mb-0 font-weight-bold text-white">Jarak {item.distance} km</small></div>
                            </div>
                        </CardStyle>
                    </a></Link>
                </SwiperSlide>
            ))}
        </Swiper>
    </ >
}


export default HotelTerdekat
