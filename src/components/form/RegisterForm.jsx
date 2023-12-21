import styled from 'styled-components';
import { Icon } from '@iconify/react';
import KeyIcon from '@iconify/icons-fa-solid/key';
import EnvelopeIcon from '@iconify/icons-fa-solid/envelope';
import UserIcon from '@iconify/icons-fa-solid/user';
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
import Swal from 'sweetalert2';
import { result } from 'lodash';

const FormStyled = styled.form`
	/* width: 50%; */
	max-width: 650px;
	/* padding: 15px; */
	/* margin: auto; */
`

const RootStyled = styled.div`
	background: url('https://cdn.masterdiskon.com/masterdiskon/icon/fe/bg-login.jpg');
    background-size:cover;
    background-repeat:no-repeat;
    .content{
        min-height: 100vh;
        padding:50px;
        padding-right:100px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        .content-title{
            h6,h2{
                color:white;
            }

            h2{
                font-weight:bold;
                font-size:35px;
            }
            h6{
                font-size:20px;
                margin-top:-13px;
            }
        }
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
	background-color: #fff;
	display: inline-block;
	position: relative;
	z-index: 1;
	color: #ccc;
}

`

const IconStyled = styled.img`
    height: 20px;
`

function RegisterForm() {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const [captcha, setCaptcha] = useState('')
    const reCaptchaRef = useRef()

    const validationSchema = Yup.object().shape({
        first: Yup.string().min(3, 'Mohon gunakan setidaknya 3 karakter').max(24, 'Nama depan tidak boleh melebihi 24 karakter').required('Nama depan tidak boleh kosong'),
        last: Yup.string().min(3, 'Mohon gunakan setidaknya 3 karakter').max(24, 'Nama belakang tidak boleh melebihi 24 karakter').required('Nama belakang tidak boleh kosong'),
        username: Yup.string().strict(false).required('Nama pengguna tidak boleh kosong'),
        email: Yup.string().email('Alamat email tidak valid, harus ada @').required('Email tidak boleh kosong'),
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
            if (captcha) {
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
            } else {
                Swal.fire({
                    title: 'Periksa koneksi anda',
                    icon: 'info'
                }).then(result => {
                    if (result.isConfirmed) {
                        window.location.reload()
                    }
                })
            }
        }
    })

    const { errors, touched, values, handleSubmit, isSubmitting, handleChange, getFieldProps } = formik

    const handleChangeCaptcha = val => {
        setCaptcha(val)
    }

    const handleShowPassword = () => {
        setShowPassword(prevState => !prevState)
    }


    useEffect(() => {
        reCaptchaRef.current.execute();
    }, [reCaptchaRef.current, router, values])



    return (
        <FormikProvider value={formik}>
            <RootStyled>
                <div className="content">
                    <FormStyled onSubmit={handleSubmit} className="form-signin">
                        <div className="card shadow" style={{ borderRadius: '20px' }}>
                            <div className="card-body">
                                <div className="mb-3">
                                    <Link href='/'>
                                        <div className='position-relative float-right'>
                                            <img layout='fill' src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/masterdiskon_logo_big.png" className="img-logo" style={{ height: '50px', width: '100px', cursor:'pointer' }} />
                                        </div>
                                    </Link>
                                    <h1 className="h3 font-weight-bold">Daftar</h1>
                                    <small>Isikan data anda dengan lengkap</small>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-12">
                                        <div className="d-flex justify-content-start">
                                            <div className="form-group w-25">
                                                <label className='font-weight-bold text-secondary'>Title</label>
                                                <select name="title" {...getFieldProps('title')} className="form-control">
                                                    <option value="Mr">Mr</option>
                                                    <option value="Mrs">Mrs</option>
                                                    <option value="Ms">Ms</option>
                                                </select>
                                            </div>
                                            <div className="form-group w-50 mx-1">
                                                <label className='text-secondary font-weight-bold'>Nama Depan</label>
                                                <input type="text" {...getFieldProps('first')} name="first" className={classNames("form-control", {
                                                    "is-invalid": Boolean(touched.first && errors.first)
                                                })} />
                                                {Boolean(touched.first && errors.first) &&
                                                    <small className="invalid-feedback">
                                                        {touched.first && errors.first}
                                                    </small>
                                                }
                                            </div>
                                            <div className="form-group w-50">
                                                <label className='text-secondary font-weight-bold'>Nama Belakang</label>
                                                <input type="text" name="last" {...getFieldProps('last')} className={classNames("form-control", {
                                                    "is-invalid": Boolean(touched.last && errors.last)
                                                })} />
                                                {Boolean(touched.last && errors.last) &&
                                                    <small className="invalid-feedback">
                                                        {touched.last && errors.last}
                                                    </small>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className='text-secondary font-weight-bold'>Nama Pengguna</label>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text bg-primary text-white" id="basic-addon1">
                                                        <Icon icon={UserIcon} /> </span>
                                                </div>
                                                <input type="text" id='username' name="username" onChange={e => {
                                                    e.target.value = e.target.value.split(' ').join('')
                                                    handleChange(e)

                                                }} value={values.username} className={classNames("form-control", {
                                                    "is-invalid": Boolean(touched.username && errors.username)
                                                })} />
                                                {Boolean(touched.username && errors.username) &&
                                                    <small className="invalid-feedback">
                                                        {touched.username && errors.username}
                                                    </small>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className='text-secondary font-weight-bold'>Email</label>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text bg-primary text-white" id="basic-addon1">
                                                        <Icon icon={EnvelopeIcon} />
                                                    </span>
                                                </div>
                                                <input {...getFieldProps('email')} type="email" name="email" className={classNames("form-control", {
                                                    "is-invalid": Boolean(touched.email && errors.email)
                                                })} />
                                                {Boolean(touched.email && errors.email) &&
                                                    <small className="invalid-feedback">
                                                        {touched.email && errors.email}
                                                    </small>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className='text-secondary font-weight-bold'>Password</label>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">

                                                    <span className="input-group-text bg-primary text-white" id="basic-addon1">
                                                        <Icon icon={KeyIcon} />
                                                    </span>
                                                </div>
                                                <input {...getFieldProps('password')} type={!showPassword ? 'password' : 'text'} name="password" className={classNames("form-control", {
                                                    "is-invalid": Boolean(touched.password && errors.password)
                                                })} />
                                                {Boolean(touched.password && errors.password) &&
                                                    <small className="invalid-feedback">
                                                        {touched.password && errors.password}
                                                    </small>
                                                }
                                            </div>
                                            <div>
                                                <label htmlFor="showpass">
                                                    <input id='showpass' checked={showPassword} onClick={handleShowPassword} type="checkbox" /> <span className='ml-2'>Lihat Password</span></label>
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

                                <button className="btn btn-lg btn-primary btn-block mt-3" disabled={isSubmitting} type='submit'>Daftar</button>
                                <div>
                                    <SocialSignUp className="signM_social_head mt-3">
                                        <span className="text-muted">atau daftar dengan</span>
                                    </SocialSignUp>
                                    <div className="row">
                                        {/* <div className="col-6">
                                            <a href={`${process.env.NEXT_PUBLIC_API_URL}auth/login/fb`} className="btn btn-block img-icon-login" style={{ border: '2px solid #d3d3d3' }}><IconStyled src="https://img.icons8.com/cute-clipart/64/000000/facebook.png" /> Facebook</a>
                                        </div> */}
                                        <div className="col-12">
                                            <a href={`${process.env.NEXT_PUBLIC_API_URL}auth/login/google`} className="btn btn-block img-icon-login" style={{ border: '2px solid #d3d3d3' }}><Icon icon='flat-color-icons:google' className='mr-2 text-primary' style={{ fontSize: '18px' }} /> Google</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between align-items-center" style={{ borderTop: 'none' }}>
                                <small>Sudah memiliki akun? </small>
                                <Link href='/login'><a className="btn btn-sm btn-warning font-weight-bold" style={{ borderRadius: '10px' }}>Masuk</a></Link>
                            </div>
                        </div>
                    </FormStyled>
                </div>
            </RootStyled>
        </FormikProvider>
    );
}

export default RegisterForm;