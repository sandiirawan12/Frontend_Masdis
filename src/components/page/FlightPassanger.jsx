import shopApi from "@/api/shop";
import { Icon } from "@iconify/react";
import ClockIcon from "@iconify/icons-fa-solid/clock";
import { useRouter } from "next/router";
import { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TabPayment from "../shared/TabPayment";
import Image from "next/image";
import FormPassenger from "../shared/FormPassenger";
import SignAlt from '@iconify/icons-fa-solid/sign-in-alt';
import TimesCircle from '@iconify/icons-fa-solid/times-circle';
import QuestionIcon from '@iconify/icons-fa-solid/question-circle';
import userApi from "@/api/user";
import ButtonChekout from "../shared/ButtonChekout";
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
        case 'FETCH_FLIGHT':
            return { ...state, key: action.payload }
        default:
            throw new Error();
    }
}

function init(state) {
    const [key] = parseQuery(window.location.search);

    return { ...state, key };
}

function FlightPassanger() {
    const [state] = useReducer(reducer, initialState, init);

    const router = useRouter();
    const { id } = router.query;
    const { token, user } = useSelector(state => state)

    const [flightRepricing, setFlightRepricing] = useState();
    const [paymentMethodSelected, setPaymentMethodSelected] = useState(0);

    const [price, setPrice] = useState();
    const { access_token } = token
    const [countries, setCountries] = useState([])

    const [loading, setLoading] = useState(true)
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
            const query = buildQuery(state.key);
            const href = queryString.stringifyUrl({
                ...queryString.parseUrl(router.asPath),
                query: queryString.parse(query),
            }, { encode: false });

            router.replace(router.pathname, href, {
                shallow: true,
            }).then(() => {
                // This is necessary for the "History API" to work.
                window.history.replaceState(
                    {
                        ...window.history.state,
                        options: {
                            ...window.history.state.options,
                            shallow: false,
                        },
                    },
                    '',
                    href,
                );
            });
        }
    }, [state.key, router.asPath]);



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

    const handleSend = () => {
        const req = {
            "product": "flight",
            "key": flightRepricing.key,
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
        setLoading(true)
        shopApi.getFlightRepricing(access_token, { product: 'flight', productOption: [id, state.key] }).then(res => {
            if (res.success) {
                const { pax } = res.data.query
                const ps = { adult: getDataArray(pax.adult), child: getDataArray(pax.child), infant: getDataArray(pax.infant) }
                setFlightRepricing(res.data)
                setPassenger(ps)
                setLoading(false)
            } else {
                Swal.fire({
                    icon: 'info',
                    title: 'Penerbangan sudah tidak tersedia',
                    allowOutsideClick: false
                }).then(result => {
                    if (result.isConfirmed) {
                        router.back()
                    }
                })

            }
        }).catch(() => {
            Swal.fire({
                icon: 'info',
                title: 'Penerbangan sudah tidak tersedia',
                allowOutsideClick: false
            }).then(result => {
                if (result.isConfirmed) {
                    router.back()
                }
            })
        })
    }, [])

    useEffect(() => {
        const req = {
            "product": "flight",
            "key": flightRepricing?.key,
            "insurance": false,
            point,
            coupon,
            paymentMethod: paymentMethodSelected,
            "platform": "web",
            ssr
        }
        if (flightRepricing) {
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
    }, [flightRepricing, paymentMethodSelected, point, coupon, ssr])

    const handleAddFromQuickpick = (name, target, { title, firstname, lastname, identificationNumber, tglLahir }) => {
        const detailPassenger = { ...passenger[name].find(item => item.id === target.id), type: name }

        const indexOf = passenger[name].findIndex(item => item.id === target.id);
        const newPassenger = [...passenger[name]];
        newPassenger[indexOf] = { ...detailPassenger, title, firstName: firstname, lastName: lastname, identificationNumber: identificationNumber, dob: tglLahir }
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

    // loading && !flightRepricing && !price
    if (loading && !flightRepricing && !price) {
        return <div style={{
            height: '50vh',
            marginBottom: '5rem'
        }} className="d-flex flex-column align-items-center justify-content-center">
            <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/pulse-spinner.svg" />
            <h4>Sedang menyiapkan data...</h4>
        </div>
    }
    return (
        <section className="my-3">
            <div className="container">
                <h5 className="font-weight-bold">Checkout</h5>
                <div className="px-3 py-2 bg-warning mt-3 mb-2" style={{ width: '250px', borderRadius: '10px' }}>
                    <h6 className="text-center font-weight-bold m-0">Metode Pembayaran</h6>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        {/* <div className="card mb-2" style={{
                            borderRadius: '20px',
                            boxShadow: '5px 5px 15px -5px rgba(0, 0, 0, .5)',
                        }}>
                            <div className="card-body p-0 payment-container">
                                <TabPayment handleChangePaymentMethod={handleChangePaymentMethod} paymentMethodSelected={paymentMethodSelected} flightRepricing={flightRepricing} />
                            </div>
                        </div> */}
                        <div className="card mb-3" style={{
                            borderRadius: '20px',
                            boxShadow: '5px 5px 15px -5px rgba(0, 0, 0, .5)',
                        }}>
                            <div className="card-body">
                                <p className="mb-1"><span className="badge badge-danger">Departure</span> {flightRepricing?.detail.onwardFlight.date} | {flightRepricing?.detail.onwardFlight.from.city} - {flightRepricing?.detail.onwardFlight.to.city}</p>

                                {flightRepricing?.detail.onwardFlight.flight.map(fl => (
                                    <>
                                        <div className="row align-items-center justify-content-center">
                                            <div className="col-8">
                                                <TimeLineStyled className="mb-2">
                                                    <>
                                                        <li>
                                                            <p className="mb-0"><b className="mr-2"> {fl.departure.time}</b> [{fl.departure.code}] {fl.departure.name} {(fl.departure.terminal !== '0' && fl.departure.terminal !== '*' && fl.departure.terminal !== undefined) && `Terminal ${fl.departure.terminal}`}</p>
                                                            <p className="py-2 mb-0">
                                                                <Icon icon={ClockIcon} /> {fl.flyTime}</p>
                                                        </li>
                                                        <li className>
                                                            <p className="mb-0"><b className="mr-2">  {fl.arrival.time}</b> [{fl.arrival.code}] {fl.arrival.name} {(fl.arrival.terminal !== '0' && fl.arrival.terminal !== '*' && fl.arrival.terminal !== undefined) && `Terminal ${fl.arrival.terminal}`}</p>
                                                        </li>
                                                    </>
                                                </TimeLineStyled>
                                            </div>
                                            <div className="col-4 d-flex justify-content-center text-right flex-column align-items-end">
                                                <div>

                                                    <ThumnailStyled>
                                                        <Image layout="fill" placeholder='blur' objectFit='contain' blurDataURL src={fl.image} />
                                                    </ThumnailStyled>
                                                    <span className="mt-0"> [{fl.code}] {fl.class}</span>
                                                </div>

                                            </div>
                                        </div>
                                        {fl.layover && <div classname="d-flex justify-content-between px-3 mb-0">
                                            <p><Icon icon={ClockIcon} className="mr-1" /> Lama menunggu transit {fl.layover}</p>
                                        </div>}
                                    </>
                                ))}
                            </div>
                        </div>
                        {flightRepricing?.detail.returnFlight &&
                            <div className="card mb-3" style={{
                                borderRadius: '20px',
                                boxShadow: '5px 5px 15px -5px rgba(0, 0, 0, .5)',
                            }}>
                                <div className="card-body">
                                    <p className="mb-1"><span className="badge badge-danger">Return</span> {flightRepricing?.detail.returnFlight.date} | {flightRepricing?.detail.returnFlight.from.city} - {flightRepricing?.detail.returnFlight.to.city}</p>
                                    {flightRepricing?.detail.returnFlight.flight.map(fl => (
                                        <>
                                            <div className="row align-items-center justify-content-center">
                                                <div className="col-8">
                                                    <TimeLineStyled className="mb-2">
                                                        <>
                                                            <li>
                                                                <p className="mb-0"><b className="mr-2"> {fl.departure.time}</b> [{fl.departure.code}] {fl.departure.name} {(fl.departure.terminal !== '0' && fl.departure.terminal !== '*' && fl.departure.terminal !== undefined) && `Terminal ${fl.departure.terminal}`}</p>
                                                                <p className="py-2 mb-0">
                                                                    <Icon icon={ClockIcon} /> {fl.flyTime}</p>
                                                            </li>
                                                            <li className>
                                                                <p className="mb-0"><b className="mr-2">  {fl.arrival.time}</b> [{fl.arrival.code}] {fl.arrival.name} {(fl.arrival.terminal !== '0' && fl.arrival.terminal !== '*' && fl.arrival.terminal !== undefined) && `Terminal ${fl.arrival.terminal}`}</p>
                                                            </li>
                                                        </>
                                                    </TimeLineStyled>
                                                </div>
                                                <div className="col-4 d-flex justify-content-center text-right flex-column align-items-end">
                                                    <div>
                                                        <ThumnailStyled>
                                                            <Image layout="fill" placeholder='blur' objectFit='contain' blurDataURL src={fl.image} />
                                                        </ThumnailStyled>
                                                        <span> [{fl.code}] {fl.class}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {fl.layover && <div className="d-flex justify-content-between px-3 mb-0">                                         <p><Icon icon={ClockIcon} className="mr-1" /> Lama menunggu transit {fl.layover}</p>
                                            </div>}
                                        </>
                                    ))}
                                </div>
                            </div>
                        }
                        <div className="card mb-3" style={{
                            borderRadius: '20px',
                            boxShadow: '5px 5px 15px -5px rgba(0, 0, 0, .5)',
                        }}>
                            <div className="card-header text-white" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px', background: '#0070BA' }}>
                                <h5 className="mb-0 card-title font-weight-bold">Detail Pemesan</h5>
                            </div>
                            <div className="card-body mt-0">
                                <small>untuk identitas voucher</small>
                                <div className="form-row">
                                    <div className="col-2">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Title</label>
                                            <select onChange={handleChangeContact} name="title" value={contact.title} className="form-control title contact_title">
                                                <option value="Mr" selected="selected">Mr.</option>
                                                <option value="Mrs">Mrs.</option>
                                                <option value="Ms">Ms.</option>
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
                                                    <option value="62" selected="true">62  </option>
                                                    {countries.map(item => (
                                                        <option value={item.phone}>{item.phone}  </option>
                                                    ))}
                                                </select>
                                                <input required onChange={handleChangeContact} name="phone" value={contact.phone} type="text" className="textonly form-control" style={{ width: '69%' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
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
                        <ul className="list-group mb-2">
                            {
                                passenger.adult?.map((item, index) => (
                                    <FormPassenger key={index} handleAddFromQuickpick={handleAddFromQuickpick} countries={countries} handleChange={handleInputChange} name='adult' flightRepricing={flightRepricing} item={item} />
                                ))
                            }
                            {passenger.child?.map((item, index) => (
                                <FormPassenger key={index} handleAddFromQuickpick={handleAddFromQuickpick} countries={countries} handleChange={handleInputChange} name='child' flightRepricing={flightRepricing} item={item} />
                            ))}
                            {passenger.infant?.map((item, index) => (
                                <FormPassenger key={index} handleAddFromQuickpick={handleAddFromQuickpick} countries={countries} handleChange={handleInputChange} name='infant' flightRepricing={flightRepricing} item={item} />
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-3" style={{
                            borderRadius: '20px',
                            boxShadow: '5px 5px 15px -5px rgba(0, 0, 0, .5)',
                        }}>
                            <div className="card-header text-white font-weight-bold" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px', background: '#0070BA' }}>
                                <h5 className="pb-0 mb-0">Rincian Harga </h5>
                            </div>
                            <div className="card-body">
                                <div id="cart-harga">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="pb-2"><strong>Jumlah Pembayaran</strong></span>
                                        <p>Rp{price?.subtotal.toLocaleString()}</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
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
                                            <label className="font-weight-bold font-italic text-success" htmlFor="ambilpoint">Gunakan poin untuk pembayaran</label></p>
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
                                    ))}
                                    <hr />
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="pb-2"><strong>Total</strong></span>
                                        <strong><h4 className="text-primary font-weight-bold">Rp{price?.total.toLocaleString()}</h4></strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ButtonChekout total={price?.total} onSubmit={handleSend} />
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
	height: 100%;

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


export default FlightPassanger;