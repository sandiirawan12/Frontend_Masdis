import styled from "styled-components";
import Link from "next/link";
import queryString from 'query-string';
import ReactPlaceholder from "react-placeholder";
import { Fragment, useEffect } from "react";
import classNames from 'classnames'
import Image from "next/image";

function CardHotel(props) {
    const { hotel, loading, options, refProp, selected } = props;

    useEffect(() => {
        if (selected) {
            document?.querySelector('#hotels')?.scrollTo({ behavior: 'smooth', top: refProp?.current?.offsetTop });
            // window..querySelector('#hotels').scrollTo(0, refProp?.current?.offsetTop)   
            // refProp?.current?.scroolIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [selected])


    const renderStar = () => {
        let arr = [];
        for (let index = 0; index < hotel.class; index++) {
            arr[index] = index;
        }
        return arr.map(() => (
            <div style={{ width: '15px', height: '15px', position: 'relative', display: 'inline-block' }}>
                <Image src='https://cdn.masterdiskon.com/masterdiskon/icon/fe/star.png' layout='fill' objectFit='cover' />
            </div>))
    }

    const RootComponent = loading ? Fragment : Link

    return (
        <RootComponent href={`/product/hotel/detail?${queryString.stringify({ ...options, keyword: hotel.name, productId: hotel.id })}`} >
            <a className="text-dark d-block mb-3" target="_blank">
                <RootStyled className="card mb-2">
                    <div className="card-body p-2">
                        <div className="row">
                            <div className="col-4 pr-0">
                                {loading ?
                                    <ReactPlaceholder style={{ borderRadius: '10px', height: '180px' }} type='rect' />
                                    :
                                    <ImageHotelStyled img={hotel.image}>
                                    </ImageHotelStyled>
                                }
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="col-11">
                                        {loading ?
                                            <ReactPlaceholder type="text" widths={[100, 100, 100]} />
                                            :
                                            <>
                                                <h5 className="title">{hotel?.name}</h5>
                                                <div className="d-flex align-items-center" style={{ fontSize: '12px' }}>
                                                    {renderStar()}
                                                </div>
                                                <div className="d-flex" style={{ fontSize: '12px' }}>
                                                    <span className="align-items-center d-flex">
                                                        <div className="d-inline-block" style={{ width: '15px', height: '15px', position: 'relative' }}>
                                                            <Image src={'https://cdn.masterdiskon.com/masterdiskon/icon/fe/location.png'} layout='fill' />
                                                        </div>
                                                    </span>
                                                    <span>
                                                        {hotel?.detail?.region}
                                                    </span>
                                                </div>
                                                <small className="address">
                                                    {hotel?.detail?.address}
                                                </small></>
                                        }

                                    </div>
                                    <div className="col-12 text-right mt-3">
                                        {!loading &&
                                            <>
                                                {hotel?.isPromo &&
                                                    <>
                                                        <span class="badge px-2 badge-danger font-weight-bold">Promo</span>
                                                        <small className="text-secondary d-block"><s>Rp{Number(hotel.price).toLocaleString().replaceAll(',', '.')}</s></small>
                                                    </>
                                                }

                                                {
                                                    hotel?.promoPrice ?
                                                        <>
                                                            <h6 className="text-primary font-weight-bold" style={{
                                                                marginBottom: '-7px'
                                                            }}>Rp{Number(hotel?.promoPrice)?.toLocaleString().replaceAll(',', '.')}</h6>
                                                            <small className="text-secondary" style={{ fontSize: '11px' }}>per kamar per malam</small>
                                                        </>
                                                        :
                                                        <h6 className="text-danger font-weight-bold">Full Booking</h6>
                                                }
                                            </>

                                        }
                                    </div>
                                </div>
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
width:100%;
height:100%;
border-radius:15px;
/* background-size:20rem;
background-position:center;  */
`

const RootStyled = styled.div`
border-radius:15px;
box-shadow:5px 5px 15px -5px rgba(0,0,0,.5);
.title{
  display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
font-size:16px;
font-weight:bold;
color:#0070BA;
overflow: hidden;
text-overflow: ellipsis;
}
.address{
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 10px;
     line-height: 15px; 
    
}

`

export default CardHotel;