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
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <span className="font-weight-bold">Departure <br />
                                <small>
                                    {purchase?.detail.onwardFlight.date}
                                </small>
                            </span>
                        </div>

                        {purchase?.detail?.onwardFlight?.flight.map(fl => (
                            <>
                                <div>
                                    <div className="font-weight-bold">
                                        <img style={{ width: '70px', height: '70px' }} src={fl.image} alt={fl.name} />
                                        <br />
                                        <span>{fl.name} ({fl.code})</span>
                                        <br />
                                        <small>{fl.class}</small>
                                    </div>
                                </div>
                                <div className="row align-items-center mt-3">
                                    <div className="col-8">
                                        <TimeLineStyled className="mb-2">
                                            <>
                                                <li>
                                                    <p className="mb-0"><b className="mr-2"> {fl.departure.time}</b>{fl.departure.code} - {fl.departure.name} {(fl.departure.terminal !== '0' && fl.departure.terminal !== '*' && fl.departure.terminal !== undefined) && `Terminal ${fl.departure.terminal}`}</p>
                                                    <p className="py-2 mb-0">
                                                        <Icon icon="pepicons-print:rewind-time" className="mr-2 text-primary" />
                                                        {fl.flyTime}
                                                    </p>
                                                </li>
                                                <li className>
                                                    <p className="mb-0"><b className="mr-2">  {fl.arrival.time}</b>{fl.arrival.code} - {fl.arrival.name} {(fl.arrival.terminal !== '0' && fl.arrival.terminal !== '*' && fl.arrival.terminal !== undefined) && `Terminal ${fl.arrival.terminal}`}</p>
                                                </li>
                                            </>
                                        </TimeLineStyled>
                                    </div>
                                </div>
                                {fl.layover === 0 ?
                                    ''
                                    :
                                    <div classname="d-flex justify-content-between px-3 mb-0">
                                    <p><Icon icon="pepicons-print:rewind-time" className="mr-2 text-primary" /> Lama menunggu transit {fl.layover}</p>
                                    </div>
                                }
                            </>
                        ))}
                    </div>
                    <div className="col-md-6">
                        {purchase?.detail?.returnFlight?.flight.map(fl => (
                            <>
                                <div>
                                    <div>
                                        <span className="font-weight-bold">Return <br />
                                            <small>
                                                {purchase?.detail?.returnFlight?.date}
                                            </small>
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-weight-bold">
                                            <img style={{ width: '70px', height: '70px' }} src={fl.image} alt={fl.name} />
                                            <br />
                                            <span>{fl.name} ({fl.code})</span>
                                            <br />
                                            <small>{fl.class}</small>
                                        </div>
                                    </div>
                                    <div className="row align-items-center mt-3">
                                        <div className="col-8">
                                            <TimeLineStyled className="mb-2">
                                                <>
                                                    <li>
                                                        <p className="mb-0"><b className="mr-2"> {fl.departure.time}</b> {fl.departure.code} - {fl.departure.name} {(fl.departure.terminal !== '0' && fl.departure.terminal !== '*' && fl.departure.terminal !== undefined) && `Terminal ${fl.departure.terminal}`}</p>
                                                        <p className="py-2 mb-0">
                                                            <Icon icon="pepicons-print:rewind-time" className="mr-2 text-primary" />
                                                            {fl.flyTime}
                                                        </p>
                                                    </li>
                                                    <li className>
                                                        <p className="mb-0"><b className="mr-2">  {fl.arrival.time}</b> {fl.arrival.code} - {fl.arrival.name} {(fl.arrival.terminal !== '0' && fl.arrival.terminal !== '*' && fl.arrival.terminal !== undefined) && `Terminal ${fl.arrival.terminal}`}</p>
                                                    </li>
                                                </>
                                            </TimeLineStyled>
                                        </div>
                                    </div>
                                    {fl.layover === 0 ?
                                        ''
                                        :
                                        <div classname="d-flex justify-content-between px-3 mb-0">
                                            <p><Icon icon="pepicons-print:rewind-time" className="mr-2 text-primary" /> Lama menunggu transit {fl.layover}</p>
                                        </div>
                                    }
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
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