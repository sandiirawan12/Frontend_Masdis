import Layout from '@/components/Layout'
import GeneralProductDetailDesktop from '@/components/page/GeneralProductDetail';
import GeneralProductDetailMobile from '@/components-mobile/page/GeneralProductDetail'
import React from 'react';
import { useMediaQuery } from 'react-responsive';


function Page() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' });

    const GeneralProductDetail = isTabletOrMobile ? GeneralProductDetailMobile : GeneralProductDetailDesktop

    return (
        <GeneralProductDetail />
    );
}

Page.Layout = { desktop: Layout, mobile: React.Fragment }

export default Page;