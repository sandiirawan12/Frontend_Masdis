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
    const [openMore, setOpenMore] = useState(false);
    const { data, key } = props

    const handleHistory = () => {
        setOpenMore(!openMore);
    }
    return (
        <>

            <CardStyled className="card bg-white mb-2">
                <div className="card-body border-bottom py-2">
                    <div className="media text-muted">
                        <div className="media-body">
                            <div className="d-flex justify-content-between">
                                <p className="mb-1 label-icon"><small className="font-weight-bold">
                                    {data.[4]}
                                </small></p>
                                <div className="text-primary label-price"><b>
                                    Rp.{data.[3]}
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
                                        <p className="mb-0 text-primary"> <strong> Invoice ID : {data.[1]} </strong> - {parse(data.[5])} </p>
                                        <div className="font-weight-bold">
                                            <Icon icon={data.[8].includes('Hotel') ? HotelIcon : PlaneIcon} className="mr-2" />
                                            {data.[9]}

                                        </div>
                                    </div>
                                    <div>
                                        {data.[10] ?
                                            <button className="btn btn-info btn-sm text-white" onClick={() => setOpenMore(!openMore)} style={{ cursor: 'pointer', marginRight: '5px' }} title="History Pembayaran"><i class="fas fa-history"></i></button>
                                            :
                                            <></>
                                        }
                                        {parse(data.[7])}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <>
                    <Collapse isOpen={openMore} className='text-justify'>
                        <div style={{ padding: '10px' }}> {parse(data.[11])}</div>
                    </Collapse>
                </>
            </CardStyled>

        </>
    );
}

export default CardInvoice;