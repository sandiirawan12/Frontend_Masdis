import LayoutDesktop from '@/components/Layout'
import LayoutMobile from '@/components-mobile/Layout'
import HeaderBack from '@/components-mobile/header/HeaderBack';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import shopApi from '@/api/shop';
import Link from 'next/link';

function Page() {
    const [vendorOffice, setVendorOffice] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { access_token } = useSelector(state => state.token);
    const router = useRouter();

    useEffect(() => {
        setIsLoading(true)
        shopApi.getVendorOffices(access_token).then(res => {
            if (res.success) {
                setVendorOffice(res.data)
                setIsLoading(false)
            }

        })
    }, [])

    return (
        <>
            <HeaderBack title='Office' onBack={() => router.push('/')} />
            <div class="container mt-4">
                <div className="form-row">
                    {isLoading ?
                        [1, 2, 3].map((index) => (
                            <div key={index} className="col-4">
                                <div className="d-flex flex-column text-center align-items-center justify-content-center text-dark">
                                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'gray', border: '8px solid white', padding: '5px', boxShadow: '5px 5px 10px -5px rgba(0,0,0,.5)' }}>
                                    </div>
                                </div>
                            </div>
                        ))
                        :
                        vendorOffice?.map((item, index) => (
                            <div key={index} className="col-4">
                                <Link href={`/product/office/${item.id}`}><a>
                                    <div className="d-flex flex-column text-center align-items-center justify-content-center text-dark">
                                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'white', border: '8px solid white', padding: '5px', boxShadow: '5px 5px 10px -5px rgba(0,0,0,.5)' }}>
                                            <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={item.icon} />
                                        </div>
                                        <h6 className="mt-2 font-weight-bold">{item.name}</h6>
                                    </div>
                                </a>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

Page.Layout = { mobile: React.Fragment, desktop: LayoutDesktop }

export default Page;