import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';
import { url } from '../../services/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import RPlaceholder from 'react-placeholder';
import { useMediaQuery } from 'react-responsive';
import { CardStyle, TitleStyled, WrapperImage } from '../styled/blog';
import classNames from 'classnames';
import { Icon } from '@iconify/react';
import Image from 'next/image';


const SliderWrap = styled.div`
    .slick-slider {
        .slick-list {
            .slick-track {
                ${props => props.width && 'width : 100% !important;'}
            }
        }
    }
`

function BlogSlider(props) {
    const { title } = props
    const { data, isLoading } = props.data
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const arr = [1, 2, 3, 4]


    if (isLoading) {
        return <div className="row mb-5">
            {arr.map((i) => (
                <div key={i} className={classNames('', {
                    'col-3': !isTabletOrMobile,
                    'col-6': isTabletOrMobile
                })}>
                    <RPlaceholder type='rect' style={{
                        minHeight: isTabletOrMobile ? '30px' : '180px',
                        width: '100%',
                    }} showLoadingAnimation={true} />
                </div>
            ))}
        </div>
    }

    return <>
        <TitleStyled className='mb-3 font-weight-bold'><Icon icon='solar:notes-bold-duotone' className='mr-2 text-primary'></Icon> {title}</TitleStyled>
        <SliderWrap width={data?.length > 3 ? '' : 'true'}>
            <Swiper style={{
                height: isTabletOrMobile ? '160px' : '270px'
            }} slidesPerView={isTabletOrMobile ? 1.5 : 3.5} spaceBetween={10} className='p-1'>
                {data?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Link href={url.blog(item.title_slug)}><a className='text-decoration-none text-dark'>
                            <CardStyle>
                                <WrapperImage>
                                    <Image layout='fill' alt={item.title} src={`${item.img}`} />
                                    <p className="card-text mb-0" style={{ position: 'absolute', bottom: 8, left: 8 }}><span className="badge badge-warning font-weight-bold">{item.category.name_blog_category}</span></p>
                                </WrapperImage>
                                {
                                    !isTabletOrMobile ?
                                        <>
                                            <div className="content p-3">
                                                <p className='card-text text-secondary label-name' style={{
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis'
                                                }}>{item.title}</p>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className="content p-2">
                                                <p className='card-text text-secondary label-name' style={{
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis'
                                                }}>{item.title}</p>
                                            </div>
                                        </>
                                }

                            </CardStyle>
                        </a></Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </SliderWrap>
    </>
}

export default BlogSlider
