import shopApi from "@/api/shop";
import HeaderBack from "@/components-mobile/header/HeaderBack";
import Layout from "@/components/Layout";
import { BottomSheet, SheetContent } from "@biotic-ui/bottom-sheet";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

function Page() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' });
    const [openFilter, setOpenFilter] = useState(false);
    const [tagArena, setTagArena] = useState([]);
    const [arenaList, setArenaList] = useState([]);
    const [slug, setSlug] = useState('golf');

    const { access_token } = useSelector(state => state.token);
    const router = useRouter();


    useEffect(() => {
        shopApi.getTagArena(access_token).then(res => {
            if (res.success) {
                setTagArena(res.data);
            }
        })
    }, [])

    useEffect(() => {
        shopApi.getArenaByCategory(access_token, slug).then(res => {
            if (res.success) {
                setArenaList(res.data);
            }
        })
    }, [slug])


    return (
        <>
            {isTabletOrMobile &&
                <HeaderBack title="Sewa Lapangan" onBack={() => router.push('/')} />
            }
            <div className="py-4">
                <div className="container">
                    <div className="row">
                        {!isTabletOrMobile &&
                            <div className="col-3">
                                <h5 className='font-weight-bold text-primary'>Kategori</h5>
                                <NavRoot>
                                    {tagArena.map(item => (
                                        <li className={item.name == slug ? 'active' : ''} onClick={() => setSlug(item.name)}>
                                            {item.name}
                                        </li>
                                    ))}
                                </NavRoot>
                            </div>
                        }
                        {
                            isTabletOrMobile &&
                            <div className="col-12 d-flex align-items-center justify-content-end">
                                <button onClick={() => setOpenFilter(o => !o)} type="button" className="btn btn-primary mb-3 btn-sm btn-outline">
                                    <i className="fas fa-filter fa-1x mr-2" />
                                    Filter</button>
                            </div>
                        }
                        <div className="col-12 col-md-9">
                            <div className="card">
                                <div className="card-body">
                                    <table className="table table-responsive" style={{ fontSize: '12pt' }}>
                                        <thead>
                                            <tr>
                                                <th>No</th> <th>Image</th> <th>Alamat</th><th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {arenaList?.map((item, index) => (

                                                <tr>
                                                    <td>{++index}</td>
                                                    <td>
                                                        <img src={item.image} style={{ objectFit: 'cover', width: '200px', height: '200px' }} /></td>
                                                    <td>
                                                        <div style={{ width: isTabletOrMobile ? '21rem' : '100%' }}>
                                                            <b>{item.event} </b> <br />{item.alamat} <br /> {item.lokasi}
                                                        </div>
                                                        <a href={item.gmap_url}>
                                                            <span class="badge badge-success">
                                                                Lihat lokasi
                                                            </span>
                                                        </a>
                                                    </td>
                                                    <td>{item.range_price}<br />
                                                        <a className="text-dark no-underline name_author href_name_author" href={`https://api.whatsapp.com/send?phone=6282255003535&text=Halo Masdis,%20Saya%20mau%20bertanya mengenai ${item.event}`}>
                                                            <span className="badge badge-warning mb-1 " style={{ color: '"white' }}>Pesan lewat master diskon </span></a>
                                                    </td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <BottomSheet open={openFilter} onClose={() => setOpenFilter(o => !o)}>
                <SheetContent className='pt-3 pl-3 pr-3 pb-5'>
                    <div className='d-flex align-items-center mb-3 justify-content-between'>
                        <h6 className='font-weight-bold mb-0'>Kategori</h6>
                        <div onClick={() => setOpenFilter(o => !o)}><i className="fas fa-times  fa-1x  "></i></div>
                    </div>
                    <hr />
                    <ul className="list-group pl-0 bg-danger">
                        <li className="list-group-item border-0 py-2 pl-0 text-primary font-weight-bold my-0">Run</li>
                        <li className="list-group-item border-0 py-2 pl-0">Bicycle</li>
                    </ul>
                </SheetContent>
            </BottomSheet>
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
&:hover{
    color:white;
    background:#0070BA;
}

&.active{
    color:white;
    background:#0070BA;
}

}


`

Page.Layout = { desktop: Layout, mobile: React.Fragment }

export default Page;