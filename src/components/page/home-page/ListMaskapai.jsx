import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import Link from "next/link"
import { Icon } from '@iconify/react'
import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

const CardStyle = styled.div`
    &:hover {
        background-image: url(${props => props.img}) no-repeat center center;
    }
    position: relative;
    z-index:1;
    width:100%;
    background: url(${props => props.img}) no-repeat center center;
    background-size: cover;
    height: 380px;
    transition: all .2s;
    border-radius: 0px 0px 30px 30px;
    @media screen and (max-width:1224px){
        min-height:250px;
    }
`

function ListMaskapai(props) {
    const { data, isLoading } = props.data

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const sizeImage = isTabletOrMobile ? 40 : 80

    return <>
        <section>
            {/* <div className="container"> */}
            <div className='bg-white p-5 border-top border-bottom'>
                <p className='text-center font-weight-bold' style={{fontSize: '26px'}}>Khusus untuk member Masterdiskon</p>
                <p className='text-center' style={{ fontSize: '18ypx' }}><Link href='/login'>Masuk</Link> atau <Link href='/register'>Daftar</Link> untuk nikmati beragam keuntungan ini</p>
                <div className='d-flex align-items-center justify-content-center' style={{ fontSize: '18px' }}>
                    <span>
                        <Icon icon="ion:notifications-outline" className='text-danger mr-2' style={{ fontSize: '24px' }} />
                        Flight Price Alert
                        <Icon icon="octicon:chevron-right-16" className='text-secondary mx-2' />
                    </span>
                    <span>
                        <Icon icon="solar:bill-list-linear" className='text-primary mr-2' style={{ fontSize: '24px' }} />
                        Saved List
                        <Icon icon="octicon:chevron-right-16" className='text-secondary mx-2' />
                    </span>
                    <span >
                        <Icon icon="solar:user-plus-outline" className='text-success mr-2' style={{ fontSize: '24px' }} />
                        Passenger Quickpick
                        <Icon icon="octicon:chevron-right-16" className='text-secondary mx-2' />
                    </span>
                    <span>
                        <Icon icon="solar:shield-up-broken" className='text-info mr-2' style={{ fontSize: '24px' }} />
                        Stay Guarantee
                    </span>
                </div>
                <br />
                <div className="container">
                    <div className='row align-items-center'>
                        <div className="col-md-6">
                            <p className='font-weight-bold' style={{ fontSize: '24px' }}>Partner Maskapai</p>
                            <small className='mt-1 mb-2'>Partner Maskapai Penerbangan di Dalam  & Luar Negeri</small>
                            <p className='mt-4'>Kami bekerja sama dengan berbagai maskapai penerbangan di seluruh dunia untuk menerbangkan Anda ke mana pun Anda inginkan</p>
                        </div>
                        <div className="col-md-6">
                            <img src="https://cdn.masterdiskon.com/masterdiskon/img/image-maskapai.png" style={{ width: '100%', height: 'auto' }} alt="Gambar Masterdiskon" />
                        </div>
                    </div>
                    <div className='row mt-3'>
                        {data?.map(item => (
                            <div className="col-md-1">
                                <img style={{ width: '100px', height: '100px', padding: '10px' }} src={item.image} alt={item.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    </>
}

export default ListMaskapai
