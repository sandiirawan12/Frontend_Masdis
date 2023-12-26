import React, { useMemo, useState, useEffect, createRef } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styled from 'styled-components'
import { Icon } from '@iconify/react';
import smartphoneIcon from '@iconify/icons-eva/smartphone-outline';
import questionIcon from '@iconify/icons-eva/question-mark-circle-outline';
import UserCircleIcon from '@iconify/icons-fa-solid/user-circle';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '@/store/auth/authActions';
import Router from 'next/router';

const LogoStyled = styled.img`
    height:70px;
    padding: 7px;
    vertical-align: middle;
`

function Navbar() {

    const [downloadOpen, setDownloadOpen] = useState(false)
    const [languageOpen, setLanguageOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const dispatch = useDispatch()
    const { user, auth } = useSelector(state => state)

    const handleOpenDownload = () => {
        setDownloadOpen(prevState => !prevState)
    }
    const handleOpenLanguage = () => {
        setLanguageOpen(prevState => !prevState)
    }
    const toggle = () => setDropdownOpen(prevState => !prevState);

    const handleLogout = () => {
        dispatch(logout())
        Router.push('/')
    }

    useEffect(() => {
        function handleScroll() {
            const scrolled = window.scrollY > 50; // Ubah angka ini sesuai dengan posisi scroll yang diinginkan
            setIsScrolled(scrolled);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`sticky-top desktop-only p-0 ${isScrolled ? 'bg-white' : ''}`}>
            {/* <div className="pt-1 desktop-only d-block" style={{ background: "#0070ba", display: "none" }}></div> */}
            {/* ============ */}
            <nav className={`navbar navbar-expand-md px-5`}>
                <div className="navbar-brand mt-2" style={{ cursor: 'pointer' }}>
                    <Link href='/'>
                        <Image src='https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/logo-natal2023.png' width={115} height={50} alt='Logo Masterdiskon' />
                    </Link>
                </div>
                <div className="navbar-collapse ml-4">
                    <div className="form-inline my-lg-0 mr-auto form-cari">
                    </div>
                    <ul className="navbar-nav d-flex  align-items-center">
                        <li className="nav-item">
                            <Dropdown toggle={handleOpenDownload} isOpen={downloadOpen}>
                                <DropdownToggle
                                    data-toggle="dropdown"
                                    tag="span"
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className={`d-flex mr-3 mt-1 ${isScrolled ? 'text-dark' : 'text-white'}`}>
                                        <Icon icon="heroicons:device-phone-mobile-20-solid" className={`mt-1 ${isScrolled ? 'text-primary' : 'text-white'}`} />
                                        <span className='ml-2' style={{ fontSize: '15px' }}>
                                            Unduh Aplikasi
                                        </span>
                                        <span className={`ml-2 mb-1 ${isScrolled ? 'text-primary' : 'text-white'}`}><Icon icon="ep:arrow-down" style={{ fontSize: '12px' }} /></span>
                                    </div>
                                </DropdownToggle>
                                <DropdownMenu style={{ width: '16rem' }}>
                                    <div className='font-weight-bold p-2'>
                                        Install Aplikasi Masterdiskon
                                    </div>
                                    <div className="form-row p-2">
                                        <div className="col-md-6">
                                            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.masterdiskon" rel="noreferrer">
                                                <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/google-play-badge.svg" alt='Image Masterdiskon' className="img-fluid lazy" />
                                            </a>
                                        </div>
                                        <div className="col-md-6">
                                            <a target="_blank" href="https://apps.apple.com/id/app/masdis/id1549125351" rel="noreferrer">
                                                <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/id-badge-ios.png" alt='Image Masterdiskon' style={{ width: '100%', height: '33px' }} className="img-fluid lazy" />
                                            </a>
                                        </div>
                                    </div>
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                        <li className="nav-item">
                            <Dropdown toggle={handleOpenLanguage} isOpen={languageOpen}>
                                <DropdownToggle
                                    data-toggle="dropdown"
                                    tag="span"
                                    style={{cursor: 'pointer'}}
                                >
                                    <div className={`d-flex mr-3 mt-1 ${isScrolled ? 'text-dark' : 'text-white'}`}>
                                        <div className='mr-1' style={{
                                            width: '20px',
                                            height: '20px',
                                            borderRadius: '50%',
                                            width: '20px',
                                            height: '20px',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            borderRadius: '50%',
                                        }} >
                                            <img style={{
                                                margin: '0 auto',
                                                marginLeft: '0px',
                                                marginTop: '-5px',
                                                width: '100%',
                                                objectFit: 'cover',
                                                height: '31px',
                                            }} src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/flag/209-indonesia.svg" alt='Icon Masterdiskon' />
                                        </div>
                                        <span className='ml-2' style={{ fontSize: '15px' }}>
                                            ID | IDR
                                        </span>
                                        <span className={`ml-2 mb-1 ${isScrolled ? 'text-primary' : 'text-white'}`}><Icon icon="ep:arrow-down" style={{ fontSize: '12px' }} /></span>
                                    </div>
                                </DropdownToggle>
                                <DropdownMenu className='p-3' style={{ width: "16rem" }}>
                                    <b>Ganti bahasa</b>
                                    <div className="form-row mt-2">
                                        <div className="col-md-6">
                                            <button className="btn btn-sm">
                                                <Image layout='fill' className="mr-1" style={{ width: "20px", height: "20px" }} src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/flag/209-indonesia.svg" alt='Icon Masterdiskon' /> ID
                                            </button>
                                        </div>
                                        {/* <div className="col-md-6">
                                            <button className="btn btn-sm">
                                                <Image layout='fill' className="mr-1" style={{ width: "20px", height: "20px" }} src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/flag/260-united-kingdom.svg" /> EN
                                            </button>
                                        </div> */}
                                    </div>
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                        <li className="nav-item mr-3">
                            <Link href="/promo">
                                <a style={{ fontSize: '15px' }} className={`${isScrolled ? 'text-dark' : 'text-white'}`}>
                                    Promo
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item mr-3">
                            <Link href="/help">
                                <a style={{ fontSize: '15px' }} className={`${isScrolled ? 'text-dark' : 'text-white'}`}>
                                    Bantuan
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/user/purchase?status=">
                                <a style={{ fontSize: '15px'}} className={`${isScrolled ? 'text-dark' : 'text-white'}`}>
                                    Pesanan
                                </a>
                            </Link>
                        </li>
                        {!auth ? <>
                            <li className="nav-item notlogged mr-2 ml-3">
                                <Link href='/login' passHref>
                                    <a className={`btn btn-sm font-weight-bold ${isScrolled ? 'btn-outline-primary' : 'btn-outline-light'}`}><Icon icon="gridicons:user" className={`mr-2 text-warning`} /> Log In</a>
                                </Link>
                            </li>
                            <li className="nav-item notlogged">
                                <Link href={'/register'} passHref>
                                    <a className="btn btn-sm btn-danger font-weight-bold">Daftar</a>
                                </Link>
                            </li>
                        </> :
                            <li className="nav-item dropdown userlogged">
                                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                    <DropdownToggle style={{ background: 'none', border: 'none' }}>
                                        <a className="nav-link d-flex justify-content-center align-items-center" href="#">
                                            <div style={{ width: '25px', height: '25px', position: 'relative', }} className='d-inline-block mr-2'>
                                                <Image layout='fill' src={'https://cdn.masterdiskon.com/masterdiskon/icon/fe/user.png'} alt="Image Masterdiskon" />
                                            </div>
                                            <span
                                                className={`d-inline-block font-weight-bold ${isScrolled ? 'text-primary' : 'text-white'}`}
                                                style={{
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden',
                                                whiteSpace: 'nowrap',
                                            }}>
                                                {user?.username?.replaceAll('null', '').substring(0, 10) || user?.name?.replaceAll('null', '').substring(0, 10)}
                                            </span>
                                            <span className={`mx-2 font-weight-bold ${isScrolled ? 'text-primary' : 'text-white'}`}> | </span>
                                            <span className={`font-weight-bold ${isScrolled ? 'text-primary' : 'text-white'}`}><Icon icon="tabler:coin-monero-filled" className="mr-1 mb-1 text-warning" /> 0</span>
                                            <span className={`ml-2 mb-1 ${isScrolled ? 'text-primary' : 'text-white'}`}><Icon icon="ep:arrow-down" style={{ fontSize: '12px' }} /></span>
                                        </a>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <Link href='/user/profile'>
                                                <a className='text-dark d-block'>
                                                    Profil
                                                </a>
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link href='/user/inbox'>
                                                <a className='text-dark d-block'>
                                                    Kotak Masuk
                                                </a>
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </li>
                        }
                    </ul>
                </div>
            </nav >
            <nav className={`navbar navbar-expand-sm px-5`} style={{ marginTop: '-15px', boxShadow: isScrolled ? '-1px 3px 11px -7px rgba(156,156,156,0.75)' : 'none' }} >
                <div className="navbar-brand" style={{ cursor: 'pointer' }}>
                    <ul className="navbar-nav d-flex align-items-center">
                        <li className="nav-item mr-4 ml-3">
                            <Link href="/hotels">
                                <a style={{ fontSize: '15px' }} className={`font-weight-bold ${isScrolled ? 'text-dark' : 'text-white'}`}>
                                    Hotel
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item mr-4">
                            <Link href="/flight">
                                <a style={{ fontSize: '15px' }} className={`font-weight-bold ${isScrolled ? 'text-dark' : 'text-white'}`}>
                                    Tiket Pesawat
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item mr-4">
                            <Link href="/train">
                                <a style={{ fontSize: '15px' }} className={`font-weight-bold ${isScrolled ? 'text-dark' : 'text-white'}`}>
                                    Tiket Kereta Api
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item mr-4">
                            <Link href="/">
                                <a style={{ fontSize: '15px' }} className={`font-weight-bold ${isScrolled ? 'text-dark' : 'text-white'}`}>
                                    Atraksi dan Aktivitas
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

const IconStyled = styled.div`
    background-image: url(${props => props.img});
    padding-right: 40px;
    margin: 0px;
    background-clip: border-box;
    width: 22px;
    height: 22px;
    background-position: left;
    background-size: 40px;
    background-repeat: no-repeat;
`

const LinkStyled = styled.a`
 padding: 3px 22px 5px 7px;
 background: rgb(242,246,251);
cursor:pointer;
&:hover{
    color:inherit;
}
`

export default Navbar
