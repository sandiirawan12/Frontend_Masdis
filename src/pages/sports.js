import { Fragment } from 'react';
import Layout from "@/components/Layout";
import SportsPage from "@/components/page/SportsPage";

function Page() {
    return <SportsPage />
}

Page.Layout = { desktop: Layout, mobile: Fragment }

export default Page;