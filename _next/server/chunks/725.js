"use strict";
exports.id = 725;
exports.ids = [725];
exports.modules = {

/***/ 1056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






const {
  Dropdown,
  DropdownToggle,
  DropdownMenu
} = __webpack_require__(6981);

function DropdownVisitor(props) {
  var _defaultChildAge;

  const {
    visitor,
    room,
    childAge,
    handleAddVisitor,
    handleChangeAge,
    willSearch,
    handleChangeRoom,
    handleReduceVisitor
  } = props;

  const defaultChildAge = () => {
    if (childAge) {
      if (typeof childAge === 'string') {
        return [childAge];
      } else if (typeof childAge === 'object') {
        return childAge;
      }
    }

    return undefined;
  };

  const {
    0: children,
    1: setChildren
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_defaultChildAge = defaultChildAge()) !== null && _defaultChildAge !== void 0 ? _defaultChildAge : []);
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let arr = [];

    for (let index = 0; index < visitor.child; index++) {
      arr[index] = index;
    }

    setChildren(arr);
  }, [visitor.child]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Dropdown, {
      style: {
        marginTop: '-7px'
      },
      isOpen: isOpen,
      toggle: () => setIsOpen(!isOpen),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(DropdownToggle, {
        tag: 'div',
        className: "form-group",
        "data-toggle": "dropdown",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
          type: "text",
          readOnly: true,
          value: `${Number(visitor['child'] || 0) + Number(visitor['adult'] || 0)} Tamu, ${room} Kamar`,
          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("form-control border-0 m-0 p-0 bg-transparent", {
            'font-weight-bold': !willSearch
          }),
          style: {
            cursor: 'pointer',
            boxShadow: 'none',
            color: 'black'
          }
        })
      }, visitor.child), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(DropdownMenu, {
        right: true,
        className: "px-3",
        style: {
          maxHeight: '50vh',
          overflowY: 'auto',
          width: '280px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "d-flex align-items-center justify-content-between",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("b", {
                children: "Tamu"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "input-group w-50 mb-2 cariqty",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              className: "input-group-prepend",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
                style: {
                  cursor: visitor['adult'] === 1 && 'no-drop'
                },
                disabled: visitor['adult'] === 1,
                onClick: () => handleReduceVisitor('adult'),
                className: "btn btn-outline-secondary form-control flight_minus",
                type: "button",
                children: "-"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
              type: "text",
              value: visitor['adult'],
              className: "form-control text-center",
              readOnly: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              className: "input-group-append",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
                onClick: () => handleAddVisitor('adult'),
                className: "btn btn-outline-secondary",
                style: {
                  cursor: visitor['adult'] === 32 && 'no-drop'
                },
                disabled: visitor['adult'] === 32,
                type: "button",
                children: "+"
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "d-flex align-items-center justify-content-between",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("b", {
                children: "Kamar"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("br", {})]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "input-group w-50 mb-2 cariqty",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              className: "input-group-prepend",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
                style: {
                  cursor: room === 1 && 'no-drop'
                },
                disabled: room === 1,
                onClick: () => handleChangeRoom('reduce'),
                className: "btn btn-outline-secondary form-control flight_minus0",
                type: "button",
                children: "-"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
              type: "text",
              value: room,
              className: "form-control text-center",
              readOnly: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              className: "input-group-append",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
                style: {
                  cursor: room === 8 && 'no-drop'
                },
                disabled: room === 8,
                onClick: () => handleChangeRoom('add'),
                className: "btn btn-outline-secondary form-control flight_plus",
                type: "button",
                children: "+"
              })
            })]
          })]
        }), children.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              className: "col-md-12",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("label", {
                className: "text-secondary",
                children: "Tambahkan umur anak"
              })
            }), children.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              className: "col-md-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label", {
                  for: "",
                  children: ["Anak ", ++item]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("select", {
                  value: childAge[index],
                  onChange: e => handleChangeAge(index, e.target.value),
                  className: "form-control",
                  name: "",
                  id: "",
                  children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("option", {
                    children: item
                  }))
                })]
              })
            }))]
          })]
        })]
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownVisitor);

/***/ }),

/***/ 725:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5566);
/* harmony import */ var _iconify_icons_fa_solid_bed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8710);
/* harmony import */ var _iconify_icons_fa_solid_bed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_bed__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_fa_solid_city__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7324);
/* harmony import */ var _iconify_icons_fa_solid_city__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_city__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_fa_solid_map_marker_alt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3576);
/* harmony import */ var _iconify_icons_fa_solid_map_marker_alt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_map_marker_alt__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_fa_solid_globe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(197);
/* harmony import */ var _iconify_icons_fa_solid_globe__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_globe__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_fa_solid_moon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5129);
/* harmony import */ var _iconify_icons_fa_solid_moon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_moon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9723);
/* harmony import */ var react_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_day_picker_moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6582);
/* harmony import */ var react_day_picker_moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _api_home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7906);
/* harmony import */ var react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9124);
/* harmony import */ var react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _DropdownVisitor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1056);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9103);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1566);
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_placeholder__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5675);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_2__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























const icon = {
  city: (_iconify_icons_fa_solid_city__WEBPACK_IMPORTED_MODULE_4___default()),
  area: (_iconify_icons_fa_solid_map_marker_alt__WEBPACK_IMPORTED_MODULE_5___default()),
  hotel: (_iconify_icons_fa_solid_bed__WEBPACK_IMPORTED_MODULE_3___default()),
  province: (_iconify_icons_fa_solid_globe__WEBPACK_IMPORTED_MODULE_6___default())
};

function WidgetHotel(props) {
  var _options$childAge, _options$room, _options$adult, _options$child;

  const {
    options,
    handleChangeOptions,
    productId,
    willSearch,
    isDetail,
    cityUser,
    latUser,
    lngUser
  } = props;
  const {
    0: hotelSelected,
    1: setHotelSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: listHotel,
    1: setListHotel
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: keyword,
    1: setKeyword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(options !== null && options !== void 0 && options.keyword ? options === null || options === void 0 ? void 0 : options.keyword : '');
  const {
    access_token
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.token);
  const {
    0: loadingSearch,
    1: setLoadingSearch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: date,
    1: setDate
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    checkin: options !== null && options !== void 0 && options.dateFrom ? toDate(options === null || options === void 0 ? void 0 : options.dateFrom) : moment__WEBPACK_IMPORTED_MODULE_12___default()().add(1, 'days').toDate(),
    checkout: options !== null && options !== void 0 && options.dateTo ? toDate(options === null || options === void 0 ? void 0 : options.dateTo) : moment__WEBPACK_IMPORTED_MODULE_12___default()().add(2, 'days').toDate()
  });

  function toDate(date) {
    var from = date.split("-");
    return new Date(from[2], from[1] - 1, from[0]);
  }

  const {
    0: childAge,
    1: setChildAge
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((_options$childAge = options === null || options === void 0 ? void 0 : options.childAge) !== null && _options$childAge !== void 0 ? _options$childAge : []);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_16__.useRouter)();
  const {
    0: night,
    1: setNight
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const datex = new Date();
  const {
    0: dayName,
    1: setdayName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(moment__WEBPACK_IMPORTED_MODULE_12___default()(datex).format('dddd'));
  const {
    0: colorTab,
    1: setcolorTab
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: colorA,
    1: setcolorA
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: colorB,
    1: setcolorB
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: colorC,
    1: setcolorC
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: room,
    1: setRoom
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((_options$room = options === null || options === void 0 ? void 0 : options.room) !== null && _options$room !== void 0 ? _options$room : 1);
  const {
    0: visitor,
    1: setVisitor
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    adult: (_options$adult = options === null || options === void 0 ? void 0 : options.adult) !== null && _options$adult !== void 0 ? _options$adult : 1,
    child: (_options$child = options === null || options === void 0 ? void 0 : options.child) !== null && _options$child !== void 0 ? _options$child : 0
  });
  const refCheckout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  const handleSearch = () => {
    if (!hotelSelected || hotelSelected.length === 0) {
      // alert('Masukan detail tujuan')
      let url = '/product/hotel';

      let params = _objectSpread(_objectSpread({}, visitor), {}, {
        from: keyword,
        city: cityUser,
        dateFrom: moment__WEBPACK_IMPORTED_MODULE_12___default()(date.checkin).format('DD-MM-YYYY').toString(),
        dateTo: moment__WEBPACK_IMPORTED_MODULE_12___default()(date.checkout).format('DD-MM-YYYY').toString(),
        room,
        keyword: keyword,
        childAge
      }); // if (hotelSelected[0].productId) {
      //     url = `/product/hotel/detail`
      //     params = { ...params, productId: hotelSelected[0].productId }
      // } else if (isDetail) {
      //     return router.push(`${url}?${queryString.stringify(params)}`)
      // }


      if (handleChangeOptions) {
        handleChangeOptions(params);
      }

      router.push(`${url}?${query_string__WEBPACK_IMPORTED_MODULE_15___default().stringify(params)}`);
    } else {
      var _hotelSelected$, _hotelSelected$2;

      let url = '/product/hotel';

      let params = _objectSpread(_objectSpread({}, visitor), {}, {
        from: (_hotelSelected$ = hotelSelected[0]) === null || _hotelSelected$ === void 0 ? void 0 : _hotelSelected$.id,
        city: cityUser,
        dateFrom: moment__WEBPACK_IMPORTED_MODULE_12___default()(date.checkin).format('DD-MM-YYYY').toString(),
        dateTo: moment__WEBPACK_IMPORTED_MODULE_12___default()(date.checkout).format('DD-MM-YYYY').toString(),
        room,
        keyword: (_hotelSelected$2 = hotelSelected[0]) === null || _hotelSelected$2 === void 0 ? void 0 : _hotelSelected$2.name,
        childAge
      });

      if (hotelSelected[0].productId) {
        url = `/product/hotel/detail`;
        params = _objectSpread(_objectSpread({}, params), {}, {
          productId: hotelSelected[0].productId
        });
      } else if (isDetail) {
        return router.push(`${url}?${query_string__WEBPACK_IMPORTED_MODULE_15___default().stringify(params)}`);
      }

      if (handleChangeOptions) {
        handleChangeOptions(params);
      }

      router.push(`${url}?${query_string__WEBPACK_IMPORTED_MODULE_15___default().stringify(params)}`);
    }
  };

  const handleChangeAge = (index, value) => {
    const newArr = [...childAge];
    newArr[index] = value;
    setChildAge(newArr);
  };

  const handleRemoveAge = index => {
    const newArr = [...childAge];
    newArr.splice(index, 1);
    setChildAge(newArr);
  };

  const handleAddVisitor = name => {
    if (name === 'adult') {
      if (visitor.adult < 32) {
        setVisitor(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
          [name]: Number(prevState[name]) + 1
        }));
      }
    } else if (Number(visitor.child) < 10) {
      setVisitor(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        [name]: Number(prevState[name]) + 1
      }));
      handleChangeAge(visitor['child'] + 1 - 1, 1);
    }
  };

  const handleReduceVisitor = name => {
    if (name === 'adult') {
      if (visitor[name] > 1) {
        setVisitor(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
          [name]: Number(prevState[name]) - 1
        }));
      }
    } else if (visitor[name] > 0) {
      setVisitor(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        [name]: Number(prevState[name]) - 1
      }));
      handleRemoveAge(visitor['child'] - 1);
    }
  };

  const handleChangeRoom = forAct => {
    if (forAct === 'reduce') {
      if (Number(room) > 1) {
        setRoom(Number(room) - 1);
      }
    } else {
      if (Number(room) < 8) {
        setRoom(Number(room) + 1);
      }
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setNight(moment__WEBPACK_IMPORTED_MODULE_12___default()(date.checkout).diff(moment__WEBPACK_IMPORTED_MODULE_12___default()(date.checkin), 'days'));

    if (dayName === 'Senin') {
      setcolorA('#0C71B6');
      setcolorB('#DC6506');
      setcolorC('#E1C250');
    } else if (dayName === 'Selasa') {
      setcolorA('#BF3013');
      setcolorB('#DC6506');
      setcolorC('#E1C250');
    } else if (dayName === 'Rabu') {
      setcolorTab('#0A4D68');
      setcolorA('#0A4D68');
      setcolorB('#05BFDB');
      setcolorC('#00FFCA');
    } else if (dayName === 'Kamis') {
      setcolorA('#8B1874');
      setcolorB('#B71375');
      setcolorC('#E1C250');
    } else if (dayName === 'Jumat') {
      setcolorA('#00bb1f');
      setcolorB('#3aff93');
      setcolorC('#e4ff50');
    } else if (dayName === 'Sabtu') {
      setcolorA('#9300bb');
      setcolorB('#ff3afe');
      setcolorC('#ff50cb');
    } else {
      setcolorA('#0C71B6');
      setcolorB('#DC6506');
      setcolorC('#E1C250');
    }
  }, [date]);

  const handleChangeKeyword = q => {
    if (q.length > 2) {
      setKeyword(q);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setLoadingSearch(true);
    setListHotel([{
      fullname: ''
    }, {
      fullname: ''
    }, {
      fullname: ''
    }, {
      fullname: ''
    }, {
      fullname: ''
    }]); // alert("Current WidgetHotel 275:" + latUser + "==" + lngUser);

    _api_home__WEBPACK_IMPORTED_MODULE_10__/* ["default"].getAutocomplete */ .Z.getAutocomplete(access_token, {
      product: 'hotel',
      q: keyword,
      lat: latUser,
      lang: lngUser
    }).then(res => {
      if (res.success) {
        setListHotel(res.data);
        setLoadingSearch(false);
      }
    });
  }, [keyword]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (options !== null && options !== void 0 && options.from || productId) {
      _api_home__WEBPACK_IMPORTED_MODULE_10__/* ["default"].getAutocomplete */ .Z.getAutocomplete(access_token, {
        product: 'hotel',
        q: options === null || options === void 0 ? void 0 : options.keyword
      }).then(res => {
        if (res.success) {
          let selected = [];

          if (productId) {
            selected = res.data.filter(item => item.productId == productId);
          } else {
            selected = res.data.filter(item => item.id == (options === null || options === void 0 ? void 0 : options.from));
          }

          setHotelSelected(selected);
        }
      });
    }
  }, [options === null || options === void 0 ? void 0 : options.from, options === null || options === void 0 ? void 0 : options.keyword, productId]);

  const handleChangeCheckin = checkin => {
    setDate(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      checkin,
      checkout: moment__WEBPACK_IMPORTED_MODULE_12___default()(checkin).add(1, 'days').toDate()
    }));
  };

  const handleChangeCheckout = checkout => {
    const checkinAndCheckoutIsSame = moment__WEBPACK_IMPORTED_MODULE_12___default()(moment__WEBPACK_IMPORTED_MODULE_12___default()(checkout).format('YYYY-MM-DD'), 'YYYY-MM-DD').isSame(moment__WEBPACK_IMPORTED_MODULE_12___default()(moment__WEBPACK_IMPORTED_MODULE_12___default()(date.checkin).format('YYYY-MM-DD'), 'YYYY-MM-DD'));

    if (moment__WEBPACK_IMPORTED_MODULE_12___default()(checkout).isBefore(date.checkin) || checkinAndCheckoutIsSame) {
      setDate(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        checkin: checkout,
        checkout: moment__WEBPACK_IMPORTED_MODULE_12___default()(checkout).add(1, 'days').toDate()
      }));
    } else if (moment__WEBPACK_IMPORTED_MODULE_12___default()(checkout).isAfter(moment__WEBPACK_IMPORTED_MODULE_12___default()(date.checkin)) && !checkinAndCheckoutIsSame) {
      setDate(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        checkout
      }));
    }
  };

  const modifiers = {
    start: date.checkin,
    end: date.checkout
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("div", {
    style: {
      borderRadius: '20px',
      background: `linear-gradient(90deg, ${colorA} 0%, ${colorB} 30%, ${colorC} 60%, ${colorA} 100%)`,
      padding: '10px'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("ul", {
      className: "list-group list-group-horizontal",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(ListItemStyled, {
        className: "list-group-item pb-0",
        style: {
          width: '40%',
          borderTopLeftRadius: '20px',
          borderBottomLeftRadius: '20px'
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("label", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("span", {
            className: classnames__WEBPACK_IMPORTED_MODULE_14___default()("", {
              'font-weight-bold': willSearch
            }),
            children: "Destinasi / Nama Hotel "
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("fieldset", {
          style: {
            marginTop: '-14px'
          },
          className: "form-group mb-0",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("div", {
            className: "multiselect",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("div", {
              id: "selectBox1",
              className: "selectBox",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_8__.Typeahead, {
                id: "from",
                placeholder: "Pencarian kota, hotel, tempat tujuan",
                selected: hotelSelected,
                onChange: val => setHotelSelected(val),
                filterBy: () => true,
                minLength: 3,
                labelKey: "fullname",
                highlightOnlyResult: true,
                onSearch: handleChangeKeyword,
                onInputChange: handleChangeKeyword,
                options: listHotel,
                inputProps: {
                  className: classnames__WEBPACK_IMPORTED_MODULE_14___default()('border-0 p-0 bg-transparent', {
                    'font-weight-bold': !willSearch
                  }),
                  style: {
                    boxShadow: 'none',
                    cursor: 'pointer',
                    color: 'black'
                  }
                },
                renderMenuItemChildren: option => {
                  return loadingSearch ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("li", {
                    className: "d-flex justify-content-between align-items-center py-2 px-1",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((react_placeholder__WEBPACK_IMPORTED_MODULE_17___default()), {
                      type: "text",
                      rows: 1
                    })
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("li", {
                    className: "d-flex justify-content-between align-items-center px-1",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
                      className: "d-flex align-items-center",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                        icon: option.level === 'REGION' ? 'streamline:travel-map-navigation-map-maps-gps' : option.level === 'CITY' ? 'solar:city-broken' : option.level === 'AREA' ? 'streamline:travel-map-location-pin-navigation-map-maps-pin-gps-location' : option.level === 'HOTEL' ? 'solar:bed-line-duotone' : option.level === 'APARTMENT' ? 'fluent-mdl2:city-next' : option.level === 'RESORT' ? 'fluent-mdl2:ski-resorts' : option.level === 'CAMPING' ? 'material-symbols:camping-outline-rounded' : option.level === 'HOSTEL' ? 'icon-park-outline:hotel' : option.level === 'VILLA' ? 'material-symbols:villa-outline-rounded' : option.level === 'HOMESTAY' ? 'icon-park-outline:homestay' : option.level === 'GUESTHOUSE' ? 'uil:house-user' : option.level === 'BED_AND_BREAKFAST' ? 'fluent-mdl2:breakfast' : option.level === 'OTHER' ? 'fluent:home-more-20-regular' : 'fluent:home-more-20-regular',
                        style: {
                          fontSize: '30px',
                          color: option.level === 'REGION' ? '#f44336' : option.level === 'CITY' ? '#ce7e00' : option.level === 'AREA' ? '#c90076' : option.level === 'HOTEL' ? '#008cf5' : option.level === 'APARTMENT' ? '#514fb7' : option.level === 'RESORT' ? '#24b9ac' : option.level === 'CAMPING' ? '#38761d' : option.level === 'HOSTEL' ? '#bcc441' : option.level === 'VILLA' ? '#c47041' : option.level === 'HOMESTAY' ? '#c90076' : option.level === 'GUESTHOUSE' ? '#d943cd' : option.level === 'BED_AND_BREAKFAST' ? '#ea7d41' : option.level === 'OTHER' ? '#7f6000' : '#7f6000'
                        }
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
                        className: "ml-3",
                        style: {
                          width: '95%'
                        },
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("strong", {
                          style: {
                            whiteSpace: 'break-spaces',
                            width: '100%',
                            display: 'inline-block'
                          },
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_8__.Highlighter, {
                            highlightClassName: "text-primary bg-transparent p-0 m-0",
                            search: keyword,
                            children: option.name
                          })
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("small", {
                          style: {
                            whiteSpace: 'break-spaces'
                          },
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_8__.Highlighter, {
                            highlightClassName: "text-primary bg-transparent m-0 p-0",
                            search: keyword,
                            children: option.address
                          })
                        })]
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("span", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("span", {
                        className: "badge text-uppercase text-white",
                        style: {
                          background: option.level === 'REGION' ? '#f44336' : option.level === 'CITY' ? '#ce7e00' : option.level === 'AREA' ? '#c90076' : option.level === 'HOTEL' ? '#008cf5' : option.level === 'APARTMENT' ? '#514fb7' : option.level === 'RESORT' ? '#24b9ac' : option.level === 'CAMPING' ? '#38761d' : option.level === 'HOSTEL' ? '#bcc441' : option.level === 'VILLA' ? '#c47041' : option.level === 'HOMESTAY' ? '#c90076' : option.level === 'GUESTHOUSE' ? '#d943cd' : option.level === 'BED_AND_BREAKFAST' ? '#ea7d41' : option.level === 'OTHER' ? '#7f6000' : '#7f6000'
                        },
                        children: option.level.split('_').join(' ')
                      })
                    })]
                  });
                }
              })
            })
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(ListItemStyled, {
        className: "list-group-item pb-0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
          className: "form-row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
            className: "col-md-5 InputFromTo range",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("label", {
              style: {
                marginBottom: '-20px'
              },
              children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("span", {
                className: classnames__WEBPACK_IMPORTED_MODULE_14___default()("", {
                  'font-weight-bold': willSearch
                }),
                children: "Check In"
              }), " "]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_11___default()), {
              style: {
                marginTop: '-14px'
              },
              value: date.checkin,
              formatDate: react_day_picker_moment__WEBPACK_IMPORTED_MODULE_9__.formatDate,
              format: 'ddd, DD MMM YYYY',
              parseDate: react_day_picker_moment__WEBPACK_IMPORTED_MODULE_9__.parseDate,
              dayPickerProps: {
                disabledDays: {
                  before: new Date()
                },
                selectedDays: [date.checkin, {
                  from: date.checkin,
                  to: date.checkout
                }],
                modifiers,
                numberOfMonths: 2,
                locale: 'id',
                localeUtils: (react_day_picker_moment__WEBPACK_IMPORTED_MODULE_9___default()),
                onDayClick: () => {
                  var _refCheckout$current;

                  return (_refCheckout$current = refCheckout.current) === null || _refCheckout$current === void 0 ? void 0 : _refCheckout$current.getInput().focus();
                }
              },
              onDayChange: handleChangeCheckin,
              inputProps: {
                className: classnames__WEBPACK_IMPORTED_MODULE_14___default()('form-control bg-transparent border-0 p-0 m-0', {
                  'font-weight-bold': !willSearch
                }),
                readOnly: true,
                style: {
                  cursor: 'pointer',
                  boxShadow: 'none',
                  color: 'black'
                }
              }
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
            className: "col-md-2",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("label", {
              style: {
                marginBottom: '-20px'
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("span", {
                className: classnames__WEBPACK_IMPORTED_MODULE_14___default()("", {
                  'font-weight-bold': willSearch
                }),
                children: "Malam"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
              className: "text-center",
              id: "night",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("span", {
                className: "mr-3",
                style: {
                  fontWeight: '14px'
                },
                children: night
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                icon: "mdi:weather-night",
                style: {
                  fontSize: '20px',
                  rotate: '15deg',
                  marginTop: '-3.5px',
                  color: '#2986cc'
                }
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
            className: "col-md-5 pl-3 InputFromTo range InputFromTo-to hotel",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("label", {
              style: {
                marginBottom: '-20px'
              },
              children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("span", {
                className: classnames__WEBPACK_IMPORTED_MODULE_14___default()('', {
                  "font-weight-bold": willSearch
                }),
                children: "Check Out"
              }), " "]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_11___default()), {
              ref: refCheckout,
              style: {
                marginTop: '-14px'
              },
              format: 'ddd, DD MMM YYYY',
              value: date.checkout,
              formatDate: react_day_picker_moment__WEBPACK_IMPORTED_MODULE_9__.formatDate,
              parseDate: react_day_picker_moment__WEBPACK_IMPORTED_MODULE_9__.parseDate,
              dayPickerProps: {
                selectedDays: [{
                  from: date.checkin,
                  to: date.checkout
                }],
                disabledDays: [{
                  before: new Date()
                }],
                modifiers,
                localeUtils: (react_day_picker_moment__WEBPACK_IMPORTED_MODULE_9___default()),
                month: date.checkin,
                // fromMonth: date.checkin,
                className: 'picker-hotel-checkout',
                locale: 'id',
                numberOfMonths: 2
              },
              onDayChange: handleChangeCheckout,
              inputProps: {
                className: classnames__WEBPACK_IMPORTED_MODULE_14___default()('form-control bg-transparent border-0 p-0 m-0', {
                  'font-weight-bold': !willSearch
                }),
                readOnly: true,
                style: {
                  cursor: 'pointer',
                  boxShadow: 'none',
                  color: 'black'
                }
              }
            })]
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(ListItemStyled, {
        className: "list-group-item pb-0 w-40",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
          className: "form-group mb-0",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("label", {
            htmlFor: "exampleInputEmail1",
            style: {
              marginBottom: '-20px'
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("span", {
              className: classnames__WEBPACK_IMPORTED_MODULE_14___default()("", {
                'font-weight-bold': willSearch
              }),
              children: "Tamu & Kamar"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_DropdownVisitor__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            willSearch: willSearch,
            visitor: visitor,
            childAge: childAge,
            room: room,
            handleAddVisitor: handleAddVisitor,
            handleChangeAge: handleChangeAge,
            handleChangeRoom: handleChangeRoom,
            handleReduceVisitor: handleReduceVisitor
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(ListItemStyled, {
        className: "list-group-item p-0 border-0 bg-transparent w-20",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("button", {
          onClick: handleSearch,
          style: {
            width: '100px',
            borderRadius: '0 !important',
            borderTopRightRadius: '20px',
            borderBottomRightRadius: '20px'
          },
          className: "btn font-weight-bold btn-warning d-flex justify-content-center align-items-center h-100 btn-block",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("div", {
            style: {
              width: '25px',
              height: '25px',
              position: 'relative'
            },
            className: "d-inline-block",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(next_image__WEBPACK_IMPORTED_MODULE_18__["default"], {
              layout: "fill",
              src: 'https://cdn.masterdiskon.com/masterdiskon/icon/fe/luv.png'
            })
          }), "Search"]
        })
      })]
    })
  });
}

const ListItemStyled = styled_components__WEBPACK_IMPORTED_MODULE_19___default().li.withConfig({
  displayName: "WidgetHotel__ListItemStyled",
  componentId: "sc-13supbq-0"
})(["height:80px !important;"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidgetHotel);
});

/***/ })

};
;