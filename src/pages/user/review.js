import AccountLayout from "@/components/account/AccountLayout";
import AccountReview from "@/components/account/AccountReview";
import withAuth from "lib/withAuth";
import Head from "next/head";
import React from "react";

function Page() {

    return (
        <>
            <Head>
                <title>Masterdiskon - Review Saya</title>
            </Head>
            <AccountReview />
        </>

    );
}

Page.Layout = {desktop:AccountLayout,mobile:React.Fragment}

export default withAuth(Page, { auth: true, pathAfterFailure: '/login' });