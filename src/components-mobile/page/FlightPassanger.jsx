import HeaderBack from "../header/HeaderBack"; import shopApi from "@/api/shop";
import { BottomSheet, SheetContent } from '@biotic-ui/bottom-sheet'
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Image from "next/image";
import FormPassenger from "@/components/shared/FormPassenger";
import SignAlt from '@iconify/icons-fa-solid/sign-in-alt';
import TimesCircle from '@iconify/icons-fa-solid/times-circle';
import QuestionIcon from '@iconify/icons-fa-solid/question-circle';
import userApi from "@/api/user";
import ClockIcon from "@iconify/icons-fa-solid/clock";
import ButtonChekout from "@/components/shared/ButtonChekout";
import moment from "moment";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { toast } from "react-toastify";
import queryString from 'query-string';
import Swal from 'sweetalert2'
// import flight_passanger from "fake-data/flight-passanger";


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
    const router = useRouter()
    const [state] = useReducer(reducer, initialState, init);
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

    const [drawerOpen, setDrawerOpen] = useState({})


    const handleDrawerOpen = (field) => {
        setDrawerOpen(state => ({ ...state, [field]: !state[field] }))
    }

    const isOpenSelected = (field) => {
        return drawerOpen[field];
    }

    // replace url
    useEffect(() => {
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
            newPassenger[0] = { ...newPassenger[0], firstName: contact.first, lastName: contact.last, title: contact.title ?? 'Mr', dob: contact.birthdate }
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
                ...item, type: 'adult',
                dob: item.dob === '-' ? '' : moment(item.dob).format('DD-MM-YYYY'),
                "passport": {
                    "nat": item.nat,
                    "num": item.num ?? '',
                    "doi": moment(item.doi).format('DD-MM-YYYY') ?? '',
                    "doe": moment(item.doe).format('DD-MM-YYYY') ?? ''
                }

            })).concat(passenger.child.map(item => ({
                ...item, type: 'child',
                dob: moment(item.dob).format('DD-MM-YYYY'),
                "passport": {
                    "nat": item.nat,
                    "num": item.num ?? '',
                    "doi": moment(item.doi).format('DD-MM-YYYY') ?? '',
                    "doe": moment(item.doe).format('DD-MM-YYYY') ?? ''
                }
            }))).concat(passenger.infant.map(item => ({
                ...item, type: 'infant',
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

    const handleAddFromQuickpick = (name, target, { title, firstname, lastname, identificationNumber, dob }) => {
        const detailPassenger = { ...passenger[name].find(item => item.id === target.id), type: name }

        const indexOf = passenger[name].findIndex(item => item.id === target.id);
        const newPassenger = [...passenger[name]];
        newPassenger[indexOf] = { ...detailPassenger, title, firstName: firstname, lastName: lastname, identificationNumber: identificationNumber, dob: dob }
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
        <>
            <HeaderBack title="Booking" onBack={router.back} />
            <div className="container py-3">
                <div className="row">
                    <div className="col-12">
                        <div className="card" style={{ borderRadius: '13px' }}>
                            <div className="card-body p-2">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-5 text-center">
                                        <small style={{ fontSize: '12px' }}>From</small>
                                        <h5 className="mb-0">{flightRepricing?.detail.onwardFlight.flight[0].departure.code}</h5>
                                        <small style={{ fontSize: '12px' }}>{flightRepricing?.detail.onwardFlight.flight[0].departure.name}</small>
                                    </div>
                                    <div className="col-1 d-flex justify-content-center align-items-center">
                                        <div>
                                            <div style={{
                                                width: '50px',
                                                height: '50px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                flexDirection: 'column',
                                                borderRadius: '50%',
                                                background: '#eaeaea',
                                                textAlign: 'center',
                                                color: '#0070BA'
                                            }}>
                                                <i className="fas fa-plane" />
                                                {flightRepricing?.detail.returnFlight &&
                                                    <i className="fas fa-plane" style={{ transform: 'rotate(180deg)' }} />
                                                }

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-5 text-center">
                                        <small style={{ fontSize: '12px' }}>To</small>
                                        <h5 className="mb-0">{flightRepricing?.detail?.onwardFlight.flight[0].arrival.code}</h5>
                                        <small style={{ fontSize: '12px' }}>{flightRepricing?.detail?.onwardFlight.flight[0].arrival.name}</small>
                                    </div>
                                </div>
                                {flightRepricing?.detail.onwardFlight.flight.map(fl => (
                                    <div className="row align-items-end mt-2">
                                        <div className="col-8">
                                            <div style={{ width: '60px', height: '25px', position: 'relative', marginBottom: '-10px', }}>
                                                <Image src={fl.image} layout='fill' objectFit="contain" />
                                            </div>
                                            <small style={{ fontSize: '10px' }}>
                                                {fl.departure.code}-{fl.arrival.code} | {fl.departure.date} | {fl.departure.time}
                                            </small>
                                        </div>
                                        <div className="col-4 text-right">
                                            <small style={{ fontSize: '10px' }} className="text-primary font-weight-bold">Departure</small>
                                        </div>
                                        {fl.layover &&
                                            <div className="col-12">
                                                <div classname="d-flex justify-content-between px-3 mb-0">
                                                    <small><Icon icon={ClockIcon} className="mr-1" /> Lama menunggu transit {fl.layover}</small>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                ))}
                                {flightRepricing?.detail.returnFlight?.flight?.map(fl => (
                                    <div className="row align-items-end mt-2">
                                        <div className="col-8">
                                            <div style={{ width: '60px', height: '25px', position: 'relative', marginBottom: '-10px', }}>
                                                <Image src={fl.image} layout='fill' objectFit="contain" />
                                            </div>
                                            <small style={{ fontSize: '10px' }}>
                                                {fl.departure.code}-{fl.arrival.code} | {fl.departure.date} | {fl.departure.time}
                                            </small>
                                        </div>
                                        <div className="col-4 text-right">
                                            <small style={{ fontSize: '10px' }} className="text-primary font-weight-bold">Return</small>
                                        </div>
                                        {fl.layover &&
                                            <div className="col-12">
                                                <div classname="d-flex justify-content-between px-3 mb-0">
                                                    <small><Icon icon={ClockIcon} className="mr-1" /> Lama menunggu transit {fl.layover}</small>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-1">
                        <div className="card" style={{ borderRadius: '10px' }}>
                            <div className="card-body p-2">
                                <small className="text-primary font-weight-bold">Detail Pemesanan</small>
                                <div className="d-flex justify-content-between align-items-center py-2 px-3" style={{
                                    background: '#eaeaea',
                                    borderRadius: '10px'
                                }}>
                                    <div>
                                        <small className="d-block mb-0" style={{ fontSize: '10px' }}>Contact</small>
                                        <small style={{ marginTop: '-7px', display: 'block' }}>{contact.first} {contact.last}</small>
                                    </div>
                                    <div>
                                        <i onClick={() => handleDrawerOpen('contact')} style={{ fontSize: '12px' }} className="fas fa-edit mr-3 text-primary"></i>
                                    </div>
                                </div>
                                <hr />
                                <small className="text-primary font-weight-bold">Detail Penumpang</small>
                                <div className="d-flex justify-content-between">
                                    <small className="d-block">
                                        Sama dengan pemesan
                                    </small>
                                    <div className="custom-control custom-switch">
                                        <input type="checkbox" onClick={handleSetAsPassenger} checked={contactAsPassenger} className="custom-control-input" id='directOnly' />
                                        <label style={{ fontSize: '12px' }} className="custom-control-label" htmlFor='directOnly'>
                                        </label>
                                    </div>
                                </div>
                                {passenger.adult?.map((item, index) => (
                                    <>
                                        <div className="d-flex mb-1 justify-content-between align-items-center py-2 px-3" style={{
                                            background: '#eaeaea',
                                            borderRadius: '10px'
                                        }}>
                                            <div>
                                                <small className="d-block mb-0" style={{ fontSize: '10px' }}>Penumpang {item.id} : Dewasa</small>
                                                <small style={{ marginTop: '-7px', display: 'block' }}>{`${item.firstName ?? ''} ${item.lastName ?? ''}`}</small>
                                            </div>
                                            <div>
                                                <i onClick={() => handleDrawerOpen(`drawer-adult-${index}`)} style={{ fontSize: '12px' }} className="fas fa-edit mr-3 text-primary" />
                                            </div>
                                        </div>
                                        <DrawerPassanger onClose={() => handleDrawerOpen(`drawer-adult-${index}`)} open={isOpenSelected(`drawer-adult-${index}`)}>
                                            <SheetContent>
                                                <FormPassenger onClose={() => handleDrawerOpen(`drawer-adult-${index}`)} style={{ boxShadow: 'none' }} key={index} handleAddFromQuickpick={handleAddFromQuickpick} countries={countries} handleChange={handleInputChange} name='adult' flightRepricing={flightRepricing} item={item} />
                                                <div className="col-4 offset-8" style={{ marginTop: '-28px', marginBottom: '10px' }}>
                                                    <button type="button" onClick={() => handleDrawerOpen(`drawer-adult-${index}`)} class="btn btn-sm btn-primary btn-block">Simpan</button>
                                                </div>
                                            </SheetContent>
                                        </DrawerPassanger>
                                    </>
                                ))}

                                {passenger.child?.map((item, index) => (
                                    <>
                                        <div className="d-flex mb-1 justify-content-between align-items-center py-2 px-3" style={{
                                            background: '#eaeaea',
                                            borderRadius: '10px'
                                        }}>
                                            <div>
                                                <small className="d-block mb-0" style={{ fontSize: '10px' }}>Penumpang {item.id} : Anak-anak</small>
                                                <small style={{ marginTop: '-7px', display: 'block' }}>{`${item.firstName ?? ''} ${item.lastName ?? ''}`}</small>
                                            </div>
                                            <div>
                                                <i onClick={() => handleDrawerOpen(`drawer-child-${index}`)} style={{ fontSize: '12px' }} className="fas fa-edit mr-3 text-primary" />
                                                <i style={{ fontSize: '12px' }} className="fas fa-search text-primary" />
                                            </div>
                                        </div>
                                        <DrawerPassanger onClose={() => handleDrawerOpen(`drawer-child-${index}`)} open={isOpenSelected(`drawer-child-${index}`)}>
                                            <SheetContent>
                                                <FormPassenger onClose={() => handleDrawerOpen(`drawer-child-${index}`)} style={{ boxShadow: 'none' }} key={index} handleAddFromQuickpick={handleAddFromQuickpick} countries={countries} handleChange={handleInputChange} name='child' flightRepricing={flightRepricing} item={item} />
                                            </SheetContent>
                                        </DrawerPassanger>
                                    </>
                                ))}

                                {passenger.infant?.map((item, index) => (
                                    <>
                                        <div className="d-flex mb-1 justify-content-between align-items-center py-2 px-3" style={{
                                            background: '#eaeaea',
                                            borderRadius: '10px'
                                        }}>
                                            <div>
                                                <small className="d-block mb-0" style={{ fontSize: '10px' }}>Penumpang {item.id} : Bayi</small>
                                                <small style={{ marginTop: '-7px', display: 'block' }}>{`${item.firstName ?? ''} ${item.lastName ?? ''}`}</small>
                                            </div>
                                            <div>
                                                <i onClick={() => handleDrawerOpen(`drawer-infant-${index}`)} style={{ fontSize: '12px' }} className="fas fa-edit mr-3 text-primary" />
                                                <i style={{ fontSize: '12px' }} className="fas fa-search text-primary" />
                                            </div>
                                        </div>
                                        <DrawerPassanger onClose={() => handleDrawerOpen(`drawer-infant-${index}`)} open={isOpenSelected(`drawer-infant-${index}`)}>
                                            <SheetContent>
                                                <FormPassenger onClose={() => handleDrawerOpen(`drawer-infant-${index}`)} style={{ boxShadow: 'none' }} key={index} handleAddFromQuickpick={handleAddFromQuickpick} countries={countries} handleChange={handleInputChange} name='infant' flightRepricing={flightRepricing} item={item} />

                                            </SheetContent>
                                        </DrawerPassanger>
                                    </>
                                ))}
                                <div className="d-flex justify-content-between align-items-center my-2">
                                    <p className="mb-0 font-weight-bold">Pilih Kupon</p>
                                    <button type="button" class="btn btn-primary btn-sm" onClick={handleOpenCoupon}>Gunakan</button>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="d-block text-secondary">Jumlah Pembayaran</small>
                                    <small className="d-block">Rp{price?.subtotal.toLocaleString()}</small>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="d-block text-secondary">Pajak dan Lainnya</small>
                                    <small className="d-block">Rp{(price?.tax + price?.iwjr + price?.fee2).toLocaleString()}</small>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="d-block text-secondary">Biaya Penanganan</small>
                                    <small className="d-block">Rp{price?.fee.toLocaleString()}</small>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="d-block text-secondary">Poin</small>
                                    <small className="total_poin">{price?.user?.point.toLocaleString()}</small>
                                </div>
                                {price?.coupon.map(item => (
                                    <div className="d-flex justify-content-between">
                                        <small className="pb-2 text-danger">{item.name}</small>
                                        <small className="text-danger">- Rp{item.amount.toLocaleString()}<Icon style={{ cursor: 'pointer' }} icon={TimesCircle} onClick={() => handleRemoveCoupon(item)} /></small>
                                    </div>
                                ))}
                                {price?.point > 0 &&
                                    <div className="d-flex justify-content-end align-items-center">
                                        <small className="total_poin text-danger">- {price?.point.toLocaleString()}</small>
                                    </div>
                                }
                                <div className="d-flex justify-content-between align-items-center">
                                    <p>
                                        <input onClick={() => setPoint(!point)}
                                            checked={point} type="checkbox" id="ambilpoint" />
                                        <small className="font-weight-bold font-italic text-success" htmlFor="ambilpoint">Gunakan poin untuk pembayaran</small></p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="d-block text-secondary">Total</small>
                                    <small className="d-block">Rp{price?.total.toLocaleString()}</small>
                                </div>

                                <button onClick={handleSend} type="button" style={{ borderRadius: '10px' }} className="btn font-weight-bold btn-warning btn-sm mt-2 btn-block">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BottomSheet open={isOpenSelected('contact')} onClose={() => handleDrawerOpen('contact')}>
                <SheetContent>
                    <div className="card mb-3" style={{
                        borderRadius: '20px',
                        boxShadow: 'none',
                        border: 0,
                    }}>
                        <div className="card-header d-flex justify-content-between text-white" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px', background: '#0070BA' }}>
                            <h5 className="mb-0 card-title font-weight-bold">Detail Pemesan</h5>
                            <h5 onClick={() => handleDrawerOpen('contact')}>
                                <i className="fas fa-times"></i>
                            </h5>
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
                                                {countries.map(item => (
                                                    <option value={item.phone
                                                    }>{item.phone}
                                                    </option>
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
                                <div className="col-4 offset-8">
                                    <button type="button" onClick={() => handleDrawerOpen('contact')} class="btn btn-sm btn-primary btn-block">Simpan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </BottomSheet>

            <Modal isOpen={false} toggle={''} centered size='lg'>
                <ModalHeader className="bg-primary text-white">
                    <h5 className="m-0 font-weight-bold">Detail Pemesanan</h5>
                </ModalHeader>
                <ModalBody>
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
                                        {countries.map(item => (
                                            <option value={item.phone
                                            }>{item.phone}
                                            </option>
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
                </ModalBody>
            </Modal>

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
        </>
    );
}

const ModalStyled = styled(Modal)`
    .modal-content{
        border:0;
        background:transparent;
    }

`

const DrawerPassanger = styled(BottomSheet)`
z-index:999;
/* min-height:90vh; */
`

export default FlightPassanger;