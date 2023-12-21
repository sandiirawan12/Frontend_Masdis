import { useState } from 'react'
import { BottomSheet, SheetContent, SheetHeader } from "@biotic-ui/bottom-sheet";
import classNames from 'classnames';
import styled from "styled-components";
import DayPicker from 'react-day-picker';
import propTypes from 'prop-types';
import moment from 'moment';


function DrawerDate(props) {
    const { isOpen, onClose, handleChange, date, dateActive, handleChangeDateActive } = props;

    const modifiers = { start: date.checkin, end: date.checkout }

    const disabledDays = dateActive === 'checkin' ? { before: new Date() } : [{ before: date.checkin }, { before: new Date() }]

    const onDayClick = (val, modifiers = {}) => {
        if (modifiers.disabled) {
            return;
        }
        handleChange(dateActive, val)
        if (dateActive === 'checkin') {
            handleChangeDateActive('checkout');
        } else {
            onClose()
        }
    }

    return (
        <DrawerBottom open={isOpen} height={0.1} onClose={onClose}>
            <SheetHeader className='bg-primary text-white d-block pt-3 pb-3 px-2'>
                <div className="d-flex justify-content-between align-items-center mx-2">
                    <h5 className="font-weight-bold w-100">Tanggal Menginap</h5>
                    <h5 onClick={onClose}>
                        <i class="fas fa-times"></i>
                    </h5>
                </div>
                <div className="w-100 mt-3 d-flex justify-content-center align-items-start">
                    <div className={classNames('text-date', { 'date-active': dateActive === 'checkin' })}>
                        <small className="mb-0 d-block">Check-in</small>
                        <div className="d-flex align-items-center date-active" onClick={() => handleChangeDateActive('checkin')}>
                            <h4 style={{ fontSize: '40px' }} className='font-weight-bold m-0'>{moment(date.checkin).format('DD')}</h4>
                            <div className='ml-2'>
                                <h6 className='m-0 font-weight-bold'>{moment(date.checkin).format('ddd')}</h6>
                                <h6 className='m-0 font-weight-bold'>{moment(date.checkin).format('MMM')}</h6>
                            </div>
                        </div>
                    </div>
                    <div className='mx-4'>
                        <small className="text-light d-block my-0">{moment(date.checkout).diff(moment(date.checkin), 'days')} malam</small>
                    </div>
                    <div className={classNames('text-date', { 'date-active': dateActive === 'checkout' })}>
                        <small className="mb-0 d-block">Check-out</small>
                        <div className="d-flex align-items-center" onClick={() => handleChangeDateActive('checkout')}>
                            <h4 style={{ fontSize: '40px' }} className='font-weight-bold m-0'>{moment(date.checkout).format('DD')}</h4>
                            <div className='ml-2'>
                                <h6 className='m-0 font-weight-bold'>{moment(date.checkout).format('ddd')}</h6>
                                <h6 className='m-0 font-weight-bold'>{moment(date.checkout).format('MMM')}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </SheetHeader>
            <SheetContent>
                <DayPicker showOutsideDays month={date[dateActive]} modifiers={modifiers} disabledDays={disabledDays} onDayClick={onDayClick} selectedDays={[date.checkin, { from: date.checkin, to: date.checkout }]} className="w-100 Selectable" />
            </SheetContent>
        </DrawerBottom>
    );
}


const DrawerBottom = styled(BottomSheet)`
    border-radius:0;
    min-height:100%;
    max-height:100%;

    .text-date{
        position:relative;
        &.date-active::before{
            content:'';
            position:absolute;
            bottom:-10px;
            left:50%;
            width:13px;
            height:13px;
                background:#E0A800;
                border-radius:50%;
            }
    }


`

DrawerDate.PropTypes = { isOpen: propTypes.bool, onClose: propTypes.func, handleChange: propTypes.func, title: propTypes.string }

export default DrawerDate;