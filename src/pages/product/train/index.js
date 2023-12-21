import React from 'react';
import Layout from '@/components/Layout'
import TrainProductPage from '@/components/page/TrainProductPage';
function Page() {
    return (
        <>
            <TrainProductPage />
        </>
    );
}

Page.Layout = { desktop: Layout, mobile: React.Fragment }

export default Page;