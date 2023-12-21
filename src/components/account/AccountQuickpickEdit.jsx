import userApi from "@/api/user";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import QuickpickForm from "../form/QuickpickForm";
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import HeaderBack from '@/components-mobile/header/HeaderBack'

function AccountQuickpickEdit() {
    const router = useRouter()
    const { access_token } = useSelector(state => state.token)
    const { id } = router.query;
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const [quickpick, setQuickpick] = useState({});
    useEffect(() => {
        userApi.getQuickpick(access_token, { id }).then(res => {
            if (res.success) {
                setQuickpick(res.data)
            }

        })

    }, [id])
    return (
        <>
            {isTabletOrMobile &&
                <HeaderBack title='Edit Quickpick' onBack={() => router.back()} />
            }
            <QuickpickForm quickpick={quickpick} from='edit' id={id} />
        </>
    );
}

export default AccountQuickpickEdit;