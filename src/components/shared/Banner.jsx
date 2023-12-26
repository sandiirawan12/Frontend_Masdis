import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import RPlaceholder from 'react-placeholder';
import queryString from 'query-string';
import moment from 'moment';
import { useMediaQuery } from 'react-responsive';

const CardStyle = styled.div`
    &:hover {
        background-image: url(${props => props.img}) no-repeat center center;
    }
    position: absolute;
    z-index:1;
    width:100%;
    background: url(${props => props.img}) no-repeat center center;
    background-size: cover;
    margin-top: -200px;
    transition: all .2s;
    border-radius: 0px 0px 50px 50px;
    @media screen and (max-width:1224px){
        min-height:250px;
    }
`

function Banner(props) {
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
        <CardStyle>
            {data?.map(item => (
                <img className="card" src={item.image} style={{ width: '100%', height: '650px', borderRadius: '0px 0px 50px 50px'}}></img>
            ))}
        </CardStyle>
    </>
}

export default Banner
