import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import RPlaceholder from 'react-placeholder';
import queryString from 'query-string';
import moment from 'moment';
import { TitleBackgroundStyled } from '../styled/home-page';
import { useMediaQuery } from 'react-responsive';
import { Icon } from '@iconify/react';



const CardStyle = styled.div`
    &:hover {
        background-image: url(${props => props.img});
    }
    background:url(${props => '"' + props.img + '"'});
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center center;
    min-height:270px;
    width:100%;
    position: relative;
    z-index:1;
    transition: all .2s;
    border-radius: 10px;
    .icon{
        font-size:16px;
    }
    @media screen and (max-width:1224px){
        min-height:200px;
        p{
            font-size:10px;
        }
        h5,.icon{
            font-size:12px;
        }
    }
`

function Promo(props) {
    const { data, isLoading } = props.data
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const arr = [1, 2, 3, 4];

    if (isLoading) {
        return <div className="row mb-5">
            {arr.map((a, index) => (
                <div className="col-3" key={index}>
                    <RPlaceholder type='rect' style={{
                        minHeight: '180px',
                        width: '100%',
                    }} showLoadingAnimation={true} />
                </div>
            ))}
        </div>
    }

    return <>
        <TitleBackgroundStyled><Icon icon='iconamoon:discount-duotone' className='mr-2 text-danger'></Icon> Promo terbaik buat liburan irit!</TitleBackgroundStyled>
        <Swiper slidesPerView={isTabletOrMobile ? 4.5 : 5.5} spaceBetween={10}>
            {data?.map(item => (
                <SwiperSlide key={item.name} style={{ background: 'white', padding: '5px', borderRadius: '10px', boxShadow: '-1px 3px 11px -7px rgba(156,156,156,0.75)'}}>
                    <Link href={`/promo/${item.slug}`}><a>
                        <CardStyle img={`${item.image}`}>

                        </CardStyle>
                    </a></Link>
                </SwiperSlide>
            ))}
        </Swiper>
    </>
}

export default Promo
