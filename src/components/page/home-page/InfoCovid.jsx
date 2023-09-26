import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';
import {Swiper,SwiperSlide} from 'swiper/react'
import { url } from '../../../services/utils';

const CardStyle = styled.div`
    background:white;
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center center;
    min-height:180px;
    width:100%;
    border-radius:10px;
    position: relative;
    z-index:1;
`


const SliderWrap = styled.div`
    .slick-slider {
        .slick-list {
            .slick-track {
                ${props => props.width && 'width : 100% !important;'}
            }
        }
    }
`

const WrapperImage = styled.div`
width:100%;
height:170px;
img{
    height:100%;
    width:100%;
    object-fit:cover;
    border-radius:10px 10px 0 0;
}
`
function InfoCovid(props) {
    const {data} = props

      return <>
      <h4 className='mt-4 mb-3'>Info Covid-19</h4>
        <SliderWrap width={data.length > 3 ? false : true}>
      <Swiper slidesPerView={3.5} spaceBetween={10}>
          {data.map((item,index) =>(
              <SwiperSlide key={index}>
                 <Link href={url.blog(item.title_slug)}><a className='text-decoration-none text-dark'>
              <CardStyle className="card">
                 <WrapperImage>
                 <Image layout='fill'  className="card-img-top img-fluid" src={`https://cdn.masterdiskon.com/masterdiskon/blog/post/${item.featured_image}`} />
                 </WrapperImage>
                 <div className="card-body p-2">
                     <div  style={{height:'48px',overflow:'hidden'}}>

             <p className='card-text'>{item.title}</p>
                     </div>
                 </div>
               
             </CardStyle>
              </a></Link>
              </SwiperSlide>
          ))}
          </Swiper>
        </SliderWrap>
        </>
}

export default InfoCovid
