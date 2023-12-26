import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import userApi from '@/api/user';
import moment from 'moment';
import TabPayment from '../shared/TabPayment';
import { toast } from 'react-toastify';
import { Icon } from '@iconify/react'
import AccountPurchaseHotelDetail from './AccountPurchaseHotelDetail';
import AccountPurchaseFlightDetail from './AccountPurchaseFlightDetail';
import AccountPurchaseTrainDetail from './AccountPurchaseTrainDetail';
import StatusLabel from '../shared/StatusLabel';
import AccountPurchaseProductDetail from './AccountPurchaseProductDetail';
import { useMediaQuery } from 'react-responsive';
import StarRating from '../shared/StarRating';
import shopApi from '@/api/shop';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import masterApi from '@/api/master';
import { stringify } from 'query-string';

const purchaseComponent = {
    hotel: AccountPurchaseHotelDetail,
    flight: AccountPurchaseFlightDetail,
    train: AccountPurchaseTrainDetail,
    product: AccountPurchaseProductDetail
}

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const Input = styled.input`
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const PreviewImage = styled.img`
  max-width: 100px;
  height: 100px;
  border-radius: 5px;
`;

const validateFile = (file) => {
    const allowedExtensions = ['jpg', 'jpeg', 'png'];
    const fileNameParts = file.name.split('.');
    const fileExtension = fileNameParts[fileNameParts.length - 1].toLowerCase();

    return allowedExtensions.includes(fileExtension);
};

function AccountPurchaseDetail() {
    const { access_token } = useSelector(state => state.token)
    const router = useRouter()
    const [purchase, setPurchase] = useState();
    const [purchaseIssued, setPurchaseIssued] = useState();
    const user = useSelector(state => state.user);

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

    const [images, setImages] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);

    const [fullReview, setFullReview] = useState({
        kebersihan: '',
        kenyamanan: '',
        makanan: '',
        lokasi: '',
        pelayanan: ''
    })

    const [bank, setBank] = useState([]);
    const [cancelRequest, setCancelRequest] = useState({});

    const handleSetFullReview = (name, value) => {
        setFullReview(prev => ({ ...prev, [name]: value }))
    }

    const [review, setReview] = useState({
        title_review: '',
        content_review: '',
        penilaian: '',
        type: '',
        score: ''
    });

    const handleChangeReview = (e) => {
        const { value, name } = e.target
        setReview(prev => ({ ...prev, [name]: value }))
    }


    const handleSubmitIssued = () => {
        let obj = tokenIssued;
        try {
            if (obj === "") {
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
                            text: 'Pesanan Anda sedang kami proses, Mohon menunggu!',
                            icon: 'success',
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                            timer: 15000,
                            showConfirmButton: false,
                        }).then(function () {
                            const req = {
                                "product": purchase.product,
                                "key": user.role === 'user' ? purchase.period.codeId : purchase.codeId,
                                "token": obj
                            }

                            userApi.submitIssued(access_token, req)
                            .then(res => {
                                if (res.success) {
                                    setTimeout(() => {
                                        const number = user.role === 'user' ? purchase.period.codeId : purchase.codeId;
                                        const reqInv = {
                                            "id_order": number.toString(),
                                            "address": '',
                                            "memo": '',
                                        }

                                        userApi.submitInvoice(access_token, reqInv)
                                            .then(res => {
                                                Swal.fire({
                                                    title: 'Berhasil!',
                                                    text: 'Pesanan Anda berhasil diproses!',
                                                    icon: 'success',
                                                    closeOnClickOutside: false,
                                                    closeOnEsc: false,
                                                    showConfirmButton: false,
                                                    timer: 2000
                                                }).then(function () {
                                                    window.location.reload();
                                                });
                                            }).catch(error => {
                                                Swal.fire({
                                                    title: 'Gagal!',
                                                    text: 'Cetak invoice tidak berhasil dibuat',
                                                    icon: 'danger',
                                                    closeOnClickOutside: false,
                                                    closeOnEsc: false,
                                                    showConfirmButton: false,
                                                    timer: 1000
                                                }).then(function () {
                                                    window.location.reload();
                                                });
                                            })
                                    }, 1000);
                                } else {
                                    Swal.fire({
                                        title: 'Gagal!',
                                        text: 'Pesanan Gagal Dipesan "' + res.message + '"',
                                        icon: 'danger',
                                        closeOnClickOutside: false,
                                        closeOnEsc: false,
                                        showConfirmButton: false,
                                        timer: 1000
                                    }).then(function () {
                                        window.location.reload();
                                    });
                                }
                            }).catch(error => {
                                Swal.fire({
                                    title: 'Gagal!',
                                    text: 'Pesanan gagal diproses',
                                    icon: 'danger',
                                    closeOnClickOutside: false,
                                    closeOnEsc: false,
                                    showConfirmButton: false,
                                    timer: 1000
                                }).then(function () {
                                    window.location.reload();
                                });
                            })
                        });
                    } else {
                        Swal.fire("Dibatalkan", "Anda membatalkan untuk melakukan pemesanan ini.", "error");
                    }
                });
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleConfirmIssuedMidtrans = () => {
        let obj = tokenIssued;
        try {
            if (obj === "") {
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
                            text: 'Pesanan Anda sedang kami proses, Mohon menunggu!',
                            icon: 'success',
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                            timer: 15000,
                            showConfirmButton: false,
                        }).then(function () {
                            const req = {
                                "product": purchase.product,
                                "key": user.role === 'user' ? purchase.period.codeId : purchase.codeId,
                                "token": obj
                            }

                            userApi.submitIssued(access_token, req)
                                .then(res => {
                                    userApi.getPurchase(access_token, { key: router.query.id }).then(res => {
                                        if (res.success) {
                                            setPurchaseIssued(res.data)
                                            if (purchaseIssued.status.id === 7 || purchaseIssued.status.vendor === 'CONFIRMED') {
                                                setTimeout(() => {
                                                    const number = user.role === 'user' ? purchase.period.codeId : purchase.codeId;
                                                    const reqInv = {
                                                        "id_order": number.toString(),
                                                        "address": '',
                                                        "memo": '',
                                                    }

                                                    userApi.submitInvoice(access_token, reqInv)
                                                        .then(res => {
                                                            Swal.fire({
                                                                title: 'Berhasil!',
                                                                text: 'Pesanan Anda berhasil diproses!',
                                                                icon: 'success',
                                                                closeOnClickOutside: false,
                                                                closeOnEsc: false,
                                                                showConfirmButton: false,
                                                                timer: 2000
                                                            }).then(function () {
                                                                window.location.reload();
                                                            });
                                                        }).catch(error => {
                                                            Swal.fire({
                                                                title: 'Gagal!',
                                                                text: 'Cetak invoice tidak berhasil dibuat',
                                                                icon: 'danger',
                                                                closeOnClickOutside: false,
                                                                closeOnEsc: false,
                                                                showConfirmButton: false,
                                                                timer: 1000
                                                            }).then(function () {
                                                                window.location.reload();
                                                            });
                                                        })
                                                }, 5000);
                                            } else {
                                                Swal.fire({
                                                    title: 'Gagal!',
                                                    text: 'Pesanan Gagal Dipesan "' + res.message + '"',
                                                    icon: 'danger',
                                                    closeOnClickOutside: false,
                                                    closeOnEsc: false,
                                                    showConfirmButton: false,
                                                    timer: 1000
                                                }).then(function () {
                                                    window.location.reload();
                                                });
                                            }
                                        }
                                    })
                                }).catch(error => {
                                    Swal.fire({
                                        title: 'Gagal!',
                                        text: 'Pesanan gagal diproses',
                                        icon: 'danger',
                                        closeOnClickOutside: false,
                                        closeOnEsc: false,
                                        showConfirmButton: false,
                                        timer: 1000
                                    }).then(function () {
                                        window.location.reload();
                                    });
                                })
                        });
                    } else {
                        Swal.fire("Dibatalkan", "Anda membatalkan untuk melakukan pemesanan ini.", "error");
                    }
                });
            }
        } catch (error) {
            console.error(error);
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

    const handleFileChange = (e) => {
        setImages([]);

        const selectedFiles = e.target.files;

        if (images.length > 5) {
            toast.error(`Hanya diperbolehkan maksimal 5 gambar`)
            return;
        }

        // Membuat pratinjau gambar
        const previewList = [];
        for (let i = 0; i < selectedFiles.length; i++) {
            const file = selectedFiles[i];

            // Validasi ekstensi file
            if (validateFile(file)) {
                const url = URL.createObjectURL(file);
                previewList.push(url);
            } else {
                toast.error(`File '${file.name}' tidak valid. Harap pilih file dengan ekstensi jpg, jpeg, atau png.`);
            }
        }

        // Menyimpan gambar yang valid
        setImages([...images, ...Array.from(selectedFiles).filter(validateFile)]);
        setPreviewImages(previewList);
    };

    const handleSubmitReview = () => {
        if (!review.penilaian && !review.type && !review.title_review && !review.content_review && !review.score && !fullReview.kebersihan && !fullReview.kenyamanan
            && !fullReview.makanan && !fullReview.lokasi && !fullReview.pelayanan) {
            toast.error(`Ada form review yang belum di isi`)
        } else if (images.length < 1) {
            toast.error(`Belum ada gambar, minimal 1`)
        } else if (images.length > 5) {
            toast.error(`Hanya diperbolehkan maksimal 5 gambar`)
            return;
        } else {
            const data = {
                id_order: router.query.id,
                hotelid: purchase?.detail.hotelid,
                id_review_type: review.penilaian,
                id_review_attributes: review.type,
                title_review: review.title_review,
                content_review: review.content_review,
                reviewScore: review.score,
                rating_kebersihan: fullReview.kebersihan,
                rating_kenyamanan: fullReview.kenyamanan,
                rating_makanan: fullReview.makanan,
                rating_lokasi: fullReview.lokasi,
                rating_pelayanan: fullReview.pelayanan
            }

            shopApi.addReview(data, access_token).then(res => {
                if (res.success) {
                    // Membuat objek FormData untuk mengirim file ke server
                    const formData = new FormData();
                    formData.append('id_review', res.meta);
                    formData.append('hotelid', purchase?.detail.hotelid);

                    for (let i = 0; i < images.length; i++) {
                        formData.append('images', images[i]);
                    }

                    try {
                        userApi.uploadImage(access_token, formData).then(async res => {
                            if (res.success) {
                                toast.success(`Ulasan berhasil dikirim`)

                                setTimeout(() => {
                                    window.location.reload();
                                }, 2000);
                            }
                        })
                    } catch (error) {
                        toast.error(`Error uploading images`)
                    }
                } else {
                    toast.error('Ulasan tidak lengkap')
                }
            })
        }
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

    const purchaseCode = purchase?.codev || ''; // Pastikan purchase?.codev tidak undefined/null
    const whatsappLink = `https://wa.me/6282255003535/?text=${encodeURIComponent(`Halo! Saya mengalami pemesanan tiket gagal pada No Order ${purchaseCode}, apakah bisa dibantu?`)}`;

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
                        <div className="col-md-8 px-0-sm">
                            {(purchase.isCancel) &&
                                <button onClick={() => purchase?.isRefund ? setOpenFormRefund(v => !v) : handleCancelled()} type="button" className="btn mb-3 btn-danger btn-md btn-block">Batalkan Pesanan</button>
                            }
                            <div className="mt-3 mb-4" style={{ borderRadius: '20px' }}>
                                {purchase.status.id === 13 ?
                                    <StatusLabel clickable={clickable} handleOpenPayment={handleOpenPayment} handleSubmitIssued={handleSubmitIssued} handleConfirmIssuedMidtrans={handleConfirmIssuedMidtrans} purchase={purchase} setClickable={setClickable} setTokenIssued={setTokenIssued} />
                                    :
                                    <StatusLabel clickable={clickable} handleOpenPayment={handleOpenPayment} handleSubmitIssued={handleSubmitIssued} handleConfirmIssuedMidtrans={handleConfirmIssuedMidtrans} purchase={purchase} setClickable={setClickable} setTokenIssued={setTokenIssued} />
                                }
                            </div>

                            <div className="card mb-4" style={{ borderRadius: '20px' }}>
                                <div className="card-product">
                                    <PurchaseComponent purchase={purchase} />
                                </div>
                            </div>
                            
                            {/* {purchase.product === 'flight' &&
                                <div className="card mb-4" style={{ borderRadius: '20px' }}>
                                    <div className="card-body">
                                        <h5><b>Tarif Penumpang</b></h5>
                                        <div className="table-responsive mt-3">
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
                                </div>
                            } */}
                           
                            <div className="card mb-4" style={{ borderRadius: '20px' }}>
                                <div className="card-body">
                                    <h5>Detail Pemesan</h5>
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div>
                                                <label>Nama Lengkap</label>
                                                <p className='font-weight-bold'>{purchase?.contact.firstName} {purchase?.contact.lastName}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div>
                                                <label>No Handphone</label>
                                                <p className='font-weight-bold'>+{purchase?.contact.phoneCode} {purchase?.contact.phone}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div>
                                                <label>E-mail</label>
                                                <p className='font-weight-bold'>{purchase?.contact.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card" style={{ borderRadius: '20px' }}>
                                {purchase.guest &&
                                    <div className="card-body">
                                        {purchase?.product === 'flight' || purchase?.product === 'train' ?
                                            <>
                                                <h5>Detail Penumpang</h5>
                                            </>
                                            :
                                            <>
                                                <h5>Detail Tamu</h5>
                                            </>
                                        }
                                        {/* {purchase.product === 'hotel' ? */}
                                        <div className="table-responsive mt-3">
                                            <table id="myTable" className="table">
                                                <thead>
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Nama Lengkap</th>
                                                        {purchase.guest[0]?.dob &&
                                                            <th>Tanggal Lahir</th>
                                                        }
                                                        {purchase.guest[0]?.type &&
                                                            <th>Tipe</th>
                                                        }
                                                        {purchase.guest[0]?.identificationNumber &&
                                                            <th>Nomor Identitas</th>
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
                                                            {item?.dob &&
                                                                <td>{item.dob}</td>
                                                            }
                                                            {item?.type &&
                                                                <td>{item.type === "adt" ? "Dewasa" : item.type === "chd" ? "Anak" : item.type === "inf" ? "Bayi" : ""}</td>
                                                            }
                                                            {item?.identificationNumber &&
                                                                <td>{item.identificationNumber}</td>
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
                                    </div>
                                }
                            </div>
                            {(purchase.product === 'hotel' && (purchase.status.id === 9 || purchase.status.id === 7 || purchase.status.id === 15)) ? 
                                <>
                                    {purchase.reviewIncluded === false ?
                                        <div className="row my-5">
                                            <div className="col-12">
                                                <div class="card" style={{ borderRadius: '20px' }}>
                                                    <div class="card-body">
                                                        <div className='mb-2'>
                                                            <h4>Review</h4>
                                                            <small>Berikan Review Anda Agar Dapat Meningkatkan Kepercayaan Mitra Kami</small>
                                                        </div>

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
                                                                <label>Penilaian</label>
                                                                <select value={review.penilaian} name='penilaian' className="form-control" onChange={handleChangeReview}>
                                                                    <option value="">- Pilih Penilaian -</option>
                                                                    <option value="1">Fantastis</option>
                                                                    <option value="2">Sangat Bagus</option>
                                                                    <option value="3">Memuaskan</option>
                                                                    <option value="4">Biasa</option>
                                                                    <option value="5">Buruk</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label>Type</label>
                                                                <select value={review.type} name='type' className="form-control" onChange={handleChangeReview}>
                                                                    <option value="">- Pilih Type -</option>
                                                                    <option value="1">Staycation</option>
                                                                    <option value="2">Transit</option>
                                                                    <option value="3">Shopping & Kuliner</option>
                                                                    <option value="4">Liburan Santai</option>
                                                                    <option value="5">Liburan Romatis</option>
                                                                    <option value="6">Liburan Keluarga</option>
                                                                    <option value="7">Urusan Bisnis</option>
                                                                    <option value="8">Urusan Medis</option>
                                                                    <option value="9">Backpacking</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label>Score</label>
                                                                <select value={review.score} name='score' className="form-control" onChange={handleChangeReview}>
                                                                    <option value="">- Pilih Score -</option>
                                                                    <option value="10">Very Perfect - (10)</option>
                                                                    <option value="9">Perfect - (9)</option>
                                                                    <option value="8">Very Excellent - (8)</option>
                                                                    <option value="7">Excellent - (7)</option>
                                                                    <option value="6">Good - (6)</option>
                                                                    <option value="5">Intermediate - (5)</option>
                                                                    <option value="4">Not Good - (4)</option>
                                                                    <option value="3">Very Not Good - (3)</option>
                                                                    <option value="2">Below average - (2)</option>
                                                                    <option value="1">Very Below Average - (1)</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="row mt-3">
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label>Kebersihan</label>
                                                                    <StarRating rating={fullReview['kebersihan']} setRating={(val) => handleSetFullReview('kebersihan', val)} />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label>Kenyamanan</label>
                                                                    <StarRating rating={fullReview['kenyamanan']} setRating={(val) => handleSetFullReview('kenyamanan', val)} />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label>Makanan</label>
                                                                    <StarRating rating={fullReview['makanan']} setRating={(val) => handleSetFullReview('makanan', val)} />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label>Lokasi</label>
                                                                    <StarRating rating={fullReview['lokasi']} setRating={(val) => handleSetFullReview('lokasi', val)} />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label>Pelayanan</label>
                                                                    <StarRating rating={fullReview['pelayanan']} setRating={(val) => handleSetFullReview('pelayanan', val)} />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <Container>
                                                                <Input type="file" name="images" multiple onChange={handleFileChange} />

                                                                {/* Menampilkan pratinjau gambar */}
                                                                <PreviewContainer>
                                                                    {previewImages.map((previewUrl, index) => (
                                                                        <PreviewImage key={index} src={previewUrl} alt={`Preview ${index}`} />
                                                                    ))}
                                                                </PreviewContainer>
                                                            </Container>
                                                        </div>

                                                        <div className="d-flex justify-content-end w-100 mt-3">
                                                            <button type="button" onClick={handleSubmitReview} className="btn btn-primary">Submit Review</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div className='card mt-3' style={{ borderRadius: '20px' }}>
                                            <div className='card-body'>
                                                <div className='mb-2'>
                                                    <h4>Review</h4>
                                                    <small>Terima Kasih Review Anda Sangat Membantu Meningkatkan Kepercayaan Mitra Kami</small>
                                                </div>
                                                <hr />
                                                <div className="row mt-3">
                                                    <div className="col-md-12">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <span style={{ fontSize: '16px', background: '#ecf8ff' }} className={`badge badge-lg text-secondary`}>
                                                                <Icon icon="material-symbols:rewarded-ads-rounded" className='mr-2 text-primary' /> <span className='text-primary'>{purchase?.review?.reviewScore}</span> / 10
                                                            </span>
                                                            <div>
                                                                {purchase?.review?.date}
                                                            </div>
                                                        </div>
                                                        <p className='my-4' dangerouslySetInnerHTML={{ __html: purchase?.review?.content }}></p>
                                                        <div className='row'>
                                                            {purchase?.review?.image && purchase?.review?.image.length > 0 && (
                                                                purchase?.review?.image.map((img, index) => (
                                                                    <div key={img.url} className="col-md-2" style={{ cursor: "pointer" }}>
                                                                        {img.url && (
                                                                            <img
                                                                                src={img.url}
                                                                                alt="Gambar Masterdiskon"
                                                                                style={{ width: '100px', height: '100px', borderRadius: '10px' }}
                                                                            />
                                                                        )}
                                                                    </div>
                                                                ))
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </>
                                : ''
                            }
                            
                        </div>
                        <div className="col-md-4 px-0-sm">
                            <div className="card card-body my-3 border-0 bg-primary text-white" style={{ borderRadius: '20px' }}>
                                <p className="mb-0"><small>TOTAL PEMBELIAN</small></p>
                                <h3> <b>Rp{purchase?.price.total.toLocaleString()}</b></h3>

                            </div>
                            {(purchase?.codeinv != 0 && purchase.status.id === 15 || purchase.status.id === 9) && (
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <a href={'/user/invoice/detail/' + purchase.codeId} target="_blank" type="button" class="btn btn-block btn-danger font-weight-bold" style={{ borderRadius: '20px' }}>Cetak Invoice</a>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="card mb-3" style={{ borderRadius: '20px' }}>
                                <div className="card-body border-bottom">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className="mb-0 text-muted"><small>NO PESANAN</small></p>
                                        </div>
                                        <div className="col-md-6">
                                            {purchase?.product === 'flight' ?
                                                <>
                                                    <span className='font-weight-bold float-right'>{purchase?.code}</span>
                                                </>
                                                :
                                                <>
                                                    <span className='font-weight-bold float-right'>{purchase?.codev}</span>
                                                </>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body border-bottom">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className="mb-0 text-muted"><small>STATUS PESANAN</small></p>
                                        </div>
                                        <div className="col-md-6">
                                            <small className={`bg-${purchase?.status.color} px-2 mb-0 float-right font-weight-bold text-white rounded`}>{purchase?.status.name}</small>
                                        </div>
                                    </div>
                                    {purchase?.status.name === 'Booking' && user.role === 'user' ?
                                        <div className='mt-1 float-right'>
                                            <small className='text-danger'>Menunggu Pembayaran</small>
                                        </div>
                                        : ''
                                    }
                                    {purchase?.status.name === 'Failed' || purchase?.status.name === 'Error' || purchase?.status.name === 'Dropped' ?
                                        <div className='mt-3 float-center'>
                                            <small>Jika Mengalami Kesalahan Sistem Hubungi Kami, Untuk Di Proses Lebih Lanjut</small><br />
                                            <a href={whatsappLink} target='_blank' className='btn btn-success btn-sm mt-2'>Hubungi CS Kami</a>
                                        </div>
                                        : ''
                                    }
                                    
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
                                    <div className="d-flex justify-content-between my-2">
                                        <span><strong>Biaya Penanganan</strong></span>
                                        {purchase?.price.fee ?
                                            <>
                                                <span>Rp{purchase?.price.fee.toLocaleString()}</span>
                                            </>
                                            :
                                            <>
                                                <span>Rp{purchase?.price.margin.toLocaleString()}</span>
                                            </>
                                        }
                                    </div>
                                    {purchase?.price.discount > 0 &&
                                        <div className="d-flex justify-content-between my-2">
                                            <span><strong>Diskon</strong></span>
                                            <span className="text-danger">-Rp{purchase?.price.discount.toLocaleString()}</span>
                                        </div>
                                    }
                                    <hr />
                                    {purchase.product === 'flight' &&
                                        <div className="d-flex justify-content-between my-2">
                                            <span><strong>Tambahan</strong></span>
                                            {purchase?.price.addon > 0 ?
                                                <>
                                                    <span className="extra-flight text-success"><strong>Include</strong></span>
                                                </>
                                                :
                                                <>
                                                    <span className="extra-flight"><strong>Rp{purchase?.price.addon.toLocaleString()}</strong></span>
                                                </>
                                            }
                                        </div>
                                    }
                                    {purchase.product === 'flight' ?
                                        <div className="d-flex justify-content-between my-2">
                                            <span><strong>Pajak 1,1% dan lainnya </strong></span>
                                            <span className="tax-and-more">
                                                Rp{purchase?.price.tax.toLocaleString()}
                                            </span>
                                        </div>
                                        :
                                        <div className="d-flex justify-content-between my-2">
                                            <span><strong>Pajak 1,1%</strong></span>
                                            {purchase?.price.tax === 0 ?
                                                <>
                                                    <span className="text_fee text-success"><strong>Include</strong></span>
                                                </>
                                                :
                                                <>
                                                    <span className="text_fee">Rp{purchase?.price?.tax.toLocaleString()}</span>
                                                </>
                                            }
                                        </div>

                                    }
                                    {purchase?.price.point > 0 &&
                                        <div className="d-flex justify-content-between my-2">
                                            <span><strong><small>Point digunakan</small></strong></span>
                                            <span className="text-danger">-{purchase?.price.point.toLocaleString()}</span>
                                        </div>
                                    }
                                    <hr />
                                    <div className="d-flex justify-content-between my-2">
                                        <span><strong>Total Tagihan</strong></span>
                                        <b style={{fontSize: '22px'}} className='text-primary'>Rp{purchase?.price.total.toLocaleString()}</b>
                                    </div>
                                </div>
                            </div>
                            <div className="list-group-item" style={{ borderRadius: '20px' }}>
                                <div className="d-flex w-100 justify-content-between">
                                    <div>
                                        <b>{purchase?.payments?.id}</b>
                                    </div>
                                    <div className="text-right">
                                        <small>{purchase?.payments?.history[0]?.date}</small>
                                    </div>
                                </div>
                                <div className="d-flex w-100 justify-content-between mt-2">
                                    <div>
                                        {purchase?.payments?.history[0]?.status === 'settlement' ?
                                            <>
                                                <small className="mt-3">Berhasil Melakukan Pembayaran</small>
                                            </>
                                            : ''
                                        }
                                    </div>
                                    <div className="text-right">
                                        <span className="badge badge-success">{purchase?.payments?.history[0]?.status}</span>
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
                        Detail Tambahan Bagasi dan Makanan
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