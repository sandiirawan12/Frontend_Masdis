import Layout from '@/components/Layout';
import Head from 'next/head';
import AccountPurchaseDetailDesktop from '@/components/account/AccountPurchaseDetail';
import AccountPurchaseDetailMobile from '@/components-mobile/account/AccountPurchaseDetail';
import withAuth from 'lib/withAuth';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

function Page() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const AccountPurchaseDetail = isTabletOrMobile ? AccountPurchaseDetailMobile : AccountPurchaseDetailDesktop
    return (
        <>
            <Head>
                <title>
                    Pembelian . masterdiskon.com
                </title>
            </Head>
            <AccountPurchaseDetail />
        </>
    );
}

Page.Layout = { desktop: Layout, mobile: React.Fragment }

export default withAuth(Page, { auth: true, pathAfterFailure: '/login' });