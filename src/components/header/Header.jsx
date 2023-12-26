import React from 'react'
import Snowfall from 'react-snowfall'
import Navbar from './Navbar'
import TopBar from './TopBar'

const Header = ({ isHomePage }) => {
    // Lakukan validasi header di sini berdasarkan isHomePage

    return (
        <>
            {/* <TopBar /> */}
            <Navbar />
        </>
    );
};

export default Header
