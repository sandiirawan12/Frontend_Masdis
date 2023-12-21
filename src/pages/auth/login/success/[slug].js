import userApi from "@/api/user";
import { login } from "@/store/auth/authActions";
import { changeRedirectUrl } from "@/store/redirectUrl/redirectUrlActions";
import { changeToken } from "@/store/token/tokenActions";
import { changeUser } from "@/store/user/userActions";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Page() {
    const router = useRouter()
    const dispatch = useDispatch()
    const { slug } = router.query;
    const redirectUrl = useSelector(state => state.redirectUrl)

    useEffect(() => {
        if (router.isReady) {
            if (slug) {
                userApi.getProfile(slug).then(res => {
                    if (res.success) {
                        dispatch(changeToken(slug))
                        dispatch(changeUser(res.data))
                        dispatch(login())
                        router.push(redirectUrl ? redirectUrl : '/user/profile')
                    } else {
                        router.push('/')
                    }
                    dispatch(changeRedirectUrl(''))
                })
            } else {
                router.push('/')
            }
        }
    }, [router])

    return <></>
}

export default Page;