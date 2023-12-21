import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import RPlaceholder from 'react-placeholder';
import queryString from 'query-string';
import moment from 'moment';
import { TitleBackgroundStyled } from '../styled/home-page';
import { Icon } from '@iconify/react';
import PlaneIcon from '@iconify-icons/fa/plane';
import { useMediaQuery } from 'react-responsive';



const CardStyle = styled.div`
    &:hover {
        background-image: url(${props => props.img});
    }
    /* background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${props => props.img}); */
    background: url(${props => props.img});
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center center;
    min-height:270px;
    width:100%;
    color:white;
    position: relative;
    z-index:1;
    transition: all .2s;
    border-radius: 15px;
    box-shadow: -1px 3px 11px -7px rgba(156,156,156,0.75);
    .icon{
        font-size:16px;
    }
    @media screen and (max-width:1224px){
        min-height:250px;
        p{
            font-size:10px;
        }
        h5,.icon{
            font-size:16px;
        }
    }
`

function PopularFlight(props) {
    const { data, isLoading } = props.data
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const arr = [1, 2, 3, 4, 5, 6];

    if (isLoading) {
        return <div className="row mb-5">
            {arr.map((a, index) => (
                <div className="col-2" key={index}>
                    <RPlaceholder type='rect' style={{
                        minHeight: '270px',
                        width: '100%',
                        borderRadius: '15px'
                    }} showLoadingAnimation={true} />
                </div>
            ))}
        </div>
    }


    const makeUrl = (item) => {
        const params = {
            from: 'CGK',
            to: item.destination,
            dateFrom: moment(new Date()).add(2, 'days').format('DD-MM-YYYY'),
            dateTo: '',
            classCabin: '',
            direct: false,
            adult: '1'
        }

        return `/product/flight?${queryString.stringify(params)}`
    }

    return <>
        <TitleBackgroundStyled><Icon icon='ph:binoculars-duotone' className='mr-2 text-success'></Icon> Tamasya keliling indonesia, kunjungi destinasinya!</TitleBackgroundStyled>
        <Swiper className='mt-3 p-1' slidesPerView={isTabletOrMobile ? 2.5 : 5.5} spaceBetween={10}>
            {data?.map(item => (
                <SwiperSlide key={item.name}>
                    <Link href={makeUrl(item)}><a>
                        <CardStyle className="card" img={item.image}>
                            <div className="py-3 px-3">
                                <h5 className='font-weight-bold'>
                                    <span>
                                        {item.name}
                                    </span>
                                </h5>
                                <p style={{ fontSize:'14px' }}>Indonesia</p>
                            </div>
                        </CardStyle>
                    </a></Link>
                </SwiperSlide>
            ))}
        </Swiper>
    </>
}

export default PopularFlight
