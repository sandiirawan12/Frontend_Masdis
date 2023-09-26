import Image from "next/image";
import { useEffect } from "react";
import styled from "styled-components";
import HeaderBack from "../header/HeaderBack";
import { useSelector } from 'react-redux';
import homeApi from "@/api/home";
import { useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import DayPicker from 'react-day-picker';
import ReactPlaceholder from "react-placeholder";

function DestinationHotel(props) {
    const { open, toggle, setHotelSelected, hotelSelected, keyword, handleChangeKeyword } = props;
    const { access_token } = useSelector(state => state.token);
    const [bestDestination, setBestDestination] = useState([]);
    const [hotels, setHotels] = useState([]);
    const [isFetchPopular, setIsFetchPopular] = useState(false);
    const [isFetchHotel, setIsFetchHotel] = useState(false);

    useEffect(() => {
        setIsFetchPopular(true)
        homeApi.getAutocomplete(access_token, { product: 'hotel', q: '' }).then(res => {
            if (res.success) {
                setBestDestination(res.data)
            }
            setIsFetchPopular(false)
        })


    }, [])

    const handleSearch = () => {
        setIsFetchHotel(true)
        homeApi.getAutocomplete(access_token, { product: 'hotel', q: keyword }).then(res => {
            if (res.success) {
                setHotels(res.data)
            }
            setIsFetchHotel(false)
        })
    }

    const handleChangeHotel = (val) => {
        setHotelSelected(val);
        toggle('destination');
    }


    return (
        <RootStyled show={open}>
            <HeaderBack title='Tujuan Hotel' onBack={() => toggle('destination')} />
            <div className="content">
                <div className="search-wrapper">
                    <div className="container">
                        <div className="w-100 position-relative ">
                            <div className="form-group">
                                <input type="text" onChange={handleChangeKeyword} autoFocus={true} className="form-control search-input border-0 py-4" placeholder='Search Hotel' />
                            </div>
                            <button type="button" onClick={handleSearch} className="btn h-100 d-flex justify-content-center align-items-center btn-warning btn-sm position-absolute search-button">
                                <div style={{ width: '18px', height: '18px', position: 'relative', }} className='d-inline-block'>
                                    <Image layout='fill' src={'https://cdn.masterdiskon.com/masterdiskon/icon/fe/luv.png'} />
                                </div>
                                Search</button>
                        </div>
                    </div>
                </div>

                <ListStyled className="list-group">

                    {isFetchHotel ? [1, 2, 3, 4, 5].map(() => <li className='d-flex justify-content-between align-items-center py-2 px-1'> <ReactPlaceholder type='text' rows={1} />
                    </li>) : hotels.length > 0 &&
                    <>
                        <li className="list-group-title bg-warning px-1">
                            Hasil Pencarian
                        </li>
                        {hotels.map(item => (
                            <li className="list-group-item" onClick={() => handleChangeHotel(item)}>
                                <span className="title">
                                    {item.name}
                                </span>
                                <span className="subtitle">{item.level}</span>
                            </li>
                        ))}
                    </>
                    }
                    {bestDestination.length > 0 && <>
                        <li className="list-group-title">
                            Destinasi Populer
                        </li>
                        {bestDestination.map(item => (
                            <li className="list-group-item" onClick={() => handleChangeHotel(item)}>
                                <span className="title">
                                    {item.name}
                                </span>
                                <span className="subtitle">Indonesia</span>
                            </li>
                        ))}
                    </>}
                </ListStyled>

            </div>
            <Modal size="lg" isOpen={false}>
                <ModalBody>
                    <DayPicker
                    // selectedDays={this.state.selectedDay}
                    // onDayClick={this.handleDayClick}
                    />
                </ModalBody>
            </Modal>
        </RootStyled>
    );
}

const RootStyled = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
    transition:display ease 1s;
    background:white;
    min-height:100vh;
    .content{
        padding:.9rem;
    }
    .search-wrapper{
        position: fixed;
        background:white;
        top: 40px; 
        z-index: 999;
        left: 0;
        width: 100%;
        height:70px;
        display:flex;
        justify-content:center;
        align-items:center;
        box-shadow:0 5px 5px -5px rgba(0,0,0,.5); 
        .container{
            height:48px;
            .search-input{
                background: #F5F6FA;
                padding-right: 77px;
                box-shadow: none;
                font-size: 12px
            }

            .search-button{
                right: 0;
                top: 0;
                font-size: 12px;
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
        }
    }

`

const ListStyled = styled.ul`
    padding:0 !important;
    color:black !important;
    font-size:12px !important;
    overflow-y:auto !important;
    margin-top:4.5rem;
    .list-group-title{
        font-weight:bold;
    }
    .list-group-item{
        margin:auto 8px;
        border:0;
        border-bottom:1px solid gray;
        &:last-child{
            border-bottom:none;
        }
        margin-bottom:.6rem;
        padding:0;
        cursor:pointer;
        .title{
            display:block;
            font-size:12px;
            margin-bottom:-3px;
        }
        .subtitle{
            display:block;
            color:gray;
            font-size:11px;
            margin-bottom:3px;
        }
    }


`

export default DestinationHotel;