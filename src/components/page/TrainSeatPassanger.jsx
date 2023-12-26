import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import userApi from '@/api/user';
import shopApi from '@/api/shop';
import moment from 'moment';
import { Icon } from '@iconify/react'
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { Swiper, SwiperSlide } from 'swiper/react';
import { toast } from 'react-toastify';

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
`;

const CardSeat = styled.div`
  width: 40px;
  height: 40px;
  padding: 8px;
  border: 1px solid #ddd;
  font-size: 12px;
  text-align: center;
  border-radius: 10px;
`;

function TrainSeatPassanger() {
    const { access_token } = useSelector(state => state.token)
    const router = useRouter()
    const [purchase, setPurchase] = useState();
    const [dataSeat, setDataSeat] = useState();
    const [dataSeatReturn, setDataSeatReturn] = useState();
    const [bookingDetailData, setBookingDetail] = useState();
    const [isOpenSeat, setIsOpenSeat] = useState(false)

    const user = useSelector(state => state.user);
    const [isFirstRender, setIsFirstRender] = useState(true);

    const [loading, setLoading] = useState(true);
    const [countDown, setCountDown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    const [isShowArray, setIsShowArray] = useState([]);
    const [isShowArrayReturn, setIsShowArrayReturn] = useState([]);

    const [seatRow, setSeatRow] = useState();
    const [seatRowReturn, setSeatRowReturn] = useState();
    const [seats, seatData] = useState({});
    const [selectedOption, setSelectedOption] = useState('');
    const [wagonSeats, setWagonSeats] = useState();
    const [dataSeats, setDataSeats] = useState();
    const [dataSeatsReturn, setDataSeatsReturn] = useState();
    const [isWagonSeatsDefault, setIsWagonSeatDefault] = useState(false);
    const [nextTrain, setNextTrain] = useState(0);

    const toggleShow = (id, data) => {
        setIsShowArray((prevArray) => {
            // Find the index of the clicked element
            const clickedIndex = prevArray.findIndex((show, i) => id === `eks-${i + 1}`);

            // Create a copy of the array
            const newArray = [...prevArray];

            // Toggle show state of clicked element
            newArray[clickedIndex] = !newArray[clickedIndex];

            if (newArray[clickedIndex] === false) {
                newArray[clickedIndex] = true;
            }

            // Hide all other divs (except clicked element)
            for (let i = 0; i < newArray.length; i++) {
                if (i !== clickedIndex) {
                    newArray[i] = false;
                }
            }

            setSeatRow(data)

            return newArray;
        });
    };

    const toggleShowReturn = (id, data) => {
        setIsShowArrayReturn((prevArray) => {
            // Find the index of the clicked element
            const clickedIndex = prevArray.findIndex((show, i) => id === `rtn-${i + 1}`);

            // Create a copy of the array
            const newArray = [...prevArray];

            // Toggle show state of clicked element
            newArray[clickedIndex] = !newArray[clickedIndex];

            if (newArray[clickedIndex] === false) {
                newArray[clickedIndex] = true;
            }

            // Hide all other divs (except clicked element)
            for (let i = 0; i < newArray.length; i++) {
                if (i !== clickedIndex) {
                    newArray[i] = false;
                }
            }

            setSeatRowReturn(data)

            return newArray;
        });
    };

    const handleSeatChoose = () => {
        setIsOpenSeat(prevState => !prevState)
    }

    const handleOptionChange = (index, i, seatRow, seats) => {
        setSelectedOption(index);

        if (nextTrain === 0) {
            if (
                bookingDetailData &&
                bookingDetailData.journeys &&
                bookingDetailData.journeys[0] &&
                Array.isArray(bookingDetailData.journeys[0].seat)
            ) {
                const selectedIndex = index;

                const selectedSeat = bookingDetailData.journeys[0].seat[selectedIndex];

                // Check if the selectedSeat is an object or an array to spread properly
                const updatedSeats_1 = Array.isArray(selectedSeat)
                    ? [...selectedSeat]
                    : selectedSeat
                        ? { ...selectedSeat }
                        : null;

                if (updatedSeats_1) {
                    const newData = {
                        passenger_fullname: i.passenger_fullname,
                        wagon_code: seatRow.wagon_code,
                        wagon_no: String(seatRow.wagon_no),
                        seat_number: seats.seat_no,
                        seat_id_new: seats.seat_id
                    };

                    // Update data dalam array wagon_seats
                    const updatedWagonSeats = bookingDetailData?.journeys[0].seat.map((seat, index) => {
                        if (index === selectedIndex) {
                            return newData; // Mengganti data dengan data yang baru pada index 1
                        }

                        const seatDataAll = dataSeats.find(data => data.wagon_no == seat.wagon_no);
                        const seatDataUpdateAll = seatDataAll?.seat.find(data => data.seat_no === seat.seat_number);

                        return {
                            passenger_fullname: seat.passenger_fullname,
                            wagon_code: seat.wagon_code,
                            wagon_no: seat.wagon_no,
                            seat_number: seat.seat_number,
                            seat_id_new: seat.seat_id_new || seatDataUpdateAll.seat_id,
                        };
                    });

                    setWagonSeats(updatedWagonSeats)
                } else {
                    console.error('Data kursi yang dipilih pada indeks tidak valid:', selectedIndex);
                }
            } else {
                console.error('Struktur data tidak valid atau data yang diperlukan tidak ada');
            }
        } else {
            if (
                bookingDetailData &&
                bookingDetailData.journeys &&
                bookingDetailData.journeys[1] &&
                Array.isArray(bookingDetailData.journeys[1].seat)
            ) {
                const selectedIndex = index;

                const selectedSeat = bookingDetailData.journeys[1].seat[selectedIndex];

                // Check if the selectedSeat is an object or an array to spread properly
                const updatedSeats_1 = Array.isArray(selectedSeat)
                    ? [...selectedSeat]
                    : selectedSeat
                        ? { ...selectedSeat }
                        : null;

                if (updatedSeats_1) {
                    const newData = {
                        passenger_fullname: i.passenger_fullname,
                        wagon_code: seatRow.wagon_code,
                        wagon_no: String(seatRow.wagon_no),
                        seat_number: seats.seat_no,
                        seat_id_new: seats.seat_id
                    };

                    // Update data dalam array wagon_seats
                    const updatedWagonSeats = bookingDetailData?.journeys[1].seat.map((seat, index) => {
                        if (index === selectedIndex) {
                            return newData; // Mengganti data dengan data yang baru pada index 1
                        }

                        const seatDataAll = dataSeatsReturn.find(data => data.wagon_no == seat.wagon_no);
                        const seatDataUpdateAll = seatDataAll?.seat.find(data => data.seat_no === seat.seat_number);

                        return {
                            passenger_fullname: seat.passenger_fullname,
                            wagon_code: seat.wagon_code,
                            wagon_no: seat.wagon_no,
                            seat_number: seat.seat_number,
                            seat_id_new: seat.seat_id_new || seatDataUpdateAll.seat_id,
                        };
                    });

                    setWagonSeats(updatedWagonSeats)
                } else {
                    console.error('Data kursi yang dipilih pada indeks tidak valid:', selectedIndex);
                }
            } else {
                console.error('Struktur data tidak valid atau data yang diperlukan tidak ada');
            }
        }
    };

    const handleSeatDefault = async (purchase) => {
        if (nextTrain === 0) {
            const updatedWagonSeats = purchase.guest.map((seat, index) => {
                const seatDataAll = dataSeats.find(data => data.wagon_no == seat.departure.wagon_no);
                const seatDataUpdateAll = seatDataAll?.seat.find(data => data.seat_no === seat.departure.seat_number);

                return {
                    passenger_fullname: seat.firstName,
                    wagon_code: seat.departure.wagon_code,
                    wagon_no: seat.departure.wagon_no,
                    seat_number: seat.departure.seat_number,
                    seat_id_new: seat.seat_id_new || seatDataUpdateAll.seat_id,
                };
            });

            setWagonSeats(updatedWagonSeats);
            setIsWagonSeatDefault(true);
        } else {
            const updatedWagonSeats = purchase.guest.map((seat, index) => {
                const seatDataAll = dataSeatsReturn.find(data => data.wagon_no == seat.return.wagon_no);
                const seatDataUpdateAll = seatDataAll?.seat.find(data => data.seat_no === seat.return.seat_number);

                return {
                    passenger_fullname: seat.firstName,
                    wagon_code: seat.return.wagon_code,
                    wagon_no: seat.return.wagon_no,
                    seat_number: seat.return.seat_number,
                    seat_id_new: seat.seat_id_new || seatDataUpdateAll.seat_id,
                };
            });

            setWagonSeats(updatedWagonSeats);
            setIsWagonSeatDefault(true);
        }
    };

    const handleNextTrain = (index) => {
        setNextTrain(index)
    }

    useEffect(() => {
        if (isWagonSeatsDefault) {
            // Lakukan logika setelah wagonSeats ter-update di sini
            Swal.fire({
                icon: 'info',
                title: 'Informasi Kursi',
                text: 'Kursi akan di set default, Ingin lanjut?',
                allowOutsideClick: false,
                confirmButtonColor: '#0070ba',
                confirmButtonText: 'Ya, Lanjut',
            }).then(respon => {
                if (respon.isConfirmed) {
                    confirmSimpanSeat();
                }
            });
        }
    }, [isWagonSeatsDefault]);

    useEffect(() => {
        if (purchase) {
            // setInterval(() => {
            //     const time = Date.parse(moment(purchase?.status?.timelimit5Menit, 'DD MMM YYYY HH:mm').toDate()) - Date.parse(new Date());
            //     if (time < 0) {
            //         setCountDown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            //     } else {
            //         const seconds = Math.floor((time / 1000) % 60);
            //         const minutes = Math.floor((time / 1000 / 60) % 60);
            //         const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            //         const days = Math.floor(time / (1000 * 60 * 60 * 24));
            //         setCountDown({ days, hours, minutes, seconds });
            //     }
            // }, 1000)

            const time = Date.parse(moment(purchase?.status?.timelimit5Menit, 'DD MMM YYYY HH:mm').toDate()) - Date.parse(new Date());
            if (time < 0) {
                setCountDown({ days: 0, hours: 0, minutes: 0, seconds: 0 });

                setTimeout(() => {
                    Swal.fire({
                        title: "Waktu Habis",
                        text: "Waktu yang di sediakan untuk pemilihan kursi sudah habis, silahkan lanjut ke halaman pembayaran",
                        icon: "info",
                        allowOutsideClick: false
                    }).then(function (isConfirm) {
                        router.push('/user/purchase/detail/12569');
                    });
                }, 1000);
            } else {
                const seconds = Math.floor((time / 1000) % 60);
                const minutes = Math.floor((time / 1000 / 60) % 60);
                const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
                const days = Math.floor(time / (1000 * 60 * 60 * 24));
                setCountDown({ days, hours, minutes, seconds });
            }
        }
    }, [purchase])

    useEffect(() => {
        setLoading(true)
        if (router.isReady) {
            userApi.getPurchase(access_token, { key: router.query.id }).then(res => {
                if (res.success) {
                    setPurchase(res.data)

                    const responseData = res.data

                    userApi.getBookingDetailSeat(access_token, responseData.kodeBooking).then(res => {
                        if (res.status.code === 200) {
                            setBookingDetail(res.data)

                            if (isFirstRender) {
                                const req = {
                                    "origin": res.data.origin,
                                    "destination": res.data.destination,
                                    "departure_date": responseData.bookingDetail.departure_date,
                                    "train_no": responseData.options.dataSchedule.no_kereta,
                                    "subclass": responseData.options.dataSchedule.tipe_kereta,
                                    "segment_code": res.data.journeys[0].segment_code
                                }

                                userApi.getSeatKAI(access_token, req).then(res => {
                                    if (res.status.code === 200) {
                                        setDataSeat(res.data)
                                        setIsShowArray(res.data.seat_maps.map((row) =>
                                            row.length > 0
                                        ));
                                        toggleShow('eks-1', res.data.seat_maps[0])
                                        
                                        setDataSeats(res.data.seat_maps)
                                    }
                                })

                                // ====== DATA SEAT RETURN ========
                                const reqReturn = {
                                    "origin": res.data.destination,
                                    "destination": res.data.origin,
                                    "departure_date": responseData.bookingDetail.return_date,
                                    "train_no": responseData.options.dataScheduleReturn.no_kereta,
                                    "subclass": responseData.options.dataScheduleReturn.tipe_kereta,
                                    "segment_code": res.data.journeys[1].segment_code
                                }

                                userApi.getSeatKAI(access_token, reqReturn).then(res => {
                                    if (res.status.code === 200) {
                                        setDataSeatReturn(res.data)
                                        setIsShowArrayReturn(res.data.seat_maps.map((row) =>
                                            row.length > 0
                                        ));
                                        toggleShowReturn('rtn-1', res.data.seat_maps[0])

                                        setDataSeatsReturn(res.data.seat_maps)

                                        setLoading(false)
                                    }
                                })
                                setIsFirstRender(false);
                            }
                        }
                    })
                }
            })
        }
    }, [router.query.id])

    if (loading) {
        return <div style={{
            height: '50vh',
            marginBottom: '5rem'
        }} className="d-flex flex-column align-items-center justify-content-center">
            <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/pulse-spinner.svg" />
            <h4>Sedang menyiapkan data...</h4>
        </div>
    }
    if (!purchase) {
        return <div style={{
            height: '50vh',
            marginBottom: '5rem'
        }} className="d-flex flex-column align-items-center justify-content-center">
            {/* <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/pulse-spinner.svg" /> */}
            <h4>Data pesanan tidak ditemukan</h4>
        </div>
    }

    if (Date.now() > Date.parse(purchase?.status?.timelimitDate)) {
        return Swal.fire({
            title: "Apakah Anda sudah yakin?",
            text: "Dengan menyetujuinya, Anda yakin untuk melanjutkan pemesanan ini.",
            icon: "info",
            buttons: [
                'Tidak, batalkan!',
                'Ya, saya yakin!'
            ],
            dangerMode: false,
        }).then(function (isConfirm) {
            window.location.reload();
        });
    }

    // Generate seat numbers dari kombinasi baris dan kolom
    const rows = seatRow?.total_row;
    const columns = seatRow?.detail_col;

    const generatedSeats = [];
    for (let i = 1; i <= rows; i++) {
        for (const col of columns) {
            generatedSeats.push(`${i}${col}`);
        }
    }

    const tableCells = [];
    for (let i = 0; i < rows; i++) {
        tableCells.push(
            <td key={i}>
                <CardSeat className="mr-2" style={{ border: 'none' }}>
                    <span>{i + 1}</span>
                </CardSeat>
            </td>
        );
    }

    const updatedSeats = generatedSeats.map(seat => {
        const seatData = seatRow?.seat.find(data => data.seat_no === seat);

        if (seatData) {
            bookingDetailData?.journeys[0].seat.forEach(booking => {
                const bookedSeatNumber = booking?.seat_number;
                const bookedSeatCode = booking?.wagon_code;
                const bookedSeatNo = booking?.wagon_no;

                if (
                    seatData.seat_no == bookedSeatNumber &&
                    seatRow?.wagon_code == bookedSeatCode &&
                    seatRow?.wagon_no == bookedSeatNo
                ) {
                    seatData.seat_status = 2; // Ubah status kursi dari seatData
                }
            });
            return seatData; // Kembalikan seatData yang telah dimodifikasi
        } else {
            return {
                seat_no: seat,
                seat_status: 3 // Menunjukkan bahwa kursi tidak ada dalam data JSON
            };
        }
    });

    // ============
    const rowsReturn = seatRowReturn?.total_row;
    const columnsReturn = seatRowReturn?.detail_col;

    const generatedSeatsReturn = [];
    for (let i = 1; i <= rowsReturn; i++) {
        for (const col of columnsReturn) {
            generatedSeatsReturn.push(`${i}${col}`);
        }
    }

    const tableCellsReturn = [];
    for (let i = 0; i < rowsReturn; i++) {
        tableCellsReturn.push(
            <td key={i}>
                <CardSeat className="mr-2" style={{ border: 'none' }}>
                    <span>{i + 1}</span>
                </CardSeat>
            </td>
        );
    }

    const updatedSeatsReturn = generatedSeatsReturn.map(seat => {
        const seatDataReturn = seatRowReturn?.seat.find(data => data.seat_no === seat);

        if (seatDataReturn) {
            bookingDetailData?.journeys[1].seat.forEach(booking => {
                const bookedSeatNumber = booking?.seat_number;
                const bookedSeatCode = booking?.wagon_code;
                const bookedSeatNo = booking?.wagon_no;

                if (
                    seatDataReturn.seat_no == bookedSeatNumber &&
                    seatRowReturn?.wagon_code == bookedSeatCode &&
                    seatRowReturn?.wagon_no == bookedSeatNo
                ) {
                    seatDataReturn.seat_status = 2; // Ubah status kursi dari seatData
                }
            });
            return seatDataReturn; // Kembalikan seatData yang telah dimodifikasi
        } else {
            return {
                seat_no: seat,
                seat_status: 3 // Menunjukkan bahwa kursi tidak ada dalam data JSON
            };
        }
    });

    const changeSeatStatus = (dSeat) => {
        if (dSeat.seat_status === 1) {
            toast.error(`Kursi ini telah dipesan`)
        } else if (dSeat.seat_status === 2) {
            toast.info(`Kursi ini telah anda pilih`)
        } else {
            handleSeatChoose()
            seatData(dSeat)
        }
    };

    const confirmSimpanSeat = async () => {
        if (!wagonSeats) {
            toast.error('Anda belum memilih yang ingin pindah seat');
            return; // Mengembalikan fungsi jika tidak ada wagonSeats
        }

        try {
           if (nextTrain === 0) {
               const req = {
                   "booking_no": purchase?.kodeBooking,
                   "seat_requests": [
                       {
                           "booking_code": bookingDetailData.journeys[0].booking_code,
                           "wagon_seats": wagonSeats
                       }
                   ]
               };

               const res = await shopApi.updateSeat(access_token, req);
               if (res.status.code === 200) {
                   toast.success('Seat berhasil diubah');
                   window.location.reload();

                   handleNextTrain(0)
               } else {
                   toast.error('Seat tidak berhasil diubah');
               }
           } else {
               const req = {
                   "booking_no": purchase?.kodeBooking,
                   "seat_requests": [
                       {
                           "booking_code": bookingDetailData.journeys[1].booking_code,
                           "wagon_seats": wagonSeats
                       }
                   ]
               };

               const res = await shopApi.updateSeat(access_token, req);
               if (res.status.code === 200) {
                   toast.success('Seat berhasil diubah');
                   window.location.reload();

                   handleNextTrain(1)
               } else {
                   toast.error('Seat tidak berhasil diubah');
               }
           }
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
            toast.error('Terjadi kesalahan saat mengubah seat');
        }
    };

    return (
        <>
            {(moment(Date()).isBefore(moment(purchase?.status?.timelimit5Menit, 'DD MMM YYYY HH:mm')) && purchase.status.id === 3) && (
                <section id="timer" className="bg-danger py-2">
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center">
                            <span className="mr-3 text-white">Waktu Pemilihan Kursi</span>
                            <span id="hitungmundur" className="d-flex"><div className="rounded bg-light opacity-50 border border-dark text-center p-1 mr-2"><b><span className="angka">{countDown.hours}</span></b> h </div><div className="rounded bg-white opacity-50 border border-dark text-center p-1 mr-2"><b><span className="angka">{countDown.minutes}</span></b> m </div><div className="rounded bg-white opacity-50 border border-dark text-center p-1 mr-2"><b><span className="angka">{countDown.seconds}</span></b> s </div></span>
                        </div>
                    </div>
                </section>
            )}

            <section className="my-3">
                <div className="container">
                    <h4 className="font-weight-bold mt-5 mb-3">Pilih Kursi</h4>
                    <div className="row">
                        <div className="col-md-8">
                            {nextTrain === 0 ?
                                <>
                                    <Swiper slidesPerView={3.5} style={{ padding: '0 0 10px 0' }} spaceBetween={10}>
                                        {dataSeat?.seat_maps.map((row) => (
                                            <SwiperSlide >
                                                <div className={`card ${isShowArray[row.wagon_no - 1] ? 'border border-primary' : ''}`} style={{
                                                    borderRadius: '20px',
                                                    cursor: 'pointer',
                                                }} onClick={() => toggleShow(`eks-${row.wagon_no}`, row)}>
                                                    <div className="card-body">
                                                        <center>
                                                            <b>{row.wagon_code} {row.wagon_no}</b> <br />
                                                            <small>Tersedia {row.available_seat} Kursi</small>
                                                        </center>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                    <div className='row'>
                                        {bookingDetailData?.journeys[0].seat.map((i, index) => (
                                            <div className="col-md-3" key={index}>
                                                <div className="card border" style={{
                                                    borderRadius: '10px',
                                                }}>
                                                    <div className="row">
                                                        <div className='col-md-4 bg-primary' style={{
                                                            borderRadius: '10px',
                                                        }}>
                                                            <p style={{ fontSize: '27px', marginTop: '20px' }} className='text-white '>{`P${index + 1}`}</p>
                                                        </div>
                                                        <div className='col-md-8'>
                                                            <p style={{ fontSize: '12px' }} className='mt-2 mb-0 font-weight-bold'>
                                                                {i.passenger_fullname}
                                                            </p>
                                                            <p className='mb-2' style={{ fontSize: '12px' }}>{i.wagon_code} {i.wagon_no} - {i.seat_number}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className='mt-3' style={{ overflow: 'auto' }}>
                                        <table>
                                            <tbody>
                                                {seatRow?.left_col.map((item) => (
                                                    <tr key={item} style={{ width: "20%" }}>
                                                        <td>
                                                            <CardSeat className="mr-2" style={{ border: "none" }}>
                                                                <span>{item}</span>
                                                            </CardSeat>
                                                        </td>
                                                        {updatedSeats
                                                            .filter((seat) => seat.seat_no.includes(item))
                                                            .map((dSeat) => (
                                                                <td key={dSeat.seat_no}>
                                                                    {dSeat.seat_status === 3 ?
                                                                        <></>
                                                                        :
                                                                        <CardSeat
                                                                            className="mr-2"
                                                                            style={{
                                                                                cursor: "pointer",
                                                                                background: (
                                                                                    dSeat.seat_status === 0
                                                                                        ? "#fff"
                                                                                        : dSeat.seat_status === 1
                                                                                            ? "#dfdfdf"
                                                                                            : dSeat.seat_status === 2
                                                                                                ? "#007bff"
                                                                                                : ""
                                                                                ),
                                                                            }}
                                                                            onClick={() => changeSeatStatus(dSeat)}
                                                                        >
                                                                            <p>{dSeat.seat_no}</p>
                                                                        </CardSeat>
                                                                    }
                                                                </td>
                                                            ))}
                                                    </tr>
                                                ))}
                                                <tr>
                                                    <CardSeat style={{ border: 'none' }} />
                                                    {tableCells}
                                                </tr>
                                                {seatRow?.right_col.map((item) => (
                                                    <tr key={item} style={{ width: "20%" }}>
                                                        <td>
                                                            <CardSeat className="mr-2" style={{ border: "none" }}>
                                                                <span>{item}</span>
                                                            </CardSeat>
                                                        </td>
                                                        {updatedSeats
                                                            .filter((seat) => seat.seat_no.includes(item))
                                                            .map((dSeat) => (
                                                                <td key={dSeat.seat_no}>
                                                                    {dSeat.seat_status === 3 ?
                                                                        <></>
                                                                        :
                                                                        <CardSeat
                                                                            className="mr-2"
                                                                            style={{
                                                                                cursor: "pointer",
                                                                                background: (
                                                                                    dSeat.seat_status === 0
                                                                                        ? "#fff"
                                                                                        : dSeat.seat_status === 1
                                                                                            ? "#dfdfdf"
                                                                                            : dSeat.seat_status === 2
                                                                                                ? "#007bff"
                                                                                                : ""
                                                                                ),
                                                                            }}
                                                                            onClick={() => changeSeatStatus(dSeat)}
                                                                        >
                                                                            <p>{dSeat.seat_no}</p>
                                                                        </CardSeat>
                                                                    }
                                                                </td>
                                                            ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </>
                                :
                                <>
                                    <Swiper slidesPerView={3.5} style={{ padding: '0 0 10px 0' }} spaceBetween={10}>
                                        {dataSeatReturn?.seat_maps.map((row) => (
                                            <SwiperSlide >
                                                <div className={`card ${isShowArrayReturn[row.wagon_no - 1] ? 'border border-primary' : ''}`} style={{
                                                    borderRadius: '20px',
                                                    cursor: 'pointer',
                                                }} onClick={() => toggleShowReturn(`rtn-${row.wagon_no}`, row)}>
                                                    <div className="card-body">
                                                        <center>
                                                            <b>{row.wagon_code} {row.wagon_no}</b> <br />
                                                            <small>Tersedia {row.available_seat} Kursi</small>
                                                        </center>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                    <div className='row'>
                                        {bookingDetailData?.journeys[1].seat.map((i, index) => (
                                            <div className="col-md-3" key={index}>
                                                <div className="card border" style={{
                                                    borderRadius: '10px',
                                                }}>
                                                    <div className="row">
                                                        <div className='col-md-4 bg-primary' style={{
                                                            borderRadius: '10px',
                                                        }}>
                                                            <p style={{ fontSize: '27px', marginTop: '20px' }} className='text-white '>{`P${index + 1}`}</p>
                                                        </div>
                                                        <div className='col-md-8'>
                                                            <p style={{ fontSize: '12px' }} className='mt-2 mb-0 font-weight-bold'>
                                                                {i.passenger_fullname}
                                                            </p>
                                                            <p className='mb-2' style={{ fontSize: '12px' }}>{i.wagon_code} {i.wagon_no} - {i.seat_number}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className='mt-3' style={{ overflow: 'auto' }}>
                                        <table>
                                            <tbody>
                                                {seatRowReturn?.left_col?.map((item) => (
                                                    <tr key={item} style={{ width: "20%" }}>
                                                        <td>
                                                            <CardSeat className="mr-2" style={{ border: "none" }}>
                                                                <span>{item}</span>
                                                            </CardSeat>
                                                        </td>
                                                        {updatedSeatsReturn
                                                            .filter((seat) => seat.seat_no.includes(item))
                                                            .map((dSeat) => (
                                                                <td key={dSeat.seat_no}>
                                                                    {dSeat.seat_status === 3 ?
                                                                        <></>
                                                                        :
                                                                        <CardSeat
                                                                            className="mr-2"
                                                                            style={{
                                                                                cursor: "pointer",
                                                                                background: (
                                                                                    dSeat.seat_status === 0
                                                                                        ? "#fff"
                                                                                        : dSeat.seat_status === 1
                                                                                            ? "#dfdfdf"
                                                                                            : dSeat.seat_status === 2
                                                                                                ? "#007bff"
                                                                                                : ""
                                                                                ),
                                                                            }}
                                                                            onClick={() => changeSeatStatus(dSeat)}
                                                                        >
                                                                            <p>{dSeat.seat_no}</p>
                                                                        </CardSeat>
                                                                    }
                                                                </td>
                                                            ))}
                                                    </tr>
                                                ))}
                                                <tr>
                                                    <CardSeat style={{ border: 'none' }} />
                                                    {tableCellsReturn}
                                                </tr>
                                                {seatRowReturn?.right_col?.map((item) => (
                                                    <tr key={item} style={{ width: "20%" }}>
                                                        <td>
                                                            <CardSeat className="mr-2" style={{ border: "none" }}>
                                                                <span>{item}</span>
                                                            </CardSeat>
                                                        </td>
                                                        {updatedSeatsReturn
                                                            .filter((seat) => seat.seat_no.includes(item))
                                                            .map((dSeat) => (
                                                                <td key={dSeat.seat_no}>
                                                                    {dSeat.seat_status === 3 ?
                                                                        <></>
                                                                        :
                                                                        <CardSeat
                                                                            className="mr-2"
                                                                            style={{
                                                                                cursor: "pointer",
                                                                                background: (
                                                                                    dSeat.seat_status === 0
                                                                                        ? "#fff"
                                                                                        : dSeat.seat_status === 1
                                                                                            ? "#dfdfdf"
                                                                                            : dSeat.seat_status === 2
                                                                                                ? "#007bff"
                                                                                                : ""
                                                                                ),
                                                                            }}
                                                                            onClick={() => changeSeatStatus(dSeat)}
                                                                        >
                                                                            <p>{dSeat.seat_no}</p>
                                                                        </CardSeat>
                                                                    }
                                                                </td>
                                                            ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </>
                            }
                            <div className="mt-3">
                                <div className='d-flex justify-content-center'>
                                    <div className='mr-3'>
                                        <center>
                                            <CardSeat style={{ background: '#007bff' }} />
                                            <p className='mt-2'>Aktif</p>
                                        </center>
                                    </div>
                                    <div className='mr-3'>
                                        <center>
                                            <CardSeat style={{ background: '#fff' }} />
                                            <p className='mt-2'>Tersedia</p>
                                        </center>
                                    </div>
                                    <div className='mr-3'>
                                        <center>
                                            <CardSeat style={{ background: '#dfdfdf' }} />
                                            <p className='mt-2'>Terisi</p>
                                        </center>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="d-flex align-items-center justify-content-end mt-3">
                                {nextTrain === 0 ?
                                    <>
                                        <button className='btn btn-warning mr-3' onClick={() => handleSeatDefault(purchase)}>
                                            Kembalikan ke kursi awal
                                        </button>
                                        {purchase?.bookingDetail?.journey_type === 'RT' ?
                                            <>
                                                <button className='btn btn-primary' onClick={() => handleNextTrain(1)}>
                                                    Next Train
                                                </button>
                                            </>
                                            :
                                            <>
                                                <button className='btn btn-primary'>
                                                    Lanjut
                                                </button>
                                            </>
                                        }
                                    </>
                                    :
                                    <>
                                        <button className='btn btn-warning mr-3' onClick={() => handleSeatDefault(purchase)}>
                                            Kembalikan ke kursi awal
                                        </button>
                                        {purchase?.bookingDetail?.journey_type === 'RT' ?
                                            <>
                                                <button className='btn btn-danger mr-3' onClick={() => handleNextTrain(0)}>
                                                    Back Train
                                                </button>
                                                <button className='btn btn-primary'>
                                                    Lanjut
                                                </button>
                                            </>
                                            :
                                            <>
                                                <button className='btn btn-primary'>
                                                    Lanjut
                                                </button>
                                            </>
                                        }
                                    </>
                                }
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-3" style={{
                                borderRadius: '20px',
                                boxShadow: '-1px 3px 11px -7px rgba(156,156,156,0.75)',
                            }}>
                                {purchase?.bookingDetail?.journey_type === 'OW' ?
                                    <>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="d-flex align-items-center">
                                                        <Icon icon='pepicons-print:train' className="text-info mr-3 mt-2" style={{ fontSize: '30px' }}></Icon>

                                                        <span className="font-weight-bold">{purchase.options?.dataSchedule?.stasiun_awal}</span>
                                                        <Icon icon='fluent:arrow-swap-28-filled' className="text-primary mx-3" style={{ fontSize: '20px' }}></Icon>
                                                        <span className="font-weight-bold">{purchase.options?.dataSchedule?.stasiun_akhir}</span>
                                                    </div>

                                                    <hr />

                                                    <div>
                                                        <p className="font-weight-bold">Departure <br />
                                                            <small>
                                                                {purchase.options?.dataSchedule?.tgl_keberangkatan}
                                                            </small>
                                                        </p>
                                                    </div>

                                                    <div className="mt-3">
                                                        <p className="font-weight-bold">{purchase.options?.dataSchedule?.nama_kereta} ({purchase.options?.dataSchedule?.no_kereta}) <br />
                                                            <small>
                                                                {purchase.options?.dataSchedule?.kelas_kereta} (Subclass {purchase.options?.dataSchedule?.tipe_kereta})
                                                            </small>
                                                        </p>
                                                    </div>

                                                    <TimeLineStyled className="mb-2">
                                                        <>
                                                            <li>
                                                                <p className="mb-0">
                                                                    <b className="mr-2">{purchase.options?.dataSchedule?.waktu_keberangkatan}</b> <br />
                                                                    <small>{purchase.options?.dataSchedule?.asal_kota}, {purchase.options?.dataSchedule?.stasiun_awal} Station</small>
                                                                </p>
                                                                <p className="pt-3"><Icon icon='pepicons-print:rewind-time' className="mr-2 text-primary" />{purchase.options?.dataSchedule?.durasi_perjalanan}</p>
                                                            </li>
                                                            <li className>
                                                                <p className="mb-0">
                                                                    <b className="mr-2">{purchase.options?.dataSchedule?.waktu_tiba}</b><br />
                                                                    <small>{purchase.options?.dataSchedule?.tujuan}, {purchase.options?.dataSchedule?.stasiun_akhir} Station</small>
                                                                </p>
                                                            </li>
                                                        </>
                                                    </TimeLineStyled>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    : ''
                                }
                                {purchase?.bookingDetail?.journey_type === 'RT' ?
                                    <>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="d-flex align-items-center">
                                                        <Icon icon='pepicons-print:train' className="text-info mr-3 mt-2" style={{ fontSize: '30px' }}></Icon>

                                                        <span className="font-weight-bold">{purchase.options?.dataSchedule?.stasiun_awal}</span>
                                                        <Icon icon='fluent:arrow-swap-28-filled' className="text-primary mx-3" style={{ fontSize: '20px' }}></Icon>
                                                        <span className="font-weight-bold">{purchase.options?.dataSchedule?.stasiun_akhir}</span>
                                                    </div>

                                                    <hr />

                                                    <div>
                                                        <p className="font-weight-bold">Departure <br />
                                                            <small>
                                                                {purchase.options?.dataSchedule?.tgl_keberangkatan}
                                                            </small>
                                                        </p>
                                                    </div>

                                                    <div className="mt-3">
                                                        <p className="font-weight-bold">{purchase.options?.dataSchedule?.nama_kereta} ({purchase.options?.dataSchedule?.no_kereta}) <br />
                                                            <small>
                                                                {purchase.options?.dataSchedule?.kelas_kereta} (Subclass {purchase.options?.dataSchedule?.tipe_kereta})
                                                            </small>
                                                        </p>
                                                    </div>

                                                    <TimeLineStyled className="mb-2">
                                                        <>
                                                            <li>
                                                                <p className="mb-0">
                                                                    <b className="mr-2">{purchase.options?.dataSchedule?.waktu_keberangkatan}</b><br />
                                                                    <small>{purchase.options?.dataSchedule?.asal_kota}, {purchase.options?.dataSchedule?.stasiun_awal} Station</small>
                                                                </p>
                                                                <p className="pt-3"><Icon icon='pepicons-print:rewind-time' className="mr-2 text-primary" />{purchase.options?.dataSchedule?.durasi_perjalanan}</p>
                                                            </li>
                                                            <li className>
                                                                <p className="mb-0">
                                                                    <b className="mr-2">{purchase.options?.dataSchedule?.waktu_tiba}</b><br />
                                                                    <small>{purchase.options?.dataSchedule?.tujuan}, {purchase.options?.dataSchedule?.stasiun_akhir} Station</small>
                                                                </p>
                                                            </li>
                                                        </>
                                                    </TimeLineStyled>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <hr />
                                                    <div className="d-flex align-items-center">
                                                        <Icon icon='pepicons-print:train' className="text-danger mr-3 mt-2" style={{ fontSize: '30px' }}></Icon>

                                                        <span className="font-weight-bold">{purchase.options?.dataScheduleReturn?.stasiun_awal}</span>
                                                        <Icon icon='fluent:arrow-swap-28-filled' className="text-primary mx-3" style={{ fontSize: '20px' }}></Icon>
                                                        <span className="font-weight-bold">{purchase.options?.dataScheduleReturn?.stasiun_akhir}</span>
                                                    </div>

                                                    <hr />

                                                    <div>
                                                        <p className="font-weight-bold">Return <br />
                                                            <small>
                                                                {purchase.options?.dataScheduleReturn?.tgl_keberangkatan}
                                                            </small>
                                                        </p>
                                                    </div>

                                                    <div className="mt-3">
                                                        <p className="font-weight-bold">{purchase.options?.dataScheduleReturn?.nama_kereta} ({purchase.options?.dataScheduleReturn?.no_kereta}) <br />
                                                            <small>
                                                                {purchase.options?.dataScheduleReturn?.kelas_kereta} (Subclass {purchase.options?.dataScheduleReturn?.tipe_kereta})
                                                            </small>
                                                        </p>
                                                    </div>

                                                    <TimeLineStyled className="mb-2">
                                                        <>
                                                            <li>
                                                                <p className="mb-0">
                                                                    <b className="mr-2">{purchase.options?.dataScheduleReturn?.waktu_keberangkatan}</b><br />
                                                                    <small>{purchase.options?.dataScheduleReturn?.asal_kota}, {purchase.options?.dataScheduleReturn?.stasiun_awal} Station</small>
                                                                </p>
                                                                <p className="pt-3"><Icon icon='pepicons-print:rewind-time' className="mr-2 text-primary" />{purchase.options?.dataScheduleReturn?.durasi_perjalanan}</p>
                                                            </li>
                                                            <li className>
                                                                <p className="mb-0">
                                                                    <b className="mr-2">{purchase.options?.dataScheduleReturn?.waktu_tiba}</b><br />
                                                                    <small>{purchase.options?.dataScheduleReturn?.tujuan}, {purchase.options?.dataScheduleReturn?.stasiun_akhir} Station</small>
                                                                </p>
                                                            </li>
                                                        </>
                                                    </TimeLineStyled>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    : ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Modal isOpen={isOpenSeat} toggle={handleSeatChoose} centered size="md">
                    <ModalHeader toggle={handleSeatChoose}>
                        <h5>Pilih Penumpang </h5>
                    </ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            Kursi yang dipilih :
                                        </div>
                                        <div>
                                            {nextTrain === 0 ?
                                                <>
                                                    <b className='text-primary' style={{ fontSize: '24px' }}>{seatRow?.wagon_code} {seatRow?.wagon_no} - {seats?.seat_no}</b>
                                                </>
                                                :
                                                <>
                                                    <b className='text-primary' style={{ fontSize: '24px' }}>{seatRowReturn?.wagon_code} {seatRowReturn?.wagon_no} - {seats?.seat_no}</b>
                                                </>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                {nextTrain === 0 ?
                                    <>
                                        {bookingDetailData?.journeys[0].seat.map((i, index) => (
                                            <div className="col-md-12 mt-2" key={index}>
                                                <div className="card border" style={{
                                                    borderRadius: '10px',
                                                }}>
                                                    <div className="row">
                                                        <div className='col-md-2 bg-primary' style={{
                                                            borderRadius: '10px',
                                                        }}>
                                                            <p style={{ fontSize: '30px', textAlign: 'center', marginTop: '20px' }} className='text-white '>{`P${index + 1}`}</p>
                                                        </div>
                                                        <div className='col-md-10'>
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div>
                                                                    <p style={{ fontSize: '12px' }} className='mt-2 mb-0 font-weight-bold'>
                                                                        {i.passenger_fullname}
                                                                    </p>
                                                                    <p className='mb-2' style={{ fontSize: '12px' }}>{i.wagon_code} {i.wagon_no} - {i.seat_number}</p>
                                                                </div>
                                                                <div>
                                                                    <span
                                                                        key={index}
                                                                        className={`mr-3 text-white badge badge-sm ${selectedOption === index ? 'badge-success' : 'badge-primary'}`}
                                                                        onClick={() => handleOptionChange(index, i, seatRow, seats)}
                                                                    >
                                                                        <Icon icon={`${selectedOption === index ? 'carbon:circle-filled' : 'ic:outline-circle'}`} />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                    :
                                    <>
                                        {bookingDetailData?.journeys[1].seat.map((i, index) => (
                                            <div className="col-md-12 mt-2" key={index}>
                                                <div className="card border" style={{
                                                    borderRadius: '10px',
                                                }}>
                                                    <div className="row">
                                                        <div className='col-md-2 bg-primary' style={{
                                                            borderRadius: '10px',
                                                        }}>
                                                            <p style={{ fontSize: '30px', textAlign: 'center', marginTop: '20px' }} className='text-white '>{`P${index + 1}`}</p>
                                                        </div>
                                                        <div className='col-md-10'>
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div>
                                                                    <p style={{ fontSize: '12px' }} className='mt-2 mb-0 font-weight-bold'>
                                                                        {i.passenger_fullname}
                                                                    </p>
                                                                    <p className='mb-2' style={{ fontSize: '12px' }}>{i.wagon_code} {i.wagon_no} - {i.seat_number}</p>
                                                                </div>
                                                                <div>
                                                                    <span
                                                                        key={index}
                                                                        className={`mr-3 text-white badge badge-sm ${selectedOption === index ? 'badge-success' : 'badge-primary'}`}
                                                                        onClick={() => handleOptionChange(index, i, seatRowReturn, seats)}
                                                                    >
                                                                        <Icon icon={`${selectedOption === index ? 'carbon:circle-filled' : 'ic:outline-circle'}`} />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                }
                            </div>
                            <div className='mt-3'>
                                <button className='btn btn-primary' onClick={() => confirmSimpanSeat()}>
                                    Simpan
                                </button>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </section>
        </>

    );
}


export default TrainSeatPassanger;