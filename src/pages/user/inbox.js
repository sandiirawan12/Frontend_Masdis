import AccountInbox from "@/components/account/AccountInbox";
import AccountLayout from "@/components/account/AccountLayout";
import MobileLayout from "@/components-mobile/Layout";
import withAuth from "lib/withAuth";
import Head from "next/head";

function Page() {
    return (
        <>
            <Head>
                <title>Masterdiskon - Inbox Saya</title>
            </Head>
            <AccountInbox />
        </>
    );
}

Page.Layout = { desktop: AccountLayout, mobile: MobileLayout }

export default withAuth(Page, { auth: true, pathAfterFailure: '/login' });