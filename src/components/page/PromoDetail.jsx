import shopApi from "@/api/shop";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from '@iconify/react';
import GiftIcon from '@iconify/icons-fa-solid/gift';
import styled from "styled-components";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classNames from "classnames";
import { changeRedirectUrl } from '@/store/redirectUrl/redirectUrlActions';
import { toast } from "react-toastify";
import HeaderBack from "@/components-mobile/header/HeaderBack";
import { useMediaQuery } from 'react-responsive'

import ReactGA from 'react-ga';
ReactGA.initialize('G-56R5954QCE');

function PromoDetail() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)
    const [promo, setPromo] = useState()
    const { access_token } = useSelector(state => state.token)
    const [activeTab, setActiveTab] = useState('1')
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' });

    useEffect(() => {

        ReactGA.pageview(window.location.pathname + window.location.search);

        setIsLoading(true)
        if (router.isReady) {
            shopApi.getDetailPromo(access_token, router.query.slug).then(res => {
                if (res.success) {
                    setPromo(res.data)
                    setIsLoading(false)
                }
            })
        }
    }, [router.query.slug]);

    const handleClaim = (id) => {
        if (auth) {
            shopApi.claimPromo(access_token, {
                id,
                "platform": "web",
                id_user: ''
            }).then(res => {
                if (res.success) {
                    toast.success('Kupon berhasil diklaim')
                } else {
                    toast.error(res.message)
                }
            })
        } else {
            dispatch(changeRedirectUrl(router.asPath))
            router.push('/login')
        }
    }

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
            {isTabletOrMobile &&
                <HeaderBack title="Promo" onBack={() => router.back()} />
            }
            <section className="my-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 h-100">
                            <div className="card mb-3" style={{ borderRadius: '20px', boxShadow: '5px 5px 10px -5px rgba(0,0,0,.5)' }}>
                                <div className="card-body p-2">
                                    <img style={{ width: '100%', objectFit: 'cover', borderRadius: '20px' }} src={promo?.img_featured} className="img-block" />
                                    <div className="container">
                                        <h4 className="mt-3 font-weight-bold text-primary">{promo?.title_promo}</h4>
                                        <table className="w-100">
                                            <tbody><tr>
                                                <td className="font-weight-bold">Periode promo</td>
                                                <td>{promo?.valid_start} - {promo?.valid_end}</td>
                                            </tr>
                                                <tr>
                                                    <td className="font-weight-bold">Available on </td>
                                                    <td>
                                                        {promo?.platform?.map(item => (
                                                            <span className="bg-warning px-2 py-1 rounded font-weight-bold mr-1">{item}</span>
                                                        ))}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="font-weight-bold">Periode Pemakaian</td>
                                                    <td>Lihat pada detil kupon</td>
                                                </tr>
                                                <tr>
                                                    <td className="font-weight-bold">Transaksi minimum</td>
                                                    <td>Lihat pada detil kupon</td>
                                                </tr>
                                            </tbody></table>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="pengumuman alert alert-warning" style={{ display: 'none' }}>Copied</div>
                                <h5 className="font-weight-bold text-primary">Kupon</h5>
                                <div className="row">
                                    {promo?.coupon.map(item => (
                                        <div className="col-md-6" key={item.id}>
                                            <CardStyled className="card mb-3">
                                                <span className="dots left">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </span>
                                                <span className="icon">
                                                    <Icon icon={GiftIcon} />
                                                </span>
                                                <span className="desc">
                                                    <div className="desc-container">
                                                        <span className="desc-title">
                                                            {item.name}
                                                        </span>
                                                        <small>Sebesar</small>
                                                        <span className="desc-price">
                                                            {new String(item.amount).toLocaleString()}
                                                        </span>
                                                    </div>
                                                    <div className="desc-button-container">
                                                        {item.claimed ?
                                                            <span className="badge badge-secondary">Telah Diklaim</span>
                                                            : <>
                                                                {item.couponType === 'umum' ?
                                                                    <div className="input-group mt-2 mb-1" style={{
                                                                        width: '190px'
                                                                    }}>
                                                                        <input type="text" className="form-control"
                                                                            value={item.code} />
                                                                        <div className="input-group-append">
                                                                            <button onClick={() => {
                                                                                navigator.clipboard.writeText(item.code)

                                                                            }} className="btn btn-primary" type="button">
                                                                                <i class="fas fa-copy mr-1"></i>
                                                                                Salin
                                                                            </button>
                                                                        </div>
                                                                    </div>

                                                                    :
                                                                    <span className="mr-2 btn btn-sm btn-primary my-2 font-weight-bold" onClick={() => handleClaim(item.id)}>Klaim</span>
                                                                }
                                                            </>
                                                        }
                                                        <small>Available</small>
                                                    </div>
                                                </span>

                                                <span className="dots right">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </span>
                                            </CardStyled>
                                        </div>
                                    ))}

                                </div>
                            </div>
                            <div className="card mb-2 text-left" style={{
                                borderRadius: '20px', boxShadow: '5px 5px 10px -5px rgba(0,0,0,.5)'
                            }}>
                                <div className="card-body">
                                    <Nav pills className="font-weight-bold">
                                        <NavItem>
                                            <NavLinkStyled
                                                className={classNames({ active: activeTab === '1' })}
                                                onClick={() => { setActiveTab('1'); }}>
                                                Deskripsi
                                            </NavLinkStyled>
                                        </NavItem>
                                        <NavItem>
                                            <NavLinkStyled
                                                className={classNames({ active: activeTab === '2' })}
                                                onClick={() => { setActiveTab('2'); }}>
                                                Term and Condition
                                            </NavLinkStyled>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={activeTab} className='mt-3'>
                                        <TabPane tabId="1">
                                            <div className="text-justify" dangerouslySetInnerHTML={{ __html: promo?.content_promo }} />
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <div className="text-justify" dangerouslySetInnerHTML={{ __html: promo?.term }} />
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-3" style={{ borderRadius: '13px', boxShadow: '5px 5px 10px -5px rgba(0,0,0,.5)' }}>
                                <div className="card-header text-white" style={{
                                    background: '#0070BA',
                                    borderTopLeftRadius: '13px',
                                    borderTopRightRadius: '13px',
                                }}>
                                    <h5 className="mb-0">Bagikan</h5>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-around align-items-center ">
                                        <a target='_blank' className="d-block mr-2 btn btn-sm btn-outline-primary font-weight-bold" href={`http://www.twitter.com/share?url=${document.location}`} title="Share on Twitter">
                                            Twitter
                                        </a>
                                        <a target='_blank' className="d-block mr-2 btn btn-sm btn-outline-primary font-weight-bold" href={`https://www.facebook.com/sharer/sharer.php?u=${document.location}`} title="Share on Facebook">
                                            Facebook
                                        </a>
                                        <a target='_blank' className="d-block mr-2 btn btn-sm btn-outline-primary font-weight-bold" href={`mailto:?subject=${promo?.title_promo}&body=${document.location}`} title="Share via Email">
                                            Email
                                        </a>
                                        <a target="_blank" className="btn btn-sm btn-outline-primary font-weight-bold" href={`https://api.whatsapp.com/send?phone=+6282211003535&text=Halo%20*Master%20Diskon*, saya tertarik dengan ${promo?.title_promo}`} title="More share options">
                                            Whatsapp
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card" style={{ borderRadius: '20px', boxShadow: '5px 5px 10px -5px rgba(0,0,0,.5)' }}>
                                <div className="card-header text-white" style={{
                                    background: '#0070BA',
                                    borderTopLeftRadius: '13px',
                                    borderTopRightRadius: '13px',
                                }}>
                                    <h5 className="font-weight-bold mb-0">Disclaimer</h5>
                                </div>
                                <div className="card-body">
                                    <ul>
                                        <li>masterdiskon.com berhak mengubah syarat dan ketentuan tanpa pemberitahuan terlebih dahulu.</li>
                                        <li>masterdiskon.com berhak membatalkan pesanan secara sepihak apabila ditemukan ketidaksesuaian syarat dan ketentuan yang berlaku atau ditemukan adanya indikasi kecurangan yang merugikan masterdiskon.com.</li>
                                        <li>Dengan mengikuti promo ini, pelanggan dianggap mengerti dan menyetujui semua syarat dan ketentuan yang berlaku.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

const NavLinkStyled = styled(NavLink)`
color:#0070BA !important;
cursor:pointer;
    &.active{
    background:#0070BA !important;
    color:white !important;
    }
`

const CardStyled = styled.div`
/* height:118px; */
height:142px;
position:relative;
/* box-shadow:5px 5px 10px -5px rgba(0,0,0,.5); */
border:1px solid black;
display:flex;
flex-direction:row;

.desc-button-container{
    color:white;
    margin-top:-3px;
    .badge-primary{
        background:#0070BA !important; 
        cursor:pointer;
    }
    small{
        margin-top:-3px;
        font-size:12px;
        display:block;
    }
}


.desc{
    width:72%;
    background:#f8c668;
    padding:10px;
    .desc-container{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        font-weight:bold;
        .desc-title{
            margin-top:-4px;
            font-size:18px;
        }
        small{
            font-weight:bold;
            margin:-3px 0;
        }
        .desc-price{
            font-size:22px;
        }
    }
}

.icon{
    font-size:20px;
	padding: 10px;
	display: flex;
	width: 28%;
	font-size: 20px;
	height: 100%;
	background: white;
    border-right:1px solid black;
	justify-content: center;
	align-items: center;
    svg{
         font-size:35px;
         text-align:center;
    }

}


 .dots{
     &.left {
         span{
             position:absolute;
             width:12px;
             height:12px;
             border-radius:50%;
             display:block;
             background:#F5F6FA;
             border-right:1.5px solid black;
             left:-7px;
             z-index:999;
             top:5px;
             &:nth-child(1){
                 top:24px;
             }
             &:nth-child(2){
                 top:44px;
             }
             &:nth-child(3){
                 top:61px;
                 height:25px;
                 width:25px;
                 left:-15px;
             }
             &:nth-child(4){
                 top:90px;
             }
             &:nth-child(5){
                 top:107px;
             }
             &:nth-child(6){
                 top:123px;
             }
         }
        }
        &.right {
            span{
             position:absolute;
             width:12px;
             height:12px;
             border-radius:50%;
             display:block;
             background:#F5F6FA;
             border-left:1.5px solid black;
             right:-7px;
             z-index:999;
             top:5px;
             &:nth-child(1){
                 top:24px;
             }
             &:nth-child(2){
                 top:44px;
             }
             &:nth-child(3){
                top:61px;
                 height:25px;
                 width:25px;
                 right:-15px;
             }
             &:nth-child(4){
                top:90px;
             }
             &:nth-child(5){
                 top:107px;
             }
             &:nth-child(6){
                 top:123px;
             }
         }
     }
 }   


`

export default PromoDetail;