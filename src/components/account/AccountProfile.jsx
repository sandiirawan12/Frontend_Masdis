import { Icon } from "@iconify/react";
import PaintBrushIcon from '@iconify/icons-fa-solid/paint-brush'
import UserIcon from '@iconify/icons-fa-solid/user'
import PhoneIcon from '@iconify/icons-fa-solid/phone'
import EnvelopeIcon from '@iconify/icons-fa-solid/envelope'
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import AccountProfileForm from "./AccountProfileForm";
import moment from "moment";


function AccountProfile() {
    const [open, setOpen] = useState(false);
    const user = useSelector(state => state.user);

    const handleChange = (e) => {
        const { value, name } = e.target
    }

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <>
            {user.role == 'user' ?
                <>
                    <h3 className="text-primary font-weight-bold">
                        Profil
                        <button type="button" className="btn btn-sm btn-warning ml-1" onClick={handleOpen}>
                            <Icon icon={PaintBrushIcon} /> Edit Profil</button>
                    </h3>
                    <div className="card mb-3" style={{ borderRadius: '15px' }}>
                        <div className="card-body bg-primary text-white border-bottom" style={{
                            borderTopLeftRadius: '15px',
                            borderTopRightRadius: '15px'
                        }}>
                            <h6 className="mb-0"><Icon icon={UserIcon} className='mr-1' /> Akun</h6>
                        </div>
                        <div className="card-body">
                            <p className=" mb-0"><b>Nama:</b> <span>{user.name?.replaceAll('null', '')}</span></p>
                            <p className=" mb-0"><b>Tanggal lahir: </b> <span>{moment(user.birthdate).format('DD MMM YYYY').includes('Invalid') ? '' : moment(user.birthdate).format('DD MMM YYYY')}</span></p>
                            <p className=" mb-0"><b>Sejak: </b> <span>{user.since}</span></p><hr />
                            <p className=" mb-0"><b>MasdisPoint: </b> <span>{user.point} Point <small><i>(Point dapat digunakan untuk pemesanan di Masterdiskon.)</i></small>  </span></p>
                        </div>
                    </div>
                    <div className="card mb-3" style={{
                        borderRadius: '15px',
                    }}>
                        <div className="card-body bg-primary text-white border-bottom" style={{
                            borderTopLeftRadius: '15px',
                            borderTopRightRadius: '15px'
                        }}>
                            <h6 className="mb-0"><Icon icon={PhoneIcon} className='mr-1' />Phone</h6>
                            <small>Nomor ponsel untuk menerima pemberitahuan terkait akun..</small>
                        </div>
                        <div className="card-body">
                            <b>Phone: </b> <span className="dPhone">{user.phone}</span>
                        </div>
                    </div>
                    <div className="card mb-3" style={{ borderRadius: '15px' }}>
                        <div className="card-body border-bottom bg-primary text-white" style={{
                            borderTopLeftRadius: '15px',
                            borderTopRightRadius: '15px'
                        }}>
                            <h6 className="mb-0"><Icon icon={EnvelopeIcon} className='mr-1' /> Alamat Email</h6>
                            <small>Alamat email untuk menerima pemberitahuan terkait akun..</small>
                        </div>
                        <div className="card-body">
                            <b>Email: </b> <span className="dEmail">{user.email}</span>
                        </div>
                    </div>

                    <Modal toggle={handleOpen} isOpen={open} size="xl">
                        <ModalHeader toggle={handleOpen}>
                            <h5 className="font-weight-bold text-primary">
                                Sunting Profil
                            </h5>
                        </ModalHeader>
                        <ModalBody>
                            <AccountProfileForm user={user} handleOpen={handleOpen} />
                        </ModalBody>
                    </Modal>
                </>
                :
                <>
                    <h3 className="text-primary font-weight-bold">
                        Profil Corporate
                    </h3>
                    <div className="card mb-3" style={{ borderRadius: '15px' }}>
                        <div className="card-body bg-primary text-white border-bottom" style={{
                            borderTopLeftRadius: '15px',
                            borderTopRightRadius: '15px'
                        }}>
                            <h6 className="mb-0"><Icon icon={UserIcon} className='mr-1' /> Akun Corporate</h6>
                        </div>
                        <div className="card-body">
                            <p className=" mb-0"><b>Company:</b> <span>{user.company.name?.replaceAll('null', '')}</span></p>
                            <p className=" mb-0"><b>Industry:</b> <span>{user.company.industry?.replaceAll('null', '')}</span></p>
                            <p className=" mb-0"><b>Email:</b> <span>{user.company.email?.replaceAll('null', '')}</span></p>
                            <p className=" mb-0"><b>Phone:</b> <span>{user.company.phone?.replaceAll('null', '')}</span></p>
                            {/* <p className=" mb-0"><b>Plafon:</b> <span>Rp {user.company.plafon.toLocaleString().replaceAll(',', '.')}</span></p> */}
                            <p className=" mb-0 "><b>Saldo:</b> <span className="text-primary font-weight-bold">Rp {user.company.saldo.toLocaleString().replaceAll(',', '.')}</span></p>
                        </div>
                    </div>
                    <div className="card mb-3" style={{
                        borderRadius: '15px',
                    }}>
                        <div className="card-body bg-primary text-white border-bottom" style={{
                            borderTopLeftRadius: '15px',
                            borderTopRightRadius: '15px'
                        }}>
                            <h6 className="mb-0"><Icon icon={PhoneIcon} className='mr-1' />User Corporate</h6>
                            <small>Nomor ponsel untuk menerima pemberitahuan terkait akun..</small>
                        </div>
                        <div className="card-body">
                            <p className=" mb-0"><b>User:</b> <span>{user.pic.name?.replaceAll('null', '')}</span></p>
                            <p className=" mb-0"><b>Position:</b> <span>{user.pic.position?.replaceAll('null', '')}</span></p>
                            <p className=" mb-0"><b>Phone:</b> <span>{user.pic.phone?.replaceAll('null', '')}</span></p>
                            <p className=" mb-0"><b>Email:</b> <span>{user.pic.email?.replaceAll('null', '')}</span></p>
                        </div>
                    </div>
                </>
            }
        </>
    );
}

export default AccountProfile;