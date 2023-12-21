import { Icon } from '@iconify/react';
import { Navigation, A11y } from 'swiper'
import MapMarkerIcon from '@iconify/icons-fa-solid/map-marker-alt'
import MobileIcon from '@iconify/icons-fa-solid/mobile-alt'
import BookmarkIcon from '@iconify/icons-fa-solid/bookmark'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import shopApi from '@/api/shop';
import Link from 'next/link';
import { Collapse, Modal, ModalBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { changeRedirectUrl } from '@/store/redirectUrl/redirectUrlActions';
import ReviewProduct from '../shared/ReviewProduct';
import moment from 'moment';
import userApi from '@/api/user';
import { toast } from 'react-toastify';
import styled from 'styled-components'
import Image from 'next/image';
import AndroidIcon from '@iconify-icons/fa/android';
import AppleIcon from '@iconify-icons/fa/apple';


import ReactGA from 'react-ga';
ReactGA.initialize('G-56R5954QCE');


function GeneralProductDetail() {
    const router = useRouter()
    const { access_token } = useSelector(state => state.token)
    const { slug } = router.query

    const [product, setProduct] = useState()
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState(0);

    const [qty, setQty] = useState(1);
    const [openSubmit, setOpenSubmit] = useState(false)
    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth)
    const [updated, setUpdated] = useState(true)
    const [openDetails, setOpenDetails] = useState(false);


    const handleSubmit = () => {
        if (!auth) {
            dispatch(changeRedirectUrl(`/product/category/checkout?key=${product.product_detail[0].id_product_detail}&qty=${qty}`))
        }
        router.push(`/product/category/checkout?key=${product.product_detail[0].id_product_detail}&qty=${qty}`)
    }

    const handleUpdated = () => {
        setUpdated(prev => !prev)
    }

    const handleAddFavourite = () => {
        userApi.addProductFavourite(access_token, { id_product: product.id_product }).then(res => {
            if (res.success) {
                toast.success('Produk berhasil ditambahkan')
                handleUpdated()
            } else {
                toast.error(res.message)
            }
        })
    }

    const handleDeleteFavourite = () => {
        userApi.deleteProductFavourite(access_token, { id_product: product.id_product }).then(res => {
            if (res.success) {
                toast.success('Produk berhasil dihapus')
                handleUpdated()
            } else {
                toast.error(res.message)
            }
        })
    }


    const handleOpenSubmit = () => {
        setOpenSubmit(prev => !prev)
    }

    useEffect(() => {

        ReactGA.pageview(window.location.pathname + window.location.search);

        setIsLoading(true)
        if (router.isReady) {
            shopApi.getGeneralProduct(access_token, slug).then(res => {
                if (res.success) {
                    if (res.data) {
                        setProduct(res.data)
                    }
                }
                setIsLoading(false)
            })
        }
    }, [slug, updated])

    if (isLoading) {
        return <div style={{
            height: '50vh',
            marginBottom: '5rem'
        }} className="d-flex flex-column align-items-center justify-content-center">
            <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/pulse-spinner.svg" />
            <h4>Sedang menyiapkan data...</h4>
        </div>
    }

    console.log(product);

    return (
        <section>
            <div className="container my-3">
                <div className="row">
                    <div className='col-8'>
                        <div className="card" style={{ borderRadius: '20px', boxShadow: '5px 5px 10px -5px rgba(0,0,0,.5)' }}>
                            <div className="card-body">
                                <h4 className="card-title font-weight-bold text-primary">{product.product_name}</h4>
                                <Swiper spaceBetween={5} style={{
                                    borderRadius: '10px'
                                }} modules={[Navigation, A11y]} navigation>
                                    {product?.product_img.length > 1 ?
                                        <>
                                            {
                                                product?.product_img.map(item => (
                                                    <SwiperSlide style={{ width: '100%', height: '350px' }}>
                                                        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={item.img} />
                                                    </SwiperSlide>
                                                ))
                                            }
                                        </>
                                        :
                                        <>
                                            <SwiperSlide style={{ width: '100%', height: '350px' }}>
                                                <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={product?.product_img?.img} />
                                            </SwiperSlide>
                                        </>
                                    }
                                </Swiper>
                                <div className='mt-2' dangerouslySetInnerHTML={{ __html: product?.description }} />
                                <div className='row mt-5'>
                                    <div className="col-md-6">
                                        <div className="media">
                                            <img className='mr-3' style={{ height: '50px' }} src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/icon/compass-1.svg" />
                                            <div className="media-body">
                                                Tukarkan penawaran pada Hari ini hingga {moment(new Date(product?.valid_end)).format('DD MMM YYYY')}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="media">
                                            <img className='mr-3' style={{ height: '50px' }} src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/icon/invoice.svg" />
                                            <div className="media-body">
                                                Diperlukan reservasi,baca syarat dan ketentuan penukaran voucher
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="card my-3" style={{ borderRadius: '20px', boxShadow: '5px 5px 10px -5px rgba(0,0,0,.5)' }}>
                            <div style={{ borderTopRightRadius: '20px', borderTopLeftRadius: '20px' }} className="card-body border-bottom bg-primary text-white py-3"><b>Tukarkan penawaran di</b></div>
                            <div className="card-body">
                                <div className="media">
                                    <img style={{ height: '80px', width: '80px' }} className="rounded-circle img-fluid" src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/masterdiskon_logo.png" />
                                    <div className="media-body ml-3">
                                        <b>
                                            <Link href={`/partner/${product?.id_store}`}><a className='text-primary' >{
                                                product?.vendor?.display_name}</a></Link></b><br />
                                        <b>{product?.city?.city_name}</b><br />
                                        <p className="mb-0 "><div style={{
                                            width: '20px', height: '20px', position: 'relative', display: 'inline-block'
                                        }}>
                                            <Image src={'https://cdn.masterdiskon.com/masterdiskon/icon/fe/location.png'} layout='fill' />
                                        </div>{product.address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* informasi produk */}
                        <div className="card" style={{ borderRadius: '20px', boxShadow: '5px 5px 10px -5px rgba(0,0,0,.5)' }}>
                            <div className="card-header bg-primary text-white font-weight-bold" style={{ borderTopRightRadius: '20px', borderTopLeftRadius: '20px' }}>
                                Informasi Produk
                            </div>
                            <div className="card-body">
                                <Nav tabs style={{ flexWrap: 'nowrap', overflowX: 'auto', overflowY: 'hidden', scrollbarWidth: 'thin' }}>
                                    <NavItem>
                                        <NavLinkStyled style={{
                                            whiteSpace: 'nowrap'
                                        }} onClick={() => setActiveTab(0)} className={classNames({ active: activeTab === 0 })}>
                                            Apa yang anda dapatkan
                                        </NavLinkStyled>
                                    </NavItem>
                                    <NavItem>
                                        <NavLinkStyled style={{
                                            whiteSpace: 'nowrap'
                                        }} onClick={() => setActiveTab(1)} className={classNames({ active: activeTab === 1 })}>
                                            Syarat dan ketentuan
                                        </NavLinkStyled>
                                    </NavItem>
                                    <NavItem>
                                        <NavLinkStyled style={{
                                            whiteSpace: 'nowrap'
                                        }} onClick={() => setActiveTab(2)} className={classNames({ active: activeTab === 2 })}>
                                            Penukaran voucher
                                        </NavLinkStyled>
                                    </NavItem>
                                    <NavItem>
                                        <NavLinkStyled style={{
                                            whiteSpace: 'nowrap'
                                        }} onClick={() => setActiveTab(3)} className={classNames({ active: activeTab === 3 })}>
                                            Intruksi Pembatalan
                                        </NavLinkStyled>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId={0}>
                                        <div dangerouslySetInnerHTML={{ __html: product['include'] }} />
                                    </TabPane>
                                    <TabPane tabId={1}>
                                        <div dangerouslySetInnerHTML={{ __html: product['term'] }} />
                                    </TabPane>
                                    <TabPane tabId={2}>
                                        <div dangerouslySetInnerHTML={{ __html: product['how_to_redeem'] }} />
                                    </TabPane>
                                    <TabPane tabId={3}>
                                        <div dangerouslySetInnerHTML={{ __html: product['cancelation_policy'] }} />
                                    </TabPane>
                                </TabContent>
                            </div>
                        </div>

                        {/* ulasan */}
                        {/* <ReviewProduct id={product?.id_product} /> */}

                    </div>
                    <div className='col-4'>
                        <div className="card mb-3" style={{ borderRadius: '20px', boxShadow: '5px 5px 10px -5px rgba(0,0,0,.5)' }}>
                            <div className="card-body">
                                <div className="text-center">
                                    <div>
                                        {product?.product_detail?.discount ?
                                            <>
                                                <small><s>Rp{product?.product_detail?.normal_price?.toLocaleString()}</s></small>
                                                <span className="h4 mx-2"><b className="text-primary">Rp{product?.product_detail.price.toLocaleString()}</b></span>

                                            </>
                                            :
                                            <span className="h4"><b className="text-primary">Rp{product?.product_detail?.normal_price?.toLocaleString()}</b></span>
                                        }
                                        {Number(product?.product_detail?.discount ?? 0) > 0 &&
                                            <span className="badge badge-danger">{product?.product_detail?.discount}% OFF</span>
                                        }
                                    </div>
                                    {
                                        Number(product?.product_detail?.discount ?? 0) > 0 &&
                                        <small>Hemat <b className="text-danger">Rp{product?.product_detail?.saving?.toLocaleString()}</b></small>
                                    }
                                    <button type="button" onClick={handleOpenSubmit} className="btn btn-lg btn-block btn-primary my-3">BELI SEKARANG</button>
                                </div>
                                <hr />
                                <div className="text-center my-3">
                                    <div>
                                        {product.favourited ?
                                            <button onClick={handleDeleteFavourite} type="button" className="btn mb-3 btn-sm btn-danger my-1"><Icon icon={BookmarkIcon} /> Hapus dari favorit </button>
                                            :
                                            <button onClick={handleAddFavourite} type="button" className="btn mb-3 btn-sm btn-secondary my-1"><Icon icon={BookmarkIcon} /> Tambahkan ke favorit </button>
                                        }
                                    </div>
                                    <a target={'_blank'} href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} className="btn btn-sm btn-light border mr-2"><i className="fab fa-facebook" /> Facebook</a>
                                    <a target={'_blank'} href={`https://twitter.com/share?url=${window.location.href}&text=${product.product_name}via=Master Diskon`} className="btn btn-sm btn-light border mr-2"><i className="fab fa-twitter" /> Twitter</a>
                                    <a target={'_blank'} data-action="share/whatsapp/share" href={`https://api.whatsapp.com/send?text=${window.location.href}`} className="btn btn-sm btn-light border"><i className="fab fa-whatsapp" /> Whatsapp</a>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ borderRadius: '20px', boxShadow: '5px 5px 10px -5px rgba(0,0,0,.5)' }}>
                            <div style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} className='card-header bg-primary text-white font-weight-bold'>
                                Cara menukar
                            </div>
                            <div className="card-body row">
                                <div className="col-md-3"><Icon icon={MobileIcon} style={{ fontSize: '5rem', color: 'dodgerblue' }} />
                                </div>
                                <div className="col-md-9"><p style={{ textAlign: 'left' }}>Kamu bisa dengan mudah menukarkan penawaran dari ponselmu. Selamat tinggal bukti cetak!</p>
                                </div>

                                <Collapse isOpen={openDetails}>
                                    <div className="container">
                                        <div id="instruksi_penukaran">
                                            <div className="row">
                                                <div className="col-md-12"><span className="badge badge-pill badge-danger" style={{ width: '30%', height: '85%' }}>Langkah 1</span></div>
                                                <div className="col-md-12">
                                                    <div className="text-center">
                                                        <Icon icon={AndroidIcon} className='mr-2' style={{ color: 'green', fontSize: '4em' }} />
                                                        <Icon icon={AppleIcon} style={{ color: 'gray', fontSize: '4em' }} />
                                                        <br />Tukarkan voucher paperless-mu dengan men-download aplikasinya</div>
                                                </div>
                                            </div><hr />
                                            <div className="row">
                                                <div className="col-md-12"><span className="badge badge-pill badge-danger" style={{ width: '30%', height: '85%' }}>Langkah 2</span></div>
                                                <div className="col-md-12">
                                                    <div className="text-center">
                                                        <img className="img-fluid" src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/banner/mockup%20mobile-01.png" width={200} height={100} /><br />
                                                        Masuk dan buka vouchermu, yang bisa kamu temukan di bawah tab Me &gt; My Vouchers
                                                    </div>
                                                </div>
                                            </div><hr />
                                            <div className="row">
                                                <div className="col-md-12"><span className="badge badge-pill badge-danger" style={{ width: '30%', height: '85%' }}>Langkah 3</span></div>
                                                <div className="col-md-12">
                                                    <div className="text-center">
                                                        <img className="img-fluid" src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/banner/mockup%20mobile-02.png" width={200} /><br />
                                                        Hubungi merchant dan beri tahukan kode penukaranmu<br /><p style={{ fontSize: 12 }}>*Kode yang ditunjukkan hanya sebagai ilustrasi</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Collapse>
                                <button className='btn text-info' onClick={() => setOpenDetails(state => !state)}>{openDetails ? 'Tutup Cara Penukaran' : `Lihat Rincian Penukaran`}</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
            <Modal isOpen={openSubmit} toggle={handleOpenSubmit} centered size='lg'>
                <ModalBody>
                    <div className="form-group">
                        <label for="">Jumlah</label>
                        <select value={qty} onChange={(e) => setQty(e.target.value)} className="form-control" name="qty">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <div className='d-flex justify-content-end align-items-center w-100'>
                        <button type='button' onClick={handleSubmit} className='btn btn-primary'>
                            Pesan
                        </button>
                    </div>
                </ModalBody>
            </Modal>
        </section >
    );
}

const NavLinkStyled = styled(NavLink)`
color:#0070BA !important;
cursor:pointer;
    &.active,&:hover{
        border-top:none;
        border-right:none;
        border-left:none;
    border-bottom:3px solid #0070BA !important;
    }
`


export default GeneralProductDetail;