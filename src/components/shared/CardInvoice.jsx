import { Icon } from "@iconify/react";
import { useState } from 'react';
import PlaneIcon from '@iconify/icons-fa-solid/plane'
import HotelIcon from '@iconify/icons-fa-solid/hotel'
import PlaneDepartureIcon from '@iconify/icons-fa-solid/plane-departure'
import Link from "next/link";
import styled from "styled-components";
import parse from 'react-html-parser';
import { Collapse } from 'reactstrap';

const CardStyled = styled.div`
    
@media screen and (max-width:1224px){
    .label-price,.label-icon{
        font-size:12px;
        line-height:17px;
    }
}

`



function CardInvoice(props) {
    const { data, key } = props
    return (
        <>

            <CardStyled className="card bg-white mb-4" style={{ borderRadius: '15px' }}>
                <div className="card-body border-bottom py-2">
                    <div className="media text-muted">
                        <div className="media-body">
                            <div className="d-flex justify-content-between">
                                <p className="mb-1 label-icon"><small className="font-weight-bold">
                                    {data.date_created}
                                </small></p>
                                <div className="text-primary label-price"><b>
                                    Rp {data.total.toLocaleString().replaceAll(',', '.')}
                                </b></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body py-2">
                    <div className="media text-muted">
                        <div className="media-body">
                            <div className="media">
                                <div className="d-flex w-100 justify-content-between flex-row">
                                    <div className="d-block label-price">
                                        <p className="mb-0 text-primary"> No Invoice : <span className="font-weight-bold ml-2">{data.no_invoice}</span> </p>
                                        <div className="mt-3">
                                            {data.typeProduct === 'Hotel' ?
                                                <>
                                                    <div className="d-flex">
                                                        <img src={data?.imageProduct} style={{ width: '70px', height: '70px', borderRadius: '10px' }} className="mt-1" alt="Gambar Masterdiskon" />
                                                        <div className="ml-3">
                                                            <span className="font-weight-bold">{data?.dataHotel?.nama}</span><br />
                                                            <small>{data?.dataHotel?.address}</small><br />
                                                            <small>{data?.dataHotel?.city}, {data?.dataHotel?.country}</small>
                                                        </div>
                                                    </div>
                                                </>
                                                :
                                                <>
                                                    <div className="d-flex">
                                                        <img src={data?.imageProduct} style={{ width: '70px', height: '70px', borderRadius: '10px' }} className="mt-1" alt="Gambar Masterdiskon" />
                                                        <div className="ml-3">
                                                            <span className="font-weight-bold">{data?.dataFlight?.nama} ({data?.dataFlight?.airline_code})</span><br />
                                                            <small>{data?.dataFlight?.destination}</small><br />
                                                            <small>{data?.dataHotel?.class} - {data?.dataHotel?.type === "OW" ? 'One Way' : 'Return'}</small>
                                                        </div>
                                                    </div>
                                                </>
                                            }
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        {data.statusPayment === true ?
                                            <div>
                                                <span className="btn btn-success btn-sm">Sudah Terbayar</span>
                                            </div>
                                            :
                                            <span className="btn btn-danger btn-sm">Belum Terbayar</span>
                                        }
                                        <div className="d-flex">
                                            <a href={data.linkInvoice} target="_blank" className="btn btn-info btn-sm mt-2">Cetak</a>
                                            <a href={data.linkDetailOrder} target="_blank" className="btn btn-primary ml-1 btn-sm mt-2">Detail</a>
                                        </div>
                                    </div>
        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardStyled>
        </>
    );
}

export default CardInvoice;