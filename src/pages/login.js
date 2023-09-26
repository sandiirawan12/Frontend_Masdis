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
                <title>Login Akun Masterdiskon.com</title>
            </Head>
            <LoginComponent />
        </>
    );
}

export default withAuth(Page, { auth: false, pathAfterFailure: '/user/profile' })
