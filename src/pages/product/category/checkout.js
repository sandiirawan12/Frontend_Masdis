import LayoutDesktop from '@/components/Layout'
import GeneralProductCheckoutDesktop from '@/components/shop/GeneralProductCheckout';
import GeneralProductCheckoutMobile from '@/components-mobile/shop/GeneralProductCheckout';
import withAuth from 'lib/withAuth';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

function Page() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' });

    const GeneralProductCheckout = isTabletOrMobile ? GeneralProductCheckoutMobile : GeneralProductCheckoutDesktop;
    return <GeneralProductCheckout />
}

Page.Layout = { desktop: LayoutDesktop, mobile: React.Fragment }

export default withAuth(Page, { auth: true, pathAfterFailure: '/login' });