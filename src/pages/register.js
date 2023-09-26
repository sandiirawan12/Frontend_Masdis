import RegisterFormDesktop from "@/components/form/RegisterForm"
import RegisterFormMobile from '@/components-mobile/form/RegisterForm'
import { useMediaQuery } from "react-responsive"
import Head from 'next/head';

function register() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' });
    const RegisterComponent = isTabletOrMobile ? RegisterFormMobile : RegisterFormDesktop
    return (
        <>
            <Head>
                <title>Daftarkan Akun Anda Di Masterdiskon.com</title>
            </Head>
            <RegisterComponent />
        </>
    );
}

export default register
