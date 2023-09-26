import { Icon } from "@iconify/react";
import Image from 'next/image';
import ClockIcon from '@iconify/icons-fa-solid/clock';
import AngleDownIcon from '@iconify/icons-fa-solid/angle-down'
import styled from "styled-components";
import { Collapse } from "reactstrap";
import { useState } from "react";

function AccountPurchaseFlightDetail(props) {
    const { purchase } = props;
    const [departureOpen, setDepartueOpen] = useState(false);
    const [returnOpen, setReturnOpen] = useState(false);
    return (
        <>
            <div className="card-body departure-flights">
                <h6><u>Departure</u></h6> <a href='#' onClick={() => setDepartueOpen(!departureOpen)} className="float-right collapsed">Rincian
                    <Icon icon={AngleDownIcon} className='ml-2' />
                </a>
                <div className="d-flex">
                    <ImageStyled src={purchase?.detail.onwardFlight.flight[0].image} />
                    <h5 className="mb-0 ml-3"> {purchase?.detail.onwardFlight.flight[0].name}</h5>
                </div>
                <div className="d-flex justify-content-between">
                    <TimeLineStyled className="mb-0 mt-1">
                        {purchase?.detail.onwardFlight.flight.map(item => (
                            <>
                                <li> {item.departure.time} {item.departure.name} ({item.departure.code})<p className="mb-0 text-muted">
                                    <small>
                                        <i className="fa fa-clock" />
                                        <span className="duration"> {item.flyTime}</span>
                                        <span className="airline_code"> {item.code} </span>
                                        <span className="mb-0 transit">{
                                            purchase?.detail.onwardFlight.flight.length === 1 ?
                                                'Direct' : 'Transit'
                                        }</span>
                                    </small>
                                </p>
                                </li>
                                <li> {item.arrival.time} {item.arrival.name} ({item.arrival.code})</li>
                            </>
                        ))}
                    </TimeLineStyled>
                </div>
                <Collapse isOpen={departureOpen}>
                    {purchase?.detail.onwardFlight.flight.map((item, index) => (
                        <div className="row">
                            <div className="col-md-12 text-right"><hr /><span className="badge badge-primary">{++index}</span></div>
                            <div className="col-md-3">
                                <div className="text-center">
                                    <ImageStyled src={item.image} />
                                    <div>
                                        <span>{item.code} | {item.class}</span><br />
                                        <span>{item.name}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <TimeLineStyled className='mb-0'>
                                    <li>
                                        <p className="mb-0"><b className="fs-med">{item.departure.time} </b>{item.departure.code} {item.departure.name}</p>
                                        <span>{item.departure.date}</span>
                                        <div className="py-4"><span><Icon icon={ClockIcon} /> {item.flyTime} </span></div>
                                    </li>
                                    <li>
                                        <p className="mb-0"><b className="fs-med">{item.arrival.time} </b> {item.arrival.code} {item.arrival.name}</p>
                                        <span>{item.arrival.date}</span>
                                    </li>
                                </TimeLineStyled>
                            </div>
                        </div>
                    ))}
                </Collapse>
            </div>
            {purchase?.detail.returnFlight &&
                <div className="card-body return-flights">
                    <h6><u>Return</u></h6> <a href='#' onClick={() => setReturnOpen(!returnOpen)} className="float-right collapsed">Rincian
                        <Icon icon={AngleDownIcon} className='ml-2' />
                    </a>
                    <div className="d-flex">
                        <ImageStyled src={purchase?.detail.returnFlight.flight[0].image} />
                        <h5 className="mb-0 ml-3"> {purchase?.detail.returnFlight.flight[0].name}</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <TimeLineStyled className="mb-0 mt-1">
                            {purchase?.detail.returnFlight.flight.map(item => (
                                <>
                                    <li> {item.departure.time} {item.departure.name} ({item.departure.code})<p className="mb-0 text-muted">
                                        <small>
                                            <i className="fa fa-clock" />
                                            <span className="duration"> {item.flyTime}</span>
                                            <span className="airline_code"> {item.code} </span>
                                            <span className="mb-0 transit">{
                                                purchase?.detail.returnFlight.flight.length === 1 ?
                                                    'Direct' : 'Transit'
                                            }</span>
                                        </small>
                                    </p>
                                    </li>
                                    <li> {item.arrival.time} {item.arrival.name} ({item.arrival.code})</li>
                                </>
                            ))}
                        </TimeLineStyled>
                    </div>
                    <Collapse isOpen={returnOpen}>
                        {purchase?.detail.returnFlight.flight.map((item, index) => (
                            <div className="row">
                                <div className="col-md-12 text-right"><hr /><span className="badge badge-primary">{++index}</span></div>
                                <div className="col-md-3">
                                    <div className="text-center">
                                        <ImageStyled src={item.image} />
                                        <div>
                                            <span>{item.code} | {item.class}</span><br />
                                            <span>{item.name}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <TimeLineStyled className='mb-0'>
                                        <li>
                                            <p className="mb-0"><b className="fs-med">{item.departure.time} </b>{item.departure.code} {item.departure.name}</p>
                                            <span>{item.departure.date}</span>
                                            <div className="py-4"><span><Icon icon={ClockIcon} /> {item.flyTime} </span></div>
                                        </li>
                                        <li>
                                            <p className="mb-0"><b className="fs-med">{item.arrival.time} </b> {item.arrival.code} {item.arrival.name}</p>
                                            <span>{item.arrival.date}</span>
                                        </li>
                                    </TimeLineStyled>
                                </div>
                            </div>
                        ))}
                    </Collapse>
                </div>
            }
        </>
    );
}



const TimeLineStyled = styled.ul`
position:relative;
    li{
        margin-left: 0;
        min-height: 33px;
        position: relative;
        background-color: #fff;
        list-style: none;
    }

    li:nth-last-child(0n+1)::before{
        width:0;
    }

    li::before{
	content: '';
	position: absolute;
	width: 1px;
	background-color: #E7E7E7;
	top: 3px;
	bottom: 0;
	left: -18px;
	height: 100%;

    }
    
    li::after {
	text-align: center;
	z-index: 10;
	content: '';
	position: absolute;
	width: 25px;
	height: 25px;
	border: 3px solid #fff;
	background-color: #036cb4;
	border-radius: 50%;
	top: 0;
	left: -30px;
}

`

const ImageStyled = styled.img`
	padding: .25rem !important;
	background-color: #fff !important;
	border: 1px solid #dee2e6 !important;
	border-radius: .25rem !important;
	width: 130px;
    position:relative;
	height: 60px !important;
`


export default AccountPurchaseFlightDetail;