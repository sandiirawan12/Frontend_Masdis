import React from 'react';
import Layout from '@/components/Layout';
import PromoDetail from '@/components/page/PromoDetail';


function Page() {
    return (
        <PromoDetail />
    );
}

Page.Layout = { desktop: Layout, mobile: React.Fragment }

export default Page;