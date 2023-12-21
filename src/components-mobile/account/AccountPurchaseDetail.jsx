import HeaderBack from "../header/HeaderBack";
import styled from 'styled-components';
import { useRouter } from "next/router";
import AccountPurchaseFlightDetail from "./AccountPurchaseFlightDetail";
import AccountPurchaseHotelDetail from "./AccountPurchaseHotelDetail";
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import userApi from "@/api/user";
import moment from 'moment';
import { toast } from "react-toastify";
import DrawerPayments from "../shared/DrawerPayments";
import AccountPurchaseProductDetail from "@/components-mobile/account/AccountPurchaseProductDetail";
import classNames from "classnames";
import { Collapse, Modal, ModalBody, ModalHeader } from 'reactstrap'
import masterApi from "@/api/master";
import StatusLabel from '@/components/shared/StatusLabel';
import Swal from "sweetalert2";

const purchaseComponent = {
    hotel: AccountPurchaseHotelDetail,
    flight: AccountPurchaseFlightDetail,
    product: AccountPurchaseProductDetail
}

function AccountPurchaseDetail() {
    const router = useRouter();
    const { access_token } = useSelector(state => state.token);
    const [purchase, setPurchase] = useState();

    const [loading, setLoading] = useState(true);
    const [countDown, setCountDown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })
    const [openPaymentChange, setOpenPaymentChange] = useState();

    const [clickable, setClickable] = useState(false);
    const [openSsr, setOpenSsr] = useState(false);
    const [cancelRequest, setCancelRequest] = useState({});

    const [listSsr, setListSsr] = useState([]);
    const [openPrice, setOpenPrice] = useState(false)
    const [openFormRefund, setOpenFormRefund] = useState(false);
    const [tokenIssued, setTokenIssued] = useState("")

    const [bank, setBank] = useState([]);

    const handleOpenPayment = () => {
        setOpenPaymentChange(state => !state)
    }

    const handleChangePayment = (id) => {
        userApi.changePaymentMethod(access_token, { product: purchase.product, key: router.query.id, paymentMethod: id }).then(res => {
            setLoading(true)
            userApi.getPurchase(access_token, { key: router.query.id }).then(res => {
                if (res.success) {
                    setPurchase(res.data)
                }
                setLoading(false)
            })
            if (res.success) {
                toast.success('Metode pembayaran berhasil diubah');
            } else {
                toast.error(res.message);
            }
            handleOpenPayment()
        })
    }

    useEffect(() => {
        if (purchase) {
            setInterval(() => {
                const time = Date.parse(moment(purchase?.status.timelimit).toDate()) - Date.parse(new Date());
                if (time < 0) {
                    setCountDown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                } else {
                    const seconds = Math.floor((time / 1000) % 60);
                    const minutes = Math.floor((time / 1000 / 60) % 60);
                    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
                    const days = Math.floor(time / (1000 * 60 * 60 * 24));
                    setCountDown({ days, hours, minutes, seconds });
                }
            }, 1000)
        }
    }, [purchase])

    useEffect(() => {
        setLoading(true)
        if (router.isReady) {
            userApi.getPurchase(access_token, { key: router.query.id }).then(res => {
                if (res.success) {
                    setPurchase(res.data)
                }
                setLoading(false)
            })
        }

    }, [router.query.id])

    useEffect(() => {
        masterApi.getPayments(access_token).then(res => {
            if (res.success) {
                setBank(res.data)
            }
        })
    }, [])

    const getRate = () => {
        if (purchase) {
            let arr = Object.keys(purchase?.price.perpax)
            let perPax = purchase?.price.perpax;
            arr = arr.map(item => {
                let obj;
                for (let index = 0; index < perPax[item].count; index++) {
                    obj = { ...perPax[item], type: item }
                }
                return obj
            })
            return arr;
        }
    }

    const handleOpenSsr = (ssr) => {
        setListSsr(ssr);
        setOpenSsr(prev => !prev)
    }


    const handleSubmitIssued = () => {
        let obj = tokenIssued;
        try {
            if (obj === '') {
                toast.error(`Token tidak boleh kosong`)
            } else {
                Swal.fire({
                    title: "Apakah Anda sudah yakin?",
                    text: "Dengan menyetujuinya, Anda yakin untuk melanjutkan pemesanan ini.",
                    icon: "info",
                    buttons: [
                        'Tidak, batalkan!',
                        'Ya, saya yakin!'
                    ],
                    dangerMode: false,
                }).then(function (isConfirm) {
                    if (isConfirm) {
                        Swal.fire({
                            title: 'Pesanan diproses!',
                            text: 'Pesanan Anda sedang kami proses.!',
                            icon: 'success',
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                            timer: 1000
                        }).then(function () {
                            const req = {
                                "product": purchase.product,
                                "key": purchase.period.codeId,
                                "token": obj
                            }

                            const number = purchase.period.codeId;


                            const reqInv = {
                                "note": 'B2B',
                                "tags": purchase.product,
                                "id_order": [number.toString()],
                                "idOrder": [number.toString()],
                            }

                            userApi.submitIssued(access_token, req).then(res => {
                                if (res.success) {
                                    console.log("body", JSON.stringify(reqInv))
                                    userApi.submitInvoice(access_token, reqInv).then(res => {
                                        Swal.fire({
                                            title: 'Berhasil!',
                                            text: 'Pesanan Anda berhasil!',
                                            icon: 'success',
                                            closeOnClickOutside: false,
                                            closeOnEsc: false,
                                            showConfirmButton: false,
                                            timer: 2000
                                        }).then(function () {
                                            window.location.reload();
                                        });

                                    })

                                } else {
                                    toast.error('Pesanan Gagal Dipesan "' + res.message + '"')
                                }
                            })
                        });
                    } else {
                        Swal.fire("Dibatalkan", "Anda membatalkan untuk melakukan pemesanan ini.", "error");
                    }
                });
            }
            // let objString = JSON.parse(JSON.stringify(obj));
        } catch (error) {
            console.error(error);
            // output: TypeError: cyclic object value
        }
    }
    const handleCancelled = () => {

        Swal.fire({
            title: 'Anda yakin ingin membatalkan pesanan?',
            icon: 'info',
            text: purchase.room.cancellationPolicy,
            confirmButtonText: 'Yakin',
            confirmButtonColor: '#0070BA'
        }).then(res => {
            if (res.isConfirmed) {
                if (cancelRequest['accountNumber'] && cancelRequest['customerName'] && cancelRequest['customerName'] && cancelRequest['reason']) {
                    userApi.createCancellation(access_token, { ...cancelRequest, key: router.query.id, product: purchase.product }).then(res => {
                        if (res.success) {
                            toast.success('Pembatalan anda sedang dalam proses')
                        } else {
                            toast.error(res.message);
                        }
                    })
                } else {
                    toast.error('Data tidak lengkap')
                }
            }
        })
    }


    const handleChangeCancelRequest = (e) => {
        const { name, value } = e.target
        setCancelRequest(v => ({ ...v, [name]: value }))
    }



    if (loading) {
        return <div style={{
            height: '50vh',
            marginBottom: '5rem'
        }} className="d-flex flex-column align-items-center justify-content-center">
            <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/pulse-spinner.svg" />
            <h4>Sedang menyiapkan data...</h4>
        </div>
    }
    if (!purchase) {
        return <div style={{
            height: '50vh',
            marginBottom: '5rem'
        }} className="d-flex flex-column align-items-center justify-content-center">
            {/* <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/pulse-spinner.svg" /> */}
            <h4>Data pesanan tidak ditemukan</h4>
        </div>
    }


    const PurchaseComponent = purchaseComponent[purchase.product]

    return (
        <RootStyled>
            <HeaderBack onBack={() => router.push('/user/purchase')}>
                <div className="col-8">
                    <div className="d-flex flex-column align-items-center justify-content-center text-white">
                        <p className="d-block font-weight-bold" style={{ marginBottom: '-8px' }}>Pembayaran</p>
                        <small className="d-block">No. Order: {purchase?.codev}</small>
                    </div>
                </div>
                <div className="col-2 text-right d-flex align-items-center justify-content-end text-white">
                    <i className="fas fa-home mr-3 icon" onClick={() => router.push('/')}></i>
                    <i className="fas fa-sync icon" onClick={() => window.location.reload()}></i>
                </div>
            </HeaderBack>
            {
                (purchase.status.id === 9 || purchase.status.vendor === 'CONFIRMED') ?
                    <div style={{ boxShadow: '2px 2px 5px -5px rgba(0,0,0,.5)' }} className='bg-white'>
                        <a href={purchase.doc.eticket} style={{ cursor: 'pointer' }} target='_blank' className="d-flex justify-content-between text-dark border-bottom w-100 d-block py-3 px-4 rounded-0">
                            <span>
                                eVoucher
                            </span>
                            <span>
                                <i class="fas fa-arrow-right"></i>
                            </span>
                        </a>
                    </div> :
                    <div class={`alert 
                    ${(purchase.status.id === 3 && (purchase.product === 'hotel' || purchase.product === 'product')) ? 'alert-white' : 'alert-secondary'} 
                    mb-0`} role="alert">
                        {
                            purchase.status.id === 13 ?

                                <div className={`card-body border-bottom bg-danger py-2 bayar-disini rounded-bottom text-white`}>
                                    <StatusLabel clickable={clickable} handleOpenPayment={handleOpenPayment} handleSubmitIssued={handleSubmitIssued} purchase={purchase} setClickable={setClickable} setTokenIssued={setTokenIssued} />
                                </div>
                                :

                                <div className={`card-body border-bottom bg-warning py-2 bayar-disini rounded-bottom`}>
                                    <StatusLabel clickable={clickable} handleOpenPayment={handleOpenPayment} handleSubmitIssued={handleSubmitIssued} purchase={purchase} setClickable={setClickable} setTokenIssued={setTokenIssued} />
                                </div>

                        }
                    </div>
            }


            <div className="container">
                {(moment().isBefore(moment(purchase.status.timelimit)) && purchase.status.id === 3) && (
                    <div className="card-container card-container-payment">
                        <span className="mr-3 text-primary font-weight-bold">Batas Pembayaran</span>
                        <span id="hitungmundur" className="d-flex align-items-center">
                            <div className="rounded opacity-50 bg-warning text-center p-1"><b><span className="angka">{countDown.hours}</span></b> </div>
                            <span className='mx-1'> :</span>
                            <div className="rounded bg-warning opacity-50 text-center p-1"><b>
                                <span className="angka">{countDown.minutes}</span></b> </div>
                            <span className='mx-1'>:</span>
                            <div className="rounded bg-warning opacity-50 text-center p-1 mr-2"><b><span className="angka">{countDown.seconds}</span></b></div></span>
                    </div>
                )}

                <PurchaseComponent purchase={purchase} />


                <div className="card-container card-container-contact">
                    <p className="font-weight-bold text-primary mb-1 title">Contact's Name</p>
                    <p className="mb-0">{`${purchase?.contact?.title} ${purchase?.contact?.firstName} ${purchase?.contact?.lastName}`}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <span>Phone</span>
                        <span>{purchase?.contact?.phone}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <span>Email</span>
                        <span>{purchase?.contact?.email}</span>
                    </div>
                </div>

                {(purchase.status.id === 3 && (purchase.product === 'hotel' || purchase.product === 'product' || purchase.product === 'flight')) ?

                    user.role == 'user' ?
                        <div className="card-container card-container-pay">
                            <>
                                {!purchase?.payments?.token ?
                                    <>
                                        <p className="font-weight-bold text-primary mb-1 title">Metode Pembayaran</p>
                                        <button type="button" onClick={handleOpenPayment} className="btn btn-primary btn-sm btn-block font-weight-bold mt-3">Pilih Metode Pembayaran</button>
                                    </>

                                    :
                                    <div className="btn-group btn-block btn-sm">
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
                                            disabled={clickable} style={{ width: '70%' }} className="btn btn-primary btn-sm">BAYAR SEKARANG</button>
                                        <button onClick={handleOpenPayment} type="button" className="btn btn-info btn-sm" >Ganti Metode</button>
                                    </div>
                                } </>
                        </div>
                        :
                        <div className="card-container card-container-pay">
                            <>
                                <p>Silahkan cek email untuk mendapatkan kode token issued.</p>
                                {
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="text" className="textonly form-control" name="tokis" id="tokis" onChange={(e) => setTokenIssued(e.target.value)} placeholder="Masukan Token" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group"><button type="button" class="btn btn-block btn-primary " onClick={handleSubmitIssued}>ISSUED</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </>
                        </div>
                    :
                    <></>
                }


                <div className="card-container card-container-pay">
                    Total Pembayaran
                    <p onClick={() => setOpenPrice(prev => !prev)} className="font-weight-bold text-primary mb-2" style={{ fontSize: '18px' }}>

                        Rp{purchase?.price?.total?.toLocaleString().replaceAll(',', '.')}<span className="ml-1 text-dark">
                            {openPrice ? <i class="fas fa-angle-up"></i> : <i class="fas fa-angle-down"></i>}
                        </span></p>
                    <Collapse isOpen={openPrice}>
                        <div className="d-flex justify-content-between my-2">
                            <span><strong>Subtotal</strong></span>
                            <span>Rp{purchase?.price.subtotal.toLocaleString()}</span>
                        </div>
                        {purchase.product === 'flight' ?
                            <div className="d-flex justify-content-between my-2">
                                <span><strong>Pajak dan lainnya </strong></span>
                                <span className="tax-and-more">

                                    Rp{(purchase?.price.tax + purchase?.price.iwjr + purchase?.price.fee2).toLocaleString()}
                                </span>
                            </div>
                            :
                            <div className="d-flex justify-content-between my-2">
                                <span><strong>Pajak</strong></span>
                                <span className="tax-and-more text-success">
                                    Termasuk </span>
                            </div>

                        }

                        {purchase.product === 'flight' &&
                            <div className="d-flex justify-content-between my-2">
                                <span><strong>Tambahan</strong></span>
                                <span className="extra-flight">Rp{purchase?.price.addon}</span>
                            </div>
                        }
                        <div className="d-flex justify-content-between my-2">
                            <span><strong>Biaya</strong></span>
                            <span>Rp{purchase?.price.fee.toLocaleString()}</span>
                        </div>
                        {purchase?.price.point > 0 &&
                            <div className="d-flex justify-content-between my-2">
                                <span><strong><small>Point digunakan</small></strong></span>
                                <span className="text-danger">-Rp{purchase?.price.point.toLocaleString()}</span>
                            </div>
                        }
                        {purchase?.price.discount > 0 &&
                            <div className="d-flex justify-content-between my-2">
                                <span className="font-weight-bold">Diskon</span>
                                <span className="text-danger">-Rp{purchase?.price.discount.toLocaleString()}</span>
                            </div>
                        }
                        <div className="d-flex justify-content-between my-2">
                            <span><strong>Total tagihan</strong></span>
                            <b>Rp{purchase?.price.total.toLocaleString()}</b>
                        </div>
                    </Collapse>
                    {(purchase.status.id === 3 && (purchase.product === 'hotel' || purchase.product === 'product') && !purchase?.payments?.token) &&
                        <button type="button" className={classNames("btn btn-sm btn-block font-weight-bold", { 'btn-secondary': (purchase.status.id === 3 && (purchase.product === 'hotel' || purchase.product === 'product') && !purchase?.payments?.token) })}>Belum Pilih Metode Pembayaran</button>
                    }
                </div>
                {purchase.isCancel &&
                    <button onClick={() => setOpenFormRefund(v => !v)} type="button" className="btn mt-3 btn-danger btn-sm btn-block">Batalkan Pesanan</button>
                }


            </div>

            <DrawerPayments open={openPaymentChange} toggle={handleOpenPayment} handleChangePaymentMethod={handleChangePayment} flightRepricing={purchase} />

            <Modal isOpen={openFormRefund} toggle={() => setOpenFormRefund(v => !v)} centered size='md'>
                <ModalHeader toggle={() => setOpenFormRefund(v => !v)}>
                    <h5 className='font-weight-bold'>Form Refund</h5>
                </ModalHeader>
                <ModalBody>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <label>No Rekening</label>
                                <input onChange={handleChangeCancelRequest} name='accountNumber' value={cancelRequest['accountNumber']} type="text" className="form-control" aria-describedby="helpId" placeholder='Masukan no rekening anda...' />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <label>Pemilik Rekening</label>
                                <input onChange={handleChangeCancelRequest} name='customerName' value={cancelRequest['customerName']} type="text" className="form-control" aria-describedby="helpId" placeholder='Masukan nama pemilik rekening...' />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <label>Bank</label>
                                <select onChange={handleChangeCancelRequest} value={cancelRequest['idPayment']} class="form-control" name="idPayment" id="">
                                    {bank.map(item =>
                                        <option value={item.id_payment}>{item.bank_name}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor>Alasan Pembatalan</label>
                                <textarea onChange={handleChangeCancelRequest} name='reason' value={cancelRequest['reason']} className="form-control" rows={3} placeholder='Masukan alasan pembatalan...' />
                            </div>

                        </div>
                        <div className="col-12 d-flex justify-content-end">
                            <button type="button" onClick={handleCancelled} className="btn btn-primary">Kirim</button>

                        </div>
                    </div>
                </ModalBody>
            </Modal>

        </RootStyled >
    );
}

const RootStyled = styled.div`

.container{
    padding-top:15px;
    padding-bottom:15px;
}

font-size:14px;
.icon{
    font-size:16px;
}

.card-container{
    background:white;
    border-radius:15px;
    box-shadow:5px 5px 10px -5px rgba(0,0,0,.5);
    margin-top:10px;

    &.card-container-payment{
        padding:15px;
        display:flex;
        align-items:center;
        width:100%;
        justify-content:space-between; 
    }

    &.card-container-contact{
        padding: 10px 15px;
        .title{
            font-size:16px;
        }
    }
    
    &.card-container-pay{
        padding: 10px 15px;
        .title{
            font-size:16px;
        }
    }
}



`

export default AccountPurchaseDetail;