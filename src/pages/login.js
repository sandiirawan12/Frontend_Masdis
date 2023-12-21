import LoginFormDesktop from "@/components/form/LoginForm"
import LoginFormMobile from "@/components-mobile/form/LoginForm"
import withAuth from "lib/withAuth"
import { useMediaQuery } from "react-responsive"
import Head from 'next/head';

function Page() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' });
    const LoginComponent = isTabletOrMobile ? LoginFormMobile : LoginFormDesktop
    return (
        <>
            <Head>
                <title>Masterdiskon.com - Cari tiket pesawat dan Hotel Promo dan Diskon Spesial 2023</title>
                <meta
                    name="description"
                    content="Masterdiskon.com - Cari tiket pesawat dan Hotel Promo dan Diskon Spesial 2023"
                />
            </Head>
            <LoginComponent />
        </>
    );
}

export default withAuth(Page, { auth: false, pathAfterFailure: '/user/profile' })
