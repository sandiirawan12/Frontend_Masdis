import React from 'react';
import Layout from '@/components/Layout'
import TrainSeatPassangerDesktop from '@/components/page/TrainSeatPassanger';
import FlightPassangerMobile from '@/components-mobile/page/FlightPassanger';
import withAuth from 'lib/withAuth';
import Head from 'next/head';
import { useMediaQuery } from 'react-responsive';

function Page() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' });
    const TrainSeatPassanger = isTabletOrMobile ? FlightPassangerMobile : TrainSeatPassangerDesktop
    return (
        <>
            <Head>
                <title>Harga tiket kereta murah - Cari & pesan online di masterdiskon.com</title>
            </Head>
            <TrainSeatPassanger />
        </>
    );
}

Page.Layout = { desktop: Layout, mobile: React.Fragment }

export default withAuth(Page, { auth: true, pathAfterFailure: '/login' });