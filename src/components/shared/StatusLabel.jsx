import moment from "moment";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

function StatusLabel(props) {
    const user = useSelector(state => state.user);
    const { purchase, setClickable, clickable, handleOpenPayment, handleSubmitIssued, setTokenIssued } = props
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' });
    console.log(purchase, user);
    return (
        <>
            {(purchase.status.id === 13) &&
                <>
                    <p className='mb-0'>
                        Batas waktu pembayaran habis.
                    </p>
                    <h4 className='mt-0'>
                        Pesanan Dibatalkan
                    </h4>
                </>
            }
            {(purchase.status.id === 3 && (purchase.product === 'hotel' || purchase.product === 'product') && !isTabletOrMobile) &&
                <> {
                    user.role == 'user' ?
                        <>
                            <p>Lakukan pembayaran untuk melanjutkan pesanan</p>
                            {purchase?.payments?.token ?
                                <div className="btn-group btn-block">
                                    <button id="pay-button"
                                        onClick={() => {
                                            setClickable(true)
                                            window.snap.pay(purchase?.payments.token, {
                                                onSuccess: function () {
                                                    setClickable(false)
                                                },
                                                onPending: function () {
                                                    setClickable(false)
                                                },
                                                onError: function () {
                                                    setClickable(false)
                                                },
                                                onClose: function () {
                                                    setClickable(false)
                                                }
                                            })
                                        }}
                                        disabled={clickable} style={{ width: '70%' }} className="btn btn-primary">BAYAR SEKARANG</button>
                                    <button onClick={handleOpenPayment} type="button" className="btn btn-info">Ganti Metode</button>
                                </div>
                                :
                                <button onClick={handleOpenPayment} type="button" className="btn btn-block btn-info" >Pilih Metode Pembayaran</button>

                            }
                        </>
                        :
                        <>
                            <p>Silahkan cek email untuk mendapatkan kode token issued.</p>
                            {
                                <div className="row">
                                    <div className="col-9">
                                        <div className="form-group">
                                            <input type="text" className="textonly form-control" name="tokis" id="tokis" onChange={(e) => setTokenIssued(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group"><button type="button" class="btn btn-block btn-primary " onClick={handleSubmitIssued}>ISSUED</button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </>
                }
                </>
            }
            {(purchase.status.id === 3 && purchase.status.vendor === 'BLOCKINGINPROGRESS') &&
                <h5>Mohon menunggu, pesanan sedang diproses maskapai</h5>
            }
            {(purchase.status.id === 3 && purchase.status.vendor === 'BLOCKED') &&
                <> {
                    user.role == 'user' ?
                        <>
                            <p>Lakukan pembayaran untuk melanjutkan pesanan</p>
                            {purchase?.payments?.token ?
                                <div className="btn-group btn-block">
                                    <button id="pay-button"
                                        onClick={() => {
                                            setClickable(true)
                                            window.snap.pay(purchase?.payments.token, {
                                                onSuccess: function () {
                                                    setClickable(false)
                                                },
                                                onPending: function () {
                                                    setClickable(false)
                                                },
                                                onError: function () {
                                                    setClickable(false)
                                                },
                                                onClose: function () {
                                                    setClickable(false)
                                                }
                                            })
                                        }}
                                        disabled={clickable} style={{ width: '70%' }} className="btn btn-primary">BAYAR SEKARANG</button>
                                    <button onClick={handleOpenPayment} type="button" className="btn btn-info">Ganti Metode</button>
                                </div>
                                :
                                <button onClick={handleOpenPayment} type="button" className="btn btn-block btn-info" >Pilih Metode Pembayaran</button>

                            }
                        </>
                        :
                        <>
                            <p>Silahkan cek email untuk mendapatkan kode token issued.</p>
                            {
                                <div className="row">
                                    <div className="col-9">
                                        <div className="form-group">
                                            <input type="text" className="textonly form-control " name="lastName" onChange={(e) => setTokenIssued(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group"><button type="button" class="btn btn-block btn-primary  " onClick={handleSubmitIssued} >ISSUED</button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </>
                }
                </>
            }

            {(purchase.status.id === 3 && purchase.status.vendor === 'DIRECT') &&
                <> {
                    user.role == 'user' ?
                        <>
                            <p>Lakukan pembayaran untuk melanjutkan pesanan</p>
                            {purchase?.payments?.token ?
                                <div className="btn-group btn-block">
                                    <button id="pay-button"
                                        onClick={() => {
                                            setClickable(true)
                                            window.snap.pay(purchase?.payments.token, {
                                                onSuccess: function () {
                                                    setClickable(false)
                                                },
                                                onPending: function () {
                                                    setClickable(false)
                                                },
                                                onError: function () {
                                                    setClickable(false)
                                                },
                                                onClose: function () {
                                                    setClickable(false)
                                                }
                                            })
                                        }}
                                        disabled={clickable} style={{ width: '70%' }} className="btn btn-primary">BAYAR SEKARANG</button>
                                    <button onClick={handleOpenPayment} type="button" className="btn btn-info">Ganti Metode</button>
                                </div>
                                :
                                <button onClick={handleOpenPayment} type="button" className="btn btn-block btn-info" >Pilih Metode Pembayaran</button>

                            }
                        </>
                        :
                        <>
                            <p>Silahkan cek email untuk mendapatkan kode token issued.</p>
                            {
                                <div className="row">
                                    <div className="col-9">
                                        <div className="form-group">
                                            <input type="text" className="textonly form-control " name="lastName" onChange={(e) => setTokenIssued(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group"><button type="button" class="btn btn-block btn-primary  " onClick={handleSubmitIssued} >ISSUED</button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </>
                }
                </>
            }

            {
                purchase.status.id === 25 && <p>Pesanan anda masih dalam proses pembatalan</p>
            }

            {(purchase.status.id === 5) &&
                <p>Pembayaran sudah diterima. Mohon menunggu, pesanan sedang diproses</p>
            }

            {(purchase.status.id === 9 || purchase.status.vendor === 'CONFIRMED' && !isTabletOrMobile) &&
                <>
                    Pesanan berhasil <div className="row"><div className="col-md-12"><a href={purchase.doc.eticket} target='_blank' className="btn btn-primary btn-block mt-3">eVoucher</a></div></div>
                </>
            }

            {(purchase.status.id === 11) &&
                <h5>
                    Pesanan Dibatalkan.
                </h5>
            }
            {(purchase.status.id === 19) &&
                <h5>
                    Terjadi kesalahan sistem.
                </h5>
            }
            {(purchase.status.id === 17) &&
                <h5>
                    Pembayaran anda ditolak
                </h5>
            }
        </>
    );
}

export default StatusLabel;