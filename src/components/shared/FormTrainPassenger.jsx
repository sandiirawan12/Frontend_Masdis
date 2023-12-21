import userApi from '@/api/user';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Collapse, Modal, ModalBody, ModalHeader } from 'reactstrap';
import Link from 'next/link';
import MDPagination from './MDPagination';

function FormPassenger(props) {
    const { item, name, handleChange, trainRepricing, style, countries, handleAddFromQuickpick, onClose } = props
    const [openSsr, setOpenSsr] = useState(false)
    const [quickpick, setQuickpick] = useState([]);
    const { access_token } = useSelector(state => state.token);
    const [options, setOptions] = useState({ page: 1, limit: 5 });
    const [meta, setMeta] = useState()
    const [openQuickpick, setOpenQuickpick] = useState(false);

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
        userApi.getListQuickpick(access_token, { type: name, ...options }).then(res => {
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
                    <ul className="list-group">
                        {quickpick.map(qp => (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <div>
                                        <strong>
                                            Title :
                                        </strong>
                                        <span className='ml-3' style={{ textTransform: 'uppercase' }}>{qp.title}</span>
                                    </div>
                                    <div>
                                        <strong>
                                            Name Lengkap :
                                        </strong>
                                        <span className='ml-3' style={{ textTransform: 'capitalize' }}>{qp.firstname} {qp.lastname}</span>
                                    </div>
                                    <div>
                                        <strong>
                                            No Telp :
                                        </strong>
                                        <span className='ml-3'>{qp.phone}</span>
                                    </div>
                                    <div>
                                        <strong>
                                            No KTP :
                                        </strong>
                                        <span className='ml-3'>{qp.identificationNumber}</span>
                                    </div>
                                    <div>
                                        <strong>
                                            No Passport :
                                        </strong>
                                        <span className='ml-3'>{qp.passportNumber}</span>
                                    </div>
                                    <div>
                                        <strong>
                                            Tanggal Lahir :
                                        </strong>
                                        <span className='ml-3'>{qp.dob}</span>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-primary" onClick={() => { handleChooseQuickpick(qp) }}>Pilih</button>
                            </li>
                        ))}
                    </ul>
                    <Link href='/user/quickpick'>
                        <button className="btn btn-block btn-primary font-weight-bold mt-3" type="button">Tambah Quickpick</button>
                    </Link>
                    {meta &&
                        <div className="mt-4 d-flex justify-content-end w-100">
                            <MDPagination onPageChange={handlePageChange} currentPage={meta.page} pageSize={meta.limit} totalCount={meta.total} className="pagination-bar" />
                        </div>
                    }
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