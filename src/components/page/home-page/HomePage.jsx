import React, { useMemo, useState, useEffect, createRef } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import classNames from 'classnames'
import HotelTerdekat from '../../shared/HotelTerdekat'
import BestCity from '../../shared/BestCity'
import Banner from '../../shared/Banner'
import PopularFlight from '../../shared/PopularFlight'
import Promo from '../../shared/Promo'
import BlogSlider from '../../shared/BlogSlider'
import WidgetFlight from '@/components/widgets/WidgetFlight'
import WidgetHotel from '@/components/widgets/WidgetHotel'
import Benefit from './Benefit'
import DownloadPage from './DownloadPage'
import ListMaskapai from './ListMaskapai'
import CategoryProduct from './CategoryProduct'
import homeApi from '@/api/home'
import { useSelector } from 'react-redux'
import shopApi from '@/api/shop'
import Image from 'next/image'
import WidgetOthers from '@/components/widgets/WidgetOthers'
import NewProduct from '@/components/shared/NewProduct'
import WidgetSports from '@/components/widgets/WidgetSports'
import WidgetOffices from '@/components/widgets/WidgetOffices'
import WidgetTrain from '@/components/widgets/WidgetTrain'
import moment from 'moment';
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import GoogleMapReact, { Marker, InfoWindow } from 'google-map-react';

import ReactGA from 'react-ga';
ReactGA.initialize('G-56R5954QCE');


function HomePage() {
  const mapRef = createRef
  const [laptopPosition, setlaptopPosition] = useState({})

  const [active, setActive] = useState('hotel')
  const datex = new Date();
  const [dayName, setdayName] = useState(moment(datex).format('dddd'))
  const [showOverlay, setShowOverlay] = useState(false)
  const { user, auth } = useSelector(state => state)
  const [openModal, setOpenModal] = useState(false);
  const [addressNow, setAddressNow] = useState("");

  const [colorTab, setcolorTab] = useState("")
  const [cityUser, setCityUser] = useState("Jakarta")


  const [latUser, setLatUser] = useState(-6.1753871)
  const [lngUser, setLngUser] = useState(106.8245779)

  const { access_token } = useSelector(state => state.token);
  const [state, setState] = useState({
    blogs: { data: undefined, isLoading: true },
    coupon: { data: undefined, isLoading: true },
    banner: { data: undefined, isLoading: true },
    popularFlight: { data: undefined, isLoading: true },
    maskapaiFlight: { data: undefined, isLoading: true },
    bestTenCity: { data: undefined, isLoading: true },
    hotelTerdekat: { data: undefined, isLoading: true },
    promo: { data: undefined, isLoading: true },
  })


  const handleChange = (name, action) => {
    setState(prevState => ({ ...prevState, [name]: { ...prevState[name], [action.name]: action.value } }))
  }


  useEffect(() => {
    handleChange('promo', { name: 'isLoading', value: true })
    homeApi.getPromo(access_token, { limit: 10 }).then(res => {
      if (res.success) {
        handleChange('promo', { name: 'data', value: res.data })
      }
      handleChange('promo', { name: 'isLoading', value: false })
    })
    if (dayName === 'Senin') {
      setcolorTab('#0C71B6')
    }
    else if (dayName === 'Selasa') {
      setcolorTab('#BF3013')
    }
    else if (dayName === 'Rabu') {
      setcolorTab('#0A4D68')
    }
    else if (dayName === 'Kamis') {
      setcolorTab('#8B1874')
    }
    else if (dayName === 'Jumat') {
      setcolorTab('#3500bb')
    }
    else if (dayName === 'Sabtu') {
      setcolorTab('#9300bb')
    } else {
      setcolorTab('#0071a3')
    }
  }, [])

  useEffect(() => {
    handleChange('popularFlight', { name: 'isLoading', value: true })
    homeApi.getPopularFlight(access_token, { limit: 10 }).then(res => {
      if (res.success) {
        handleChange('popularFlight', { name: 'data', value: res.data })
      }
      handleChange('popularFlight', { name: 'isLoading', value: false })
    })
  }, [])

  useEffect(() => {
    handleChange('maskapaiFlight', { name: 'isLoading', value: true })
    homeApi.getMaskapaiFlight(access_token, { limit: 10 }).then(res => {
      if (res.success) {
        handleChange('maskapaiFlight', { name: 'data', value: res.data })
      }
      handleChange('maskapaiFlight', { name: 'isLoading', value: false })
    })
  }, [])

  useEffect(() => {
    document.documentElement.lang = 'id'
    
    handleChange('banner', { name: 'isLoading', value: true })
    homeApi.getBanner(access_token, { limit: 10 }).then(res => {
      if (res.success) {
        handleChange('banner', { name: 'data', value: res.data })
      }
      handleChange('banner', { name: 'isLoading', value: false })
    })
  }, [])

  useEffect(() => {
    handleChange('bestTenCity', { name: 'isLoading', value: true })
    homeApi.getBestTenCity(access_token, { limit: 10 }).then(res => {
      if (res.success) {
        handleChange('bestTenCity', { name: 'data', value: res.data })
      }
      handleChange('bestTenCity', { name: 'isLoading', value: false })
    })
  }, [])

  useEffect(() => {
    handleChange('promo', { name: 'isLoading', value: true })
    shopApi.getListPromo(access_token, { page: 1, limit: 10 }).then(res => {
      if (res.success) {
        handleChange('promo', { name: 'data', value: res.data })
      }
      handleChange('promo', { name: 'isLoading', value: false })
    })
  }, [])

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    handleChange('blogs', { name: 'isLoading', value: true })
    homeApi.getBlogs(access_token).then(res => {
      if (res.success) {
        handleChange('blogs', { name: 'data', value: res.data })
      }
      handleChange('blogs', { name: 'isLoading', value: false })
    })
  }, [])

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        handleSuccess,
        handleError
      );
    } else {
    }
  }, [])


  const handleSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setLatUser(parseFloat(latitude, 2));
    setLngUser(parseFloat(longitude, 1));

    homeApi.getHotelTerdekat(latitude, longitude).then(res => {
      if (res.success === true) {
        handleChange('hotelTerdekat', { name: 'data', value: res.data })
      } else {
        alert('error get data hotel terdekat')
      }
      handleChange('hotelTerdekat', { name: 'isLoading', value: false })
    })
  };

  const handleError = (error) => {
    homeApi.getHotelTerdekat('', '').then(res => {
      if (res.success === true) {
        handleChange('hotelTerdekat', { name: 'data', value: res.data })
      } else {
        alert('error get data hotel terdekat')
      }
      handleChange('hotelTerdekat', { name: 'isLoading', value: false })
    })
  };

  const handleChangeActive = (menu) => {
    setActive(menu)
  }

  const handleFocusWidgetProduct = () => {
    setShowOverlay(!showOverlay)
  }

  const renderWidget = (dataOther) => {
    switch (active) {
      case 'hotel':
        return <WidgetHotel willSearch={true} cityUser={cityUser} latUser={latUser} lngUser={lngUser} />
      case 'train':
        return <WidgetTrain onBlur={handleFocusWidgetProduct} />
      case 'sports':
        return <WidgetSports />
      case 'offices':
        return <WidgetOffices />
      case 'others':
        return <WidgetOthers data={dataOther} />
      default:
        return <WidgetFlight onBlur={handleFocusWidgetProduct} />
    }
  }

  return (
    <>
      <div className={classNames('home-page-widget-overlay', {
        show: showOverlay
      })} />

      {/* <Modal isOpen={openModal} centered size='l'>
        <ModalHeader  >
          <h5>Semangat Hari {dayName} <Icon icon={QuestionIcon} /></h5>
        </ModalHeader>
        <ModalBody>
          <div className="input-group mb-3">
            Kamu berada di <strong> {addressNow} </strong>
            Berikut hotel favorit untuk Kamu:
          </div>
        </ModalBody>
      </Modal> */}

      <section>
        {useMemo(() =>
          <Banner data={state.banner} />
          , [state.banner])}
      </section>

      <section className="widget-search container">
        <div style={{ marginTop: '170px' }} className='mb-5'>
          <h2 className='widget-search__tabs font-weight-bold text-white'>
            Nikmati Perjalananmu dengan Caramu
          </h2>
        </div>
      </section>

      <section className={classNames('widget-search container', {
        focus: showOverlay
      })} tabIndex='0' onFocus={() => setShowOverlay(true)} onBlur={() => setShowOverlay(false)}>
        <ul className='widget-search__tabs' style={{ marginTop: '150px' }}>
          <li onClick={() => handleChangeActive('hotel')} role="presentation">
            <CardWidget
              active={active}
              style={{ background: active === 'hotel' ? '#fff' : 'none' }}
            >
              <span>
                <Icon icon="solar:bed-line-duotone" style={{ color: active === 'hotel' ? '#0070ba' : '#fff' }} />
              </span>
              <p style={{ color: active === 'hotel' ? 'black' : '#fff' }} className='font-weight-bold mt-1'>Hotel</p>
            </CardWidget>
          </li>
          <li onClick={() => handleChangeActive('flight')} role="presentation" className='mx-1'>
            <CardWidget
              active={active}
              style={{ background: active === 'flight' ? '#fff' : 'none' }}
            >
              <span>
                <Icon icon="ph:airplane-duotone" style={{ color: active === 'flight' ? '#2abfd3' : '#fff' }} />
              </span>
              <p style={{ color: active === 'flight' ? 'black' : '#fff' }} className='font-weight-bold mt-1'>Tiket Pesawat</p>
            </CardWidget>
          </li>
          <li onClick={() => handleChangeActive('train')} role="presentation" className='mx-1'>
            <CardWidget
              active={active}
              style={{ background: active === 'train' ? '#fff' : 'none' }}
            >
              <span>
                <Icon icon="pepicons-print:train" style={{ color: active === 'train' ? '#e67b22' : '#fff' }} />
              </span>
              <p style={{ color: active === 'train' ? 'black' : '#fff' }} className='font-weight-bold mt-1'>Tiket Kereta Api</p>
            </CardWidget>
          </li>
        </ul>
        <CardStyled className={classNames('mt-3', {
          'shadow-none': showOverlay
        })}>
          {renderWidget(state.dataOther)}
        </CardStyled>
      </section >

      <main className='container' style={{
        marginTop: `${active === 'hotel' ? '11rem' : '7rem'}` ,
        marginBottom: '2rem'
      }}>
        <section className='my-5'>
          {useMemo(() =>
            <HotelTerdekat data={state.hotelTerdekat} />
            , [state.hotelTerdekat])}
        </section>

        <section className='my-5'>
          {useMemo(() =>
            <BestCity data={state.bestTenCity} />
            , [state.bestTenCity])}
        </section>

        <section className='my-5'>
          {useMemo(() =>
            <PopularFlight data={state.popularFlight} />
            , [state.popularFlight])}
        </section>

        {state.promo.data?.length > 0 &&
          <section className='my-5'>
              <Promo data={state.promo} />
          </section>
        }
      </main>

      <section style={{ background: '#F5F6FA' }}>
        <div className="container">
          {!auth ? <>
            <section className="my-5">
              <div className="card" style={{
                border: '4px dashed #0070BA',
                borderRadius: '20px',
                background: 'rgb(250, 249, 237)'
              }}>
                <div className="p-3">
                  <div className="d-flex flex">
                    <div style={{ width: '90px', height: '90px', display: 'inline-block', position: 'relative' }}>
                      <Image layout='fill' src={`https://cdn.masterdiskon.com/masterdiskon/icon/fe/add-user.png`} width={200} height={200} alt='Image Masterdiskon' />
                    </div>
                    <div className='ml-3'>
                      <p className="mb-0">Login untuk promo khusus member</p>
                      {/* <p className="mb-0">{laptopPosition}, {laptopPosition}</p> */}
                      <p className="mb-3">Lihat semua Diskon Rahasia</p>
                      <Link href='/login' passHref>
                        <a className="btn btn-sm btn-primary mr-3">Login</a>
                      </Link>
                      <Link href='/register' passHref>
                        <a className="btn btn-sm btn-danger">Daftar</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
            : <></>}
          <section className='my-5'>
            {useMemo(() => {
              return <BlogSlider title='Baca dan bangkitkan semangat liburanmu' data={state.blogs} />
            }, [state.blogs])}
            <div className="d-flex justify-content-center">
              <Link href='/blogs'>
                <a className="btn btn-primary btn-md font-weight-bold">Lebih Banyak Artikel</a>
              </Link>
            </div>
          </section>
          <Benefit />
        </div>
      </section>

      <section>
        {useMemo(() =>
          <ListMaskapai data={state.maskapaiFlight} />
          , [state.maskapaiFlight])}
      </section>

      <DownloadPage />
    </>
  )
}

const CardStyled = styled.div`
  box-shadow:-1px 3px 11px -5px rgba(156,156,156,0.75);
  position:relative;
  width: 100%;
  margin: 0px;
  /* padding: 7px; */
  z-index:1;
  line-height: 26px;
  border-radius:20px;
  box-sizing: border-box;
  .shadow-none{
    box-shadow:none;
  }
`

const CardWidget = styled.div`
  z-index: 1;
  padding: 10px 20px;
  border-radius: 15px;
  transition: all 0.2s;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid #fff;
    color: ${props =>
    props.active === 'hotel' ? '#fff' : '#0070ba'};
    /* Add additional hover effects here */
  }

  span {
    font-size: 26px;
    padding: 12px;
  }

  p {
    margin: 0;
  }
`;

export default HomePage
