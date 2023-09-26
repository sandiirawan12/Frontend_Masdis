import queryString from 'query-string';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import userApi from '@/api/user';
import { toast } from 'react-toastify';


function ResetPassword() {
    const router = useRouter()
    let query = queryString.parseUrl(router.asPath).query;
    const [newpassword, setNewpassword] = useState('')
    const [repeatnewpassword, setRepeatNewpassword] = useState('')

    useEffect(() => {
        if (router.isReady) {
            if (!query.e || !query.tk) {
                router.back()
            }
        }
    }, [router]);

    const handleResetPassword = () => {
        if (newpassword) {
            if (newpassword.toLocaleLowerCase() === repeatnewpassword.toLocaleLowerCase()) {
                userApi.resetPassword({ token: query.tk, email: query.e, newpassword }).then(res => {
                    if (res.success) {
                        toast.success('Password berhasil diubah');
                        router.push('/login')
                    } else {
                        router.back()
                    }
                })
            } else {
                toast.error('Password tidak sama')
            }
        } else {
            toast.error('Masukan password baru')
        }
    }



    return (
        <div className="container-fgpass">
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
            <div className="form-signin">
                <div className="card shadow">
                    <div className="card-body px-5">
                        <div className="mb-4">
                            <h1 className="h3 font-weight-bold">Reset Password</h1>
                            <small>Masukkan password baru</small>
                        </div>
                        <div className="form-group">
                            <input type="password" onChange={e => setNewpassword(e.target.value)} name="password" className="form-control form-control-lg" placeholder="Password Baru" required />
                        </div>
                        <div className="form-group">
                            <input type="password" onChange={e => setRepeatNewpassword(e.target.value)} name="password2" className="form-control form-control form-control-lg" placeholder="Ulangi Password Baru" required />
                        </div>
                        <button onClick={handleResetPassword} className="btn btn-lg btn-primary btn-block mb-2" type="submit">Reset</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ResetPassword;