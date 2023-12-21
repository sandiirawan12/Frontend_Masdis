import shopApi from '@/api/shop';
import HeaderBack from '@/components-mobile/header/HeaderBack';
import GoogleMapReact from 'google-map-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive'

import ReactGA from 'react-ga';
ReactGA.initialize('G-56R5954QCE');

function DetailPartner() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' })
    const router = useRouter();
    const { access_token } = useSelector(state => state.token)

    const [store, setStore] = useState();
    const [products, setProducts] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        ReactGA.pageview(window.location.pathname + window.location.search);

        setIsLoading(true)
        if (router.isReady) {
            shopApi.getStore(router.query.id).then(res => {
                if (res.success) {
                    setStore(res.data)
                    setIsLoading(false)
                }
            })
        }
    }, [])

    useEffect(() => {

        ReactGA.pageview(window.location.pathname + window.location.search);

        setIsLoading(true)
        if (router.isReady) {
            shopApi.getProductByStore(access_token, { id_store: router.query.id }).then(res => {
                if (res.success) {
                    setProducts(res.data)
                }

            })
        }
    }, [])

    if (isLoading) {
        return <div style={{ minHeight: '100vh', background: 'rgba(255,255,255,.5)' }} className='w-100  d-flex justify-content-center align-items-center'>
            <div className='position-relative' style={{ width: '220px', height: '220px' }}>
                <Image layout='fill' objectFit='contain' src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/pulse-spinner.svg" alt="loading.." />
            </div>
        </div>
    }

    return (
        <>
            {isTabletOrMobile && <HeaderBack onBack={() => router.push('/')}>
                <div className="col-2 offset-2">
                    <img width={100} src={'https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/masterdiskon_logo_big.png'} />
                </div>
            </HeaderBack>}
            <section className='mt-4'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div style={{ borderRadius: '20px', boxShadow: '10px 10px 10px -10px rgba(0,0,0,.5)' }} className="card mb-3">
                                <div className="card-body">
                                    <h4 className="text-primary font-weight-bold mb-3">Master Diskon Experience</h4>
                                    <div className="position-relative">
                                        <div style={{
                                            height: '160px',
                                            width: '160px',
                                            padding: '.4rem',
                                            background: 'white',
                                            position: 'absolute',
                                            bottom: '-1rem',
                                            left: '1rem',
                                            borderRadius: '15px'
                                        }}>
                                            <img style={{ objectFit: 'cover', borderRadius: '15px' }} className='w-100 h-100' src={store?.store?.img_featured} />
                                        </div>
                                        <img style={{ borderRadius: '20px' }} src={store?.store?.img_featured} className="img-fluid w-100" />
                                    </div>
                                    <br />
                                    <p style={{ fontSize: 13 }} dangerouslySetInnerHTML={{ __html: store?.description }} />
                                </div>
                            </div>
                            <h5 className="font-weight-bold mt-2">Produk yang ditawarkan </h5>
                            <div className="row">
                                {!products ? <div className="col-12">
                                    Data produk tidak ditemukan
                                </div> : products?.map(item => (
                                    <div className="col-12">
                                        <div className="card mb-3" style={{ borderRadius: '20px', boxShadow: '10px 10px 10px -10px rgba(0,0,0,.5)' }}>
                                            <div className="card-body border-bottom">
                                                <div className="row">
                                                    <div className="col-md-2">
                                                        <Link href={`/product/category/detail/${item.slug_product}`}><a className="no-underline">
                                                            <img src={item.img_featured_url} className="img-fluid" style={{ width: 120, height: 80 }} />
                                                        </a></Link>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <Link href={`/product/category/detail/${item.slug_product}`}><a className="no-underline font-weight-bold text-primary">
                                                            {item.product_name}
                                                        </a></Link>
                                                        <br />

                                                        {item?.tag.map(t => (
                                                            <a href="/front/explore/tag/view/asian"><span className="badge badge-secondary">#{t.name_product_tag}</span></a>
                                                        ))}
                                                    </div>
                                                    <div className="col-md-3">
                                                        <Link href={`/product/category/detail/${item.slug_product}`}><a type="button" className="btn btn-primary btn-block">Beli Sekarang</a></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body text-dark">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <p className="font-weight-bold mb-0">Dapat ditukarkan di</p>
                                                        {item.store.map(item => (
                                                            <h6 className='font-weight-bold text-primary'>{item.display_name}</h6>
                                                        ))}

                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <p className="font-weight-bold mb-0">Tukarkan pada</p>
                                                        <p className="mt-0">Hari ini hingga {item.valid_end}</p>
                                                    </div>
                                                    {/* <div className="col-4 text-center">Apa yang kamu dapatkan</div>
                                                    <div className="col-4 text-center">informasi penukaran</div>
                                                    <div className="col-4 text-center">deskripsi</div>
                                                    <div className="col-md-12">
                                                        <hr />
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                            <div style={{ borderRadius: '20px', boxShadow: '10px 10px 10px -10px rgba(0,0,0,.5)' }} className="card mb-3">
                                <div className="card-body border-bottom">
                                    <h6 className="font-weight-bold text-primary">
                                        Lokasi penukaran
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <div style={{ width: '100%', height: '250px' }}>
                                        <GoogleMapReact
                                            bootstrapURLKeys={{ key: "AIzaSyC_O0-LKyAboQn0O5_clZnePHSpQQ5slQU" }}
                                            defaultCenter={{ lng: Number(store?.store?.longitude ?? 0), lat: Number(store?.store?.latitude ?? 0) }}
                                            center={{ lng: Number(store?.store?.longitude ?? 0), lat: Number(store?.store?.latitude ?? 0) }}
                                            defaultZoom={14}
                                            margin={[50, 50, 50, 50]}
                                            options={''}
                                        >
                                        </GoogleMapReact>
                                    </div>
                                    <a href={`https://www.google.com/maps/search/?api=1&query=${store?.store?.latitude}%2C${store?.store?.longitude}`} className="btn btn-outline-info btn-block mt-2">Dapatkan Petunjuk Arah <i className="fas fa-directions" /></a>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="card mb-3" style={{ borderRadius: '20px', boxShadow: '10px 10px 10px -10px rgba(0,0,0,.5)' }}>
                                <div className="card-body">
                                    <h6 className="font-weight-bold text-primary mb-4">Informasi Perusahaan</h6>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-4">
                                                    <img className="img-fluid rounded-circle" style={{ width: 70, height: 70 }} src={store?.logo} />
                                                </div>
                                                <div className="col-8">
                                                    <h6 className="font-weight-bold text-primary d-block">{store?.store?.display_name}</h6>
                                                    <small>{store?.address}</small>
                                                </div>
                                            </div>
                                            <br />
                                        </div>
                                        <div className="col-md-12">
                                            <h6 className="font-weight-bold text-primary">Jam Operasional</h6>
                                        </div>
                                    </div>
                                    <div className="list-group border-0">
                                        {Object.values(store?.store?.operational_hour ?? {})?.map(item => (
                                            <div className="list-group-item border-0">
                                                <div className="row"><div className="col-4">{item?.day}</div>
                                                    <div className="col-8">: {item?.from} - {item?.to}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}



export default DetailPartner;