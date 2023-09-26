import Header from '@/components-mobile/header/Header'
import { Icon } from '@iconify/react';
import HomeIcon from '@iconify/icons-fa-solid/home';
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
            <main className='pb-3'>
                {children}
            </main>
            <nav style={{
                borderRadius: '25px 25px 0 0', zIndex: '9999'
            }} className="navbar bg-white fixed-bottom shadow pb-0 align-items-center text-center">
                <div className="container">
                    <Link href='/'>
                        <LinkStyled className={classNames('nav-link', { 'active': router.pathname === '/' })}>
                            <Icon icon={HomeIcon} className='icon' />
                            Home
                        </LinkStyled>
                    </Link>
                    <Link href='/user/purchase'>
                        <LinkStyled className={classNames('nav-link', { 'active': router.pathname === '/user/purchase' })}>
                            <Icon icon={BriefIcon} className='icon' />
                            Order</LinkStyled>
                    </Link>
                    <Link href='/user/inbox'>
                        <LinkStyled className={classNames('nav-link', { 'active': router.pathname === '/user/inbox' })}>
                            <Icon icon={NotificationIcon} className='icon' />
                            Notification</LinkStyled>
                    </Link>
                    <Link href='/login'>
                        <LinkStyled className={classNames('nav-link', { 'active': router.pathname === '/user/profile' })}>
                            <Icon icon={UserIcon} className='icon' />
                            Account</LinkStyled>
                    </Link>
                </div>
            </nav>

        </>
    );
}

export default Layout;