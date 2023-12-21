import React from 'react'
import Layout from "@/components/Layout";
import DetailHotelDesktop from "@/components/shop/DetailHotel";
import DetailHotelMobile from '@/components-mobile/shop/DetailHotel'
import { useMediaQuery } from "react-responsive";

function Page() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' });
    const DetailHotel = isTabletOrMobile ? DetailHotelMobile : DetailHotelDesktop
    return (
        <DetailHotel />
    );
}

Page.Layout = { desktop: Layout, mobile: React.Fragment }

export default Page;