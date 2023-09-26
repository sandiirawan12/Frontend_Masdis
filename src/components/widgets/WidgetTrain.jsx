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
import DropdownPassanger from './DropdownPassangerTrain'
import { useRouter } from 'next/router';
import SearchIcon from '@iconify-icons/fa/search';
import Image from 'next/image';
import styled from 'styled-components';
import { debounce } from 'lodash'
import ReactPlaceholder from 'react-placeholder/lib';
import { useMemo } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

function WidgetTrain(props) {
  const { options, handleChangeOptions } = props
  const { access_token } = useSelector(state => state.token);
  const router = useRouter();

  const debouncedFetchFrom = useRef(
    _.debounce((token, query, handleChange) => {
      homeApi.getAutocompleteTrain(token, { product: 'train', q: query }).then(res => {

        handleChange('options', res.data)

        handleChange('isLoading', false)
      })
    }, 2000)).current
  
  const debouncedFetchTo = useRef(
    _.debounce((token, query, handleChange) => {
      homeApi.getAutocompleteTrain(token, { product: 'train', q: query }).then(res => {
        // if (res.success) {
        handleChange('options', res.data)
        // }
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

  const [classCabin, setClassCabin] = useState(options?.classCabin ? options.classCabin : '')

  const [exchangeTrain, setExchangeTrain] = useState(false);
  const refTo = useRef();
  const [trainReturn, setTrainReturn] = useState(options?.dateTo ? true : false)

  const [directOnly, setDirectOnly] = useState(options?.direct ? !options.direct : false)

  const handleChangeFrom = (name, value) => {
    setStateFrom(prevState => ({ ...prevState, [name]: value }));
  }

  const handleChangeTo = (name, value) => {
    setStateTo(prevState => ({ ...prevState, [name]: value }))
  }

  useEffect(() => {
    if (options?.from) {
      homeApi.getAutocompleteTrain(access_token, { product: 'train', q: options?.from }).then(res => {
        if (res.success) {
          handleChangeFrom('selected', res.data.filter(item => item.station_code === options.from))
        }
      })
    }
  }, [options?.from])

  useEffect(() => {
    if (options?.to) {
      homeApi.getAutocompleteTrain(access_token, { product: 'train', q: options?.to }).then(res => {
        if (res.success) {
          handleChangeTo('selected', res.data.filter(item => item.station_code === options.to))
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
    setExchangeTrain(prevState => !prevState)
  }

  const handleSearch = () => {
    const data = passanger

    if (stateFrom.selected.length === 0) {
      toast.error(`Stasiun asal belum diisi`)
    }
    
    if (stateTo.selected.length === 0) {
      toast.error(`Stasiun tujuan belum diisi`)
    }
    
    if (data.infant > data.adult) {
      toast.error(`Bayi tidak boleh melebihi jumlah dewasa`)
    }
    // if (date.from > date90) {
    //   toast.error(`Jadwal yang tersedia yaitu maksimal 90 hari dari tanggal hari ini`)
    // }
    
    if (stateFrom.selected.length > 0 && stateTo.selected.length > 0) {
      const params = {
        ...passanger,
        from: stateFrom.selected[0].station_code,
        to: stateTo.selected[0].station_code,
        dateFrom: moment(date.from).format('DD-MM-YYYY'),
        dateTo: trainReturn ? moment(date.to).format('DD-MM-YYYY') : '',
        direct: trainReturn === false ? 'OW' : 'RT'
      }
      if (handleChangeOptions) {
        handleChangeOptions(params)
      }
      router.push(`/product/train?${queryString.stringify(params)}`)
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
  const modifiers = !trainReturn ? { start: date.from } : { start: date.from, end: date.to }

  const handleChangeTrainReturn = () => {
    setTrainReturn(prevState => !prevState);
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
      padding: '13px',
      color: 'white',
      background: 'linear-gradient(90deg, rgba(135,15,0,1) 0%, rgba(185,45,28,1) 50%, rgba(255,26,0,1) 100%)',
      borderRadius: '20px'
    }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex">
          <div className="custom-control custom-radio mx-2">
            <input type="radio" onChange={handleChangeTrainReturn} className="custom-control-input form-widget form-isreturn" id="oneway" checked={!trainReturn} />
            <label className="custom-control-label font-weight-bold" htmlFor="oneway">One Way</label>
          </div>
          <div className="custom-control custom-radio mx-2">
            <input checked={trainReturn} onChange={handleChangeTrainReturn} type="radio" className="custom-control-input form-widget " id="pulangterbang" />
            <label className="custom-control-label font-weight-bold" htmlFor="pulangterbang">Round Trip</label>
          </div>
        </div>
        <div className="d-flex">
          <div className="mx-2">
            <DropdownPassanger passanger={passanger} addPassanger={addPassanger} reducedPassanger={reducedPassanger} />
          </div>
        </div>
      </div>

      <ul className="list-group list-group-horizontal text-dark list-menu">
        <ListItemStyled className={classNames("list-group-item pb-0", {
          'w-25': trainReturn,
          'w-35': !trainReturn
        })}>
          <div className="form-group mb-2">
            <label className="mb-0 font-weight-bold">Dari Stasiun</label>
            <Typeahead
              id='from'
              inputProps={{
                style: inputStyle,
                placeholder: 'Stasiun Asal'
              }}
              selected={stateFrom.selected}
              onChange={(val) => handleChangeFrom('selected', val)}
              filterBy={() => true}
              labelKey="station_name"
              onSearch={() => { }}
              onInputChange={(q) => handleChangeFrom('keyword', q)}
              options={stateFrom.options}
              renderMenuItemChildren={(option) => stateFrom.isLoading ?
                <span className='d-flex justify-content-between align-items-center py-2 px-1'>
                  <ReactPlaceholder type='text' rows={1} />
                </span>
                : (
                  <>
                    <span className="d-flex justify-content-between align-items-center">
                      <div>
                        <strong style={{
                          textOverflow: 'ellipsis',
                          width: '220px',
                          fontSize: '16px',
                          display: 'inline-block',
                          whiteSpace: 'break-spaces'
                        }}>
                          {option.station_name}
                        </strong>
                        <br />
                        <small style={{
                          width: '100%',
                          display: 'inline-block',
                          whiteSpace: 'break-spaces'
                        }}>
                          {option.city}, Indonesia
                        </small>
                      </div>
                      <span className="badge bg-danger text-uppercase text-white ml-1">{option.station_code}</span>
                    </span>
                  </>
                )} />
          </div>
        </ListItemStyled>
        <ListItemStyled className={classNames("list-group-item pb-0", {
          'w-25': trainReturn,
          'w-35': !trainReturn
        })}>
          <div className="exchange-flight p-1 bg-white">
            <button onClick={handleSwitch} type="button" className={classNames("btn rounded-circle btn-danger btn-exchange-flight p-0", {
              'rotate': exchangeTrain
            })}>
              <Icon icon={ExchangeAltIcon} style={{ verticalAlign: 'middle', marginTop: '-4.7px' }} />
            </button>
          </div>
          <div className="form-group mb-2 ml-2">
            <label className="mb-0 font-weight-bold">Ke Stasiun</label>
            <Typeahead id='to'
              inputProps={{
                placeholder: 'Stasiun Tujuan',
                style: inputStyle
              }}
              selected={stateTo.selected}
              onChange={(val) => handleChangeTo('selected', val)}
              filterBy={() => true}
              labelKey="station_name"
              // isLoading={stateTo.isLoading}
              onSearch={() => { }}
              onInputChange={(q) => handleChangeTo('keyword', q)}
              options={stateTo.options} renderMenuItemChildren={(option) => (
                stateTo.isLoading ?
                  <span className='d-flex justify-content-between align-items-center py-2 px-1'>
                    <ReactPlaceholder type='text' rows={1} />
                  </span> :
                  <>
                    <span className="d-flex justify-content-between align-items-center">
                      <div>
                        <strong style={{
                          textOverflow: 'ellipsis',
                          width: '220px',
                          fontSize: '16px',
                          display: 'inline-block',
                          whiteSpace: 'break-spaces'
                        }}>
                          {option.station_name}
                        </strong>
                        <br />
                        <small style={{
                          width: '100%',
                          display: 'inline-block',
                          whiteSpace: 'break-spaces'
                        }}>
                          {option.city}, Indonesia
                        </small>
                      </div>
                      <span className="badge bg-danger text-uppercase text-white ml-1">{option.station_code}</span>
                    </span>
                  </>
              )} />
          </div>
        </ListItemStyled>
        <ListItemStyled className="list-group-item pb-0" style={{ width: '20%' }}>
          <div className={classNames("form-group mb-2 InputFromTo", {
            'range': trainReturn
          })}>
            <label className="mb-0 d-block font-weight-bold">Berangkat</label>
            <DayPickerInput value={date.from} formatDate={formatDate} format={'ddd, DD MMM YYYY'} parseDate={parseDate}
              dayPickerProps={{
                disabledDays: { before: new Date() },
                // selectedDays: [date.from],
                selectedDays: [date.from, trainReturn && { from: date.from, to: date.to }],
                modifiers,
                numberOfMonths: trainReturn ? 2 : 1,
                locale: 'id',
                localeUtils: MomentLocaleUtils,
                onDayClick: () => !trainReturn && refTo.current?.getInput().focus(),
              }} onDayChange={handleDateFromChange} inputProps={{
                className: 'form-control w-100',
                readOnly: true,
                style: inputStyle
              }} />
          </div>
        </ListItemStyled>
        {trainReturn &&
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
              <Image layout='fill' src={'https://cdn.masterdiskon.com/masterdiskon/icon/fe/luv.png'} />
            </div>
            Search</button>
        </ListItemStyled>
      </ul>
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

export default WidgetTrain
