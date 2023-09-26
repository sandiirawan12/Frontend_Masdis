import React from "react";
import AccountLayout from "@/components/account/AccountLayout";
import AccountQuickpickEdit from "@/components/account/AccountQuickpickEdit";
import withAuth from "lib/withAuth";
import Head from "next/head";

function Page() {
    return (
        <>
            <Head>
                <title>Quickpick . masterdiskon.com</title>
            </Head>
            <AccountQuickpickEdit />
        </>
    );
}

Page.Layout = { desktop: AccountLayout, mobile: React.Fragment }

export default withAuth(Page, { auth: true, pathAfterFailure: '/login' });