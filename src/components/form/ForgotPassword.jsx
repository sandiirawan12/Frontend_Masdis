import Link from "next/link";
import userApi from '@/api/user';
import { useState } from "react";
import { Alert } from "reactstrap";

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState({ type: '', note: '', isRender: false })

    const handleForgotPassword = () => {
        if (email) {
            userApi.forgotPassword(email).then(res => {
                if (res.success) {
                    setMessage({ type: 'success', note: 'Silahkan cek email untuk reset password', isRender: true })
                } else {
                    setMessage({
                        type: 'danger', note: 'Email tidak ditemukan', isRender: true
                    })
                }
            })
        } else {
            setMessage({ type: 'danger', note: 'Isi alamat email', isRender: true })
        }
    }


    return (
        <>
            <style global jsx>{`
  .container-fgpass {
    background:url('https://cdn.masterdiskon.com/masterdiskon/assets/front/img/banner/login-bg.jpg') no-repeat center bottom;
    background-size:cover;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 40px;
        min-height:100vh;
        padding-bottom: 40px;
        background-color: #f5f5f5;
        overflow:hidden !important;

  }
  .form-signin {
	width: 100%;
	max-width: 470px;
	padding: 15px;
	margin: auto;
}
`}</style>
            <div className="container-fgpass">
                <div className="form-signin" >
                    <Alert color={message.type} isOpen={message.isRender} toggle={() => setMessage({ isRender: false })}>
                        <strong>{message.note}</strong>
                    </Alert>
                    <div className="card shadow">
                        <div className="card-body px-5">
                            <div className="mb-4">
                                <h1 className="h3 font-weight-bold">Lupa Kata Sandi</h1>
                                <small>Masukkan email yang terdaftar</small>
                            </div>
                            <div className="form-group">
                                <input type="text" onChange={e => setEmail(e.target.value)} name="email" className="form-control form-control-lg" placeholder='Email' />
                            </div>
                            <button className="btn btn-lg btn-primary btn-block mb-2" type="button" onClick={handleForgotPassword}>Reset</button>
                        </div>
                        <div className="card-footer px-5 d-flex justify-content-between align-items-center" style={{ borderTop: 'none' }}>
                            <small>Belum punya akun?</small>
                            <Link href="/register">
                                <a className="btn btn-sm btn-outline-dark">Daftar Sekarang</a>
                            </Link>
                            <Link href="/login">
                                <a className="btn btn-sm btn-outline-dark">Login</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default ForgotPassword;