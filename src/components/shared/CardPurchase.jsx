import { Icon } from "@iconify/react";
import PlaneIcon from '@iconify/icons-fa-solid/plane'
import HotelIcon from '@iconify/icons-fa-solid/hotel'
import PlaneDepartureIcon from '@iconify/icons-fa-solid/plane-departure'
import Link from "next/link";
import styled from "styled-components";

const CardStyled = styled.div`
    
@media screen and (max-width:1224px){
    .label-price,.label-icon{
        font-size:12px;
        line-height:17px;
    }
}

`


function CardPurchase(props) {
    const { data, key } = props
    return (
        <Link href={`/user/purchase/detail/${data.id}`} key={key}>
            <a>
                <CardStyled className="card mb-4" style={{
                    borderRadius: '15px',
                }}>
                    <div className="card-body py-2">
                        <div className="d-flex justify-content-between">
                            <div className="mt-2">
                                <strong>
                                    <Icon icon={data.product.includes('Hotel') ? "solar:bed-line-duotone" : "pepicons-print:airplane"} style={{ fontSize: '20px' }} className="mr-3 text-primary" />
                                    <span className="text-dark">Pemesanan {data.product}</span>
                                </strong>
                            </div>
                            <div className="text-dark label-price mt-2">
                                <b style={{fontSize: '14px'}}>
                                    {data.dateOrder}
                                </b>
                            </div>
                        </div>
                        <hr />
                        <div className="media text-muted">
                            <div className="media-body">
                                <div className="media">
                                    <div className="d-flex w-100 justify-content-between flex-row">
                                        <div className="d-block label-price">
                                            <p className="mb-2 text-primary" style={{fontSize: '18px'}}><strong>{data.name}</strong></p>

                                            <small className="mb-0">No. Pesanan <b className="font-weight-bold text-dark ml-2">{data.code}</b></small><br />
                                            <small className="mb-0">{data.guest}</small> <br />
                                            <small dangerouslySetInnerHTML={{ __html: data.detail }}></small>
                                        </div>
                                        <div>
                                            <div className={`float-right btn btn-sm label-price btn-${data.status.color}`}>{data.status.name}</div>
                                            <br />
                                            <br />
                                            <div className="text-primary label-price mt-3">
                                                <b style={{ fontSize: '20px' }}>
                                                    Rp{data.price.toLocaleString()}
                                                </b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardStyled>
            </a>
        </Link>
    );
}

export default CardPurchase;