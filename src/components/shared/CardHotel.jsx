import styled from "styled-components";
import ParkingIcon from '@iconify/icons-fa-solid/parking';
import WifiIcon from '@iconify/icons-fa-solid/wifi';
import UtensilsIcon from '@iconify/icons-fa-solid/utensils';
import SwimmerIcon from '@iconify/icons-fa-solid/swimmer';
import { Icon } from "@iconify/react";
import Link from "next/link";
import queryString from 'query-string';
import ReactPlaceholder from "react-placeholder";
import { Fragment, useEffect } from "react";
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import ReactGA from 'react-ga';
ReactGA.initialize('G-56R5954QCE');



function CardHotel(props) {
    const { hotel, loading, options, forMaps, refProp, selected, type } = props;
    const { auth } = useSelector(state => state)

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);

        if (selected) {
            document?.querySelector('#hotels')?.scrollTo({ behavior: 'smooth', top: refProp?.current?.offsetTop });
            // window..querySelector('#hotels').scrollTo(0, refProp?.current?.offsetTop)   
            // refProp?.current?.scroolIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [selected])


    const renderStar = () => {
        let arr = [];
        for (let index = 0; index < Number(hotel.class); index++) {
            arr[index] = index;
        }
        return arr.map(() => (
            <div style={{ width: '20px', height: '20px', position: 'relative', display: 'inline-block' }} className='mr-1 mb-2'>
                <Icon style={{ fontSize: '20px' }} icon="fluent-emoji-flat:star"></Icon>
            </div>
        ))
    }

    const renderStarTerdekat = () => {
        let arr = [];
        for (let index = 0; index < Number(hotel.starRating); index++) {
            arr[index] = index;
        }
        return arr.map(() => (
            <div style={{ width: '20px', height: '20px', position: 'relative', display: 'inline-block' }} className='mr-1 mb-2'>
                <Icon style={{ fontSize: '20px' }} icon="fluent-emoji-flat:star"></Icon>
            </div>
        ))
    }

    const RootComponent = loading ? Fragment : Link

    return (
        <div>
            <RootComponent href={`/product/hotel/detail?${queryString.stringify({ ...options, keyword: hotel.name, productId: hotel.id })}`} >
                <a className="text-dark d-block mb-3" target="_blank">
                    <RootStyled className="card mb-2"
                        style={{ boxShadow: '-1px 3px 11px -7px rgba(156,156,156,0.75)', background: type == 'terdekat' ? '#d1e6f3' : '#fff' }}
                    >

                        {hotel?.isPromo &&
                            <img style={{
                                width: '104px',
                                position: 'absolute',
                                zIndex: '99',
                                left: '4.7px',
                                top: '8px'
                            }} src="/assets/Icon/card-promo-new.png" alt="" />
                        }
                        <div className="card-body py-2 py-1-sm" style={{ margin: type == 'terdekat' ? '10px' : '0px' }}>
                            <div className="row">
                                <div className="col-md-4">
                                    {loading ?
                                        <ReactPlaceholder style={{ borderRadius: '10px', height: '180px' }} type='rect' />
                                        :
                                        <div>
                                            {!forMaps &&
                                                <div className="row">
                                                    <div className="col-12">
                                                        {hotel.image ?
                                                            <>
                                                                <img style={{ width: '100%', height: '130px', borderRadius: '10px 10px 0px 0px', borderBottom: type == 'terdekat' ? '2px solid #d5edfb' : '2px solid #FFF' }} src={hotel.image} alt="Image Masterdiskon" />
                                                            </>
                                                            :
                                                            <>
                                                                <img style={{ width: '100%', height: '130px', borderRadius: '10px 10px 0px 0px', borderBottom: type == 'terdekat' ? '2px solid #d5edfb' : '2px solid #FFF' }} src="https://cdn.masterdiskon.com/masterdiskon/img/imgHotel-not-found.png" alt="Image Masterdiskon" />
                                                            </>
                                                        }
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="d-flex">
                                                            {hotel.image2 ?
                                                                <>
                                                                    <img style={{ width: '33%', height: '60px', borderRadius: '0px 0px 0px 10px', borderRight: type == 'terdekat' ? '2px solid #d5edfb' : '2px solid #FFF' }} src={hotel.image2} alt="Image Masterdiskon" />
                                                                </>
                                                                :
                                                                <>
                                                                    <img style={{ width: '33%', height: '60px', borderRadius: '0px 0px 0px 10px', borderRight: type == 'terdekat' ? '2px solid #d5edfb' : '2px solid #FFF' }} src="https://cdn.masterdiskon.com/masterdiskon/img/imgHotel-not-found.png" alt="Image Masterdiskon" />
                                                                </>
                                                            }
                                                            {hotel.image3 ?
                                                                <>
                                                                    <img style={{ width: '33%', height: '60px', borderRight: type == 'terdekat' ? '2px solid #d5edfb' : '2px solid #FFF' }} src={hotel.image3} alt="Image Masterdiskon" />
                                                                </>
                                                                :
                                                                <>
                                                                    <img style={{ width: '33%', height: '60px', borderRight: type == 'terdekat' ? '2px solid #d5edfb' : '2px solid #FFF' }} src="https://cdn.masterdiskon.com/masterdiskon/img/imgHotel-not-found.png" alt="Image Masterdiskon" />
                                                                </>
                                                            }
                                                            {hotel.image4 ?
                                                                <>
                                                                    <img style={{ width: '33%', height: '60px', borderRadius: '0px 0px 10px 0px' }} src={hotel.image4} alt="Image Masterdiskon" />
                                                                </>
                                                                :
                                                                <>
                                                                    <img style={{ width: '33%', height: '60px', borderRadius: '0px 0px 10px 0px' }} src="https://cdn.masterdiskon.com/masterdiskon/img/imgHotel-not-found.png" alt="Image Masterdiskon" />
                                                                </>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                            {forMaps &&
                                                <div className="row">
                                                    <div className="col-12">
                                                        {hotel.image ?
                                                            <>
                                                                <img style={{ width: '100%', height: '250px', borderRadius: '10px' }} src={hotel.image} alt="Image Masterdiskon" />
                                                            </>
                                                            :
                                                            <>
                                                                <img style={{ width: '100%', height: '250px', borderRadius: '10px' }} src="https://cdn.masterdiskon.com/masterdiskon/img/imgHotel-not-found.png" alt="Image Masterdiskon" />
                                                            </>
                                                        }
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    }
                                </div>
                                <div className="col-md-8">
                                    {/* <div className="container"> */}
                                    <div className="row">
                                        {!forMaps &&
                                            <div className="col-md-7">
                                                {loading ?
                                                    <ReactPlaceholder showLoadingAnimation={true} style={{ paddingTop: '10px' }} rows={4} type='text' widths={[140]} />
                                                    :
                                                    <>
                                                        {type == 'terdekat' ?
                                                            <>
                                                                <h6>
                                                                    <span className={`badge badge-lg badge-secondary text-white mr-2`}>
                                                                        {hotel.distance ?
                                                                            `Terdekat dari lokasi mu, jarak ${hotel.distance} km`
                                                                            :
                                                                            `Rekomendasi hotel terbaik buat kamu`
                                                                        }
                                                                    </span>
                                                                </h6>
                                                            </>
                                                            :
                                                            <></>
                                                        }
                                                    
                                                        <LimitTextTitle className="title text-primary font-weight-bold mt-2 mb-2">
                                                            {hotel.name}
                                                        </LimitTextTitle>
                                                    
                                                        <div className="d-flex align-items-center">
                                                            <span style={{ textTransform: 'uppercase' }} className={`badge badge-lg badge-danger text-white mr-3`}>
                                                                {type == 'terdekat' ? hotel.propertyType : hotel.type}
                                                            </span>

                                                            {renderStar().length > 0 &&
                                                                <div>
                                                                    <span className="bintang mr-2">
                                                                        {renderStar()}
                                                                    </span>
                                                                </div>
                                                            }
                                                            {renderStarTerdekat().length > 0 &&
                                                                <div>
                                                                    <span className="bintang mr-2">
                                                                        {renderStarTerdekat()}
                                                                    </span>
                                                                </div>
                                                            }
                                                        </div>
                                                        {/* =========== */}
                                                        {!forMaps &&
                                                            <div>
                                                                <div>
                                                                    <span className="card-text my-2 d-flex">
                                                                        <div className="d-inline-block mr-2" style={{ width: '20px', height: '20px', position: 'relative' }}>
                                                                            <Icon style={{ fontSize: '20px' }} icon="openmoji:location-indicator-red" />
                                                                        </div>
                                                                        <span className="mt-1">{type == 'terdekat' ? hotel.address : hotel.detail.region}</span>
                                                                    </span>
                                                                </div>
                                                                <div className="mb-2">
                                                                    <Icon icon={ParkingIcon} className={classNames(`mr-3 text-secondary`, {
                                                                        'text-primary': hotel?.facilities?.parkingIncluded
                                                                    })} />
                                                                    <Icon icon={WifiIcon} className={classNames(`mr-3 text-secondary`, {
                                                                        'text-success': hotel?.facilities?.wifiIncluded
                                                                    })} />
                                                                    <Icon icon={UtensilsIcon} className={classNames(`mr-3 text-secondary`, {
                                                                        'text-warning': hotel?.facilities?.breakfastIncluded
                                                                    })} />
                                                                    <Icon icon={SwimmerIcon} className={classNames('mr-3 text-secondary', {
                                                                        'text-info': hotel?.facilities?.poolIncluded
                                                                    })} />
                                                                    <Icon icon="bx:plus-medical" className={classNames('mr-3 text-secondary', {
                                                                        'text-danger': hotel?.facilities?.medicalIncluded
                                                                    })} />
                                                                    <Icon icon="fluent:video-security-20-filled" className={classNames('mr-3 text-secondary', {
                                                                        'text-primary': hotel?.facilities?.securityIncluded
                                                                    })} />
                                                                </div>
                                                                <div className="mt-3">
                                                                    <small className="text-primary">Dapatkan promo menarik hanya di Masterdiskon</small>
                                                                </div>
                                                            </div>
                                                        }
                                                    </>
                                                }
                                            </div>
                                        }
                                        <div className={classNames("text-right", {
                                            'col-5': !forMaps,
                                            'col-12': forMaps
                                        })}>
                                            {forMaps &&
                                                <div>
                                                    <p className="text-primary font-weight-bold mt-2 mb-2" style={{fontSize:'18px', textAlign:'right'}}>
                                                        {hotel.name}
                                                    </p>

                                                    <div className="d-flex flex-column justify-content-end align-items-end">
                                                        {renderStar().length > 0 &&
                                                            <div>
                                                                <span className="bintang mr-2">
                                                                    {renderStar()}
                                                                </span>
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                            }
                                            {!loading &&
                                                <div className={classNames("d-flex flex-column justify-content-end align-items-end")}>
                                                    <div style={{ margin: '8px 0' }}>
                                                        <h6 className="d-flex align-items-center">
                                                            <span className="text-grey " style={{
                                                                fontSize: '12px',
                                                                marginRight: '5px'
                                                            }}> <span className=" font-weight-bold" style={{ fontSize: '15px', }} >{hotel.reviewScore >= 9 ? 'Superb' : (hotel.reviewScore >= 8 ? 'Impressive' : hotel.reviewScore >= 7 ? 'Convenient' : hotel.reviewScore >= 6 ? 'Good' : 'Review Score')}</span>
                                                                <br /> Reviews
                                                            </span>
                                                            <span className={`badge badge-md text-white ml-2`} style={{ height: '30px', fontSize: '15px', padding: '6px', background: '#003896' }}>{hotel.reviewScore}</span>
                                                        </h6>
                                                        {Number(hotel.reviewScore) == 0 &&
                                                            <span>Unrated</span>
                                                        }
                                                    </div>
                                                    {!auth ?
                                                        <>
                                                            {Number(hotel.promoPrice) > 0 &&
                                                                <>
                                                                    <small className="text-danger mb-1">Login untuk mendapatkan potongan harga</small>
                                                                    <small className="text-secondary">1 Kamar, 1 Malam</small>
                                                                    <h5 className="text-primary mb-0 font-weight-bold">Rp{Number(hotel.price).toLocaleString().replaceAll(',', '.')}</h5>
                                                                    <small className="text-secondary">Termasuk pajak dan biaya lain</small>
                                                                </>
                                                            }
                                                            {Number(hotel.promoPrice) == 0 &&
                                                                <>
                                                                    <small className="text-danger mb-1">Silahkan lihat di detail hotel untuk mengecek ketersediaan kamar</small>
                                                                    <h5 className="text-primary mt-2 font-weight-bold">Lihat ketersediaan</h5>
                                                                </>
                                                            }
                                                        </>
                                                        :
                                                        <>
                                                            {hotel?.isPromo &&
                                                                <>
                                                                    <h6 className="text-danger"><s>Rp{Number(hotel.price).toLocaleString().replaceAll(',', '.')}</s></h6>
                                                                    <small className="text-success mb-1 font-weight-bold" style={{ fontSize: '15px' }}><Icon icon="iconamoon:discount-duotone" className="mr-1" />Hemat {Math.floor(((hotel.price - hotel.promoPrice) / hotel.price) * 100)}%</small>
                                                                </>
                                                            }
                                                            {Number(hotel.promoPrice) > 0 &&

                                                                <>
                                                                    <small className="text-secondary">1 Kamar, 1 Malam</small>
                                                                    <h5 className="text-primary mb-0 font-weight-bold">Rp{Number(hotel.promoPrice).toLocaleString().replaceAll(',', '.')}</h5>
                                                                    <small className="text-secondary">Termasuk pajak dan biaya lain</small>
                                                                </>
                                                            }
                                                            {Number(hotel.promoPrice) == 0 &&
                                                                <>
                                                                    <small className="text-danger mb-1">Silahkan lihat di detail hotel untuk mengecek ketersediaan kamar</small>
                                                                    <h5 className="text-primary mt-2 font-weight-bold">Lihat ketersediaan</h5>
                                                                </>
                                                            }
                                                        </>
                                                    }

                                                </div>
                                            }
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </RootStyled>
                </a >
            </RootComponent >
        </div>
    );
}


const ImageHotelStyled = styled.div`
background:url(${props => props.img});
background-size:cover;
background-position:center center;
background-repeat :no-repeat;
background-color: darkgray;
width:100%;
/* height:164px; */
flex:1;
border-radius:15px;
`

const LimitTextTitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
  font-size: 18px;
`

const RootStyled = styled.div`
border-radius:15px;
padding:6px;
position:relative;
/* height:200px; */
box-shadow: -1px 3px 11px -7px rgba(156,156,156,0.75);
.title{
    width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.titlex:hover:{
    color: '#D2232A !important'; 
}
#titlex:hover:{
    color: '#D2232A !important'; 
}
`

export default CardHotel;