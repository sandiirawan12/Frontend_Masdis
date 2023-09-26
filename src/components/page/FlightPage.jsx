import React, { useEffect } from 'react';
import PopularFlight from '../shared/PopularFlight';
import WidgetFlight from '../widgets/WidgetFlight';
import { Collapse } from 'reactstrap';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import homeApi from '@/api/home';
import styled from 'styled-components';
import IconResearchSvg from '../../svg/icon-research.svg'
import SearchIcon from '../../svg/024-magnifying-glass.svg'
import CoinIcon from '../../svg/icon-3d-coin.svg'

import ReactGA from 'react-ga';
ReactGA.initialize('G-56R5954QCE');

const BannerStyled = styled.div`
	background: url('https://cdn.masterdiskon.com/masterdiskon/assets/front/img/banner/photo-1584414617465-a2f4085a853c.webp') no-repeat center center;
	background-size: cover;
    height:350px;

`

const IconStyled = styled.div`
    display:inline-block;
    width:5rem;
    height:5rem;
    svg{
        width:100%;
        height:100%;
    }
`

function FlightPage() {
    const [openMore, setOpenMore] = useState(false);
    const [flightPopular, setFlightPopular] = useState({ data: undefined, isLoading: true });
    const { access_token } = useSelector(state => state.token)

    useEffect(() => {

        document.title = 'Tiket Pesawat | Harga Tiket Pesawat Promo Paling Murah Spesial 2023';
        ReactGA.pageview(window.location.pathname + window.location.search);

        setFlightPopular({ data: undefined, isLoading: true });
        homeApi.getPopularFlight(access_token).then(res => {
            if (res.success) {
                setFlightPopular({ data: res.data, isLoading: false });
            }
        })
    }, [])

    return (
        <>
            <section style={{ minHeight: '30vh' }}>
                <BannerStyled className="bg-dark p-0 mb-0 rounded-0">
                    <div style={{ background: '#00000090', height: '350px' }} className="p-md-5">
                        <div className="container">
                            <div className="text-white" >
                                <h1 className='font-weight-bold'>Pesawat</h1>
                                <p className="lead" style={{ width: '400px' }}>Nikmati perjalanan terbaik anda bersama kami dan dapatkan pilihan reservasi penerbangan nyaman dengan penawaran terbaik</p>
                            </div>
                        </div>
                    </div>
                </BannerStyled>
            </section>

            <section style={{ marginTop: '-7rem' }}>
                <div className="container">
                    <WidgetFlight />
                </div>
            </section>

            <section className="container pt-3 pb-2 mt-4">
                <PopularFlight data={flightPopular} />
            </section>

            <section style={{ background: '#F5F6FA' }} className="desktop-only">
                <div className="container">
                    <div className="py-5">
                        <div className="row">
                            <div className="col-4">
                                <div className="text-center mb-3 mx-4">
                                    <IconStyled>
                                        <IconResearchSvg />
                                    </IconStyled>
                                    <h5 className="mb-0 mt-3 font-weight-bold text-primary mt-4 mb-3">Hasil Pencarian Terlengkap</h5>
                                    <span className="desktop-only">Terdapat banyak pilihan penerbangan ke berbagai tempat yang kalian ingginkan disertai promo-promo menarik</span>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="text-center mb-3 mx-4">
                                    <IconStyled>
                                        <SearchIcon />
                                    </IconStyled>
                                    <h5 className="mb-0 mt-3 font-weight-bold text-primary mt-4 mb-3">Sistem Pencarian </h5>
                                    <span className="desktop-only">Master Diskon selalu membantu mencari tiket pesawat mulai dari harga, waktu perjalanan hingga maskapai dengan cepat dan mudah.</span>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="text-center mb-3 mx-4">
                                    <IconStyled>
                                        <CoinIcon />
                                    </IconStyled>
                                    <h5 className="mb-0 mt-3 font-weight-bold text-primary mt-4 mb-3">Berbagai Pilihan Pembayaran</h5>
                                    <span className="desktop-only">Master Diskon memberikan efektifitas untuk pemesanan Tiket Pesawat melalui berbagai pilihan payment dari transfer via ATM, Kartu Kredit, hingga Internet Banking</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-white'>
                <div className="container">
                    <div className="py-5 border-top">
                        <div className="text-center">
                            <h3 className="mb-4 font-weight-bold">Dapatkan, Harga Tiket Penerbangan Terbaik Ke Berbagai Destinasi Favorit Anda.</h3>
                        </div>
                        <p className='text-justify'>Tidak harus melirik OTA lain Master Diskon selalu memberi penawaran Tiket Penerbangan dengan Harga Terbaik untuk mengunjungi berbagai destinasi favorit kalian. Mulai dari harga Tiket Penerbangan nasional maupun internasional. Dengan metode pembayaran yang dijamin aman, serta layanan call center yang siap membantu kalian 24/7. Tidak perlu khawatir mendapatkan tiket pesawat mahal Master Diskon akan selalu memberikan harga termurah yang bikin kalian kepingin liburan terus!</p>
                        <Collapse isOpen={openMore} className='text-justify'>
                            <p>Master Diskon, menyediakan banyak pilihan penerbangan ke berbagai destinasi tempat yang kalian ingginkan disertai dengan promo-promo menarik. Hanya dengan mengakses Masterdiskon melalui mobile aplikasi atau mobile web di desktop atau smartphone, secara praktis dan pastinya aman. Kalian akan menemukan berbagai maskapai penerbangan sampai mengetahui rute dan jadwal penerbangan yang sesuai dengan rencana perjalanan kalian. Tanpa harus mengeluarkan effort lebih Master Diskon selalu membantu memenuhi kebutuhan perjalanan dan selalu siap menjadi teman perjalanan kalian kapan pun dan di mana pun.</p>
                            <p>Master Diskon memberikan efektifitas melakukan pembayaran pemesanan Tiket Pesawat dengan mudah dan cepat serta terjamin aman. Melalui berbagai pilihan metode pembayaran sesuai kebutuhan kalian, serta Master Diskon selalu siap 24/7 melayani dan membantu serta memberikan konfirmasi real time kepada konsumen.</p>
                        </Collapse>
                        {!openMore &&
                            <div className="text-center">
                                <span onClick={() => setOpenMore(!openMore)} className="text-primary" style={{ cursor: 'pointer' }}>SELENGKAPNYA</span>
                            </div>
                        }
                    </div>
                </div>
            </section>


        </>
    )
}


export default FlightPage
