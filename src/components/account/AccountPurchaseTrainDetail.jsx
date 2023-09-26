import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import userApi from '@/api/user';
import moment from 'moment';
import TabPayment from '../shared/TabPayment';
import { toast } from 'react-toastify';
import AccountPurchaseHotelDetail from './AccountPurchaseHotelDetail';
import AccountPurchaseFlightDetail from './AccountPurchaseFlightDetail';
import StatusLabel from '../shared/StatusLabel';
import AccountPurchaseProductDetail from './AccountPurchaseProductDetail';
import { useMediaQuery } from 'react-responsive';
import StarRating from '../shared/StarRating';
import shopApi from '@/api/shop';
import Swal from 'sweetalert2';
import masterApi from '@/api/master';
import { stringify } from 'query-string';

const purchaseComponent = {
    hotel: AccountPurchaseHotelDetail,
    flight: AccountPurchaseFlightDetail,
    product: AccountPurchaseProductDetail
}

function AccountPurchaseDetail() {
    const { access_token } = useSelector(state => state.token)
    const router = useRouter()
    const [purchase, setPurchase] = useState();

    const [loading, setLoading] = useState(true);
    const [countDown, setCountDown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })
    const [openPaymentChange, setOpenPaymentChange] = useState();

    const [openFormRefund, setOpenFormRefund] = useState(false);

    const [clickable, setClickable] = useState(false)
    const [tokenIssued, setTokenIssued] = useState("")
    const [paymentMethodSelected, setPaymentMethodSelected] = useState(1);
    const [openSsr, setOpenSsr] = useState(false)

    const [listSsr, setListSsr] = useState([]);
    const [changePayment, setChangePayment] = useState(false)

    const [rating, setRating] = useState(0)
    const [helpful, setHelpful] = useState(0);
    const [fullReview, setFullReview] = useState({
        kebersihan: 0,
        kenyamanan: 0,
        lokasi: 0,
        fasilitas: 0,
        staff: 0,
        harga: 0,
        layanan: 0,
        parkir: 0,
        makanan: 0
    })

    const [bank, setBank] = useState([]);
    const [cancelRequest, setCancelRequest] = useState({});

    const handleSetFullReview = (name, value) => {
        setFullReview(prev => ({ ...prev, [name]: value }))
    }

    const [review, setReview] = useState({
        title_review: '',
        content_review: ''
    });

    const handleChangeReview = (e) => {
        const { value, name } = e.target
        setReview(prev => ({ ...prev, [name]: value }))
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
                            timer: 15000,
                            showConfirmButton: false,
                        }).then(function () {
                            const req = {
                                "product": purchase.product,
                                "key": purchase.codeId,
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



    const handleSubmitInvoice = () => {
        let obj = tokenIssued;
        try {
            // if (obj === '') {
            //     toast.error(`Token tidak boleh kosong`)
            // } else {
            Swal.fire({
                title: "Lanjut Cetak Invoice?",
                // text: "Dengan menyetujuinya, Anda yakin untuk melanjutkan pemesanan ini.",
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
                        const reqInv = {
                            "tags": purchase.product,
                            "id_order": [purchase.codeId],
                            "idOrder": purchase.codeId,
                            "note": purchase.code
                        }
                        userApi.submitInvoice(access_token, reqInv).then(res => {
                            if (res.success) {

                                toast.success(`Pesanan Anda berhasil kami proses ` + param_issud)

                            } else {
                                toast.error('Gagal, ' + res.message)
                            }
                        })
                    });
                } else {
                    Swal.fire("Dibatalkan", "Anda membatalkan untuk melakukan pemesanan ini.", "error");
                }
            });
            // }
            // let objString = JSON.parse(JSON.stringify(obj));
        } catch (error) {
            console.error(error);
            // output: TypeError: cyclic object value
        }
    }

    const handleSubmitReview = () => {
        const data = {
            ...review,
            id_order: router.query.id,
            id_review_type: 2,
            helpful,
            rating,
            fullreview: fullReview
        }
        shopApi.addReview(data, access_token).then(res => {
            if (res.success) {
                toast.success(`Ulasan berhasil dikirim`)
            } else {
                toast.error('Ulasan tidak lengap')
            }
        })
    }

    const handleOpenPayment = () => {
        setOpenPaymentChange(state => !state)
    }

    const handleChangePaymentMethod = (id) => {
        setPaymentMethodSelected(id);
    }

    const handleChangePayment = () => {
        userApi.changePaymentMethod(access_token, { product: purchase.product, key: router.query.id, paymentMethod: paymentMethodSelected }).then(res => {
            if (res.success) {
                toast.success('Metode pembayaran berhasil diubah');
            } else {
                toast.error('Metode pembayaran sudah tidak diubah');
            }
            setChangePayment(prev => !prev)
            handleOpenPayment()
        })
    }

    useEffect(() => {
        if (purchase) {
            setInterval(() => {
                const time = Date.parse(moment(purchase?.status?.timelimit, 'DD MMM YYYY HH:mm').toDate()) - Date.parse(new Date());
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

    }, [router.query.id, changePayment])

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

    const handleCancelled = () => {

        Swal.fire({
            title: 'Anda yakin ingin membatalkan pesanan?',
            icon: 'info',
            text: purchase.room.cancellationPolicy,
            confirmButtonText: 'Yakin',
            confirmButtonColor: '#0070BA'
        }).then(res => {
            if (res.isConfirmed) {
                let condition = purchase?.isRefund ? (cancelRequest['accountNumber'] && cancelRequest['customerName'] && cancelRequest['customerName'] && cancelRequest['reason']) : true

                if (condition) {
                    userApi.createCancellation(access_token, { ...cancelRequest, key: router.query.id, product: purchase.product }).then(res => {
                        if (res.success) {
                            toast.success('Pembatalan berhasil');
                            window.location.reload()
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

    useEffect(() => {
        masterApi.getPayments(access_token).then(res => {
            if (res.success) {
                setBank(res.data)
            }
        })
    }, [])

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
        <>
            {(moment(Date()).isBefore(moment(purchase?.status?.timelimit, 'DD MMM YYYY HH:mm')) && purchase.status.id === 3) && (
                <section id="timer" className="bg-danger py-2">
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center">
                            <span className="mr-3 text-white">Batas Pembayaran</span>
                            <span id="hitungmundur" className="d-flex"><div className="rounded bg-light opacity-50 border border-dark text-center p-1 mr-2"><b><span className="angka">{countDown.hours}</span></b> h </div><div className="rounded bg-white opacity-50 border border-dark text-center p-1 mr-2"><b><span className="angka">{countDown.minutes}</span></b> m </div><div className="rounded bg-white opacity-50 border border-dark text-center p-1 mr-2"><b><span className="angka">{countDown.seconds}</span></b> s </div></span>
                        </div>
                    </div>
                </section>
            )}

            <section className="my-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 kotak-md-1 px-0-sm">
                            {(purchase.isCancel) &&
                                <button onClick={() => purchase?.isRefund ? setOpenFormRefund(v => !v) : handleCancelled()} type="button" className="btn mb-3 btn-danger btn-md btn-block">Batalkan Pesanan</button>
                            }
                            <div className="card mb-4" style={{ borderRadius: '15px' }}>
                                <div className="card-header py-3">
                                    <h6 className="font-weight-bold text-primary">Detail Pesanan</h6>
                                </div>
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

                            <div className="card mb-4" style={{ borderRadius: '20px' }}>
                                <div className="card-header border-top">
                                    <span className="card-title"><b>Produk</b></span>
                                </div>
                                <div className="card-product">
                                    <PurchaseComponent purchase={purchase} />
                                    <hr />
                                    {purchase.guest &&
                                        <div className="card-body">
                                            <h5>Tamu</h5>
                                            {/* {purchase.product === 'hotel' ? */}
                                            <div className="table-responsive">
                                                <table id="myTable" className="table m-0 table-striped table-hover table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th>No</th>
                                                            {
                                                                purchase.guest[0]?.title &&
                                                                <th>Title</th>
                                                            }
                                                            <th>Nama</th>
                                                            {purchase.guest[0]?.dob &&
                                                                <th>Tanggal Lahir</th>
                                                            }
                                                            {purchase.guest[0]?.type &&
                                                                <th>Tipe</th>
                                                            }
                                                            {purchase.guest[0]?.identificationNumber &&
                                                                <th>NIK</th>
                                                            }
                                                            {purchase.guest[0]?.passport?.nat &&
                                                                <th>Negara</th>
                                                            }
                                                            {purchase.guest[0]?.passport?.doi &&
                                                                <th>Passport Issue</th>
                                                            }
                                                            {purchase.guest[0]?.passport?.doe &&
                                                                <th>Expired Passport</th>
                                                            }
                                                            {purchase.guest[0]?.ssr &&
                                                                <th>Addon</th>
                                                            }
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {purchase.guest.map((item, index) => (
                                                            <tr key={index}>
                                                                <td>{++index}</td>
                                                                {item?.title &&
                                                                    <td>{item?.title}</td>
                                                                }
                                                                <td>{item.firstName} {item.lastName}</td>

                                                                {item?.dob &&
                                                                    <td>{item.dob}</td>
                                                                }

                                                                {item?.type &&
                                                                    <td>{item.type}</td>
                                                                }
                                                                {item?.identificationNumber &&
                                                                    <td>{item.identificationNumber}</td>
                                                                }
                                                                {item?.passport?.nat &&
                                                                    <td>{item?.passport?.nat}</td>
                                                                }
                                                                {item?.passport?.doi &&
                                                                    <td>{item?.passport?.doi}</td>
                                                                }
                                                                {item?.passport?.doe &&
                                                                    <td>{item?.passport?.doe}</td>
                                                                }
                                                                {item?.ssr &&
                                                                    <td><button onClick={() => handleOpenSsr(item.ssr)} type="button" className="btn btn-sm btn-primary">Check</button></td>
                                                                }
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    }
                                    <hr />
                                    {purchase.product === 'flight' &&
                                        <div className="card-body">
                                            <h5><b>Tarif</b></h5>
                                            <div className="table-responsive">
                                                <table className="table table-bordered mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th>No</th>
                                                            <th>Type</th>
                                                            <th>Qty</th>
                                                            <th>Price</th>
                                                            <th>Fee</th>
                                                            <th>Tax</th>
                                                            <th>Addons</th>
                                                            <th>Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="price-flight-list">
                                                        {getRate()?.map((item, index) => (
                                                            <tr>
                                                                <td>{++index}</td>
                                                                <td>{item.type}</td>
                                                                <td>{item.count}</td>
                                                                <td>Rp{item.subtotal.toLocaleString()}</td>
                                                                <td>Rp{item.fee.toLocaleString()}</td>
                                                                <td>Rp{item.tax.toLocaleString()}</td>
                                                                <td>Rp{item.addon.toLocaleString()}</td>
                                                                <td>Rp{item.total.toLocaleString()}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className="card-header">
                                    <span className="card-title">Kontak</span>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div>
                                                <label><strong>Nama</strong></label>
                                                <p>{purchase?.contact.firstName} {purchase?.contact.lastName}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div>
                                                <label><strong>Telepon</strong></label>
                                                <p>+{purchase?.contact.phoneCode} {purchase?.contact.phone}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div>
                                                <label><strong>Email</strong></label>
                                                <p>{purchase?.contact.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {(purchase.product === 'hotel' && purchase.status.id === 9) && (
                                <div className="row">
                                    <div className="col-12">
                                        <div class="card">
                                            <div class="card-body">
                                                <h4>Ulasan</h4>

                                                <div className="form-group">
                                                    <label>Judul Ulasan</label>
                                                    <input type="text" onChange={handleChangeReview} name='title_review' value={review.title_review} className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <label>Isi Ulasan</label>
                                                    <textarea onChange={handleChangeReview} name='content_review' value={review.content_review} className="form-control" rows={3} />
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label>Rating</label>
                                                            <StarRating rating={rating} setRating={setRating} />
                                                        </div>

                                                        <div className="form-group">
                                                            <label>HelpFull</label>
                                                            <StarRating rating={helpful} setRating={setHelpful} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label>Kebersihan</label>
                                                            <StarRating rating={fullReview['kebersihan']} setRating={(val) => handleSetFullReview('kebersihan', val)} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Kenyamanan</label>
                                                            <StarRating rating={fullReview['kenyamanan']} setRating={(val) => handleSetFullReview('kenyamanan', val)} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Lokasi</label>
                                                            <StarRating rating={fullReview['lokasi']} setRating={(val) => handleSetFullReview('lokasi', val)} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Layanan</label>
                                                            <StarRating rating={fullReview['layanan']} setRating={(val) => handleSetFullReview('layanan', val)} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Makanan</label>
                                                            <StarRating rating={fullReview['makanan']} setRating={(val) => handleSetFullReview('makanan', val)} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label>Fasilitas</label>
                                                            <StarRating rating={fullReview['fasilitas']} setRating={(val) => handleSetFullReview('fasilitas', val)} />
                                                        </div>

                                                        <div className="form-group">
                                                            <label>Staff</label>
                                                            <StarRating rating={fullReview['staff']} setRating={(val) => handleSetFullReview('staff', val)} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Harga</label>
                                                            <StarRating rating={fullReview['harga']} setRating={(val) => handleSetFullReview('harga', val)} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Parkir</label>
                                                            <StarRating rating={fullReview['parkir']} setRating={(val) => handleSetFullReview('parkir', val)} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-end w-100">
                                                    <button type="button" onClick={handleSubmitReview} className="btn btn-primary">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}


                        </div>
                        <div className="col-md-4 kotak-md-2 order-1 px-0-sm">
                            <div className="card shadow card-body mb-3 border-0 bg-primary text-white">
                                <p className="mb-0"><small>TOTAL PEMBELIAN</small></p>
                                <h3> <b>Rp{purchase?.price.total.toLocaleString()}</b></h3>

                            </div>
                            {purchase?.codeinv != 0 ?
                                <div className={`card-body border-bottom bg-warning py-2 bayar-disini rounded-bottom`}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <a href={`https://cdn.masterdiskon.com/masterdiskon/order/invoice/2023/` + purchase?.codeinv + `.pdf?`} target="_blank" type="button" class="btn btn-block btn-primary  "  >Cetak Invoice</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : <></>
                            }
                            <div className="card shadow mb-3 border-0">
                                <div className="card-body border-bottom">
                                    <p className="mb-0 text-muted"><small>NO PESANAN</small></p>
                                    <span>{purchase?.code}</span>
                                </div>
                                <div className="card-body border-bottom">
                                    <p className="mb-0 text-muted"><small>STATUS PESANAN</small></p>
                                    <p className={`badge badge-${purchase?.status.color} mb-0`}>{purchase?.status.name}</p>
                                    <p className="mb-0">{purchase?.status.description}</p>
                                </div>
                                <div className="card-body border-bottom">
                                    <p className="mb-0 text-muted"><small>RIWAYAT PESANAN</small></p>
                                    <div className="riwayat-pesanan">
                                        {purchase?.status.history.map(item => (
                                            <div className="d-flex justify-content-between my-2">
                                                <span><strong>{item.status}</strong></span>
                                                <span>{item.date}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p className="mb-0 text-muted"><small>RINCIAN PEMBAYARAN</small></p>
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
                                            <span className="text_fee"><strong>Rp{(purchase?.price.total - purchase?.price.subtotal).toLocaleString()}</strong></span>
                                        </div>

                                    }

                                    {purchase.product === 'flight' &&
                                        <div className="d-flex justify-content-between my-2">
                                            <span><strong>Tambahan</strong></span>
                                            <span className="extra-flight">Rp{purchase?.price.addon}</span>
                                        </div>
                                    }
                                    <div className="d-flex justify-content-between my-2">
                                        <span><strong>Biaya Penanganan</strong></span>
                                        <span>Rp{purchase?.price.fee.toLocaleString()}</span>
                                    </div>
                                    {purchase?.price.point > 0 &&
                                        <div className="d-flex justify-content-between my-2">
                                            <span><strong><small>Point digunakan</small></strong></span>
                                            <span className="text-danger">-{purchase?.price.point.toLocaleString()}</span>
                                        </div>
                                    }
                                    {purchase?.price.discount > 0 &&
                                        <div className="d-flex justify-content-between my-2">
                                            <span><strong><small>Diskon</small></strong></span>
                                            <span className="text-danger">-Rp{purchase?.price.discount.toLocaleString()}</span>
                                        </div>
                                    }
                                    <div className="d-flex justify-content-between my-2">
                                        <span><strong>Total tagihan</strong></span>
                                        <b>Rp{purchase?.price.total.toLocaleString()}</b>
                                    </div>
                                </div>
                            </div>
                            <div className="list-group-item ">
                                <div className="d-flex w-100 justify-content-between">
                                    <div>
                                        <b>{purchase?.payments?.id}</b>
                                        <p className="mb-0"><span className="badge badge-success">{purchase?.payments?.history[0]?.status}</span></p>
                                    </div>
                                    <div className="text-right">
                                        <small>{purchase?.payments?.history[0]?.date}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Modal isOpen={openPaymentChange} toggle={handleOpenPayment} centered size='lg'>
                <ModalBody>
                    <TabPayment handleChangePaymentMethod={handleChangePaymentMethod} paymentMethodSelected={purchase?.payments?.selected?.id ? purchase?.payments?.selected?.id : paymentMethodSelected} flightRepricing={purchase} />
                </ModalBody>
                <ModalFooter>
                    <button type="button" className="btn btn-primary" onClick={handleChangePayment}>Simpan perubahan</button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={openSsr} centered size='lg'>
                <ModalHeader toggle={() => handleOpenSsr([])}>
                    <h4>
                        Additional Details of Baggage and Meal
                    </h4>
                </ModalHeader>
                <ModalBody>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Tipe</th>
                                <th>Nama</th>
                                <th>Harga</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listSsr.map((item, index) => (
                                <tr>
                                    <td scope="row">{++index}</td>
                                    <td>{item.ssrType}</td>
                                    <td>{item.ssrType === 'meal' ? item.code.split('=')[0] : `${Math.floor(item.code.split(';')[0])}Kg`}</td>
                                    <td>{item.ssrType === 'meal' ? `Rp${Math.floor(item.code.split('=')[1]).toLocaleString()}` : `Rp${Math.floor(item.code.split(';')[1]).toLocaleString()}`}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ModalBody>
            </Modal>

            {/* form cancel*/}

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
        </>

    );

}


export default AccountPurchaseDetail;