import React, { useState } from 'react';
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

    return (
        <div className='sticky-top desktop-only p-0'>
            <div className="pt-1 desktop-only d-block" style={{ background: "#0070ba", display: "none" }}></div>
            {/* ============ */}
            <nav className="navbar bg-white navbar-expand-lg" style={{ boxShadow: '-1px 3px 11px -7px rgba(156,156,156,0.75)'}}>
                <div className="container">
                    <div className="navbar-brand mt-2" style={{ padding: "4px", cursor: 'pointer' }}>
                        <Link href='/'>
                            <Image src='https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/masterdiskon_logo.png' width={130} height={60} alt='Logo Masterdiskon' />
                        </Link>
                    </div>
                    <div className="navbar-collapse ml-4">
                        <ul className="navbar-nav nav-menu">
                            <li className="nav-item mr-2 d-flex flex-column justify-content-center">
                                <LinkStyled className="font-weight-bold text-dark d-flex align-items-center rounded-pill" href='/hotels'>
                                    <Icon icon="solar:bed-line-duotone" className='mr-2 ml-1 mt-1 text-primary' style={{fontSize:'20px'}} />
                                    Hotels
                                </LinkStyled>
                            </li>
                            <li className="nav-item mr-2 d-flex flex-column justify-content-center"> 
                                <LinkStyled className="font-weight-bold text-dark d-flex align-items-center rounded-pill" href='/flights'>
                                    <Icon icon="ph:airplane-duotone" className='mr-2 ml-1 mt-1 text-primary' style={{ fontSize: '20px' }} />
                                    Flights
                                </LinkStyled>
                            </li>
                            {/* <li className="nav-item">
                            <Link href='/sports'>
                                <LinkStyled style={{ paddingLeft: '13px' }} className="font-weight-bold d-flex align-items-center text-primary rounded-pill">
                                    <IconStyled style={{ backgroundSize: '30px', paddingRight: '29px' }} img='https://cdn.masterdiskon.com/masterdiskon/icon/general/new/icon-sports.png' />

                                    Sports</LinkStyled>
                            </Link>
                        </li> */}
                            <li className="nav-item" style={{ marginLeft: '15px' }}>
                                <LinkStyled className="font-weight-bold text-dark d-flex align-items-center rounded-pill" href='/promo'>
                                    <Icon icon="iconamoon:discount-duotone" className='mr-2 ml-1 mt-1 text-primary' style={{ fontSize: '20px' }} />
                                    Promo
                                </LinkStyled>
                            </li>
                        </ul>
                        <div className="form-inline my-lg-0 mr-auto form-cari">
                        </div>
                        <ul className="navbar-nav d-flex  align-items-center">
                            <li className="nav-item mr-2">
                                <Dropdown toggle={handleOpenDownload} isOpen={downloadOpen}>
                                    <DropdownToggle
                                        data-toggle="dropdown" className="btn btn-sm btn-light font-weight-bold d-flex justify-content-center align-items-center mr-1" variant='light'>
                                        <Icon icon="solar:download-broken" className="text-primary" style={{ marginRight: '10px', marginTop: '2px' }} /> Unduh App
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
                                                    <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/id-badge-ios.png" alt='Image Masterdiskon' style={{ width: '100%', height:'33px'}} className="img-fluid lazy" />
                                                </a>
                                            </div>
                                        </div>
                                    </DropdownMenu>
                                </Dropdown>
                            </li>
                            <li className="nav-item mr-2">
                                <Link href="/help">
                                    <a className="btn btn-sm btn-light d-flex align-items-center font-weight-bold justify-content-center mr-1">
                                        <Icon icon="icon-park-outline:help" className="text-primary" style={{ marginRight: '10px', marginTop: '2px' }} /> Bantuan </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Dropdown toggle={handleOpenLanguage} isOpen={languageOpen}>
                                    <DropdownToggle className="btn btn-sm btn-light d-flex justify-content-center mr-1" variant='light'>
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
                                        <span className='font-weight-bold ml-2'>
                                            ID
                                        </span>
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
                            {!auth ? <>

                                <li className="nav-item notlogged mr-1 ml-3">
                                    <Link href='/login' passHref>
                                        <a className="btn btn-sm btn-primary font-weight-bold">Login</a>
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
                                            <a className="nav-link d-flex justify-content-center text-dark" href="#">
                                                <div style={{ width: '25px', height: '25px', position: 'relative', }} className='d-inline-block mr-2'>
                                                    <Image layout='fill' src={'https://cdn.masterdiskon.com/masterdiskon/icon/fe/user.png'} alt="Image Masterdiskon" />
                                                </div>
                                                <span className="d-inline-block" style={{
                                                    textOverflow: 'ellipsis',
                                                    overflow: 'hidden',
                                                    whiteSpace: 'nowrap',
                                                }}>
                                                    {user?.username?.replaceAll('null', '').substring(0, 10) || user?.name?.replaceAll('null', '').substring(0, 10)}
                                                </span>
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
                </div>
            </nav >
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
