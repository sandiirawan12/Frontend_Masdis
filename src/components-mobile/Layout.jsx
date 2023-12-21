import Header from '@/components-mobile/header/Header'
import { Icon } from '@iconify/react';
import UserIcon from '@iconify/icons-fa-solid/user-alt';
import BriefIcon from '@iconify/icons-fa-solid/briefcase';
import NotificationIcon from '@iconify/icons-fa-solid/bell';
import Link from 'next/link';
import styled from 'styled-components';
import classNames from 'classnames';
import { useRouter } from 'next/router';

const LinkStyled = styled.a`
    font-size:12px;
    color:grey;
    display:flex;
    flex-direction:column;
    align-items:center;
    cursor:pointer;
    padding:5px 0;
    font-weight:bold;
    .icon{
        font-size:14px;
    }
    &.active{
        color:#0070BA;
    }

`

function Layout({ children }) {
    const router = useRouter()
    return (
        <>
            <main className='pb-3 bg-white'>
                {children}
            </main>
            <nav style={{
                borderRadius: '30px 30px 0 0',
                zIndex: '9999',
                boxShadow: '-1px 21px 26px 11px rgba(191,191,191,0.75)'
            }} className="navbar bg-white fixed-bottom pl-4 pr-4 align-items-center text-center">
                <div className="container">
                    <Link href='/'>
                        <LinkStyled className={classNames('mt-2 nav-link', { 'active': router.pathname === '/' })}>
                            <Icon icon="teenyicons:home-solid" className='icon' style={{ fontSize: '24px', color: router.pathname === '/' ? '#1A83C6' : '#D8D8D8'}} />
                            <span className='mt-1 text-dark'>Home</span>
                        </LinkStyled>
                    </Link>
                    <Link href='/user/purchase'>
                        <LinkStyled className={classNames('mt-2 nav-link', { 'active': router.pathname === '/user/purchase' })}>
                            <Icon icon="ri:file-list-3-fill" className='icon' style={{ fontSize: '24px', color: router.pathname === '/user/purchase' ? '#1A83C6' : '#D8D8D8' }} />
                            <span className='mt-1 text-dark'>Pesanan</span>
                        </LinkStyled>
                    </Link>
                    <Link href='/user/inbox'>
                        <LinkStyled className={classNames('mt-2 nav-link', { 'active': router.pathname === '/user/inbox' })}>
                            <Icon icon="ion:notifcations" className='icon' style={{ fontSize: '24px', color: router.pathname === '/user/inbox' ? '#1A83C6' : '#D8D8D8' }} />
                            <span className='mt-1 text-dark'>Notifikasi</span>
                        </LinkStyled>
                    </Link>
                    <Link href='/login'>
                        <LinkStyled className={classNames('mt-2 nav-link', { 'active': router.pathname === '/user/profile' })}>
                            <Icon icon="solar:user-bold" className='icon' style={{ fontSize: '24px', color: router.pathname === '/user/profile' ? '#1A83C6' : '#D8D8D8' }} />
                            <span className='mt-1 text-dark'>Account</span>
                        </LinkStyled>
                    </Link>
                </div>
            </nav>

        </>
    );
}

export default Layout;