import DesktopLayout from "@/components/account/AccountLayout";
import AccountPoin from "@/components/account/AccountPoin";
import AccountProfileMobile from "@/components-mobile/account/AccountProfile";
import withAuth from "lib/withAuth";
import MobileLayout from '@/components-mobile/Layout'
import Head from "next/head";
import { useMediaQuery } from "react-responsive";

function Page() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <>
      <Head>
        <title>
          Masterdiskon - Poin Saya
        </title>
      </Head>
      {isTabletOrMobile ? <AccountProfileMobile />: <AccountPoin /> }
     
    </>
  );
}


Page.Layout = { desktop: DesktopLayout, mobile: MobileLayout }

export default withAuth(Page,{auth:true,pathAfterFailure:'/login'});
// export default Page;