import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import userApi from '@/api/user';
import AccountPurchaseHotelDetail from './AccountPurchaseHotelDetail';
import AccountPurchaseFlightDetail from './AccountPurchaseFlightDetail';
import AccountPurchaseProductDetail from './AccountPurchaseProductDetail';
import generatePDF, { Resolution, Margin } from 'react-to-pdf';
import Image from 'next/image';
import { Icon } from "@iconify/react";

function Invoice() {
    const { user } = useSelector(state => state)
    const { access_token } = useSelector((state) => state.token);
    const router = useRouter();
    const [purchase, setPurchase] = useState();
    const [invoice, setInvoice] = useState();
    const [errorInvoice, seterrorInvoice] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (router.isReady) {
            userApi.getPurchase(access_token, { key: router.query.id }).then((res) => {
                if (res.success) {
                    setPurchase(res.data);
                }
            });
        }
    }, [router.query.id]);

    useEffect(() => {
        setLoading(true);
        if (router.isReady) {
            const number = router.query.id;
            const reqData = {
                "id_order": number.toString(),
                "role": "user",
                "id_user": user.id_user
            }

            userApi.getInvoiceDetail(access_token, reqData)
                .then((res) => {
                    if (res.status.code === 200) {
                        setInvoice(res.data);
                    }
                    setLoading(false);
                }).catch(error => {
                    seterrorInvoice(true)
                });
        }
    }, [router.query.id], invoice);

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

    if (errorInvoice) {
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
                <h4>Data invoice tidak ditemukan</h4>
            </div>
        );
    }

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

    const handleGeneratePDF = () => {
        setLoading(true); // Set loading to true when starting PDF generation

        // generatePDF(getTargetElement, options); // Call your generatePDF function

        // After PDF generation is complete (you may need to listen to some event or use a callback),
        // set loading to false to indicate that the process is done.
        // Example:
        generatePDF(getTargetElement, options).then(() => setLoading(false));
    };

    // you can use a function to return the target element besides using React refs
    const getTargetElement = () => document.getElementById('content-id');

    return (
        <>
            {purchase?.status?.id === 15 || purchase?.status?.id === 9 || purchase?.status?.id === 7 ?
                <>
                    <div className='bg-white'>
                        <br />
                        <center className='mb-3'>
                            <button onClick={handleGeneratePDF} className="btn btn-primary btn-block" style={{ width: 'auto' }}>Download Invoice</button>
                        </center>
                        <div id="content-id">
                            <div className='p-5'>
                                <div className='row'>
                                    <div className="col-md-6">
                                        <p style={{ fontSize: '50px', fontWeight: '600' }}>
                                            Proforma Invoice
                                        </p>
                                        <br /><br />
                                    </div>
                                    <div className="col-md-4">
                                    </div>
                                    <div className="col-md-2">
                                        <Image src='https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/masterdiskon_logo.png' layout='fill' alt="Image Masterdiskon" />
                                    </div>
                                </div>
                                <br /><br />
                                <div className="row">
                                    <div className="col-md-6">
                                        <p style={{ fontSize: '36px', fontWeight: '600', lineHeight: 1.6 }} className='mt-3 mb-3'>
                                            PT. MASTER DISKON INTERNATIONAL
                                        </p>
                                        <p style={{ fontSize: '26px', fontWeight: '500', lineHeight: 1.6 }}>
                                            Jl. H. Baping Raya No. 100, Ciracas, Jakarta Timur <br />
                                            (021) 8770 6010 <br />
                                            (021) 8770 0903 <br />
                                            info@masterdiskon.com <br />
                                            93.173.280.4-009.000
                                        </p>
                                    </div>
                                    <div className='col-md-2'>
                                        <p style={{ fontSize: '30px', fontWeight: '600', textAlign: 'right' }}>
                                            Tanggal :
                                        </p>
                                        <p style={{ fontSize: '30px', fontWeight: '600', textAlign: 'right' }}>
                                            Faktur :
                                        </p>
                                    </div>
                                    <div className='col-md-4'>
                                        <p style={{ fontSize: '30px', fontWeight: '600', textAlign: 'right' }}>
                                            {invoice?.responseData?.transaction_date}
                                        </p>
                                        <p style={{ fontSize: '30px', fontWeight: '600', textAlign: 'right' }}>
                                            {invoice?.responseData?.transaction_no}
                                        </p>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className='col-md-6'>
                                        <p style={{ fontSize: '30px', fontWeight: '600' }}>Pelanggan</p>
                                        <div style={{ border: '1px solid #0070ba', padding: '15px' }}>
                                            <p style={{ fontSize: '26px', fontWeight: '600', lineHeight: 1.6 }}>
                                                {invoice?.responseData.person?.display_name}
                                            </p>
                                            <p style={{ fontSize: '24px', lineHeight: 1.6 }}>
                                                {invoice?.responseData.person?.address}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <p style={{ fontSize: '30px', fontWeight: '600' }}>Jatuh Tempo</p>
                                        <div style={{ border: '1px solid #0070ba', padding: '15px' }}>
                                            <p style={{ fontSize: '26px', fontWeight: '600' }}>
                                                {invoice?.responseData?.due_date}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div>
                                    <table class="table table-bordered" style={{ fontSize: '24px' }}>
                                        <thead className='bg-primary text-white'>
                                            <tr>
                                                <th>No</th>
                                                <th>Qty</th>
                                                <th>Nama Produk</th>
                                                <th>Keterangan</th>
                                                <th>Harga Satuan (Rp.)</th>
                                                <th>Jumlah (Rp.)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {invoice?.responseData?.transaction_lines_attributes.map((item, index) => (
                                                <tr>
                                                    <td>{++index}</td>
                                                    <td>{item.quantity} {item.unit.name}</td>
                                                    <td>{item.product.name}</td>
                                                    <td dangerouslySetInnerHTML={{ __html: item.description.replace(/\r\n/g, "<br/> <br/>") }}></td>
                                                    <td>{Math.floor(item.rate).toLocaleString()},00</td>
                                                    <td>{Math.floor(item.amount).toLocaleString()},00</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-md-6">
                                        <p style={{ fontSize: '26px', fontWeight: '600' }}>TERBILANG</p>
                                        <p style={{ fontSize: '24px', fontWeight: '500', lineHeight: 1.6 }}>{invoice?.bilanganHarga}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <table class="table">
                                            <tbody>
                                                <tr>
                                                    <td style={{ fontSize: '26px', fontWeight: '500' }}>Subtotal</td>
                                                    <td style={{ fontSize: '26px', fontWeight: '600', textAlign: 'right' }}>{Math.floor(invoice?.responseData?.subtotal).toLocaleString()},00</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ fontSize: '26px', fontWeight: '500' }}>PPN 1.1%</td>
                                                    <td style={{ fontSize: '26px', fontWeight: '600', textAlign: 'right' }}>{Math.floor(invoice?.responseData?.tax_amount).toLocaleString()},00</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ fontSize: '26px', fontWeight: '500' }}>TOTAL</td>
                                                    <td style={{ fontSize: '26px', fontWeight: '600', textAlign: 'right' }}>{Math.floor(invoice?.responseData?.original_amount).toLocaleString()},00</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ fontSize: '28px', fontWeight: '500' }} className='bg-primary text-white'>Sisa Tagihan</td>
                                                    <td style={{ fontSize: '28px', fontWeight: '600', textAlign: 'right' }} className='bg-primary text-white'>{Math.floor(invoice?.responseData?.remaining).toLocaleString()},00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <br />
                                <div className="row" style={{ background: '#dee2e6', padding: '15px' }}>
                                    <div className="col-md-12" style={{ lineHeight: 1.2 }}>
                                        <p style={{ fontSize: '28px', fontWeight: '600' }}>Detail Pembayaran</p>
                                        <div className="row mb-2" style={{ fontSize: '24px' }}>
                                            <div className="col-md-4">
                                                Nama Bank :
                                            </div>
                                            <div className="col-md-8">Bank Mandiri</div>
                                        </div>
                                        <div className="row mb-2" style={{ fontSize: '24px' }}>
                                            <div className="col-md-4">
                                                Cabang Bank :
                                            </div>
                                            <div className="col-md-8">PP Pasar Rebo</div>
                                        </div>
                                        <div className="row mb-2" style={{ fontSize: '24px' }}>
                                            <div className="col-md-4">
                                                No Akun Bank :
                                            </div>
                                            <div className="col-md-8">129-00-8050805-0 (Tempo pembayaran 2 minggu)</div>
                                        </div>
                                        <div className="row mb-2" style={{ fontSize: '24px' }}>
                                            <div className="col-md-4">
                                                Atas Nama :
                                            </div>
                                            <div className="col-md-8">PT MASTER DISKON INTERNASIONAL</div>
                                        </div>
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

export default Invoice;
