import React from "react";
import Layout from "@/components/Layout";
import HotelProductPage from "@/components/page/HotelProductPage";

function Page() {
    return (
        <HotelProductPage />
    );
}

Page.Layout = { desktop: Layout, mobile: React.Fragment }

export default Page;