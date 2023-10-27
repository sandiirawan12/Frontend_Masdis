import Layout from '@/components/Layout';
import Head from 'next/head';
import Invoice from '@/components/account/InvoiceAdmin';
import AccountPurchaseDetailMobile from '@/components-mobile/account/AccountPurchaseDetail';
import withAuth from 'lib/withAuth';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

function Page() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const InvoiceDetail = isTabletOrMobile ? AccountPurchaseDetailMobile : Invoice
    return (
        <>
            <Head>
                <title>
                    Cetak Invoice . masterdiskon.com
                </title>
            </Head>
            <InvoiceDetail />
        </>
    );
}

Page.Layout = { desktop: Invoice, mobile: React.Fragment }

export default withAuth(Page, { auth: false, pathAfterFailure: '/login' });