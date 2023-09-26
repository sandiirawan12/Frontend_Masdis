import homeApi from '@/api/home';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Collapse } from 'reactstrap'
import styled from 'styled-components'
import BestCity from '../shared/BestCity'
import WidgetHotel from '../widgets/WidgetHotel'
import DiscountIcon from '../../svg/icon-3d-discount.svg';
import BrowserIcon from '../../svg/001-web browser.svg';
import DiplomaIcon from '../../svg/005-diploma.svg';
import CalenderIcon from '../../svg/038-calendar.svg';
import KeyIcon from '../../svg/icon-3d-hotel-key.svg';
import ThumbUpIcon from '../../svg/icon-3d-thumbup-heart.svg';
import HotelTerdekat from '../shared/HotelTerdekat'

import ReactGA from 'react-ga';
ReactGA.initialize('G-56R5954QCE');

const BannerStyled = styled.div`
	background: url('https://cdn.masterdiskon.com/masterdiskon/assets/front/img/banner/hotelbanner.jpg') no-repeat center center;
	background-size: cover;
    height:300px;

`

const IconStyled = styled.div`
/* width:6rem; */
height:6rem;
svg{
    width:100%;
    height:100%;
}
`

function HotelPage() {
    const [latUser, setLatUser] = useState(-6.1753871)
    const [lngUser, setLngUser] = useState(106.8245779)
    
    const [openMore, setOpenMore] = useState(false);
    const [bestCity, setBestCity] = useState({ data: [], isLoading: true });
    const [hotelTerdekat, setHotelTerdekat] = useState({ data: [], isLoading: true });
    const { access_token } = useSelector(state => state.token);
    const [cityUser, setCityUser] = useState("Jakarta")

    useEffect(() => {
        document.title = 'Booking Hotel Murah Harga Promo Paling Murah Spesial 2023';
        ReactGA.pageview(window.location.pathname + window.location.search);

        setBestCity({ ...bestCity, isLoading: true })
        homeApi.getBestTenCity(access_token).then(res => {
            if (res.success)
                setBestCity({ ...bestCity, data: res.data, isLoading: false })
        })
    }, [])
    

    useEffect(() => {
        if (navigator.geolocation) {
            // alert("Geolocation is useEffect.");
            navigator.geolocation.getCurrentPosition(
                handleSuccess,
                handleError
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }, [])



    const handleSuccess = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        alert("Current latitude:" + latitude + ", " + longitude);

        setLatUser(parseFloat(latitude, 2));
        setLngUser(parseFloat(longitude, 1));

        setHotelTerdekat({ ...hotelTerdekat, isLoading: true })
        homeApi.getHotelTerdekat(latitude, longitude).then(res => {
            if (res.success) {
                const updatedHotelTerdekat = { ...hotelTerdekat, data: res.data, isLoading: false };
                console.log(updatedHotelTerdekat);
                setHotelTerdekat(updatedHotelTerdekat);
            }
        })

        // homeApi.getGeocoder(latitude, longitude).then(res => {
        //     if (res.status === 'OK') {
        //         if (res.results[0]) {
        //             const address = res.results[0].formatted_address;
        //             const addressComponents = res.results[0].address_components;
        //             const cityComponent = addressComponents.find(component =>
        //                 component.types.includes('administrative_area_level_2')
        //             );

        //             // alert("Current latitude:" + addressComponents + ", " + cityComponent);
        //             if (cityComponent) {
        //                 const city = cityComponent.long_name.replace('Kota ', '');;
        //                 setCityUser(city);
        //                 const lat = parseFloat(latitude, 2);
        //                 const long = parseFloat(longitude, 1);

        //             } else {
        //                 alert("City not found in geocode results.");
        //                 // this.setState({ city: '', error: 'City not found in geocode results.' });
        //             }
        //             // alert("Current location:" + address);
        //             setAddressNow(address)
        //         } else {
        //             alert("No results found.");
        //         }
        //     } else {
        //         alert("Geocoder failed due to:" + res.status);
        //     }
        // })
    };


    const handleError = (error) => {
        console.log("Error occurred while retrieving geolocation:", error);
    };

    return (
        <>
            <section style={{ minHeight: '30vh' }}>
                <BannerStyled className="bg-dark p-0 mb-0 rounded-0">
                    <div style={{ background: '#00000090', height: '300px' }} className="p-md-5">
                        <div className="container">
                            <div className="text-white" >
                                <h1 className='font-weight-bold'>Hotel</h1>
                                <p className="lead" style={{ width: '400px' }}>
                                    Kunjungi akomondasi hotel terbaik di setiap wilayah dan dapatkan penawaran menarik untuk melengkapi perjalanan impian anda
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </BannerStyled>
            </section>
            <section style={{ marginTop: '-4.3rem' }}>
                <div className="container mb-4">
                    <WidgetHotel willSearch={true} cityUser={cityUser} />
                </div>
            </section>
            <section className='container my-5'>
                <HotelTerdekat data={hotelTerdekat} />
            </section>
            <section className='container'>
                <BestCity data={bestCity} />
            </section>
            <section className="py-3 mt-5" style={{ background: '#F5F6FA' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-4">
                            <div className="text-center mb-3 mx-2">
                                <IconStyled>
                                    <DiscountIcon />
                                </IconStyled>
                                <h5 className="mb-0 font-weight-bold text-primary mt-4 mb-3">Pesan Jauh Hari, Hematnya Lebih</h5>
                                <span className="desktop-only">Memudahkan para travelers, yang punya rencana vacation dari jauh hari. Pesan lebih awal dapat penawaran harga lebih menarik. </span>
                            </div>
                        </div>
                        <div className="col-md-4 col-4">
                            <div className="text-center mb-3 mx-2">
                                <IconStyled>
                                    <BrowserIcon />
                                </IconStyled>
                                <h5 className="mb-0 font-weight-bold text-primary mt-4 mb-3">Last Minutes Deals</h5>
                                <span className="desktop-only">Belum sempat merancankan liburan karena terhalang rutinitas. Master Diskon siap memberikan diskon spesial untuk pemesanan dadakan</span>
                            </div>
                        </div>
                        <div className="col-md-4 col-4">
                            <div className="text-center mb-3 mx-2">
                                <IconStyled>
                                    <CalenderIcon />
                                </IconStyled>
                                <h5 className="mb-0 font-weight-bold text-primary mt-4 mb-3">Reservasi hari H</h5>
                                <span className="desktop-only">Memberikan penawaran harga terbaik untuk pemesanan hotel pada hari check-in.</span>
                            </div>
                        </div>
                        <div className="col-md-4 col-4">
                            <div className="text-center mb-3 mx-2">
                                <IconStyled>
                                    <DiplomaIcon />
                                </IconStyled>
                                <h5 className="mb-0 font-weight-bold text-primary mt-4 mb-3">Pilihan Hotel Terbaik</h5>
                                <span className="desktop-only">Tak, perlu khawatir mau pergi kemanapun, Master Diskon menawarkan banyak pilihan hotel terbaik untukmu!</span>
                            </div>
                        </div>
                        <div className="col-md-4 col-4">
                            <div className="text-center mb-3 mx-2">
                                <IconStyled>
                                    <ThumbUpIcon />
                                </IconStyled>
                                <h5 className="mb-0 font-weight-bold text-primary mt-4 mb-3">Proses Booking Simpel</h5>
                                <span className='desktop-only'>Tidak perlu effort lebih, pesan reservasi hotel mudah kapan saja dan dimana saja!</span>
                            </div>
                        </div>
                        <div className="col-md-4 col-4">
                            <div className="text-center mb-3 mx-2">
                                <IconStyled>
                                    <KeyIcon />
                                </IconStyled>
                                <h5 className="mb-0 font-weight-bold text-primary mt-4 mb-3">Dijamin Check-in!</h5>
                                <span className="desktop-only">Master Diskon pastinya akan membantu kalian sampai Check-in dengan aman dan nyaman!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white py-3 sectionClass">
                <div className="container">
                    <div className="">
                        <div className="text-center mt-5">
                            <h3 className="mb-4 font-weight-bold">Dapatkan Harga Menginap Murah di Destinasi Favorit Kalian</h3>
                        </div>
                        <div className="text-justify mb-5">
                            <p>Master Diskon menawarkan banyak pilihan hotel terbaik dan terlengkap yang tersebar diberbagai kota atau negara tujuan destinasi favorit kalian. Hanya dengan mengakses Master Diskon melalui mobile aplikasi atau mobile web di desktop atau smartphone, secara praktis, kalian hanya tinggal pilih destinasi tujuan, masukan tanggal check-in dan check-out berbagai pilihan hotel terbaik terpampang di depan kalian.</p>
                            <Collapse isOpen={openMore}>
                                <p>Selain menwarkan banyak pilihan hotel terbaik dan terlengkap Master Diskon, tanpa ragu juga memberikan harga hotel termurah, disertai promo-promo menarik lainnya. Selain itu proses pemesanan juga mudah, cepat dan aman. Jadi, gak perlu pusing mikirin budget liburan, Master Diskon adalah solusi tepat memenuhi kebutuhan perjalanan kalian.</p>
                                <p>Setiap hal yang dilakukan dengan mudah dan cepat memang mengasyikan, Master Diskon menyediakan ini untuk kalian. Gak perlu mengeluarkan effort lebih untuk nunggu lama, semua pemesanan di proses dengan cepat dan mudah, kapan pun dan dimana pun. Pesan pada saat check-in atau pun jauh hari Master Diskon menyiapkan diskon spesial untuk kalian.</p>
                                <p>Setiap Ccstomer adalah prioritas kami, jadi tidak perlu khawatir jika ada kendala apapun layanan call center yang siap membantu kalian 24/7, mulai dari refund, perubahan tanggal check-in atau check-out akan diproses dengan cepat.</p>
                                <p>Master Diskon memberikan efektifitas melakukan pembayaran pemesanan hotel dengan berbagai metode pembayaran yang mudah diakses seusai dengan keinginan kalian dan terjamin aman.</p>
                            </Collapse>
                            {!openMore &&
                                <div className="text-center">
                                    <span className="text-primary" onClick={() => setOpenMore(!openMore)} style={{
                                        cursor: 'pointer'
                                    }}>SELENGKAPNYA</span>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default HotelPage
