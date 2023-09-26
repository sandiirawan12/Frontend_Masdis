import { Icon } from '@iconify/react';
import SuitcaseIcon from '@iconify/icons-fa-solid/suitcase';
import LuggageCartIcon from '@iconify/icons-fa-solid/luggage-cart';
import styled from 'styled-components';
import { useState } from 'react';
import ClockIcon from '@iconify/icons-fa-solid/clock';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classNames from 'classnames';
import Image from 'next/image';
import PropTypes from 'prop-types'
import AppLink from './AppLink';
import ReactPlaceholder from 'react-placeholder/lib';

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
        border:0;
    }

    li::before{
	content: '';
	position: absolute;
	/* width: 2px; */
    border:2px dashed #FFC107;
	left: -19.5px;
	background-color: #E7E7E7;
	top: 3px;
	bottom: 0;
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
const ThumnailStyled = styled.div`
    max-width: 100%;
    min-height:100%;
	padding: .25rem;
	background-color: #fff;
	/* border: 1px solid #dee2e6; */
	border-radius: .25rem;
    position:relative;
`


function CardFlight(props) {
    const { flight, isLoading, handleSelected } = props
    const [tabActive, setTabActive] = useState(0);

    const handleChangeTab = (tabId) => {
        if (tabActive === tabId) {
            setTabActive(0)
        } else {
            setTabActive(tabId)
        }
    }

    return (
        <div className="card mb-3" style={{
            boxShadow: '5px 5px 15px -5px rgba(0, 0, 0, .5)',
            borderRadius: '20px',
        }}>
            <div className="card-body p-2-sm pb-0">
                <div className="row mb-3">
                    <div className="col-md-2">
                        {isLoading ?
                            <ReactPlaceholder type='rect' showLoadingAnimation />
                            : <>
                                <ThumnailStyled>
                                    <Image layout='fill' placeholder='blur' objectFit='contain' blurDataURL src={flight.image} alt={flight.name} />
                                </ThumnailStyled>
                                <p className="mb-0"> <b>{flight.name}</b></p>
                            </>
                        }
                    </div>
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-6 d-flex justify-content-between">
                                {isLoading ?
                                    <ReactPlaceholder type='text' widths={[220]} style={{
                                        marginLeft: '20px'
                                    }} showLoadingAnimation />
                                    :
                                    <>
                                        <div className='mr-3'>
                                            <p className="mb-0">{flight.detail.from.time}</p> <br />
                                            <span className='font-weight-bold'>{flight.detail.from.code}</span>
                                        </div>
                                        <div className="text-center mr-3">
                                            <span> {flight.filter.transit ? `${flight.filter.transit}x (transit)` : 'Direct'} </span>
                                            <div style={{ borderBottom: '1px dashed black' }} />
                                            <span className='font-weight-bold'>{flight.duration}</span>
                                        </div>

                                        <div className='ml-2'>
                                            <p className="mb-0">{flight.detail.to.time}</p>
                                            <span className='font-weight-bold'>{flight.detail.to.code}</span>
                                        </div>
                                    </>
                                }
                            </div>
                            <div className="col-6">
                                {!isLoading &&
                                    <div className="d-flex mb-2 justify-content-center">
                                        {flight.detail.flight[0].amenities.baggage.checkin &&
                                            <div className="mb-0 align-items-center">
                                                <p className="mb-0 text-center"><b>
                                                    <Icon icon={SuitcaseIcon} /></b></p>
                                                <p className="mb-0">
                                                    {
                                                        flight.detail.flight[0].amenities.baggage.checkin.adt.desc
                                                    }
                                                </p>
                                                &nbsp;&nbsp; </div>
                                        }
                                        {flight.detail.flight[0].amenities.baggage.cabin &&
                                            <div className="mb-0 ml-1 align-items-center">
                                                <p className="mb-0 text-center"><b>
                                                    <Icon icon={LuggageCartIcon} /></b></p>
                                                <p className="mb-0">{
                                                    flight.detail.flight[0].amenities.baggage.cabin.adt.desc
                                                }</p></div>
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-right">
                        {isLoading ?
                            <div className='d-flex justify-content-center align-items-center'>
                                <ReactPlaceholder type='rect' style={{ height: '30px', width: '80px', marginTop: '15px', marginLeft: '60px' }} showLoadingAnimation ready={!isLoading} />
                            </div>
                            : <>
                                <h5 className="mb-0"><span className="text-primary font-weight-bold">Rp{
                                    flight.price.toLocaleString().replaceAll(',', '.')
                                }</span><span className="text-dark">/pax</span></h5>
                                <button type='button' onClick={() => handleSelected(flight)} className="btn rounded btn-warning pilih_pesawat mt-3"><b>Pilih</b></button>
                            </>
                        }
                    </div>
                    <div className="col-12">
                        {isLoading ?
                            <div className='mt-2'>
                                <ReactPlaceholder type='rect' showLoadingAnimation ready={!isLoading} />
                            </div>
                            :
                            <Nav>
                                <NavItem active>
                                    <NavLink style={{ cursor: 'pointer' }} className={classNames('text-primary', {
                                        'nav-link-active': tabActive === 1
                                    })} onClick={() => handleChangeTab(1)}>Flight Details</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{ cursor: 'pointer' }} className={classNames('text-primary', {
                                        'nav-link-active': tabActive === 2
                                    })} onClick={() => handleChangeTab(2)}>Fare Info</NavLink>
                                </NavItem>
                            </Nav>
                        }
                        {
                            !isLoading &&
                            <TabContent activeTab={tabActive}>
                                <TabPane tabId={1}>
                                    <div className="card-body my-0 border-top">
                                        {flight.detail.flight.map((item, index) => (
                                            <TimeLineStyled key={index} clasName='mb-2'>
                                                <li>
                                                    <p className="float-right"><Icon icon={ClockIcon} /> {item.flyTime}</p>
                                                    <p className="mb-0"><b className="fs-med">
                                                        {item.departure.time}</b> {`${item.departure.name} ${item.departure.code}`}{
                                                            (item.departure.terminal != 0 && item.departure.terminal != undefined) && `Terminal ${item.departure.terminal}`
                                                        } </p>
                                                    <span>{item.departure.date}</span>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="media">
                                                                <div style={{ width: '48px', height: '48px' }} className='position-relative'>
                                                                    <Image layout='fill' objectFit='contain' src={item.image} className="airline-img img-thumbnail" alt={item.name} />
                                                                </div>
                                                                <div className="media-body ml-3">
                                                                    <span> {`${item.code} ${item.class}`}</span><br />
                                                                    <span>{item.name}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="d-flex mb-2">
                                                                {item.amenities.baggage.checkin &&
                                                                    <div className="d-flex align-items-center mr-3"><b>
                                                                        <Icon icon={SuitcaseIcon} />
                                                                    </b>  {item.amenities.baggage.checkin.adt.desc}</div>
                                                                }
                                                                {item.amenities.baggage.cabin &&
                                                                    <div className="d-flex align-items-center"><b>
                                                                        <Icon icon={LuggageCartIcon} />
                                                                    </b>{item.amenities.baggage.cabin.adt.desc}</div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <p className="mb-0"><b className="fs-med"> {item.arrival.time}</b> {`${item.arrival.name} ${item.arrival.code}`} {!!item.arrival.terminal && `Terminal ${item.arrival.terminal}`} </p>
                                                    <span> {item.arrival.date}</span>
                                                </li>
                                            </TimeLineStyled>
                                        ))}
                                    </div>
                                </TabPane>
                                <TabPane tabId={2}>
                                    <div className="card-body my-0 border-top">
                                        <p><b>Tarif</b></p>
                                        <div>
                                            {Object.keys(flight.detail.price.perPax).map(item => {
                                                if (flight.detail.price.perPax[item].count > 0)
                                                    return <div className="d-flex justify-content-between"><span className='text-capitalize'> {item} {flight.detail.price.perPax[item].count}</span><span>Rp{flight.detail.price.perPax[item].amount.toLocaleString()}</span></div>
                                            })}
                                            <div className="d-flex justify-content-between"><span>Pajak dan lainnya</span><span>Rp{
                                                (flight.detail.price.iwjr + flight.detail.price.fee2 + flight.detail.price.tax).toLocaleString()}</span></div>
                                            <hr className="my-1" />
                                            <div className="d-flex justify-content-between"><span>Grand Total</span><span>Rp{flight.detail.price.total.toLocaleString()}</span></div>
                                        </div>
                                    </div>
                                </TabPane>
                            </TabContent>
                        }
                    </div>

                </div>
            </div>

        </div >

    );
}

CardFlight.propTypes = {
    flight: PropTypes.object
}

export default CardFlight;