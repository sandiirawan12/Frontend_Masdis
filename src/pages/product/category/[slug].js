import Layout from "@/components/Layout";
import CategoryProductPage from "@/components/page/CategoryProductPage";
import React from "react";

function Page() {
    return (
        <CategoryProductPage />
    );
}

Page.Layout = { desktop: Layout, mobile: React.Fragment }

export default Page;