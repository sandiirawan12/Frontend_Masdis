import shopApi from "@/api/shop";
import { BottomSheet, SheetContent } from "@biotic-ui/bottom-sheet";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function DrawerPayments(props) {
    const { access_token } = useSelector(state => state.token);
    const [paymentCategory, setPaymentCategory] = useState([]);
    const [activeTab, setActiveTab] = useState();
    const { flightRepricing, handleChangePaymentMethod, toggle, open } = props;


    useEffect(() => {
        shopApi.getPaymentCategory(access_token).then(res => {
            if (res.success) {
                setPaymentCategory(res.data)
            }
        })
    }, [flightRepricing])

    useEffect(() => {
        shopApi.getPaymentCategory(access_token).then(res => {
            if (res.success) {
                setPaymentCategory(res.data)
            }
        })
    }, [])

    const handleChangeTab = (item) => {
        setActiveTab(item?.id_payment_method_category)
    }


    return (
        <BottomSheet open={open} onClose={toggle}>
            <SheetContent style={{ padding: '20px' }}>
                {activeTab &&
                    <h6 className="mb-3" onClick={handleChangeTab}>
                        <i class="fas fa-arrow-left"></i> Kembali
                    </h6>
                }
                <ul class="list-group">
                    {activeTab ?
                        paymentCategory.find(item => item.id_payment_method_category === activeTab)?.payment_method?.map(item => (
                            <li onClick={() => handleChangePaymentMethod(item.id_payment_method)} style={{ cursor: 'pointer' }} className="list-group-item d-flex align-items-center border-right-0 border-left-0 border-top-0"> <div className="mr-3" style={{
                                height: '45px',
                                width: '45px',
                                position: 'relative',

                            }}>
                                <Image layout="fill" objectFit="contain" src={`https://cdn.masterdiskon.com/masterdiskon/icon/payment/${item.img_payment_method}`} className="icon-payment" />
                            </div> {item.name_payment_method}</li>
                        ))
                        :
                        paymentCategory.map(item => (
                            <li style={{ cursor: 'pointer' }} onClick={() => handleChangeTab(item)} className="list-group-item border-right-0 border-left-0 border-top-0">
                                {item.name_category}</li>
                        ))

                    }
                </ul>
            </SheetContent>
        </BottomSheet>
    );
}

export default DrawerPayments;