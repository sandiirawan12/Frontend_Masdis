import AccountLayout from "@/components/account/AccountLayout";
import AccountQuickpickNew from "@/components/account/AccountQuickpickNew";
import withAuth from "lib/withAuth";
import React from "react";

function Page() {
    return (
      <AccountQuickpickNew/>
    );
}

Page.Layout = {desktop:AccountLayout,mobile:React.Fragment}

export default withAuth(Page,{auth:true,pathAfterFailure:'/login'});