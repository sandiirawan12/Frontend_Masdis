import HeaderBack from '@/components-mobile/header/HeaderBack'
import { Icon } from '@iconify/react';
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
            <HeaderBack title='Account' onBack={() => router.push('/')} />
            <div className="container pb-5">
                <RootStyled className="list-group mt-2">
                    <Link href={'/user/profile/edit'}>
                        <a className="pt-2">
                            <div className='list-item'>
                                <div className='list-item__nav'>
                                    <div className='mr-3 text-primary'>
                                        <Icon icon="uil:setting" />
                                    </div>
                                    <div className='list-item__nav-title'>
                                        <p className='mb-0'> Akun Saya</p>
                                        <small className='text-muted'>Edit Akun Saya</small>
                                    </div>
                                </div>
                                <div className='list-item__icon'>
                                    <Icon icon="tabler:chevron-right" className='text-dark' />
                                </div>
                            </div>
                        </a>
                    </Link>
                    <Link href={'/user/quickpick'}>
                        <a>
                            <div className='list-item'>
                                <div className='list-item__nav'>
                                    <div className='mr-3 text-primary'>
                                        <Icon icon="solar:user-plus-linear" />
                                    </div>
                                    <div className='list-item__nav-title'>
                                        <p className='mb-0'>Passenger QuickPick</p>
                                        <small className='text-muted'>List data penumpang, dengan satu klik</small>
                                    </div>
                                </div>
                                <div className='list-item__icon'>
                                    <Icon icon="tabler:chevron-right" className='text-dark' />
                                </div>
                            </div>
                        </a>
                    </Link>
                    <Link href={'/user/purchase?status='}>
                        <a>
                            <div className='list-item'>
                                <div className='list-item__nav'>
                                    <div className='mr-3 text-primary'>
                                        <Icon icon="solar:bill-list-broken" />
                                    </div>
                                    <div className='list-item__nav-title'>
                                        <p className='mb-0'>Pesanan Saya</p>
                                        <small className='text-muted'>List pesanan saya</small>
                                    </div>
                                </div>
                                <div className='list-item__icon'>
                                    <Icon icon="tabler:chevron-right" className='text-dark' />
                                </div>
                            </div>
                        </a>
                    </Link>
                    <Link href={'/user/review'}>
                        <a>
                            <div className='list-item'>
                                <div className='list-item__nav'>
                                    <div className='mr-3 text-primary'>
                                        <Icon icon="carbon:review" />
                                    </div>
                                    <div className='list-item__nav-title'>
                                        <p className='mb-0'>Review Saya</p>
                                        <small className='text-muted'>Lihat semua ulasan kamu</small>
                                    </div>
                                </div>
                                <div className='list-item__icon'>
                                    <Icon icon="tabler:chevron-right" className='text-dark' />
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
                            <div className='mr-3 text-primary'>
                                <Icon icon="solar:logout-broken" />
                            </div>
                            <div className='list-item__nav-title'>
                                <p className='mb-0'>Log Out</p>
                                <small className='text-muted'>Keluar dari akun</small>
                            </div>
                        </div>
                        <div className='list-item__icon'>
                            <Icon icon="tabler:chevron-right" className='text-dark' />
                        </div>
                    </div>
                </RootStyled>
                <br />
                <br />
                {/* <h6 className='my-4 font-weight-bold'>Promo khusus anda</h6>
                <div className="row mb-4">
                    {listPromo.map(item => (
                        <div className="col-6 mb-3">
                            <div className="card" style={{ borderRadius: '20px', border: '1px solid #ced4da', background: '#1A83C6', boxShadow: '-1px 3px 11px -7px rgba(156,156,156,0.75);' }}>
                                <small className='p-2 text-white font-weight-bold'>
                                    {item.detail_coupon.coupon_name}
                                </small>
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
                                </div>
                                <hr className='my-0' />
                                <center className='my-2'>
                                    <small className='text-white font-weight-bold justify-content-center'>Sudah Di klaim</small>
                                </center>
                            </div>
                        </div>
                    ))}
                </div> */}
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