import { Icon } from '@iconify/react';
import styled from 'styled-components';
import { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classNames from 'classnames';
import Image from 'next/image';
import PropTypes from 'prop-types'
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
        background-color: #fff;
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


function CardTrain(props) {
    const { train, isLoading, handleSelected } = props
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
            borderRadius: '20px',
        }}>
            <div className="card-body p-1-sm">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        {isLoading ?
                            <ReactPlaceholder type='rect' style={{ height: '20px', width: '150px' }} showLoadingAnimation ready={!isLoading} />
                            :
                            <>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <img src="https://cdn.masterdiskon.com/masterdiskon/img/kai-logo.png" alt="Gambar Masterdiskon" style={{ width: '75px', height: '35px' }} className='mx-2' />
                                    </div>
                                    <span className="ml-2"><b>{train.nama_kereta}</b> - {train.no_kereta} - <span>{train.kelas_kereta} (Class {train.tipe_kereta})</span></span>
                                </div>
                            </>
                        }
                    </div>
                    <div>
                        {isLoading ?
                            <ReactPlaceholder type='rect' style={{ height: '20px', width: '50px' }} showLoadingAnimation ready={!isLoading} />
                            :
                            <>
                                {train.ketersediaan_kursi > 50 ?
                                    <>
                                        <span className="badge bg-light p-1 text-primary" style={{ marginTop: '-5px', fontSize: '16px' }}>
                                            Tersedia
                                        </span>
                                    </>
                                    :
                                    <>
                                        <span className="badge bg-light p-1 text-primary" style={{ marginTop: '-5px', fontSize: '16px' }}>
                                            <Icon icon="fluent-emoji:seat" className='mr-2' /> Sisa {train.ketersediaan_kursi} Kursi
                                        </span>
                                    </>
                                }
                            </>
                        }
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-4 mb-1">
                    <div>
                        {isLoading ?
                            <ReactPlaceholder type='rect' style={{ height: '20px', width: '300px' }} showLoadingAnimation ready={!isLoading} />
                            :
                            <>
                                <div className="d-flex align-items-center text-center">
                                    <div>
                                        <span className='font-weight-bold text-primary' style={{ fontSize: '22px' }}>{train.waktu_keberangkatan}</span>
                                        <p>{train.stasiun_awal}</p>
                                    </div>
                                    <div className='mx-3'>
                                        <span style={{ fontSize: '15px' }}>{train.durasi_perjalanan} - Langsung</span>
                                        <p>{train.code_station_awal} <Icon icon="solar:arrow-right-line-duotone" className='text-primary' /> {train.code_station_akhir}</p>
                                    </div>
                                    <div>
                                        <span className='font-weight-bold text-primary' style={{ fontSize: '22px' }}>{train.waktu_tiba}</span>
                                        <p>{train.stasiun_akhir}</p>
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
                                    <span className='font-weight-bold text-danger' style={{ fontSize: '20px' }}>Rp {train.harga_tiket_dewasa.toLocaleString().replaceAll(',', '.')}</span>
                                    <br />
                                    <small>Per Dewasa ( {train.harga_tiket_dewasa.toLocaleString()} + pajak)</small>
                                </div>
                            </>
                        }
                    </div>
                    <div>
                        {isLoading ?
                            <ReactPlaceholder type='rect' style={{ height: '20px', width: '100px' }} showLoadingAnimation ready={!isLoading} />
                            :
                            <>
                                {train?.status?.keberangkatan === 'Tersedia' || train?.status?.kepulangan === 'Tersedia' && train?.status?.kursi === 'Tersedia' ?
                                    <>
                                        <button type='button' onClick={() => handleSelected(train)} className="btn btn-md rounded btn-warning mt-2"><b>Pilih</b></button>
                                    </>
                                    :
                                    <></>
                                }
                            </>
                        }
                    </div>
                </div>
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
                                })} onClick={() => handleChangeTab(1)}>Rincian Perjalanan</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='text-dark'><small>Termasuk pajak dan biaya transaksi</small></NavLink>
                            </NavItem>
                        </Nav>
                    }
                    {
                        !isLoading &&
                        <TabContent activeTab={tabActive}>
                            <TabPane tabId={1}>
                                <div className="card-body my-0 border-top">
                                    <div className="row mt-2 mb-1">
                                        <div className="col-md-6">
                                            <TimeLineStyled>
                                                <li>
                                                    <div className='d-flex'>
                                                        <p className="mb-0">
                                                            <b className="fs-med">{train.waktu_keberangkatan}</b><br />
                                                            {train.tgl_keberangkatan}
                                                        </p>
                                                        <span className='ml-3'>
                                                            {train.asal_kota} <br />
                                                            {train.stasiun_awal}
                                                        </span>
                                                    </div>
                                                    <div className="media">
                                                        <div className="media-body mt-3 mb-3">
                                                            <span><Icon icon='carbon:train-time' className='mr-3 text-primary' style={{ fontSize: '26px' }} /> {train.durasi_perjalanan}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='d-flex'>
                                                        <p className="mb-0">
                                                            <b className="fs-med">{train.waktu_tiba}</b><br />
                                                            {train.tgl_tiba}
                                                        </p>
                                                        <span className='ml-3'>
                                                            {train.tujuan} <br />
                                                            {train.stasiun_akhir}
                                                        </span>
                                                    </div>
                                                </li>
                                            </TimeLineStyled>
                                        </div>
                                        <div className="col-md-6">
                                            <p className='font-weight-bold text-primary'>Rincian Harga :</p>
                                            <span style={{ width: '200px' }}>{train.nama_kereta}</span>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div>
                                                    <span>
                                                        (Dewasa) x 1
                                                    </span>
                                                </div>
                                                <p className="font-weight-bold text-danger">Rp{train.harga_tiket_dewasa.toLocaleString().replaceAll(',', '.')}</p>
                                            </div>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div>
                                                    <span>
                                                        (Bayi) x 1
                                                    </span>
                                                </div>
                                                <p className="font-weight-bold text-danger">Rp{train.harga_tiket_bayi.toLocaleString().replaceAll(',', '.')}</p>
                                            </div>
                                            <div>
                                                Note : <br />
                                                <p className='text-primary'>
                                                    Tersedia {train.ketersediaan_kursi} seat
                                                </p>
                                            </div>
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

CardTrain.propTypes = {
    train: PropTypes.object
}

export default CardTrain;