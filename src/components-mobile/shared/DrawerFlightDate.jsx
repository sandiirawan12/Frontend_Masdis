import { BottomSheet, SheetContent, SheetHeader } from "@biotic-ui/bottom-sheet";
import classNames from 'classnames';
import styled from "styled-components";
import DayPicker from 'react-day-picker';
import propTypes from 'prop-types';
import moment from 'moment';


function DrawerFlightDate(props) {
    const { isOpen, onClose, flightReturn, handleChange, date, dateActive, handleChangeDateActive } = props;

    const modifiers = { start: date.from, end: date.to }

    const disabledDays = dateActive === 'from' ? { before: new Date() } : [{ before: date.from }, { before: new Date() }];

    const selectedDays = flightReturn ? [date.from, { from: date.from, to: date.to }] : [date.from];

    const onDayClick = (val, modifiers = {}) => {
        if (modifiers.disabled) {
            return;
        }
        handleChange(dateActive, val)
        if (dateActive === 'from' && flightReturn) {
            handleChangeDateActive('to');
        } else {
            onClose()
        }
    }

    return (
        <DrawerBottom open={isOpen} height={0.1} onClose={onClose}>
            <SheetHeader className='bg-primary text-white d-block pt-3 pb-3 px-2'>
                <div className="d-flex justify-content-between align-items-center mx-2">
                    <h5 className="font-weight-bold w-100">Tanggal Penerbangan</h5>
                    <h5 onClick={onClose}>
                        <i class="fas fa-times"></i>
                    </h5>
                </div>
            </SheetHeader>
            <SheetContent>
                <DayPicker showOutsideDays month={date[dateActive]} modifiers={modifiers} disabledDays={disabledDays} onDayClick={onDayClick} selectedDays={selectedDays} className="w-100 Selectable" />
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

DrawerFlightDate.PropTypes = { isOpen: propTypes.bool, onClose: propTypes.func, handleChange: propTypes.func, title: propTypes.string }

export default DrawerFlightDate;