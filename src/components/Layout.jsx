import React from 'react'
import Footer from './footer'
import Header from './header/Header'
import Snowfall from 'react-snowfall'
import ReactGA from 'react-ga';

// ReactGA.initialize('G-56R5954QCE');
ReactGA.initialize('UA-39037688-1');


function Layout({ children }) {
    return (
        <>
            <Header />
            {/* <Snowfall
                // color="white"
                style={{
                    zIndex: 10000,
                    position: 'fixed',
                    width: '100vw',
                    height: '100vh',
                }}
                // Controls the number of snowflakes that are created (default 150)
                snowflakeCount={200}

            /> */}
            {children}
            <Footer />
        </>
    )
}

export default Layout