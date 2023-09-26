import React from "react";
import HotelCheckoutDesktop from "@/components/page/HotelCheckout";
import HotelCheckoutMobile from "@/components-mobile/page/HotelCheckout";

import Layout from "@/components/Layout";
import withAuth from "lib/withAuth";
import { useMediaQuery } from "react-responsive";

function Page() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' });
    const HotelCheckout = isTabletOrMobile ? HotelCheckoutMobile : HotelCheckoutDesktop
    return (
        <HotelCheckout />
    );
}

Page.Layout = { desktop: Layout, mobile: React.Fragment }

export default withAuth(Page, { auth: true, pathAfterFailure: '/login' });