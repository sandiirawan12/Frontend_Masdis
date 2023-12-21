import { Icon } from '@iconify/react';
import SuitcaseIcon from '@iconify/icons-fa-solid/suitcase';
import LuggageCartIcon from '@iconify/icons-fa-solid/luggage-cart';
import styled from 'styled-components';
import { useState } from 'react';
import ArrowDownIcon from '@iconify/icons-fa-regular/arrow-alt-circle-down';
import Image from 'next/image';
import PropTypes from 'prop-types';
import ReactPlaceholder from 'react-placeholder/lib';
import PlaneIcon from '@iconify/icons-fa-solid/plane';
import { BottomSheet, SheetContent } from '@biotic-ui/bottom-sheet';
import HeaderBack from '@/components-mobile/header/HeaderBack';

const LineStyled = styled.ul`
    position:relative;
   
    &::before {
	content: '';
	position: absolute;
	border: 1px solid #eaeaea;
	left: 0;
	background-color: #E7E7E7;
	top: 3px;
	bottom: 0;
	height: 100%;
	width: 111%;
}
    
    &::after {
	text-align: center;
	z-index: 10;
	content: '';
	position: absolute;
	width: 10px;
	height: 10px;
	/* border: 3px solid #fff; */
	background-color: #036cb4;
	border-radius: 50%;
	top: -1px;
	right: 0;
    z-index:1;
}
}
`
const ThumnailStyled = styled.div`
    max-width: 70px;
    min-height:35px;
	background-color: #fff;
	/* border: 1px solid #dee2e6; */
	border-radius: .25rem;
    position:relative;
`

function CardFlight(props) {
    const { flight, isLoading, handleSelected } = props;
    const [tabActive, setTabActive] = useState(0);
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleChangeTab = (tabId) => {
        if (tabActive === tabId) {
            setTabActive(0)
        } else {
            setTabActive(tabId)
        }
    }

    const handleOpenDrawer = () => {
        setOpenDrawer(prev => !prev)
    }

    return (
        <>
            <div className="card mb-3" style={{
                boxShadow: '5px 5px 15px -5px rgba(0, 0, 0, .5)',
                borderRadius: '20px',
            }}>
                <div className="card-body px-3 py-2">
                    <div className="row">
                        <div className="col-md-12">
                            {isLoading ?
                                <ReactPlaceholder type='rect' showLoadingAnimation />
                                : <>
                                    <ThumnailStyled>
                                        <Image layout='fill' placeholder='blur' objectFit='contain' blurDataURL src={flight.image} alt={flight.name} />
                                    </ThumnailStyled>
                                    <small className='d-block font-italic' style={{ marginTop: '-4px', position: 'relative', zIndex: '1', fontSize: '11px' }}>{flight?.detail?.flight[0]?.class}</small>
                                </>
                            }
                        </div>
                        <div className="col-md-12">
                            <div className="row align-items-center">
                                <div className="col-6 d-flex justify-content-between" style={{ fontSize: '12px' }}>
                                    {isLoading ?
                                        <ReactPlaceholder type='text' widths={[220]} style={{
                                            marginLeft: '20px'
                                        }} showLoadingAnimation />
                                        :
                                        <div className='d-flex'>
                                            <div className='mr-2'>
                                                <p style={{ marginBottom: '-10px' }} className="font-weight-bold">{flight.detail.from.time}</p>
                                                <span className='badge badge-pill badge-warning font-weight-bold'>{flight.detail.from.code}</span>
                                            </div>
                                            <div className="text-center">
                                                <span>{flight.duration}</span>
                                                <div className="d-flex">
                                                    <LineStyled />
                                                    <Icon icon={PlaneIcon} style={{
                                                        marginTop: '-2px',
                                                        zIndex: 1,
                                                        marginLeft: '2.5px',
                                                    }} />
                                                </div>
                                                <span style={{ marginTop: '-10px' }} className='d-block'> {flight.filter.transit ? `${flight.filter.transit}x (transit)` : 'Direct'} </span>
                                            </div>

                                            <div className='ml-2'>
                                                <p style={{ marginBottom: '-10px' }} className="font-weight-bold">{flight.detail.to.time}</p>
                                                <span className='font-weight-bold badge badge-pill badge-warning '>{flight.detail.to.code}</span>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className="col-6 text-right">
                                    {isLoading ?
                                        <div className='d-flex justify-content-end align-items-end'>
                                            <ReactPlaceholder type='rect' style={{ height: '30px', width: '80px', marginTop: '15px', marginLeft: '60px' }} showLoadingAnimation ready={!isLoading} />
                                        </div>
                                        : <>
                                            <h5 style={{ fontSize: '16px', marginBottom: '-10px' }}><span className="text-primary font-weight-bold">Rp{
                                                flight.price.toLocaleString().replaceAll(',', '.')
                                            }</span><span className="text-dark" style={{ fontSize: '12px' }}>/pax</span></h5>
                                            <button style={{ fontSize: '12px' }} type='button' onClick={() => handleSelected(flight)} className="btn rounded btn-warning mt-3"><b>Pilih</b></button>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mt-2">
                            {flight.detail.flight[0].amenities.baggage.checkin &&
                                <Icon icon={SuitcaseIcon} className='mr-2' />
                            }
                            {flight.detail.flight[0].amenities.baggage.cabin &&
                                <Icon icon={LuggageCartIcon} />
                            }
                        </div>
                        <div className="col-6 mt-2 text-right text-primary">
                            <Icon onClick={handleOpenDrawer} icon={ArrowDownIcon} />
                        </div>
                    </div>
                </div>
            </div>

            <DrawerStyled open={openDrawer}>
                <SheetContent>
                    <HeaderBack title='Detail' onBack={handleOpenDrawer} />
                    <div className="container pt-4">
                        {flight.detail.flight.map((item, index) => (
                            <TimeLineStyled key={index} clasName='mb-2'>
                                <li>
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

                                    </div>
                                </li>
                                <li>
                                    <p className="mb-0"><b className="fs-med"> {item.arrival.time}</b> {`${item.arrival.name} ${item.arrival.code}`} {!!item.arrival.terminal && `Terminal ${item.arrival.terminal}`} </p>
                                    <span> {item.arrival.date}</span>
                                </li>
                            </TimeLineStyled>
                        ))}
                        <h6 className='font-weight-bold'>Tarif</h6>
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
                </SheetContent>
            </DrawerStyled>
        </>

    );
}

const DrawerStyled = styled(BottomSheet)`
    min-height:100%;
    max-height:100%;
    overflow-y:auto;
    overflow-x:hidden;
    border-radius:0;

`

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

CardFlight.propTypes = {
    flight: PropTypes.object
}

export default CardFlight;