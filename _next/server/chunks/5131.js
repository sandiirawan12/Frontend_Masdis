"use strict";
exports.id = 5131;
exports.ids = [5131];
exports.modules = {

/***/ 4561:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header_HeaderBack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8579);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7906);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6981);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8261);
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_day_picker__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1566);
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_placeholder__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_header_HeaderBack__WEBPACK_IMPORTED_MODULE_3__]);
_header_HeaderBack__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];














function DestinationHotel(props) {
  const {
    open,
    toggle,
    setHotelSelected,
    hotelSelected,
    keyword,
    handleChangeKeyword
  } = props;
  const {
    access_token
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.token);
  const {
    0: bestDestination,
    1: setBestDestination
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: hotels,
    1: setHotels
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: isFetchPopular,
    1: setIsFetchPopular
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: isFetchHotel,
    1: setIsFetchHotel
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setIsFetchPopular(true);
    _api_home__WEBPACK_IMPORTED_MODULE_5__/* ["default"].getAutocomplete */ .Z.getAutocomplete(access_token, {
      product: 'hotel',
      q: ''
    }).then(res => {
      if (res.success) {
        setBestDestination(res.data);
      }

      setIsFetchPopular(false);
    });
  }, []);

  const handleSearch = () => {
    setIsFetchHotel(true);
    _api_home__WEBPACK_IMPORTED_MODULE_5__/* ["default"].getAutocomplete */ .Z.getAutocomplete(access_token, {
      product: 'hotel',
      q: keyword
    }).then(res => {
      if (res.success) {
        setHotels(res.data);
      }

      setIsFetchHotel(false);
    });
  };

  const handleChangeHotel = val => {
    setHotelSelected(val);
    toggle('destination');
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(RootStyled, {
    show: open,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_header_HeaderBack__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      title: "Tujuan Hotel",
      onBack: () => toggle('destination')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "content",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
        className: "search-wrapper",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "w-100 position-relative ",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
              className: "form-group",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("input", {
                type: "text",
                onChange: handleChangeKeyword,
                autoFocus: true,
                className: "form-control search-input border-0 py-4",
                placeholder: "Search Hotel"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("button", {
              type: "button",
              onClick: handleSearch,
              className: "btn h-100 d-flex justify-content-center align-items-center btn-warning btn-sm position-absolute search-button",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
                style: {
                  width: '18px',
                  height: '18px',
                  position: 'relative'
                },
                className: "d-inline-block",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(next_image__WEBPACK_IMPORTED_MODULE_0__["default"], {
                  layout: "fill",
                  src: 'https://cdn.masterdiskon.com/masterdiskon/icon/fe/luv.png'
                })
              }), "Search"]
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ListStyled, {
        className: "list-group",
        children: [isFetchHotel ? [1, 2, 3, 4, 5].map(() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("li", {
          className: "d-flex justify-content-between align-items-center py-2 px-1",
          children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((react_placeholder__WEBPACK_IMPORTED_MODULE_8___default()), {
            type: "text",
            rows: 1
          })]
        })) : hotels.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("li", {
            className: "list-group-title bg-warning px-1",
            children: "Hasil Pencarian"
          }), hotels.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("li", {
            className: "list-group-item",
            onClick: () => handleChangeHotel(item),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
              className: "title",
              children: item.name
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
              className: "subtitle",
              children: item.level
            })]
          }))]
        }), bestDestination.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("li", {
            className: "list-group-title",
            children: "Destinasi Populer"
          }), bestDestination.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("li", {
            className: "list-group-item",
            onClick: () => handleChangeHotel(item),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
              className: "title",
              children: item.name
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
              className: "subtitle",
              children: "Indonesia"
            })]
          }))]
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Modal, {
      size: "lg",
      isOpen: false,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__.ModalBody, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((react_day_picker__WEBPACK_IMPORTED_MODULE_7___default()) // selectedDays={this.state.selectedDay}
        // onDayClick={this.handleDayClick}
        , {})
      })
    })]
  });
}

const RootStyled = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "DestinationHotel__RootStyled",
  componentId: "sc-17oupv1-0"
})(["display:", ";transition:display ease 1s;background:white;min-height:100vh;.content{padding:.9rem;}.search-wrapper{position:fixed;background:white;top:40px;z-index:999;left:0;width:100%;height:70px;display:flex;justify-content:center;align-items:center;box-shadow:0 5px 5px -5px rgba(0,0,0,.5);.container{height:48px;.search-input{background:#F5F6FA;padding-right:77px;box-shadow:none;font-size:12px}.search-button{right:0;top:0;font-size:12px;border-top-left-radius:0;border-bottom-left-radius:0;}}}"], props => props.show ? 'block' : 'none');
const ListStyled = styled_components__WEBPACK_IMPORTED_MODULE_2___default().ul.withConfig({
  displayName: "DestinationHotel__ListStyled",
  componentId: "sc-17oupv1-1"
})(["padding:0 !important;color:black !important;font-size:12px !important;overflow-y:auto !important;margin-top:4.5rem;.list-group-title{font-weight:bold;}.list-group-item{margin:auto 8px;border:0;border-bottom:1px solid gray;&:last-child{border-bottom:none;}margin-bottom:.6rem;padding:0;cursor:pointer;.title{display:block;font-size:12px;margin-bottom:-3px;}.subtitle{display:block;color:gray;font-size:11px;margin-bottom:3px;}}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DestinationHotel);
});

/***/ }),

/***/ 5131:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_HeaderBack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8579);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5566);
/* harmony import */ var _iconify_icons_fa_location_arrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4936);
/* harmony import */ var _iconify_icons_fa_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8165);
/* harmony import */ var _iconify_icons_fa_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6638);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _DestinationHotel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4561);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_DrawerDate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5098);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9103);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shared_DrawerVisitorHotel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3052);
/* harmony import */ var _api_home__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7906);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DestinationHotel__WEBPACK_IMPORTED_MODULE_7__, _iconify_react__WEBPACK_IMPORTED_MODULE_2__, _header_HeaderBack__WEBPACK_IMPORTED_MODULE_1__]);
([_DestinationHotel__WEBPACK_IMPORTED_MODULE_7__, _iconify_react__WEBPACK_IMPORTED_MODULE_2__, _header_HeaderBack__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















function HotelPage(props) {
  var _options$room, _options$adult, _options$child, _options$childAge;

  const {
    options,
    handleChangeOptions,
    productId,
    onBack,
    resetFilter,
    isDetail
  } = props;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)({
    destination: false,
    primary: true
  });
  const {
    0: keyword,
    1: setKeyword
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(options !== null && options !== void 0 && options.keyword ? options === null || options === void 0 ? void 0 : options.keyword : '');
  const {
    0: openDrawer,
    1: setOpenDrawer
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)({
    date: false,
    visitor: false
  });
  const {
    0: date,
    1: setDate
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)({
    checkin: options !== null && options !== void 0 && options.dateFrom ? toDate(options === null || options === void 0 ? void 0 : options.dateFrom) : moment__WEBPACK_IMPORTED_MODULE_12___default()().add(1, 'days').toDate(),
    checkout: options !== null && options !== void 0 && options.dateTo ? toDate(options === null || options === void 0 ? void 0 : options.dateTo) : moment__WEBPACK_IMPORTED_MODULE_12___default()().add(2, 'days').toDate()
  });
  const {
    0: dateActive,
    1: setDateActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)('checkin');
  const {
    0: room,
    1: setRoom
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)((_options$room = options === null || options === void 0 ? void 0 : options.room) !== null && _options$room !== void 0 ? _options$room : 1);
  const {
    0: visitor,
    1: setVisitor
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)({
    adult: (_options$adult = options === null || options === void 0 ? void 0 : options.adult) !== null && _options$adult !== void 0 ? _options$adult : 1,
    child: (_options$child = options === null || options === void 0 ? void 0 : options.child) !== null && _options$child !== void 0 ? _options$child : 0
  });
  const {
    0: childAge,
    1: setChildAge
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)((_options$childAge = options === null || options === void 0 ? void 0 : options.childAge) !== null && _options$childAge !== void 0 ? _options$childAge : []);
  const {
    0: hotelSelected,
    1: setHotelSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)();
  const {
    access_token
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_15__.useSelector)(state => state.token);
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    if (options !== null && options !== void 0 && options.from || productId) {
      _api_home__WEBPACK_IMPORTED_MODULE_14__/* ["default"].getAutocomplete */ .Z.getAutocomplete(access_token, {
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

          setHotelSelected(selected[0]);
        }
      });
    }
  }, [options === null || options === void 0 ? void 0 : options.from, options === null || options === void 0 ? void 0 : options.keyword, productId]);

  const handleSearch = () => {
    if (!hotelSelected || hotelSelected.length === 0) {
      alert('Masukan detail tujuan');
    } else {
      let url = '/product/hotel';

      let params = _objectSpread(_objectSpread({}, visitor), {}, {
        from: hotelSelected === null || hotelSelected === void 0 ? void 0 : hotelSelected.id,
        dateFrom: moment__WEBPACK_IMPORTED_MODULE_12___default()(date.checkin).format('DD-MM-YYYY').toString(),
        dateTo: moment__WEBPACK_IMPORTED_MODULE_12___default()(date.checkout).format('DD-MM-YYYY').toString(),
        room,
        keyword: hotelSelected === null || hotelSelected === void 0 ? void 0 : hotelSelected.name,
        childAge
      });

      if (hotelSelected !== null && hotelSelected !== void 0 && hotelSelected.productId) {
        url = `/product/hotel/detail`;
        params = _objectSpread(_objectSpread({}, params), {}, {
          productId: hotelSelected.productId
        });
      } else if (isDetail) {
        return router.push(`${url}?${query_string__WEBPACK_IMPORTED_MODULE_11___default().stringify(params)}`);
      }

      if (handleChangeOptions) {
        handleChangeOptions(params);
      }

      if (resetFilter) {
        resetFilter();
      }

      if (onBack) {
        onBack();
      }

      router.push(`${url}?${query_string__WEBPACK_IMPORTED_MODULE_11___default().stringify(params)}`);
    }
  };

  const handleChangeDateActive = val => {
    setDateActive(val);
  };

  const handleChangeCheckin = checkin => {
    setDate(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      checkin,
      checkout: moment__WEBPACK_IMPORTED_MODULE_12___default()(checkin).add(1, 'days').toDate()
    }));
  };

  const handleChangeCheckout = checkout => {
    if (!moment__WEBPACK_IMPORTED_MODULE_12___default()(checkout).startOf('D').isSame(moment__WEBPACK_IMPORTED_MODULE_12___default()(date.checkin).startOf('D'))) {
      setDate(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        checkout
      }));
    } else {
      setDate(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        checkout: moment__WEBPACK_IMPORTED_MODULE_12___default()(date.checkout).toDate()
      }));
    }
  };

  function toDate(date) {
    var from = date.split("-");
    return new Date(from[2], from[1] - 1, from[0]);
  }

  const handleOpen = name => {
    let newObj = _objectSpread({}, open);

    if (name === 'primary') {
      Object.keys(newObj).filter(item => item !== name).forEach(item => {
        newObj[item] = false;
      });

      if (!options) {
        router.replace({
          pathname: '/hotels',
          query: null
        });
      }
    } else {
      if (!newObj[name] === false) {
        newObj['primary'] = true;

        if (!options) {
          router.replace({
            pathname: '/hotels',
            query: null
          });
        }

        Object.keys(newObj).filter(item => item !== 'primary').forEach(item => {
          newObj[item] = false;
        });
      } else {
        Object.keys(newObj).filter(item => item !== name).forEach(item => {
          newObj[item] = false;
        });
        newObj[name] = !newObj[name];
      }
    }

    setOpen(newObj);
  };

  const handleChangeDate = (type, val) => {
    if (type === 'checkin') {
      handleChangeCheckin(val);
    } else {
      handleChangeCheckout(val);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    if (router.isReady) {
      var _router$query;

      if (router !== null && router !== void 0 && (_router$query = router.query) !== null && _router$query !== void 0 && _router$query.search) {
        handleOpen('destination');
      }
    }
  }, [router.query]);

  const handleOpenDrawer = (type, val) => {
    if (val) {
      handleChangeDateActive(val);
    }

    setOpenDrawer(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [type]: !prev[type]
    }));
  }; // keyword function


  const handleChangeKeyword = e => {
    const {
      value
    } = e.target;
    setKeyword(value);
  }; // visitor function


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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(RootStyled, {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()("position-relative", {
        'd-none': !open.primary
      }),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_header_HeaderBack__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        style: {
          background: 'rgb(253,191,73)',
          color: 'black'
        },
        title: "Hotel",
        onBack: () => onBack ? onBack() : router.back()
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("img", {
        src: "https://cdn.masterdiskon.com/masterdiskon/icon/fe/sign-in.png",
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          minHeight: '30vh',
          width: '100%',
          objectFit: 'cover'
        }
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", {
        className: "container pt-3",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", {
          className: "card text-dark",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
            className: "p-3",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("h6", {
              className: "font-weight-bold",
              children: "Pencarian Hotel"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
              className: "container",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
                onClick: () => handleOpen('destination'),
                className: "d-flex align-items-center",
                style: {
                  borderBottom: '1px solid gray',
                  paddingBottom: '5px'
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                  icon: _iconify_icons_fa_location_arrow__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                  className: "mr-2 text-primary"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("label", {
                    className: "title font-weight-bold",
                    children: "Tujuan"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("small", {
                    className: "md-result",
                    children: hotelSelected ? hotelSelected.fullname : 'Cari tujuan'
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
                className: "d-flex mt-3",
                style: {
                  borderBottom: '1px solid gray',
                  paddingBottom: '5px'
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
                  onClick: () => handleOpenDrawer('date', 'checkin'),
                  className: "w-100 d-flex align-items-center",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                    icon: _iconify_icons_fa_calendar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                    className: "mr-2 text-primary"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("label", {
                      className: "title",
                      children: "Check In"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("small", {
                      className: "md-result",
                      children: moment__WEBPACK_IMPORTED_MODULE_12___default()(date.checkin).format('ddd, DD MMM YYYY')
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
                  onClick: () => handleOpenDrawer('date', 'checkout'),
                  className: "w-100 d-flex align-items-center",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                    icon: _iconify_icons_fa_calendar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                    className: "mr-2 text-primary"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("label", {
                      className: "title",
                      children: "Check Out"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("small", {
                      className: "md-result",
                      children: moment__WEBPACK_IMPORTED_MODULE_12___default()(date.checkout).format('ddd, DD MMM YYYY')
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
                className: "d-flex align-items-center mt-3",
                style: {
                  borderBottom: '1px solid gray',
                  paddingBottom: '5px'
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                  icon: _iconify_icons_fa_user__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                  className: "mr-2 text-primary"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
                  onClick: () => handleOpenDrawer('visitor'),
                  className: "w-100",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("label", {
                    className: "title font-weight-bold",
                    children: "Tamu Hotel"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("small", {
                    className: "md-result",
                    children: `${Number(visitor['child'] || 0) + Number(visitor['adult'] || 0)} Tamu, ${room} Kamar`
                  })]
                })]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("button", {
              type: "button",
              onClick: handleSearch,
              className: "btn btn-primary mt-3 font-weight-bold shadow btn-sm btn-block",
              children: "Search"
            })]
          })
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_DestinationHotel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      keyword: keyword,
      handleChangeKeyword: handleChangeKeyword,
      open: open.destination,
      hotelSelected: hotelSelected,
      setHotelSelected: setHotelSelected,
      toggle: handleOpen
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_shared_DrawerDate__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      isOpen: openDrawer.date,
      onClose: () => handleOpenDrawer('date', 'checkin'),
      date: date,
      handleChange: handleChangeDate,
      dateActive: dateActive,
      handleChangeDateActive: handleChangeDateActive
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_shared_DrawerVisitorHotel__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
      isOpen: openDrawer.visitor,
      onClose: () => handleOpenDrawer('visitor'),
      visitor: visitor,
      childAge: childAge,
      room: room,
      handleAddVisitor: handleAddVisitor,
      handleChangeAge: handleChangeAge,
      handleChangeRoom: handleChangeRoom,
      handleReduceVisitor: handleReduceVisitor
    })]
  });
}

const RootStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HotelPage__RootStyled",
  componentId: "sc-1h0d5gz-0"
})(["min-height:100vh;background:linear-gradient(0deg,rgba(255,255,255,1) 0%,rgba(253,191,73,1) 40%);;background-position:center bottom;background-repeat:no-repeat;background-size:200%;width:100%;color:white;position:relative;label{&.title{font-size:14px;font-weight:bold;display:block;margin-bottom:-6px;}}.md-result{font-size:12px;}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HotelPage);
});

/***/ }),

/***/ 5098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9368);
/* harmony import */ var _biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8261);
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_day_picker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










function DrawerDate(props) {
  const {
    isOpen,
    onClose,
    handleChange,
    date,
    dateActive,
    handleChangeDateActive
  } = props;
  const modifiers = {
    start: date.checkin,
    end: date.checkout
  };
  const disabledDays = dateActive === 'checkin' ? {
    before: new Date()
  } : [{
    before: date.checkin
  }, {
    before: new Date()
  }];

  const onDayClick = (val, modifiers = {}) => {
    if (modifiers.disabled) {
      return;
    }

    handleChange(dateActive, val);

    if (dateActive === 'checkin') {
      handleChangeDateActive('checkout');
    } else {
      onClose();
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(DrawerBottom, {
    open: isOpen,
    height: 0.1,
    onClose: onClose,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__.SheetHeader, {
      className: "bg-primary text-white d-block pt-3 pb-3 px-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "d-flex justify-content-between align-items-center mx-2",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h5", {
          className: "font-weight-bold w-100",
          children: "Tanggal Menginap"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h5", {
          onClick: onClose,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("i", {
            class: "fas fa-times"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "w-100 mt-3 d-flex justify-content-center align-items-start",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('text-date', {
            'date-active': dateActive === 'checkin'
          }),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("small", {
            className: "mb-0 d-block",
            children: "Check-in"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "d-flex align-items-center date-active",
            onClick: () => handleChangeDateActive('checkin'),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h4", {
              style: {
                fontSize: '40px'
              },
              className: "font-weight-bold m-0",
              children: moment__WEBPACK_IMPORTED_MODULE_6___default()(date.checkin).format('DD')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "ml-2",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h6", {
                className: "m-0 font-weight-bold",
                children: moment__WEBPACK_IMPORTED_MODULE_6___default()(date.checkin).format('ddd')
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h6", {
                className: "m-0 font-weight-bold",
                children: moment__WEBPACK_IMPORTED_MODULE_6___default()(date.checkin).format('MMM')
              })]
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: "mx-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("small", {
            className: "text-light d-block my-0",
            children: [moment__WEBPACK_IMPORTED_MODULE_6___default()(date.checkout).diff(moment__WEBPACK_IMPORTED_MODULE_6___default()(date.checkin), 'days'), " malam"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('text-date', {
            'date-active': dateActive === 'checkout'
          }),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("small", {
            className: "mb-0 d-block",
            children: "Check-out"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "d-flex align-items-center",
            onClick: () => handleChangeDateActive('checkout'),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h4", {
              style: {
                fontSize: '40px'
              },
              className: "font-weight-bold m-0",
              children: moment__WEBPACK_IMPORTED_MODULE_6___default()(date.checkout).format('DD')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "ml-2",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h6", {
                className: "m-0 font-weight-bold",
                children: moment__WEBPACK_IMPORTED_MODULE_6___default()(date.checkout).format('ddd')
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h6", {
                className: "m-0 font-weight-bold",
                children: moment__WEBPACK_IMPORTED_MODULE_6___default()(date.checkout).format('MMM')
              })]
            })]
          })]
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__.SheetContent, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((react_day_picker__WEBPACK_IMPORTED_MODULE_4___default()), {
        showOutsideDays: true,
        month: date[dateActive],
        modifiers: modifiers,
        disabledDays: disabledDays,
        onDayClick: onDayClick,
        selectedDays: [date.checkin, {
          from: date.checkin,
          to: date.checkout
        }],
        className: "w-100 Selectable"
      })
    })]
  });
}

const DrawerBottom = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__.BottomSheet).withConfig({
  displayName: "DrawerDate__DrawerBottom",
  componentId: "sc-16aitw2-0"
})(["border-radius:0;min-height:100%;max-height:100%;.text-date{position:relative;&.date-active::before{content:'';position:absolute;bottom:-10px;left:50%;width:13px;height:13px;background:#E0A800;border-radius:50%;}}"]);
DrawerDate.PropTypes = {
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  handleChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawerDate);

/***/ }),

/***/ 3052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9368);
/* harmony import */ var _biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







function DrawerVisitorHotel(props) {
  var _defaultChildAge;

  const {
    isOpen,
    visitor,
    room,
    childAge,
    handleAddVisitor,
    handleChangeAge,
    willSearch,
    handleChangeRoom,
    handleReduceVisitor,
    onClose
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
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let arr = [];

    for (let index = 0; index < visitor.child; index++) {
      arr[index] = index;
    }

    setChildren(arr);
  }, [visitor.child]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(RootStyled, {
      height: 1,
      open: isOpen,
      onClose: onClose,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__.SheetHeader, {
        className: "d-flex justify-content-between mb-3 align-items-center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h5", {
          className: "font-weight-bold w-100",
          children: "Kamar & Tamu"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h5", {
          onClick: onClose,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
            class: "fas fa-times"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "d-flex align-items-center justify-content-between",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("b", {
              children: "Dewasa"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "input-group w-50 mb-2 cariqty",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "input-group-prepend",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
              style: {
                cursor: visitor['adult'] === 1 && 'no-drop'
              },
              disabled: visitor['adult'] === 1,
              onClick: () => handleReduceVisitor('adult'),
              className: "btn btn-outline-secondary form-control flight_minus",
              type: "button",
              children: "-"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
            type: "text",
            value: visitor['adult'],
            className: "form-control text-center",
            readOnly: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "input-group-append",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "d-flex align-items-center justify-content-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("b", {
              children: "Anak"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("small", {
            children: "(dibawah 12 tahun)"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "input-group w-50 mb-2 cariqty",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "input-group-prepend",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
              style: {
                cursor: visitor['child'] === 0 && 'no-drop'
              },
              disabled: visitor['child'] === 0,
              onClick: () => handleReduceVisitor('child'),
              className: "btn btn-outline-secondary form-control flight_minus0",
              type: "button",
              children: "-"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
            type: "text",
            value: visitor['child'],
            className: "form-control text-center numberonly hitung flight_dropanak",
            name: "anak",
            readOnly: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "input-group-append",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
              style: {
                cursor: visitor['child'] === 10 && 'no-drop'
              },
              disabled: visitor['child'] === 10,
              onClick: () => handleAddVisitor('child'),
              className: "btn btn-outline-secondary form-control flight_plus",
              type: "button",
              children: "+"
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "d-flex align-items-center justify-content-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("b", {
              children: "Kamar"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {})]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "input-group w-50 mb-2 cariqty",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "input-group-prepend",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
              style: {
                cursor: room === 1 && 'no-drop'
              },
              disabled: room === 1,
              onClick: () => handleChangeRoom('reduce'),
              className: "btn btn-outline-secondary form-control flight_minus0",
              type: "button",
              children: "-"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
            type: "text",
            value: room,
            className: "form-control text-center",
            readOnly: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "input-group-append",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
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
      }), children.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "col-md-12",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("label", {
              className: "text-secondary",
              children: "Tambahkan umur anak"
            })
          }), children.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "col-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("label", {
                for: "",
                children: ["Anak ", ++item]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("select", {
                value: childAge[index],
                onChange: e => handleChangeAge(index, e.target.value),
                className: "form-control",
                name: "",
                id: "",
                children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("option", {
                  children: item
                }))
              })]
            })
          }))]
        })]
      })]
    })
  });
}

const RootStyled = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__.BottomSheet).withConfig({
  displayName: "DrawerVisitorHotel__RootStyled",
  componentId: "sc-1bs4atc-0"
})(["border-radius:0;padding:10px;"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawerVisitorHotel);

/***/ })

};
;