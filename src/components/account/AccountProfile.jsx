import { Icon } from "@iconify/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import AccountProfileForm from "./AccountProfileForm";


function AccountProfile() {
    const [open, setOpen] = useState(false);
    const user = useSelector(state => state.user);

    const handleChange = (e) => {
        const { value, name } = e.target
    }

    return (
        <>
            {user.role == 'user' ?
                <>
                    <h4 className="text-primary font-weight-bold">
                        Data Pribadi
                    </h4>
                    <div className="card my-4" style={{ borderRadius: '15px' }}>
                        <div className="card-body">
                            <AccountProfileForm user={user} />
                        </div>
                    </div>
                    <div className="card my-3" style={{ borderRadius: '15px' }}>
                        <div className="card-body">
                            wdwad
                        </div>
                    </div>
                </>
                :
                <>
                    <div>
                        <h4 className="text-primary font-weight-bold">
                            Data Perusahaan
                        </h4>
                        <div className="card my-3" style={{ borderRadius: '15px' }}>
                            <div className="card-body">
                                <p className="mb-0 font-weight-bold text-primary" style={{ fontSize: '20px' }}><span>{user.company.name?.replaceAll('null', '')}</span></p>
                                <div className="row mt-4">
                                    <div className="col-md-4">
                                        <span className="mt-3"><b>Email :</b> <span className="ml-2">{user.company.email?.replaceAll('null', '')}</span></span>
                                    </div>
                                    <div className="col-md-4">
                                        <span className="mt-3"><b>No Telp :</b> <span className="ml-2">+{user.company.phone?.replaceAll('null', '')}</span></span>
                                    </div>
                                    <div className="col-md-4">
                                        <span className="mt-3"><b>Saldo :</b> <span className="text-primary font-weight-bold ml-2">Rp {user.company.saldo.toLocaleString().replaceAll(',', '.')}</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div>
                        <h4 className="text-primary font-weight-bold">
                            Data PIC
                        </h4>
                        <div className="card my-3" style={{ borderRadius: '15px' }}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <span className="mt-3"><b>Nama :</b> <br /> <span>{user.pic.name?.replaceAll('null', '')}</span></span>
                                    </div>
                                    <div className="col-md-3">
                                        <span className="mt-3"><b>Position :</b> <br /> <span>{user.pic.position?.replaceAll('null', '')}</span></span>
                                    </div>
                                    <div className="col-md-3">
                                        <span className="mt-3"><b>No Telp :</b> <br /> <span>{user.pic.phone?.replaceAll('null', '')}</span></span>
                                    </div>
                                    <div className="col-md-3">
                                        <span className="mt-3"><b>Email :</b> <br /> <span>{user.pic.email?.replaceAll('null', '')}</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
}

export default AccountProfile;