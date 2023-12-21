import { Icon } from '@iconify/react';
import styled from 'styled-components';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useReducer, useRef, useState, useId } from 'react';

const renderClass = (item) => {
    let arr = [];
    const rating = item.starRating; // Nilai rating, misalnya 3.5

    // Bagian integer dari rating
    const fullStars = Math.floor(rating);

    // Bagian desimal dari rating (untuk setengah bintang)
    const halfStar = rating - fullStars >= 0.5;

    // Membuat array untuk bintang-bintang penuh
    for (let index = 0; index < fullStars; index++) {
        arr[index] = index;
    }

    // Jika ada setengah bintang, tambahkan satu bintang setengah
    if (halfStar) {
        arr.push('half');
    }

    return arr.map((item, index) => (
        <div
            key={index}
            style={{ width: '22px', height: '22px', position: 'relative', display: 'inline-block' }}
        >
            {item === 'half' ? (
                <Icon style={{ fontSize: '22px' }} className='text-warning' icon="mdi:star-half"></Icon>
            ) : (
                <Icon style={{ fontSize: '22px' }} className='text-warning' icon="ic:sharp-star-rate"></Icon>
            )}
        </div>
    ));
};


const CardOuterCircle = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #1ba0e2;
    position: relative;
    left: 50px;
    top: 15px;
`

const CardInnerCircle = styled.div`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background-color: #235d9f;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px solid white;
`

const CardOuterCircle2 = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: white;
    box-shadow: -1px 3px 11px -7px rgba(156,156,156,0.75);
    position: relative;
`

const CardInnerCircle2 = styled.div`
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background-color: #f2f3f3;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
`

function HotelReview({ hotel }) {
    const [open, setOpen] = useState(false);
    const [imgSelected, setImgSelected] = useState();

    const handleOpen = (image) => {
        setOpen(!open)
        setImgSelected(image)
    }

    return (
        <div className="card" style={{ borderRadius: '20px', boxShadow: '-1px 3px 11px -7px rgba(156,156,156,0.75)' }}>
            <div className='p-4'>
                <h5 className='font-weight-bold'>
                    Review dari Tamu Lainnya
                </h5>
                <br />
                <div>
                    <span className='font-weight-bold'>
                        Rating & Review
                    </span>
                    <br />
                    <small>Dari {hotel?.reviewHotel?.totalAll} review tamu yang terverifikasi</small>
                </div>
                <div className='row my-4'>
                    <div className="col-3">
                        <CardOuterCircle>
                            <CardInnerCircle>
                                <span style={{ fontSize: '50px', color: 'white' }} className='font-weight-bold'>{hotel?.reviewHotel?.reviewScore}</span>
                            </CardInnerCircle>
                        </CardOuterCircle>
                    </div>
                    <div className="col-6">
                        <div className='row'>
                            <div className="col-md-3">
                                Fantastis
                            </div>
                            <div className="col-md-7">
                                <ProgressBar now={(hotel?.reviewHotel?.total_Fantastis / hotel?.reviewHotel?.totalAll) * 100} className='mt-1' />
                            </div>
                            <div className="col-md-2">
                                {hotel?.reviewHotel?.total_Fantastis}
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className="col-md-3">
                                Sangat Bagus
                            </div>
                            <div className="col-md-7">
                                <ProgressBar now={(hotel?.reviewHotel?.total_SangatBagus / hotel?.reviewHotel?.totalAll) * 100} className='mt-1' />
                            </div>
                            <div className="col-md-2">
                                {hotel?.reviewHotel?.total_SangatBagus}
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className="col-md-3">
                                Memuaskan
                            </div>
                            <div className="col-md-7">
                                <ProgressBar now={(hotel?.reviewHotel?.total_Memuaskan / hotel?.reviewHotel?.totalAll) * 100} className='mt-1' />
                            </div>
                            <div className="col-md-2">
                                {hotel?.reviewHotel?.total_Memuaskan}
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className="col-md-3">
                                Biasa
                            </div>
                            <div className="col-md-7">
                                <ProgressBar now={(hotel?.reviewHotel?.total_Biasa / hotel?.reviewHotel?.totalAll) * 100} className='mt-1' />
                            </div>
                            <div className="col-md-2">
                                {hotel?.reviewHotel?.total_Biasa}
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className="col-md-3">
                                Buruk
                            </div>
                            <div className="col-md-7">
                                <ProgressBar now={(hotel?.reviewHotel?.total_Buruk / hotel?.reviewHotel?.totalAll) * 100} className='mt-1' />
                            </div>
                            <div className="col-md-2">
                                {hotel?.reviewHotel?.total_Buruk}
                            </div>
                        </div>
                    </div>
                    <div className="col-3" style={{fontSize: '14px'}}>
                        <div className='row'>
                            <div className="col-md-5">
                                <span className='mt-1'>Kebersihan</span>
                            </div>
                            <div className="col-md-7">
                                {renderClass({ starRating: hotel?.reviewHotel?.kebersihan })}
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className="col-md-5">
                                <span className='mt-1'>Kenyamanan</span>
                            </div>
                            <div className="col-md-7">
                                {renderClass({ starRating: hotel?.reviewHotel?.kenyamanan })}
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className="col-md-5">
                                <span className='mt-1'>Makanan</span>
                            </div>
                            <div className="col-md-7">
                                {renderClass({ starRating: hotel?.reviewHotel?.makanan })}
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className="col-md-5">
                                <span className='mt-1'>Lokasi</span>
                            </div>
                            <div className="col-md-7">
                                {renderClass({ starRating: hotel?.reviewHotel?.lokasi })}
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className="col-md-5">
                                <span className='mt-1'>Pelayanan</span>
                            </div>
                            <div className="col-md-7">
                                {renderClass({ starRating: hotel?.reviewHotel?.pelayanan })}
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                {hotel?.reviewHotel?.reviewAll.map(item => (
                    <div className='card mt-3'>
                        <div className="row card-body">
                            <div className="col-md-3">
                                <div className="d-flex align-items-center">
                                    <CardOuterCircle2>
                                        <CardInnerCircle2>
                                            <span style={{ fontSize: '30px', color: '#1ba0e2' }} className='font-weight-bold'><Icon icon="ph:user-circle-duotone" /></span>
                                        </CardInnerCircle2>
                                    </CardOuterCircle2>
                                    <span className='ml-3 font-weight-bold'>{item.namaLengkap}</span>
                                </div>
                                <div className='mt-4 d-flex align-items-center'>
                                    <Icon icon="solar:bed-line-duotone" className='mr-2 text-primary' style={{ fontSize: '26px' }} /> {item.type}
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="d-flex align-items-center justify-content-between">
                                    <span style={{ fontSize: '16px', background: '#ecf8ff' }} className={`badge badge-lg text-secondary`}>
                                        <Icon icon="material-symbols:rewarded-ads-rounded" className='mr-2 text-primary' /> <span className='text-primary'>{item.reviewScore}</span> / 10
                                    </span>
                                    <div>
                                        {item.date}
                                    </div>
                                </div>
                                <p className='my-4' dangerouslySetInnerHTML={{ __html: item.content }}></p>
                                <div className='row' onClick={() => handleOpen(item.image)}>
                                    {item.image && item.image.length > 0 && (
                                        item.image.map((img, index) => (
                                            <div key={img.url} className="col-md-2" style={{cursor: "pointer"}}>
                                                {/* Pastikan bahwa properti url tersedia di setiap objek */}
                                                {img.url && (
                                                    <img
                                                        src={img.url}
                                                        alt="Gambar Masterdiskon"
                                                        style={{ width: '100px', height: '100px', borderRadius: '10px' }}
                                                    />
                                                )}
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <Modal id='carousel-image' toggle={handleOpen} isOpen={open} size="lg" >
                    <ModalBody className='position-relative'>
                        <Carousel>
                            {Array.isArray(imgSelected) && imgSelected.map(item => (
                                <div key={item.id}>
                                    <img src={item.url} alt={item.alt} />
                                </div>
                            ))}
                        </Carousel>
                    </ModalBody>
                </Modal>
            </div>
        </div>

    );
}

export default HotelReview;