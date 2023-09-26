import shopApi from "@/api/shop";
import HeaderBack from "@/components-mobile/header/HeaderBack";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";


function Page() {
    const [office, setOffice] = useState();
    const [vendor, setVendor] = useState([]);
    const router = useRouter();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' });
    const { access_token } = useSelector(state => state.token)

    useEffect(() => {
        if (router.isReady) {
            shopApi.getDetailVendorOffice(access_token, router.query.slug).then(res => {
                if (res.success) {
                    setOffice(res.data)
                }
            })
        }
    }, [router.query.slug])

    useEffect(() => {
        shopApi.getVendorOffices(access_token).then(res => {
            if (res.success) {
                setVendor(res.data)
            }
        })
    }, [])


    return (
        <>
            {isTabletOrMobile &&
                <HeaderBack title={office?.name} onBack={() => router.back()} />
            }
            <div className="container my-4">
                {!isTabletOrMobile &&
                    <h4>{office?.name}</h4>
                }
                <div className="form-row">
                    <div className="col-3 d-none d-md-flex">
                        <NavRoot>
                            {vendor.map(item => (
                                <li className={router.query.slug == item.id ? "active" : ''}>
                                    <Link href={`/product/office/${item.id}`}><a>{item.name}</a></Link>
                                </li>
                            ))}
                        </NavRoot>
                    </div>
                    <div className="col-12 col-md-9">
                        <div className="row">

                            {
                                office && office?.items?.length > 0 ?
                                    office?.items?.map(item => (
                                        <div className="col-md-12 mb-2">
                                            <div className="card text-left" style={{ borderRadius: '20px' }}>
                                                <div className="card-body p-1">
                                                    <div className="form-row w-100">
                                                        <div className="col-md-4">
                                                            <img style={{
                                                                borderRadius: '20px',
                                                                background: 'gray',
                                                                width: '100%',
                                                                height: '150px',
                                                                objectFit: 'cover'
                                                            }} src={item.image} alt="" />
                                                        </div>
                                                        <div className="col-md-8 d-md-flex justify-content-between align-items-center flex-row  px-2">
                                                            <div>
                                                                <h5 className="card-title text-primary font-weight-bold mb-2">{item.name}</h5>
                                                                <p className="card-text">
                                                                    <div className="d-inline-block" style={{ width: '20px', height: '20px', position: 'relative' }}>
                                                                        <Image src={'https://cdn.masterdiskon.com/masterdiskon/icon/fe/location.png'} layout='fill' />
                                                                    </div>
                                                                    {item.address}</p>
                                                            </div>
                                                            <div className="text-right my-3 my-md-0">
                                                                <h6 className="mb-2 font-weight-bold">Rp{item.price.toLocaleString()} / {item.unit}</h6>
                                                                <a name="" id="" class="btn btn-sm btn-warning" href="https://api.whatsapp.com/send?phone=6282255003535&text=Halo%20Masdis,%20Saya%20mau%20bertanya%20mengenai%20Lapangan%20PADANG%20GOLF%20HALIM" role="button">Lanjut bertanya</a>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))

                                    :
                                    <div className="col-12">
                                        <div style={{
                                            width: '100%',
                                            height: '55vh',
                                            position: 'relative'
                                        }}>
                                            <Image src='https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/no-room.svg' layout='fill' />
                                        </div>
                                        <h5 className="text-center">Data Tidak Ditemukan</h5>
                                    </div>

                            }
                        </div>
                    </div>
                </div>



            </div>
        </>
    );
}

const NavRoot = styled.ul`
min-height:500px;
width:100%;
background:rgb(93, 156, 209);
border-radius:15px;
box-shadow:10px 10px 10px -10px rgba(0,0,0,.5);
padding:15px;
list-style-type:none;
font-size:16px;

li{
color:#0070BA;
font-weight:bold;    
margin:10px 0;
background: white;
padding:10px;
border-radius:15px;
cursor:pointer;
transition: all ease .3s;
text-transform:capitalize;
a{
    color:inherit ;
    display:block;
}
&:hover,&.active{
    color:white;
    background:#0070BA;
}

}


`

Page.Layout = { desktop: Layout, mobile: React.Fragment }

export default Page;