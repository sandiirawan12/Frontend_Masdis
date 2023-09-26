import React from 'react';
import Layout from '@/components/Layout'
import TrainPassangerDesktop from '@/components/page/TrainPassanger';
import FlightPassangerMobile from '@/components-mobile/page/FlightPassanger';
import withAuth from 'lib/withAuth';
import Head from 'next/head';
import { useMediaQuery } from 'react-responsive';
function Page() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' });
    const TrainPassanger = isTabletOrMobile ? FlightPassangerMobile : TrainPassangerDesktop
    return (
        <>
            <Head>
                <title>Harga tiket kereta murah - Cari & pesan online di masterdiskon.com</title>
            </Head>
            <TrainPassanger />
        </>
    );
}

Page.Layout = { desktop: Layout, mobile: React.Fragment }

export default withAuth(Page, { auth: true, pathAfterFailure: '/login' });