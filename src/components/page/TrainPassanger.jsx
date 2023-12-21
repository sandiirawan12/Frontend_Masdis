import shopApi from "@/api/shop";
import { Icon } from "@iconify/react";
import ClockIcon from "@iconify/icons-fa-solid/clock";
import { useRouter } from "next/router";
import { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TabPayment from "../shared/TabPayment";
import Image from "next/image";
import FormTrainPassenger from "../shared/FormTrainPassenger";
import SignAlt from '@iconify/icons-fa-solid/sign-in-alt';
import TimesCircle from '@iconify/icons-fa-solid/times-circle';
import QuestionIcon from '@iconify/icons-fa-solid/question-circle';
import userApi from "@/api/user";
import ButtonCheckoutTrain from "../shared/ButtonCheckoutTrain";
import moment from "moment";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { toast } from "react-toastify";
import queryString from 'query-string';
import Swal from 'sweetalert2'
// import flight_passanger from "fake-data/flight-passanger";

import ReactGA from 'react-ga';
ReactGA.initialize('G-56R5954QCE');


const initialState = {
    key: '',
};

function parseQueryOptions(location) {
    const query = queryString.parse(location);

    let key = ''

    if (typeof query.key === "string") {
        key = query.key
    }
    return key;
}

function parseQuery(location) {
    return [parseQueryOptions(location)];
}

function buildQuery(options) {
    let key = ''
    if (options.key !== "") {
        key = options.key
    }
    return queryString.stringify(key, { encode: false });
}

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_TRAIN':
            return { ...state, key: action.payload }
        default:
            throw new Error();
    }
}

function init(state) {
    const [key] = parseQuery(window.location.search);

    return { ...state, key };
}

function TrainPassanger() {
    const [state] = useReducer(reducer, initialState, init);

    const router = useRouter();
    const { token, user } = useSelector(state => state)

    const [trainRepricing, setTrainRepricing] = useState();
    const [paymentMethodSelected, setPaymentMethodSelected] = useState(0);

    const [price, setPrice] = useState();
    const { access_token } = token
    const [countries, setCountries] = useState([])

    const [loading, setLoading] = useState(true)
    const [dataSchedule, setDataSchedule] = useState()
    const [passenger, setPassenger] = useState({ "adult": [], "child": [], "infant": [] });
    const [contact, setContact] = useState(user)

    const [contactAsPassenger, setContactAsPassenger] = useState(false)
    const [coupon, setCoupon] = useState([])
    const [point, setPoint] = useState(false)

    const [isOpenCoupon, setIsOpenCoupon] = useState(false)
    const [textCoupon, setTextCoupon] = useState('')
    const [ssr, setSsr] = useState([])

    // replace url
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
        if (router.isReady) {
            // const query = buildQuery(state.key);
            // const href = queryString.stringifyUrl({
            //     ...queryString.parseUrl(router.asPath),
            //     query: queryString.parse(query),
            // }, { encode: false });

            // router.replace(router.pathname, href, {
            //     shallow: true,
            // }).then(() => {
            //     // This is necessary for the "History API" to work.
            //     window.history.replaceState(
            //         {
            //             ...window.history.state,
            //             options: {
            //                 ...window.history.state.options,
            //                 shallow: false,
            //             },
            //         },
            //         '',
            //         href,
            //     );
            // });
        }
    }, [state.key, router.asPath]);

    useEffect(() => {
        const dataContact = contact
        // Panggil API dan set dataSchedule setelah menerima respons
        shopApi.getDataSchedule(router.query.id, dataContact.email).then(res => {
            if (res.status.code === 200 && res.data.status === false) {
                // Mengatur data ke dataSchedule
                setDataSchedule(res.data);
                const ps = { adult: getDataArray(res.data.adult), child: getDataArray(res.data.child), infant: getDataArray(res.data.infant) }
                setPassenger(ps)
                setLoading(false)
            } else {
                Swal.fire({
                    icon: 'info',
                    title: 'Jadwal kereta tidak tersedia',
                    allowOutsideClick: false
                }).then(result => {
                    if (result.isConfirmed) {
                        router.back()
                    }
                })
            }
        });
    }, []);

    const handleChangePaymentMethod = (id) => {
        setPaymentMethodSelected(id);
    }

    const handleSetAsPassenger = () => {
        if (!contactAsPassenger) {
            const newPassenger = [...passenger['adult']];
            newPassenger[0] = { ...newPassenger[0], firstName: contact.first, lastName: contact.last, title: contact.title, dob: contact.birthdate }
            setPassenger(prevState => ({ ...prevState, ['adult']: newPassenger }))
        } else {
            const newPassenger = [...passenger['adult']];
            newPassenger[0] = { id: newPassenger[0]?.id, firstName: '', lastName: '', title: '', dob: '' }
            setPassenger(prevState => ({ ...prevState, ['adult']: newPassenger }))
        }
        setContactAsPassenger(!contactAsPassenger)
    }

    const handleSeat = () => {
        const req = {
            "product": "train",
            "key": trainRepricing.key,
            price: { ...price, discount: price.discount.grandTotal },
            coupon,
            "paymentMethod": paymentMethodSelected,
            contact: { ...contact, firstName: contact.first, lastName: contact.last },
            "guest": passenger.adult.map(item => ({
                ...item,
                dob: item.dob === '-' ? '' : moment(item.dob).format('DD-MM-YYYY'),
                "passport": {
                    "nat": item.nat,
                    "num": item.num ?? '',
                    "doi": moment(item.doi).format('DD-MM-YYYY') ?? '',
                    "doe": moment(item.doe).format('DD-MM-YYYY') ?? ''
                }

            })).concat(passenger.child.map(item => ({
                ...item,
                dob: moment(item.dob).format('DD-MM-YYYY'),
                "passport": {
                    "nat": item.nat,
                    "num": item.num ?? '',
                    "doi": moment(item.doi).format('DD-MM-YYYY') ?? '',
                    "doe": moment(item.doe).format('DD-MM-YYYY') ?? ''
                }
            }))).concat(passenger.infant.map(item => ({
                ...item,
                dob: moment(item.dob).format('DD-MM-YYYY'),
                "passport": {
                    "nat": item.nat,
                    "num": item.num ?? '',
                    "doi": moment(item.doi).format('DD-MM-YYYY') ?? '',
                    "doe": moment(item.doe).format('DD-MM-YYYY') ?? ''
                }
            })))
        }

        shopApi.submitCheckout(access_token, req).then(res => {
            if (res.success) {
                router.push(`/user/purchase/detail/${res.data.id_order}`);
            } else {
                toast.error(res.message, {
                    position: 'top-right', toastId: 'checkout'
                })
            }
        })


    }

    const handleConfirm = () => {
        const req = {
            "id_schedule": router.query.id,
            "first_name": contact.first,
            "last_name": contact.last,
            "title": contact.title.toUpperCase(),
            "phone_code": contact.phoneCode,
            "phone_number": contact.phone,
            "email": contact.email,
            "origin": dataSchedule.origin,
            "destination": dataSchedule.destination,
            "departure_date": dataSchedule.departure_date,
            "return_date": dataSchedule.direction === 'OW' ? dataSchedule.departure_date : dataSchedule.return_date,
            "journey_type": dataSchedule.direction,
            "adult": dataSchedule.adult,
            "child": dataSchedule.child,
            "infant": dataSchedule.infant,
            "segment_code": dataSchedule.data_schedule.segment_code,
            "segment_code_return": dataSchedule.direction === 'OW' ? null : dataSchedule.data_schedule_return.segment_code,
            "passengers": passenger.adult.map(item => ({
                "fullname": `${item.firstName + ' ' + item.lastName}`,
                "title": item.title,
                "identity_number": item.no_type,
                "identity_type": item.id_type,
                "phone_number": item.phone,
                "birth_date": item.dob === '' ? '' : moment(item.dob).format('YYYY-MM-DD'),
                "pax_type": "ADT",
            })).concat(passenger.child.map(item => ({
                "fullname": `${item.firstName + ' ' + item.lastName}`,
                "title": item.title,
                "identity_number": item.no_type,
                "identity_type": item.id_type,
                "phone_number": 0,
                "birth_date": item.dob === '' ? '' : moment(item.dob).format('YYYY-MM-DD'),
                "pax_type": "CHD",
            }))).concat(passenger.infant.map(item => ({
                "fullname": `${item.firstName + ' ' + item.lastName}`,
                "title": item.title,
                "identity_number": item.no_type,
                "identity_type": item.id_type,
                "phone_number": item.phone,
                "birth_date": item.dob === '' ? '' : moment(item.dob).format('YYYY-MM-DD'),
                "pax_type": "INF",
            })))
        }

        shopApi.submitCheckoutTrain(req)
            .then((res) => {
                if (res.status.code === 200) {
                    router.push(`/user/purchase/detail/${res.data.id_order}`);
                } else {
                    res.errors.forEach(error => {
                        toast.error(error.message, {
                            position: 'top-right',
                            toastId: 'checkout'
                        });
                    });
                }
            })
    }

    const handleSubmitCoupon = (value) => {
        const arr = new Set([...coupon]);
        arr.add(value);
        setCoupon([...arr])
        handleOpenCoupon()
    }

    const handleRemoveCoupon = (value) => {
        if (value.type === 'umum') {
            setCoupon(coupon.filter(item => item !== value.code));
        } else {
            setCoupon(coupon.filter(item => item !== value.id.toString()));
        }
    }

    const handleOpenCoupon = () => {
        setIsOpenCoupon(prevState => !prevState)
    }

    const getDataArray = (count) => {
        let arr = [];
        let id = 1;
        for (let index = 0; index < count; index++) {
            arr[index] = { id: id++, title: 'Mr', nat: 'ID' }
        }
        return arr;
    }

    useEffect(() => {
        const req = {
            "product": "train",
            "key": trainRepricing?.key,
            "insurance": false,
            point,
            coupon,
            paymentMethod: paymentMethodSelected,
            "platform": "web",
            ssr
        }
        if (trainRepricing) {
            setLoading(true)
            shopApi.getCountPrice(access_token, req).then(res => {
                if (res.success) {
                    setPrice(res.data)
                    setLoading(false)
                } else {
                    if (res.message.includes('coupon')) {
                        setCoupon([...coupon].filter(item => item !== res.note))
                        toast.error(res.message, { position: 'top-right', toastId: 'coupon' })
                    }
                }
            })
        }
    }, [trainRepricing, paymentMethodSelected, point, coupon, ssr])

    const handleAddFromQuickpick = (name, target, { title, firstname, lastname, id_type, phone, identificationNumber, passportNumber, tglLahir }) => {
        const detailPassenger = { ...passenger[name].find(item => item.id === target.id), type: name }

        const indexOf = passenger[name].findIndex(item => item.id === target.id);
        const newPassenger = [...passenger[name]];
        newPassenger[indexOf] = { ...detailPassenger, title, firstName: firstname, lastName: lastname, id_type: identificationNumber ? 'KTP' : passportNumber ? 'PASSPORT' : '', phone: phone, no_type: identificationNumber, passportNumber: passportNumber, dob: tglLahir }
        setPassenger(prevState => ({ ...prevState, [name]: newPassenger }))

    }

    const handleInputChange = (name, target, data) => {
        const detailPassenger = { ...passenger[name].find(item => item.id === target.id), type: name }
        if (!detailPassenger.ssr) {
            detailPassenger.ssr = []
        }
        if (data.field === 'ssr') {
            let ssrObj = JSON.parse(data.value);

            ssrObj.id = target.id;

            if (Object.keys(ssrObj).length > 3) {
                // set ssr to passanger
                detailPassenger['ssr'] = [...detailPassenger.ssr?.filter(item => item.key !== JSON.parse(data.value).key || item.ssrType !== JSON.parse(data.value).ssrType), ssrObj];

                // set ssr to count
                setSsr([...new Set([...ssr.filter(item => item.id !== target.id || (item.key !== JSON.parse(data.value).key || item.ssrType !== JSON.parse(data.value).ssrType)), ...detailPassenger.ssr])])
            } else {
                // remove ssr to passanger
                let indexOf = detailPassenger.ssr.map(item => `${item.key},${item.ssrType}`).indexOf(`${ssrObj.key},${ssrObj.ssrType}`)
                detailPassenger.ssr.splice(indexOf, 1)

                // remove ssr to count
                let indexOfSsr = ssr.map(item => `${item.id},${item.key},${item.ssrType}`).indexOf(`${ssrObj.id},${ssrObj.key},${ssrObj.ssrType}`)
                ssr.splice(indexOfSsr, 1)
                setSsr([...new Set([...ssr, ...detailPassenger.ssr.reduce((a, c) => a.concat(c), [])])])
            }
        } else {
            detailPassenger[data.field] = data.value
        }


        const indexOf = passenger[name].findIndex(item => item.id === target.id);
        const newPassenger = [...passenger[name]];
        newPassenger[indexOf] = detailPassenger
        setPassenger(prevState => ({ ...prevState, [name]: newPassenger }))
    }

    useEffect(() => {
        setContact({ ...contact, phoneCode: 62 })
        let canceled = true;
        if (canceled) {
            userApi.getCountries().then(res => {
                if (res.success) {
                    setCountries(res.data)
                }

            })
        }

        return () => {
            canceled = false;
        }
    }, [])

    const handleChangeContact = (e) => {
        const { name, value } = e.target
        setContact({ ...contact, [name]: value })
    }

    // loading && !trainRepricing && !price
    if (loading && !trainRepricing && !price) {
        return <div style={{
            height: '50vh',
            marginBottom: '5rem'
        }} className="d-flex flex-column align-items-center justify-content-center">
            <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/pulse-spinner.svg" />
            <h4>Sedang menyiapkan data...</h4>
        </div>
    }
    return (
         <div>
            {dataSchedule ? (
                <section className="my-3">
                    <div className="container">
                        <h3 className="font-weight-bold mt-4 mb-3">Order Detail</h3>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card" style={{
                                    borderRadius: '20px',
                                    boxShadow: '-1px 3px 11px -7px rgba(156,156,156,0.75)',
                                }}>
                                    <div className="card-body">
                                        <div className="row">
                                            {dataSchedule.direction === 'OW' ?
                                                <>
                                                    <div className="col-md-12">
                                                        <div className="d-flex align-items-center">
                                                            <Icon icon='pepicons-print:train' className="text-info mr-3 mt-2" style={{ fontSize: '30px' }}></Icon>

                                                            <span className="font-weight-bold">{dataSchedule?.data_schedule?.stasiun_awal}</span>
                                                            <Icon icon='fluent:arrow-swap-28-filled' className="text-primary mx-3" style={{ fontSize: '20px' }}></Icon>
                                                            <span className="font-weight-bold">{dataSchedule?.data_schedule?.stasiun_akhir}</span>
                                                        </div>

                                                        <hr />

                                                        <div>
                                                            <p className="font-weight-bold">Departure <br />
                                                                <small>
                                                                    {dataSchedule?.tgl_schedule}
                                                                </small>
                                                            </p>
                                                        </div>

                                                        <div className="mt-3">
                                                            <p className="font-weight-bold">{dataSchedule?.data_schedule?.nama_kereta} ({dataSchedule?.data_schedule?.no_kereta}) <br />
                                                                <small>
                                                                    {dataSchedule?.data_schedule?.kelas_kereta} (Subclass {dataSchedule?.data_schedule?.tipe_kereta})
                                                                </small>
                                                            </p>
                                                        </div>

                                                        <TimeLineStyled className="mb-2">
                                                            <>
                                                                <li>
                                                                    <p className="mb-0"><b className="mr-2">{dataSchedule?.data_schedule?.waktu_keberangkatan}</b> <small>{dataSchedule?.data_schedule?.asal_kota}, {dataSchedule?.data_schedule?.stasiun_awal} Station</small></p>
                                                                    <p className="pt-3"><Icon icon='pepicons-print:rewind-time' className="mr-2 text-primary" />{dataSchedule?.data_schedule?.durasi_perjalanan}</p>
                                                                </li>
                                                                <li className>
                                                                    <p className="mb-0"><b className="mr-2">{dataSchedule?.data_schedule?.waktu_tiba}</b> <small>{dataSchedule?.data_schedule?.tujuan}, {dataSchedule?.data_schedule?.stasiun_akhir} Station</small></p>
                                                                </li>
                                                            </>
                                                        </TimeLineStyled>
                                                    </div>
                                                </>
                                                : ''
                                            }
                                            {dataSchedule.direction === 'RT' ?
                                                <>
                                                    <div className="col-md-6">
                                                        <div className="d-flex align-items-center">
                                                            <Icon icon='pepicons-print:train' className="text-info mr-3 mt-2" style={{ fontSize: '30px' }}></Icon>

                                                            <span className="font-weight-bold">{dataSchedule?.data_schedule?.stasiun_awal}</span>
                                                            <Icon icon='fluent:arrow-swap-28-filled' className="text-primary mx-3" style={{ fontSize: '20px' }}></Icon>
                                                            <span className="font-weight-bold">{dataSchedule?.data_schedule?.stasiun_akhir}</span>
                                                        </div>

                                                        <hr />

                                                        <div>
                                                            <p className="font-weight-bold">Departure <br />
                                                                <small>
                                                                    {dataSchedule?.tgl_schedule}
                                                                </small>
                                                            </p>
                                                        </div>

                                                        <div className="mt-3">
                                                            <p className="font-weight-bold">{dataSchedule?.data_schedule?.nama_kereta} ({dataSchedule?.data_schedule?.no_kereta}) <br />
                                                                <small>
                                                                    {dataSchedule?.data_schedule?.kelas_kereta} (Subclass {dataSchedule?.data_schedule?.tipe_kereta})
                                                                </small>
                                                            </p>
                                                        </div>

                                                        <TimeLineStyled className="mb-2">
                                                            <>
                                                                <li>
                                                                    <p className="mb-0"><b className="mr-2">{dataSchedule?.data_schedule?.waktu_keberangkatan}</b> <small>{dataSchedule?.data_schedule?.asal_kota}, {dataSchedule?.data_schedule?.stasiun_awal} Station</small></p>
                                                                    <p className="pt-3"><Icon icon='pepicons-print:rewind-time' className="mr-2 text-primary" />{dataSchedule?.data_schedule?.durasi_perjalanan}</p>
                                                                </li>
                                                                <li className>
                                                                    <p className="mb-0"><b className="mr-2">{dataSchedule?.data_schedule?.waktu_tiba}</b> <small>{dataSchedule?.data_schedule?.tujuan}, {dataSchedule?.data_schedule?.stasiun_akhir} Station</small></p>
                                                                </li>
                                                            </>
                                                        </TimeLineStyled>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="d-flex align-items-center">
                                                            <Icon icon='pepicons-print:train' className="text-danger mr-3 mt-2" style={{ fontSize: '30px' }}></Icon>

                                                            <span className="font-weight-bold">{dataSchedule?.data_schedule_return?.stasiun_awal}</span>
                                                            <Icon icon='fluent:arrow-swap-28-filled' className="text-primary mx-3" style={{ fontSize: '20px' }}></Icon>
                                                            <span className="font-weight-bold">{dataSchedule?.data_schedule_return?.stasiun_akhir}</span>
                                                        </div>

                                                        <hr />

                                                        <div>
                                                            <p className="font-weight-bold">Return <br />
                                                                <small>
                                                                    {dataSchedule?.tgl_schedule_return}
                                                                </small>
                                                            </p>
                                                        </div>

                                                        <div className="mt-3">
                                                            <p className="font-weight-bold">{dataSchedule?.data_schedule_return?.nama_kereta} ({dataSchedule?.data_schedule_return?.no_kereta}) <br />
                                                                <small>
                                                                    {dataSchedule?.data_schedule_return?.kelas_kereta} (Subclass {dataSchedule?.data_schedule_return?.tipe_kereta})
                                                                </small>
                                                            </p>
                                                        </div>

                                                        <TimeLineStyled className="mb-2">
                                                            <>
                                                                <li>
                                                                    <p className="mb-0"><b className="mr-2">{dataSchedule?.data_schedule_return?.waktu_keberangkatan}</b> <small>{dataSchedule?.data_schedule_return?.asal_kota}, {dataSchedule?.data_schedule_return?.stasiun_awal} Station</small></p>
                                                                    <p className="pt-3"><Icon icon='pepicons-print:rewind-time' className="mr-2 text-primary" />{dataSchedule?.data_schedule_return?.durasi_perjalanan}</p>
                                                                </li>
                                                                <li className>
                                                                    <p className="mb-0"><b className="mr-2">{dataSchedule?.data_schedule_return?.waktu_tiba}</b> <small>{dataSchedule?.data_schedule_return?.tujuan}, {dataSchedule?.data_schedule_return?.stasiun_akhir} Station</small></p>
                                                                </li>
                                                            </>
                                                        </TimeLineStyled>
                                                    </div>
                                                </>
                                                : ''
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-3 mt-3" style={{
                                    borderRadius: '15px',
                                    boxShadow: '-1px 3px 11px -7px rgba(156,156,156,0.75)',
                                }}>
                                    <div className="card-header text-white" style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px', background: '#0070BA' }}>
                                        <h5 className="mb-0 card-title font-weight-bold">Detail Pemesan</h5>
                                    </div>
                                    <div className="card-body mt-0">
                                        <div className="form-row">
                                            <div className="col-2">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Title</label>
                                                    <select onChange={handleChangeContact} name="title" value={contact.title} className="form-control title contact_title">
                                                        <option value="Mr" selected="selected">Mr</option>
                                                        <option value="Mrs">Mrs</option>
                                                        <option value="Ms">Ms</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Nama Depan</label>
                                                    <input onChange={handleChangeContact} name="first" value={contact.first} type="text" className="textonly form-control" required />
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Nama Belakang</label>
                                                    <input onChange={handleChangeContact} name="last" type="text" value={contact.last} className="textonly form-control" required />
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Telepon</label>
                                                    <div className="input-group">
                                                        <select onChange={handleChangeContact} value={contact.phoneCode} name="phoneCode" className="form-control" style={{ width: '31%' }}>
                                                            <option value="62" selected="true">+ 62 - Indonesia</option>
                                                            {countries.map(item => (
                                                                <option value={item.phone}>+ {item.phone} - {item.country_name}</option>
                                                            ))}
                                                        </select>
                                                        <input required onChange={handleChangeContact} name="phone" value={contact.phone} type="text" className="textonly form-control" style={{ width: '69%' }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Email</label>
                                                    <input onChange={handleChangeContact} name="email" type="text" className="textonly form-control" value={contact.email} required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" onClick={handleSetAsPassenger} checked={contactAsPassenger} className="custom-control-input sebagai-penumpang" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Sebagai penumpang</label>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="font-weight-bold mt-5 mb-3">Detail Penumpang</h4>
                                <ul className="list-group mb-2">
                                    {
                                        passenger.adult?.map((item, index) => (
                                            <FormTrainPassenger key={index} handleAddFromQuickpick={handleAddFromQuickpick} countries={countries} handleChange={handleInputChange} name='adult' trainRepricing={trainRepricing} item={item} />
                                        ))
                                    }
                                    {
                                        passenger.child?.map((item, index) => (
                                            <FormTrainPassenger key={index} handleAddFromQuickpick={handleAddFromQuickpick} countries={countries} handleChange={handleInputChange} name='child' trainRepricing={trainRepricing} item={item} />
                                        ))
                                    }
                                    {
                                        passenger.infant?.map((item, index) => (
                                            <FormTrainPassenger key={index} handleAddFromQuickpick={handleAddFromQuickpick} countries={countries} handleChange={handleInputChange} name='infant' trainRepricing={trainRepricing} item={item} />
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-3" style={{
                                    borderRadius: '20px',
                                    boxShadow: '-1px 3px 11px -7px rgba(156,156,156,0.75)',
                                }}>
                                    <div className="card-header text-white font-weight-bold" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px', background: '#c12735' }}>
                                        <h5 className="pb-0 mb-0">Rincian Harga </h5>
                                    </div>
                                    <div className="card-body">
                                        <div id="cart-harga">
                                            {dataSchedule?.adult > 0 && 
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="pb-2"><strong>{dataSchedule?.adult} Dewasa</strong></span>
                                                    <p>Rp {dataSchedule?.count?.adult.toLocaleString()}</p>
                                                </div>
                                            }
                                            {dataSchedule?.infant > 0 &&
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="pb-2"><strong>{dataSchedule?.infant} Bayi</strong></span>
                                                    <p>Rp {dataSchedule?.count?.infant.toLocaleString()}</p>
                                                </div>
                                            }
                                            <hr />
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="pb-2"><strong>Subtotal</strong></span>
                                                <p>Rp {dataSchedule?.count?.subtotal.toLocaleString()}</p>
                                            </div>
                                            {/* <div className="d-flex justify-content-between align-items-center">
                                                <span className="pb-2"><strong>Pajak dan lainnya</strong></span>
                                                <p>Rp{(price?.tax + price?.iwjr + price?.fee2).toLocaleString()}</p>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="pb-2"><strong>Biaya Penanganan</strong></span>
                                                <p>Rp{price?.fee.toLocaleString()}</p>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="pb-2"><strong>Tambahan</strong></span>
                                                <p>Rp{price?.addon}</p>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p><b>Poin</b></p>
                                                <p className="total_poin">{price?.user?.point.toLocaleString()}</p>
                                            </div>
                                            {price?.point > 0 &&
                                                <div className="d-flex justify-content-end align-items-center">
                                                    <p className="total_poin text-danger">- {price?.point.toLocaleString()}</p>
                                                </div>
                                            }
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p>
                                                    <input onClick={() => setPoint(!point)}
                                                        checked={point} type="checkbox" id="ambilpoint" />
                                                    <label className="font-weight-bold font-italic text-success ml-2" htmlFor="ambilpoint">Gunakan poin untuk pembayaran</label></p>
                                            </div>
                                            <div id="coupon_checkout" className="d-flex justify-content-between align-items-center mb-2">
                                                <span><strong>Kupon</strong></span>
                                                <div>
                                                    <button type="button" onClick={handleOpenCoupon} className="btn btn-sm btn-warning font-weight-bold">
                                                        Gunakan Kupon </button>
                                                </div>
                                            </div>
                                            {price?.coupon.map(item => (
                                                <div className="d-flex justify-content-between">
                                                    <span className="pb-2 text-danger">{item.name}</span>
                                                    <p className="text-danger">- Rp{item.amount.toLocaleString()}<Icon style={{ cursor: 'pointer' }} icon={TimesCircle} onClick={() => handleRemoveCoupon(item)} /></p>
                                                </div>
                                            ))} */}
                                            <hr />
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="pb-2"><strong>Total</strong></span>
                                                <strong>
                                                    <h4 className="text-primary font-weight-bold">
                                                        Rp {dataSchedule?.count?.total.toLocaleString()}
                                                    </h4>
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ButtonCheckoutTrain
                                    total= {dataSchedule?.count?.total}
                                    selectSeat= {handleSeat}
                                    onSubmit={handleConfirm}
                                />
                            </div>
                        </div>
                    </div>
                    <Modal isOpen={isOpenCoupon} toggle={handleOpenCoupon} centered size="lg">
                        <ModalHeader toggle={handleOpenCoupon}>
                            <h5>Pilih kupon <Icon icon={QuestionIcon} /></h5>
                        </ModalHeader>
                        <ModalBody>
                            <div className="input-group mb-3">
                                <input type="text" value={textCoupon} onChange={(e) => setTextCoupon(e.target.value)} className="form-control" placeholder="Enter Code . . . " />
                                <div className="input-group-append">
                                    <button onClick={() => handleSubmitCoupon(textCoupon)} className="btn btn-outline-primary" type="button">
                                        <Icon icon={SignAlt} />
                                    </button>
                                </div>
                            </div>
                            <div className="container">
                                {price?.user.coupon.map(item => (
                                    <div className="row border rounded">
                                        <div className="col-3 rounded d-flex bg-warning align-items-center justify-content-center">
                                            <h6>
                                                {item.name}
                                            </h6>
                                        </div>
                                        <div className="col-9 d-flex justify-content-between p-3">
                                            <div>
                                                <h6>Potongan {item.amount.toLocaleString()}</h6>
                                                {item.minimum_transaction > 0 &&
                                                    <p>Min.Blnj Rp{item.minimum_transaction.toLocaleString()}</p>
                                                }
                                                <button onClick={() => handleSubmitCoupon(item.id.toString())} type="button" className="btn btn-primary">Gunakan</button>
                                            </div>
                                            <div>
                                                <small>
                                                    Hingga: {item.expired}
                                                </small>
                                                <p>
                                                    {item.term}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </ModalBody>
                    </Modal>
                </section>
            ) : (
                <h1 className="text-center my-4">Loading...</h1>
            )}
        </div>
    );
}


const TimeLineStyled = styled.ul`
    position:relative;
    li{
        margin-left: 0;
        min-height: 33px;
        position: relative;
        background-color: #fff;
        list-style: none;
    }

    li:nth-last-child(0n+1)::before{
        width:0;
        border:0;
    }

    li::before{
        content: '';
        position: absolute;
        border:1.8px dashed #FFC107;
        left: -18.5px;
        background-color: #E7E7E7;
        top: 3px;
        bottom: 0;
        height: 100px;
    }
    
    li::after {
        text-align: center;
        z-index: 10;
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        border: 3px solid #fff;
        background-color: #036cb4;
        border-radius: 50%;
        top: 0;
        left: -30px;
    }
`

const ThumnailStyled = styled.div`
    max-width: 100%;
    min-height:62px;
	padding: .25rem;
	background-color: #fff;
	/* border: 1px solid #dee2e6; */
	border-radius: .25rem;
    position:relative;
`


export default TrainPassanger;