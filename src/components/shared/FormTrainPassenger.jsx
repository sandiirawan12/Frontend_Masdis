import userApi from '@/api/user';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Collapse, Modal, ModalBody, ModalHeader } from 'reactstrap';
import Link from 'next/link';
import MDPagination from './MDPagination';
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useMediaQuery } from "react-responsive";
import SearchIcon from '@iconify/icons-fa-solid/search';
import { toast } from "react-toastify";

const TextStyled = styled.span`
	text-transform: capitalize;

    @media screen and (max-width:1224px){
        font-size:14px;
    }
`

function FormPassenger(props) {
    const { item, name, handleChange, trainRepricing, style, countries, handleAddFromQuickpick, onClose } = props
    const [openSsr, setOpenSsr] = useState(false)
    const [quickpick, setQuickpick] = useState([]);
    const { access_token } = useSelector(state => state.token);
    const [options, setOptions] = useState({ page: 1, limit: 5 });
    const [meta, setMeta] = useState()
    const [openQuickpick, setOpenQuickpick] = useState(false);
    const [search, setSearch] = useState('')
    const [type, setType] = useState('')

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const handleChangeInput = (e) => {
        const { name: field, value } = e.target
        handleChange(name, item, { field, value })
    }

    const handleChooseQuickpick = (data) => {
        handleAddFromQuickpick(name, item, data)
        handleOpenQuickpick()
    }

    const renderTitle = () => {
        switch (name) {
            case 'adult':
                return 'Dewasa'
            case 'child':
                return 'Anak-anak'
            case 'infant':
                return 'Bayi'
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        userApi.getListQuickpick(access_token, { type: type, search: search, ...options }).then(res => {
            if (res.success) {
                setMeta(res.meta)
                setQuickpick(res.data)
            } else {
                toast.error(res.message, {
                    position: 'top-right', toastId: 'checkout'
                })
            }
        })
    };

    const dataQuickpick = () => {
        fetchData();
    };

    useEffect(() => {
        userApi.getListQuickpick(access_token, { type: type, search: search, ...options }).then(res => {
            if (res.success) {
                setMeta(res.meta)
                setQuickpick(res.data)
            }
        })
    }, [name, options]);

    const handleOpenQuickpick = () => {
        setOpenQuickpick(prev => !prev)
    }

    const handlePageChange = (page) => {
        setOptions(state => ({ ...state, page }))
    }

    return (
        <>
            <li className="bg-white mb-3" style={{
                borderRadius: '15px', listStyle: 'none',
                boxShadow: '-1px 3px 11px -7px rgba(156,156,156,0.75)', ...style,
            }}>
                <div className='p-3 d-flex flex-row justify-content-between align-items-center' style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px', background: renderTitle() === 'Dewasa' ? '#0070ba' : '#6e83b7' }}>
                    <h5 className="text-white font-weight-bold">
                        {onClose &&
                            <i className="fas fa-times mr-2" onClick={onClose} />
                        }
                        {renderTitle()} - {item.id}</h5>
                    <div className="dropdown">
                        <button onClick={handleOpenQuickpick} className="btn btn-sm btn-light dropdown-toggle" type="button" id="dropdownMenuButton">
                            Quickpick
                        </button>
                    </div>
                </div>
                <div className="form-row p-3">
                    <div className="col-md-2">
                        {renderTitle() === 'Dewasa' &&
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Title</label>
                                <select value={item.title} onChange={handleChangeInput} className="form-control" name="title">
                                    <option value="Mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Ms">Ms</option>
                                </select>
                            </div>
                        }
                        {renderTitle() === 'Bayi' &&
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Title</label>
                                <select value={item.title} onChange={handleChangeInput} className="form-control" name="title">
                                    <option value="Mstr">Mstr</option>
                                    <option value="Miss">Miss</option>
                                </select>
                            </div>
                        }
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Nama Depan</label>
                            <input value={item.firstName} type="text" className="textonly form-control" name="firstName" onChange={handleChangeInput} />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Nama Belakang</label>
                            <input type="text" value={item.lastName} className="textonly form-control" onChange={handleChangeInput} name="lastName" required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Tipe Identitas</label>
                            <div className="input-group">
                                <select name="id_type" value={item.id_type} onChange={handleChangeInput} className="form-control" style={{ width: '35%' }}>
                                    <option value=''>Pilih</option>
                                    <option value='KTP'>KTP / NIK</option>
                                    <option value='PASSPORT'>Passport</option>
                                </select>
                                <input required onChange={handleChangeInput} name="no_type" value={item.no_type} type="text" className="textonly form-control" style={{ width: '65%' }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Tanggal Lahir</label>
                            <input value={item.dob} type="date" className="textonly form-control" name="dob" onChange={handleChangeInput} />
                        </div>
                    </div>
                </div>
                {renderTitle() === 'Dewasa' &&
                    <p className='text-info pl-3 pb-1'>Pastikan nama dan nomor identitas yang anda masukkan sudah benar</p>
                }
            </li>

            <Modal isOpen={openQuickpick} centered size='lg'>
                <ModalHeader toggle={handleOpenQuickpick}>
                    List Quickpick
                </ModalHeader>
                <ModalBody>
                    <div className="row mb-4">
                        <div className="col-6">
                            <input style={{ fontSize: '16px' }} onChange={(e) => setSearch(e.target.value)} type="text" className="form-control" id="caricode" placeholder="Cari No Pesanan" />
                        </div>
                        <div className="col-4">
                            <select style={{ fontSize: '16px' }} value={type} onChange={e => setType(e.target.value)} className="form-control" id="pilihstatus">
                                <option value=''>- Pilih Type -</option>
                                <option value="adult">Dewasa</option>
                                <option value="child">Anak</option>
                                <option value="infant">Bayi</option>
                            </select>
                        </div>
                        <div className="col-2">
                            {!isTabletOrMobile ?
                                <button onClick={dataQuickpick} className="btn btn-block btn-primary btn-md" type="button" id="button-addon2">
                                    <Icon icon={SearchIcon} /> <span className="ml-2">Search</span>
                                </button>
                                :
                                <button onClick={dataQuickpick} className="btn btn-block btn-primary btn-md" type="button" id="button-addon2">
                                    <Icon icon={SearchIcon} />
                                </button>
                            }
                        </div>
                    </div>
                    <div>
                        {quickpick?.length === 0 ?
                            <div>
                                <div className="card" style={{
                                    borderRadius: '15px',
                                }}>
                                    <div className="card-body">
                                        {!isTabletOrMobile ?
                                            <div className="row align-items-center mt-3">
                                                <div className="col-md-3">
                                                    <img src="https://cdn.masterdiskon.com/masterdiskon/img/data-not-found.png" style={{ width: '100%' }} alt="Gambar Masterdiskon" />
                                                </div>
                                                <div className="col-md-9">
                                                    <h5 className="font-weight-bold">Belum Ada Data</h5>
                                                    <p>Data quickpick Anda akan muncul di sini, Mari buat quickpick!</p>
                                                    <Link href="/">
                                                        <a className="btn btn-primary" style={{ cursor: "pointer" }}>Tambah Quickpick</a>
                                                    </Link>
                                                </div>
                                            </div>
                                            :
                                            <div>
                                                <div className="d-flex align-items-center mt-3">
                                                    <div className="mr-3">
                                                        <img src="https://cdn.masterdiskon.com/masterdiskon/img/data-not-found.png" style={{ width: '100%' }} alt="Gambar Masterdiskon" />
                                                    </div>
                                                    <div>
                                                        <h6 className="font-weight-bold">Belum Ada Data</h6>
                                                        <small>Data pesanan Anda akan muncul di sini, Mari buat pesanan via homepage!</small>
                                                        <br />
                                                        <Link href="/">
                                                            <a className="btn btn-sm btn-primary mt-3" style={{ cursor: "pointer" }}>Homepage</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            :
                            <>
                                {quickpick?.map((item) => (
                                    <span className="qp-list" key={item}>
                                        <div className="card mb-3" style={{ borderRadius: '15px' }}>
                                            <div className="card-body py-3 d-flex justify-content-between">
                                                <TextStyled className="card-title mb-0 mt-1">
                                                    <Icon icon="solar:user-check-broken" className='mr-3 text-primary' style={{ fontSize: '24px' }} />
                                                    {item.firstname} {item.lastname} - {item.identificationNumber}
                                                </TextStyled>
                                                <div>
                                                    <Link href={`/user/quickpick/edit/${item.id}`}>
                                                        <a className="mx-3">
                                                            Edit
                                                        </a>
                                                    </Link>

                                                    <button type="button" className="btn btn-primary" onClick={() => { handleChooseQuickpick(item) }}>Pilih</button>
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                                ))}
                                <Link href='/user/quickpick'>
                                    <button className="btn btn-block btn-primary font-weight-bold mt-3" type="button">Tambah Quickpick</button>
                                </Link>
                                {meta &&
                                    <div className="mt-4 d-flex justify-content-end w-100">
                                        <MDPagination onPageChange={handlePageChange} currentPage={meta.page} pageSize={meta.limit} totalCount={meta.total} className="pagination-bar" />
                                    </div>
                                }
                            </>
                        }
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
}

FormPassenger.propTypes = {
    item: PropTypes.object,
    name: PropTypes.string,
    conditions: PropTypes.object,
    handleChange: PropTypes.func
}

export default FormPassenger;