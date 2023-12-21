import React from 'react';
import Layout from '@/components/Layout'
import FlightPassangerDesktop from '@/components/page/FlightPassanger';
import FlightPassangerMobile from '@/components-mobile/page/FlightPassanger';
import withAuth from 'lib/withAuth';
import Head from 'next/head';
import { useMediaQuery } from 'react-responsive';
function Page() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' });
    const FlightPassanger = isTabletOrMobile ? FlightPassangerMobile : FlightPassangerDesktop
    return (
        <>
            <Head>
                <title>Harga tiket pesawat murah - Cari & pesan online di masterdiskon.com</title>
            </Head>
            <FlightPassanger />
        </>
    );
}

Page.Layout = { desktop: Layout, mobile: React.Fragment }

export default withAuth(Page, { auth: true, pathAfterFailure: '/login' });