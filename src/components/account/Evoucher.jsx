import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useSelector } from 'react-redux';
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
import generatePDF, { Resolution, Margin } from 'react-to-pdf';
import Image from 'next/image';
import { Icon } from "@iconify/react";

const purchaseComponent = {
    hotel: AccountPurchaseHotelDetail,
    flight: AccountPurchaseFlightDetail,
    product: AccountPurchaseProductDetail
};

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
                    height: '50vh',
                    marginBottom: '5rem'
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
                    height: '50vh',
                    marginBottom: '5rem'
                }}
                className="d-flex flex-column align-items-center justify-content-center"
            >
                <h4>Data pesanan tidak ditemukan</h4>
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

    const PurchaseComponent = purchaseComponent[purchase.product];

    // Function to handle the PDF download
    const options = {
        // default is `save`
        method: 'save',
        // default is Resolution.MEDIUM = 3, which should be enough, higher values
        // increases the image quality but also the size of the PDF, so be careful
        // using values higher than 10 when having multiple pages generated, it
        // might cause the page to crash or hang.
        resolution: Resolution.HIGH,
        page: {
            // margin is in MM, default is Margin.NONE = 0
            margin: Margin.SMALL,
            // default is 'A4'
            format: 'A4',
            // default is 'portrait'
            orientation: 'portrait',
        },
        canvas: {
            // default is 'image/jpeg' for better size performance
            mimeType: 'image/jpeg',
            qualityRatio: 1
        },
        // Customize any value passed to the jsPDF instance and html2canvas
        // function. You probably will not need this and things can break, 
        // so use with caution.
        overrides: {
            // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
            pdf: {
                compress: true
            },
            // see https://html2canvas.hertzen.com/configuration for more options
            canvas: {
                useCORS: false
            }
        },
    };

    // you can use a function to return the target element besides using React refs
    const getTargetElement = () => document.getElementById('content-id');

    return (
        <>
            {purchase.status.id === 9 ?
                <>
                    <div className='bg-white'>
                        <br />
                        <center className='mb-3'>
                            <button onClick={() => generatePDF(getTargetElement, options)} className="btn btn-primary btn-block" style={{width:'auto'}}>Download E-Voucher</button>
                        </center>
                        <div id="content-id">
                            <div className='p-5'>
                                <div className='row'>
                                    <div className="col-md-6">
                                        <p style={{ fontSize: '45px', fontWeight: '600' }}>Voucher
                                            {purchase.product === 'hotel' ?
                                                <> Hotel</>
                                                :
                                                <> Flight</>
                                            }
                                        </p>
                                        <br /><br />
                                    </div>
                                    <div className="col-md-4">
                                    </div>
                                    <div className="col-md-2">
                                        <Image src='https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/masterdiskon_logo.png' style={{ width: '100%', height: '200px' }} />
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-4">
                                        <p style={{ fontSize: '28px', fontWeight: '500' }}>Order ID</p>
                                        <p style={{ fontSize: '36px', fontWeight: '600' }} className='mt-4 mb-5'>
                                            {purchase.product === 'hotel' ?
                                                <>
                                                    {purchase.codev}
                                                </>
                                                :
                                                <>
                                                    {purchase.code}
                                                </>
                                            }
                                        </p>
                                        <br />
                                        <p style={{ fontSize: '24px' }}>
                                            Booked and payable by masterdiskon
                                        </p>
                                    </div>
                                    <div className='col-md-8'>
                                        {purchase.product === 'hotel' ?
                                            <>
                                                <p style={{ fontSize: '28px', fontWeight: '600' }}>
                                                    <span className='mr-3 mb-4'>{purchase.name}</span>
                                                    {renderStar()}
                                                </p>
                                                <p style={{ fontSize: '21px' }}>{purchase.detail.address}</p>
                                                <p style={{ fontSize: '21px' }}>{purchase.detail.city}</p>
                                                <br />
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
                                                        <p style={{ fontSize: '24px', fontWeight: '500' }}>Detail</p>
                                                        <p style={{ fontSize: '24px', fontWeight: '600' }}>{purchase?.room?.numOfRoom} Kamar - {purchase?.room?.numOfAdults} Tamu</p>
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            <>
                                                <p style={{ fontSize: '28px', fontWeight: '600' }}>
                                                    <span className='mr-3 mb-4'>{purchase?.detail.onwardFlight.flight[0].name} - {purchase?.detail.onwardFlight.flight[0].code} - {purchase?.detail.onwardFlight.flight[0].class}</span>
                                                </p>
                                                <br />
                                                <div className='row'>
                                                    <div className="col-md-3">
                                                        <p style={{ fontSize: '24px', fontWeight: '500' }}><Icon icon='ph:calendar-check-duotone' className="mr-2 text-primary"></Icon> From</p>
                                                        <p style={{ fontSize: '22px', fontWeight: '600' }}>{purchase?.detail.onwardFlight.from.name} ({purchase?.detail.onwardFlight.from.code})</p>
                                                        <p style={{ fontSize: '20px', fontWeight: '500' }}><Icon icon='ph:clock-duotone' className="mr-2 text-primary"></Icon> {purchase?.detail.onwardFlight.flight[0].departure.date} - {purchase?.detail.onwardFlight.flight[0].departure.time}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <p style={{ fontSize: '24px', fontWeight: '500' }}><Icon icon='ph:calendar-check-duotone' className="mr-2 text-primary"></Icon> To</p>
                                                        <p style={{ fontSize: '22px', fontWeight: '600' }}>{purchase?.detail.onwardFlight.to.name} ({purchase?.detail.onwardFlight.to.code})</p>
                                                        <p style={{ fontSize: '20px', fontWeight: '500' }}><Icon icon='ph:clock-duotone' className="mr-2 text-primary"></Icon> {purchase?.detail.onwardFlight.flight[0].arrival.date} - {purchase?.detail.onwardFlight.flight[0].arrival.time}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <p style={{ fontSize: '24px', fontWeight: '500' }}><Icon icon='mdi:calendar-clock-outline' className="mr-2 text-primary"></Icon> Durasi</p>
                                                        <p style={{ fontSize: '22px', fontWeight: '600' }}>{purchase?.detail.onwardFlight.flight[0].flyTime}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <p style={{ fontSize: '24px', fontWeight: '500' }}>Detail</p>
                                                        <p style={{ fontSize: '20px', fontWeight: '600' }}>{purchase?.guest?.length} Tamu</p>
                                                        <p style={{ fontSize: '20px', fontWeight: '600' }}>{purchase?.status?.vendor}</p>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                    </div>
                                </div>
                                <br />
                                <br />
                                <div>
                                    <p style={{ fontSize: '32px', fontWeight: '600' }}>Detail Tamu</p>
                                    <br />
                                    <table class="table table-bordered">
                                        <thead className='bg-primary text-white'>
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
                                        <p style={{ fontSize: '28px', fontWeight: '500' }}>
                                            {purchase.product === 'hotel' ?
                                                <>
                                                    {purchase.codev}
                                                </>
                                                :
                                                <>
                                                    {purchase.code}
                                                </>
                                            }
                                        </p>
                                    </div>
                                </div>
                                <br />
                                <hr />
                                <div className='row mt-4'>
                                    <div className="col-md-12">
                                        <p style={{ fontSize: '28px', fontWeight: '600' }}>Kebijakan Pembatalan</p>
                                        <ul>
                                            <li>
                                                <p style={{ fontSize: '24px' }}> Pemesanan ini tidak dapat di refund</p>
                                            </li>
                                            <li>
                                                <p style={{ fontSize: '24px' }}> Waktu yang ditampilkan sesuai dengan waktu schedule, Tanggal tidak dapat diubah</p>
                                            </li>
                                            <li>
                                                <p style={{ fontSize: '24px' }}> Prosedur refund dapat dilihat secara lengkap di www.masterdiskon.com/kebijakan/pembatalan</p>
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
                                        <p style={{ fontSize: '24px', fontWeight: '500' }}>Pesan pakai Masterdiskon App dan dapatkan harga spesial setiap harinya</p>
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

export default Evoucher;
