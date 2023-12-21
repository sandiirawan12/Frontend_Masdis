import userApi from "@/api/user";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import queryString from 'query-string';
import { useEffect } from "react";

function Page() {
    const router = useRouter()
    let query = queryString.parseUrl(router.asPath).query;

    useEffect(() => {
        if (router.isReady) {
            if (!query.e || !query.tk) {
                router.back()
            } else {
                userApi.verifyRegister({email:query.e,token:query.tk}).then(res => {
                    console.log("🚀 ~ file: verify-email.js ~ line 17 ~ userApi.verifyRegister ~ res", res)
                    if (res.success) {
                        toast.success(res.message)
                    } else {
                        toast.error('verifikasi email gagal')
                    }
                    router.push('/login')
                })
            }
        }
    }, [router]);
    return (<></>
    );
}

export default Page;