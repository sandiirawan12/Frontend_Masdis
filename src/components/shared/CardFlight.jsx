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
        min-height: 50px;
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
        border: 2px dashed #cdd0d1;
        left: -20px;
        background-color: white;
        top: 4px;
        bottom: 0;
        height: 100%;
    }
    
    li::after {
        text-align: center;
        z-index: 10;
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        border: 3px solid #036cb4;
        background-color: #fff;
        border-radius: 50%;
        top: 0;
        left: -28px;
    }
`


function CardFlight(props) {
    const { flight, isLoading, handleSelected, type } = props
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
            boxShadow: '-1px 3px 11px -7px rgba(156,156,156,0.75)',
            borderRadius: '20px'
        }}>
            <div className="card-body p-1-sm">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        {isLoading ?
                            <ReactPlaceholder type='rect' style={{ height: '20px', width: '150px' }} showLoadingAnimation ready={!isLoading} />
                            : <>
                                {flight.name === "Multi Maskapai" || flight.name === "Multi Maskapai (pulang pergi)" ? 
                                    <>
                                        <div className="d-flex align-items-center">
                                            {flight.detail.flight.map((item, index) => (
                                                <div>
                                                    <img src={item.image} alt="Gambar Masterdiskon" style={{ width: '55px', height: '55px' }} className='mx-2' />
                                                </div>
                                            ))}
                                            <span className="ml-2"><b>{flight.name}</b> - {flight.code}</span>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className="d-flex align-items-center">
                                            <img src={flight.image} alt="Gambar Masterdiskon" style={{ width: '55px', height: '55px' }} />
                                            <span className="ml-2"><b>{flight.name}</b> - {flight.code}</span>
                                        </div>
                                    </>
                                }
                                
                            </>
                        }
                    </div>
                    <div>
                        {isLoading ?
                            <ReactPlaceholder type='rect' style={{ height: '20px', width: '50px' }} showLoadingAnimation ready={!isLoading} />
                            : <>
                                {flight.seatsLeft > 0 ?
                                    <span className="badge bg-light p-1 text-primary" style={{ marginTop: '-5px', fontSize: '16px' }}><Icon icon="fluent-emoji:seat" className='mr-2' /> {flight.seatsLeft} Kursi</span>
                                    : ''
                                }
                            </>
                        }
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3 mb-1">
                    <div>
                        {isLoading ?
                            <ReactPlaceholder type='rect' style={{ height: '20px', width: '300px' }} showLoadingAnimation ready={!isLoading} />
                            : <>
                                <div className="d-flex align-items-center text-center">
                                    <div>
                                        <span className='font-weight-bold text-primary' style={{ fontSize: '22px' }}>{flight.detail.from.time}</span>
                                        <p> {flight.detail.from.city}</p>
                                    </div>
                                    <div className='mx-3'>
                                        <span style={{ fontSize: '15px' }}>{flight.duration} - {flight.filter.transit ? `${flight.filter.transit}x (transit)` : 'Langsung'}</span>
                                        <p>{flight.detail.from.code} <Icon icon="solar:arrow-right-line-duotone" /> {flight.detail.to.code}</p>
                                    </div>
                                    <div>
                                        <span className='font-weight-bold text-primary' style={{ fontSize: '22px' }}>{flight.detail.to.time}</span>
                                        <p> {flight.detail.to.city}</p>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                    <div>
                        {isLoading ?
                            <ReactPlaceholder type='rect' style={{ height: '20px', width: '150px' }} showLoadingAnimation ready={!isLoading} />
                            : <>
                               
                            </>
                        }
                    </div>
                    <div>
                        {isLoading ?
                            <ReactPlaceholder type='rect' style={{ height: '20px', width: '150px' }} showLoadingAnimation ready={!isLoading} />
                            : <>
                                <div className="align-items-center ml-3">
                                    <span className='font-weight-bold text-danger' style={{ fontSize: '20px' }}>Rp {flight.detail.price.total.toLocaleString().replaceAll(',', '.')}</span>
                                    <br />
                                    <small>Per Dewasa ( {(flight.detail.price.perPax.adult.amount).toLocaleString()} + Pajak )</small> 
                                </div>
                            </>
                        }
                    </div>
                    <div>
                        {isLoading ?
                            <ReactPlaceholder type='rect' style={{ height: '20px', width: '100px' }} showLoadingAnimation ready={!isLoading} />
                            : <>
                                <button type='button' onClick={() => handleSelected(flight)} className="btn rounded btn-warning pilih_pesawat"><b>Pilih</b></button>
                            </>
                        }
                    </div>
                </div>
                {/* ========== */}
                <div>
                    {isLoading ?
                        <div className='mt-2'>
                            <ReactPlaceholder type='rect' showLoadingAnimation ready={!isLoading} />
                        </div>
                        :
                        <Nav>
                            <NavItem active>
                                <NavLink style={{ cursor: 'pointer' }} className={classNames('text-primary', {
                                    'nav-link-active': tabActive === 1
                                })} onClick={() => handleChangeTab(1)}>Rincian Penerbangan</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{ cursor: 'pointer' }} className={classNames('text-primary', {
                                    'nav-link-active': tabActive === 2
                                })} onClick={() => handleChangeTab(2)}>Rincian Harga</NavLink>
                            </NavItem>
                        </Nav>
                    }
                    {
                        !isLoading &&
                        <TabContent activeTab={tabActive}>
                            <TabPane tabId={1}>
                                <div className="card-body my-0 border-top">
                                    {flight.detail.flight.map((item, index) => (
                                        <TimeLineStyled key={index} clasName='my-2'>
                                            <li>
                                                <div className='d-flex'>
                                                    <div>
                                                        <b className="fs-med">{item.departure.time}</b><br />
                                                        <small>{item.departure.date}</small>
                                                    </div>
                                                    <div className='ml-3'>
                                                        <span>
                                                            {`${item.departure.city} (${item.departure.code})`}
                                                            {
                                                                (item.departure.terminal != 0 && item.departure.terminal != undefined) && ` - Terminal : ${item.departure.terminal}`
                                                            }
                                                        </span><br />
                                                        <small>{item.departure.name}</small>
                                                    </div>
                                                </div>
                                                <div className='d-flex align-items-center my-2'>
                                                    <div>
                                                        <small>{item.flyTime}</small>
                                                    </div>
                                                    <div style={{ width: '48px', height: '48px' }} className='position-relative mx-2'>
                                                        <Image layout='fill' objectFit='contain' src={item.image} className="airline-img img-thumbnail" alt={item.name} />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <span className='font-weight-bold text-primary'>{item.name}</span><br />
                                                        <span>{`${item.code} - ${item.class}`}</span> <br />
                                                        <span>
                                                            {item.aircraftType ? 
                                                                <small>AirCraft Type : {item.aircraftType}</small>
                                                                : ''
                                                            }
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <small>Bagasi {item.amenities.baggage?.checkin?.adt.desc}</small> <br />
                                                        <small>Bagasi Kabin {item.amenities.baggage?.cabin?.adt.desc}</small> <br />
                                                        <div>
                                                            {item.amenities.meal == true ? 
                                                                <small className='text-success'>Tersedia Makanan</small>
                                                                :
                                                                <small className='text-danger'>Tidak Tersedia Makanan</small>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='d-flex'>
                                                    <div>
                                                        <b className="fs-med">{item.arrival.time}</b><br />
                                                        <small>{item.arrival.date}</small>
                                                    </div>
                                                    <div className='ml-3'>
                                                        <span>
                                                            {`${item.arrival.city} (${item.arrival.code})`}
                                                            {
                                                                (item.arrival.terminal != 0 && item.arrival.terminal != undefined) && ` - Terminal ${item.arrival.terminal}`
                                                            }
                                                        </span><br />
                                                        <small>{item.arrival.name}</small>
                                                    </div>
                                                </div>
                                            </li>
                                        </TimeLineStyled>
                                    ))}
                                </div>
                            </TabPane>
                            <TabPane tabId={2}>
                                <div className="card-body my-0 border-top">
                                    <div>
                                        <div className="d-flex justify-content-between">
                                            <span>Harga Dasar Dewasa (x{flight.detail.price.perPax.adult.count})</span>
                                            <span>Rp {(flight.detail.price.perPax.adult.amount * flight.detail.price.perPax.adult.count).toLocaleString()}</span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <span>Harga Dasar Anak (x{flight.detail.price.perPax.infant.count})</span>
                                            <span>Rp {(flight.detail.price.perPax.infant.amount * flight.detail.price.perPax.infant.count).toLocaleString()}</span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <span>Harga Dasar Bayi (x{flight.detail.price.perPax.child.count})</span>
                                            <span>Rp {(flight.detail.price.perPax.child.amount * flight.detail.price.perPax.child.count).toLocaleString()}</span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <span>Pajak</span>
                                            <span>Rp {flight.detail.price.tax.toLocaleString()}</span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <span>Biaya transaksi dan lainnya</span>
                                            <span>Rp {(flight.detail.price.iwjr + flight.detail.price.fee2 + flight.detail.price.other_price).toLocaleString()}</span>
                                        </div>
                                        <hr className="my-3" />
                                        <div className="d-flex justify-content-between">
                                            <span className='font-weight-bold'>Total Bayar</span>
                                            <span className='font-weight-bold text-primary'>Rp {flight.detail.price.total.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                        </TabContent>
                    }
                </div>
            </div>
        </div >
    );
}

CardFlight.propTypes = {
    flight: PropTypes.object
}

export default CardFlight;