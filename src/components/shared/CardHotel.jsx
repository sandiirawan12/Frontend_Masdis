import styled from "styled-components";
import HeartIcon from '@iconify/icons-fa-solid/heart';
import CalenderIcon from '@iconify/icons-fa-solid/calendar-times';
import ParkingIcon from '@iconify/icons-fa-solid/parking';
import WifiIcon from '@iconify/icons-fa-solid/wifi';
import UtensilsIcon from '@iconify/icons-fa-solid/utensils';
import CheckCircleIcon from '@iconify/icons-fa-solid/check-circle';
import ConciergeBellIcon from '@iconify/icons-fa-solid/concierge-bell';
import SwimmerIcon from '@iconify/icons-fa-solid/swimmer';
import { Icon } from "@iconify/react";
import Link from "next/link";
import queryString from 'query-string';
import ReactPlaceholder from "react-placeholder";
import { Fragment, useEffect } from "react";
import classNames from 'classnames'
import Image from "next/image";

import ReactGA from 'react-ga';
ReactGA.initialize('G-56R5954QCE');



function CardHotel(props) {
    const { hotel, loading, options, forMaps, refProp, selected, type } = props;

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
            <div style={{ width: '17px', height: '17px', position: 'relative', display: 'inline-block' }}>
                <Image src='https://cdn.masterdiskon.com/masterdiskon/icon/fe/star.png' layout='fill' objectFit='cover' />
            </div>))
    }

    const RootComponent = loading ? Fragment : Link

    return (
        <RootComponent href={`/product/hotel/detail?${queryString.stringify({ ...options, keyword: hotel.name, productId: hotel.id })}`} >
            <a className="text-dark d-block mb-3" target="_blank">
                <RootStyled className="card mb-2"
                    style={{ boxShadow: type == 'terdekat' ? '5px 5px 15px -5px rgb(80, 0, 255)' : '5px 5px 15px - 5px rgba(0, 0, 0, .5)', background: type == 'terdekat' ? '#FFF4D3' : '#FFF' }}
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
                    <div className="card-body px-2 py-2 py-1-sm" style={{ margin: type == 'terdekat' ? '10px' : '0px' }}>
                        <div className="row">
                            <div className="col-md-4 d-flex">
                                {loading ?
                                    <ReactPlaceholder style={{ borderRadius: '10px', height: '180px' }} type='rect' />
                                    :
                                    <ImageHotelStyled img={hotel.image}>
                                        {!hotel.image &&
                                            <div className="d-flex justify-content-center align-items-center h-100">
                                                <p>Tidak ada gambar</p>
                                            </div>
                                        }
                                    </ImageHotelStyled>
                                }
                            </div>
                            <div className="col-md-8">
                                {/* <div className="container"> */}
                                <div className="row">
                                    <div className="col-md-8">
                                        {loading ?
                                            <ReactPlaceholder showLoadingAnimation={true} style={{ paddingTop: '10px' }} rows={4} type='text' widths={[140]} />
                                            :
                                            <>
                                                {type == 'terdekat' ? <> <h6>
                                                    <span style={{
                                                        textTransform: 'capitalize'
                                                    }} className={`badge badge-lg badge-warning mr-2`}>Akomodasi terdekat dari Anda, jarak {hotel?.distance_in_km} km</span>
                                                </h6> </> : <></>
                                                }


                                                <h5 className={classNames("titlex text-primary font-weight-bold", {
                                                    'title': forMaps
                                                })}> {hotel.name}
                                                </h5>
                                                <div className="mb-1 d-flex align-items-center">
                                                    <h6>
                                                        <span style={{
                                                            textTransform: 'capitalize'
                                                        }} className={`badge badge-lg badge-warning mr-2`}>{hotel?.type}</span>
                                                    </h6>

                                                    {renderStar().length > 0 &&
                                                        <div>
                                                            <span className="bintang ml-1">
                                                                {renderStar()}
                                                            </span>
                                                        </div>
                                                    }

                                                </div>
                                                <div>
                                                    {!forMaps &&
                                                        <span className="card-text mb-2 d-flex">
                                                            <div className="d-inline-block" style={{ width: '20px', height: '20px', position: 'relative' }}>
                                                                <Image src={'https://cdn.masterdiskon.com/masterdiskon/icon/fe/location.png'} layout='fill' />
                                                            </div>
                                                            {type == 'terdekat' ? hotel.detail.city : hotel.detail.region}
                                                        </span>
                                                    }
                                                </div>
                                                {!forMaps &&
                                                    <div>
                                                        <Icon icon={ParkingIcon} className={classNames(`mr-3 `, {
                                                            'text-success': hotel?.facilities?.parkingIncluded
                                                        })} />
                                                        <Icon icon={WifiIcon} className={classNames(`mr-3 `, {
                                                            'text-success': hotel?.facilities?.wifiIncluded
                                                        })} />
                                                        <Icon icon={UtensilsIcon} className={classNames(`mr-3 `, {
                                                            'text-success': hotel?.facilities?.breakfastIncluded
                                                        })} />
                                                        <Icon icon={SwimmerIcon} className={classNames('', {
                                                            'text-success': hotel?.facilities?.poolIncluded
                                                        })} />
                                                        {/* <Icon className="mr-3 " icon={HeartIcon} />
                                                        <Icon className="mr-3 " icon={CalenderIcon} /> */}
                                                        {/* <Icon icon={CheckCircleIcon} className="mr-3 " />
                                                        <Icon icon={ConciergeBellIcon} className="mr-3 " /> */}
                                                    </div>
                                                }
                                            </>
                                        }
                                    </div>
                                    <div className={classNames("text-right", {
                                        'col-4': !forMaps,
                                        'col-12': forMaps
                                    })}>
                                        {!loading &&
                                            <div className={classNames("d-flex flex-column h-100 justify-content-end align-items-end")}>

                                                <div style={{ margin: '13px 0' }}>
                                                    <h6 className="d-flex align-items-center">
                                                        <span className="text-grey " style={{
                                                            fontSize: '12px',
                                                            marginRight: '5px'
                                                        }}> <span className=" font-weight-bold" style={{ fontSize: '15px', }} >{hotel.reviewScore >= 9 ? 'Superb' : (hotel.reviewScore >= 8 ? 'Impressive' : hotel.reviewScore >= 7 ? 'Convenient' : hotel.reviewScore >= 6 ? 'Good' : 'Review Score')}</span>
                                                            <br /> Reviews
                                                        </span>
                                                        <span className={`badge badge-lg badge-warning mr-1`} style={{ height: '30px', fontSize: '15px', padding: '6px' }}>{hotel.reviewScore}</span>
                                                    </h6>
                                                    {Number(hotel.reviewScore) == 0 &&
                                                        <span>Unrated</span>
                                                    }
                                                </div>
                                                <small className="text-secondary">1 night, 1 room</small>
                                                {hotel?.isPromo &&
                                                    <>
                                                        <h6 className="text-danger"><s>Rp{Number(hotel.price).toLocaleString().replaceAll(',', '.')}</s></h6>
                                                    </>
                                                }
                                                {Number(hotel.promoPrice) > 0 &&

                                                    <>
                                                        <h5 className="text-primary mb-0 font-weight-bold">Rp{Number(hotel.promoPrice).toLocaleString().replaceAll(',', '.')}</h5>
                                                        <small className="text-secondary">Includes taxes and charges</small>
                                                    </>
                                                }

                                                {Number(hotel.promoPrice) == 0 &&
                                                    <>
                                                        <h5 className="text-primary mb-0 font-weight-bold">See availability</h5>
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

const RootStyled = styled.div`
border-radius:15px;
padding:6px;
position:relative;
/* height:200px; */
box-shadow:5px 5px 15px -5px rgba(0,0,0,.5);
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