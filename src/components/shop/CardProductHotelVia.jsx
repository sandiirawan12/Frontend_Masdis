import styled from "styled-components";
import { Icon } from '@iconify/react'
import UserIcon from '@iconify/icons-fa-solid/user-friends'
import WifiIcon from '@iconify/icons-fa-solid/wifi'
import TvIcon from '@iconify/icons-fa-solid/tv'
import BathIcon from '@iconify/icons-fa-solid/bath';
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


function CardProductHotelVia(props) {
    const { room, options, hotelKey, dateTo, dateFrom, imgUtama, jmlRoom, detailVia } = props

    const auth = useSelector(state => state.auth)
    const { access_token } = useSelector(state => state.token)
    const dispatch = useDispatch()
    const router = useRouter()

    const [openModal, setOpenModal] = useState(false);
    const [roomSelected, setRoomSelected] = useState();

    const [open, setOpen] = useState(false);
    const handleOpenRoom = () => {
        setOpen(!open)
    }

    const bg = {
        overlay: {
            background: '#CCC'
        }
    };

    const handleOpenModal = (room) => {
        setRoomSelected(room)
        setOpenModal(open => !open)
    }

    const doHandleSubmit = (guest) => {
        if (process.env.NEXT_PUBLIC_HOTELEX_API_URL) {
            shopApi.getAvailHotelVia(access_token, {

                "product": 'hotel',
                "key": detailVia.key,
                "id": room.id,
                "option": room.id,
                "optionDetail": [room.id],
                // "productId": detailVia.id,
                // "dateFrom": dateFrom,
                // "dateTo": dateTo,
                // "pax": {
                //     "room": jmlRoom,
                //     "adult": options?.adult,
                //     "child": options?.child,
                //     "infant": options?.infant,
                //     "childAge": options?.childAge,
                //     numOfAdults: guest
                // },
                // "roomId": room.id,
                // "rateKey": room.detailId[0],
                // 'itineraryKey': room.id,
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
                    router.push(`checkoutvia?${queryString.stringify(
                        {
                            key: detailVia.key,
                            hotelId: options.productId,
                            option: room.id,
                            optionDetail: [room.id],
                        }
                    )}`)
                } else {
                    toast.error('Kamar ini tidak tersedia');
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
                    top: '8px'
                }} src="/assets/Icon/card-promo-new.png" alt="" />
            }
            <div className="card-body pl-2 py-2">
                <div className="row d-flex">
                    <div className="col-md-3 position-relative">
                        <ImageStyled src={imgUtama || 'https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/icon-no-image.svg'} onClick={() => handleOpenRoom()} />
                        {room?.roomSize &&
                            <div style={{ width: 'auto', height: '32px', background: '#f5f5f5', bottom: 0, left: '15px', borderBottomLeftRadius: '18px', borderTopRightRadius: '18px' }} className='position-absolute py-2 px-3 d-flex flex-row align-items-center'>
                                <img src="https://cdn.masterdiskon.com/masterdiskon/icon/fe/plans.png" style={{ width: '14px' }} alt="" className="mr-2" />
                                <small style={{ fontSize: '10px' }} className="font-weight-bold">{room?.roomSize}</small>
                            </div>
                        }
                    </div>
                    <div className="col-md-9 flex-1">
                        <div className="row">
                            <div className="col-md-8">
                                <h5 className="mt-2 text-primary font-weight-bold">{room.name} </h5>
                                <p className="mb-1 font-weight-bold">
                                    <Icon icon={UserIcon} className="mr-2" />
                                    {room?.guest} Tamu
                                    {room?.roomType &&
                                        <>
                                            <Icon icon={BedIcon} className="ml-5 mr-2" />
                                            {room?.roomType}
                                        </>
                                    }
                                </p>
                                <p className="mb-1" style={{
                                    display: '-webkit-box',
                                    WebkitLineClamp: '2',
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                }}>
                                    <em>
                                        {room.detail[0].facilities}
                                    </em>
                                </p>
                                <div >
                                    <span className={`mb-1 ${room.detail[0].facilities?.toLowerCase().includes('breakfast') ? 'text-primary' : 'text-grey'} ml-2 mr-2`} data-toggle="tooltip" data-placement="top" title="wifi">
                                        <Icon icon={SarapanIcon} /> {room.detail[0].facilities?.toLowerCase().includes('breakfast') ? 'Gratis' : 'Tanpa'} Sarapan
                                    </span>
                                    {/* <span className={`mb-1 ${room?.wifiIncluded ? 'text-primary' : 'text-grey'} ml-2 mr-2`} data-toggle="tooltip" data-placement="top" title="wifi">
                                        <Icon icon={WifiIcon} /> {room?.wifiIncluded ? '' : 'Tidak'} WiFi
                                    </span>
                                    <span className={`mb-1 ${room.detail[0].facilities?.toLowerCase().includes('televisi') ? 'text-primary' : 'text-grey'} ml-2 mr-2`} data-toggle="tooltip" data-placement="top" title="tv">
                                        <Icon icon={TvIcon} /> {room.detail[0].facilities?.toLowerCase().includes('televisi') ? '' : 'Tanpa'} TV </span>
                                    <span className={`mb-1 ${room.detail[0].facilities?.toLowerCase().includes('bathtub') ? 'text-primary' : 'text-grey'} ml-2 mr-2`} data-toggle="tooltip" data-placement="top" title="bath">
                                        <Icon icon={BathIcon} />  {room.detail[0].facilities?.toLowerCase().includes('bathtub') ? 'Bathtub' : 'Tidak Bathtub'}
                                    </span> */}

                                    <span className={`mb-1 ${room?.smokingPreference === 'NON_SMOKING' ? 'text-primary' : 'text-grey'} mb-1 `} data-toggle="tooltip" data-placement="top" title="tv">
                                        <Icon icon={room?.smokingPreference === 'NON_SMOKING' ? NoSmokingIcon : ''} /> {room?.smokingPreference === 'NON_SMOKING' ? ' Non Smoking' : ''}
                                    </span>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <div style={{ cursor: 'pointer' }} className="badge badge-danger mr-2" onClick={() => handleOpenModal(room)}>
                                        <div className="d-flex align-items-center">
                                            <img src="https://cdn.masterdiskon.com/masterdiskon/icon/fe/comment-question.png" style={{
                                                width: '18px', height: '18px'
                                            }} className='mr-1' />
                                            <span>Kebijakan Pembatalan</span>
                                        </div>
                                    </div>
                                    {room.detail[0].cancellationFreePolicyDisplay &&
                                        <div className="d-flex align-items-center">
                                            <img className="mr-1" style={{ width: '17px', height: '17px' }} src="https://cdn.masterdiskon.com/masterdiskon/icon/fe/info-blue.png" />
                                            <div className="text-primary font-italic" dangerouslySetInnerHTML={{ __html: room.detail[0].cancellationFreePolicyDisplay }}>
                                            </div>
                                        </div>
                                    }

                                </div>

                            </div>
                            <div className="col-md-4">
                                <div className=" text-right h-100 d-flex flex-column justify-content-center">
                                    {!room?.isFull ?
                                        <>
                                            <div className="mb-1"><small> {moment(toDate(dateTo)).diff(moment(toDate(dateFrom)), 'days')} night, {options.room} room</small></div>

                                            {room?.view &&
                                                <div>
                                                    <LabelView className="badge badge-danger">{room?.view}</LabelView>
                                                </div>
                                            }
                                            {(room?.priceNormal > room?.price) &&
                                                <h6 className="text-danger"><s>Rp{(parseInt(room.priceNormal) + parseInt(0)).toLocaleString()}</s></h6>
                                            }
                                            <h5 className="mb-0 text-primary font-weight-bold">Rp{(parseInt(room?.price) + parseInt(0)).toLocaleString()}</h5>
                                            <div className="mb-1"><small> Includes taxes and charges</small></div>
                                            <div className="mb-0">
                                                <button onClick={() => doHandleSubmit(room.guest)} type='button' className="btn font-weight-bold btn-warning">
                                                    Pesan sekarang
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

            <Modal isOpen={openModal} centered size='xl'>
                <ModalBody>
                    <h5 className="font-weight-bold mb-3">
                        Detail Biaya Pembatalan
                    </h5>
                    {roomSelected?.detail[0]?.cancelation?.length > 0 &&
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Nomor Kamar</th>
                                    <th>Tipe Kamar</th>
                                    <th>Dari Tanggal</th>
                                    <th>Sampai Tanggal</th>
                                    <th>Biaya Pembatalan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {roomSelected?.detail[0]?.cancelation?.map((item, index) => (
                                    <tr>
                                        <td>{++index}</td>
                                        <td>{roomSelected?.detail[0]?.name}</td>
                                        <td>{item.FromDate}</td>
                                        <td>{item.ToDate}</td>
                                        <td>Rp{Number(item.CancellationPrice).toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    }
                    <h6 className="text-center font-weight-bold">Informasi Penting (Essential Information)</h6>
                    <p className="text-center" dangerouslySetInnerHTML={{ __html: roomSelected?.detail[0]?.cancellationPolicyDisplay }}></p>
                    <div onClick={handleOpenModal} className="d-flex justify-content-center">
                        <button type="button" className="btn btn-warning">Tutup</button>
                    </div>
                </ModalBody>
            </Modal>

            <Modal toggle={handleOpenRoom} isOpen={open} size="xl" styles={bg} >
                <ModalBody >
                    <div className="d-flex">
                        <div className="flex-1 col-8">
                            {/* <Carousel>
                                {room?.detail[0]?.images?.map(item => (
                                    <div>
                                        <img src={item} />
                                    </div>
                                ))}
                            </Carousel> */}
                            <div>
                                <img src={imgUtama} />
                            </div>
                        </div>
                        <div className="flex-1 col-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="mt-2 text-primary font-weight-bold">{room.name} </h5>

                                    <hr />
                                    <small className='font-weight-bold'>Info Kamar </small>
                                    <p className="mb-1">
                                        <Icon icon={UserIcon} className="mr-2" />
                                        {room?.guest} Tamu
                                    </p>
                                    {room?.roomType &&
                                        <p className={`mb-1`}>
                                            <Icon icon={BedIcon} className="mr-2" />
                                            {room?.roomType}
                                        </p>
                                    }
                                    <p className={`mb-1 ${room.detail[0].facilities?.toLowerCase().includes('breakfast') ? 'text-primary' : 'text-danger'} mr-2`} data-toggle="tooltip" data-placement="top" title="wifi">
                                        <Icon icon={SarapanIcon} /> {room.detail[0].facilities?.toLowerCase().includes('breakfast') ? 'Gratis ' : ' Tanpa'} Sarapan
                                    </p>


                                    {/* <span className={`mb-1 ${room?.smokingPreference === 'NON_SMOKING' ? 'text-primary' : 'text-grey'} mb-1 `} data-toggle="tooltip" data-placement="top" title="tv">
                                            <Icon icon={room?.smokingPreference === 'NON_SMOKING' ? NoSmokingIcon : SmokingIcon} /> {room?.smokingPreference === 'NON_SMOKING' ? ' NON SMOKING' : '-'}   </span> */}

                                    <hr />
                                    <small className='font-weight-bold'>Fitur Kamar yang Mungkin Anda Suka</small>

                                    <p className="mb-1">
                                        {room.detail[0].facilities}
                                    </p>

                                    <hr />
                                    <small className='font-weight-bold'>mulai dari</small>
                                    <h5 className="mb-0 text-primary font-weight-bold">Rp{(parseInt(room?.price) + parseInt(0)).toLocaleString()}</h5>
                                    <div className="mb-1"><small>{options.room} Kamar {moment(toDate(dateTo)).diff(moment(toDate(dateFrom)), 'days')} malam</small></div>
                                    <div className="mb-0">
                                        <button onClick={() => doHandleSubmit(room.guest)} type='button' className="btn font-weight-bold btn-warning">
                                            Pesan sekarang
                                        </button>
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
box-shadow:2.5px 5px 15px -5px  rgba(0,0,0,.5);
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


export default CardProductHotelVia;