import classNames from 'classnames';
import { FormikProvider, useFormik } from 'formik';
import Link from 'next/link';

import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components'
import { Icon } from '@iconify/react'
import ArrowIcon from '@iconify/icons-fa-solid/arrow-left'
import EyeSlashIcon from '@iconify/icons-fa-solid/eye-slash'

import EyeIcon from '@iconify/icons-fa-solid/eye'
import * as Yup from 'yup';
import userApi from '@/api/user';

import { changeToken } from '@/store/token/tokenActions';
import { login } from '@/store/auth/authActions';
import { changeUser } from '@/store/user/userActions';

import { Alert } from 'reactstrap';
import { changeRedirectUrl } from '@/store/redirectUrl/redirectUrlActions';
import HeaderBack from '../header/HeaderBack';



const TextLine = styled.div`
	position: relative;
	height: 16px;
	margin-bottom: 20px;
	text-align: center;

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
&::before,
&::after{
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
`
const RootStyled = styled.form`
    box-sizing:border-box;
    .content{
	/* min-height: 100vh; */
        padding:30px 25px;
        /* padding-left:70px; */
        flex-direction:column;
        display:flex;
        /* justify-content:center; */
    }
`

const InputStyled = styled.input`
   	border: 0;
	box-shadow: none !important;
    padding:0;
    margin-top:-11px;
    background:transparent;
    &:focus{
        background:transparent;
    }

`

const IconStyled = styled.img`
height: 20px;
vertical-align:middle;
`;

function LoginForm() {
    const router = useRouter()
    const dispatch = useDispatch();
    const [error, setError] = useState({
        status: false,
        message: ''
    })

    const redirectUrl = useSelector(state => state.redirectUrl)

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Alamat email tidak valid').required('Email tidak boleh kosong'),
        password: Yup.string().min(6, 'Mohon gunakan setidaknya 6 karakter').required('Password tidak boleh kosong')
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember: true
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            const { email, password } = values
            userApi.getPrivateToken(email, password).then(res => {
                if (res.access_token) {
                    dispatch(changeToken(res.access_token))
                    userApi.getProfile(res.access_token).then(res => {
                        if (res.success) {
                            dispatch(changeUser(res.data))
                            dispatch(login())
                        }
                        actions.setSubmitting(false)
                        router.push(redirectUrl ? redirectUrl : '/user/profile')
                        dispatch(changeRedirectUrl(''))
                    })
                } else {
                    setError({ status: true, message: 'Email / Password salah' })
                    actions.setSubmitting(false)
                }
            })
        }
    })

    const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik



    return (
        <>
            <HeaderBack title='Login' onBack={() => router.push('/')} />

            <FormikProvider value={formik}>
                <RootStyled onSubmit={handleSubmit}>
                    <div className="content">
                        <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/masterdiskon_logo_big.png" alt="" style={{
                            width: '100px'
                        }} />
                        <h3 style={{ width: '60%' }} className='font-weight-bold mt-1'>Welcome To Master Diskon</h3>
                        <p>Kami menyediakan penawaran paket perjalanan dan pendukungnya dengan harga yang kompetitif</p>
                        <Alert isOpen={error.status} color='danger' toggle={() => setError({ ...error, status: false })}>
                            {error.message}
                        </Alert>
                        <div className="form-group">
                            <div style={{
                                borderBottom: `1px solid ${Boolean(touched.email && errors.email) ? '#dc3545' : 'black'}`
                            }}>
                                <label className='font-weight-bold'>Email</label>
                                <InputStyled type='email' name="email" {...getFieldProps('email')} className={classNames("form-control", {
                                    "is-invalid": Boolean(touched.email && errors.email)
                                })} placeholder='e.g., example@gmail.com' />
                            </div>
                            {Boolean(touched.email && errors.email) &&
                                <small className="invalid-feedback" style={{ display: 'block' }}>
                                    {touched.email && errors.email}
                                </small>
                            }
                        </div>
                        <div className="form-group">
                            <div style={{
                                borderBottom: `1px solid ${Boolean(touched.password && errors.password) ? '#dc3545' : 'black'}`
                            }}>
                                <label className='font-weight-bold'>Password</label>
                                <InputStyled type="password" name="password" {...getFieldProps('password')} className={classNames("form-control", {
                                    "is-invalid": Boolean(touched.password && errors.password)
                                })} placeholder='e.g., *****' />
                            </div>
                            {Boolean(touched.password && errors.password) &&
                                <small className="invalid-feedback" style={{ display: 'block' }}>
                                    {touched.password && errors.password}
                                </small>
                            }
                        </div>

                        <Link href=''><a style={{ fontSize: '14px' }} className='text-dark'>Lupa kata sandi?</a></Link>
                        <button type="submit" className="btn btn-primary btn-md mt-2 btn-block">Masuk</button>
                        <TextLine className="mt-3">
                            <span className="text-muted">Masuk atau login dengan</span>
                        </TextLine>
                        <div className="row">
                            {/* <div className="col-6">
                                <a href={`${process.env.NEXT_PUBLIC_API_URL}auth/login/fb`} className="btn btn-block img-icon-login" style={{ border: '2px solid #d3d3d3' }}><IconStyled src="https://img.icons8.com/cute-clipart/64/000000/facebook.png" /> Facebook</a>
                            </div> */}
                            <div className="col-12">
                                <a href={`/login-sso`} className="btn btn-block img-icon-login" style={{ border: '2px solid #d3d3d3' }}><IconStyled src="https://img.icons8.com/doodle/512/email-sign.png" /> Eureka Sign</a>
                            </div>
                            <div className="col-12 mt-2">
                                <a href={`${process.env.NEXT_PUBLIC_API_URL}auth/login/google`} className="btn btn-block img-icon-login" style={{ border: '2px solid #d3d3d3' }}><IconStyled src="https://img.icons8.com/cute-clipart/64/000000/google-logo.png" /> Google</a>
                            </div>
                        </div>
                        <div className="mt-3 d-flex justify-content-between align-items-center" style={{ borderTop: 'medium none' }}><small>Belum punya akun? Daftar sekarang!</small><a className="btn btn-sm text-link" href="/register">Daftar</a></div>

                    </div>
                </RootStyled>
            </FormikProvider>
        </>
    );
}

export default LoginForm;