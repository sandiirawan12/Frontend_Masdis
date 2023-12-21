import styled from "styled-components";
import { Icon } from '@iconify/react'
import UserIcon from '@iconify/icons-fa-solid/user-friends'
import WifiIcon from '@iconify/icons-fa-solid/wifi'
import TvIcon from '@iconify/icons-fa-solid/tv'
import BathIcon from '@iconify/icons-fa-solid/bath';
import FreeCancel from '@iconify/icons-fa-solid/bath';
import InfoIcon from '@iconify/icons-fa-solid/info';
import SarapanIcon from '@iconify/icons-fa-solid/utensils';
import SmokingIcon from '@iconify/icons-fa-solid/smoking';
import NoSmokingIcon from '@iconify/icons-fa-solid/smoking-ban';
import BedIcon from '@iconify/icons-fa-solid/bed';
import queryString from 'query-string';

import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from "next/router";
import { changeRedirectUrl } from "@/store/redirectUrl/redirectUrlActions";
import { useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import shopApi from "@/api/shop";
import { toast } from "react-toastify";
import moment from "moment";
import Swal from "sweetalert2";


function CardProductHotel(props) {
    const { room, options, hotelKey } = props

    const auth = useSelector(state => state.auth)
    const { access_token } = useSelector(state => state.token)
    const dispatch = useDispatch()
    const router = useRouter()

    const [openModal, setOpenModal] = useState(false);
    const [roomSelected, setRoomSelected] = useState();
    const [moreFasilitasInfo, setFasilitasInfo] = useState(false)

    const [open, setOpen] = useState(false);
    const handleOpenRoom = () => {
        setOpen(!open)
    }

    const bg = {
        overlay: {
            background: '#272e34'
        }
    };

    const handleOpenModal = (room) => {
        setRoomSelected(room)
        setOpenModal(open => !open)
    }

    const doHandleSubmit = (guest) => {
        // Swal.fire({
        //     html: `
        //     <div class="d-flex align-items-start">
        //             <img src="${room?.detail[0]?.images[0]}" style="width:200px;height:200px;object-fit:cover"/>
        //             <div class="ml-3 text-left">
        //                 <h5 class="font-weight-bold">${room?.name}</h5>
        //                 <h6>Check-in : ${options.dateFrom}</h6>
        //                 <h6>Check-out : ${options.dateTo}</h6>
        //                 <h6>Size : ${room?.roomSize}</h6>
        //             </div>
        //     </div>
        //     `,
        //     width: '600px',
        //     confirmButtonText:'Pesan',
        //     confirmButtonColor:'#0070BA'
        // })
        if (process.env.NEXT_PUBLIC_HOTELEX_API_URL || "https://api.masterdiskon.com/v1/apitrav/") {
            shopApi.getAvailHotel(access_token, {
                "productId": options.productId,
                "dateFrom": options.dateFrom,
                "dateTo": options.dateTo,
                "pax": {
                    "room": options?.room,
                    "adult": options?.adult,
                    "child": options?.child,
                    "infant": options?.infant,
                    "childAge": options?.childAge,
                    numOfAdults: guest
                },
                "roomId": room.id,
                "rateKey": room.detailId[0]
            }).then(res => {
                if (res.success) {
                    if (!auth) {
                        dispatch(changeRedirectUrl(`/product/hotel/checkout?${queryString.stringify(
                            {
                                key: hotelKey,
                                hotelId: options.productId,
                                option: room.id,
                                optionDetail: res.data.identifier
                            }
                        )}`))
                    }
                    router.push(`checkout?${queryString.stringify(
                        {
                            key: hotelKey,
                            hotelId: options.productId,
                            option: room.id,
                            optionDetail: res.data.identifier
                        }
                    )}`)
                } else {
                    toast.error('Kamar tidak tersedia');
                }
            })
        } else {
            if (!auth) {
                dispatchRedux(changeRedirectUrl(`/product/hotel/checkout?${queryString.stringify(
                    {
                        key: hotel?.key,
                        hotelId: options.productId,
                        option: room.id,
                        optionDetail: room.detailId
                    }
                )}`))
            }
            router.push(`checkout?${queryString.stringify(
                {
                    key: hotelKey,
                    hotelId: options.productId,
                    option: room.id,
                    optionDetail: room.detailId
                }
            )}`)
        }

    }

    function toDate(date) {
        var from = date.split("-")
        return new Date(from[2], from[1] - 1, from[0])
    }

    return (
        <RootStyled className="card">
            {room?.isPromo &&
                <img style={{
                    width: '104px',
                    position: 'absolute',
                    zIndex: '99',
                    left: '4.7px',
                    top: '15px'
                }} src="/assets/Icon/card-promo-new.png" alt="Gambar Masterdiskon" />
            }
            {/* <div
                style={{
                    width: 'auto',
                    position: 'absolute',
                    zIndex: '99',
                    left: '10px',
                    top: '9px'
                }}
            >
                {room?.roomSize &&
                    <div style={{ width: 'auto', height: '32px', background: '#015386', borderBottomRightRadius: '18px', borderTopLeftRadius: '18px' }}
                        className='position-absolute py-2 px-3 d-flex flex-row align-items-center text-white'>
                        {room?.roomSize}
                    </div>
                }
            </div> */}
            {/* <div className="card-body pl-2 py-2" style={{cursor: 'pointer'}} onClick={() => doHandleSubmit(room.guest)}> */}
            <div className="card-body pl-2 py-2" style={{ cursor: 'pointer' }} >
                <div className="row d-flex">
                    <div className="col-md-3 position-relative" onClick={() => handleOpenRoom()}>
                        <ImageStyled src={room?.detail[0]?.images[0] || 'https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/icon-no-image.svg'} />
                        {room?.roomSize &&
                            <div style={{ width: 'auto', height: '32px', background: '#015386', bottom: 0, left: '15px', borderBottomLeftRadius: '18px', borderTopRightRadius: '18px' }} className='position-absolute py-2 px-3 d-flex flex-row align-items-center text-white'>
                                <Icon icon="clarity:ruler-pencil-line" className="mr-2" />
                                <small style={{ fontSize: '10px' }} className="font-weight-bold">{room?.roomSize}</small>
                            </div>
                        }
                        <div style={{ width: 'auto', height: '32px', background: '#dfdfdf', bottom: 0, right: '15px', borderBottomRightRadius: '18px', borderTopLeftRadius: '18px' }} className='position-absolute py-2 px-3 d-flex flex-row align-items-center text-primary'>
                            <span style={{ fontSize: '10px' }} className="font-weight-bold">Detail Kamar</span>
                        </div>
                    </div>
                    <div className="col-md-9 flex-1">
                        <div className="row">
                            <div className="col-md-9">
                                <h5 className="mt-3 text-primary font-weight-bold">{room.name} </h5>
                                <div className="row mt-3">
                                    <div className="col-6">
                                        <p className="font-weight-bold" style={{ textTransform: 'capitalize'}}>
                                            {room?.roomType &&
                                                <>
                                                    <Icon icon="solar:bed-line-duotone" className="mr-2 text-primary" />
                                                    {room?.roomType}
                                                </>
                                            }
                                        </p>
                                    </div>
                                    <div className="col-6">
                                        <p className="font-weight-bold">
                                            <Icon icon="icon-park-twotone:every-user" className="mr-2 text-primary" />
                                            {room?.guest} Tamu
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className={`mb-1 ${room?.breakfastIncluded ? 'text-success' : 'text-secondary'} ml-2 mr-2`}>
                                            <Icon icon="dashicons:food" className="mr-2" />{room?.breakfastIncluded ? 'Sarapan Gratis' : 'Tanpa Sarapan'}
                                        </p>
                                        <p className={`mb-1 ${room?.wifiIncluded ? 'text-success' : 'text-secondary'} ml-2 mr-2`}>
                                            <Icon icon={WifiIcon} className="mr-2" />{room?.wifiIncluded ? 'WiFi Gratis' : 'Tidak Ada WiFi'}
                                        </p>
                                        <p className={`mb-1 ${room?.smokingPreference ? 'text-success' : 'text-secondary'} ml-2 mr-2`}>
                                            <Icon icon={SmokingIcon} className="mr-2" /> {room?.smokingPreference === 'NON_SMOKING' ? 'Bebas Rokok' : 'Tidak Boleh Merokok'}
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className={`mb-1 ${room?.refundIncluded ? 'text-success' : 'text-secondary'} ml-2 mr-2`}>
                                            <Icon icon="tabler:free-rights" className="mr-2" />{room?.refundIncluded ? 'Bisa Refund' : 'Tidak Bisa Refund'}
                                        </p>
                                        <p className={`mb-1 text-secondary ml-2 mr-2`}>
                                            <Icon icon="fluent-mdl2:date-time" className="mr-2" />Tidak Bisa Reschedule
                                        </p>
                                    </div>
                                </div>
                                {room?.refundIncluded ?
                                    <>
                                        <div data-toggle="tooltip" data-placement="top" title="Reservasi ini bisa refund & tidak bisa reschedule" className="text-info mt-3 mr-2">
                                            <div className="d-flex align-items-center">
                                                <Icon icon="heroicons:question-mark-circle-20-solid" className="mr-2" />
                                                <span>Baca Kebijakan Pembatalan</span>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div data-toggle="tooltip" data-placement="top" title="Reservasi ini tidak bisa refund & tidak bisa reschedule" className="text-info mt-3 mr-2">
                                            <div className="d-flex align-items-center">
                                                <Icon icon="heroicons:question-mark-circle-20-solid" className="mr-2" />
                                                <span>Baca Kebijakan Pembatalan</span>
                                            </div>
                                        </div>
                                    </>
                                }
                                <div className="d-flex align-items-center mt-2 mb-3">
                                    {room.detail[0].cancellationFreePolicyDisplay &&
                                        <div className="d-flex align-items-center">
                                            <small className="text-primary font-italic" dangerouslySetInnerHTML={{ __html: room.detail[0].cancellationFreePolicyDisplay }}></small>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className=" text-right h-100 d-flex flex-column justify-content-center">
                                    {!room?.isFull ?
                                        <>
                                            {room?.view &&
                                                <div>
                                                    <LabelView className="badge badge-danger">{room?.view}</LabelView>
                                                </div>
                                            }
                                            {room?.isPromo &&
                                                <small className="text-secondary"><s>Rp{room?.price.toLocaleString()}</s></small>
                                            }
                                            <small className="text-success mb-1 font-weight-bold" style={{ fontSize: '15px' }}><Icon icon="iconamoon:discount-duotone" className="mr-1" />Hemat {Math.floor(((room.price - room.promoPrice) / room.price) * 100)}%</small>
                                            <h5 className="mb-0 text-danger font-weight-bold">Rp{room.promoPrice.toLocaleString()}</h5>
                                            <div className="mb-1"><small>/ kamar / malam</small></div>
                                            <div className="mb-2 text-primary font-weight-bold" style={{fontSize: '14px'}}>Termasuk Pajak</div>
                                            <div className="mb-0">
                                                <button type='button' onClick={() => doHandleSubmit(room.guest)} className="btn font-weight-bold btn-danger text-white">
                                                    Pesan Sekarang
                                                </button>
                                            </div>
                                        </>
                                        :
                                        <h6 className="font-weight-bold text-danger">Kamar tidak tersedia</h6>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal toggle={handleOpenRoom} isOpen={open} size="xl" styles={bg} >
                <ModalBody >
                    <div className="d-flex">
                        <div className="flex-1 col-8">
                            <h5 className="mt-2 text-primary font-weight-bold">{room.name} </h5>
                            <hr />
                            <Carousel>
                                {room?.detail[0]?.images?.map(item => (
                                    <div>
                                        <img src={item} />
                                    </div>
                                ))}
                            </Carousel>
                            <hr />
                            <div>
                                <span className='font-weight-bold'>Deskripsi Kamar</span>
                                <small dangerouslySetInnerHTML={{ __html: room.description }} className="pt-4"></small>
                            </div>
                        </div>
                        <div className="flex-1 col-4">
                            <div>
                                <div>
                                    <div>
                                        <span className='font-weight-bold'>Info Kamar </span>
                                        <p className="my-2" style={{ fontSize: '16px' }}>
                                            <Icon style={{ fontSize: '20px' }} icon="clarity:ruler-pencil-line" className="mr-2 text-primary" />
                                            <span style={{ fontSize: '16px' }}>{room?.roomSize}</span>
                                        </p>
                                        <p className="my-2" style={{ fontSize: '16px' }}>
                                            <Icon style={{ fontSize: '20px' }} icon="heroicons-outline:user-group" className="mr-2 text-primary" />
                                            <span style={{ fontSize: '16px' }}>{room?.guest} Tamu</span>
                                        </p>
                                   </div>
                                    <hr />
                                    <div>
                                        <span className='font-weight-bold'>Fitur Kamar yang Mungkin Anda Suka</span>
                                        <p className={`my-2 ${room?.breakfastIncluded ? 'text-success' : 'text-secondary'} ml-2 mr-2`}>
                                            <Icon icon="dashicons:food" className="mr-2" />{room?.breakfastIncluded ? 'Sarapan Gratis' : 'Tanpa Sarapan'}
                                        </p>
                                        <p className={`my-2 ${room?.wifiIncluded ? 'text-success' : 'text-secondary'} ml-2 mr-2`}>
                                            <Icon icon={WifiIcon} className="mr-2" />{room?.wifiIncluded ? 'WiFi Gratis' : 'Tidak Ada WiFi'}
                                        </p>
                                        <p className={`my-2 ${room?.smokingPreference ? 'text-success' : 'text-secondary'} ml-2 mr-2`}>
                                            <Icon icon={SmokingIcon} className="mr-2" /> {room?.smokingPreference === 'NON_SMOKING' ? 'Bebas Rokok' : 'Tidak Boleh Merokok'}
                                        </p>
                                    </div>
                                    <hr />
                                    <div>
                                        <span className='font-weight-bold'>Fasilitas Kamar</span>
                                        <div
                                            style={{
                                                display: '-webkit-box',
                                                WebkitBoxOrient: 'vertical',
                                                ...!moreFasilitasInfo && {
                                                    WebkitLineClamp: 5,
                                                    overflow: 'hidden'
                                                }
                                            }}
                                        >
                                            <ul>
                                                {room.detail[0].facilitiesNew?.map(item => (
                                                    <li key={item.id} style={{marginLeft: '-15px'}}>
                                                        <span className="pr-3">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        {room.detail[0].facilitiesNew?.map(item => (
                                            item
                                        )).toString().replaceAll(',', ', ').length > 75 &&
                                            <span onClick={() => setFasilitasInfo(v => !v)} style={{
                                                cursor: 'pointer',
                                                fontSize: '15px',
                                            }} className='font-weight-bold mt-2 text-info'>
                                                {!moreFasilitasInfo ? 'Lihat Semua' : 'Lihat Sedikit'}</span>
                                        }
                                    </div>
                                    <hr />
                                    <div>
                                        <span className='font-weight-bold'>mulai dari</span>
                                        <h5 className="mb-0 text-primary font-weight-bold">Rp {room.promoPrice.toLocaleString()} <small className="text-dark">/ kamar / malam</small></h5>
                                        <div className="mb-0 mt-3">
                                            <button onClick={() => doHandleSubmit(room.guest)} type='button' className="btn font-weight-bold btn-danger text-white">
                                                Pesan Sekarang
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </RootStyled >

    );
}

const RootStyled = styled.div`
border-radius:20px;
box-shadow: -1px 3px 11px -7px rgba(156,156,156,0.75);
`
const ImageStyled = styled.img`
border-radius:20px !important;
width:100%;
max-height:177px;
/* max-height:100%; */
min-height:100%; 
object-fit:cover;
`

const LabelView = styled.div`
	border-radius: 10px 0px 0px 10px;
	position: relative;
	margin-bottom: 5px;
	padding: 4px 10px;
	font-size: 14px;
    color:#fff;
    background-color:#dc3545;
    &::after {
	content: "";
	position: absolute;
	background: inherit;
	width: 10px;
	height: 10px;
	bottom: -5px;
	right: 0px;
	clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
}

`


export default CardProductHotel;