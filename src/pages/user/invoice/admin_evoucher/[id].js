import Layout from '@/components/Layout';
import Head from 'next/head';
import EvoucherAdmin from '@/components/account/EvoucherAdmin';
import AccountPurchaseDetailMobile from '@/components-mobile/account/AccountPurchaseDetail';
import withAuth from 'lib/withAuth';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

function Page() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const EvoucherDetail = isTabletOrMobile ? AccountPurchaseDetailMobile : EvoucherAdmin
    return (
        <>
            <Head>
                <title>
                    Masterdiskon - Evoucher Admin 
                </title>
            </Head>
            <EvoucherDetail />
        </>
    );
}

Page.Layout = { desktop: EvoucherAdmin, mobile: React.Fragment }

export default withAuth(Page, { auth: false, pathAfterFailure: '/login' });