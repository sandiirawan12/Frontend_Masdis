import { Icon } from "@iconify/react";
import Layout from "../Layout";
import IdCardIcon from '@iconify/icons-fa-solid/id-card'
import BoltIcon from '@iconify/icons-fa-solid/bolt'
import ShoppingCartIcon from '@iconify/icons-fa-solid/shopping-cart'
import TagIcon from '@iconify/icons-fa-solid/tag'
import ThumbsUpIcon from '@iconify/icons-fa-solid/thumbs-up'
import CertificateIcon from '@iconify/icons-fa-solid/certificate'
import EnvelopeOpenIcon from '@iconify/icons-fa-solid/envelope-open-text'
import SignOutIcon from '@iconify/icons-fa-solid/sign-out-alt'
import { useSelector } from 'react-redux';
import AppLink from "../shared/AppLink";
import { url } from "@/services/utils";
import { useRouter } from "next/router";
import { useDispatch } from 'react-redux';
import { logout } from "@/store/auth/authActions";
import classNames from 'classnames';
import styled from 'styled-components';

const CardOuterCircle2 = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: white;
    box-shadow: -1px 3px 11px -7px rgba(156,156,156,0.75);
    position: relative;
`

const CardInnerCircle2 = styled.div`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: #f2f3f3;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
`

function AccountLayout({ children }) {
    const user = useSelector(state => state.user);

    console.log(user);
    const router = useRouter();
    const dispatch = useDispatch()

    const activeUrl = router.asPath;


    const handleLogout = () => {
        dispatch(logout())
        router.push('/')
    }

    return (
        <Layout>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card" style={{
                            borderRadius: '15px',
                        }}>
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <CardOuterCircle2>
                                        <CardInnerCircle2>
                                            <span style={{ fontSize: '30px', color: '#1ba0e2' }} className='font-weight-bold'><Icon icon="ph:user-circle-duotone" /></span>
                                        </CardInnerCircle2>
                                    </CardOuterCircle2>
                                    <span className='ml-3 font-weight-bold' style={{ textTransform: 'capitalize' }}>{user.name || user.username}</span>
                                </div>
                                <hr />
                                <nav className="">
                                    <AppLink href={url.accountProfile()} className="d-flex align-items-center">
                                        <Icon icon="uil:setting" className="text-primary" style={{fontSize: '24px'}}/>
                                        <span className="ml-3 text-dark">
                                            Akun Saya
                                        </span>
                                    </AppLink>
                                    <AppLink href={url.accountPoin()} className="d-flex align-items-center mt-3">
                                        <Icon icon="tabler:coins" className="text-primary" style={{ fontSize: '24px' }} />
                                        <span className="ml-3 text-dark">
                                            Poin Saya
                                        </span>
                                    </AppLink>
                                    <AppLink href={url.accountQuickpick()} className="d-flex align-items-center mt-3">
                                        <Icon icon="solar:user-plus-linear" className="text-primary" style={{ fontSize: '24px' }} />
                                        <span className="ml-3 text-dark">
                                            Passenger Quick Pick
                                        </span>
                                    </AppLink>
                                    <AppLink href={url.accountPurchase()} className="d-flex align-items-center mt-3">
                                        <Icon icon="solar:bill-list-broken" className="text-primary" style={{ fontSize: '24px' }} />
                                        <span className="ml-3 text-dark">
                                            Pesanan Saya
                                        </span>
                                    </AppLink>
                                    <AppLink href={url.accountCoupon()} className="d-flex align-items-center mt-3">
                                        <Icon icon="mingcute:coupon-line" className="text-primary" style={{ fontSize: '24px' }} />
                                        <span className="ml-3 text-dark">
                                            Kupon Saya
                                        </span>
                                    </AppLink>
                                    {user.role != 'user' ?
                                        <AppLink href={url.accountInvoice()} className="d-flex align-items-center mt-3">
                                            <Icon icon="basil:invoice-outline" className="text-primary" style={{ fontSize: '24px' }} />
                                            <span className="ml-3 text-dark">
                                                Invoice Saya
                                            </span>
                                        </AppLink>
                                        : <></>
                                    }
                                    <hr />
                                    <AppLink href={url.accountReview()} className="d-flex align-items-center mt-3">
                                        <Icon icon="carbon:review" className="text-primary" style={{ fontSize: '24px' }} />
                                        <span className="ml-3 text-dark">
                                            Review Saya
                                        </span>
                                    </AppLink>
                                    <AppLink href={url.accountInbox()} className="d-flex align-items-center mt-3">
                                        <Icon icon="ant-design:message-outlined" className="text-primary" style={{ fontSize: '24px' }} />
                                        <span className="ml-3 text-dark">
                                            Inbox Saya
                                        </span>
                                    </AppLink>
                                    <a className="d-flex align-items-center mt-3" onClick={handleLogout} href="#">
                                        <Icon icon="solar:logout-broken" className="text-primary" style={{ fontSize: '24px' }} />
                                        <span className="ml-3 text-dark">Keluar dari akun</span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div className="col-9">
                        {children}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default AccountLayout;