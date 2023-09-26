import userApi from '@/api/user';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Collapse, Modal, ModalBody, ModalHeader } from 'reactstrap';
import MDPagination from './MDPagination';
function FormPassenger(props) {
    const { item, name, handleChange, flightRepricing, style, countries, handleAddFromQuickpick, onClose } = props
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
                borderRadius: '20px', listStyle: 'none',
                boxShadow: '5px 5px 15px -5px rgba(0, 0, 0, .5)', ...style,
            }}>
                <div className='p-3 d-flex flex-row justify-content-between align-items-center' style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px', background: '#0070BA' }}>
                    <h5 className="text-white font-weight-bold">
                        {onClose &&
                            <i className="fas fa-times mr-2" onClick={onClose} />
                        }
                        {renderTitle()} {item.id}</h5>
                    <div className="dropdown">
                        <button onClick={handleOpenQuickpick} className="btn btn-sm btn-light dropdown-toggle" type="button" id="dropdownMenuButton">
                            Quickpick
                        </button>
                    </div>
                </div>
                <div className="form-row p-3">
                    <div className="col-md-2">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Title</label>
                            <select value={item.title} onChange={handleChangeInput} className="form-control" name="title">
                                <option value="Mr">Mr.</option>
                                <option value="Mrs">Mrs.</option>
                                <option value="Ms">Ms.</option>
                            </select>
                        </div>
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
                    {flightRepricing.conditions.dobReq &&
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Tanggal Lahir</label>
                                <input type="date" value={item.dob} className="textonly form-control" onChange={handleChangeInput} name="dob" required />
                            </div>
                        </div>
                    }

                    {flightRepricing.conditions.identificationNumbers?.mandatory &&
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">No KTP / NIK</label>
                                <input type="text" value={item.identificationNumber} className="form-control" onChange={handleChangeInput} name="identificationNumber" />
                            </div>
                        </div>
                    }
                    {
                        flightRepricing.conditions.passport.mandatory && <>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>No Paspor</label>
                                    <input type="text" onChange={handleChangeInput} value={item?.num} className="form-control form-control" name="num" required />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Tgl Terbit Paspor</label>
                                    <input type="date" className="form-control" value={item?.doi} name="doi" onChange={handleChangeInput} required />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Tgl Kadaluarsa Paspor</label>
                                    <input type="date" onChange={handleChangeInput} value={item?.doe} className="form-control" name="doe" required />
                                </div>
                            </div>
                        </>
                    }
                    <div className="col-md-4" >
                        <div className="form-group">
                            <label>Negara</label>
                            <select name="nat" value={item.nat} onChange={handleChangeInput} className="form-control">
                                {countries?.map(item => (
                                    <option value={item.id}>{item.country_name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {((flightRepricing.extra.meal.length > 0 || flightRepricing.extra.baggage.length > 0) && name !== 'infant') &&
                        <div className="col-md-12 add_bag_mean">
                            <button className="mr-md-2 btn btn-warning font-weight-bold btn-sm float-right" type="button" onClick={() => setOpenSsr(prev => !prev)}> Tambah Bagasi dan makanan</button>
                        </div>
                    }
                    <div className="col-md-12">
                        <Collapse isOpen={openSsr}>
                            <hr />
                            <div className="row">
                                {flightRepricing.extra.baggage.map(item => (
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Tambah bagasi penerbangan {item.name}</label>
                                            <select className="form-control" name="ssr" onChange={handleChangeInput}><option value={JSON.stringify({ key: item.key, ssrType: 'baggage' })}>Tidak tambah bagasi</option>
                                                {item.data.map(d => (
                                                    <option value={JSON.stringify({ key: item.key, ssrType: 'baggage', code: d.code })}>{d.desc} - {d.amount == 0 ? 'Gratis' : `Rp${d.amount.toLocaleString()}`}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="row">
                                {flightRepricing.extra.meal.map(item => (
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Tambah Makanan {item.name}</label>
                                            <select className="form-control" onChange={handleChangeInput} name="ssr"><option value={JSON.stringify({ key: item.key, ssrType: 'meal' })}>Tidak tambah makanan</option>
                                                {item.data.map(d => (
                                                    <option value={JSON.stringify({ key: item.key, ssrType: 'meal', code: d.code })}>{d.desc} - Rp{d.amount.toLocaleString()}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Collapse>
                    </div>
                </div>
            </li>

            <Modal isOpen={openQuickpick} centered size='lg'>
                <ModalHeader toggle={handleOpenQuickpick}>
                    List Quickpick
                </ModalHeader>
                <ModalBody>
                    <ul className="list-group">
                        {quickpick.map(qp => (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <h6>
                                    <strong>
                                        {qp.title} {qp.firstname} {qp.lastname}, ID: {qp.identificationNumber}, Tgl Lahir: {qp.tglLahir}
                                    </strong>
                                </h6>
                                <button type="button" className="btn btn-primary" onClick={() => { handleChooseQuickpick(qp) }}>Pilih</button>
                            </li>
                        ))}
                    </ul>
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