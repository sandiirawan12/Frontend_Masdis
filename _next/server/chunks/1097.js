"use strict";
exports.id = 1097;
exports.ids = [1097];
exports.modules = {

/***/ 9503:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5566);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header_HeaderBack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8579);
/* harmony import */ var _iconify_icons_fa_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8165);
/* harmony import */ var _iconify_icons_fa_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6638);
/* harmony import */ var _iconify_icons_fa_solid_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6315);
/* harmony import */ var _iconify_icons_fa_solid_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_fa_location_arrow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4936);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_DrawerSearchFlight__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1064);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9103);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _api_home__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7906);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _shared_DrawerFlightDate__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1388);
/* harmony import */ var _shared_DrawerClassFlight__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9959);
/* harmony import */ var _shared_DrawerPassangerFlight__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4968);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_1__, _header_HeaderBack__WEBPACK_IMPORTED_MODULE_3__]);
([_iconify_react__WEBPACK_IMPORTED_MODULE_1__, _header_HeaderBack__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
























const listClass = {
  E: 'ECONOMY CLASS',
  S: 'PREMIUM ECONOMY',
  B: 'BUSINESS CLASS',
  F: 'FIRST CLASS'
};

function FlightPage(props) {
  var _options$from, _options$to, _stateFrom$selected, _stateTo$selected;

  const {
    options,
    handleChangeOptions,
    onClose
  } = props;
  const {
    access_token
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(state => state.token);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  const debouncedFetchFrom = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(_.debounce((token, query, handleChange) => {
    _api_home__WEBPACK_IMPORTED_MODULE_14__/* ["default"].getAutocomplete */ .Z.getAutocomplete(token, {
      product: 'flight',
      q: query
    }).then(res => {
      if (res.success) {
        handleChange('options', res.data);
      }

      handleChange('isLoading', false);
    });
  }, 2000)).current;
  const debouncedFetchTo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(_.debounce((token, query, handleChange) => {
    _api_home__WEBPACK_IMPORTED_MODULE_14__/* ["default"].getAutocomplete */ .Z.getAutocomplete(token, {
      product: 'flight',
      q: query
    }).then(res => {
      if (res.success) {
        handleChange('options', res.data);
      }

      handleChange('isLoading', false);
    });
  }, 2000)).current;
  const {
    0: stateFrom,
    1: setStateFrom
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    options: [],
    isLoading: false,
    keyword: (_options$from = options === null || options === void 0 ? void 0 : options.from) !== null && _options$from !== void 0 ? _options$from : '',
    selected: null
  });
  const {
    0: stateTo,
    1: setStateTo
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    options: [],
    isLoading: false,
    keyword: (_options$to = options === null || options === void 0 ? void 0 : options.to) !== null && _options$to !== void 0 ? _options$to : '',
    selected: null
  });
  const {
    0: date,
    1: setDate
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    from: options !== null && options !== void 0 && options.dateFrom ? toDate(options.dateFrom) : moment__WEBPACK_IMPORTED_MODULE_15___default()(new Date()).add(1, 'days').toDate(),
    to: options !== null && options !== void 0 && options.dateTo ? toDate(options.dateTo) : options !== null && options !== void 0 && options.dateFrom ? moment__WEBPACK_IMPORTED_MODULE_15___default()(toDate(options.dateFrom)).add(1, 'days').toDate() : moment__WEBPACK_IMPORTED_MODULE_15___default()(new Date()).add(2, 'days').toDate()
  });
  const {
    0: passanger,
    1: setPassanger
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    adult: options !== null && options !== void 0 && options.adult ? options.adult : 1,
    child: options !== null && options !== void 0 && options.child ? options.child : 0,
    infant: options !== null && options !== void 0 && options.infant ? options.infant : 0
  });
  const {
    0: classCabin,
    1: setClassCabin
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(options !== null && options !== void 0 && options.classCabin ? options.classCabin : 'E');
  const {
    0: exchangeFlight,
    1: setExchangeFlight
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const refTo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    0: flightReturn,
    1: setFlightReturn
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(options !== null && options !== void 0 && options.dateTo ? true : false);
  const {
    0: directOnly,
    1: setDirectOnly
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(options !== null && options !== void 0 && options.direct ? !options.direct : false);
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    flightFrom: false,
    flightTo: false,
    date: false,
    passanger: false,
    classCabin: false
  });
  const {
    0: dateActive,
    1: setDateActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('from');

  const handleChangeDateActive = val => {
    setDateActive(val);
  };

  const handleOpen = (field, val) => {
    if (val) {
      handleChangeDateActive(val);
    }

    setOpen(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [field]: !prev[field]
    }));
  };

  const handleChangeFrom = (name, value) => {
    setStateFrom(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      [name]: value
    }));

    if (name === 'selected') {
      handleOpen('flightFrom');
    }
  };

  const handleChangeTo = (name, value) => {
    setStateTo(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      [name]: value
    }));

    if (name === 'selected') {
      handleOpen('flightTo');
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (options !== null && options !== void 0 && options.from) {
      _api_home__WEBPACK_IMPORTED_MODULE_14__/* ["default"].getAutocomplete */ .Z.getAutocomplete(access_token, {
        product: 'flight',
        q: options === null || options === void 0 ? void 0 : options.from
      }).then(res => {
        if (res.success) {
          setStateFrom(_objectSpread(_objectSpread({}, stateFrom), {}, {
            selected: res.data.filter(item => item.id === options.from)[0]
          }));
        }
      });
    }
  }, [options === null || options === void 0 ? void 0 : options.from]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (options !== null && options !== void 0 && options.to) {
      _api_home__WEBPACK_IMPORTED_MODULE_14__/* ["default"].getAutocomplete */ .Z.getAutocomplete(access_token, {
        product: 'flight',
        q: options === null || options === void 0 ? void 0 : options.to
      }).then(res => {
        if (res.success) {
          setStateTo(_objectSpread(_objectSpread({}, stateTo), {}, {
            selected: res.data.filter(item => item.id === options.to)[0]
          }));
        }
      });
    }
  }, [options === null || options === void 0 ? void 0 : options.to]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    handleChangeFrom('isLoading', true);

    if (stateFrom.keyword.length > 2 || stateFrom.keyword.length < 1) {
      debouncedFetchFrom(access_token, stateFrom.keyword, handleChangeFrom);
    }
  }, [stateFrom.keyword, debouncedFetchFrom]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    handleChangeTo('isLoading', true);

    if (stateTo.keyword.length > 2 || stateTo.keyword.length < 1) {
      debouncedFetchTo(access_token, stateTo.keyword, handleChangeTo);
    }
  }, [stateTo.keyword, debouncedFetchTo]);

  const handleSwitch = () => {
    handleChangeTo('selected', stateFrom.selected);
    handleChangeTo('keyword', stateFrom.keyword);
    handleChangeFrom('keyword', stateTo.keyword);
    handleChangeFrom('selected', stateTo.selected);
    setExchangeFlight(prevState => !prevState);
  };

  const handleSearch = () => {
    if (!stateFrom.selected) {
      alert('Kota asal belum diisi');
    }

    if (!stateTo.selected) {
      alert('Kota tujuan belum diisi');
    }

    if (stateFrom.selected && stateTo.selected) {
      const params = _objectSpread(_objectSpread({}, passanger), {}, {
        from: stateFrom.selected.id,
        to: stateTo.selected.id,
        dateFrom: moment__WEBPACK_IMPORTED_MODULE_15___default()(date.from).format('DD-MM-YYYY'),
        dateTo: flightReturn ? moment__WEBPACK_IMPORTED_MODULE_15___default()(date.to).format('DD-MM-YYYY') : '',
        classCabin,
        direct: directOnly
      });

      if (handleChangeOptions) {
        handleChangeOptions(params);
      }

      if (onClose) {
        onClose();
      }

      router.push(`/product/flight?${query_string__WEBPACK_IMPORTED_MODULE_11___default().stringify(params)}`);
    }
  };

  const handleDateFromChange = from => {
    if (moment__WEBPACK_IMPORTED_MODULE_15___default()(from).isBefore(date.to)) {
      setDate(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        from
      }));
    } else {
      setDate(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        from,
        to: moment__WEBPACK_IMPORTED_MODULE_15___default()(from).add(1, 'days').toDate()
      }));
    }
  };

  const handleDateToChange = to => {
    setDate(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      to
    }));
  };

  const modifiers = !flightReturn ? {
    start: date.from
  } : {
    start: date.from,
    end: date.to
  };

  const handleChangeFlightReturn = () => {
    setFlightReturn(prevState => !prevState);
  }; // function widget passanger


  const addPassanger = name => {
    setPassanger(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      [name]: Number(prevState[name]) + 1
    }));
  };

  const reducedPassanger = name => {
    if (name === 'adult' && passanger[name] > 1) {
      setPassanger(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        [name]: Number(prevState[name]) - 1
      }));
    } else if (name !== 'adult' && passanger[name] > 0) {
      setPassanger(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        [name]: Number(prevState[name]) - 1
      }));
    }
  };

  function toDate(date) {
    var from = date.split("-");
    return new Date(from[2], from[1] - 1, from[0]);
  }

  const handleChangeDate = (type, val) => {
    if (type === 'from') {
      handleDateFromChange(val);
    } else {
      handleDateToChange(val);
    }
  }; // count


  const countPassanger = () => {
    let result = 0;
    Object.keys(passanger).forEach(item => {
      result += Number(passanger[item]);
    });
    return result;
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(RootStyled, {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()("position-relative"),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_header_HeaderBack__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        title: "Flights",
        onBack: () => onClose ? onClose() : router.back()
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("img", {
        src: "https://cdn.masterdiskon.com/masterdiskon/icon/fe/sign-in.png",
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '35vh',
          width: '100%',
          objectFit: 'cover'
        }
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("div", {
        className: "container pt-2",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("div", {
          className: "card text-dark",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
            className: "p-3",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("h6", {
              className: "font-weight-bold",
              children: "Pencarian tiket pesawat"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("span", {
              onClick: () => setFlightReturn(false),
              className: "badge badge-pill p-2 mr-2",
              style: !flightReturn ? {
                backgroundColor: '#0070BA',
                color: '#fff'
              } : {
                color: '#0070BA'
              },
              children: "One Way"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("span", {
              onClick: () => setFlightReturn(true),
              className: "badge badge-pill p-2",
              style: flightReturn ? {
                backgroundColor: '#0070BA',
                color: '#fff'
              } : {
                color: '#0070BA'
              },
              children: "Round Trip"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
              className: "container",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
                onClick: () => handleOpen('flightFrom', 'from'),
                className: "d-flex align-items-center",
                style: {
                  borderBottom: '1px solid gray',
                  paddingBottom: '5px'
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                  icon: _iconify_icons_fa_location_arrow__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                  className: "mr-2 text-primary"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("label", {
                    className: "title font-weight-bold",
                    children: "Dari"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("small", {
                    className: "md-result",
                    children: (stateFrom === null || stateFrom === void 0 ? void 0 : (_stateFrom$selected = stateFrom.selected) === null || _stateFrom$selected === void 0 ? void 0 : _stateFrom$selected.text) || 'Cari tujuan'
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
                onClick: () => handleOpen('flightTo', 'to'),
                className: "d-flex align-items-center mt-2",
                style: {
                  borderBottom: '1px solid gray',
                  paddingBottom: '5px'
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                  icon: _iconify_icons_fa_location_arrow__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                  className: "mr-2 text-primary"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("label", {
                    className: "title font-weight-bold",
                    children: "Ke"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("small", {
                    className: "md-result",
                    children: (stateTo === null || stateTo === void 0 ? void 0 : (_stateTo$selected = stateTo.selected) === null || _stateTo$selected === void 0 ? void 0 : _stateTo$selected.text) || 'Cari tujuan'
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
                className: "d-flex mt-3",
                style: {
                  borderBottom: '1px solid gray',
                  paddingBottom: '5px'
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
                  onClick: () => handleOpen('date', 'from'),
                  className: "w-100 d-flex align-items-center",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: _iconify_icons_fa_calendar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                    className: "mr-2 text-primary"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("label", {
                      className: "title",
                      children: "Beragkat"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("small", {
                      className: "md-result",
                      children: moment__WEBPACK_IMPORTED_MODULE_15___default()(date.from).format('DD MMM YYYY')
                    })]
                  })]
                }), flightReturn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
                  onClick: () => handleOpen('date', 'to'),
                  className: "w-100 d-flex align-items-center",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: _iconify_icons_fa_calendar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                    className: "mr-2 text-primary"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("label", {
                      className: "title",
                      children: "Pulang"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("small", {
                      className: "md-result",
                      children: moment__WEBPACK_IMPORTED_MODULE_15___default()(date.to).format('DD MMM YYYY')
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
                onClick: () => handleOpen('classCabin'),
                className: "d-flex align-items-center mt-3",
                style: {
                  borderBottom: '1px solid gray',
                  paddingBottom: '5px'
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                  icon: (_iconify_icons_fa_solid_tag__WEBPACK_IMPORTED_MODULE_6___default()),
                  className: "mr-2 text-primary"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("label", {
                    className: "title font-weight-bold",
                    children: "Kelas Kabin"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("small", {
                    className: "md-result",
                    children: listClass[classCabin]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
                onClick: () => handleOpen('passanger'),
                className: "d-flex align-items-center mt-3",
                style: {
                  borderBottom: '1px solid gray',
                  paddingBottom: '5px'
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                  icon: _iconify_icons_fa_user__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                  className: "mr-2 text-primary"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("label", {
                    className: "title font-weight-bold",
                    children: "Penumpang"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("small", {
                    className: "md-result",
                    children: [countPassanger(), " Orang"]
                  })]
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("div", {
                className: "d-flex align-items-center mt-3",
                style: {
                  paddingBottom: '5px'
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
                  className: "custom-control custom-switch",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("input", {
                    type: "checkbox",
                    cchecked: directOnly,
                    onChange: () => setDirectOnly(!directOnly),
                    className: "custom-control-input",
                    id: "directOnly"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("label", {
                    style: {
                      fontSize: '12px'
                    },
                    className: "custom-control-label",
                    htmlFor: "directOnly",
                    children: "Penerbangan Langsung"
                  })]
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("button", {
              type: "button",
              onClick: handleSearch,
              className: "btn btn-warning mt-3 font-weight-bold shadow btn-sm btn-block",
              children: "Search"
            })]
          })
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_shared_DrawerSearchFlight__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      open: open.flightFrom,
      onClose: () => handleOpen('flightFrom'),
      options: stateFrom.options,
      isLoading: stateFrom.isLoading,
      handleChange: handleChangeFrom
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_shared_DrawerSearchFlight__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      open: open.flightTo,
      onClose: () => handleOpen('flightTo'),
      options: stateTo.options,
      isLoading: stateTo.isLoading,
      handleChange: handleChangeTo
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_shared_DrawerFlightDate__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
      flightReturn: flightReturn,
      isOpen: open.date,
      onClose: () => handleOpen('date', 'from'),
      handleChange: handleChangeDate,
      date: date,
      dateActive: dateActive,
      handleChangeDateActive: handleChangeDateActive
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_shared_DrawerClassFlight__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
      value: classCabin,
      handleChange: setClassCabin,
      open: open.classCabin,
      onClose: () => handleOpen('classCabin')
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_shared_DrawerPassangerFlight__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
      open: open.passanger,
      onClose: () => handleOpen('passanger'),
      passanger: passanger,
      addPassanger: addPassanger,
      reducedPassanger: reducedPassanger
    })]
  });
}

const RootStyled = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "FlightPage__RootStyled",
  componentId: "sc-1q5gsih-0"
})(["min-height:100vh;background:linear-gradient(0deg,rgba(255,255,255,1) 0%,rgba(0,112,186,1) 40%);;background-position:center bottom;background-repeat:no-repeat;background-size:200%;width:100%;color:white;position:relative;label{&.title{font-size:14px;font-weight:bold;display:block;margin-bottom:-6px;}}.md-result{font-size:12px;}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlightPage);
});

/***/ }),

/***/ 9959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9368);
/* harmony import */ var _biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





function DrawerClassFlight(props) {
  const {
    open,
    onClose,
    value,
    handleChange
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__.BottomSheet, {
    open: open,
    onClose: onClose,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__.SheetContent, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
        className: "list-group",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("list-group-item", {
            'text-primary': value === 'E'
          }),
          onClick: () => handleChange('E'),
          children: "ECONOMY CLASS"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("list-group-item", {
            'text-primary': value === 'S'
          }),
          onClick: () => handleChange('S'),
          children: "PREMIUM ECONOMY"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("list-group-item", {
            'text-primary': value === 'B'
          }),
          onClick: () => handleChange('B'),
          children: "BUSINESS CLASS"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("list-group-item", {
            'text-primary': value === 'F'
          }),
          onClick: () => handleChange('F'),
          children: "FIRST CLASS"
        })]
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawerClassFlight);

/***/ }),

/***/ 1388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9368);
/* harmony import */ var _biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8261);
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_day_picker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









function DrawerFlightDate(props) {
  const {
    isOpen,
    onClose,
    flightReturn,
    handleChange,
    date,
    dateActive,
    handleChangeDateActive
  } = props;
  const modifiers = {
    start: date.from,
    end: date.to
  };
  const disabledDays = dateActive === 'from' ? {
    before: new Date()
  } : [{
    before: date.from
  }, {
    before: new Date()
  }];
  const selectedDays = flightReturn ? [date.from, {
    from: date.from,
    to: date.to
  }] : [date.from];

  const onDayClick = (val, modifiers = {}) => {
    if (modifiers.disabled) {
      return;
    }

    handleChange(dateActive, val);

    if (dateActive === 'from' && flightReturn) {
      handleChangeDateActive('to');
    } else {
      onClose();
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(DrawerBottom, {
    open: isOpen,
    height: 0.1,
    onClose: onClose,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__.SheetHeader, {
      className: "bg-primary text-white d-block pt-3 pb-3 px-2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "d-flex justify-content-between align-items-center mx-2",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h5", {
          className: "font-weight-bold w-100",
          children: "Tanggal Penerbangan"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h5", {
          onClick: onClose,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
            class: "fas fa-times"
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__.SheetContent, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((react_day_picker__WEBPACK_IMPORTED_MODULE_3___default()), {
        showOutsideDays: true,
        month: date[dateActive],
        modifiers: modifiers,
        disabledDays: disabledDays,
        onDayClick: onDayClick,
        selectedDays: selectedDays,
        className: "w-100 Selectable"
      })
    })]
  });
}

const DrawerBottom = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__.BottomSheet).withConfig({
  displayName: "DrawerFlightDate__DrawerBottom",
  componentId: "sc-1cs0cxa-0"
})(["border-radius:0;min-height:100%;max-height:100%;.text-date{position:relative;&.date-active::before{content:'';position:absolute;bottom:-10px;left:50%;width:13px;height:13px;background:#E0A800;border-radius:50%;}}"]);
DrawerFlightDate.PropTypes = {
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  handleChange: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawerFlightDate);

/***/ }),

/***/ 4968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9368);
/* harmony import */ var _biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




function DrawerPassangerFlight(props) {
  const {
    passanger,
    addPassanger,
    reducedPassanger,
    open,
    onClose
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__.BottomSheet, {
    open: open,
    onClose: onClose,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__.SheetContent, {
      style: {
        padding: '20px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "d-flex align-items-center justify-content-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("b", {
              children: "Dewasa"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("small", {
            className: "text-muted",
            children: " > 12 thn"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "input-group w-50 mb-2 cariqty",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "input-group-prepend",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
              onClick: () => reducedPassanger('adult'),
              className: "btn btn-outline-secondary form-control flight_minus",
              type: "button",
              children: "-"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("input", {
            type: "text",
            className: "form-control text-center numberonly hitung flight_dropdewasa",
            value: passanger.adult,
            readOnly: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "input-group-append",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
              onClick: () => addPassanger('adult'),
              className: "btn btn-outline-secondary form-control flight_plus",
              type: "button",
              children: "+"
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "d-flex align-items-center justify-content-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("b", {
              children: "Anak-anak"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("small", {
            className: "text-muted",
            children: "2-12 thn"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "input-group w-50 mb-2 cariqty",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "input-group-prepend",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
              onClick: () => reducedPassanger('child'),
              className: "btn btn-outline-secondary form-control flight_minus0",
              type: "button",
              children: "-"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("input", {
            value: passanger['child'],
            type: "text",
            className: "form-control text-center numberonly hitung flight_dropanak",
            name: "anak",
            readOnly: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "input-group-append",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
              onClick: () => addPassanger('child'),
              className: "btn btn-outline-secondary form-control flight_plus",
              type: "button",
              children: "+"
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "d-flex align-items-center justify-content-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("b", {
              children: "Bayi"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("small", {
            className: "text-muted",
            children: "0-2 thn"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "input-group w-50 mb-2 cariqty",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "input-group-prepend",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
              onClick: () => reducedPassanger('infant'),
              className: "btn btn-outline-secondary form-control flight_minus0",
              type: "button",
              children: "-"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("input", {
            value: passanger.infant,
            type: "text",
            className: "form-control text-center numberonly hitung flight_dropbayi",
            readOnly: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "input-group-append",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
              onClick: () => addPassanger('infant'),
              className: "btn btn-outline-secondary form-control flight_plus",
              type: "button",
              children: "+"
            })
          })]
        })]
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawerPassangerFlight);

/***/ }),

/***/ 1064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9368);
/* harmony import */ var _biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_placeholder_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3419);
/* harmony import */ var react_placeholder_lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_placeholder_lib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






function DrawerSearchFlight(props) {
  const {
    options,
    handleChange,
    isLoading,
    open,
    onClose
  } = props;
  const arr = [1, 2, 3, 4, 5];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(RootStyled, {
    open: open,
    onClose: onClose,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__.SheetHeader, {
      style: {
        display: 'block',
        position: 'sticky',
        left: 0,
        top: 0,
        zIndex: 1,
        background: 'white',
        paddingTop: '15px'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "d-flex justify-content-between mb-2 align-items-center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h5", {
            className: "font-weight-bold w-100",
            children: "Pilih Kota atau Bandara"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h5", {
            onClick: onClose,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
              class: "fas fa-times"
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "form-group",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
            type: "text",
            onChange: e => handleChange('keyword', e.target.value),
            className: "form-control",
            style: {
              fontSize: '14x'
            },
            placeholder: "Search Airport"
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("ul", {
        class: "list-group",
        style: {
          height: '100%'
        },
        children: isLoading ? arr.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
          className: "d-flex justify-content-between align-items-center py-2 px-1",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((react_placeholder_lib__WEBPACK_IMPORTED_MODULE_1___default()), {
            type: "text",
            rows: 1
          })
        })) : options.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
          onClick: () => handleChange('selected', item),
          className: "list-group-item border-0 p-0",
          style: {
            borderBottom: '1px solid black'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("small", {
            className: "font-weight-bold m-0",
            children: [item.text, " (", item.id, ")"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("small", {
            className: "text-secondary d-block m-0",
            children: [item.city, ", ", item.country_name]
          })]
        }))
      })
    })]
  });
}

const RootStyled = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__.BottomSheet).withConfig({
  displayName: "DrawerSearchFlight__RootStyled",
  componentId: "sc-1rhac7c-0"
})(["height:80vh;"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawerSearchFlight);

/***/ }),

/***/ 7837:
/***/ (() => {

var data = {
	"body": "<path d=\"M1152 704q0-185-131.5-316.5T704 256T387.5 387.5T256 704t131.5 316.5T704 1152t316.5-131.5T1152 704zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124q-143 0-273.5-55.5t-225-150t-150-225T0 704t55.5-273.5t150-225t225-150T704 0t273.5 55.5t225 150t150 225T1408 704q0 220-124 399l343 343q37 37 37 90z\" fill=\"currentColor\"/>",
	"width": 1664,
	"height": 1664
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (data)));


/***/ })

};
;