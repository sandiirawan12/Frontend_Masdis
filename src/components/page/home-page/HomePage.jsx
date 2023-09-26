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
import { Icon } from '@iconify/react'
import QuestionIcon from '@iconify/icons-fa-solid/question-circle';

import GoogleMapReact, { Marker, InfoWindow } from 'google-map-react';

import ReactGA from 'react-ga';
import { stringify } from 'query-string'
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
    infoCovid: { data: undefined, isLoading: true },
    banner: { data: undefined, isLoading: true },
    popularFlight: { data: undefined, isLoading: true },
    bestTenCity: { data: undefined, isLoading: true },
    hotelTerdekat: { data: undefined, isLoading: true },
    promo: { data: undefined, isLoading: true },
    categoryProduct: { data: undefined, isLoading: true },
    newProduct: { data: undefined, isLoading: true },
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
      setcolorTab('#00bb1f')
    }
    else if (dayName === 'Sabtu') {
      setcolorTab('#9300bb')
    } else {
      setcolorTab('#0C71B6')
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
    handleChange('categoryProduct', { name: 'isLoading', value: true })
    shopApi.getCategoryGeneralProduct(access_token, { status: 1 }).then(res => {
      if (res.success) {
        handleChange('categoryProduct', { name: 'data', value: res.data })
      }
      handleChange('categoryProduct', { name: 'isLoading', value: false })
    })
  }, [])

  useEffect(() => {
    handleChange('dataOther', { name: 'isLoading', value: true })
    shopApi.getCategoryGeneralProduct(access_token, { status: 1, part: 'other' }).then(res => {
      if (res.success) {
        handleChange('dataOther', { name: 'data', value: res.data })
      }
      handleChange('dataOther', { name: 'isLoading', value: false })
    })
  }, [])

  useEffect(() => {
    handleChange('newProduct', { name: 'isLoading', value: true })
    shopApi.getGeneralProducts(access_token, { status: 1, limit: 9, page: 1 }, {}).then(res => {
      if (res.success) {
        handleChange('newProduct', { name: 'data', value: res.data })
      }
      handleChange('newProduct', { name: 'isLoading', value: false })
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
    document.title = 'Masterdiskon.com - Cari tiket pesawat dan Hotel Promo dan Diskon Spesial 2023';
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
    handleChange('infoCovid', { name: 'isLoading', value: true })
    homeApi.getBlogs(access_token, { category: 'covid-19', limit: 10 }).then(res => {
      if (res.success) {
        handleChange('infoCovid', { name: 'data', value: res.data })
      }
      handleChange('infoCovid', { name: 'isLoading', value: false })
    })
  }, [])

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        handleSuccess,
        handleError
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, [])



  const handleSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    alert("Current latitude:" + latitude + ", " + longitude);

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

    // homeApi.getGeocoder(latitude, longitude).then(res => {
    //   if (res.status === 'OK') {
    //     if (res.results[0]) {
    //       setOpenModal(!openModal)
    //       const address = res.results[0].formatted_address;
    //       const addressComponents = res.results[0].address_components;
    //       const cityComponent = addressComponents.find(component =>
    //         component.types.includes('administrative_area_level_2')
    //       );

    //       // alert("Current latitude:" + addressComponents + ", " + cityComponent);
    //       if (cityComponent) {
    //         const city = cityComponent.long_name.replace('Kota ', '');;
    //         setCityUser(city);
    //         const lat = parseFloat(latitude, 2);
    //         const long = parseFloat(longitude, 1);

    //         // homeApi.getHotelTerdekat(access_token, city, lat.toFixed(1), long.toFixed(2)).then(res => {
    //         homeApi.getHotelTerdekat(lat, long).then(res => {
    //           if (res.success === true) {
    //             handleChange('hotelTerdekat', { name: 'data', value: res.data })
    //           } else {
    //             alert('error get data hotel terdekat')
    //           }
    //           handleChange('hotelTerdekat', { name: 'isLoading', value: false })
    //         })
    //       } else {
    //         alert("City not found in geocode results.");
    //         // this.setState({ city: '', error: 'City not found in geocode results.' });
    //       }
    //       // alert("Current location:" + address);
    //       setAddressNow(address)
    //     } else {
    //       alert("No results found.");
    //     }
    //   } else {
    //     alert("Geocoder failed due to:" + res.status);
    //   }
    // })
  };

  const handleError = (error) => {
    console.log("Error occurred while retrieving geolocation:", error);
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
      <section className={classNames('widget-search container', {
        focus: showOverlay
      })} tabIndex='0' onFocus={() => setShowOverlay(true)} onBlur={() => setShowOverlay(false)}>
        <ul className='widget-search__tabs'>
          <li className='lead' onClick={() => handleChangeActive('hotel')} role="presentation">
            <a className={classNames({ active: active === 'hotel' })}
              style={{ background: active === 'hotel' ? colorTab : '#FFF' }} href='#'>
              <img src='https://cdn.masterdiskon.com/masterdiskon/icon/general/new/icon_masdis_hotels.png' />
              Hotels
            </a>
          </li>
          <li className='lead' onClick={() => handleChangeActive('flight')} role="presentation">
            <a className={classNames({ active: active === 'flight' })}
              style={{ background: active === 'flight' ? '#1c7ecc' : '#FFF' }} href='#'>
              <img src='https://cdn.masterdiskon.com/masterdiskon/icon/fe/flight-blue.png' />
              Flights</a>
          </li>
          <li className='lead' onClick={() => handleChangeActive('train')} role="presentation">
            <a className={classNames({ active: active === 'train' })}
              style={{ background: active === 'train' ? '#aa2413' : '#FFF' }} href='#'>
              <img src='https://cdn.masterdiskon.com/masterdiskon/icon/general/new/icon_masdis_train.png' style={{ padding: '12px' }} />
              Train
            </a>
          </li>
          {/* <li className='lead' onClick={() => handleChangeActive('offices')} role="presentation">
            <a className={classNames({
              active: active === 'offices'
            })} href='#'>
              <img style={{ width: '28px', marginRight: '10px', objectFit: 'contain' }} src='https://cdn.masterdiskon.com/masterdiskon/icon/fe/building-blue.png' />
              Offices
            </a>
          </li>
          <li className='lead' onClick={() => handleChangeActive('sports')} role="presentation">
            <a className={classNames({
              active: active === 'sports'
            })} href='#'>
              <img src='https://cdn.masterdiskon.com/masterdiskon/icon/general/new/icon-sports.png' />
              Sports
            </a>
          </li>
          <li className='lead' onClick={() => handleChangeActive('others')} role="presentation">
            <a className={classNames({
              active: active === 'others'
            })} href='#'>
              <img src='https://cdn.masterdiskon.com/masterdiskon/icon/fe/others.png' />
              Others
            </a>
          </li> */}
        </ul>
        <CardStyled className={classNames('', {
          'shadow-none': showOverlay
        })}>
          {renderWidget(state.dataOther)}
        </CardStyled>
      </section >
      <main className='container' style={{
        marginTop: '3rem',
        marginBottom: '2rem'
      }}>
        {/* <section>
          <CategoryProduct data={state.categoryProduct} />
        </section> */}

        {/* 
        {state.newProduct &&
          <section className='mb-3 mt-5'>
            {useMemo(() =>
              <NewProduct data={state.newProduct} />
              , [state.newProduct])}
          </section>
        } */}

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
          {/* <section className='mt-5'>
            {useMemo(() => {
              return <BlogSlider title='Info Covid-19' data={state.infoCovid} />
            }, [state.infoCovid])}
          </section> */}

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
                      <Image layout='fill' src={`https://cdn.masterdiskon.com/masterdiskon/icon/fe/add-user.png`} />
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
      </section >
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

export default HomePage
