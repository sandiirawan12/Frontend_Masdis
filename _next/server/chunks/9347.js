"use strict";
exports.id = 9347;
exports.ids = [9347];
exports.modules = {

/***/ 4457:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6981);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5566);
/* harmony import */ var _iconify_icons_fa_solid_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2276);
/* harmony import */ var _iconify_icons_fa_solid_user__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_user__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_2__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];








function DropdownPassangerTrain(props) {
  const {
    passanger,
    addPassanger,
    reducedPassanger
  } = props;
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const countPassanger = () => {
    let result = 0;
    Object.keys(passanger).forEach(item => {
      result += Number(passanger[item]);
    });
    return result;
  };

  const handleOpen = () => {
    setIsOpen(prevState => !prevState);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
      isOpen: isOpen,
      toggle: handleOpen,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.DropdownToggle, {
        tag: 'div',
        "data-toggle": "dropdown",
        className: "input-group",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "input-group-append",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
            className: "input-group-text text-danger",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
              icon: "heroicons:user-group"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", {
          type: "text",
          readOnly: true,
          value: `${countPassanger()} Penumpang`,
          className: "form-control"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu, {
        right: true,
        className: "px-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "d-flex align-items-center justify-content-between",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("b", {
                children: "Dewasa"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("small", {
              className: "text-muted",
              children: "\u2265 3 Tahun"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "input-group w-50 mb-2 cariqty",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: "input-group-prepend",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                onClick: () => reducedPassanger('adult'),
                className: "btn btn-outline-secondary form-control flight_minus",
                type: "button",
                children: "-"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", {
              type: "text",
              className: "form-control text-center numberonly hitung flight_dropdewasa",
              value: passanger.adult,
              readOnly: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: "input-group-append",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                onClick: () => addPassanger('adult'),
                className: "btn btn-outline-secondary form-control flight_plus",
                type: "button",
                children: "+"
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "d-flex align-items-center justify-content-between",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("b", {
                children: "Bayi"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("small", {
              className: "text-muted",
              children: [" ", '< 3', " Tahun"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "input-group w-50 mb-2 cariqty",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: "input-group-prepend",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                onClick: () => reducedPassanger('infant'),
                className: "btn btn-outline-secondary form-control flight_minus0",
                type: "button",
                children: "-"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", {
              value: passanger.infant,
              type: "text",
              className: "form-control text-center numberonly hitung flight_dropbayi",
              readOnly: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: "input-group-append",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                onClick: () => addPassanger('infant'),
                className: "btn btn-outline-secondary form-control flight_plus",
                type: "button",
                children: "+"
              })
            })]
          })]
        })]
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownPassangerTrain);
});

/***/ }),

/***/ 9347:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5566);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9103);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_fa_solid_exchange_alt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2947);
/* harmony import */ var _iconify_icons_fa_solid_exchange_alt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_exchange_alt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9723);
/* harmony import */ var react_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9124);
/* harmony import */ var react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_day_picker_moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6582);
/* harmony import */ var react_day_picker_moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _api_home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7906);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _DropdownPassangerTrain__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4457);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _iconify_icons_fa_search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7837);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5675);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_placeholder_lib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3419);
/* harmony import */ var react_placeholder_lib__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_placeholder_lib__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_1__, _DropdownPassangerTrain__WEBPACK_IMPORTED_MODULE_11__]);
([_iconify_react__WEBPACK_IMPORTED_MODULE_1__, _DropdownPassangerTrain__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



























function WidgetTrain(props) {
  var _options$from, _options$to;

  const {
    options,
    handleChangeOptions
  } = props;
  const {
    access_token
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.token);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
  const debouncedFetchFrom = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(_.debounce((token, query, handleChange) => {
    _api_home__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getAutocompleteTrain */ .Z.getAutocompleteTrain(token, {
      product: 'train',
      q: query
    }).then(res => {
      handleChange('options', res.data);
      handleChange('isLoading', false);
    });
  }, 2000)).current;
  const debouncedFetchTo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(_.debounce((token, query, handleChange) => {
    _api_home__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getAutocompleteTrain */ .Z.getAutocompleteTrain(token, {
      product: 'train',
      q: query
    }).then(res => {
      // if (res.success) {
      handleChange('options', res.data); // }

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
    selected: []
  });
  const {
    0: stateTo,
    1: setStateTo
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    options: [],
    isLoading: false,
    keyword: (_options$to = options === null || options === void 0 ? void 0 : options.to) !== null && _options$to !== void 0 ? _options$to : '',
    selected: []
  });
  const {
    0: date,
    1: setDate
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    from: options !== null && options !== void 0 && options.dateFrom ? toDate(options.dateFrom) : moment__WEBPACK_IMPORTED_MODULE_8___default()(new Date()).add(1, 'days').toDate(),
    to: options !== null && options !== void 0 && options.dateTo ? toDate(options.dateTo) : options !== null && options !== void 0 && options.dateFrom ? moment__WEBPACK_IMPORTED_MODULE_8___default()(toDate(options.dateFrom)).add(1, 'days').toDate() : moment__WEBPACK_IMPORTED_MODULE_8___default()(new Date()).add(2, 'days').toDate()
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
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(options !== null && options !== void 0 && options.classCabin ? options.classCabin : '');
  const {
    0: exchangeTrain,
    1: setExchangeTrain
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const refTo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    0: trainReturn,
    1: setTrainReturn
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(options !== null && options !== void 0 && options.dateTo ? true : false);
  const {
    0: directOnly,
    1: setDirectOnly
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(options !== null && options !== void 0 && options.direct ? !options.direct : false);

  const handleChangeFrom = (name, value) => {
    setStateFrom(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      [name]: value
    }));
  };

  const handleChangeTo = (name, value) => {
    setStateTo(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      [name]: value
    }));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (options !== null && options !== void 0 && options.from) {
      _api_home__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getAutocompleteTrain */ .Z.getAutocompleteTrain(access_token, {
        product: 'train',
        q: options === null || options === void 0 ? void 0 : options.from
      }).then(res => {
        if (res.success) {
          handleChangeFrom('selected', res.data.filter(item => item.station_code === options.from));
        }
      });
    }
  }, [options === null || options === void 0 ? void 0 : options.from]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (options !== null && options !== void 0 && options.to) {
      _api_home__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getAutocompleteTrain */ .Z.getAutocompleteTrain(access_token, {
        product: 'train',
        q: options === null || options === void 0 ? void 0 : options.to
      }).then(res => {
        if (res.success) {
          handleChangeTo('selected', res.data.filter(item => item.station_code === options.to));
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
    setExchangeTrain(prevState => !prevState);
  };

  const handleSearch = () => {
    const data = passanger;

    if (stateFrom.selected.length === 0) {
      react_toastify__WEBPACK_IMPORTED_MODULE_19__.toast.error(`Stasiun asal belum diisi`);
    }

    if (stateTo.selected.length === 0) {
      react_toastify__WEBPACK_IMPORTED_MODULE_19__.toast.error(`Stasiun tujuan belum diisi`);
    }

    if (data.infant > data.adult) {
      react_toastify__WEBPACK_IMPORTED_MODULE_19__.toast.error(`Bayi tidak boleh melebihi jumlah dewasa`);
    } // if (date.from > date90) {
    //   toast.error(`Jadwal yang tersedia yaitu maksimal 90 hari dari tanggal hari ini`)
    // }


    if (stateFrom.selected.length > 0 && stateTo.selected.length > 0) {
      const params = _objectSpread(_objectSpread({}, passanger), {}, {
        from: stateFrom.selected[0].station_code,
        to: stateTo.selected[0].station_code,
        dateFrom: moment__WEBPACK_IMPORTED_MODULE_8___default()(date.from).format('DD-MM-YYYY'),
        dateTo: trainReturn ? moment__WEBPACK_IMPORTED_MODULE_8___default()(date.to).format('DD-MM-YYYY') : '',
        direct: trainReturn === false ? 'OW' : 'RT'
      });

      if (handleChangeOptions) {
        handleChangeOptions(params);
      }

      router.push(`/product/train?${query_string__WEBPACK_IMPORTED_MODULE_2___default().stringify(params)}`);
    }
  };

  const handleDateFromChange = from => {
    if (moment__WEBPACK_IMPORTED_MODULE_8___default()(from).isBefore(date.to)) {
      setDate(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        from
      }));
    } else {
      setDate(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        from,
        to: moment__WEBPACK_IMPORTED_MODULE_8___default()(from).add(1, 'days').toDate()
      }));
    }
  };

  const handleDateToChange = to => {
    setDate(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      to
    }));
  };

  const modifiers = !trainReturn ? {
    start: date.from
  } : {
    start: date.from,
    end: date.to
  };

  const handleChangeTrainReturn = () => {
    setTrainReturn(prevState => !prevState);
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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
    style: {
      padding: '13px',
      color: 'white',
      background: 'linear-gradient(90deg, rgba(135,15,0,1) 0%, rgba(185,45,28,1) 50%, rgba(255,26,0,1) 100%)',
      borderRadius: '20px'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
      className: "d-flex justify-content-between align-items-center mb-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
        className: "d-flex",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
          className: "custom-control custom-radio mx-2",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("input", {
            type: "radio",
            onChange: handleChangeTrainReturn,
            className: "custom-control-input form-widget form-isreturn",
            id: "oneway",
            checked: !trainReturn
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("label", {
            className: "custom-control-label font-weight-bold",
            htmlFor: "oneway",
            children: "One Way"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
          className: "custom-control custom-radio mx-2",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("input", {
            checked: trainReturn,
            onChange: handleChangeTrainReturn,
            type: "radio",
            className: "custom-control-input form-widget ",
            id: "pulangterbang"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("label", {
            className: "custom-control-label font-weight-bold",
            htmlFor: "pulangterbang",
            children: "Round Trip"
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("div", {
        className: "d-flex",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("div", {
          className: "mx-2",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_DropdownPassangerTrain__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            passanger: passanger,
            addPassanger: addPassanger,
            reducedPassanger: reducedPassanger
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("ul", {
      className: "list-group list-group-horizontal text-dark list-menu",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(ListItemStyled, {
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("list-group-item pb-0", {
          'w-25': trainReturn,
          'w-35': !trainReturn
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
          className: "form-group mb-2",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("label", {
            className: "mb-0 font-weight-bold",
            children: "Dari Stasiun"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_4__.Typeahead, {
            id: "from",
            inputProps: {
              style: inputStyle,
              placeholder: 'Stasiun Asal'
            },
            selected: stateFrom.selected,
            onChange: val => handleChangeFrom('selected', val),
            filterBy: () => true,
            labelKey: "station_name",
            onSearch: () => {},
            onInputChange: q => handleChangeFrom('keyword', q),
            options: stateFrom.options,
            renderMenuItemChildren: option => stateFrom.isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("span", {
              className: "d-flex justify-content-between align-items-center py-2 px-1",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((react_placeholder_lib__WEBPACK_IMPORTED_MODULE_17___default()), {
                type: "text",
                rows: 1
              })
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("span", {
                className: "d-flex justify-content-between align-items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("strong", {
                    style: {
                      textOverflow: 'ellipsis',
                      width: '220px',
                      fontSize: '16px',
                      display: 'inline-block',
                      whiteSpace: 'break-spaces'
                    },
                    children: option.station_name
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("small", {
                    style: {
                      width: '100%',
                      display: 'inline-block',
                      whiteSpace: 'break-spaces'
                    },
                    children: [option.city, ", Indonesia"]
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("span", {
                  className: "badge bg-danger text-uppercase text-white ml-1",
                  children: option.station_code
                })]
              })
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(ListItemStyled, {
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("list-group-item pb-0", {
          'w-25': trainReturn,
          'w-35': !trainReturn
        }),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("div", {
          className: "exchange-flight p-1 bg-white",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("button", {
            onClick: handleSwitch,
            type: "button",
            className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("btn rounded-circle btn-danger btn-exchange-flight p-0", {
              'rotate': exchangeTrain
            }),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
              icon: (_iconify_icons_fa_solid_exchange_alt__WEBPACK_IMPORTED_MODULE_3___default()),
              style: {
                verticalAlign: 'middle',
                marginTop: '-4.7px'
              }
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
          className: "form-group mb-2 ml-2",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("label", {
            className: "mb-0 font-weight-bold",
            children: "Ke Stasiun"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_4__.Typeahead, {
            id: "to",
            inputProps: {
              placeholder: 'Stasiun Tujuan',
              style: inputStyle
            },
            selected: stateTo.selected,
            onChange: val => handleChangeTo('selected', val),
            filterBy: () => true,
            labelKey: "station_name" // isLoading={stateTo.isLoading}
            ,
            onSearch: () => {},
            onInputChange: q => handleChangeTo('keyword', q),
            options: stateTo.options,
            renderMenuItemChildren: option => stateTo.isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("span", {
              className: "d-flex justify-content-between align-items-center py-2 px-1",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((react_placeholder_lib__WEBPACK_IMPORTED_MODULE_17___default()), {
                type: "text",
                rows: 1
              })
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("span", {
                className: "d-flex justify-content-between align-items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("strong", {
                    style: {
                      textOverflow: 'ellipsis',
                      width: '220px',
                      fontSize: '16px',
                      display: 'inline-block',
                      whiteSpace: 'break-spaces'
                    },
                    children: option.station_name
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("small", {
                    style: {
                      width: '100%',
                      display: 'inline-block',
                      whiteSpace: 'break-spaces'
                    },
                    children: [option.city, ", Indonesia"]
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("span", {
                  className: "badge bg-danger text-uppercase text-white ml-1",
                  children: option.station_code
                })]
              })
            })
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(ListItemStyled, {
        className: "list-group-item pb-0",
        style: {
          width: '20%'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("form-group mb-2 InputFromTo", {
            'range': trainReturn
          }),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("label", {
            className: "mb-0 d-block font-weight-bold",
            children: "Berangkat"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_6___default()), {
            value: date.from,
            formatDate: react_day_picker_moment__WEBPACK_IMPORTED_MODULE_7__.formatDate,
            format: 'ddd, DD MMM YYYY',
            parseDate: react_day_picker_moment__WEBPACK_IMPORTED_MODULE_7__.parseDate,
            dayPickerProps: {
              disabledDays: {
                before: new Date()
              },
              // selectedDays: [date.from],
              selectedDays: [date.from, trainReturn && {
                from: date.from,
                to: date.to
              }],
              modifiers,
              numberOfMonths: trainReturn ? 2 : 1,
              locale: 'id',
              localeUtils: (react_day_picker_moment__WEBPACK_IMPORTED_MODULE_7___default()),
              onDayClick: () => {
                var _refTo$current;

                return !trainReturn && ((_refTo$current = refTo.current) === null || _refTo$current === void 0 ? void 0 : _refTo$current.getInput().focus());
              }
            },
            onDayChange: handleDateFromChange,
            inputProps: {
              className: 'form-control w-100',
              readOnly: true,
              style: inputStyle
            }
          })]
        })
      }), trainReturn && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(ListItemStyled, {
        style: {
          width: '20%'
        },
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("list-group-item pb-0 InputFromTo range InputFromTo-to"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
          className: "form-group mb-2",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("label", {
            className: "mb-0 font-weight-bold",
            children: "Pulang"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_6___default()), {
            ref: refTo,
            format: 'ddd, DD MMM YYYY',
            value: date.to,
            formatDate: react_day_picker_moment__WEBPACK_IMPORTED_MODULE_7__.formatDate,
            parseDate: react_day_picker_moment__WEBPACK_IMPORTED_MODULE_7__.parseDate,
            dayPickerProps: {
              selectedDays: [date.from, {
                from: date.from,
                to: date.to
              }],
              disabledDays: [{
                before: date.from
              }, {
                before: new Date()
              }],
              modifiers,
              localeUtils: (react_day_picker_moment__WEBPACK_IMPORTED_MODULE_7___default()),
              month: date.from,
              fromMonth: date.from,
              locale: 'id',
              numberOfMonths: 2
            },
            onDayChange: handleDateToChange,
            style: {
              width: '200px'
            },
            inputProps: {
              className: 'form-control bg-transparent',
              readOnly: true,
              style: inputStyle
            }
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(ListItemStyled, {
        className: "list-group-item p-0 bg-warning w-20 tombolcari",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("button", {
          onClick: handleSearch,
          className: "btn btn-transparent d-flex justify-content-center align-items-center font-weight-bold h-100 btn-block",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("div", {
            style: {
              width: '25px',
              height: '25px',
              position: 'relative'
            },
            className: "d-inline-block",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(next_image__WEBPACK_IMPORTED_MODULE_14__["default"], {
              layout: "fill",
              src: 'https://cdn.masterdiskon.com/masterdiskon/icon/fe/luv.png'
            })
          }), "Search"]
        })
      })]
    })]
  });
}

const inputStyle = {
  border: 'none',
  height: 'auto',
  width: '100%',
  boxShadow: 'none',
  paddingLeft: 0,
  marginTop: '-5px',
  background: 'transparent'
};
const ListItemStyled = styled_components__WEBPACK_IMPORTED_MODULE_15___default().li.withConfig({
  displayName: "WidgetTrain__ListItemStyled",
  componentId: "sc-1adw3im-0"
})(["height:83px !important;padding-bottom:0 !important;"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidgetTrain);
});

/***/ })

};
;