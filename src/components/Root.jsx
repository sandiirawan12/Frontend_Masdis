import tokenApi from '@/api/token';
import userApi from '@/api/user';
import { logout } from '@/store/auth/authActions';
import { changeToken } from '@/store/token/tokenActions';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive';
import { ToastContainer } from 'react-toastify';
import { Modal, ModalBody } from 'reactstrap';
import Swal from 'sweetalert2'


function Root(props) {
    const dispatch = useDispatch();
    const { access_token } = useSelector(state => state.token);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const [isLoading, setIsLoading] = useState(true)

    const router = useRouter()
    useEffect(() => {
        if (!router.pathname.includes('/auth/login/success/[slug]')) {
            setIsLoading(true)

            document.title = 'Masterdiskon.com - Cari tiket pesawat dan Hotel Promo dan Diskon Spesial 2023';
            <meta
                name="description"
                content="Masterdiskon.com - Cari tiket pesawat dan Hotel Promo dan Diskon Spesial 2023"
            />
            // const metaDescription = document.querySelector('meta[name="description"]');
            // if (metaDescription) {
            //     metaDescription.setAttribute('content', 'Masterdiskon.com - Cari tiket pesawat dan Hotel Promo dan Diskon Spesial 2023');
            // }
            document.documentElement.lang = 'id'

            userApi.getProfile(access_token).then(res => {
                if (!res.success) {
                    tokenApi.tokenPublic().then(res => res.json()).then(res => {
                        dispatch(logout())
                        dispatch(changeToken(res.access_token))
                        setIsLoading(false)
                    })
                } else {
                    setIsLoading(false)
                }
            }).catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Tidak Ada Koneksi',
                    text: 'Periksa kembali koneksi internet anda',
                    confirmButtonColor: '#0070BA',
                    allowOutsideClick: false,
                }).then(res => {
                    if (res.isConfirmed) {
                        window.location.reload();
                    }
                })
            })
        } else {
            setIsLoading(false);
        }
    }, [])


    if (isLoading) {
        return <div style={{ minHeight: '100vh', background: 'rgba(255,255,255,.5)' }} className='w-100  d-flex justify-content-center align-items-center'>
            <div className='position-relative' style={{ width: '220px', height: '220px' }}>
                <Image layout='fill' objectFit='contain' src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/pulse-spinner.svg" alt="loading.." />
            </div>
        </div>
    }

    if (false) {
        return <Modal isOpen={true} siz='lg' centered>
            <ModalBody>
                <div className="container container-blog">
                    <div className="text-center">
                        <h3>Master Diskon on the go</h3>
                        <div className="line-pendek" />
                        <p className="my-4">Download our mobile app for easier &amp; faster checkout. We can send you the download link to get started right away!</p>
                        <div className="row">
                            <div className="col-6">
                                <a href="https://play.google.com/store/apps/details?id=com.masterdiskon">
                                    <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/google-play-badge.svg" className="mt-2 img-icon-product img-fluid" />
                                </a>
                            </div>
                            <div className="col-6">
                                <a href="https://apps.apple.com/id/app/masdis/id1549125351">
                                    <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/id-badge-ios.png" className="mt-2 img-icon-product img-fluid" />
                                </a>
                            </div>
                        </div>
                        <p className="mt-2"><small>Tersedia untuk perangkat Android dan iOS</small></p>
                    </div>
                </div>

            </ModalBody>
        </Modal>
    }

    return (
        <>
            <ToastContainer autoClose={5000} hideProgressBar />
            {props.children}
        </>
    )
}


export default Root
