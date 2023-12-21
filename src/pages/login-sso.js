import LoginFormDesktop from "@/components/form/LoginFormSSO"
import LoginFormMobile from "@/components-mobile/form/LoginFormSSO"
import withAuth from "lib/withAuth"
import { useMediaQuery } from "react-responsive"

function Page() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return isTabletOrMobile ? <LoginFormMobile /> : <LoginFormDesktop />
}

export default withAuth(Page, { auth: false, pathAfterFailure: '/user/profile' })
