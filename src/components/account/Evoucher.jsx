import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import userApi from '@/api/user';
import generatePDF, { Resolution, Margin } from 'react-to-pdf';
import Image from 'next/image';
import { Icon } from "@iconify/react";
import styled from "styled-components";

function Evoucher() {
    const { access_token } = useSelector((state) => state.token);
    const router = useRouter();
    const [purchase, setPurchase] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (router.isReady) {
            userApi.getPurchase(access_token, { key: router.query.id }).then((res) => {
                if (res.success) {
                    setPurchase(res.data);
                }
                setLoading(false);
            });
        }
    }, [router.query.id]);

    if (loading) {
        return (
            <div
                style={{
                    top: '0',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                }}
                className="d-flex flex-column align-items-center justify-content-center"
            >
                <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/pulse-spinner.svg" />
                <h4>Sedang menyiapkan data...</h4>
            </div>
        );
    }

    if (!purchase) {
        return (
            <div
                style={{
                    top: '0',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                }}
                className="d-flex flex-column align-items-center justify-content-center"
            >
                <h4>Data evoucher tidak ditemukan</h4>
            </div>
        );
    }

    const renderStar = () => {
        let arr = [];
        for (let index = 0; index < Number(purchase.class); index++) {
            arr[index] = index;
        }
        return arr.map(() => (<i className="text-warning fa fa-star" />))
    }

    const options = {
        method: 'save',
        resolution: Resolution.HIGH,
        page: {
            margin: Margin.SMALL,
            format: 'A4',
            orientation: 'portrait',
        },
        canvas: {
            mimeType: 'image/jpeg',
            qualityRatio: 1
        },
        overrides: {
            pdf: {
                compress: true
            },
            canvas: {
                useCORS: false
            }
        },
    };

    const handleGeneratePDF = () => {
        setLoading(true);
        generatePDF(getTargetElement, options).then(() => setLoading(false));
    };

    const getTargetElement = () => document.getElementById('content-id');

    return (
        <>
            {purchase?.status?.id === 15 || purchase?.status?.id === 9 || purchase?.status?.id === 7 || purchase?.status?.id === 5  ?
                <>
                    <div className='bg-white'>
                        <br />
                        <center className='mb-3'>
                            <button onClick={handleGeneratePDF} className="btn btn-primary btn-block" style={{ width: 'auto' }}>Download E-Voucher</button>
                        </center>
                        <div id="content-id">
                            <div className='p-5'>
                                <div className='row'>
                                    <div className="col-md-6">
                                        <p style={{ fontSize: '45px', fontWeight: '600' }}>Voucher
                                            {purchase.product === 'hotel' ?
                                                <> Hotel</>
                                                :
                                                purchase.product === 'flight' ?
                                                    <> Flight</>
                                                    :
                                                    <> Train</>
                                            }
                                        </p>
                                        <br /><br />
                                    </div>
                                    <div className="col-md-4">
                                    </div>
                                    <div className="col-md-2">
                                        <Image src='https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/masterdiskon_logo.png' layout='fill' alt="Image Masterdiskon" />
                                    </div>
                                </div>
                                {purchase.product === 'hotel' ?
                                    <>
                                        <div className="d-flex">
                                            <Image src={purchase.image} alt="Gambar Masterdiskon" width={100} height={100} className='rounded' />
                                            <div className='mt-3 ml-3'>
                                                <p style={{ fontSize: '28px', fontWeight: '600' }}>
                                                    <span className='mr-3 mb-4'>{purchase.name}</span>
                                                    {renderStar()}
                                                </p>
                                                <small style={{ fontSize: '21px' }}>{purchase.detail.address}, </small>
                                                <small style={{ fontSize: '21px' }}>{purchase.detail.city}</small>
                                            </div>
                                        </div>
                                        <hr className='mt-4 mb-4' />
                                        <div className='row'>
                                            <div className="col-md-3">
                                                <p style={{ fontSize: '24px', fontWeight: '500' }}><Icon icon='ph:calendar-check-duotone' className="mr-2 text-primary"></Icon> Check-in</p>
                                                <p style={{ fontSize: '24px', fontWeight: '600' }}>{purchase.period.dateFrom}</p>
                                            </div>
                                            <div className="col-md-3">
                                                <p style={{ fontSize: '24px', fontWeight: '500' }}><Icon icon='ph:calendar-check-duotone' className="mr-2 text-primary"></Icon> Check-out</p>
                                                <p style={{ fontSize: '24px', fontWeight: '600' }}>{purchase.period.dateTo}</p>
                                            </div>
                                            <div className="col-md-3">
                                                <p style={{ fontSize: '24px', fontWeight: '500' }}><Icon icon='mdi:calendar-clock-outline' className="mr-2 text-primary"></Icon> Durasi</p>
                                                <p style={{ fontSize: '24px', fontWeight: '600' }}>{purchase.period.type}</p>
                                            </div>
                                            <div className="col-md-3">
                                                <p style={{ fontSize: '24px', fontWeight: '500' }}>Detail :</p>
                                                <p style={{ fontSize: '24px', fontWeight: '600' }}>{purchase?.room?.numOfRoom} Kamar - {purchase?.room?.numOfAdults} Tamu</p>
                                                <hr />
                                                <small style={{ fontSize: '20px', fontWeight: '600' }} className='text-primary'>{purchase?.options[0].name}</small>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    purchase.product === 'flight' ?
                                    <>
                                        <div className="row">
                                            {purchase?.detail?.returnFlight ?
                                                <>
                                                    <div className="col-md-4">
                                                        {purchase?.detail?.onwardFlight?.flight.map(fl => (
                                                            <>
                                                                <div>
                                                                    <span className="font-weight-bold">Departure <br />
                                                                        <small>
                                                                            {purchase?.detail?.onwardFlight?.date}
                                                                        </small>
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <div className="d-flex font-weight-bold">
                                                                        <Image src={fl.image} alt={fl.name} width={100} height={100} />
                                                                        <div className='ml-3 mt-4'>
                                                                            <span>{fl.name}</span><br />
                                                                            <small>{fl.code} - {fl.class}</small>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        ))}
                                                        {purchase?.detail?.returnFlight?.flight.map(fl => (
                                                            <>
                                                                <hr />
                                                                <div>
                                                                    <span className="font-weight-bold">Return <br />
                                                                        <small>
                                                                            {purchase?.detail?.returnFlight?.date}
                                                                        </small>
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <div className="d-flex font-weight-bold">
                                                                        <Image src={fl.image} alt={fl.name} width={100} height={100} />
                                                                        <div className='ml-3 mt-4'>
                                                                            <span>{fl.name}</span><br />
                                                                            <small>{fl.code} - {fl.class}</small>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        ))}
                                                    </div>
                                                    <div className="col-md-6">
                                                        {purchase?.detail?.onwardFlight?.flight.map(fl => (
                                                            <>
                                                                <div className="row align-items-center mt-3">
                                                                    <div className="col-12">
                                                                        <TimeLineStyled className="mb-2">
                                                                            <>
                                                                                <li>
                                                                                    <p className="mb-0">
                                                                                        <b className="mr-2"> {fl.departure.time}</b>- {fl.departure.date}
                                                                                        <br />
                                                                                        <small>
                                                                                            {fl.departure.code} - {fl.departure.name} {(fl.departure.terminal !== '0' && fl.departure.terminal !== '*' && fl.departure.terminal !== undefined) && `Terminal ${fl.departure.terminal}`}
                                                                                        </small>
                                                                                    </p>
                                                                                    <p className="py-2 mb-0">
                                                                                        <Icon icon="pepicons-print:rewind-time" className="mr-2 text-primary" />
                                                                                        {fl.flyTime}
                                                                                    </p>
                                                                                </li>
                                                                                <li>
                                                                                    <p className="mb-0">
                                                                                        <b className="mr-2">  {fl.arrival.time}</b>- {fl.arrival.date}
                                                                                        <br />
                                                                                        <small>{fl.arrival.code} - {fl.arrival.name} {(fl.arrival.terminal !== '0' && fl.arrival.terminal !== '*' && fl.arrival.terminal !== undefined) && `Terminal ${fl.arrival.terminal}`}</small>
                                                                                    </p>
                                                                                </li>
                                                                            </>
                                                                        </TimeLineStyled>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        ))}
                                                        {purchase?.detail?.returnFlight?.flight.map(fl => (
                                                            <>
                                                                <hr />
                                                                <div className="row align-items-center mt-3">
                                                                    <div className="col-12">
                                                                        <TimeLineStyled className="mb-2">
                                                                            <>
                                                                                <li>
                                                                                    <p className="mb-0">
                                                                                        <b className="mr-2"> {fl.departure.time}</b>- {fl.departure.date}
                                                                                        <br />
                                                                                        <small>
                                                                                            {fl.departure.code} - {fl.departure.name} {(fl.departure.terminal !== '0' && fl.departure.terminal !== '*' && fl.departure.terminal !== undefined) && `Terminal ${fl.departure.terminal}`}
                                                                                        </small>
                                                                                    </p>
                                                                                    <p className="py-2 mb-0">
                                                                                        <Icon icon="pepicons-print:rewind-time" className="mr-2 text-primary" />
                                                                                        {fl.flyTime}
                                                                                    </p>
                                                                                </li>
                                                                                <li>
                                                                                    <p className="mb-0">
                                                                                        <b className="mr-2">  {fl.arrival.time}</b>- {fl.arrival.date}
                                                                                        <br />
                                                                                        <small>{fl.arrival.code} - {fl.arrival.name} {(fl.arrival.terminal !== '0' && fl.arrival.terminal !== '*' && fl.arrival.terminal !== undefined) && `Terminal ${fl.arrival.terminal}`}</small>
                                                                                    </p>
                                                                                </li>
                                                                            </>
                                                                        </TimeLineStyled>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        ))}
                                                    </div>
                                                    <div className='col-md-2'>
                                                        <div className='mt-3'>
                                                            <small>Detail : </small>
                                                            <p style={{ fontSize: '20px', fontWeight: '600' }}>
                                                                {purchase?.guest?.length}
                                                                {purchase.product === 'hotel' ?
                                                                    <> Tamu</>
                                                                    :
                                                                    <> Penumpang</>
                                                                }
                                                            </p>
                                                            <hr />
                                                            <div>
                                                                <small>Kode Booking (PNR) : </small>
                                                                <p style={{ fontSize: '20px', fontWeight: '600' }} className='text-primary'>{purchase?.detail?.onwardFlight?.pnrCode}</p>
                                                            </div>
                                                            <hr />
                                                            <div>
                                                                <small>Status Booking : </small>
                                                                <p style={{ fontSize: '20px', fontWeight: '600' }} className='text-success'>{purchase?.status?.vendor}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                                :
                                                <>
                                                    <div className="col-md-4">
                                                        {purchase?.detail?.onwardFlight?.flight.map(fl => (
                                                            <>
                                                                <div>
                                                                    <span className="font-weight-bold">Departure <br />
                                                                        <small>
                                                                            {purchase?.detail.onwardFlight.date}
                                                                        </small>
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex font-weight-bold">
                                                                    <Image src={fl.image} alt={fl.name} width={100} height={100} />
                                                                    <div className='ml-3 mt-4'>
                                                                        <span>{fl.name}</span><br />
                                                                        <small>{fl.code} - {fl.class}</small>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        ))}
                                                    </div>
                                                    <div className="col-md-6">
                                                        {purchase?.detail?.onwardFlight?.flight.map(fl => (
                                                            <>
                                                                <div className="row align-items-center mt-3">
                                                                    <div className="col-12">
                                                                        <TimeLineStyled className="mb-2">
                                                                            <>
                                                                                <li>
                                                                                    <p className="mb-0">
                                                                                        <b className="mr-2"> {fl.departure.time}</b>- {fl.departure.date}
                                                                                        <br />
                                                                                        {fl.departure.code} - {fl.departure.name} {(fl.departure.terminal !== '0' && fl.departure.terminal !== '*' && fl.departure.terminal !== undefined) && `Terminal ${fl.departure.terminal}`}
                                                                                    </p>
                                                                                    <p className="py-2 mb-0">
                                                                                        <Icon icon="pepicons-print:rewind-time" className="mr-2 text-primary" />
                                                                                        {fl.flyTime}
                                                                                    </p>
                                                                                </li>
                                                                                <li className>
                                                                                    <p className="mb-0">
                                                                                        <b className="mr-2">  {fl.arrival.time}</b>- {fl.arrival.date}
                                                                                        <br />
                                                                                        {fl.arrival.code} - {fl.arrival.name} {(fl.arrival.terminal !== '0' && fl.arrival.terminal !== '*' && fl.arrival.terminal !== undefined) && `Terminal ${fl.arrival.terminal}`}
                                                                                    </p>
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
                                                    <div className='col-md-2'>
                                                        <div className='mt-3'>
                                                            <small>Detail : </small>
                                                            <p style={{ fontSize: '20px', fontWeight: '600' }}>
                                                                {purchase?.guest?.length}
                                                                {purchase.product === 'hotel' ?
                                                                    <> Tamu</>
                                                                    :
                                                                    <> Penumpang</>
                                                                }
                                                            </p>
                                                            <hr />
                                                            <div>
                                                                <small>Kode Booking (PNR) : </small>
                                                                <p style={{ fontSize: '20px', fontWeight: '600' }} className='text-primary'>{purchase?.detail?.onwardFlight?.pnrCode}</p>
                                                            </div>
                                                            <hr />
                                                            <div>
                                                                <small>Status Booking : </small>
                                                                <p style={{ fontSize: '20px', fontWeight: '600' }} className='text-success'>{purchase?.status?.vendor}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            }
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className="row mt-3">
                                            {purchase.bookingDetail?.journey_type === 'RT' ?
                                                <>
                                                    <div className="col-md-4">
                                                        <div>
                                                            <p className="font-weight-bold">Departure <br />
                                                                <small>
                                                                    {purchase.options?.dataSchedule?.tgl_keberangkatan}
                                                                </small>
                                                            </p>
                                                        </div>
                                                        <div className="d-flex align-items-center mt-3">
                                                            <Image src={purchase.image} alt="Gambar Masterdiskon" width={80} height={35} />
                                                            <p className="font-weight-bold ml-3 mt-2">
                                                                {purchase.options?.dataSchedule?.nama_kereta} ({purchase.options?.dataSchedule?.no_kereta}) <br />
                                                                <small>
                                                                    {purchase.options?.dataSchedule?.kelas_kereta} (Subclass {purchase.options?.dataSchedule?.tipe_kereta})
                                                                </small>
                                                            </p>
                                                        </div>
                                                        {purchase.bookingDetail?.journey_type === 'RT' ?
                                                            <>
                                                                <hr />
                                                                <div>
                                                                    <p className="font-weight-bold">Return <br />
                                                                        <small>
                                                                            {purchase.options?.dataScheduleReturn?.tgl_tiba}
                                                                        </small>
                                                                    </p>
                                                                </div>

                                                                <div className="d-flex align-items-center mt-3">
                                                                    <Image src={purchase.image} alt="Gambar Masterdiskon" width={80} height={35} />
                                                                    <p className="font-weight-bold ml-3 mt-2">
                                                                        {purchase.options?.dataScheduleReturn?.nama_kereta} ({purchase.options?.dataScheduleReturn?.no_kereta}) <br />
                                                                        <small>
                                                                            {purchase.options?.dataScheduleReturn?.kelas_kereta} (Subclass {purchase.options?.dataScheduleReturn?.tipe_kereta})
                                                                        </small>
                                                                    </p>
                                                                </div>
                                                            </>
                                                            : ''
                                                        }
                                                    </div>
                                                    <div className="col-md-6">
                                                        <TimeLineStyled className="mb-2">
                                                            <>
                                                                <li>
                                                                        <p className="mb-0">
                                                                            <b className="mr-2">{purchase.options?.dataSchedule?.waktu_keberangkatan}</b>
                                                                            <br />
                                                                            <small>{purchase.options?.dataSchedule?.asal_kota}, {purchase.options?.dataSchedule?.stasiun_awal} Station</small>
                                                                        </p>
                                                                    <p className="pt-3"><Icon icon='pepicons-print:rewind-time' className="mr-2 text-primary" />{purchase.options?.dataSchedule?.durasi_perjalanan}</p>
                                                                </li>
                                                                <li className>
                                                                    <p className="mb-0"><b className="mr-2">{purchase.options?.dataSchedule?.waktu_tiba}</b> <small>{purchase.options?.dataSchedule?.tujuan}, {purchase.options?.dataSchedule?.stasiun_akhir} Station</small></p>
                                                                </li>
                                                            </>
                                                        </TimeLineStyled>
                                                        {purchase.bookingDetail?.journey_type === 'RT' ?
                                                            <>
                                                                <hr />
                                                                <TimeLineStyled className="mb-2">
                                                                    <>
                                                                        <li>
                                                                            <p className="mb-0">
                                                                                <b className="mr-2">{purchase.options?.dataScheduleReturn?.waktu_keberangkatan}</b>
                                                                                <br />
                                                                                <small>{purchase.options?.dataScheduleReturn?.asal_kota}, {purchase.options?.dataScheduleReturn?.stasiun_awal} Station</small>
                                                                            </p>
                                                                            <p className="pt-3"><Icon icon='pepicons-print:rewind-time' className="mr-2 text-primary" />{purchase.options?.dataScheduleReturn?.durasi_perjalanan}</p>
                                                                        </li>
                                                                        <li className>
                                                                            <p className="mb-0"><b className="mr-2">{purchase.options?.dataScheduleReturn?.waktu_tiba}</b> <small>{purchase.options?.dataScheduleReturn?.tujuan}, {purchase.options?.dataScheduleReturn?.stasiun_akhir} Station</small></p>
                                                                        </li>
                                                                    </>
                                                                </TimeLineStyled>
                                                            </>
                                                            : ''
                                                        }
                                                        </div>
                                                        <div className='col-md-2'>
                                                            <div className='mt-3'>
                                                                <small>Detail : </small>
                                                                <p style={{ fontSize: '20px', fontWeight: '600' }}>
                                                                    {purchase?.guest?.length}
                                                                    {purchase.product === 'hotel' ? 
                                                                        <> Tamu</>
                                                                        :
                                                                        <> Penumpang</>
                                                                    }
                                                                </p>
                                                                <hr />
                                                                <div>
                                                                    <small>Kode Booking : </small>
                                                                    <p style={{ fontSize: '20px', fontWeight: '600' }} className='text-primary'>{purchase?.kodeBooking}</p>
                                                                </div>
                                                                <hr />
                                                                <div>
                                                                    <small>Status Booking : </small>
                                                                    <p style={{ fontSize: '20px', fontWeight: '600' }} className='text-success'>{purchase?.statusBooking}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                </>
                                                :
                                                <>
                                                    <div className="col-md-4">
                                                        <div>
                                                            <p className="font-weight-bold">Departure <br />
                                                                <small>
                                                                    {purchase.options?.dataSchedule?.tgl_keberangkatan}
                                                                </small>
                                                            </p>
                                                        </div>
                                                        <div className="d-flex align-items-center mt-3">
                                                            <Image src={purchase.image} alt="Gambar Masterdiskon" width={80} height={35} />
                                                            <p className="font-weight-bold ml-3 mt-2">
                                                                {purchase.options?.dataSchedule?.nama_kereta} ({purchase.options?.dataSchedule?.no_kereta}) <br />
                                                                <small>
                                                                    {purchase.options?.dataSchedule?.kelas_kereta} (Subclass {purchase.options?.dataSchedule?.tipe_kereta})
                                                                </small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <TimeLineStyled className="mb-2">
                                                            <>
                                                                <li>
                                                                    <p className="mb-0">
                                                                        <b className="mr-2">{purchase.options?.dataSchedule?.waktu_keberangkatan}</b>
                                                                        <br />
                                                                        <small>{purchase.options?.dataSchedule?.asal_kota}, {purchase.options?.dataSchedule?.stasiun_awal} Station</small>
                                                                    </p>
                                                                    <p className="pt-3"><Icon icon='pepicons-print:rewind-time' className="mr-2 text-primary" />{purchase.options?.dataSchedule?.durasi_perjalanan}</p>
                                                                </li>
                                                                <li className>
                                                                    <p className="mb-0"><b className="mr-2">{purchase.options?.dataSchedule?.waktu_tiba}</b> <small>{purchase.options?.dataSchedule?.tujuan}, {purchase.options?.dataSchedule?.stasiun_akhir} Station</small></p>
                                                                </li>
                                                            </>
                                                        </TimeLineStyled>
                                                    </div>
                                                    <div className='col-md-2'>
                                                        <div className='mt-3'>
                                                            <small>Detail : </small>
                                                            <p style={{ fontSize: '20px', fontWeight: '600' }}>
                                                                {purchase?.guest?.length}
                                                                {purchase.product === 'hotel' ?
                                                                    <> Tamu</>
                                                                    :
                                                                    <> Penumpang</>
                                                                }
                                                            </p>
                                                            <hr />
                                                            <div>
                                                                <small>Kode Booking : </small>
                                                                <p style={{ fontSize: '20px', fontWeight: '600' }} className='text-primary'>{purchase?.kodeBooking}</p>
                                                            </div>
                                                            <hr />
                                                            <div>
                                                                <small>Status Booking : </small>
                                                                <p style={{ fontSize: '20px', fontWeight: '600' }} className='text-success'>{purchase?.statusBooking}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            }
                                        </div>
                                    </>
                                }
                                <hr />
                                <div>
                                    {purchase.product === 'hotel' ?
                                        <>
                                            <div className='row mt-4'>
                                                <div className="col-md-4 d-flex">
                                                    <div>
                                                        <Icon icon='fluent-emoji-high-contrast:ticket' style={{ fontSize: '45px' }} className="text-primary mr-3 mt-1"></Icon>
                                                    </div>
                                                    <div>
                                                        <small>Tunjukkan eVoucher / eTicket dan identitas para tamu saat check-in</small>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 d-flex">
                                                    <div>
                                                        <Icon icon='ant-design:field-time-outlined' style={{ fontSize: '45px' }} className="text-primary mr-3 mt-1"></Icon>
                                                    </div>
                                                    <div>
                                                        <small>Pastikan anda sudah berada di hotel <b>Paling Lambat 60 Menit</b> sebelum check-in</small>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 d-flex">
                                                    <div>
                                                        <Icon icon='solar:sort-by-time-line-duotone' style={{ fontSize: '45px' }} className="text-primary mr-3 mt-1"></Icon>
                                                    </div>
                                                    <div>
                                                        <small>Waktu yang tertera di eVoucher / eTicket adalah waktu hotel setempat</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                        :
                                        purchase.product === 'flight' ?
                                        <>
                                            <div className='row mt-4'>
                                                <div className="col-md-4 d-flex">
                                                    <div>
                                                        <Icon icon='fluent-emoji-high-contrast:ticket' style={{ fontSize: '45px' }} className="text-primary mr-3 mt-1"></Icon>
                                                    </div>
                                                    <div>
                                                        <small>Tunjukkan eVoucher / eTicket dan identitas para penumpang saat di bandara</small>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 d-flex">
                                                    <div>
                                                        <Icon icon='ant-design:field-time-outlined' style={{ fontSize: '45px' }} className="text-primary mr-3 mt-1"></Icon>
                                                    </div>
                                                    <div>
                                                        <small>Pastikan anda sudah berada di bandara <b>Paling Lambat 90 Menit</b> sebelum keberangkatan</small>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 d-flex">
                                                    <div>
                                                        <Icon icon='solar:sort-by-time-line-duotone' style={{ fontSize: '45px' }} className="text-primary mr-3 mt-1"></Icon>
                                                    </div>
                                                    <div>
                                                        <small>Waktu yang tertera di eVoucher / eTicket adalah waktu bandara setempat</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className='row mt-4'>
                                                <div className="col-md-4 d-flex">
                                                    <div>
                                                        <Icon icon='fluent-emoji-high-contrast:ticket' style={{ fontSize: '45px' }} className="text-primary mr-3 mt-1"></Icon>
                                                    </div>
                                                    <div>
                                                        <small>Tunjukkan eVoucher / eTicket dan untuk naik kereta, bawalah dokumen identitas resmi Anda seperti yang digunakan dalam pemesanan</small>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 d-flex">
                                                    <div>
                                                        <Icon icon='ant-design:field-time-outlined' style={{ fontSize: '45px' }} className="text-primary mr-3 mt-1"></Icon>
                                                    </div>
                                                    <div>
                                                        <small>Pastikan anda sudah berada di stasiun <b>Paling Lambat 60 Menit</b> sebelum keberangkatan</small>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 d-flex">
                                                    <div>
                                                        <Icon icon='solar:sort-by-time-line-duotone' style={{ fontSize: '45px' }} className="text-primary mr-3 mt-1"></Icon>
                                                    </div>
                                                    <div>
                                                        <small>Menggunakan e-tiket untuk mencetak boarding pass stasiun, paling lambat 7x24 jam sebelum keberangkatan</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    }
                                </div>
                                <hr />
                                <br />
                                <div>
                                    <p style={{ fontSize: '28px', fontWeight: '600' }}>
                                        Detail
                                        {purchase.product === 'hotel' ?
                                            <> Tamu</>
                                            :
                                            <> Penumpang</>
                                        }
                                    </p>
                                    <br />
                                    <table class="table table-bordered">
                                        <thead className='bg-primary text-white'>
                                            <tr>
                                                <th>No</th>
                                                <th>Nama Lengkap</th>
                                                <th>Tanggal Lahir</th>
                                                <th>Nomor Identitas</th>
                                                {purchase.guest[0]?.type &&
                                                    <th>Tipe</th>
                                                }
                                                {purchase.guest[0]?.seatNumberDeparture &&
                                                    <th>Nomor Kursi</th>
                                                }
                                                {purchase.guest[0]?.passport?.nat &&
                                                    <th>Negara</th>
                                                }
                                                {purchase.guest[0]?.nationality &&
                                                    <th>Negara</th>
                                                }
                                                {purchase.guest[0]?.ssr &&
                                                    <th>Tambahan</th>
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {purchase.guest.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{++index}</td>
                                                    <td>{item?.title} {item.firstName} {item.lastName}</td>
                                                    <td>{item.dob}</td>
                                                    <td>{item.identificationNumber}</td>
                                                    {item?.type &&
                                                        <td>{item.type === "adt" ? "Dewasa" : item.type === "chd" ? "Anak" : item.type === "inf" ? "Bayi" : ""}</td>
                                                    }
                                                    {item?.passport?.nat &&
                                                        <td>{item?.passport?.nat}</td>
                                                    }
                                                    {item?.seatNumberDeparture &&
                                                        <td>
                                                            <div className='d-flex'>
                                                                <small>
                                                                    Departure <br />
                                                                    <b>{item?.seatNumberDeparture}</b>
                                                                </small>
                                                                {purchase.options?.dataScheduleReturn ?
                                                                    <>
                                                                        <small className='ml-3'>
                                                                            Return <br />
                                                                            <b>{item?.seatNumberReturn}</b>
                                                                        </small>
                                                                    </> : ''
                                                                }
                                                            </div>
                                                        </td>
                                                    }
                                                    {item?.nationality &&
                                                        <td>{item?.nationality}</td>
                                                    }
                                                    {item?.ssr &&
                                                        <td><button onClick={() => handleOpenSsr(item.ssr)} type="button" className="btn btn-sm btn-primary">Check</button></td>
                                                    }
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <br />
                                <hr />
                                <div className='row mt-4'>
                                    <div className="col-md-4 d-flex">
                                        <div>
                                            <Icon icon='mdi:customer-service' style={{ fontSize: '45px' }} className="text-primary mr-3 mt-1"></Icon>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '22px', fontWeight: '600' }}>Customer Service (ID)</p>
                                            <p style={{ fontSize: '28px', fontWeight: '500' }}>0822-1100-3535</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <p style={{ fontSize: '22px', fontWeight: '600' }}>Email Customer Service</p>
                                        <p style={{ fontSize: '28px', fontWeight: '500' }}>cs@masterdiskon.com</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p style={{ fontSize: '22px', fontWeight: '600' }}>No. Pesanan</p>
                                        <p style={{ fontSize: '28px', fontWeight: '600' }} className='text-primary'>
                                            {purchase.product === 'hotel' ?
                                                <>{purchase.codev}</>
                                                :
                                                purchase.product === 'flight' ?
                                                    <>{purchase.code}</>
                                                    :
                                                    <>{purchase.codev}</>
                                            }
                                        </p>
                                    </div>
                                </div>
                                <br />
                                <hr />
                                <div className='row mt-4'>
                                    <div className="col-md-12">
                                        <p style={{ fontSize: '28px', fontWeight: '600' }}>Kebijakan Pembatalan</p>
                                        <ul style={{ marginLeft: '-15px' }}>
                                            <li>
                                                <small style={{ fontSize: '24px', marginLeft: '10px' }}> Pemesanan ini tidak dapat di refund</small>
                                            </li>
                                            <br />
                                            <li>
                                                <small style={{ fontSize: '24px', marginLeft: '10px' }}> Waktu yang ditampilkan sesuai dengan waktu schedule, Tanggal tidak dapat diubah</small>
                                            </li>
                                            <br />
                                            <li>
                                                <small style={{ fontSize: '24px', marginLeft: '10px' }}> Prosedur refund dapat dilihat secara lengkap di www.masterdiskon.com/kebijakan/pembatalan</small>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='row mt-5 bg-light p-3'>
                                    <div className="col-md-6">
                                        <p style={{ fontSize: '24px', fontWeight: '600' }} className='mt-2'>PT Master Diskon Internasional</p>
                                        <p style={{ fontSize: '20px', }}>
                                            Alamanda Tower <br />
                                            Jl. TB Simatupang No. 22 - 26 Lt. 20 Unit F <br />
                                            Cilandak, Kota Jakarta Selatan, DKI Jakarta 12430
                                        </p>
                                    </div>
                                    <div className='col-md-6'>
                                        <p style={{ fontSize: '26px', fontWeight: '500' }} className='mt-3'>Dapatkan harga spesial dengan Masterdiskon App</p>
                                        <p style={{ fontSize: '22px', fontWeight: '500' }}>Pesan pakai Masterdiskon App dan dapatkan harga spesial setiap harinya</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                :
                <>
                    <div
                        style={{
                            height: '50vh',
                            marginBottom: '5rem'
                        }}
                        className="d-flex flex-column align-items-center justify-content-center"
                    >
                        <h4>Data pesanan tidak ditemukan</h4>
                    </div>
                </>
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

export default Evoucher;
