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
                <CardStyled className="card bg-white mb-2">
                    <div className="card-body border-bottom py-2">
                        <div className="media text-muted">
                            <div className="media-body">
                                <div className="d-flex justify-content-between">
                                    <p className="mb-1 label-icon"><strong className="d-block text-gray-dark mb-0 text-primary">
                                        <Icon icon={data.product.includes('Hotel') ? HotelIcon : PlaneIcon} /> {data.product}
                                    </strong></p>
                                    <div className="text-primary label-price"><b>
                                        Rp.{data.price.toLocaleString()}
                                    </b></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body border-bottom py-2">
                        <div className="media text-muted">
                            <div className="media-body">
                                <div className="media">
                                    <div className="d-flex w-100 justify-content-between flex-row">
                                        <div className="d-block label-price">
                                            <p className="mb-0">Order ID : {data.code}</p>
                                            <p className="mb-0 text-primary"><strong>{data.name}</strong></p>
                                            <small className="mb-0"><strong>{
                                                data.guest}</strong></small>
                                            <div className="departure">
                                                {!data.product.includes('Hotel') &&
                                                    <Icon icon={PlaneDepartureIcon} className="mr-2" />
                                                }
                                                {data.detail}</div>
                                        </div>
                                        <div>
                                            <div className={`btn btn-sm label-price btn-${data.status.color}`}>{data.status.name}</div>
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