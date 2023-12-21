import { Icon } from "@iconify/react";
import { useState } from "react";
import { useSelector } from "react-redux";


function AccountPoin() {
    const [open, setOpen] = useState(false);
    const user = useSelector(state => state.user);

    return (
        <>
            {user.role == 'user' ?
                <>
                    <h4 className="text-primary font-weight-bold">
                        Poin Saya
                    </h4>
                    <small>Berikut data point yang dapat anda tukarkan menjadi voucher atau potongan harga</small>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-md-3 p-3 bg-primary" style={{ borderRadius: '15px 0px 0px 15px' }}>
                                <span className="font-weight-bold text-white">Total Point</span><br />
                                <span style={{ fontSize: '26px' }} className="text-white"><Icon icon="tabler:coin-monero-filled" className="mr-3" /> 0</span>
                                <br /><br /><br />
                                <small className="font-weight-bold text-white" style={{ cursor: 'pointer' }}>Info Lengkap</small>
                            </div>
                            <div className="col-md-9 p-3 bg-white" style={{ borderRadius: '0px 15px 15px 0px' }}>
                                <span className="font-weight-bold float-right text-primary" style={{cursor: 'pointer'}}>Rincian Point</span><br /><br /><br />
                                <div className="row">
                                    <div className="col-md-4" style={{ borderRight: '1px solid #63bbe7'}}>
                                        <span className="font-weight-bold text-primary" style={{ cursor: 'pointer' }}>Extra Points <Icon icon="ic:baseline-chevron-right" className="ml-2"/></span><br />
                                        <small className="font-weight-bold">0</small>
                                    </div>
                                    <div className="col-md-4" style={{ borderRight: '1px solid #63bbe7' }}>
                                        <span className="font-weight-bold text-primary" style={{ cursor: 'pointer' }}>Basic Points <Icon icon="ic:baseline-chevron-right" className="ml-2" /></span><br />
                                        <small className="font-weight-bold">0</small>
                                    </div>
                                    <div className="col-md-4">
                                        <span className="font-weight-bold text-primary" style={{ cursor: 'pointer' }}>Priority Points <Icon icon="ic:baseline-chevron-right" className="ml-2" /></span><br />
                                        <small className="font-weight-bold">0</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="font-weight-bold mt-4">
                        Yuk, temukan banyak keuntungan Points di sini
                    </p>
                </>
                :
                <>
                    <h4 className="text-primary font-weight-bold">
                        Poin Perusahaan
                    </h4>
                    <small>Berikut data point yang dapat anda tukarkan menjadi voucher atau potongan harga</small>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-md-3 p-3 bg-primary" style={{ borderRadius: '15px 0px 0px 15px' }}>
                                <span className="font-weight-bold text-white">Total Point</span><br />
                                <span style={{ fontSize: '26px' }} className="text-white"><Icon icon="tabler:coin-monero-filled" className="mr-3" /> 0</span>
                                <br /><br /><br />
                                <small className="font-weight-bold text-white" style={{ cursor: 'pointer' }}>Info Lengkap</small>
                            </div>
                            <div className="col-md-9 p-3 bg-white" style={{ borderRadius: '0px 15px 15px 0px' }}>
                                <span className="font-weight-bold float-right text-primary" style={{ cursor: 'pointer' }}>Rincian Point</span><br /><br /><br />
                                <div className="row">
                                    <div className="col-md-4" style={{ borderRight: '1px solid #63bbe7' }}>
                                        <span className="font-weight-bold text-primary" style={{ cursor: 'pointer' }}>Extra Points <Icon icon="ic:baseline-chevron-right" className="ml-2" /></span><br />
                                        <small className="font-weight-bold">0</small>
                                    </div>
                                    <div className="col-md-4" style={{ borderRight: '1px solid #63bbe7' }}>
                                        <span className="font-weight-bold text-primary" style={{ cursor: 'pointer' }}>Basic Points <Icon icon="ic:baseline-chevron-right" className="ml-2" /></span><br />
                                        <small className="font-weight-bold">0</small>
                                    </div>
                                    <div className="col-md-4">
                                        <span className="font-weight-bold text-primary" style={{ cursor: 'pointer' }}>Priority Points <Icon icon="ic:baseline-chevron-right" className="ml-2" /></span><br />
                                        <small className="font-weight-bold">0</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="font-weight-bold mt-4">
                        Yuk, temukan banyak keuntungan Points di sini
                    </p>
                </>
            }
        </>
    );
}

export default AccountPoin;