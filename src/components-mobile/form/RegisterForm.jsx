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
import HeaderBack from '../header/HeaderBack';

const RootStyled = styled.div`
    .content{
        display:flex;
        flex-direction:column;
        justify-content:center;
        .invalid-feedback{
            display:block;
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
	background-color: #F5F6FA;
	display: inline-block;
	position: relative;
	z-index: 1;
	color: #ccc;
}

`

const IconStyled = styled.img`
    height: 20px;
`

const FormGroupStyled = styled.div`
    border-bottom:1px solid black;
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
            <HeaderBack title='Registrasi' onBack={() => router.back()} />
            <FormikProvider value={formik}>
                <RootStyled>
                    <div className="content">
                        <form onSubmit={handleSubmit} className="form-signin">
                            <div className="p-3">
                                <div className="mb-3">
                                    <div className='position-relative float-right' style={{ height: '50px', width: '100px' }}>
                                        <Image layout='fill' src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/masterdiskon_logo_big.png" className="img-logo " />
                                    </div>
                                    <h4 className="font-weight-bold">Daftar</h4>
                                    <small>Isikan dengan lengkap</small>
                                </div>
                                <div className="form-row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <FormGroupStyled>
                                                <label className='font-weight-bold text-secondary'>Title</label>
                                                <select name="title" {...getFieldProps('title')} className="form-control">
                                                    <option value="Mr">Mr</option>
                                                    <option value="Mrs">Mrs</option>
                                                </select>
                                            </FormGroupStyled>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <FormGroupStyled>
                                                <label className='text-secondary font-weight-bold'>Nama Depan</label>
                                                <input type="text" {...getFieldProps('first')} name="first" className={classNames("form-control", {
                                                    "is-invalid": Boolean(touched.first && errors.first)
                                                })} />
                                            </FormGroupStyled>
                                            {Boolean(touched.first && errors.first) &&
                                                <small className="invalid-feedback" >
                                                    {touched.first && errors.first}
                                                </small>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <FormGroupStyled>
                                                <label className='text-secondary font-weight-bold'>Nama Belakang</label>
                                                <input type="text" name="last" {...getFieldProps('last')} className={classNames("form-control", {
                                                    "is-invalid": Boolean(touched.last && errors.last)
                                                })} />
                                            </FormGroupStyled>
                                            {Boolean(touched.last && errors.last) &&
                                                <small className="invalid-feedback">
                                                    {touched.last && errors.last}
                                                </small>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <FormGroupStyled>
                                                <label className='text-secondary font-weight-bold'>Nama Pengguna</label>
                                                <input type="text" id='username' name="username" onChange={e => {
                                                    e.target.value = e.target.value.split(' ').join('')
                                                    handleChange(e)

                                                }} value={values.username} className={classNames("form-control", {
                                                    "is-invalid": Boolean(touched.username && errors.username)
                                                })} />
                                            </FormGroupStyled>
                                            {/* <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1">
                                                        <Icon icon={UserIcon} /> </span>
                                                </div> */}

                                            {Boolean(touched.username && errors.username) &&
                                                <small className="invalid-feedback">
                                                    {touched.username && errors.username}
                                                </small>
                                            }
                                            {/* </div> */}
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <FormGroupStyled>
                                                <label className='text-secondary font-weight-bold'>Email</label>
                                                <input {...getFieldProps('email')} type="email" name="email" className={classNames("form-control", {
                                                    "is-invalid": Boolean(touched.email && errors.email)
                                                })} />
                                            </FormGroupStyled>
                                            {Boolean(touched.email && errors.email) &&
                                                <small className="invalid-feedback">
                                                    {touched.email && errors.email}
                                                </small>
                                            }
                                            {/* <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1">
                                                        <Icon icon={EnvelopeIcon} />
                                                    </span>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <FormGroupStyled>
                                                <label className='text-secondary font-weight-bold'>Kata Sandi</label>
                                                <input {...getFieldProps('password')} type={!showPassword ? 'password' : 'text'} name="password" className={classNames("form-control", {
                                                    "is-invalid": Boolean(touched.password && errors.password)
                                                })} />
                                            </FormGroupStyled>
                                            {Boolean(touched.password && errors.password) &&
                                                <small className="invalid-feedback">
                                                    {touched.password && errors.password}
                                                </small>
                                            }
                                            <div>
                                                <label className='mt-4' htmlFor="showpass" style={{ fontSize: '12px' }}>
                                                    <input id='showpass' checked={showPassword} onClick={handleShowPassword} type="checkbox" /> Lihat Password</label>
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
                                            <a href={`${process.env.NEXT_PUBLIC_API_URL}auth/login/google`} className="btn btn-block img-icon-login" style={{ border: '2px solid #d3d3d3' }}><IconStyled src="https://img.icons8.com/cute-clipart/64/000000/google-logo.png" /> Google</a>
                                        </div>
                                    </div>
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