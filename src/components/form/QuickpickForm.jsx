import userApi from '@/api/user';
import classNames from 'classnames';
import { FormikProvider, useFormik } from 'formik';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive';
function QuickpickForm(props) {
    const { quickpick, from, id } = props
    const [countries, setCountries] = useState([])
    const { access_token } = useSelector(state => state.token);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    const validationSchema = Yup.object().shape({
        type: Yup.string().required('Tidak boleh kosong'),
        title: Yup.string().required('Tidak boleh kosong'),
        firstname: Yup.string().required('Nama Depan tidak boleh kosong'),
        lastname: Yup.string().required('Nama Keluarga tidak boleh kosong'),
        email: Yup.string().required('Email tidak boleh kosong').email('Alamat email tidak valid'),
        phone: Yup.string().required('Nomor telepon tidak boleh kosong'),
        nationality_id: Yup.string().required('Kebangsaan tidak boleh kosong'),
        birthdate: Yup.string().required('Tanggal lahir tidak boleh kosong'),
        identity_card_number: Yup.number().typeError('Nomor kartu identitas tidak valid'),
        passport_number: Yup.number().typeError('Nomor kartu identitas tidak valid'),
    })

    const formik = useFormik({
        initialValues: {
            type: quickpick?.type ?? 'ADT',
            title: quickpick?.title ?? 'Mr',
            firstname: quickpick?.firstname ?? '',
            lastname: quickpick?.lastname ?? '',
            email: quickpick?.email ?? '',
            phone: quickpick?.phone ?? '',
            phone_code: quickpick?.phone_code ?? '62',
            nationality: quickpick?.nationality ?? '',
            nationality_id: quickpick?.nationality_id ?? 'ID',
            nationality_phone_code: quickpick?.nationality_phone_code ?? '',
            birthdate: quickpick?.birthdate ?? '',
            passport_number: quickpick?.passport_number ?? '',
            passport_expiry_date: quickpick?.passport_expiry_date ?? '',
            passport_country: quickpick?.passport_country ?? '',
            passport_country_id: quickpick?.passport_country_id ?? '',
            identity_card_number: quickpick?.identity_card_number ?? '',
            identity_country: quickpick?.identity_country ?? '',
            identity_date_issue: quickpick?.identity_date_issue ?? '',
            identity_date_expiry: quickpick?.identity_date_expiry ?? '',
        },
        validationSchema: validationSchema,
        enableReinitialize: true,
        onSubmit: (values, actions) => {
            let req = {
                type: values.type,
                guest: {
                    "title": values.title,
                    "firstname": values.firstname,
                    "lastname": values.lastname,
                    "email": values.email,
                    "phone": values.phone,
                    "phone_code": values.nationality_phone_code,
                    "nationality_id": values.nationality_id,
                    "birthdate": values.birthdate
                },
                "identity_card": {
                    "card_number": values.identity_card_number || '',
                    "country_id": values.identity_country || '',
                    "date_issue": values.identity_date_issue || '',
                    "date_expiry": values.identity_date_expiry || ''
                }, "passport": {
                    "number": values.passport_number || '',
                    "expiry_date": values.passport_expiry_date || '',
                    "country_id": values.passport_country_id || ''
                }
            }

            if (from === 'edit') {
                userApi.updateQuickpick(access_token, req, id).then(res => {
                    if (res.success) {
                        toast.success('Quickpik berhasil diubah')
                        Router.push('/user/quickpick')
                    } else {
                        toast.error('Quickpik gagal diubah')
                    }
                    actions.setSubmitting(false)
                })
            } else {
                userApi.addQuickpick(access_token, req).then(res => {
                    if (res.success) {
                        toast.success('Quickpik berhasil ditambahkan')
                        Router.push('/user/quickpick')
                    } else {
                        toast.error('Quickpik gagal ditambahkan')
                    }
                    actions.setSubmitting(false)
                })

            }

        }
    })


    useEffect(() => {
        userApi.getCountries().then(res => {
            if (res.success) {
                setCountries(res.data)
            }
        })
    }, []);


    const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik

    return (<RootStyled>
        {!isTabletOrMobile && <>
            <h3 className='title'>Masukkan data Penumpang</h3>
            <p className='sub-title'>Sisipkan dengan identitas yang benar</p>
        </>}
        <FormikProvider value={formik} >
            <form onSubmit={handleSubmit}>
                <div className="card">
                    <div className="card-body">
                        <h4 className='title'>Umum</h4>
                        <div className="row">
                            <div className="col-md-2">
                                <div className="form-group">
                                    <label htmlFor="type">Tipe*</label>
                                    <select {...getFieldProps('type')} name="type" className={classNames("form-control", {
                                        "is-invalid": Boolean(touched.type && errors.type)
                                    })}>
                                        <option key={'adt'} value="ADT">Dewasa</option>
                                        <option key={'chd'} value="CHD">Anak-anak</option>
                                        <option key={'inf'} value="INF">Bayi</option>
                                    </select>
                                    {Boolean(touched.type && errors.type) &&
                                        <small className="invalid-feedback">
                                            {touched.type && errors.type}
                                        </small>
                                    }
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-group">
                                    <label>Sebutan/Panggilan*</label>
                                    <div className="pilihan_title">
                                        <select
                                            {...getFieldProps('title')} name="title" id="title" className={classNames("form-control", {
                                                "is-invalid": Boolean(touched.title && errors.title)
                                            })}>
                                            <option key={'mr'} value="Mr">Mr.</option>
                                            <option key={'mrs'} value="Mrs">Mrs.</option>
                                            <option key={'ms'} value="Ms">Ms.</option>
                                        </select>
                                        {Boolean(touched.title && errors.title) &&
                                            <small className="invalid-feedback">
                                                {touched.title && errors.title}
                                            </small>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Nama depan*</label>
                                    <input {...getFieldProps('firstname')} type="text" name="firstname"
                                        className={classNames("form-control", {
                                            "is-invalid": Boolean(touched.firstname && errors.firstname)
                                        })}
                                        placeholder="Masukkan Nama depan" />
                                    {Boolean(touched.firstname && errors.firstname) &&
                                        <small className="invalid-feedback">
                                            {touched.firstname && errors.firstname}
                                        </small>
                                    }
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Nama keluarga*</label>
                                    <input {...getFieldProps('lastname')} type="text" name="lastname" className={classNames("form-control", {
                                        "is-invalid": Boolean(touched.lastname && errors.lastname)
                                    })} placeholder="Masukkan Nama keluarga" />
                                    {Boolean(touched.lastname && errors.lastname) &&
                                        <small className="invalid-feedback">
                                            {touched.lastname && errors.lastname}
                                        </small>
                                    }
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Surel*</label>
                                    <input {...getFieldProps('email')} type="text" name="email" className={classNames("form-control", {
                                        "is-invalid": Boolean(touched.email && errors.email)
                                    })} placeholder="Masukkan Surel" />
                                    {Boolean(touched.email && errors.email) &&
                                        <small className="invalid-feedback">
                                            {touched.email && errors.email}
                                        </small>
                                    }
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Nomor telepon*</label>
                                    <input type="text" name="phone"  {...getFieldProps('phone')}
                                        className={classNames("form-control", {
                                            "is-invalid": Boolean(touched.phone && errors.phone)
                                        })} placeholder="Masukkan Nomor telepon" />
                                    {Boolean(touched.phone && errors.phone) &&
                                        <small className="invalid-feedback">
                                            {touched.phone && errors.phone}
                                        </small>
                                    }
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Kebangsaan*</label>
                                    <select
                                        {...getFieldProps('nationality_id')} name="nationality_id" id="nationality_id" className={classNames("form-control", {
                                            "is-invalid": Boolean(touched.nationality_id && errors.nationality_id)
                                        })}>
                                        {countries.map(item => (
                                            <option value={item.id}>{item.country_name}</option>
                                        ))}
                                    </select>
                                    {Boolean(touched.nationality_id && errors.nationality_id) &&
                                        <small className="invalid-feedback">
                                            {touched.nationality_id && errors.nationality_id}
                                        </small>
                                    }
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Tanggal lahir*</label>
                                    <input  {...getFieldProps('birthdate')}
                                        className={classNames("form-control", {
                                            "is-invalid": Boolean(touched.birthdate && errors.birthdate)
                                        })} type="date" name="birthdate" placeholder="Masukkan Tanggal lahir" />
                                    {Boolean(touched.birthdate && errors.birthdate) &&
                                        <small className="invalid-feedback">
                                            {touched.birthdate && errors.birthdate}
                                        </small>
                                    }
                                </div>
                            </div>
                        </div>
                        <hr />
                        <h4 className='title'>Kartu identitas</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Nomor kartu identitas</label>
                                    <input type="text"  {...getFieldProps('identity_card_number')} className={classNames("form-control", {
                                        "is-invalid": Boolean(touched.identity_card_number && errors.identity_card_number)
                                    })} placeholder="Masukkan Nomor kartu identitas" />
                                    {Boolean(touched.identity_card_number && errors.identity_card_number) &&
                                        <small className="invalid-feedback">
                                            {touched.identity_card_number && errors.identity_card_number}
                                        </small>
                                    }
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Negara yang mengeluarkan </label>
                                    <select {...getFieldProps('identity_country')} className={classNames("form-control", {
                                        "is-invalid": Boolean(touched.identity_country && errors.identity_country)
                                    })}>
                                        <option value=''>Pilih negara</option>
                                        {countries.map(item => (
                                            <option value={item.id}>{item.country_name}</option>
                                        ))}
                                    </select>
                                    {Boolean(touched.identity_country && errors.identity_country) &&
                                        <small className="invalid-feedback">
                                            {touched.identity_country && errors.identity_country}
                                        </small>
                                    }
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Tanggal terbit/pengeluaran</label>
                                    <input type="date" {...getFieldProps('identity_date_issue')} className={classNames("form-control", {
                                        "is-invalid": Boolean(touched.identity_date_issue && errors.identity_date_issue)
                                    })} placeholder="Masukkan Tanggal terbit/pengeluaran" />
                                    {Boolean(touched.identity_date_issue && errors.identity_date_issue) &&
                                        <small className="invalid-feedback">
                                            {touched.identity_date_issue && errors.identity_date_issue}
                                        </small>
                                    }
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Tanggal Kadaluarsa</label>
                                    <input type="date" {...getFieldProps('identity_date_expiry')} className={classNames("form-control", {
                                        "is-invalid": Boolean(touched.identity_date_expiry && errors.identity_date_expiry)
                                    })} placeholder="Masukkan Tanggal Kadaluarsa" />
                                    {Boolean(touched.identity_date_expiry && errors.identity_date_expiry) &&
                                        <small className="invalid-feedback">
                                            {touched.identity_date_expiry && errors.identity_date_expiry}
                                        </small>
                                    }
                                </div>
                            </div>
                        </div>
                        <hr />
                        <h4 className='title'>Paspor</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Nomor paspor</label>
                                    <input type="text" {...getFieldProps('passport_number')} className={classNames("form-control", {
                                        "is-invalid": Boolean(touched.passport_number && errors.passport_number)
                                    })} placeholder="Masukkan Nomor paspor" />
                                    {Boolean(touched.passport_number && errors.passport_number) &&
                                        <small className="invalid-feedback">
                                            {touched.passport_number && errors.passport_number}
                                        </small>
                                    }
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Tanggal Kadaluwarsa Paspor</label>
                                    <input type="date" {...getFieldProps('passport_expiry_date')} className={classNames("form-control", {
                                        "is-invalid": Boolean(touched.passport_expiry_date && errors.passport_expiry_date)
                                    })} placeholder="Masukkan Tanggal Kadaluwarsa Paspor" />
                                    {Boolean(touched.passport_expiry_date && errors.passport_expiry_date) &&
                                        <small className="invalid-feedback">
                                            {touched.passport_expiry_date && errors.passport_expiry_date}
                                        </small>
                                    }
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Negara Penerbit Paspor</label>
                                    <select {...getFieldProps('passport_country_id')} className={classNames("form-control", {
                                        "is-invalid": Boolean(touched.passport_country_id && errors.passport_country_id)
                                    })}>
                                        <option value=''>Pilih negara</option>
                                        {countries.map(item => (
                                            <option value={item.id}>{item.country_name}</option>
                                        ))}
                                    </select>
                                    {Boolean(touched.passport_country_id && errors.passport_country_id) &&
                                        <small className="invalid-feedback">
                                            {touched.passport_country_id && errors.passport_country_id}
                                        </small>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="btn-submit">
                            <button disabled={isSubmitting} type='submit' className="btn btn-primary">Simpan</button>
                        </div>
                    </div>
                </div>
            </form>
        </FormikProvider>
    </RootStyled>
    );
}

const RootStyled = styled.div`
    
    @media screen and (max-width:1224px){
        padding:1.5rem;
        padding-bottom:3.3rem;
        .btn-submit{
            position:fixed;
            bottom:0;
            left:0;
            background:#F5F6FA;
            width:100%;
            padding:10px;
            button{
                font-size:12px;
                width:100%;
            }
        }
        label,input,select{
            font-size:12px;
        }
        label{
            margin-bottom:0;
        }
        .title{
            font-weight:bold;
            font-size:17px;
        }
        .sub-title{
            margin-top:-10px;
            font-size:14px;
        }
        .card{
            background:transparent !important;
            border:0;
            .card-body{
                padding:0;
            }
        }
    }

`

QuickpickForm.propTypes = {
    quickpick: PropTypes.object
}

export default QuickpickForm;