import Layout from '@/components/Layout';
import Head from 'next/head';
import AccountPurchaseDetaiTrainlDesktop from '@/components/account/AccountPurchaseTrainDetail';
import AccountPurchaseDetailMobile from '@/components-mobile/account/AccountPurchaseDetail';
import withAuth from 'lib/withAuth';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

function Page() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const AccountPurchaseDetailTrain = isTabletOrMobile ? AccountPurchaseDetailMobile : AccountPurchaseDetaiTrainlDesktop
    return (
        <>
            <Head>
                <title>
                    Masterdiskon - Detail Pesanan
                </title>
            </Head>
            <AccountPurchaseDetailTrain />
        </>
    );
}

Page.Layout = { desktop: Layout, mobile: React.Fragment }

export default withAuth(Page, { auth: true, pathAfterFailure: '/login' });