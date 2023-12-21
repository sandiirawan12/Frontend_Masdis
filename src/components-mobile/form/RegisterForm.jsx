import styled from 'styled-components';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Image from 'next/image';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { FormikProvider, useFormik } from 'formik';
import classNames from 'classnames'
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useEffect, useRef } from 'react';
import userApi from '@/api/user';
import { toast } from 'react-toastify';
import HeaderBack from '../header/HeaderBack';
import { Alert } from 'reactstrap';

const RootStyled = styled.div`
    .content{
        padding: 15px;
        flex-direction: column;
        display: flex;
        background: #fff;
    }
`

const SocialSignUp = styled.div`
	position: relative;
	height: 16px;
	margin-bottom: 20px;
	text-align: center;
    &::before,&::after{
	content: '';
	display: block;
	width: 100%;
	height: 1px;
	overflow: hidden;
	background-color: #e0e0e0;
	position: absolute;
	left: 0;
	top: 8px;
    }
     span {
	top: -5px;
	height: 16px;
	font-size: 14px;
	line-height: 16px;
	padding: 0 10px;
	background-color: #F5F6FA;
	display: inline-block;
	position: relative;
	z-index: 1;
	color: #ccc;
}
`

const FormGroupStyled = styled.div`
    label{
        font-size:12px;
    }
    .form-control,.is-invalid:focus{
        font-size:12px;
        margin-top:-10px;
        background:transparent;
        border:none !important;
        box-shadow:none;
        outlined:none;
        padding:0;
        /* &.is-invalid{
            border:none;
            &:focus{
                border-color:transparent;
                box-shadow:none;
            }
        } */
    }


`

function RegisterForm() {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const [captcha, setCaptcha] = useState('')
    const reCaptchaRef = useRef()
    const [error, setError] = useState({
        status: false,
        message: ''
    })

    const handleChangeCaptcha = val => {
        setCaptcha(val)
    }

    const handleShowPassword = () => {
        setShowPassword(prevState => !prevState)
    }

    const validationSchema = Yup.object().shape({
        first: Yup.string().min(3, 'Mohon gunakan setidaknya 3 karakter').max(24, 'Nama depan tidak boleh melebihi 24 karakter').required('Nama depan tidak boleh kosong'),
        last: Yup.string().min(3, 'Mohon gunakan setidaknya 3 karakter').max(24, 'Nama belakang tidak boleh melebihi 24 karakter').required('Nama belakang tidak boleh kosong'),
        username: Yup.string().strict(false).required('Nama pengguna tidak boleh kosong'),
        email: Yup.string().email('Alamat email tidak valid').required('Email tidak boleh kosong'),
        password: Yup.string().min(6, 'Mohon gunakan setidaknya 6 karakter').required('Password tidak boleh kosong'),
    })

    const formik = useFormik({
        initialValues: {
            title: 'Mr',
            first: '',
            last: '',
            username: ''.split(' ').join(''),
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            userApi.register({ ...values, captcha }).then(res => {
                if (res.succes) {
                    actions.setSubmitting(false)
                    router.push('/login')
                    toast.success('Pendaftaran berhasil, silahkan buka email anda untuk verifikasi')
                } else {
                    toast.error(res.message)
                    actions.setSubmitting(false)
                }
            })
        }
    })

    useEffect(() => {
        reCaptchaRef.current.execute();
    }, [reCaptchaRef, router])

    const { errors, touched, values, handleSubmit, isSubmitting, handleChange, getFieldProps } = formik

    return (
        <>
            <HeaderBack title='Daftar Akun' onBack={() => router.back()} />
            <FormikProvider value={formik}>
                <RootStyled>
                    <div className="content">
                        <form onSubmit={handleSubmit} className="form-signin">
                            <div className="p-3">
                                <center className="mb-3">
                                    <h4 className="font-weight-bold">Pendaftaran Akun</h4>
                                    <small>Daftarkan akun anda, agar mendapatkan promo menarik</small>
                                </center>
                                <Alert isOpen={error.status} color='danger' toggle={() => setError({ ...error, status: false })}>
                                    {error.message}
                                </Alert>
                               
                                <div className="form-row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <div style={{
                                                borderBottom: `1px solid ${Boolean(touched.title && errors.title) ? '#dc3545' : '#2182c3'}`
                                            }}>
                                                <FormGroupStyled>
                                                    <label className='font-weight-bold text-secondary'>Title</label>
                                                    <select name="title" {...getFieldProps('title')} className="form-control">
                                                        <option value="">- Pilih Title -</option>
                                                        <option value="Mr">Mr</option>
                                                        <option value="Mrs">Mrs</option>
                                                    </select>
                                                </FormGroupStyled>
                                            </div>
                                            {Boolean(touched.title && errors.title) &&
                                                <small className="invalid-feedback" style={{ display: 'block' }}>
                                                    {touched.title && errors.title}
                                                </small>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <div style={{
                                                borderBottom: `1px solid ${Boolean(touched.first && errors.first) ? '#dc3545' : '#2182c3'}`
                                            }}>
                                                <FormGroupStyled>
                                                    <label className='font-weight-bold text-secondary'>Nama Depan</label>
                                                    <input type="text" {...getFieldProps('first')} name="first" className={classNames("form-control", {
                                                        "is-invalid": Boolean(touched.first && errors.first)
                                                    })} />
                                                </FormGroupStyled>
                                            </div>
                                            {Boolean(touched.first && errors.first) &&
                                                <small className="invalid-feedback" style={{ display: 'block' }}>
                                                    {touched.first && errors.first}
                                                </small>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <div style={{
                                                borderBottom: `1px solid ${Boolean(touched.last && errors.last) ? '#dc3545' : '#2182c3'}`
                                            }}>
                                                <FormGroupStyled>
                                                    <label className='font-weight-bold text-secondary'>Nama Belakang</label>
                                                    <input type="text" {...getFieldProps('last')} name="last" className={classNames("form-control", {
                                                        "is-invalid": Boolean(touched.last && errors.last)
                                                    })} />
                                                </FormGroupStyled>
                                            </div>
                                            {Boolean(touched.last && errors.last) &&
                                                <small className="invalid-feedback" style={{ display: 'block' }}>
                                                    {touched.last && errors.last}
                                                </small>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <div style={{
                                                borderBottom: `1px solid ${Boolean(touched.username && errors.username) ? '#dc3545' : '#2182c3'}`
                                            }}>
                                                <FormGroupStyled>
                                                    <label className='font-weight-bold text-secondary'>Nama Pengguna</label>
                                                    <input type="text" id='username' name="username" onChange={e => {
                                                        e.target.value = e.target.value.split(' ').join('')
                                                        handleChange(e)

                                                    }} value={values.username} className={classNames("form-control", {
                                                        "is-invalid": Boolean(touched.username && errors.username)
                                                    })} />
                                                </FormGroupStyled>
                                            </div>
                                            {Boolean(touched.username && errors.username) &&
                                                <small className="invalid-feedback" style={{ display: 'block' }}>
                                                    {touched.username && errors.username}
                                                </small>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <div style={{
                                                borderBottom: `1px solid ${Boolean(touched.email && errors.email) ? '#dc3545' : '#2182c3'}`
                                            }}>
                                                <FormGroupStyled>
                                                    <label className='font-weight-bold text-secondary'>Email</label>
                                                    <input {...getFieldProps('email')} type="email" name="email" className={classNames("form-control", {
                                                        "is-invalid": Boolean(touched.email && errors.email)
                                                    })} />
                                                </FormGroupStyled>
                                            </div>
                                            {Boolean(touched.email && errors.email) &&
                                                <small className="invalid-feedback" style={{ display: 'block' }}>
                                                    {touched.email && errors.email}
                                                </small>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <div style={{
                                                borderBottom: `1px solid ${Boolean(touched.password && errors.password) ? '#dc3545' : '#2182c3'}`
                                            }}>
                                                <FormGroupStyled>
                                                    <label className='font-weight-bold text-secondary'>Password</label>
                                                    <input {...getFieldProps('password')} type={!showPassword ? 'password' : 'text'} name="password" className={classNames("form-control", {
                                                        "is-invalid": Boolean(touched.password && errors.password)
                                                    })} />
                                                </FormGroupStyled>
                                            </div>
                                            {Boolean(touched.password && errors.password) &&
                                                <small className="invalid-feedback" style={{ display: 'block' }}>
                                                    {touched.password && errors.password}
                                                </small>
                                            }
                                            <div>
                                                <label className='mt-3' htmlFor="showpass" style={{ fontSize: '12px' }}>
                                                    <input id='showpass' checked={showPassword} onClick={handleShowPassword} type="checkbox" className='mr-2' /> Lihat Password</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ReCAPTCHA
                                    ref={reCaptchaRef}
                                    size='invisible'
                                    sitekey={'6LfOBDQaAAAAAL3JAMHJTdcUi9Fesotqh0hRe-L0'}
                                    onChange={handleChangeCaptcha}
                                />

                                <button className="btn btn-md btn-primary btn-block" disabled={isSubmitting} type='submit'>Daftar</button>
                                <div>
                                    <SocialSignUp className="signM_social_head mt-3">
                                        <span className="text-muted">atau daftar dengan</span>
                                    </SocialSignUp>
                                    <div className="row">
                                        {/* <div className="col-6">
                                            <a href={`${process.env.NEXT_PUBLIC_API_URL}auth/login/fb`} className="btn btn-block img-icon-login" style={{ border: '2px solid #d3d3d3' }}><IconStyled src="https://img.icons8.com/cute-clipart/64/000000/facebook.png" /> Facebook</a>
                                        </div> */}
                                        <div className="col-12">
                                            <a href={`${process.env.NEXT_PUBLIC_API_URL}auth/login/google`} className="btn btn-block img-icon-login" style={{ border: '1px solid #d3d3d3' }}><Icon icon='flat-color-icons:google' className='mr-2 text-primary' style={{ fontSize: '18px' }} /> Google</a>
                                        </div>
                                    </div>
                                    <div className="mt-4 d-flex justify-content-between align-items-center" style={{ borderTop: 'medium none' }}><small>Sudah punya akun?</small><a className="btn btn-sm text-primary text-link" href="/login">Login Sekarang</a></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </RootStyled>
            </FormikProvider >
        </>
    );
}

export default RegisterForm;