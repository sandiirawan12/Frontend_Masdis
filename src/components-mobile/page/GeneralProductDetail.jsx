import HeaderBack from "../header/HeaderBack";
import { useRouter } from 'next/router';
import { ButtonDropdown, Collapse, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { changeRedirectUrl } from "@/store/redirectUrl/redirectUrlActions";
import userApi from "@/api/user";
import { toast } from "react-toastify";
import shopApi from "@/api/shop";
import moment from 'moment';
import classNames from "classnames";
import { Icon } from "@iconify/react";
import BookmarkIcon from '@iconify-icons/fa/bookmark';
import Link from "next/link";


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

    const auth = useSelector(state => state.auth);
    const [updated, setUpdated] = useState(true);
    const [openCollapse, setOpenCollapse] = useState({})

    const [openShare, setOpenShare] = useState(false);

    const handleOpenShare = () => {
        setOpenShare(prev => !prev)
    }

    const handleOpenCollapse = (field) => {
        setOpenCollapse(prev => ({ ...prev, [field]: !prev[field] }))
    }

    const handleAddQty = () => {
        if (qty < 3) {
            setQty(prev => prev + 1)
        }
    }
    const handleReduceQty = () => {
        if (qty > 1) {
            setQty(prev => prev - 1)
        }
    }

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
        if (!auth) {
            if (!auth) {
                dispatch(changeRedirectUrl(`/product/category/checkout?key=${product.product_detail[0].id_product_detail}&qty=${qty}`))
                router.push('/login')
            }
        } else {
            userApi.addProductFavourite(access_token, { id_product: product.id_product }).then(res => {
                if (res.success) {
                    toast.success('Produk berhasil ditambahkan')
                    handleUpdated()
                } else {
                    toast.error(res.message)
                }
            })
        }
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
        setIsLoading(true)
        if (router.isReady) {
            shopApi.getGeneralProduct(access_token, slug).then(res => {
                if (res.success) {
                    setProduct(res.data)
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


    return (
        <div className="pb-5 mb-5">
            <HeaderBack title="" onBack={() => router.back()}>
                <div className="col-2 offset-2">
                    <img width={100} src={'https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/masterdiskon_logo_big.png'} />
                </div>
            </HeaderBack>
            <div style={{ width: '100%', height: '230px', background: '#e7e7e799' }}>
                <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={product.img_featured_url} />
            </div>
            <div className="py-3 px-3 bg-white">
                <h5 className="font-weight-bold text-primary">{product.product_name}</h5>
                {product?.product_detail[0]?.discount ?
                    <>
                        <small className="text-secondary mr-1"><s>Rp{product?.product_detail[0]?.normal_price?.toLocaleString()}</s></small>
                        <span className="text-primary font-weight-bold mr-1">Rp{product?.product_detail[0].price.toLocaleString()}</span>
                        <span className="badge badge-danger">{product?.product_detail[0]?.discount}%</span>
                    </>
                    :
                    <span className="text-primary font-weight-bold">Rp{product?.product_detail[0]?.normal_price?.toLocaleString()}</span>
                }
            </div>
            <div className="form-row w-100 bg-white text-center border-top">
                {product.favourited ?
                    <div style={{ cursor: 'pointer' }} className="col-6 border-right py-1" onClick={handleDeleteFavourite}>
                        <p className="mb-0" style={{fontSize:'14px'}}><Icon icon={BookmarkIcon} /> Hapus dari wishlist</p>
                    </div>
                    :
                    <div style={{ cursor: 'pointer' }} className="col-6 border-right py-1" onClick={handleAddFavourite}>
                        <p className="mb-0" style={{fontSize:'14px'}}><Icon icon={BookmarkIcon} /> Tambah ke wishlist</p>
                    </div>
                }
                <div className="col-6 py-1">
                    <Dropdown size="sm" isOpen={openShare} toggle={handleOpenShare}>
                        <DropdownToggle tag='p' style={{fontSize:'14px'}} data-toggle='dropdown' aria-expanded={true}>
                            <i class="fas fa-share-alt mr-2"></i>
                            Bagikan penawaran ini
                        </DropdownToggle>
                        <DropdownMenu right style={{ minWidth: '100%' }}>
                            <DropdownItem><a className="text-dark" target={'_blank'} href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}><i className="fab fa-facebook" /> Facebook</a></DropdownItem>
                            <DropdownItem><a className="text-dark" target={'_blank'} href={`https://twitter.com/share?url=${window.location.href}&text=${product.product_name}via=Master Diskon`}><i className="fab fa-twitter" /> Twitter</a></DropdownItem>
                            <DropdownItem><a className="text-dark" target={'_blank'} data-action="share/whatsapp/share" href={`https://api.whatsapp.com/send?text=${window.location.href}`}><i className="fab fa-whatsapp" /> Whatsapp</a></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>

            <div className="mt-3 bg-white border-0 px-3 py-2">
                <div onClick={() => handleOpenCollapse('product-choice')} className="d-flex w-100 justify-content-between align-items-center">
                    <h6 className="font-weight-bold">Pilihan Produk</h6>
                    <h6>
                        <i className="fas fa-angle-down"></i>
                    </h6>
                </div>
                <Collapse isOpen={openCollapse['product-choice']}>
                    {product?.product_detail.map(item => (
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <span className="font-weight-bold d-block text-primary">{item?.detail_name}</span>
                                {item?.discount ?
                                    <>
                                        <small className="text-secondary mr-1"><s>Rp{item?.normal_price?.toLocaleString()}</s></small>
                                        <span className="text-primary font-weight-bold mr-1">Rp{item?.price.toLocaleString()}</span>
                                        <span className="badge badge-danger">{item?.discount}%</span>
                                    </>
                                    :
                                    <span className="text-primary font-weight-bold">Rp{item?.normal_price?.toLocaleString()}</span>
                                }
                            </div>
                        </div>
                    ))}
                </Collapse>
            </div>

            <div className="mt-3 bg-white border-0 px-3 py-2">
                <div onClick={() => handleOpenCollapse('offer')} className="d-flex w-100 justify-content-between align-items-center">
                    <h6 className="font-weight-bold">Penawaran</h6>
                    <h6>
                        <i className="fas fa-angle-down"></i>
                    </h6>
                </div>
                <Collapse isOpen={openCollapse['offer']}>
                    <div className="bg-white border-0 py-2">
                        <div className="row">
                            <div className="col-4">
                                <div style={{ width: '100%', height: '100%' }}>
                                    <img src="https://cdn.masterdiskon.com/masterdiskon/product/property/2021/property-1614152451240.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
                                </div>
                            </div>
                            <div className="col-8">
                                <h6 className="font-weight-bold">
                                    <Link href={`/partner/${product?.vendor.id_vendor}`}>
                                        {product?.vendor.display_name}
                                    </Link>
                                </h6>
                                <small style={{ lineHeight: '18px', display: 'inline-block' }} className="mb-0 ">{product.address}</small>
                                <div className="d-flex mt-2">
                                    <small class="badge badge-primary mr-4 pt-1">
                                        <i className="fas fa-star   mr-1 mb-0 "></i>5</small>
                                    <small className="mr-4">
                                        <i class="fas fa-heart    "></i> Like
                                    </small>
                                    <small>
                                        3.1 Km
                                    </small>
                                </div>
                            </div>
                            <div className="col-12 border-top mt-3">
                                <div className="d-flex text-center justify-content-around align-items-center pt-1">
                                    <div className="flex-1">
                                        <i class="fas fa-phone"></i>
                                        <small className="d-block">Telepon</small>
                                    </div>
                                    <div className="flex-1">
                                        <i class="fas fa-share"></i>
                                        <small className="d-block">Bagikan</small>
                                    </div>
                                    <div className="flex-1" onClick={handleAddFavourite}>
                                        <i class="fas fa-thumbs-up"></i>
                                        <small className="d-block">Like</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>

            <div className="mt-3 bg-white border-0 px-3 py-2">
                <ul class="list-group">
                    <li class="list-group-item border-top-0 border-left-0 border-right-0 border-bottom">
                        <small style={{ lineHeight: '18px', display: 'inline-block' }}>
                            Tukarkan penawaran pada hari ini hingga {moment(new Date(product?.valid_end)).format('DD MMM YYYY')}
                        </small>
                    </li>
                    <li class="list-group-item border-top-0 border-left-0 border-right-0 border-bottom-0">
                        <small style={{ lineHeight: '18px', display: 'inline-block' }}>
                            Diperlukan reservasi,baca syarat dan ketentuan penukaran voucher
                        </small>
                    </li>
                </ul>
            </div>

            <div className="mt-3 bg-white border-0 px-3 py-2">
                <div onClick={() => handleOpenCollapse('include')} className="d-flex w-100 justify-content-between align-items-center">
                    <h6 className="font-weight-bold">Apa yang kamu dapatkan</h6>
                    <h6>
                        <i className="fas fa-angle-down"></i>
                    </h6>
                </div>
                <Collapse isOpen={openCollapse['include']}>
                    <div style={{
                        wordWrap: 'break-word'
                    }} className="w-100 mt-2" dangerouslySetInnerHTML={{ __html: product['include'] }} />
                </Collapse>
            </div>

            <div className="mt-3 bg-white border-0 px-3 py-2">
                <div onClick={() => handleOpenCollapse('how_to_redeem')} className="d-flex w-100 justify-content-between align-items-center">
                    <h6 className="font-weight-bold">Cara penukaran</h6>
                    <h6>
                        <i className="fas fa-angle-down"></i>
                    </h6>
                </div>
                <Collapse isOpen={openCollapse['how_to_redeem']}>
                    <div style={{
                        wordWrap: 'break-word'
                    }} className="w-100 mt-2" dangerouslySetInnerHTML={{ __html: product['how_to_redeem'] }} />
                </Collapse>
            </div>

            <div className="mt-3 bg-white border-0 px-3 py-2">
                <div onClick={() => handleOpenCollapse('cancelation_policy')} className="d-flex w-100 justify-content-between align-items-center">
                    <h6 className="font-weight-bold">Kebijakan Pembatalan</h6>
                    <h6>
                        <i className="fas fa-angle-down"></i>
                    </h6>
                </div>
                <Collapse isOpen={openCollapse['cancelation_policy']}>
                    <div style={{
                        wordWrap: 'break-word'
                    }} className="w-100 mt-2" dangerouslySetInnerHTML={{ __html: product['cancelation_policy'] }} />
                </Collapse>
            </div>

            <div className="mt-3 bg-white border-0 px-3 py-2">
                <div onClick={() => handleOpenCollapse('term')} className="d-flex w-100 justify-content-between align-items-center">
                    <h6 className="font-weight-bold">Syarat dan Ketentuan</h6>
                    <h6>
                        <i className="fas fa-angle-down"></i>
                    </h6>
                </div>
                <Collapse isOpen={openCollapse['term']}>
                    <div style={{
                        wordWrap: 'break-word'
                    }} className="w-100 mt-2" dangerouslySetInnerHTML={{ __html: product['term'] }} />
                </Collapse>
            </div>

            <div className="mt-3 bg-white border-0 px-3 py-2">
                <div onClick={() => handleOpenCollapse('store_location')} className="d-flex w-100 justify-content-between align-items-center">
                    <h6 className="font-weight-bold">Lokasi</h6>
                    <h6>
                        <i className="fas fa-angle-down"></i>
                    </h6>
                </div>
                <Collapse isOpen={openCollapse['store_location']}>
                    <ul className="list-group mt-2">
                        {product?.store?.map((store, index) => (
                            <li className={classNames("list-group-item border-top-0 border-right-0 border-left-0", {
                                "border-bottom-0": index === product?.store?.length - 1
                            })}>
                                <h6 className="font-weight-bold mb-0">{store.display_name}</h6>
                                <small>{store?.address}</small>
                            </li>
                        ))}
                    </ul>
                </Collapse>
            </div>

            <div style={{
                width: '100%',
                background: 'white',
                zIndex: 1,
                position: 'fixed',
                bottom: '0',
                left: '0',
                padding: '10px 20px',
                boxShadow: 'rgba(0, 0, 0, 0.5) 0 -1px 5px -5px'
            }}>
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <small className="d-block">Quantity</small>
                        <small className="d-block">Pesanan</small>
                    </div>
                    <div className="input-group mx-2" style={{ width: '30%' }}>
                        <div className="input-group-prepend">
                            <button onClick={handleReduceQty} className="btn btn-outline-secondary form-control flight_minus" type="button">-</button>
                        </div>
                        <input type="text" className="form-control text-center numberonly hitung flight_dropdewasa" value={qty} readOnly />
                        <div className="input-group-append">
                            <button onClick={handleAddQty} className="btn btn-outline-secondary form-control flight_plus" type="button">+</button>
                        </div>
                    </div>
                    <button onClick={handleSubmit} type="button" className="btn btn-warning btn-sm">Beli - Rp{product?.product_detail[0].discount ? product?.product_detail[0].price.toLocaleString() : product?.product_detail[0]?.normal_price?.toLocaleString()}</button>
                </div>
            </div>

        </div>
    );
}

export default GeneralProductDetail;