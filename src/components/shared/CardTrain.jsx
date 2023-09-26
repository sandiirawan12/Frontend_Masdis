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
            border: '1px solid #f8f9fa',
            borderRadius: '20px',
        }}>
            <div className="card-body p-2-sm pb-0">
                <div className="row mb-3">
                    <div className="col-md-2">
                        {isLoading ?
                            <ReactPlaceholder type='rect' showLoadingAnimation />
                            : <>
                                <ThumnailStyled>
                                    <Image layout='fill' placeholder='blur' objectFit='contain' blurDataURL src='https://cdn.masterdiskon.com/masterdiskon/img/kai-logo.png' alt={train.nama_kereta} />
                                </ThumnailStyled>
                            </>
                        }
                    </div>
                    <div className="col-md-8">
                        {isLoading ?
                            <ReactPlaceholder type='text' widths={[120]} style={{
                                marginLeft: '10px'
                            }} showLoadingAnimation />
                            :
                            <>
                            <div className="row">
                                <div className="col-4">
                                    <div>
                                        <p className="mt-3 font-weight-bold">{train.nama_kereta} ({train.no_kereta})</p>
                                        <span>{train.kelas_kereta} (Class {train.tipe_kereta})</span>
                                    </div>
                                </div>
                                <div className="col-8 d-flex justify-content-center align-items-center">
                                    <div className='mr-3 text-center'>
                                        <p className="mb-0">{train.waktu_keberangkatan}</p> <br />
                                        <span className='font-weight-bold'>{train.asal_kota}</span>
                                    </div>
                                    <div className="text-center mr-3">
                                        <span className='font-weight-bold'>{train.durasi_perjalanan}</span>
                                        <div style={{ borderBottom: '2px dashed #1c7ecc' }} className='mt-2 mb-2' />
                                        <span>Langsung</span>
                                    </div>
                                    <div className='mrl3 text-center'>
                                        <p className="mb-0">{train.waktu_tiba}</p> <br />
                                        <span className='font-weight-bold'>{train.tujuan}</span>
                                    </div>
                                </div>
                            </div>
                            </>
                        }
                    </div>
                    <div className="col-md-2 text-right">
                        {isLoading ?
                            <div className='d-flex justify-content-center align-items-center'>
                                
                            </div>
                            : <>
                                <h5 className="mt-1">
                                    <span className="text-primary text-md font-weight-bold">
                                        Rp {train.harga_tiket_dewasa.toLocaleString().replaceAll(',', '.')}
                                    </span>
                                </h5>
                                {
                                    train.status.kursi === 'Tersedia' && train.status.keberangkatan === 'Tersedia' && train.status.kepulangan === 'Tersedia'
                                    ?
                                    <div>
                                        <small>
                                            Sisa {train.ketersediaan_kursi} kursi
                                        </small>
                                        <button type='button' onClick={() => handleSelected(train)} className="btn btn-md rounded btn-warning mt-2"><b>Pilih</b></button>
                                    </div>
                                    :
                                    <div>
                                        <p style={{fontSize: '17px'}} className='text-danger mt-3'>
                                            Tidak tersedia seat
                                        </p>
                                    </div>
                                }
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
                                    })} onClick={() => handleChangeTab(1)}>Train Details</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='text-dark'>Termasuk pajak dan biaya transaksi</NavLink>
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
                                                    <div className='d-flex justify-content-between align-items-center'>
                                                        <p style={{width: '200px'}}>{train.nama_kereta} (Dewasa) x 1</p>
                                                        <p className="font-weight-bold text-danger">Rp{train.harga_tiket_dewasa.toLocaleString().replaceAll(',', '.')}</p>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className='col-md-6'>
                                            Info Keberangkatan : <br />
                                            <p className='text-primary'>
                                                {train.info_keberangkatan}
                                            </p>
                                        </div>
                                        <div className='col-md-6'>
                                            Note : <br />
                                            <p className='text-primary'>
                                                Tersedia {train.ketersediaan_kursi} seat
                                            </p>
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

CardTrain.propTypes = {
    train: PropTypes.object
}

export default CardTrain;