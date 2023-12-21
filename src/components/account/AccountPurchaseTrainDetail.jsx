import { Icon } from '@iconify/react';
import styled from "styled-components";

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
        border:1.8px dashed #FFC107;
        left: -18.5px;
        background-color: #E7E7E7;
        top: 3px;
        bottom: 0;
        height: 100px;
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

function AccountPurchaseTrainDetail(props) {
    const { purchase } = props;

    // const renderStar = () => {
    //     let arr = [];
    //     for (let index = 0; index < Number(purchase.class); index++) {
    //         arr[index] = index;
    //     }
    //     return arr.map(() => (<i className="text-warning fa fa-star" />))
    // }

    return (
        <>
            <div className="card" style={{
                borderRadius: '20px',
                boxShadow: '-1px 3px 11px -7px rgba(156,156,156,0.75)',
            }}>
                <div className="card-body">
                    <div className="row">
                        {purchase.bookingDetail?.journey_type === 'OW' ?
                            <>
                                <div className="col-md-12">
                                    <div className="d-flex align-items-center">
                                        <Icon icon='pepicons-print:train' className="text-info mr-3 mt-2" style={{ fontSize: '30px' }}></Icon>

                                        <span className="font-weight-bold">{purchase.options?.dataSchedule?.stasiun_awal}</span>
                                        <Icon icon='fluent:arrow-swap-28-filled' className="text-primary mx-3" style={{ fontSize: '20px' }}></Icon>
                                        <span className="font-weight-bold">{purchase.options?.dataSchedule?.stasiun_akhir}</span>
                                    </div>

                                    <hr />

                                    <div>
                                        <p className="font-weight-bold">Departure <br />
                                            <small>
                                                {purchase.options?.dataSchedule?.tgl_keberangkatan}
                                            </small>
                                        </p>
                                    </div>

                                    <div className="mt-3">
                                        <p className="font-weight-bold">{purchase.options?.dataSchedule?.nama_kereta} ({purchase.options?.dataSchedule?.no_kereta}) <br />
                                            <small>
                                                {purchase.options?.dataSchedule?.kelas_kereta} (Subclass {purchase.options?.dataSchedule?.tipe_kereta})
                                            </small>
                                        </p>
                                    </div>

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
                                                <p className="mb-0">
                                                    <b className="mr-2">{purchase.options?.dataSchedule?.waktu_tiba}</b>
                                                    <br />
                                                    <small>{purchase.options?.dataSchedule?.tujuan}, {purchase.options?.dataSchedule?.stasiun_akhir} Station</small>
                                                </p>
                                            </li>
                                        </>
                                    </TimeLineStyled>
                                </div>
                            </>
                            : 
                            <>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-center">
                                        <Icon icon='pepicons-print:train' className="text-info mr-3 mt-2" style={{ fontSize: '30px' }}></Icon>

                                        <span className="font-weight-bold">{purchase.options?.dataSchedule?.stasiun_awal}</span>
                                        <Icon icon='fluent:arrow-swap-28-filled' className="text-primary mx-3" style={{ fontSize: '20px' }}></Icon>
                                        <span className="font-weight-bold">{purchase.options?.dataSchedule?.stasiun_akhir}</span>
                                    </div>

                                    <hr />

                                    <div>
                                        <p className="font-weight-bold">Departure <br />
                                            <small>
                                                {purchase.options?.dataSchedule?.tgl_keberangkatan}
                                            </small>
                                        </p>
                                    </div>

                                    <div className="mt-3">
                                        <p className="font-weight-bold">{purchase.options?.dataSchedule?.nama_kereta} ({purchase.options?.dataSchedule?.no_kereta}) <br />
                                            <small>
                                                {purchase.options?.dataSchedule?.kelas_kereta} (Subclass {purchase.options?.dataSchedule?.tipe_kereta})
                                            </small>
                                        </p>
                                    </div>

                                    <TimeLineStyled className="mb-2">
                                        <>
                                            <li>
                                                <p className="mb-0">
                                                    <b className="mr-2">{purchase.options?.dataSchedule?.waktu_keberangkatan}</b>
                                                    <br />
                                                    <small>{purchase.options?.dataSchedule?.asal_kota}, {purchase.options?.dataSchedule?.stasiun_awal} Station</small>
                                                </p>
                                                <p className="pt-3">
                                                    <Icon icon='pepicons-print:rewind-time' className="mr-2 text-primary" />
                                                    {purchase.options?.dataSchedule?.durasi_perjalanan}
                                                </p>
                                            </li>
                                            <li className>
                                                <p className="mb-0">
                                                    <b className="mr-2">{purchase.options?.dataSchedule?.waktu_tiba}</b>
                                                    <br />
                                                    <small>{purchase.options?.dataSchedule?.tujuan}, {purchase.options?.dataSchedule?.stasiun_akhir} Station</small>
                                                </p>
                                            </li>
                                        </>
                                    </TimeLineStyled>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-center">
                                        <Icon icon='pepicons-print:train' className="text-danger mr-3 mt-2" style={{ fontSize: '30px' }}></Icon>

                                        <span className="font-weight-bold">{purchase.options?.dataScheduleReturn?.stasiun_awal}</span>
                                        <Icon icon='fluent:arrow-swap-28-filled' className="text-primary mx-3" style={{ fontSize: '20px' }}></Icon>
                                        <span className="font-weight-bold">{purchase.options?.dataScheduleReturn?.stasiun_akhir}</span>
                                    </div>

                                    <hr />

                                    <div>
                                        <p className="font-weight-bold">Return <br />
                                            <small>
                                                {purchase.options?.dataScheduleReturn?.tgl_keberangkatan}
                                            </small>
                                        </p>
                                    </div>

                                    <div className="mt-3">
                                        <p className="font-weight-bold">{purchase.options?.dataScheduleReturn?.nama_kereta} ({purchase.options?.dataScheduleReturn?.no_kereta}) <br />
                                            <small>
                                                {purchase.options?.dataScheduleReturn?.kelas_kereta} (Subclass {purchase.options?.dataScheduleReturn?.tipe_kereta})
                                            </small>
                                        </p>
                                    </div>

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
                                                <p className="mb-0">
                                                    <b className="mr-2">{purchase.options?.dataScheduleReturn?.waktu_tiba}</b>
                                                    <br />
                                                    <small>{purchase.options?.dataScheduleReturn?.tujuan}, {purchase.options?.dataScheduleReturn?.stasiun_akhir} Station</small>
                                                </p>
                                            </li>
                                        </>
                                    </TimeLineStyled>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountPurchaseTrainDetail;