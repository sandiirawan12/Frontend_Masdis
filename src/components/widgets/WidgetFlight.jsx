import React, { useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import queryString from 'query-string';
import ExchangeAltIcon from '@iconify/icons-fa-solid/exchange-alt'
import { Typeahead } from 'react-bootstrap-typeahead';
import { useState } from 'react'
import { useSelector } from 'react-redux'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import MomentLocaleUtils, { formatDate, parseDate } from 'react-day-picker/moment';
import moment from 'moment';
import homeApi from '@/api/home';
import classNames from 'classnames'
import DropdownPassanger from './DropdownPassanger'
import { useRouter } from 'next/router';
import SearchIcon from '@iconify-icons/fa/search';
import Image from 'next/image';
import styled from 'styled-components';
import { debounce, wrap } from 'lodash'
import ReactPlaceholder from 'react-placeholder/lib';
import { useMemo } from 'react';

function WidgetFlight(props) {
  const { options, handleChangeOptions } = props
  const { access_token } = useSelector(state => state.token);
  const router = useRouter();
  const debouncedFetchFrom = useRef(
    _.debounce((token, query, handleChange) => {
      homeApi.getAutocomplete(token, { product: 'flight', q: query }).then(res => {
        if (res.success) {
          handleChange('options', res.data)
        }
        handleChange('isLoading', false)
      })
    }, 2000)).current
  const debouncedFetchTo = useRef(
    _.debounce((token, query, handleChange) => {
      homeApi.getAutocomplete(token, { product: 'flight', q: query }).then(res => {
        if (res.success) {
          handleChange('options', res.data)
        }
        handleChange('isLoading', false)
      })
    }, 2000)).current

  const [stateFrom, setStateFrom] = useState({
    options: [],
    isLoading: false,
    keyword: options?.from ?? '',
    selected: []
  })
  const [stateTo, setStateTo] = useState({
    options: [],
    isLoading: false,
    keyword: options?.to ?? '',
    selected: []
  })

  const [date, setDate] = useState({
    from: options?.dateFrom ? toDate(options.dateFrom) : moment(new Date()).add(1, 'days').toDate(),
    to: options?.dateTo ? toDate(options.dateTo) : (options?.dateFrom ? moment(toDate(options.dateFrom)).add(1, 'days').toDate() : moment(new Date()).add(2, 'days').toDate())
  });

  const [passanger, setPassanger] = useState({
    adult: options?.adult ? options.adult : 1,
    child: options?.child ? options.child : 0,
    infant: options?.infant ? options.infant : 0
  })

  const [classCabin, setClassCabin] = useState(options?.classCabin ? options.classCabin : "")

  const [exchangeFlight, setExchangeFlight] = useState(false);
  const refTo = useRef();
  const [flightReturn, setFlightReturn] = useState(options?.dateTo ? true : false)

  const [directOnly, setDirectOnly] = useState(options?.direct ? !options.direct : false)

  const handleChangeFrom = (name, value) => {
    setStateFrom(prevState => ({ ...prevState, [name]: value }));
  }

  const handleChangeTo = (name, value) => {
    setStateTo(prevState => ({ ...prevState, [name]: value }))
  }

  useEffect(() => {
    if (options?.from) {
      homeApi.getAutocomplete(access_token, { product: 'flight', q: options?.from }).then(res => {
        if (res.success) {
          handleChangeFrom('selected', res.data.filter(item => item.id === options.from))
        }
      })
    }
  }, [options?.from])

  useEffect(() => {
    if (options?.to) {
      homeApi.getAutocomplete(access_token, { product: 'flight', q: options?.to }).then(res => {
        if (res.success) {
          handleChangeTo('selected', res.data.filter(item => item.id === options.to))
        }
      })
    }
  }, [options?.to])

  useEffect(() => {
    handleChangeFrom('isLoading', true);
    if (stateFrom.keyword.length > 2 || stateFrom.keyword.length < 1) {
      debouncedFetchFrom(access_token, stateFrom.keyword, handleChangeFrom)
    }
  }, [stateFrom.keyword, debouncedFetchFrom])

  useEffect(() => {
    handleChangeTo('isLoading', true)
    if (stateTo.keyword.length > 2 || stateTo.keyword.length < 1) {
      debouncedFetchTo(access_token, stateTo.keyword, handleChangeTo)
    }
  }, [stateTo.keyword, debouncedFetchTo])

  const handleSwitch = () => {
    handleChangeTo('selected', stateFrom.selected);
    handleChangeTo('keyword', stateFrom.keyword);
    handleChangeFrom('keyword', stateTo.keyword);
    handleChangeFrom('selected', stateTo.selected);
    setExchangeFlight(prevState => !prevState)
  }

  const handleSearch = () => {
    if (stateFrom.selected.length === 0) {
      alert('Kota asal belum diisi')
    }
    if (stateTo.selected.length === 0) {
      alert('Kota tujuan belum diisi')
    }
    if (stateFrom.selected.length > 0 && stateTo.selected.length > 0) {
      const params = {
        ...passanger,
        from: stateFrom.selected[0].id,
        to: stateTo.selected[0].id,
        dateFrom: moment(date.from).format('DD-MM-YYYY'),
        dateTo: flightReturn ? moment(date.to).format('DD-MM-YYYY') : '',
        classCabin,
        direct: directOnly
      }
      if (handleChangeOptions) {
        handleChangeOptions(params)
      }
      router.push(`/product/flight?${queryString.stringify(params)}`)
    }
  }

  const handleDateFromChange = (from) => {
    if (moment(from).isBefore(date.to)) {
      setDate(prevState => ({ ...prevState, from }));
    } else {
      setDate(prevState => ({ ...prevState, from, to: moment(from).add(1, 'days').toDate() }));
    }
  }

  const handleDateToChange = (to) => {
    setDate(prevState => ({ ...prevState, to }));
  }
  const modifiers = !flightReturn ? { start: date.from } : { start: date.from, end: date.to }

  const handleChangeFlightReturn = () => {
    setFlightReturn(prevState => !prevState);
  }

  // function widget passanger
  const addPassanger = (name) => {
    setPassanger(prevState => ({ ...prevState, [name]: Number(prevState[name]) + 1 }))
  }

  const reducedPassanger = (name) => {
    if (name === 'adult' && passanger[name] > 1) {
      setPassanger(prevState => ({ ...prevState, [name]: Number(prevState[name]) - 1 }))
    } else if (name !== 'adult' && passanger[name] > 0) {
      setPassanger(prevState => ({ ...prevState, [name]: Number(prevState[name]) - 1 }))
    }
  }

  function toDate(date) {
    var from = date.split("-")
    return new Date(from[2], from[1] - 1, from[0])
  }


  return (
    <div style={{
      padding: '15px',
      color: 'white',
      background: 'linear-gradient(90deg, rgba(9,113,185,1) 0%, rgba(53,142,230,1) 50%, rgba(41,193,209,1) 100%)',
      // background: 'linear-gradient(270deg, rgb(9, 113, 185) 0%, rgb(225, 196, 81) 30%, rgb(230, 124, 0) 45%, rgb(9, 113, 185) 100%)',
      borderRadius: '20px'
    }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className='d-flex'>
          <div className="custom-control custom-radio mx-2">
            <input type="radio" onChange={handleChangeFlightReturn} className="custom-control-input form-widget form-isreturn" id="oneway" checked={!flightReturn} />
            <label className="custom-control-label font-weight-bold" htmlFor="oneway">One Way</label>
          </div>
          <div className="custom-control custom-radio mx-2">
            <input checked={flightReturn} onChange={handleChangeFlightReturn} type="radio" className="custom-control-input form-widget " id="pulangterbang" />
            <label className="custom-control-label font-weight-bold" htmlFor="pulangterbang">Round Trip</label>
          </div>
          <div className="custom-control custom-checkbox mx-2">
            <input type="checkbox" checked={directOnly} onChange={() => setDirectOnly(!directOnly)} className="custom-control-input" id='directOnly' />
            <label className="custom-control-label" htmlFor='directOnly'>
              Direct Only
            </label>
          </div>
        </div>
        <div className='d-flex'>
          <div className="mx-2">
            <DropdownPassanger passanger={passanger} addPassanger={addPassanger} reducedPassanger={reducedPassanger} />
          </div>
          <div className='mx-2'>
            {/* <label className='font-weight-bold'>Kelas Kabin</label> */}
            <select className="form-control" value={classCabin} onChange={(e) => setClassCabin(e.target.value)}>
              <option value="">All</option>
              <option value="E">Economy</option>
              <option value="S">Premium Economy</option>
              <option value="B">Bussiness</option>
              <option value="F">First Class</option>
            </select>
          </div>
        </div>
      </div>

      <ul className="list-group list-group-horizontal text-dark list-menu">
        <ListItemStyled className={classNames("list-group-item pb-0", {
          'w-25': flightReturn,
          'w-35': !flightReturn
        })}>
          <div className="form-group mb-2">
            <label className="mb-0 font-weight-bold">Dari</label>
            <Typeahead
              id='from'
              inputProps={{
                style: inputStyle,
                placeholder: 'Kota atau bandara'
              }}
              selected={stateFrom.selected}
              onChange={(val) => handleChangeFrom('selected', val)}
              filterBy={() => true}
              labelKey="text"
              onSearch={() => { }}
              onInputChange={(q) => handleChangeFrom('keyword', q)}
              options={stateFrom.options}
              renderMenuItemChildren={(option) => stateFrom.isLoading ?
                <span className='d-flex justify-content-between align-items-center py-2 px-1'>
                  <ReactPlaceholder type='text' rows={1} />
                </span>
                : (
                  <>
                    <span className="d-flex justify-content-between align-items-center ">
                      <div className='d-flex align-items-center'>
                        <Icon icon="pepicons-print:airplane"
                          style={{
                            fontSize: '28px',
                            color: '#0070ba'
                          }}
                        />
                        <div className='ml-3' style={{ width: '95%' }}>
                          <strong style={{
                            textOverflow: 'ellipsis',
                            width: '210px',
                            fontSize: '16px',
                            display: 'inline-block',
                            whiteSpace: 'break-spaces'
                          }}>
                            {option.text}
                          </strong>
                          <br />
                          <small style={{
                            width: '100%',
                            display: 'inline-block',
                            whiteSpace: 'break-spaces'
                          }}>
                            {option.city}, {option.country_name}
                          </small>
                        </div>
                      </div>
                      <span className="badge bg-primary text-uppercase text-white ml-1">{option.id}</span>
                    </span>
                  </>
                )} />
          </div>
        </ListItemStyled>
        <ListItemStyled className={classNames("list-group-item pb-0", {
          'w-25': flightReturn,
          'w-35': !flightReturn
        })}>
          <div className="exchange-flight p-1 bg-white">
            <button onClick={handleSwitch} type="button" className={classNames("btn rounded-circle btn-primary btn-exchange-flight p-0", {
              'rotate': exchangeFlight
            })}>
              <Icon icon={ExchangeAltIcon} style={{ verticalAlign: 'middle', marginTop: '-4.7px' }} />
            </button>
          </div>
          <div className="form-group mb-2 ml-2">
            <label className="mb-0 font-weight-bold">Ke</label>
            <Typeahead id='to'
              inputProps={{
                placeholder: 'Kota atau bandara tujuan',
                style: inputStyle
              }}
              selected={stateTo.selected}
              onChange={(val) => handleChangeTo('selected', val)}
              filterBy={() => true}
              labelKey="text"
              // isLoading={stateTo.isLoading}
              onSearch={() => { }}
              onInputChange={(q) => handleChangeTo('keyword', q)}
              options={stateTo.options} renderMenuItemChildren={(option) => (
                stateTo.isLoading ? <span className='d-flex justify-content-between align-items-center py-2 px-1'>
                  <ReactPlaceholder type='text' rows={1} />
                </span> :
                  <>
                    <span className="d-flex justify-content-between align-items-center ">
                      <div className='d-flex align-items-center'>
                        <Icon icon="pepicons-print:airplane"
                          style={{
                            fontSize: '28px',
                            color: '#0070ba'
                          }}
                        />
                        <div className='ml-3' style={{ width: '95%' }}>
                          <strong style={{
                            textOverflow: 'ellipsis',
                            width: '210px',
                            fontSize: '16px',
                            display: 'inline-block',
                            whiteSpace: 'break-spaces'
                          }}>
                            {option.text}
                          </strong>
                          <br />
                          <small style={{
                            width: '100%',
                            display: 'inline-block',
                            whiteSpace: 'break-spaces'
                          }}>
                            {option.city}, {option.country_name}
                          </small>
                        </div>
                      </div>
                      <span className="badge bg-primary text-uppercase text-white ml-1">{option.id}</span>
                    </span>
                  </>
              )} />
          </div>
        </ListItemStyled>
        <ListItemStyled className="list-group-item pb-0" style={{ width: '20%' }}>
          <div className={classNames("form-group mb-2 InputFromTo", {
            'range': flightReturn
          })}>
            <label className="mb-0 d-block font-weight-bold">Berangkat</label>
            <DayPickerInput value={date.from} formatDate={formatDate} format={'ddd, DD MMM YYYY'} parseDate={parseDate}
              dayPickerProps={{
                disabledDays: { before: new Date() },
                // selectedDays: [date.from],
                selectedDays: [date.from, flightReturn && { from: date.from, to: date.to }],
                modifiers,
                numberOfMonths: flightReturn ? 2 : 1,
                locale: 'id',
                localeUtils: MomentLocaleUtils,
                onDayClick: () => !flightReturn && refTo.current?.getInput().focus(),
              }} onDayChange={handleDateFromChange} inputProps={{
                className: 'form-control w-100',
                readOnly: true,
                style: inputStyle
              }} />
          </div>
        </ListItemStyled>
        {flightReturn &&
          <ListItemStyled style={{ width: '20%' }} className={classNames("list-group-item pb-0 InputFromTo range InputFromTo-to")}>
            <div className="form-group mb-2">
              <label className="mb-0 font-weight-bold">Pulang</label>
              <DayPickerInput
                ref={refTo}
                format={'ddd, DD MMM YYYY'}
                value={date.to}
                formatDate={formatDate}
                parseDate={parseDate}
                dayPickerProps={{
                  selectedDays: [date.from, { from: date.from, to: date.to }],
                  disabledDays: [{ before: date.from }, { before: new Date() }],
                  modifiers,
                  localeUtils: MomentLocaleUtils,
                  month: date.from,
                  fromMonth: date.from,
                  locale: 'id',
                  numberOfMonths: 2,
                }} onDayChange={handleDateToChange} style={{ width: '200px' }} inputProps={{
                  className: 'form-control bg-transparent'
                  , readOnly: true,
                  style: inputStyle
                }} />
            </div>
          </ListItemStyled>
        }
        <ListItemStyled className="list-group-item p-0 bg-warning w-20 tombolcari">
          <button onClick={handleSearch} className="btn btn-transparent d-flex justify-content-center align-items-center font-weight-bold h-100 btn-block">
            <div style={{ width: '25px', height: '25px', position: 'relative', }} className='d-inline-block'>
              <Icon icon="icon-park-twotone:search"></Icon>
            </div>
            Search</button>
        </ListItemStyled>
      </ul>
      {/* <div className="d-flex w-100 align-items-center justify-content-end mt-3">
        <button type="button" onClick={handleSearch} className="btn btn-md btn-warning font-weight-bold rounded-pill px-3 py-2">
          <Icon icon={SearchIcon} className='pr-1' />
          Cari Penerbangan</button>
      </div> */}
    </div >

  )
}

const inputStyle = {
  border: 'none',
  height: 'auto',
  width: '100%',
  boxShadow: 'none',
  paddingLeft: 0,
  marginTop: '-5px',
  background: 'transparent'
}

const ListItemStyled = styled.li`
  height:83px !important;
  padding-bottom:0 !important;

`

export default WidgetFlight
