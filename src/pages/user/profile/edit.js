import HeaderBack from "@/components-mobile/header/HeaderBack";
import AccountProfileForm from "@/components/account/AccountProfileForm";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useMediaQuery } from "react-responsive";

function Page() {
    const router = useRouter();
    const user = useSelector(state => state.user);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });


    useEffect(() => {
        if (!isTabletOrMobile) {
            router.push('/user/profile')
        }

    }, [isTabletOrMobile])

    if (isTabletOrMobile) {
        return (<>
            <HeaderBack title='Masterdiskon - Edit Profile' onBack={() => router.back()} />
            <div className="container pb-4 pt-2">
                <AccountProfileForm user={user} />
            </div>
        </>)
    }

    return ''


}
export default Page;