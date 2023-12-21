import shopApi from "@/api/shop";
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import styled from "styled-components";

const RootNav = styled(Nav)`
         font-size:12px;
     @media (max-width: 1224px){
            .nav-item {
                width:100%;
                border:0;
                .nav-link{ 
                    text-align:left;
                    
                    &:first-child{
            border-top-left-radius:0 !important;
           }
           &:last-child{
            border-top-right-radius:0 !important;
           }
                }
                }
        }
    .nav-item{
        color:black;
        font-weight:bold;
        border-right:.5px solid #eaeaea;
      
        .nav-link{
            color:inherit;
            border:0 !important;
            border-radius:0;
            &.active{
                background-color:#0070BA;
                color:white;
            }
            &:hover{
                border:0 !important; 
            }
            &:first-child{
        border-top-left-radius:inherit;
        }
            &:last-child{
        border-top-right-radius:inherit;
        }
        }

       &:first-child{
        border-top-left-radius:20px !important;
       }
       &:last-child{
        border-top-right-radius:20px !important;
        
        border-right:none;
       }
    }
`

function TabPayment(props) {
    const { access_token } = useSelector(state => state.token)
    const [paymentCategory, setPaymentCategory] = useState([])
    const [activeTab, setActiveTab] = useState()
    const { flightRepricing, handleChangePaymentMethod, paymentMethodSelected } = props

    useEffect(() => {
        shopApi.getPaymentCategory(access_token).then(res => {
            if (res.success) {
                setPaymentCategory(res.data)
                handleChangeTab(res.data[0])
            }
        })
    }, [flightRepricing])

    useEffect(() => {
        shopApi.getPaymentCategory(access_token).then(res => {
            if (res.success) {
                setPaymentCategory(res.data)
                handleChangeTab(res.data[0])
            }
        })
    }, [])

    const handleChangeTab = (item) => {
        setActiveTab(item.id_payment_method_category)
    }

    return (
        <>
            <RootNav tabs>
                {paymentCategory.map(item => (
                    <NavItem style={{ cursor: 'pointer' }} onClick={() => {
                        handleChangeTab(item)
                        handleChangePaymentMethod(item.payment_method[0].id_payment_method)
                    }} className="flex-grow-1 text-center" key={item.id_payment_method_category}>
                        <NavLink className={classNames('', { 'active': activeTab === item.id_payment_method_category, })}>
                            {item.name_category}
                        </NavLink>
                    </NavItem>
                ))}
            </RootNav>
            <TabContent activeTab={activeTab}>
                {paymentCategory.map(item => (
                    <TabPane key={item.id_payment_method_category} tabId={item.id_payment_method_category}>
                        <div className="row mt-2">
                            {item.payment_method?.map(pm => (
                                <div className="col-md-6 px-4 mb-2" onClick={() => handleChangePaymentMethod(pm.id_payment_method)}>
                                    <label style={{ border: '1px solid #2121', background: paymentMethodSelected === pm.id_payment_method && 'rgba(145, 196, 255, 0.623)' }} className="mt-2 d-flex align-items-center rounded p-2 mb-0 pointer" htmlFor="credit_card">
                                        <div className="mr-3" style={{
                                            height: '60px',
                                            width: '60px',
                                            marginLeft: '.8rem',
                                            position: 'relative',

                                        }}>
                                            <Image layout="fill" objectFit="contain" src={`https://cdn.masterdiskon.com/masterdiskon/icon/payment/${pm.img_payment_method}`} className="icon-payment" />
                                        </div>
                                        {pm.name_payment_method}
                                    </label>

                                </div>
                            ))}
                        </div>
                    </TabPane>
                ))}
            </TabContent>
        </>
    );
}

export default TabPayment;