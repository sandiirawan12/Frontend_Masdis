// Layout.jsx
import React from 'react';
import Header from './header/Header';
import Footer from './footer';
import Snowfall from 'react-snowfall';
import ReactGA from 'react-ga';
import HeaderAll from './header/HeaderAll';
import { useMediaQuery } from "react-responsive";

ReactGA.initialize('UA-39037688-1');

function Layout({ children }) {
    const isHomePage = window.location.pathname === '/'; // Ganti dengan path homepage Anda
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' });

    return (
        <>
            {isHomePage ? (
                isTabletOrMobile ?
                    <>
                        
                    </>
                    :
                    <>
                        <Header isHomePage={isHomePage} />
                    </>
            ) : (
                isTabletOrMobile ?
                    <>

                    </>
                    :
                    <>
                        <HeaderAll />
                    </>
            )}

            <div style={{
                width: 'auto',
                height: 'auto',
                position: "fixed",
                bottom: "20px",
                right: "20px",
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "5px",
                zIndex: 999,
            }}>
                <a href="https://wa.me/6282255003535?text=Saya%20perlu%20bantuan%20?%20apakah%20bisa%20dibantu" target='_blank'>
                    <img style={{ width: '120px', height: '50px' }} src="https://cdn.masterdiskon.com/masterdiskon/img/hotline-masdis.png" alt="Gambar Masterdiskon" />
                </a>
            </div>
            
            <Snowfall
                style={{
                    zIndex: 10000,
                    position: 'fixed',
                    width: '100vw',
                    height: '100vh',
                }}
                snowflakeCount={200}
            />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
