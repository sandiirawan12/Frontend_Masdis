import React from "react";
import Layout from "@/components/Layout";
import DetailPartner from "@/components/shop/DetailPartner";

function Page() {
    return (
        <DetailPartner />
    );
}

Page.Layout = {desktop:Layout,mobile:React.Fragment}

export default Page;