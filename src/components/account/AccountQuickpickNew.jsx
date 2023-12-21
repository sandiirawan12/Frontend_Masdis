import HeaderBack from "@/components-mobile/header/HeaderBack";
import QuickpickForm from "../form/QuickpickForm";
import { useRouter } from 'next/router';
import { useMediaQuery } from "react-responsive";

function AccountQuickpickNew() {
    const router = useRouter();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <>
            {isTabletOrMobile &&
                <HeaderBack title='Add Quickpick' onBack={() => router.back()} />
            }
            <QuickpickForm />
        </>
    );
}

export default AccountQuickpickNew;