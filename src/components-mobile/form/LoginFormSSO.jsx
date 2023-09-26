import classNames from 'classnames';
import { FormikProvider, useFormik } from 'formik';
import Link from 'next/link';

import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components'
import { Icon } from '@iconify/react'
import EyeSlashIcon from '@iconify/icons-fa-solid/eye-slash'

import EyeIcon from '@iconify/icons-fa-solid/eye'
import * as Yup from 'yup';
import userApi from '@/api/user';

import { changeToken } from '@/store/token/tokenActions';
import { login } from '@/store/auth/authActions';
import { changeUser } from '@/store/user/userActions';

import { Alert } from 'reactstrap';
import { changeRedirectUrl } from '@/store/redirectUrl/redirectUrlActions';

function LoginFormSSO() {
    const router = useRouter()
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false)

    const redirectUrl = useSelector(state => state.redirectUrl)
    const [error, setError] = useState({
        status: false,
        message: ''
    })

    const handleShowPassword = () => {
        setShowPassword(prevState => !prevState)
    }

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
            userApi.getPrivateTokenCorp(email, password).then(res => {
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
                    setError({ status: true, message: res.message })
                    actions.setSubmitting(false)
                }
            })
        }
    })

    const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik


    return (
        <FormikProvider value={formik}>
            <RootStyled onSubmit={handleSubmit}>
                <div className='content'>
                    <FormStyled>
                        <div className="card shadow" style={{ borderRadius: '20px' }}>
                            <div className="card-body">
                                <div className="mb-4">
                                    <h1 className="h3 font-weight-bold">EUREKA! SSO</h1>
                                    <small>Isikan email dan kata sandi yang telah didaftarkan EUREKA GROUP</small>
                                </div>
                                <Alert isOpen={error.status} color='danger' toggle={() => setError({ ...error, status: false })}>
                                    {error.message}
                                </Alert>
                                <div className="form-group">
                                    <input type="email" name="email" {...getFieldProps('email')} className={classNames("form-control", {
                                        "is-invalid": Boolean(touched.email && errors.email)
                                    })} placeholder="Email" autoFocus />
                                    {Boolean(touched.email && errors.email) &&
                                        <small className="invalid-feedback">
                                            {touched.email && errors.email}
                                        </small>
                                    }
                                </div>
                                <div className="input-group">
                                    <input {...getFieldProps('password')} placeholder='Password' className={classNames("form-control", {
                                        "is-invalid": Boolean(touched.password && errors.password)
                                    })} type={showPassword ? "text" : 'password'} />
                                    <div className="input-group-append" onClick={handleShowPassword}>
                                        <span className='input-group-text'>
                                            <Icon icon={showPassword ? EyeIcon : EyeSlashIcon} />
                                        </span>
                                    </div>
                                    {Boolean(touched.password && errors.password) &&
                                        <small className="invalid-feedback">
                                            {touched.password && errors.password}
                                        </small>
                                    }
                                </div>

                                <div className="my-3">
                                    <Link href="/forgot-password">
                                        <a className="text-muted"><small>Lupa kata sandi?</small></a>
                                    </Link>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block mb-2" disabled={isSubmitting} type="submit">
                                    {isSubmitting ?
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        : 'Sign'
                                    }
                                </button>

                            </div>
                        </div>
                    </FormStyled>
                </div>
            </RootStyled>
        </FormikProvider>
    )
}


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
	background-color: #fff;
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
	background: #56CCF2;
    box-sizing:border-box;
	background: url('https://cdn.masterdiskon.com/masterdiskon/icon/fe/bg-login.jpg');
    background-size:cover;
    background-repeat:no-repeat;
    .content{
	min-height: 100vh;
        /* padding:40px; */
        /* padding-left:70px; */
        flex-direction:column;
        display:flex;
        justify-content:center;
        align-items:center;
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



const FormStyled = styled.div`
	width: 100%;
	max-width: 470px;
`

const IconStyled = styled.img`
height: 20px;
vertical-align:middle;
`;


export default LoginFormSSO