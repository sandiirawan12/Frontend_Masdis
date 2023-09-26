import Head from "next/head";
import AccountLayout from "@/components/account/AccountLayout";
import MobileLayout from "@/components-mobile/Layout";
import AccountPurchase from "@/components/account/AccountPurchase";
import withAuth from "lib/withAuth";

function Page() {
    return (
        <>
            <Head>
                <title>
                    Purchase . masterdiskon.com
                </title>
            </Head>
            <AccountPurchase />
        </>
    );
}

Page.Layout = { desktop: AccountLayout, mobile: MobileLayout }
// Page.Layout = MobileLayout

export default withAuth(Page, { auth: true, pathAfterFailure: '/login' });