import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import ThumbUpStarIcon from '../../../svg/icon-3d-thumbup-star.svg'
import DirectionIcon from '../../../svg/icon-3d-direction.svg'
import CompasIcon from '../../../svg/icon-3d-compass.svg'
import HeadphoneIcon from '../../../svg/icon-3d-headphone.svg'
import MoneyIcon from '../../../svg/icon-3d-moneybadge.svg'
import CoinIcon from '../../../svg/icon-3d-coin.svg'

const LabelTitle = styled.h5`
@media screen and (max-width:1224px){
    font-size:14px
}

`
const LabelDesc = styled.span`
display:inline-block;
margin-top:7px;
line-height:24px;
@media screen and (max-width:1224px){
    line-height:14px;
    font-size:12px
}

`
const IconStyled = styled.div`
/* width:6rem; */
height:6rem;
@media screen and (max-width:1224px){
    height:3rem;
}

svg{
    width:100%;
    height:100%;
}
`

function Benefit() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const sizeImage = isTabletOrMobile ? 40 : 80

    return (
        <section className={classNames("", {
            'my-5': !isTabletOrMobile,
            'mt-0': isTabletOrMobile
        })}>
            {/* <div className="container"> */}
            <hr />

            <div className="row mt-5">
                <div className="col-lg-4 col-sm-6" style={{ width: '50%' }}>
                    <div className="text-center mb-3">
                        <IconStyled>
                            <ThumbUpStarIcon />
                        </IconStyled>
                        <LabelTitle className="mb-0 font-weight-bold text-primary mt-3 mb-2">Booking Mudah</LabelTitle>
                        <LabelDesc>Rasakan efektifitas pemesanan Tiket Pesawat dan Reservation Hotel, tanpa perlu effort lebih! </LabelDesc>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6" style={{ width: '50%' }}>
                    <div className="text-center mb-5">
                        <IconStyled>
                            <DirectionIcon />
                        </IconStyled>
                        <LabelTitle className="mb-0 font-weight-bold text-primary mt-3 mb-2">Banyak Pilihan Produk</LabelTitle>
                        <LabelDesc className="desktop-only">Terdapat banyak pilihan penerbangan ke Mancanegara serta Pilihan Hotel terbaik</LabelDesc>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6" style={{ width: '50%' }}>
                    <div className="text-center mb-5">
                        <IconStyled>
                            <CoinIcon />
                        </IconStyled>
                        <LabelTitle className="mb-0 font-weight-bold text-primary mt-3 mb-2">Banyak Pilihan Cara Bayar</LabelTitle>
                        <LabelDesc className="desktop-only">Memudahkan kalian memilih cara pembayaran sesuai keinginan, tanpa harus binggung!</LabelDesc>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6" style={{ width: '50%' }}>
                    <div className="text-center mb-5">
                        <IconStyled>
                            <MoneyIcon />
                        </IconStyled>
                        <LabelTitle className="mb-0 font-weight-bold text-primary mt-3 mb-2">Harga Terbaik</LabelTitle>
                        <LabelDesc className="desktop-only">Selalu memberi penawaran harga terbaik juga promo-promo menarik yang buat kalian kepingin liburan terus.</LabelDesc>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6" style={{ width: '50%' }}>
                    <div className="text-center mb-5">
                        <IconStyled>
                            <HeadphoneIcon />
                        </IconStyled>
                        <LabelTitle className="mb-0 font-weight-bold text-primary mt-3 mb-2">Layanan Pelanggan Ramah</LabelTitle>
                        <LabelDesc className="desktop-only">Siap melayani dan memberikan bantuan terbaik kepada pelanggan</LabelDesc>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6" style={{ width: '50%' }}>
                    <div className="text-center mb-5">
                        <IconStyled>
                            <CompasIcon />
                        </IconStyled>
                        <LabelTitle className="mb-0 font-weight-bold text-primary mt-3 mb-2">Konfirmasi Instan</LabelTitle>
                        <LabelDesc className="desktop-only">Gak perlu ribet atau nunggu lama, semua pemesanan diproses dengan cepat!</LabelDesc>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </section >

    )
}

export default Benefit
