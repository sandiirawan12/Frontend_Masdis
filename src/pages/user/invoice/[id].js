import Layout from '@/components/Layout';
import Head from 'next/head';
import Evoucher from '@/components/account/Evoucher';
import AccountPurchaseDetailMobile from '@/components-mobile/account/AccountPurchaseDetail';
import withAuth from 'lib/withAuth';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

function Page() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const EvoucherDetail = isTabletOrMobile ? AccountPurchaseDetailMobile : Evoucher
    return (
        <>
            <Head>
                <title>
                    Evoucher . masterdiskon.com
                </title>
            </Head>
            <EvoucherDetail />
        </>
    );
}

Page.Layout = { desktop: Evoucher, mobile: React.Fragment }

export default withAuth(Page, { auth: true, pathAfterFailure: '/login' });