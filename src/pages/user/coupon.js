import AccountCoupon from "@/components/account/AccountCoupon";
import AccountLayout from "@/components/account/AccountLayout";
import withAuth from "lib/withAuth";
import Head from "next/head";
import React from 'react'
function Page() {
  return (
    <>
      <Head>
        <title>
          Coupon . masterdiskon.com
        </title>
      </Head>
      <AccountCoupon />
    </>
  );
}

Page.Layout = { desktop: AccountLayout, mobile: React.Fragment }

export default withAuth(Page, { auth: true, pathAfterFailure: '/login' });