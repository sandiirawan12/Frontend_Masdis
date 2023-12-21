import React from 'react';
import Layout from '@/components/Layout'
import FlightProductPage from '@/components/page/FlightProductPage';
function Page() {
    return (
        <>
            <FlightProductPage />
        </>
    );
}

Page.Layout = { desktop: Layout, mobile: React.Fragment }

export default Page;