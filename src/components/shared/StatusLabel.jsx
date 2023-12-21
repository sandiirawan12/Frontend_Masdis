import moment from "moment";
import { useState } from "react";
import { useSelector } from "react-redux";
import Link from 'next/link';
import { useMediaQuery } from "react-responsive";

function StatusLabel(props) {
    const user = useSelector(state => state.user);
    const { purchase, setClickable, clickable, handleOpenPayment, handleSubmitIssued, handleConfirmIssuedMidtrans, setTokenIssued } = props
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' });
    return (
        <>
            {(purchase.status.id === 13) &&
                <>
                    <div className="card-body bg-danger text-white" style={{ borderRadius: '20px' }}>
                        <div className="d-flex align-content-center justify-content-between">
                            <p className='mb-0 mt-1'>
                                Batas waktu pembayaran habis
                            </p>
                            <h5 className='mt-1 font-weight-bold'>
                                Pesanan Dibatalkan
                            </h5>
                        </div>
                    </div>
                </>
            }
            {(purchase.status.id === 22) &&
                <>
                    <div className="card-body bg-danger text-white" style={{ borderRadius: '20px' }}>
                        <div className="d-flex align-content-center justify-content-between">
                            <p className='mb-0 mt-1'>
                                Pesanan mengalami failed
                            </p>
                            <h5 className='mt-1 font-weight-bold'>
                                Pesanan Failed
                            </h5>
                        </div>
                    </div>
                </>
            }
            {(purchase.status.id === 21) &&
                <>
                    <div className="card-body bg-danger text-white" style={{ borderRadius: '20px' }}>
                        <div className="d-flex align-content-center justify-content-between">
                            <p className='mb-0 mt-1'>
                                Pesanan mengalami failed
                            </p>
                            <h5 className='mt-1 font-weight-bold'>
                                Pesanan Dropped
                            </h5>
                        </div>
                    </div>
                </>
            }
            {(purchase.status.id === 3 && (purchase.product === 'hotel' || purchase.product === 'train' || purchase.product === 'product') && !isTabletOrMobile) &&
                <> {
                    user.role == 'user' ?
                        <>
                            <div className="card-body bg-primary text-white" style={{ borderRadius: '20px' }}>
                                <div className="d-flex align-content-center justify-content-between">
                                    <div>
                                        <p className='mb-0 mt-1'>
                                            Lakukan pembayaran untuk melanjutkan pesanan
                                        </p>
                                        {purchase?.payments?.token ?
                                            <div className="mt-4">
                                                Metode Pembayaran : <span className="font-weight-bold ml-3" style={{fontSize: '20px'}}>{purchase?.payments?.selected?.name}</span>
                                            </div>
                                            :
                                            ''
                                        }
                                    </div>
                                    {purchase?.payments?.token ?
                                        <div>
                                            <button id="pay-button"
                                                onClick={() => {
                                                    setClickable(true)
                                                    window.snap.pay(purchase.payments.token, {
                                                        onSuccess: function () {
                                                            setClickable(false);
                                                            setTimeout(() => {
                                                                window.location.reload();
                                                            }, 200);
                                                        },
                                                        onPending: function () {
                                                            setClickable(false);
                                                        },
                                                        onError: function () {
                                                            setClickable(false);
                                                        },
                                                        onClose: function () {
                                                            setClickable(false);
                                                        }
                                                    });
                                                }}
                                            disabled={clickable} className="btn btn-block btn-danger font-weight-bold">
                                            Bayar Sekarang
                                        </button>
                                        <button onClick={handleOpenPayment} type="button" className="btn btn-block btn-warning font-weight-bold">Ganti Metode</button>
                                        </div>
                                        :
                                        <div>
                                            <button onClick={handleOpenPayment} type="button" className="btn btn-block btn-warning font-weight-bold" >Pilih Metode Pembayaran</button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="card-body bg-primary text-white" style={{ borderRadius: '20px' }}>
                                <div>
                                    <span className="font-weight-bold">Periksa Email Anda</span><br />
                                    <small>Silahkan Masukkan Token Issued</small>
                                </div>
                                {
                                    <div className="row mt-3">
                                        <div className="col-md-9">
                                            <input type="text" className="textonly form-control" name="tokis" id="tokis" onChange={(e) => setTokenIssued(e.target.value)} />
                                        </div>
                                        <div className="col-md-3">
                                            <button type="button" class="btn btn-block btn-warning font-weight-bold" onClick={handleSubmitIssued}>ISSUED</button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </>
                }
                </>
            }
            {(purchase.status.id === 3 && purchase.status.vendor === 'BLOCKINGINPROGRESS') &&
                <div className="card-body bg-info text-white" style={{ borderRadius: '20px' }}>
                    <div className="d-flex align-content-center justify-content-between">
                        <p className='mb-0 mt-1'>
                            Mohon menunggu, pesanan sedang diproses maskapai
                        </p>
                        <h5 className='mt-1 font-weight-bold'>
                            Pesanan Proses
                        </h5>
                    </div>
                </div>
            }
            {(purchase.status.id === 3 && purchase.status.vendor === 'BLOCKED') &&
                <> {
                    user.role == 'user' ?
                        <>
                            <div className="card-body bg-primary text-white" style={{ borderRadius: '20px' }}>
                                <div className="d-flex align-content-center justify-content-between">
                                    <div>
                                        <p className='mb-0 mt-1'>
                                            Lakukan pembayaran untuk melanjutkan pesanan
                                        </p>
                                        {purchase?.payments?.token ?
                                            <div className="mt-4">
                                                Metode Pembayaran : <span className="font-weight-bold ml-3" style={{ fontSize: '20px' }}>{purchase?.payments?.selected?.name}</span>
                                            </div>
                                            :
                                            ''
                                        }
                                    </div>
                                    {purchase?.payments?.token ?
                                        <div>
                                            <button id="pay-button"
                                                onClick={() => {
                                                    setClickable(true)
                                                    window.snap.pay(purchase.payments.token, {
                                                        onSuccess: function () {
                                                            setClickable(false);
                                                            setTimeout(() => {
                                                                window.location.reload();
                                                            }, 200);
                                                        },
                                                        onPending: function () {
                                                            setClickable(false);
                                                        },
                                                        onError: function () {
                                                            setClickable(false);
                                                        },
                                                        onClose: function () {
                                                            setClickable(false);
                                                        }
                                                    });
                                                }}
                                                disabled={clickable} className="btn btn-block btn-danger font-weight-bold">
                                                Bayar Sekarang
                                            </button>
                                            <button onClick={handleOpenPayment} type="button" className="btn btn-block btn-warning font-weight-bold">Ganti Metode</button>
                                        </div>
                                        :
                                        <div>
                                            <button onClick={handleOpenPayment} type="button" className="btn btn-block btn-warning font-weight-bold" >Pilih Metode Pembayaran</button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="card-body bg-primary text-white" style={{ borderRadius: '20px' }}>
                                <div>
                                    <span className="font-weight-bold">Periksa Email Anda</span><br />
                                    <small>Silahkan Masukkan Token Issued</small>
                                </div>
                                {
                                    <div className="row mt-3">
                                        <div className="col-md-9">
                                            <input type="text" className="textonly form-control " name="lastName" onChange={(e) => setTokenIssued(e.target.value)} />
                                        </div>
                                        <div className="col-md-3">
                                            <button type="button" class="btn btn-block btn-warning font-weight-bold" onClick={handleSubmitIssued}>ISSUED</button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </>
                }
                </>
            }

            {(purchase.status.id === 3 && purchase.status.vendor === 'DIRECT') &&
                <> {
                    user.role == 'user' ?
                        <>
                            <div className="card-body bg-primary text-white" style={{ borderRadius: '20px' }}>
                                <div className="d-flex align-content-center justify-content-between">
                                    <div>
                                        <p className='mb-0 mt-1'>
                                            Lakukan pembayaran untuk melanjutkan pesanan
                                        </p>
                                        {purchase?.payments?.token ?
                                            <div className="mt-4">
                                                Metode Pembayaran : <span className="font-weight-bold ml-3" style={{ fontSize: '20px' }}>{purchase?.payments?.selected?.name}</span>
                                            </div>
                                            :
                                            ''
                                        }
                                    </div>
                                    {purchase?.payments?.token ?
                                        <div>
                                            <button id="pay-button"
                                                onClick={() => {
                                                    setClickable(true)
                                                    window.snap.pay(purchase.payments.token, {
                                                        onSuccess: function () {
                                                            setClickable(false);
                                                            setTimeout(() => {
                                                                window.location.reload();
                                                            }, 200);
                                                        },
                                                        onPending: function () {
                                                            setClickable(false);
                                                        },
                                                        onError: function () {
                                                            setClickable(false);
                                                        },
                                                        onClose: function () {
                                                            setClickable(false);
                                                        }
                                                    });
                                                }}
                                                disabled={clickable} className="btn btn-block btn-danger font-weight-bold">
                                                Bayar Sekarang
                                            </button>
                                            <button onClick={handleOpenPayment} type="button" className="btn btn-block btn-warning font-weight-bold">Ganti Metode</button>
                                        </div>
                                        :
                                        <div>
                                            <button onClick={handleOpenPayment} type="button" className="btn btn-block btn-warning font-weight-bold" >Pilih Metode Pembayaran</button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="card-body bg-primary text-white" style={{ borderRadius: '20px' }}>
                                <div>
                                    <span className="font-weight-bold">Periksa Email Anda</span><br />
                                    <small>Silahkan Masukkan Token Issued</small>
                                </div>
                                {
                                    <div className="row mt-3">
                                        <div className="col-md-9">
                                            <input type="text" className="textonly form-control " name="lastName" onChange={(e) => setTokenIssued(e.target.value)} />
                                        </div>
                                        <div className="col-md-3">
                                            <button type="button" class="btn btn-block btn-warning font-weight-bold" onClick={handleSubmitIssued}>ISSUED</button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </>
                }
                </>
            }

            {
                purchase.status.id === 25 &&
                <div className="card-body bg-danger text-white" style={{ borderRadius: '20px' }}>
                    <div className="d-flex align-content-center justify-content-between">
                        <p className='mb-0 mt-1'>
                            Pesanan anda masih dalam proses pembatalan
                        </p>
                        <h5 className='mt-1 font-weight-bold'>
                            Pesanan Proses Pembatalan
                        </h5>
                    </div>
                </div>
            }

            {(purchase.status.id === 5) &&
                <>
                <Link href={'/user/invoice/' + purchase.codeId} target='_blank'>
                    <div className="btn btn-success font-weight-bold btn-block" style={{ borderRadius: '20px' }}>
                        Cetak eVoucher
                    </div>
                </Link>
                <div className="card-body bg-primary text-white mt-3" style={{ borderRadius: '20px' }}>
                    <div className="d-flex align-content-center justify-content-between">
                        <p className='mb-0 mt-1'>
                            Pembayaran sudah diterima, pesanan sedang diproses
                        </p>
                        <h5 className='mt-1 font-weight-bold'>
                            Pesanan Proses
                        </h5>
                    </div>
                </div>
                </>
            }

            {(purchase.status.id === 7 || purchase.status.id === 9 || purchase.status.id === 15 || purchase.status.vendor === 'CONFIRMED' && !isTabletOrMobile) &&
                <>
                <Link href={'/user/invoice/' + purchase.codeId} target='_blank'>
                    <div className="btn btn-success font-weight-bold btn-block">
                        Cetak eVoucher
                    </div>
                </Link>
                </>
            }

            {(purchase.status.id === 11) &&
                <div className="card-body bg-danger text-white" style={{ borderRadius: '20px' }}>
                    <div className="d-flex align-content-center justify-content-between">
                        <p className='mb-0 mt-1'>
                            Pesanan ini telah dibatalkan
                        </p>
                        <h5 className='mt-1 font-weight-bold'>
                            Pesanan Dibatalkan
                        </h5>
                    </div>
                </div>
            }
            {(purchase.status.id === 19) &&
                <div className="card-body bg-danger text-white" style={{ borderRadius: '20px' }}>
                    <div className="d-flex align-content-center justify-content-between">
                        <p className='mb-0 mt-1'>
                            Terjadi kesalahan pada sistem
                        </p>
                        <h5 className='mt-1 font-weight-bold'>
                            Kesalahan Sistem
                        </h5>
                    </div>
                </div>
            }
            {(purchase.status.id === 17) &&
                <div className="card-body bg-danger text-white" style={{ borderRadius: '20px' }}>
                    <div className="d-flex align-content-center justify-content-between">
                        <p className='mb-0 mt-1'>
                            Pesanan ini pembayaran-nya di gagal
                        </p>
                        <h5 className='mt-1 font-weight-bold'>
                            Pembayaran Gagal
                        </h5>
                    </div>
                </div>
            }
        </>
    );
}

export default StatusLabel;