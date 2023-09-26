import HeaderBack from '@/components-mobile/header/HeaderBack'
import { Icon } from '@iconify/react';
import ArrowRightIcon from '@iconify-icons/fa/arrow-right';
import UserIcon from '@iconify/icons-fa-solid/user';
import UsersIcon from '@iconify/icons-fa-solid/users';
import PhoneIcon from '@iconify-icons/fa/phone';
import CodeIcon from '@iconify-icons/fa/code';
import ThumbsUpIcon from '@iconify-icons/fa/thumbs-up';
import CertificateIcon from '@iconify-icons/fa/certificate';
import SignOutIcon from '@iconify-icons/fa/sign-out';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '@/store/auth/authActions';
import { useEffect, useState } from 'react';
import userApi from '@/api/user';
import moment from 'moment';
import { BottomSheet, SheetContent } from '@biotic-ui/bottom-sheet';
import FacebookIcon from '@iconify/icons-eva/facebook-fill'
import TwitterIcon from '@iconify/icons-eva/twitter-fill'
import WhatsappIcon from '@iconify-icons/fa/whatsapp'


function AccountProfile() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { access_token } = useSelector(state => state.token);
    const { user } = useSelector(state => state);

    const [listPromo, setListPromo] = useState([]);
    const [openShare, setOpenShare] = useState(false);

    const handleOpenShare = () => {
        setOpenShare(prev => !prev)
    }

    const handleLogout = () => {
        dispatch(logout())
        router.push('/')
    }

    useEffect(() => {
        userApi.getListCoupon(access_token, { page: 1, limit: 100 }).then((res) => {
            const { data, meta } = res;
            if (res.success) {
                setListPromo(data)
            }
            // dispatch({ type: 'FETCH_SUCCESS', payload: data });
            // dispatch({ type: 'SET_META', payload: meta });
        });

    }, [])


    return (
        <>
            <HeaderBack title='Profile' onBack={() => router.push('/')} />
            <div className="container pb-5">
                <RootStyled className="list-group">
                    <Link href={'/user/profile/edit'}>
                        <a>
                            <div className='list-item'>
                                <div className='list-item__nav'>
                                    <div className='list-item__nav-icon'>
                                        <Icon icon={UserIcon} />
                                    </div>
                                    <div className='list-item__nav-title'>
                                        <p className='mb-0'> Profile</p>
                                        <small className='text-muted'>Edit Profile</small>
                                    </div>
                                </div>
                                <div className='list-item__icon'>
                                    <Icon icon={ArrowRightIcon} />
                                </div>
                            </div>
                        </a>
                    </Link>
                    <Link href={'/user/quickpick'}>
                        <a>
                            <div className='list-item'>
                                <div className='list-item__nav'>
                                    <div className='list-item__nav-icon'>
                                        <Icon icon={UsersIcon} />
                                    </div>
                                    <div className='list-item__nav-title'>
                                        <p className='mb-0'>QuickPick</p>
                                        <small className='text-muted'>Isi data penumpang, dengan satu klik</small>
                                    </div>
                                </div>
                                <div className='list-item__icon'>
                                    <Icon icon={ArrowRightIcon} />
                                </div>
                            </div>
                        </a>
                    </Link>
                    <Link href={'/user/favorite'}>
                        <a>
                            <div className='list-item'>
                                <div className='list-item__nav'>
                                    <div className='list-item__nav-icon'>
                                        <Icon icon={ThumbsUpIcon} />
                                    </div>
                                    <div className='list-item__nav-title'>
                                        <p className='mb-0'>Favorite</p>
                                        <small className='text-muted'>Produk yang kamu suka</small>
                                    </div>
                                </div>
                                <div className='list-item__icon'>
                                    <Icon icon={ArrowRightIcon} />
                                </div>
                            </div>
                        </a>
                    </Link>
                    <Link href={'/user/review'}>
                        <a>
                            <div className='list-item'>
                                <div className='list-item__nav'>
                                    <div className='list-item__nav-icon'>
                                        <Icon icon={CertificateIcon} />
                                    </div>
                                    <div className='list-item__nav-title'>
                                        <p className='mb-0'>My Review</p>
                                        <small className='text-muted'>Lihat semua ulasan kamu</small>
                                    </div>
                                </div>
                                <div className='list-item__icon'>
                                    <Icon icon={ArrowRightIcon} />
                                </div>
                            </div>
                        </a>
                    </Link>
                    {/* <a href='#' onClick={handleOpenShare}>
                        <div className='list-item'>
                            <div className='list-item__nav'>
                                <div className='list-item__nav-icon'>
                                    <Icon icon={CodeIcon} />
                                </div>
                                <div className='list-item__nav-title'>
                                    <p className='mb-0'>Referral Code</p>
                                    <small className='text-muted'>Share kode</small>
                                </div>
                            </div>
                            <div className='list-item__icon'>
                                <Icon icon={ArrowRightIcon} />
                            </div>
                        </div>
                    </a> */}
                    <div className='list-item' onClick={handleLogout}>
                        <div className='list-item__nav'>
                            <div className='list-item__nav-icon'>
                                <Icon icon={SignOutIcon} />
                            </div>
                            <div className='list-item__nav-title'>
                                <p className='mb-0'>Sign Out</p>
                                <small className='text-muted'>Keluar akun</small>
                            </div>
                        </div>
                        <div className='list-item__icon'>
                            <Icon icon={ArrowRightIcon} />
                        </div>
                    </div>
                </RootStyled>
                <h6 className='mt-3 font-weight-bold'>Promo</h6>
                <div className="row mb-4">
                    {listPromo.map(item => (
                        <div className="col-12 mb-2">
                            <div className="card" style={{ borderRadius: 0, border: '1px solid #0070BA' }}>
                                <div className="border-0 text-white bg-primary p-2">
                                    <small>
                                        {item.detail_coupon.coupon_name}
                                    </small>
                                </div>
                                <div className="p-2">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <small>Berlaku Hingga</small>
                                            <small className='font-weight-bold d-block'>{moment(item.expired).format('DD MMM YYYY')}</small>
                                        </div>
                                        <div>
                                            <small>Min. Transaksi</small>
                                            <small className='font-weight-bold d-block'>Rp{item.detail_coupon.minimum.toLocaleString()}</small>
                                        </div>
                                    </div>
                                    <hr className='my-0' />
                                    <small className='text-danger font-weight-bold mt-1'>Sudah Diklaim</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <DrawerStyled open={openShare} onClose={handleOpenShare}>
                <SheetContent>
                    <div className="form-row text-center">
                        <div className="col-3">
                            <a className='text-dark' href={`https://www.facebook.com/sharer/sharer.php?t=Master Diskon Refferal Code : ${user?.name}`} target="_blank" rel="noopener noreferrer">
                                <Icon icon={FacebookIcon} style={{ fontSize: '27px' }} />
                            </a>
                        </div>
                        <div className="col-3">
                            <a className='text-dark' href={`https://twitter.com/intent/tweet?text=Master Diskon Refferal Code : ${user?.name}`} target="_blank" rel="noopener noreferrer">
                                <Icon icon={TwitterIcon} style={{ fontSize: '27px' }} />
                            </a>
                        </div>
                        <div className="col-3">
                            <a className='text-dark' href={"http://"} target="_blank" rel="noopener noreferrer">
                                <Icon icon={WhatsappIcon} style={{ fontSize: '27px' }} />
                            </a>
                        </div>
                        <div className="col-3">
                            <a className='text-dark' href={"http://"} target="_blank" rel="noopener noreferrer">
                                <i class="far fa-copy" style={{ fontSize: '27px' }}></i>
                                {/* <Icon icon={WhatsappIcon} style={{fontSize:'27px'}} /> */}
                            </a>
                        </div>
                    </div>
                </SheetContent>
            </DrawerStyled>
        </>
    );
}

const DrawerStyled = styled(BottomSheet)`
    /* min-height:20%;
    max-height:20%; */
    padding:20px;

`

const RootStyled = styled.div`
    border-radius:0;
    .list-item {
        width:100% !important;
        color:black;
        display:flex;
        align-items:center;
        justify-content:space-between;
        border-bottom:1px solid #eaeaea;
        padding:5px 10px;
        cursor:pointer;
        .list-item__icon{
            color:#0070BA;
        }
        .list-item__nav{
            display:flex;
            align-items:center;
            .list-item__nav-icon{
                font-size:14px;
                margin-right:10px;
                background:#0070BA;
                width:30px;
                height:30px;
                border-radius:50%;
                display:flex;
                justify-content:center;
                align-items:center;
                svg{
                    color:white;
                }
            }
            .list-item__nav-title{
                p{
                    font-size:14px;
                    font-weight:bold;
                }
                small{
                    font-size:12px;
                }
            }
        }
    }

`

export default AccountProfile;