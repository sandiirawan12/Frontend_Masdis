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

function AccountLayout({ children }) {
    const user = useSelector(state => state.user);
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
                    <div className="col-md-3 d-flex">
                        <div className="card flex-grow-1" style={{
                            borderRadius: '15px',
                            boxShadow: '5px 5px 5px -5px rgba(0,0,0,.5)'
                        }}>
                            <div className="card-body">
                                <div className="mb-3">
                                    <h4 className="font-weight-bold text-primary">{user.username || user.name}</h4>
                                    <span class="badge badge-warning rounded px-2 py-1">New Traveler</span>
                                </div>
                                <nav className="nav flex-column">
                                    <AppLink href={url.accountProfile()} className="nav-link d-flex align-items-center text-dark">
                                        <Icon icon={IdCardIcon} />
                                        <span className="ml-2">
                                            Akun
                                        </span>
                                    </AppLink>
                                    <AppLink href={url.accountQuickpick()} className="nav-link d-flex align-items-center text-dark">
                                        <Icon icon={BoltIcon} />
                                        <span className="ml-2">Quickpick</span>
                                    </AppLink>
                                    <AppLink href={url.accountPurchase()} className="nav-link d-flex align-items-center text-dark border-bottom">
                                        <Icon icon={ShoppingCartIcon} />
                                        <span className="ml-2">History</span>
                                    </AppLink>
                                    {user.role != 'user' ?
                                        <AppLink href={url.accountInvoice()} className="nav-link d-flex align-items-center text-dark">
                                            <Icon icon={EnvelopeOpenIcon} />
                                            <span className="ml-2">Invoice</span>
                                        </AppLink>
                                        : <></>
                                    }
                                    <AppLink href={url.accountCoupon()} className="nav-link d-flex align-items-center text-dark border-bottom">
                                        <Icon icon={TagIcon} />
                                        <span className="ml-2">Coupon</span>
                                    </AppLink>
                                    <AppLink href={url.accountFavourite()} className="nav-link d-flex align-items-center text-dark">
                                        <Icon icon={ThumbsUpIcon} /> <span className="ml-2">Favorite</span>
                                    </AppLink>
                                    <AppLink href={url.accountReview()} className="nav-link d-flex align-items-center text-dark">
                                        <Icon icon={CertificateIcon} />
                                        <span className="ml-2">My Review</span>
                                    </AppLink>
                                    <AppLink href={url.accountInbox()} className="nav-link d-flex align-items-center text-dark">
                                        <Icon icon={EnvelopeOpenIcon} />
                                        <span className="ml-2">Inbox</span>
                                    </AppLink>
                                    <a className="nav-link text-danger d-flex align-items-center text-dark" onClick={handleLogout} href="#">
                                        <Icon icon={SignOutIcon} /> <span className="ml-2">Logout</span></a>
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