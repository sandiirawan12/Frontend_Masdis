import Link from 'next/link';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import shopApi from '@/api/shop';
import { useMediaQuery } from 'react-responsive';
import HeaderBack from '@/components-mobile/header/HeaderBack';
import { Icon } from '@iconify/react';

function Page() {
    const [listPromo, setListPromo] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { access_token } = useSelector(state => state.token);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' })

    useEffect(() => {
        setIsLoading(true)
        shopApi.getListPromo(access_token, { page: 1, limit: 10 }).then(res => {
            if (res.success) {
                setListPromo(res.data)
                setIsLoading(false)
            }
        })
    }, [])


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
        <>
            <Head>
                <meta charSet="UTF-8" />
                <title>Promo Tiket Pesawat Dan Hotel - Masterdiskon.com</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Pesan tiket pesawat dan hotel murah di Masterdiskon. Cek harga tiket pesawat online dan dapatkan promo tiket pesawat terbaru. Booking mudah &amp; aman semua maskapai di sini!" />
                <meta property="og:title" content="Promo Tiket Pesawat Dan Hotel - Masterdiskon.com" />
                <meta property="og:type" content="Website" />
                <meta property="og:url" content="https://masterdiskon.com/flights" />
            </Head>
            {isTabletOrMobile &&
                <HeaderBack title='Promo' onBack={() => { }} />
            }
            <div className='container my-4'>
                {listPromo?.length === 0 ?
                    <div className="row justify-content-center">
                        <div className='col-4 text-center'>
                            <div style={{
                                width: '100%',
                                height: '30vh',
                                position: 'relative'
                            }}>
                                <Image src='/assets/images/not-found.png' layout='fill' />
                            </div>
                            <h4>Promo tidak ditemukan</h4>
                        </div>
                    </div>
                    :
                    <div className='form-row'>
                        {!isTabletOrMobile &&
                            <div className='col-md-12 mb-3 mt-3'>
                                <h3 className='font-weight-bold'><Icon icon='iconamoon:discount-duotone' className='mr-2 text-danger'></Icon> Promo terbaik buat liburan irit!</h3>
                            </div>
                        }
                        {listPromo.map(item => (
                            <div className='col-md-4'>
                                <Link as={`/promo/${item.slug}`} href={`/promo/[slug]`}><a style={{ color: 'inherit', textDecoration: 'none' }}>
                                    <div className="card" style={{ borderRadius: '20px' }}>
                                        <img src={`${item.image}`} alt="Image Promo" style={{width:'100%', height:'auto', borderRadius:'20px 20px 0px 0px'}} />
                                        <div className="card-body py-2 px-3">
                                            <h6
                                                style={{
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 1,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                }}
                                                className="text-primary font-weight-bold">{item.name}</h6>
                                            <small className="text-danger py-2 mb-1">Expired Sampai {item.valid_end}</small>
                                        </div>
                                    </div>
                                </a></Link>
                            </div>
                        ))}
                    </div>
                }

            </div>
        </>
    );
}

Page.Layout = { desktop: Layout, mobile: Fragment }

export default Page;