"use strict";
exports.id = 3146;
exports.ids = [3146,8923];
exports.modules = {

/***/ 814:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3877);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6981);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_mobile_header_HeaderBack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8579);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9103);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api_shop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6385);
/* harmony import */ var _iconify_icons_fa_regular_edit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8226);
/* harmony import */ var _iconify_icons_fa_regular_edit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_regular_edit__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store_redirectUrl_redirectUrlActions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8923);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9368);
/* harmony import */ var _biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5566);
/* harmony import */ var _components_mobile_page_HotelPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5131);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_0__, swiper__WEBPACK_IMPORTED_MODULE_1__, _iconify_react__WEBPACK_IMPORTED_MODULE_13__, _components_mobile_header_HeaderBack__WEBPACK_IMPORTED_MODULE_5__, _components_mobile_page_HotelPage__WEBPACK_IMPORTED_MODULE_14__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_0__, swiper__WEBPACK_IMPORTED_MODULE_1__, _iconify_react__WEBPACK_IMPORTED_MODULE_13__, _components_mobile_header_HeaderBack__WEBPACK_IMPORTED_MODULE_5__, _components_mobile_page_HotelPage__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import required modules



















const initialState = {
  options: {},
  filters: {},
  meta: {},
  hotel: {},
  isLoading: true
};

function parseQueryOptions(location) {
  const query = query_string__WEBPACK_IMPORTED_MODULE_7___default().parse(location);
  const optionValues = {
    product: 'hotel',
    from: '',
    dateFrom: '',
    dateTo: '',
    room: '',
    childAge: [],
    adult: '1',
    keyword: '',
    child: '0',
    productId: '',
    infant: '0'
  };

  if (typeof query.from === "string") {
    optionValues.from = query.from;
  }

  if (typeof query.keyword === "string") {
    optionValues.keyword = query.keyword;
  }

  if (typeof query.dateFrom === "string") {
    optionValues.dateFrom = query.dateFrom;
  }

  if (typeof query.dateTo === "string") {
    optionValues.dateTo = query.dateTo;
  }

  if (typeof query.adult === "string") {
    optionValues.adult = query.adult;
  }

  if (typeof query.child === "string") {
    optionValues.child = query.child;
  }

  if (typeof query.childAge === "string") {
    if (query.childAge) {
      optionValues.childAge = [query.childAge];
    } else {
      optionValues.childAge = [];
    }
  }

  if (typeof query.childAge === 'object') {
    optionValues.childAge = query.childAge;
  }

  if (typeof query.room === "string") {
    optionValues.room = query.room;
  }

  if (typeof query.productId === "string") {
    optionValues.productId = query.productId;
  }

  return optionValues;
}

function parseQuery(location) {
  return [parseQueryOptions(location)];
}

function buildQuery(options) {
  const params = {};

  if (options.from !== "") {
    params.from = options.from;
  }

  if (options.to !== "") {
    params.to = options.to;
  }

  if (options.dateFrom !== "") {
    params.dateFrom = options.dateFrom;
  }

  if (options.dateTo !== "") {
    params.dateTo = options.dateTo;
  }

  if (options.adult !== "") {
    params.adult = options.adult;
  }

  if (options.child !== "") {
    params.child = options.child;
  }

  if (options.childAge !== '' || options.childAge !== []) {
    params.childAge = options.childAge;
  }

  if (options.room !== "") {
    params.room = options.room;
  }

  if (options.keyword !== "") {
    params.keyword = options.keyword;
  }

  if (options.productId !== "") {
    params.productId = options.productId;
  }

  return query_string__WEBPACK_IMPORTED_MODULE_7___default().stringify(params, {
    encode: false
  });
}

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_HOTEL':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true
      });

    case 'FETCH_HOTEL_SUCCESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        hotel: action.payload,
        isLoading: false
      });

    case 'SET_FILTER_VALUE':
      return _objectSpread(_objectSpread({}, state), {}, {
        options: _objectSpread(_objectSpread({}, state.options), {}, {
          page: 1
        }),
        filters: _objectSpread(_objectSpread({}, state.filters), {}, {
          [action.filter]: action.value
        })
      });

    case 'SET_META':
      return _objectSpread(_objectSpread({}, state), {}, {
        meta: action.payload
      });

    case 'SET_OPTION_VALUE':
      return _objectSpread(_objectSpread({}, state), {}, {
        options: _objectSpread(_objectSpread({}, state.options), {}, {
          page: 1,
          [action.option]: action.value
        })
      });

    case 'SET_OPTIONS_VALUE':
      return _objectSpread(_objectSpread({}, state), {}, {
        options: action.value
      });

    default:
      throw new Error();
  }
}

function init(state) {
  const [options] = parseQuery(window.location.search);
  return _objectSpread(_objectSpread({}, state), {}, {
    options
  });
}

function DetailHotel() {
  var _hotel$detail, _hotel$detail2, _hotel$detail3, _hotel$detail4, _hotel$detail5, _hotel$options, _hotel$options2, _roomSelected$detail$, _roomSelected$detail$2, _roomSelected$detail$3, _roomSelected$detail$4, _roomSelected$detail$6;

  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(reducer, initialState, init);
  const {
    0: thumbsSwiper,
    1: setThumbsSwiper
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const {
    0: openModal,
    1: setOpenModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: roomSelected,
    1: setRoomSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const {
    0: openShare,
    1: setOpenShare
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    access_token
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(state => state.token);
  const auth = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(state => state.auth);
  const {
    0: openCollapse,
    1: setOpenCollapse
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
  const dispatchRedux = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();
  const {
    0: openDetail,
    1: setOpenDetail
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
  const {
    0: showSearch,
    1: setShowSearch
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: openImageSlider,
    1: setOpenImageSlider
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: imageSelected,
    1: setImageSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);

  const handleOpenDetail = field => {
    setOpenDetail(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [field]: !prev[field]
    }));
  };

  const handleOpenShare = () => {
    setOpenShare(prev => !prev);
  };

  const handleOpenCollapse = field => {
    setOpenCollapse(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [field]: !prev[field]
    }));
  };

  const handleOpenModal = room => {
    setRoomSelected(room);
    setOpenModal(open => !open);
  };
  /* end fetch filters */


  const handleChangeOptions = options => {
    dispatch({
      type: 'SET_OPTIONS_VALUE',
      value: options
    });
  };

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const query = buildQuery(state.options);
    const href = query_string__WEBPACK_IMPORTED_MODULE_7___default().stringifyUrl(_objectSpread(_objectSpread({}, query_string__WEBPACK_IMPORTED_MODULE_7___default().parseUrl(router.asPath)), {}, {
      query: query_string__WEBPACK_IMPORTED_MODULE_7___default().parse(query)
    }), {
      encode: false
    });
    router.replace(router.pathname, href, {
      shallow: true
    }).then(() => {
      // This is necessary for the "History API" to work.
      window.history.replaceState(_objectSpread(_objectSpread({}, window.history.state), {}, {
        options: _objectSpread(_objectSpread({}, window.history.state.options), {}, {
          shallow: false
        })
      }), '', href);
    });
  }, [state.options]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    dispatch({
      type: 'FETCH_HOTEL'
    });
    _api_shop__WEBPACK_IMPORTED_MODULE_8__/* ["default"].getDetailHotel */ .Z.getDetailHotel(access_token, state.options).then(res => {
      if (res.success) {
        dispatch({
          type: 'FETCH_HOTEL_SUCCESS',
          payload: res.data
        });
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error('Kamar hotel tidak tersedia', {
          toastId: 'not-found'
        });
        setTimeout(() => {
          router.back();
        }, 2000);
      }
    });
  }, [state.options]);

  const doHandleSubmit = room => {
    const {
      options
    } = state;

    if (true) {
      _api_shop__WEBPACK_IMPORTED_MODULE_8__/* ["default"].getAvailHotel */ .Z.getAvailHotel(access_token, {
        "productId": options.productId,
        "dateFrom": options.dateFrom,
        "dateTo": options.dateTo,
        "pax": {
          "room": options === null || options === void 0 ? void 0 : options.room,
          "adult": options === null || options === void 0 ? void 0 : options.adult,
          "child": options === null || options === void 0 ? void 0 : options.child,
          "infant": options === null || options === void 0 ? void 0 : options.infant,
          "childAge": options === null || options === void 0 ? void 0 : options.childAge,
          numOfAdults: room.guest
        },
        "roomId": room.id,
        "rateKey": room.detailId[0]
      }).then(res => {
        if (res.success) {
          if (!auth) {
            console.log('test');
            dispatchRedux((0,_store_redirectUrl_redirectUrlActions__WEBPACK_IMPORTED_MODULE_16__/* .changeRedirectUrl */ .Z)(`/product/hotel/checkout?${query_string__WEBPACK_IMPORTED_MODULE_7___default().stringify({
              key: hotel === null || hotel === void 0 ? void 0 : hotel.key,
              hotelId: options.productId,
              option: room.id,
              optionDetail: res.data.identifier
            })}`));
          }

          router.push(`checkout?${query_string__WEBPACK_IMPORTED_MODULE_7___default().stringify({
            key: hotel === null || hotel === void 0 ? void 0 : hotel.key,
            hotelId: options.productId,
            option: room.id,
            optionDetail: res.data.identifier
          })}`);
        } else {
          react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error('Kamar tidak tersedia');
        }
      });
    } else {}
  };

  const renderClass = () => {
    let arr = [];

    for (let index = 0; index < hotel.class; index++) {
      arr[index] = index;
    }

    return arr.map(() => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
      style: {
        width: '15px',
        height: '15px',
        position: 'relative',
        display: 'inline-block'
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
        src: "https://cdn.masterdiskon.com/masterdiskon/icon/fe/star.png",
        layout: "fill",
        objectFit: "cover"
      })
    }));
  };

  const {
    hotel
  } = state;

  if (state.isLoading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        style: {
          height: '50vh',
          marginBottom: '5rem'
        },
        className: "d-flex flex-column align-items-center justify-content-center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("img", {
          src: "https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/pulse-spinner.svg"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("h4", {
          children: "Sedang menyiapkan data..."
        })]
      })
    });
  }

  const images = [...new Set([...(hotel === null || hotel === void 0 ? void 0 : (_hotel$detail = hotel.detail) === null || _hotel$detail === void 0 ? void 0 : _hotel$detail.images), hotel === null || hotel === void 0 ? void 0 : hotel.image])];

  if (showSearch) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_mobile_page_HotelPage__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
      isDetail: true,
      productId: state.options.productId,
      onBack: () => setShowSearch(false),
      handleChangeOptions: handleChangeOptions,
      options: state.options
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_components_mobile_header_HeaderBack__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      onBack: () => router.back(),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
        className: "col-8 d-flex justify-content-center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
          className: "position-relative",
          style: {
            width: '80px',
            height: '30px'
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
            src: "https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/masterdiskon_logo_big.png",
            objectFit: "contain",
            layout: "fill"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
        className: "col-2 d-flex justify-content-end align-items-center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_13__.Icon, {
          onClick: () => setShowSearch(true),
          icon: (_iconify_icons_fa_regular_edit__WEBPACK_IMPORTED_MODULE_9___default()),
          style: {
            fontSize: '23px'
          },
          className: "text-white text-right"
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
      className: "container w-100 pt-2",
      style: {
        paddingBottom: '4rem'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
          className: "col-12 py-2",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
            className: "card",
            style: {
              borderRadius: '0'
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
              className: "card-body p-1",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
                children: [!!thumbsSwiper && !(thumbsSwiper !== null && thumbsSwiper !== void 0 && thumbsSwiper.destroyed) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_0__.Swiper, {
                  style: {
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                    height: '218px',
                    marginBottom: '5px'
                  },
                  spaceBetween: 5,
                  navigation: true,
                  modules: [swiper__WEBPACK_IMPORTED_MODULE_1__.FreeMode, swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_1__.Thumbs],
                  thumbs: {
                    swiper: thumbsSwiper
                  },
                  children: images.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_0__.SwiperSlide, {
                    onClick: () => {
                      setImageSelected(index);
                      setOpenImageSlider(v => !v);
                    },
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                      style: {
                        width: '100%',
                        height: '218px'
                      },
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("img", {
                        src: item,
                        style: {
                          objectFit: 'cover',
                          width: '100%',
                          height: '100%'
                        }
                      })
                    })
                  }))
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_0__.Swiper, {
                  onSwiper: setThumbsSwiper,
                  spaceBetween: 2,
                  slidesPerView: 4,
                  freeMode: true,
                  watchSlidesProgress: true,
                  modules: [swiper__WEBPACK_IMPORTED_MODULE_1__.FreeMode, swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_1__.Thumbs],
                  style: {
                    height: '50px'
                  },
                  children: images.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_0__.SwiperSlide, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                      style: {
                        width: '100%',
                        height: '50px',
                        backgroundImage: `url(${item})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center/center'
                      }
                    })
                  }))
                })]
              })
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
          className: "col-12",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            className: "card",
            style: {
              borderRadius: '0'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
              className: "card-body p-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                className: "d-flex align-items-center",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("h6", {
                  className: "font-weight-bold text-primary mb-0 mr-2",
                  children: hotel === null || hotel === void 0 ? void 0 : hotel.name
                }), renderClass()]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
                className: "mb-0 text-secondary mt-2 d-flex",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                  style: {
                    width: '20px',
                    height: '20px',
                    position: 'relative',
                    display: 'inline-block'
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    src: 'https://cdn.masterdiskon.com/masterdiskon/icon/fe/location.png',
                    layout: "fill"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("small", {
                  className: "ml-1",
                  children: [hotel === null || hotel === void 0 ? void 0 : (_hotel$detail2 = hotel.detail) === null || _hotel$detail2 === void 0 ? void 0 : _hotel$detail2.city, ", ", hotel === null || hotel === void 0 ? void 0 : (_hotel$detail3 = hotel.detail) === null || _hotel$detail3 === void 0 ? void 0 : _hotel$detail3.country]
                })]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
              className: "row m-0 text-center ",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                className: "col-12 border",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Dropdown, {
                  size: "sm",
                  isOpen: openShare,
                  toggle: handleOpenShare,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.DropdownToggle, {
                    className: "mb-0",
                    style: {
                      fontSize: '12px'
                    },
                    tag: "p",
                    "data-toggle": "dropdown",
                    "aria-expanded": true,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("i", {
                      class: "fas fa-share-alt mr-2"
                    }), "Bagikan penawaran ini"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.DropdownMenu, {
                    right: true,
                    style: {
                      minWidth: '100%'
                    },
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.DropdownItem, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("a", {
                        className: "text-dark",
                        target: '_blank',
                        href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(document.location)}`,
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("i", {
                          className: "fab fa-facebook"
                        }), " Facebook"]
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.DropdownItem, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("a", {
                        className: "text-dark",
                        target: '_blank',
                        href: `http://www.twitter.com/share?url=${encodeURIComponent(document.location)}&text=${hotel === null || hotel === void 0 ? void 0 : hotel.name}via=Master Diskon`,
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("i", {
                          className: "fab fa-twitter"
                        }), " Twitter"]
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.DropdownItem, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("a", {
                        className: "text-dark",
                        target: '_blank',
                        "data-action": "share/whatsapp/share",
                        href: `https://api.whatsapp.com/send?text=${encodeURIComponent(document.location)}`,
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("i", {
                          className: "fab fa-whatsapp"
                        }), " Whatsapp"]
                      })
                    })]
                  })]
                })
              })
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
          className: "col-12 mt-2",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
            className: "card",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
              className: "card-body p-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                onClick: () => handleOpenCollapse('description'),
                className: "d-flex justify-content-between align-items-center",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("h6", {
                  className: "mb-0 font-weight-bold",
                  children: "Description"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("i", {
                  class: "fas fa-angle-down"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Collapse, {
                isOpen: openCollapse['description'],
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("hr", {
                  className: "mt-2 mb-0"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                  style: {
                    height: '100px',
                    overflowY: 'auto'
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("small", {
                    style: {
                      textAlign: 'justify'
                    },
                    dangerouslySetInnerHTML: {
                      __html: hotel === null || hotel === void 0 ? void 0 : (_hotel$detail4 = hotel.detail) === null || _hotel$detail4 === void 0 ? void 0 : _hotel$detail4.description
                    }
                  })
                })]
              })]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
          className: "col-12 mt-2",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
            className: "card",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
              className: "card-body p-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                onClick: () => handleOpenCollapse('facilities'),
                className: "d-flex justify-content-between align-items-center",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("h6", {
                  className: "mb-0 font-weight-bold",
                  children: "Fasilitas"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("i", {
                  class: "fas fa-angle-down"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Collapse, {
                isOpen: openCollapse['facilities'],
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("hr", {
                  className: "mt-2 mb-0"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                  style: {
                    height: '100px',
                    overflowY: 'auto'
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("small", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("ul", {
                      className: "pl-3",
                      children: hotel === null || hotel === void 0 ? void 0 : (_hotel$detail5 = hotel.detail) === null || _hotel$detail5 === void 0 ? void 0 : _hotel$detail5.facilities.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("li", {
                        children: item.name
                      }))
                    })
                  })
                })]
              })]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
          className: "col-12 mt-2",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
            className: "card",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
              className: "card-body p-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                onClick: () => handleOpenCollapse('room'),
                className: "d-flex justify-content-between align-items-center",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("h6", {
                  className: "mb-0 font-weight-bold",
                  children: "Kamar"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("i", {
                  class: "fas fa-angle-down"
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("section", {
                id: "room",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Collapse, {
                  isOpen: openCollapse['room'],
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("hr", {
                    className: "mt-2 mb-2"
                  }), (hotel === null || hotel === void 0 ? void 0 : (_hotel$options = hotel.options) === null || _hotel$options === void 0 ? void 0 : _hotel$options.length) > 0 ? hotel === null || hotel === void 0 ? void 0 : (_hotel$options2 = hotel.options) === null || _hotel$options2 === void 0 ? void 0 : _hotel$options2.map((room, index) => {
                    var _room$detail$;

                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                        className: "row",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                          className: "col-6",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("h6", {
                            className: "mb-0 text-primary font-weight-bold",
                            children: room === null || room === void 0 ? void 0 : room.name
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("small", {
                            className: "m-0",
                            children: "Fasilitas Kamar"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("small", {
                            style: {
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden'
                            },
                            className: "text-danger font-weight-bold",
                            children: room.detail[0].facilities
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("small", {
                            className: "mt-4 d-inline-block text-danger",
                            style: {
                              fontSize: '12px'
                            },
                            onClick: () => handleOpenModal(room),
                            children: "Kebijakan Pembatalan"
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                          className: "col-6 text-right d-flex justify-content-between flex-column",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                            onClick: () => handleOpenDetail(`detail-${index}`),
                            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("small", {
                              className: "text-success",
                              style: {
                                fontSize: '12px'
                              },
                              children: "Lihat detail"
                            })
                          }), room.isFull ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("small", {
                            className: "text-danger mb-4",
                            children: "Kamar tidak tersedia"
                          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("small", {
                              children: "Total Harga"
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("h6", {
                              className: "text-secondary mb-1",
                              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("del", {
                                children: ["Rp", room.price.toLocaleString()]
                              })
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("h5", {
                              className: "text-primary mb-1 font-weight-bold",
                              children: ["Rp", room.promoPrice.toLocaleString()]
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("button", {
                              onClick: () => doHandleSubmit(room),
                              type: "button",
                              class: "btn btn-warning font-weight-bold btn-sm",
                              style: {
                                fontSize: '10px'
                              },
                              children: "Pesan Sekarang"
                            })]
                          })]
                        })]
                      }, index), index < hotel.options.length - 1 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("hr", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__.BottomSheet, {
                        open: openDetail[`detail-${index}`],
                        onClose: () => handleOpenDetail(`detail-${index}`),
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__.SheetContent, {
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_0__.Swiper, {
                            style: {
                              "--swiper-navigation-color": "#fff",
                              "--swiper-pagination-color": "#fff",
                              height: '218px',
                              marginBottom: '5px'
                            },
                            spaceBetween: 5,
                            navigation: true,
                            modules: [swiper__WEBPACK_IMPORTED_MODULE_1__.FreeMode, swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation],
                            children: room === null || room === void 0 ? void 0 : (_room$detail$ = room.detail[0]) === null || _room$detail$ === void 0 ? void 0 : _room$detail$.images.map(img => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_0__.SwiperSlide, {
                              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("img", {
                                style: {
                                  width: '100%',
                                  height: '200px',
                                  objectFit: 'cover'
                                },
                                src: img
                              })
                            }))
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                            className: "container pb-3",
                            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("h5", {
                              className: "mt-2 text-primary font-weight-bold mb-1",
                              children: room === null || room === void 0 ? void 0 : room.name
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("h6", {
                              className: "text-secondary mb-1",
                              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("del", {
                                children: ["Rp", room.price.toLocaleString()]
                              })
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("h5", {
                              className: "font-weight-bold",
                              children: ["Rp", room.promoPrice.toLocaleString()]
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                              className: "text-right",
                              children: room.isFull ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("h6", {
                                className: "text-danger",
                                children: "Kamar tidak tersedia"
                              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("button", {
                                onClick: () => doHandleSubmit(room),
                                type: "button",
                                class: "btn btn-warning font-weight-bold btn-sm",
                                children: "Pesan Sekarang"
                              })
                            })]
                          })]
                        })
                      })]
                    });
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                    className: "col-12 text-center my-5",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("img", {
                      src: "https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/no-room.svg",
                      style: {
                        width: '100%',
                        height: "100px"
                      }
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("h6", {
                      children: "Kamar tidak tersedia"
                    })]
                  })]
                })
              })]
            })
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("nav", {
      style: {
        zIndex: '1',
        height: '50px'
      },
      className: "navbar bg-white fixed-bottom shadow pb-1",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("a", {
        href: "#room",
        className: "btn btn-primary btn-sm btn-block",
        children: "Pilih Kamar"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Modal, {
      isOpen: openModal,
      centered: true,
      size: "xl",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.ModalBody, {
        style: {
          overflowY: 'auto'
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("h6", {
          className: "font-weight-bold mb-4",
          children: "Detail Biaya Pembatalan Perkamar"
        }), (roomSelected === null || roomSelected === void 0 ? void 0 : (_roomSelected$detail$ = roomSelected.detail[0]) === null || _roomSelected$detail$ === void 0 ? void 0 : (_roomSelected$detail$2 = _roomSelected$detail$.cancelation) === null || _roomSelected$detail$2 === void 0 ? void 0 : _roomSelected$detail$2.length) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("table", {
          className: "table table-bordered table-responsive",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("tr", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("th", {
                children: "Nomor Kamar"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("th", {
                children: "Tipe Kamar"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("th", {
                children: "Dari Tanggal"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("th", {
                children: "Sampai Tanggal"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("th", {
                children: "Biaya Pembatalan"
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("tbody", {
            children: roomSelected === null || roomSelected === void 0 ? void 0 : (_roomSelected$detail$3 = roomSelected.detail[0]) === null || _roomSelected$detail$3 === void 0 ? void 0 : (_roomSelected$detail$4 = _roomSelected$detail$3.cancelation) === null || _roomSelected$detail$4 === void 0 ? void 0 : _roomSelected$detail$4.map((item, index) => {
              var _roomSelected$detail$5;

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("tr", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("td", {
                  children: ++index
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("td", {
                  children: roomSelected === null || roomSelected === void 0 ? void 0 : (_roomSelected$detail$5 = roomSelected.detail[0]) === null || _roomSelected$detail$5 === void 0 ? void 0 : _roomSelected$detail$5.name
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("td", {
                  children: item.FromDate
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("td", {
                  children: item.ToDate
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("td", {
                  children: ["Rp", item.CancellationPrice.toLocaleString().replaceAll(',', '.')]
                })]
              });
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("h6", {
          className: "text-center font-weight-bold",
          children: "Informasi Penting (Essential Information)"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("p", {
          className: "text-center",
          dangerouslySetInnerHTML: {
            __html: roomSelected === null || roomSelected === void 0 ? void 0 : (_roomSelected$detail$6 = roomSelected.detail[0]) === null || _roomSelected$detail$6 === void 0 ? void 0 : _roomSelected$detail$6.cancellationPolicyDisplay
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
          onClick: handleOpenModal,
          className: "d-flex justify-content-center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("button", {
            type: "button",
            className: "btn btn-warning",
            children: "Tutup"
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Modal, {
      id: "carousel-image",
      centered: true,
      toggle: () => setOpenImageSlider(v => !v),
      isOpen: openImageSlider,
      size: "lg",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.ModalBody, {
        className: "position-relative p-0",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("h5", {
          className: "position-absolute text-white",
          onClick: () => setOpenImageSlider(v => !v),
          style: {
            right: '3px',
            top: '0',
            cursor: 'pointer',
            zIndex: '2'
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("i", {
            class: "fas fa-times-circle    "
          })
        }), !!thumbsSwiper && !(thumbsSwiper !== null && thumbsSwiper !== void 0 && thumbsSwiper.destroyed) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_0__.Swiper, {
          style: {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            height: '300px'
          },
          initialSlide: imageSelected,
          spaceBetween: 5,
          navigation: true,
          modules: [swiper__WEBPACK_IMPORTED_MODULE_1__.FreeMode, swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_1__.Thumbs],
          thumbs: {
            swiper: thumbsSwiper
          },
          children: images.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_0__.SwiperSlide, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
              style: {
                width: '100%',
                height: '300px'
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("img", {
                src: item,
                style: {
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%'
                }
              })
            })
          }))
        })]
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailHotel);
});

/***/ }),

/***/ 5221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



function AbouAccommodation({
  hotel
}) {
  var _hotel$detail, _hotel$detail2, _hotel$detail3, _hotel$detail4;

  function decodeHTMLEntities(text) {
    let textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "card",
    style: {
      borderRadius: '20px',
      boxShadow: '2.5px 5px 15px -5px  rgba(0,0,0,.5)'
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "card-header text-white",
      style: {
        borderTopRightRadius: '20px',
        borderTopLeftRadius: '20px',
        background: '#0070BA'
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "card-title font-weight-bold",
        children: "Tentang Akomodasi"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "card-body",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col-md-3",
          children: "Waktu check-in & check-out"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "col-md-9",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            children: ["Waktu check-in: ", hotel === null || hotel === void 0 ? void 0 : (_hotel$detail = hotel.detail) === null || _hotel$detail === void 0 ? void 0 : _hotel$detail.checkInTime, ". Waktu check-out: ", hotel === null || hotel === void 0 ? void 0 : (_hotel$detail2 = hotel.detail) === null || _hotel$detail2 === void 0 ? void 0 : _hotel$detail2.checkOutTime]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "Mau check-in lebih awal? Atur waktu check-in dengan pihak akomodasi."
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col-md-3",
          children: "Kebijakan"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col-md-9",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            dangerouslySetInnerHTML: {
              __html: decodeHTMLEntities(hotel === null || hotel === void 0 ? void 0 : (_hotel$detail3 = hotel.detail) === null || _hotel$detail3 === void 0 ? void 0 : _hotel$detail3.hotelPolicy) || '-'
            }
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col-md-3",
          children: "Intruksi check-in"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col-md-9",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            dangerouslySetInnerHTML: {
              __html: decodeHTMLEntities(hotel === null || hotel === void 0 ? void 0 : (_hotel$detail4 = hotel.detail) === null || _hotel$detail4 === void 0 ? void 0 : _hotel$detail4.checkInInstruction) || '-'
            }
          })
        })]
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AbouAccommodation);

/***/ }),

/***/ 3230:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5566);
/* harmony import */ var _iconify_icons_fa_solid_user_friends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1336);
/* harmony import */ var _iconify_icons_fa_solid_user_friends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_user_friends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_fa_solid_wifi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8863);
/* harmony import */ var _iconify_icons_fa_solid_wifi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_wifi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_fa_solid_tv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4493);
/* harmony import */ var _iconify_icons_fa_solid_tv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_tv__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_fa_solid_bath__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8380);
/* harmony import */ var _iconify_icons_fa_solid_bath__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_bath__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_fa_solid_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1053);
/* harmony import */ var _iconify_icons_fa_solid_info__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_info__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_fa_solid_utensils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8494);
/* harmony import */ var _iconify_icons_fa_solid_utensils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_utensils__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_fa_solid_smoking__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3023);
/* harmony import */ var _iconify_icons_fa_solid_smoking__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_smoking__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _iconify_icons_fa_solid_smoking_ban__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1231);
/* harmony import */ var _iconify_icons_fa_solid_smoking_ban__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_smoking_ban__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _iconify_icons_fa_solid_bed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8710);
/* harmony import */ var _iconify_icons_fa_solid_bed__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_bed__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9103);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4508);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _store_redirectUrl_redirectUrlActions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8923);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6981);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _api_shop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6385);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_1__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




























function CardProductHotel(props) {
  var _room$detail$, _room$detail$0$facili, _room$detail$0$facili2, _room$detail$0$facili3, _room$detail$0$facili4, _room$detail$2, _room$detail$2$images;

  const {
    room,
    options,
    hotelKey
  } = props;
  const auth = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useSelector)(state => state.auth);
  const {
    access_token
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useSelector)(state => state.token);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useDispatch)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
  const {
    0: openModal,
    1: setOpenModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false);
  const {
    0: roomSelected,
    1: setRoomSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)();
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false);

  const handleOpenRoom = () => {
    setOpen(!open);
  };

  const bg = {
    overlay: {
      background: '#CCC'
    }
  };

  const handleOpenModal = room => {
    setRoomSelected(room);
    setOpenModal(open => !open);
  };

  const doHandleSubmit = guest => {
    // Swal.fire({
    //     html: `
    //     <div class="d-flex align-items-start">
    //             <img src="${room?.detail[0]?.images[0]}" style="width:200px;height:200px;object-fit:cover"/>
    //             <div class="ml-3 text-left">
    //                 <h5 class="font-weight-bold">${room?.name}</h5>
    //                 <h6>Check-in : ${options.dateFrom}</h6>
    //                 <h6>Check-out : ${options.dateTo}</h6>
    //                 <h6>Size : ${room?.roomSize}</h6>
    //             </div>
    //     </div>
    //     `,
    //     width: '600px',
    //     confirmButtonText:'Pesan',
    //     confirmButtonColor:'#0070BA'
    // })
    if (true) {
      _api_shop__WEBPACK_IMPORTED_MODULE_17__/* ["default"].getAvailHotel */ .Z.getAvailHotel(access_token, {
        "productId": options.productId,
        "dateFrom": options.dateFrom,
        "dateTo": options.dateTo,
        "pax": {
          "room": options === null || options === void 0 ? void 0 : options.room,
          "adult": options === null || options === void 0 ? void 0 : options.adult,
          "child": options === null || options === void 0 ? void 0 : options.child,
          "infant": options === null || options === void 0 ? void 0 : options.infant,
          "childAge": options === null || options === void 0 ? void 0 : options.childAge,
          numOfAdults: guest
        },
        "roomId": room.id,
        "rateKey": room.detailId[0]
      }).then(res => {
        if (res.success) {
          if (!auth) {
            dispatch((0,_store_redirectUrl_redirectUrlActions__WEBPACK_IMPORTED_MODULE_22__/* .changeRedirectUrl */ .Z)(`/product/hotel/checkout?${query_string__WEBPACK_IMPORTED_MODULE_11___default().stringify({
              key: hotelKey,
              hotelId: options.productId,
              option: room.id,
              optionDetail: res.data.identifier
            })}`));
          }

          router.push(`checkout?${query_string__WEBPACK_IMPORTED_MODULE_11___default().stringify({
            key: hotelKey,
            hotelId: options.productId,
            option: room.id,
            optionDetail: res.data.identifier
          })}`);
        } else {
          react_toastify__WEBPACK_IMPORTED_MODULE_18__.toast.error('Kamar tidak tersedia');
        }
      });
    } else { var _hotel; }
  };

  function toDate(date) {
    var from = date.split("-");
    return new Date(from[2], from[1] - 1, from[0]);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(RootStyled, {
    className: "card",
    children: [(room === null || room === void 0 ? void 0 : room.isPromo) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("img", {
      style: {
        width: '104px',
        position: 'absolute',
        zIndex: '99',
        left: '4.7px',
        top: '8px'
      },
      src: "/assets/Icon/card-promo-new.png",
      alt: ""
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
      className: "card-body pl-2 py-2",
      style: {
        cursor: 'pointer'
      },
      onClick: () => doHandleSubmit(room.guest),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
        className: "row d-flex",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
          className: "col-md-3 position-relative",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(ImageStyled, {
            src: (room === null || room === void 0 ? void 0 : (_room$detail$ = room.detail[0]) === null || _room$detail$ === void 0 ? void 0 : _room$detail$.images[0]) || 'https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/icon-no-image.svg',
            onClick: () => handleOpenRoom()
          }), (room === null || room === void 0 ? void 0 : room.roomSize) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
            style: {
              width: 'auto',
              height: '32px',
              background: '#f5f5f5',
              bottom: 0,
              left: '15px',
              borderBottomLeftRadius: '18px',
              borderTopRightRadius: '18px'
            },
            className: "position-absolute py-2 px-3 d-flex flex-row align-items-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("img", {
              src: "https://cdn.masterdiskon.com/masterdiskon/icon/fe/plans.png",
              style: {
                width: '14px'
              },
              alt: "",
              className: "mr-2"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
              style: {
                fontSize: '10px'
              },
              className: "font-weight-bold",
              children: room === null || room === void 0 ? void 0 : room.roomSize
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
          className: "col-md-9 flex-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
              className: "col-md-8",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("h5", {
                className: "mt-2 text-primary font-weight-bold",
                children: [room.name, " "]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("p", {
                className: "mb-1 font-weight-bold",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                  icon: (_iconify_icons_fa_solid_user_friends__WEBPACK_IMPORTED_MODULE_2___default()),
                  className: "mr-2"
                }), room === null || room === void 0 ? void 0 : room.guest, " Tamu", (room === null || room === void 0 ? void 0 : room.roomType) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: (_iconify_icons_fa_solid_bed__WEBPACK_IMPORTED_MODULE_10___default()),
                    className: "ml-5 mr-2"
                  }), room === null || room === void 0 ? void 0 : room.roomType]
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("p", {
                className: "mb-1",
                style: {
                  display: '-webkit-box',
                  WebkitLineClamp: '2',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("em", {
                  children: room.detail[0].facilities
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("span", {
                  className: `mb-1 ${room !== null && room !== void 0 && room.breakfastIncluded ? 'text-primary' : 'text-grey'} ml-2 mr-2`,
                  "data-toggle": "tooltip",
                  "data-placement": "top",
                  title: "wifi",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: (_iconify_icons_fa_solid_utensils__WEBPACK_IMPORTED_MODULE_7___default())
                  }), " ", room !== null && room !== void 0 && room.breakfastIncluded ? '' : 'Tanpa', " Sarapan"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("span", {
                  className: `mb-1 ${room !== null && room !== void 0 && room.wifiIncluded ? 'text-primary' : 'text-grey'} ml-2 mr-2`,
                  "data-toggle": "tooltip",
                  "data-placement": "top",
                  title: "wifi",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: (_iconify_icons_fa_solid_wifi__WEBPACK_IMPORTED_MODULE_3___default())
                  }), " ", room !== null && room !== void 0 && room.wifiIncluded ? '' : 'Tidak', " WiFi"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("span", {
                  className: `mb-1 ${(_room$detail$0$facili = room.detail[0].facilities) !== null && _room$detail$0$facili !== void 0 && _room$detail$0$facili.toLowerCase().includes('televisi') ? 'text-primary' : 'text-grey'} ml-2 mr-2`,
                  "data-toggle": "tooltip",
                  "data-placement": "top",
                  title: "tv",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: (_iconify_icons_fa_solid_tv__WEBPACK_IMPORTED_MODULE_4___default())
                  }), " ", (_room$detail$0$facili2 = room.detail[0].facilities) !== null && _room$detail$0$facili2 !== void 0 && _room$detail$0$facili2.toLowerCase().includes('televisi') ? '' : 'Tanpa', " TV "]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("span", {
                  className: `mb-1 ${(_room$detail$0$facili3 = room.detail[0].facilities) !== null && _room$detail$0$facili3 !== void 0 && _room$detail$0$facili3.toLowerCase().includes('bathtub') ? 'text-primary' : 'text-grey'} ml-2 mr-2`,
                  "data-toggle": "tooltip",
                  "data-placement": "top",
                  title: "bath",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: (_iconify_icons_fa_solid_bath__WEBPACK_IMPORTED_MODULE_5___default())
                  }), "  ", (_room$detail$0$facili4 = room.detail[0].facilities) !== null && _room$detail$0$facili4 !== void 0 && _room$detail$0$facili4.toLowerCase().includes('bathtub') ? 'Bathtub' : 'Tidak Bathtub']
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("span", {
                  className: `mb-1 text-success ml-2 mr-2`,
                  "data-toggle": "tooltip",
                  "data-placement": "top",
                  title: "Pembatalan Gratis",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: "tabler:free-rights"
                  }), "  Pembatalan Gratis"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("span", {
                  className: `mb-1 text-success ml-2 mr-2`,
                  "data-toggle": "tooltip",
                  "data-placement": "top",
                  title: "Reschedule",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: "fluent-mdl2:date-time"
                  }), "  Bisa Reschedule"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("span", {
                  className: `mb-1 ${(room === null || room === void 0 ? void 0 : room.smokingPreference) === 'NON_SMOKING' ? 'text-primary' : 'text-grey'} mb-1 `,
                  "data-toggle": "tooltip",
                  "data-placement": "top",
                  title: "tv",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: (room === null || room === void 0 ? void 0 : room.smokingPreference) === 'NON_SMOKING' ? (_iconify_icons_fa_solid_smoking_ban__WEBPACK_IMPORTED_MODULE_9___default()) : ''
                  }), " ", (room === null || room === void 0 ? void 0 : room.smokingPreference) === 'NON_SMOKING' ? ' Non Smoking' : '']
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                className: "d-flex align-items-center mt-3",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                  "data-toggle": "tooltip",
                  "data-placement": "top",
                  title: "Kebijakan Pembatalan: Pembatalan gratis sebelum tanggal 04-Sep-2023 13:00. Jika pesanan dibatal atau diubah setelah 04-Sep-2023 13:01, biaya pembatalan akan dikenakan.\nReservasi ini bisa di-reschedule, namun biaya pembatalan dikenakan setelah 04 Sep 2023 13:00.",
                  className: "badge badge-danger mr-2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                    className: "d-flex align-items-center",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("img", {
                      src: "https://cdn.masterdiskon.com/masterdiskon/icon/fe/comment-question.png",
                      style: {
                        width: '18px',
                        height: '18px'
                      },
                      className: "mr-1"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("span", {
                      children: "Kebijakan Pembatalan"
                    })]
                  })
                }), room.detail[0].cancellationFreePolicyDisplay && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                  className: "d-flex align-items-center",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("img", {
                    className: "mr-1",
                    style: {
                      width: '17px',
                      height: '17px'
                    },
                    src: "https://cdn.masterdiskon.com/masterdiskon/icon/fe/info-blue.png"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                    className: "text-primary font-italic",
                    dangerouslySetInnerHTML: {
                      __html: room.detail[0].cancellationFreePolicyDisplay
                    }
                  })]
                })]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
              className: "col-md-4",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                className: " text-right h-100 d-flex flex-column justify-content-center",
                children: !(room !== null && room !== void 0 && room.isFull) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                    className: "mb-1",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("small", {
                      children: [" ", moment__WEBPACK_IMPORTED_MODULE_19___default()(toDate(options.dateTo)).diff(moment__WEBPACK_IMPORTED_MODULE_19___default()(toDate(options.dateFrom)), 'days'), " night, ", options.room, " room"]
                    })
                  }), (room === null || room === void 0 ? void 0 : room.view) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(LabelView, {
                      className: "badge badge-danger",
                      children: room === null || room === void 0 ? void 0 : room.view
                    })
                  }), (room === null || room === void 0 ? void 0 : room.isPromo) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("h6", {
                    className: "text-danger",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("s", {
                      children: ["Rp", room === null || room === void 0 ? void 0 : room.price.toLocaleString()]
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("h5", {
                    className: "mb-0 text-primary font-weight-bold",
                    children: ["Rp", room.promoPrice.toLocaleString()]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                    className: "mb-1",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                      children: " Includes taxes and charges"
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                    className: "mb-0",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("button", {
                      type: "button",
                      className: "btn font-weight-bold btn-warning",
                      children: "Pesan sekarang"
                    })
                  })]
                }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("h6", {
                  className: "font-weight-bold text-danger",
                  children: "Kamar tidak tersedia"
                })
              })
            })]
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__.Modal, {
      toggle: handleOpenRoom,
      isOpen: open,
      size: "xl",
      styles: bg,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__.ModalBody, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
          className: "d-flex",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
            className: "flex-1 col-8",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_12__.Carousel, {
              children: room === null || room === void 0 ? void 0 : (_room$detail$2 = room.detail[0]) === null || _room$detail$2 === void 0 ? void 0 : (_room$detail$2$images = _room$detail$2.images) === null || _room$detail$2$images === void 0 ? void 0 : _room$detail$2$images.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("img", {
                  src: item
                })
              }))
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
            className: "flex-1 col-4",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
              className: "card",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                className: "card-body",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("h5", {
                  className: "mt-2 text-primary font-weight-bold",
                  children: [room.name, " "]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("hr", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                  className: "font-weight-bold",
                  children: "Info Kamar "
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("p", {
                  className: "mb-1",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: (_iconify_icons_fa_solid_user_friends__WEBPACK_IMPORTED_MODULE_2___default()),
                    className: "mr-2"
                  }), room === null || room === void 0 ? void 0 : room.guest, " Tamu"]
                }), (room === null || room === void 0 ? void 0 : room.roomType) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("p", {
                  className: `mb-1`,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: (_iconify_icons_fa_solid_bed__WEBPACK_IMPORTED_MODULE_10___default()),
                    className: "mr-2"
                  }), room === null || room === void 0 ? void 0 : room.roomType]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("p", {
                  className: `mb-1 ${room !== null && room !== void 0 && room.breakfastIncluded ? 'text-primary' : 'text-danger'} mr-2`,
                  "data-toggle": "tooltip",
                  "data-placement": "top",
                  title: "wifi",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: (_iconify_icons_fa_solid_utensils__WEBPACK_IMPORTED_MODULE_7___default())
                  }), " ", room !== null && room !== void 0 && room.breakfastIncluded ? 'Gratis ' : ' Tanpa', " Sarapan"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("span", {
                  className: `mb-1 ${(room === null || room === void 0 ? void 0 : room.smokingPreference) === 'NON_SMOKING' ? 'text-primary' : 'text-grey'} mb-1 `,
                  "data-toggle": "tooltip",
                  "data-placement": "top",
                  title: "tv",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: (room === null || room === void 0 ? void 0 : room.smokingPreference) === 'NON_SMOKING' ? (_iconify_icons_fa_solid_smoking_ban__WEBPACK_IMPORTED_MODULE_9___default()) : (_iconify_icons_fa_solid_smoking__WEBPACK_IMPORTED_MODULE_8___default())
                  }), " ", (room === null || room === void 0 ? void 0 : room.smokingPreference) === 'NON_SMOKING' ? ' NON SMOKING' : '-', "   "]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("hr", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                  className: "font-weight-bold",
                  children: "Fitur Kamar yang Mungkin Anda Suka"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("p", {
                  className: "mb-1",
                  children: room.detail[0].facilities
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("hr", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                  className: "font-weight-bold",
                  children: "mulai dari"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("h5", {
                  className: "mb-0 text-primary font-weight-bold",
                  children: ["Rp", room.promoPrice.toLocaleString()]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                  className: "mb-1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("small", {
                    children: [options.room, " Kamar ", moment__WEBPACK_IMPORTED_MODULE_19___default()(toDate(options.dateTo)).diff(moment__WEBPACK_IMPORTED_MODULE_19___default()(toDate(options.dateFrom)), 'days'), " malam"]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                  className: "mb-0",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("button", {
                    onClick: () => doHandleSubmit(room.guest),
                    type: "button",
                    className: "btn font-weight-bold btn-warning",
                    children: "Pesan sekarang"
                  })
                })]
              })
            })
          })]
        })
      })
    })]
  });
}

const RootStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CardProductHotel__RootStyled",
  componentId: "sc-1jmlbtb-0"
})(["border-radius:20px;box-shadow:2.5px 5px 15px -5px  rgba(0,0,0,.5);"]);
const ImageStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "CardProductHotel__ImageStyled",
  componentId: "sc-1jmlbtb-1"
})(["border-radius:20px !important;width:100%;max-height:177px;min-height:100%;object-fit:cover;"]);
const LabelView = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CardProductHotel__LabelView",
  componentId: "sc-1jmlbtb-2"
})(["border-radius:10px 0px 0px 10px;position:relative;margin-bottom:5px;padding:4px 10px;font-size:14px;color:#fff;background-color:#dc3545;&::after{content:\"\";position:absolute;background:inherit;width:10px;height:10px;bottom:-5px;right:0px;clip-path:polygon(0% 0%,100% 0%,100% 100%);}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardProductHotel);
});

/***/ }),

/***/ 4137:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5566);
/* harmony import */ var _iconify_icons_fa_solid_user_friends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1336);
/* harmony import */ var _iconify_icons_fa_solid_user_friends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_user_friends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_fa_solid_wifi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8863);
/* harmony import */ var _iconify_icons_fa_solid_wifi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_wifi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_fa_solid_tv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4493);
/* harmony import */ var _iconify_icons_fa_solid_tv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_tv__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_fa_solid_bath__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8380);
/* harmony import */ var _iconify_icons_fa_solid_bath__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_bath__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_fa_solid_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1053);
/* harmony import */ var _iconify_icons_fa_solid_info__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_info__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_fa_solid_utensils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8494);
/* harmony import */ var _iconify_icons_fa_solid_utensils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_utensils__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_fa_solid_smoking__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3023);
/* harmony import */ var _iconify_icons_fa_solid_smoking__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_smoking__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _iconify_icons_fa_solid_smoking_ban__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1231);
/* harmony import */ var _iconify_icons_fa_solid_smoking_ban__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_smoking_ban__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _iconify_icons_fa_solid_bed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8710);
/* harmony import */ var _iconify_icons_fa_solid_bed__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_bed__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9103);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4508);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _store_redirectUrl_redirectUrlActions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8923);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6981);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _api_shop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6385);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_1__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



























function CardProductHotelVia(props) {
  var _room$detail$0$facili, _room$detail$0$facili2, _roomSelected$detail$, _roomSelected$detail$2, _roomSelected$detail$3, _roomSelected$detail$4, _roomSelected$detail$6, _room$detail$0$facili3, _room$detail$0$facili4;

  const {
    room,
    options,
    hotelKey,
    dateTo,
    dateFrom,
    imgUtama,
    jmlRoom,
    detailVia
  } = props;
  const auth = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useSelector)(state => state.auth);
  const {
    access_token
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useSelector)(state => state.token);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useDispatch)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
  const {
    0: openModal,
    1: setOpenModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false);
  const {
    0: roomSelected,
    1: setRoomSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)();
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false);

  const handleOpenRoom = () => {
    setOpen(!open);
  };

  const bg = {
    overlay: {
      background: '#CCC'
    }
  };

  const handleOpenModal = room => {
    setRoomSelected(room);
    setOpenModal(open => !open);
  };

  const doHandleSubmit = guest => {
    if (true) {
      _api_shop__WEBPACK_IMPORTED_MODULE_17__/* ["default"].getAvailHotelVia */ .Z.getAvailHotelVia(access_token, {
        "product": 'hotel',
        "key": detailVia.key,
        "id": room.id,
        "option": room.id,
        "optionDetail": [room.id] // "productId": detailVia.id,
        // "dateFrom": dateFrom,
        // "dateTo": dateTo,
        // "pax": {
        //     "room": jmlRoom,
        //     "adult": options?.adult,
        //     "child": options?.child,
        //     "infant": options?.infant,
        //     "childAge": options?.childAge,
        //     numOfAdults: guest
        // },
        // "roomId": room.id,
        // "rateKey": room.detailId[0],
        // 'itineraryKey': room.id,

      }).then(res => {
        if (res.success) {
          if (!auth) {
            dispatch((0,_store_redirectUrl_redirectUrlActions__WEBPACK_IMPORTED_MODULE_22__/* .changeRedirectUrl */ .Z)(`/product/hotel/checkout?${query_string__WEBPACK_IMPORTED_MODULE_11___default().stringify({
              key: hotelKey,
              hotelId: options.productId,
              option: room.id,
              optionDetail: res.data.identifier
            })}`));
          }

          router.push(`checkoutvia?${query_string__WEBPACK_IMPORTED_MODULE_11___default().stringify({
            key: detailVia.key,
            hotelId: options.productId,
            option: room.id,
            optionDetail: [room.id]
          })}`);
        } else {
          react_toastify__WEBPACK_IMPORTED_MODULE_18__.toast.error('Kamar ini tidak tersedia');
        }
      });
    } else { var _hotel; }
  };

  function toDate(date) {
    var from = date.split("-");
    return new Date(from[2], from[1] - 1, from[0]);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(RootStyled, {
    className: "card",
    children: [(room === null || room === void 0 ? void 0 : room.isPromo) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("img", {
      style: {
        width: '104px',
        position: 'absolute',
        zIndex: '99',
        left: '4.7px',
        top: '8px'
      },
      src: "/assets/Icon/card-promo-new.png",
      alt: ""
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
      className: "card-body pl-2 py-2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
        className: "row d-flex",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
          className: "col-md-3 position-relative",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(ImageStyled, {
            src: imgUtama || 'https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/icon-no-image.svg',
            onClick: () => handleOpenRoom()
          }), (room === null || room === void 0 ? void 0 : room.roomSize) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
            style: {
              width: 'auto',
              height: '32px',
              background: '#f5f5f5',
              bottom: 0,
              left: '15px',
              borderBottomLeftRadius: '18px',
              borderTopRightRadius: '18px'
            },
            className: "position-absolute py-2 px-3 d-flex flex-row align-items-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("img", {
              src: "https://cdn.masterdiskon.com/masterdiskon/icon/fe/plans.png",
              style: {
                width: '14px'
              },
              alt: "",
              className: "mr-2"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
              style: {
                fontSize: '10px'
              },
              className: "font-weight-bold",
              children: room === null || room === void 0 ? void 0 : room.roomSize
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
          className: "col-md-9 flex-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
              className: "col-md-8",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("h5", {
                className: "mt-2 text-primary font-weight-bold",
                children: [room.name, " "]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("p", {
                className: "mb-1 font-weight-bold",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                  icon: (_iconify_icons_fa_solid_user_friends__WEBPACK_IMPORTED_MODULE_2___default()),
                  className: "mr-2"
                }), room === null || room === void 0 ? void 0 : room.guest, " Tamu", (room === null || room === void 0 ? void 0 : room.roomType) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: (_iconify_icons_fa_solid_bed__WEBPACK_IMPORTED_MODULE_10___default()),
                    className: "ml-5 mr-2"
                  }), room === null || room === void 0 ? void 0 : room.roomType]
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("p", {
                className: "mb-1",
                style: {
                  display: '-webkit-box',
                  WebkitLineClamp: '2',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("em", {
                  children: room.detail[0].facilities
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("span", {
                  className: `mb-1 ${(_room$detail$0$facili = room.detail[0].facilities) !== null && _room$detail$0$facili !== void 0 && _room$detail$0$facili.toLowerCase().includes('breakfast') ? 'text-primary' : 'text-grey'} ml-2 mr-2`,
                  "data-toggle": "tooltip",
                  "data-placement": "top",
                  title: "wifi",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: (_iconify_icons_fa_solid_utensils__WEBPACK_IMPORTED_MODULE_7___default())
                  }), " ", (_room$detail$0$facili2 = room.detail[0].facilities) !== null && _room$detail$0$facili2 !== void 0 && _room$detail$0$facili2.toLowerCase().includes('breakfast') ? 'Gratis' : 'Tanpa', " Sarapan"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("span", {
                  className: `mb-1 ${(room === null || room === void 0 ? void 0 : room.smokingPreference) === 'NON_SMOKING' ? 'text-primary' : 'text-grey'} mb-1 `,
                  "data-toggle": "tooltip",
                  "data-placement": "top",
                  title: "tv",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: (room === null || room === void 0 ? void 0 : room.smokingPreference) === 'NON_SMOKING' ? (_iconify_icons_fa_solid_smoking_ban__WEBPACK_IMPORTED_MODULE_9___default()) : ''
                  }), " ", (room === null || room === void 0 ? void 0 : room.smokingPreference) === 'NON_SMOKING' ? ' Non Smoking' : '']
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                className: "d-flex align-items-center mt-3",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                  style: {
                    cursor: 'pointer'
                  },
                  className: "badge badge-danger mr-2",
                  onClick: () => handleOpenModal(room),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                    className: "d-flex align-items-center",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("img", {
                      src: "https://cdn.masterdiskon.com/masterdiskon/icon/fe/comment-question.png",
                      style: {
                        width: '18px',
                        height: '18px'
                      },
                      className: "mr-1"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("span", {
                      children: "Kebijakan Pembatalan"
                    })]
                  })
                }), room.detail[0].cancellationFreePolicyDisplay && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                  className: "d-flex align-items-center",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("img", {
                    className: "mr-1",
                    style: {
                      width: '17px',
                      height: '17px'
                    },
                    src: "https://cdn.masterdiskon.com/masterdiskon/icon/fe/info-blue.png"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                    className: "text-primary font-italic",
                    dangerouslySetInnerHTML: {
                      __html: room.detail[0].cancellationFreePolicyDisplay
                    }
                  })]
                })]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
              className: "col-md-4",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                className: " text-right h-100 d-flex flex-column justify-content-center",
                children: !(room !== null && room !== void 0 && room.isFull) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                    className: "mb-1",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("small", {
                      children: [" ", moment__WEBPACK_IMPORTED_MODULE_19___default()(toDate(dateTo)).diff(moment__WEBPACK_IMPORTED_MODULE_19___default()(toDate(dateFrom)), 'days'), " night, ", options.room, " room"]
                    })
                  }), (room === null || room === void 0 ? void 0 : room.view) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(LabelView, {
                      className: "badge badge-danger",
                      children: room === null || room === void 0 ? void 0 : room.view
                    })
                  }), (room === null || room === void 0 ? void 0 : room.priceNormal) > (room === null || room === void 0 ? void 0 : room.price) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("h6", {
                    className: "text-danger",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("s", {
                      children: ["Rp", (parseInt(room.priceNormal) + parseInt(0)).toLocaleString()]
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("h5", {
                    className: "mb-0 text-primary font-weight-bold",
                    children: ["Rp", (parseInt(room === null || room === void 0 ? void 0 : room.price) + parseInt(0)).toLocaleString()]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                    className: "mb-1",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                      children: " Includes taxes and charges"
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                    className: "mb-0",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("button", {
                      onClick: () => doHandleSubmit(room.guest),
                      type: "button",
                      className: "btn font-weight-bold btn-warning",
                      children: "Pesan sekarang"
                    })
                  })]
                }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("h6", {
                  className: "font-weight-bold text-danger",
                  children: "Kamar tidak tersedia"
                })
              })
            })]
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__.Modal, {
      isOpen: openModal,
      centered: true,
      size: "xl",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_16__.ModalBody, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("h5", {
          className: "font-weight-bold mb-3",
          children: "Detail Biaya Pembatalan"
        }), (roomSelected === null || roomSelected === void 0 ? void 0 : (_roomSelected$detail$ = roomSelected.detail[0]) === null || _roomSelected$detail$ === void 0 ? void 0 : (_roomSelected$detail$2 = _roomSelected$detail$.cancelation) === null || _roomSelected$detail$2 === void 0 ? void 0 : _roomSelected$detail$2.length) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("table", {
          className: "table table-bordered",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("tr", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("th", {
                children: "Nomor Kamar"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("th", {
                children: "Tipe Kamar"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("th", {
                children: "Dari Tanggal"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("th", {
                children: "Sampai Tanggal"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("th", {
                children: "Biaya Pembatalan"
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("tbody", {
            children: roomSelected === null || roomSelected === void 0 ? void 0 : (_roomSelected$detail$3 = roomSelected.detail[0]) === null || _roomSelected$detail$3 === void 0 ? void 0 : (_roomSelected$detail$4 = _roomSelected$detail$3.cancelation) === null || _roomSelected$detail$4 === void 0 ? void 0 : _roomSelected$detail$4.map((item, index) => {
              var _roomSelected$detail$5;

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("tr", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("td", {
                  children: ++index
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("td", {
                  children: roomSelected === null || roomSelected === void 0 ? void 0 : (_roomSelected$detail$5 = roomSelected.detail[0]) === null || _roomSelected$detail$5 === void 0 ? void 0 : _roomSelected$detail$5.name
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("td", {
                  children: item.FromDate
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("td", {
                  children: item.ToDate
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("td", {
                  children: ["Rp", Number(item.CancellationPrice).toLocaleString()]
                })]
              });
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("h6", {
          className: "text-center font-weight-bold",
          children: "Informasi Penting (Essential Information)"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("p", {
          className: "text-center",
          dangerouslySetInnerHTML: {
            __html: roomSelected === null || roomSelected === void 0 ? void 0 : (_roomSelected$detail$6 = roomSelected.detail[0]) === null || _roomSelected$detail$6 === void 0 ? void 0 : _roomSelected$detail$6.cancellationPolicyDisplay
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
          onClick: handleOpenModal,
          className: "d-flex justify-content-center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("button", {
            type: "button",
            className: "btn btn-warning",
            children: "Tutup"
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__.Modal, {
      toggle: handleOpenRoom,
      isOpen: open,
      size: "xl",
      styles: bg,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__.ModalBody, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
          className: "d-flex",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
            className: "flex-1 col-8",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("img", {
                src: imgUtama
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
            className: "flex-1 col-4",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
              className: "card",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                className: "card-body",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("h5", {
                  className: "mt-2 text-primary font-weight-bold",
                  children: [room.name, " "]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("hr", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                  className: "font-weight-bold",
                  children: "Info Kamar "
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("p", {
                  className: "mb-1",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: (_iconify_icons_fa_solid_user_friends__WEBPACK_IMPORTED_MODULE_2___default()),
                    className: "mr-2"
                  }), room === null || room === void 0 ? void 0 : room.guest, " Tamu"]
                }), (room === null || room === void 0 ? void 0 : room.roomType) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("p", {
                  className: `mb-1`,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: (_iconify_icons_fa_solid_bed__WEBPACK_IMPORTED_MODULE_10___default()),
                    className: "mr-2"
                  }), room === null || room === void 0 ? void 0 : room.roomType]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("p", {
                  className: `mb-1 ${(_room$detail$0$facili3 = room.detail[0].facilities) !== null && _room$detail$0$facili3 !== void 0 && _room$detail$0$facili3.toLowerCase().includes('breakfast') ? 'text-primary' : 'text-danger'} mr-2`,
                  "data-toggle": "tooltip",
                  "data-placement": "top",
                  title: "wifi",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: (_iconify_icons_fa_solid_utensils__WEBPACK_IMPORTED_MODULE_7___default())
                  }), " ", (_room$detail$0$facili4 = room.detail[0].facilities) !== null && _room$detail$0$facili4 !== void 0 && _room$detail$0$facili4.toLowerCase().includes('breakfast') ? 'Gratis ' : ' Tanpa', " Sarapan"]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("hr", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                  className: "font-weight-bold",
                  children: "Fitur Kamar yang Mungkin Anda Suka"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("p", {
                  className: "mb-1",
                  children: room.detail[0].facilities
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("hr", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                  className: "font-weight-bold",
                  children: "mulai dari"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("h5", {
                  className: "mb-0 text-primary font-weight-bold",
                  children: ["Rp", (parseInt(room === null || room === void 0 ? void 0 : room.price) + parseInt(0)).toLocaleString()]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                  className: "mb-1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("small", {
                    children: [options.room, " Kamar ", moment__WEBPACK_IMPORTED_MODULE_19___default()(toDate(dateTo)).diff(moment__WEBPACK_IMPORTED_MODULE_19___default()(toDate(dateFrom)), 'days'), " malam"]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                  className: "mb-0",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("button", {
                    onClick: () => doHandleSubmit(room.guest),
                    type: "button",
                    className: "btn font-weight-bold btn-warning",
                    children: "Pesan sekarang"
                  })
                })]
              })
            })
          })]
        })
      })
    })]
  });
}

const RootStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CardProductHotelVia__RootStyled",
  componentId: "sc-1e3qb26-0"
})(["border-radius:20px;box-shadow:2.5px 5px 15px -5px  rgba(0,0,0,.5);"]);
const ImageStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "CardProductHotelVia__ImageStyled",
  componentId: "sc-1e3qb26-1"
})(["border-radius:20px !important;width:100%;max-height:177px;min-height:100%;object-fit:cover;"]);
const LabelView = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CardProductHotelVia__LabelView",
  componentId: "sc-1e3qb26-2"
})(["border-radius:10px 0px 0px 10px;position:relative;margin-bottom:5px;padding:4px 10px;font-size:14px;color:#fff;background-color:#dc3545;&::after{content:\"\";position:absolute;background:inherit;width:10px;height:10px;bottom:-5px;right:0px;clip-path:polygon(0% 0%,100% 0%,100% 100%);}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardProductHotelVia);
});

/***/ }),

/***/ 7460:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9585);
/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_MDPagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8069);
/* harmony import */ var _shared_CardHotel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2525);
/* harmony import */ var _components_mobile_shared_CardHotel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8809);
/* harmony import */ var _svg_icon_research_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1766);
/* harmony import */ var _iconify_icons_fa_solid_bed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8710);
/* harmony import */ var _iconify_icons_fa_solid_bed__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_bed__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8557);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4508);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3015);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5566);
/* harmony import */ var _iconify_icons_fa_solid_star__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6103);
/* harmony import */ var _iconify_icons_fa_solid_star__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_star__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _iconify_icons_fa_solid_wifi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8863);
/* harmony import */ var _iconify_icons_fa_solid_wifi__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_wifi__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _iconify_icons_fa_solid_map_marker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8818);
/* harmony import */ var _iconify_icons_fa_solid_map_marker__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_map_marker__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _widgets_WidgetHotel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(725);
/* harmony import */ var _CardProductHotel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3230);
/* harmony import */ var _CardProductHotelVia__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(4137);
/* harmony import */ var _shared_AboutAccommodation__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(5221);
/* harmony import */ var _HotelReview__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(603);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(9103);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _api_shop__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(6385);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(1664);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(6981);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(9368);
/* harmony import */ var _biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(3082);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HotelReview__WEBPACK_IMPORTED_MODULE_22__, swiper_react__WEBPACK_IMPORTED_MODULE_12__, _CardProductHotelVia__WEBPACK_IMPORTED_MODULE_20__, _CardProductHotel__WEBPACK_IMPORTED_MODULE_19__, _widgets_WidgetHotel__WEBPACK_IMPORTED_MODULE_18__, _iconify_react__WEBPACK_IMPORTED_MODULE_13__, _shared_CardHotel__WEBPACK_IMPORTED_MODULE_6__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([_HotelReview__WEBPACK_IMPORTED_MODULE_22__, swiper_react__WEBPACK_IMPORTED_MODULE_12__, _CardProductHotelVia__WEBPACK_IMPORTED_MODULE_20__, _CardProductHotel__WEBPACK_IMPORTED_MODULE_19__, _widgets_WidgetHotel__WEBPACK_IMPORTED_MODULE_18__, _iconify_react__WEBPACK_IMPORTED_MODULE_13__, _shared_CardHotel__WEBPACK_IMPORTED_MODULE_6__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







































react_ga__WEBPACK_IMPORTED_MODULE_33___default().initialize('G-56R5954QCE');
const initialState = {
  options: {},
  filters: {},
  meta: {},
  hotel: {},
  isLoading: true,
  isLoadingRoomVia: true,
  roomvia: {}
};
const markerStyleOK = {
  position: "absolute",
  top: "100%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 40
};
const markerStyle = {
  position: "absolute",
  top: "100%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 25
};

function parseQueryOptions(location) {
  const query = query_string__WEBPACK_IMPORTED_MODULE_24___default().parse(location);
  const optionValues = {
    product: 'hotel',
    from: '',
    dateFrom: '',
    dateTo: '',
    room: '',
    childAge: [],
    adult: '1',
    keyword: '',
    child: '0',
    productId: '',
    infant: '0'
  };

  if (typeof query.from === "string") {
    optionValues.from = query.from;
  }

  if (typeof query.keyword === "string") {
    optionValues.keyword = query.keyword;
  }

  if (typeof query.dateFrom === "string") {
    optionValues.dateFrom = query.dateFrom;
  }

  if (typeof query.dateTo === "string") {
    optionValues.dateTo = query.dateTo;
  }

  if (typeof query.adult === "string") {
    optionValues.adult = query.adult;
  }

  if (typeof query.child === "string") {
    optionValues.child = query.child;
  }

  if (typeof query.childAge === "string") {
    if (query.childAge) {
      optionValues.childAge = [query.childAge];
    } else {
      optionValues.childAge = [];
    }
  }

  if (typeof query.childAge === 'object') {
    optionValues.childAge = query.childAge;
  }

  if (typeof query.room === "string") {
    optionValues.room = query.room;
  }

  if (typeof query.productId === "string") {
    optionValues.productId = query.productId;
  }

  return optionValues;
}

function parseQuery(location) {
  return [parseQueryOptions(location)];
}

function buildQuery(options) {
  const params = {};

  if (options.from !== "") {
    params.from = options.from;
  }

  if (options.to !== "") {
    params.to = options.to;
  }

  if (options.dateFrom !== "") {
    params.dateFrom = options.dateFrom;
  }

  if (options.dateTo !== "") {
    params.dateTo = options.dateTo;
  }

  if (options.adult !== "") {
    params.adult = options.adult;
  }

  if (options.child !== "") {
    params.child = options.child;
  }

  if (options.childAge !== '' || options.childAge !== []) {
    params.childAge = options.childAge;
  }

  if (options.room !== "") {
    params.room = options.room;
  }

  if (options.keyword !== "") {
    params.keyword = options.keyword;
  }

  if (options.productId !== "") {
    params.productId = options.productId;
  }

  return query_string__WEBPACK_IMPORTED_MODULE_24___default().stringify(params, {
    encode: false
  });
}

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_HOTEL':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true
      });

    case 'FETCH_HOTEL_SUCCESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        hotel: action.payload,
        isLoading: false
      });

    case 'FETCH_HOTELVIA_SUCCESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        roomvia: action.payload,
        isLoading: false,
        isLoadingRoomVia: false
      });

    case 'SET_FILTER_VALUE':
      return _objectSpread(_objectSpread({}, state), {}, {
        options: _objectSpread(_objectSpread({}, state.options), {}, {
          page: 1
        }),
        filters: _objectSpread(_objectSpread({}, state.filters), {}, {
          [action.filter]: action.value
        })
      });

    case 'SET_META':
      return _objectSpread(_objectSpread({}, state), {}, {
        meta: action.payload
      });

    case 'SET_OPTION_VALUE':
      return _objectSpread(_objectSpread({}, state), {}, {
        options: _objectSpread(_objectSpread({}, state.options), {}, {
          page: 1,
          [action.option]: action.value
        })
      });

    case 'SET_OPTIONS_VALUE':
      return _objectSpread(_objectSpread({}, state), {}, {
        options: action.value
      });

    default:
      throw new Error();
  }
}

function init(state) {
  const [options] = parseQuery(window.location.search);
  return _objectSpread(_objectSpread({}, state), {}, {
    options
  });
}

function DetailHotel() {
  var _hotel$detail, _hotel$detail2, _hotel$detail3, _hotel$detail3$proper, _hotel$detail4, _hotel$detail5, _hotel$detail6, _hotel$detail7, _hotel$detail7$activi, _hotel$options, _state$roomvia, _state$roomvia$option, _state$roomvia2, _state$roomvia2$optio, _hotel$recommendasiHo;

  const bg = {
    overlay: {
      background: "#000b"
    }
  };
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, initialState, init);
  const {
    access_token
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_25__.useSelector)(state => state.token);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_23__.useRouter)();
  const {
    0: showOtherImage,
    1: setShowOtherImage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: indexSwiperActive,
    1: setIndexSwiperActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: imgSelected,
    1: setImgSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: moreBreakfastInfo,
    1: setMoreBreakfastInfo
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const handleOpen = index => {
    // openMap
    setOpen(!open);
    setImgSelected(index);
  };

  const {
    0: childClicked,
    1: setChildClicked
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const isTabletOrMobile = (0,react_responsive__WEBPACK_IMPORTED_MODULE_16__.useMediaQuery)({
    query: '(max-width:1224px)'
  });
  const CardHotel = isTabletOrMobile ? _components_mobile_shared_CardHotel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z : _shared_CardHotel__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z;
  const {
    0: coordinates,
    1: setCoordinates
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const {
    0: openMap,
    1: setOpenMap
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const handleOpenMap = () => {
    setOpenMap(!openMap);
  };

  const {
    hotel
  } = state;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // document.title = hotel.name + ' -  Promo dan Diskon Spesial 2023';
    // ReactGA.pageview(window.location.pathname + window.location.search);
    const query = buildQuery(state.options);
    const href = query_string__WEBPACK_IMPORTED_MODULE_24___default().stringifyUrl(_objectSpread(_objectSpread({}, query_string__WEBPACK_IMPORTED_MODULE_24___default().parseUrl(router.asPath)), {}, {
      query: query_string__WEBPACK_IMPORTED_MODULE_24___default().parse(query)
    }), {
      encode: false
    });
    router.replace(router.pathname, href, {
      shallow: true
    }).then(() => {
      // This is necessary for the "History API" to work.
      window.history.replaceState(_objectSpread(_objectSpread({}, window.history.state), {}, {
        options: _objectSpread(_objectSpread({}, window.history.state.options), {}, {
          shallow: false
        })
      }), '', href);
    });
  }, [state.options]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch({
      type: 'FETCH_HOTEL'
    });
    _api_shop__WEBPACK_IMPORTED_MODULE_26__/* ["default"].getDetailHotel */ .Z.getDetailHotel(access_token, state.options).then(res => {
      if (res.success) {
        var _res$data, _res$data2;

        // toast.error('Kamar hotel TRAV tersedia', res)
        setCoordinates({
          lng: Number((_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.detail.longitude),
          lat: Number((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.detail.latitude)
        });
        dispatch({
          type: 'FETCH_HOTEL_SUCCESS',
          payload: res.data
        });
      } else {// toast.error('Kamar hotel tidak tersedia', { toastId: 'not-found' })
        // setTimeout(() => {
        //     router.back()
        // }, 2000);
      }
    });
  }, [state.options]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // ReactGA.pageview(window.location.pathname + window.location.search);
    setTimeout(() => {
      _api_shop__WEBPACK_IMPORTED_MODULE_26__/* ["default"].getDetailHotelVia */ .Z.getDetailHotelVia(access_token, state.options).then(res => {
        if (res.success) {
          dispatch({
            type: 'FETCH_HOTELVIA_SUCCESS',
            payload: res.data
          });
        } else {
          react_toastify__WEBPACK_IMPORTED_MODULE_27__.toast.error('Kamar hotel tidak tersedia', {
            toastId: 'not-found'
          });
          setTimeout(() => {// router.back()
          }, 2000);
        }
      });
    }, 2000);
  }, [state.options]);

  const handleChangeOptions = options => {
    dispatch({
      type: 'SET_OPTIONS_VALUE',
      value: options
    });
  };

  const {
    0: popUpDetail,
    1: setPopUpDetail
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: propertyImage,
    1: setpropertyImage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: roomHotel,
    1: setroomHotel
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: popUpImages,
    1: setpopUpImages
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("none");
  const {
    0: popUpTitleHotel,
    1: setPopUpTitleHotel
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("none");
  const {
    0: popUpRatingHotel,
    1: setPopUpRatingHotel
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("none");
  const {
    0: popUpPriceHotel,
    1: setPopUpPriceHotel
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: popUpPromoPriceHotel,
    1: setPopUpPromoPriceHotel
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: popUpIdHotel,
    1: setpopUpIdHotel
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();

  const renderClass = () => {
    let arr = [];

    for (let index = 0; index < hotel.class; index++) {
      arr[index] = index;
    }

    return arr.map(() => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
      style: {
        width: '20px',
        height: '20px',
        position: 'relative',
        display: 'inline-block'
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
        src: "https://cdn.masterdiskon.com/masterdiskon/icon/fe/star.png",
        layout: "fill",
        objectFit: "cover"
      })
    }));
  };

  const ratingHotel = idx => {
    let arr = [];

    for (let index = 0; index < idx; index++) {
      arr[index] = index;
    }

    return arr.map(() => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
      style: {
        width: '15px',
        height: '15px',
        position: 'relative',
        display: 'inline-block'
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
        src: "https://cdn.masterdiskon.com/masterdiskon/icon/fe/star.png",
        layout: "fill",
        objectFit: "cover"
      })
    }));
  };

  function ReactTitle(text) {
    document.title = 'Harga ' + (text === null || text === void 0 ? void 0 : text.accommodationType) + ' ' + text.name + ' di ' + text.detail.city + ' - Booking Hotel Online Promo dan Diskon Spesial 2023';
    react_ga__WEBPACK_IMPORTED_MODULE_33___default().pageview(window.location.pathname + window.location.search);
  }

  function toDate(date) {
    var from = date.split("-");
    return new Date(from[2], from[1] - 1, from[0]);
  }

  if (state.isLoading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
      style: {
        height: '50vh',
        marginBottom: '5rem'
      },
      className: "d-flex flex-column align-items-center justify-content-center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("img", {
        src: "https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/pulse-spinner.svg"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("h4", {
        children: "Sedang menyiapkan data..."
      })]
    });
  } // const images = [...new Set([...hotel.detail.images, hotel.image])]


  const images = [...new Set([...hotel.detail.images, hotel.image])];
  const mainImg = images.filter((item, index) => index < 5);

  const handleShowImages = index => {
    if (typeof index === 'number') {
      setIndexSwiperActive(index);
    } else {
      setIndexSwiperActive(0);
    }

    setShowOtherImage(!showOtherImage);
  }; // const images = [hotel.images, ...hotel.options.map(item => item.detail.map(item2 => item2.images.map(item3 => item3))).map(item => item.toString()).filter(item => item !== '')]


  const handlePropertyImages = item => {
    try {
      setpropertyImage(JSON.parse(item.propertyImages)[0].entries[0].url); // setroomHotel(JSON.parse(item.propertyImages)[0].entries[0].url)
    } catch (error) {
      console.log('handlePropertyImages', error);
    }
  };

  const renderRekomendasi = idx => {
    let arr = [];

    for (let index = 0; index < idx.length; index++) {
      arr[index] = index;
    }

    return arr.map(() => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
      style: {
        width: '15px',
        height: '15px',
        position: 'relative',
        display: 'inline-block'
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
        src: "https://cdn.masterdiskon.com/masterdiskon/icon/fe/star.png",
        layout: "fill",
        objectFit: "cover"
      })
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("section", {
    className: "py-3",
    style: {
      background: '#F5F6FA'
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
        className: "tampungSumary",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("nav", {
          className: "mt-3 bg-transparent",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("ol", {
            className: "breadcrumb p-0 bg-transparent",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("li", {
              className: "breadcrumb-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(next_link__WEBPACK_IMPORTED_MODULE_28__["default"], {
                className: " text-primary",
                href: "/",
                children: "Home"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("li", {
              className: "breadcrumb-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(next_link__WEBPACK_IMPORTED_MODULE_28__["default"], {
                href: "/hotels",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("a", {
                  className: " text-primary",
                  children: "Hotel"
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("li", {
              className: "breadcrumb-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(next_link__WEBPACK_IMPORTED_MODULE_28__["default"], {
                className: " text-primary",
                href: `/product/hotel?${query_string__WEBPACK_IMPORTED_MODULE_24___default().stringify(_objectSpread(_objectSpread({}, state.options), {}, {
                  keyword: hotel === null || hotel === void 0 ? void 0 : hotel.detail.city
                }))}`,
                children: hotel === null || hotel === void 0 ? void 0 : hotel.detail.city
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("li", {
              className: "breadcrumb-item font-weight-bold",
              "aria-current": "page",
              children: hotel.name
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
            className: "col-md-3 d-flex flex-column",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
              className: "card",
              style: {
                borderRadius: '20px',
                background: 'radial-gradient(60% 80%, rgba(253, 185, 51, 0.573) 44.79%, rgb(244, 121, 61) 100%)'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
                className: "card-body",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("label", {
                  className: "font-weight-bold",
                  children: "Kota"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("h6", {
                  className: "font-weight-bold bg-white p-1",
                  style: {
                    marginTop: '-7px'
                  },
                  children: [hotel === null || hotel === void 0 ? void 0 : (_hotel$detail = hotel.detail) === null || _hotel$detail === void 0 ? void 0 : _hotel$detail.city, ",", hotel === null || hotel === void 0 ? void 0 : (_hotel$detail2 = hotel.detail) === null || _hotel$detail2 === void 0 ? void 0 : _hotel$detail2.country]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("label", {
                  className: "font-weight-bold",
                  children: "Check In"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("h6", {
                  className: "font-weight-bold bg-white p-1",
                  style: {
                    marginTop: '-7px'
                  },
                  children: moment__WEBPACK_IMPORTED_MODULE_29___default()(toDate(state.options.dateFrom)).format('ddd, DD MMM YYYY')
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("label", {
                  className: "font-weight-bold",
                  children: "Check Out"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("h6", {
                  className: "font-weight-bold bg-white p-1",
                  style: {
                    marginTop: '-7px'
                  },
                  children: moment__WEBPACK_IMPORTED_MODULE_29___default()(toDate(state.options.dateTo)).format('ddd, DD MMM YYYY')
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("label", {
                  className: "font-weight-bold",
                  children: "Tamu"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("h6", {
                  className: "font-weight-bold bg-white p-1",
                  style: {
                    marginTop: '-7px'
                  },
                  children: [Number(state.options.adult || 0) > 0 && `${state.options.adult} Dewasa`, Number(state.options.child || 0) > 0 && `, ${state.options.child} Anak-anak`]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("label", {
                  className: "font-weight-bold",
                  children: "Kamar"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("h6", {
                  className: "font-weight-bold bg-white p-1",
                  style: {
                    marginTop: '-7px'
                  },
                  children: state.options.room
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("section", {
              id: "facility",
              className: "card mt-3 d-flex flex-column",
              style: {
                flex: 1,
                borderRadius: '20px',
                background: '#0070BA'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
                className: "card-body text-white flex-fill",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
                  className: " pb-3",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("h6", {
                    className: "font-weight-bold mb-0",
                    children: "Keunggulan Properti"
                  }), (hotel === null || hotel === void 0 ? void 0 : (_hotel$detail3 = hotel.detail) === null || _hotel$detail3 === void 0 ? void 0 : (_hotel$detail3$proper = _hotel$detail3.propertyAdvantage) === null || _hotel$detail3$proper === void 0 ? void 0 : _hotel$detail3$proper.length) > 0 ? hotel === null || hotel === void 0 ? void 0 : (_hotel$detail4 = hotel.detail) === null || _hotel$detail4 === void 0 ? void 0 : _hotel$detail4.propertyAdvantage.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("span", {
                    className: "badge badge-light mr-1 text-primary",
                    children: item.name
                  })) : '-']
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
                  className: "mb-3",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("label", {
                    className: "font-weight-bold d-block mb-0",
                    children: "Breakfast Info"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("label", {
                    className: "mb-0",
                    style: _objectSpread({
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical'
                    }, !moreBreakfastInfo && {
                      WebkitLineClamp: 3,
                      overflow: 'hidden'
                    }),
                    children: (hotel === null || hotel === void 0 ? void 0 : (_hotel$detail5 = hotel.detail) === null || _hotel$detail5 === void 0 ? void 0 : _hotel$detail5.breakfastInfo.map(item => item.name).toString().replaceAll(',', ', ')) || '-'
                  }), (hotel === null || hotel === void 0 ? void 0 : (_hotel$detail6 = hotel.detail) === null || _hotel$detail6 === void 0 ? void 0 : _hotel$detail6.breakfastInfo.map(item => item.name).toString().replaceAll(',', ', ').length) > 75 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("small", {
                    onClick: () => setMoreBreakfastInfo(v => !v),
                    style: {
                      cursor: 'pointer'
                    },
                    className: "font-weight-bold badge badge-light",
                    children: !moreBreakfastInfo ? 'See More' : 'See Less'
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
                  className: "",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("label", {
                    className: "font-weight-bold d-block mb-0",
                    children: "Activities"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("label", {
                    className: "",
                    children: (hotel === null || hotel === void 0 ? void 0 : (_hotel$detail7 = hotel.detail) === null || _hotel$detail7 === void 0 ? void 0 : (_hotel$detail7$activi = _hotel$detail7.activities) === null || _hotel$detail7$activi === void 0 ? void 0 : _hotel$detail7$activi.map(item => item.name).toString().replaceAll(',', ', ')) || '-'
                  })]
                })]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
            className: "col-md-9 d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
              className: "mb-2 d-flex",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
                className: "flex-fill px-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("a", {
                  style: {
                    background: 'radial-gradient(50% 50%, rgba(241, 100, 137, 0.933) 20%, rgb(216, 20, 94) 93.40%)'
                  },
                  className: "btn btn-sm font-weight-bold text-white btn-block",
                  href: "#infoprice",
                  children: "Info & Harga"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
                className: "flex-fill px-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("a", {
                  style: {
                    background: 'radial-gradient(50% 50%, rgba(241, 100, 137, 0.933) 20%, rgb(216, 20, 94) 93.40%)'
                  },
                  className: "btn btn-sm font-weight-bold text-white btn-block",
                  href: "#facility",
                  children: "Fasilitas"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
                className: "flex-fill px-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("a", {
                  style: {
                    background: 'radial-gradient(50% 50%, rgba(241, 100, 137, 0.933) 20%, rgb(216, 20, 94) 93.40%)'
                  },
                  className: "btn btn-sm font-weight-bold text-white btn-block",
                  href: "#stayRules",
                  children: "Aturan Menginap"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
                className: "flex-fill px-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("a", {
                  style: {
                    background: 'radial-gradient(50% 50%, rgba(241, 100, 137, 0.933) 20%, rgb(216, 20, 94) 93.40%)'
                  },
                  className: "btn btn-sm font-weight-bold text-white btn-block",
                  href: "#stayRules",
                  children: "Informasi Penting"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
                className: "flex-fill px-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("a", {
                  style: {
                    background: 'radial-gradient(50% 50%, rgba(241, 100, 137, 0.933) 20%, rgb(216, 20, 94) 93.40%)'
                  },
                  className: "btn btn-sm font-weight-bold text-white btn-block",
                  href: "#guestReviews",
                  children: "Ulasan Tamu"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
              className: "d-flex row align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
                className: "col-9",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("span", {
                  style: {
                    background: 'radial-gradient(circle,#ffd363 30%,#fdb933 100%)'
                  },
                  className: "badge  font-weight-bold py-1 px-2 mb-2",
                  children: hotel === null || hotel === void 0 ? void 0 : hotel.accommodationType
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("h4", {
                  className: "font-weight-bold m-0",
                  children: hotel.name
                }), " ", ReactTitle(hotel), renderClass()]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
                className: "col-3 text-right ",
                style: {
                  margin: '13px 0',
                  width: '50%'
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("h6", {
                  className: "d-flex justify-content-end align-items-start",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("span", {
                    className: "text-grey ",
                    style: {
                      fontSize: '12px',
                      marginRight: '5px'
                    },
                    children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("span", {
                      className: " font-weight-bold",
                      style: {
                        fontSize: '15px'
                      },
                      children: hotel.reviewScore >= 9 ? 'Superb' : hotel.reviewScore >= 8 ? 'Impressive' : hotel.reviewScore >= 7 ? 'Convenient' : hotel.reviewScore >= 6 ? 'Good' : 'Review Score'
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("br", {}), " Reviews"]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("span", {
                    className: `badge badge-lg badge-warning mr-1`,
                    style: {
                      height: '30px',
                      fontSize: '15px',
                      padding: '6px'
                    },
                    children: hotel.reviewScore
                  })]
                }), Number(hotel.reviewScore) == 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("span", {
                  children: "Unrated"
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
                  className: "mb-2 mt-2",
                  onClick: handleOpenMap,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("p", {
                    className: "mb-0 text-secondary",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
                      style: {
                        width: '20px',
                        height: '20px',
                        position: 'relative',
                        display: 'inline-block'
                      },
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        src: 'https://cdn.masterdiskon.com/masterdiskon/icon/fe/location.png',
                        layout: "fill"
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("span", {
                      style: {
                        cursor: 'pointer'
                      },
                      className: "ml-1",
                      children: [hotel.detail.address, ", ", hotel.detail.city, ", ", hotel.detail.country, " - ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("span", {
                        className: "text-primary  font-weight-bold  ",
                        children: " Great location - Show Map "
                      }), " "]
                    })]
                  })
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
              className: "photo",
              style: {
                cursor: 'pointer'
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
                className: "photo-grid c-4",
                children: mainImg.map((item, index) => {
                  if (index === 0) {
                    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
                      alt: hotel.name,
                      onClick: () => handleOpen(index),
                      className: "photo-grid__main h-2 w-2",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
                        className: "image",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("img", {
                          alt: hotel.name,
                          src: item
                        })
                      })
                    });
                  } else {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
                      className: "photo-grid__item",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
                        className: "image",
                        onClick: () => handleOpen(index),
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("img", {
                          alt: hotel.name,
                          src: item
                        })
                      }), index === mainImg.length - 1 && images.length > 5 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
                        onClick: () => handleOpen(0),
                        className: "text",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
                          className: "text__wrapper font-weight-bold",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("span", {
                            children: "Lihat semua foto"
                          })
                        })
                      })]
                    });
                  }
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_30__.Modal, {
              id: "carousel-image",
              toggle: handleOpen,
              isOpen: open,
              size: "lg",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_30__.ModalBody, {
                className: "position-relative",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("h5", {
                  className: "position-absolute",
                  onClick: handleOpen,
                  style: {
                    right: '3px',
                    top: '0',
                    cursor: 'pointer',
                    zIndex: '1'
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("i", {
                    class: "fas fa-times-circle    "
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_11__.Carousel, {
                  selectedItem: imgSelected,
                  children: images === null || images === void 0 ? void 0 : images.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("img", {
                      src: item
                    })
                  }))
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_30__.Modal, {
              toggle: handleOpenMap,
              isOpen: openMap,
              size: "xl",
              styles: bg,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_30__.ModalBody, {
                styles: bg,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
                  className: "col-12",
                  children: !state.isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
                    style: {
                      height: "90vh",
                      width: "100%"
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
                      style: {
                        background: "#FFF",
                        position: "absolute",
                        width: 330,
                        height: "60vh",
                        zIndex: 100,
                        display: popUpTitleHotel == 'none' ? 'none' : 'block'
                      },
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
                          className: "d-flex row align-items-center",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
                            className: "col-3",
                            children: popUpImages === 'none' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
                              style: {
                                width: '85px',
                                height: '85px',
                                position: 'relative',
                                display: 'inline-block'
                              },
                              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                src: 'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20017895-7283d6800c301956dd11d1063ad78168.jpeg?tr=q-40,w-740,h-465&_src=imagekit',
                                layout: "fill"
                              })
                            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
                              style: {
                                width: '85px',
                                height: '85px',
                                position: 'relative',
                                display: 'inline-block'
                              },
                              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                src: propertyImage,
                                layout: "fill"
                              })
                            })
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
                            className: "col-9",
                            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("span", {
                              style: {
                                background: 'radial-gradient(circle,#ffd363 30%,#fdb933 100%)'
                              },
                              className: "badge  font-weight-bold py-1 px-2",
                              children: popUpDetail === null || popUpDetail === void 0 ? void 0 : popUpDetail.propertyType
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("h6", {
                              className: "font-weight-bold m-0",
                              children: popUpTitleHotel != 'none' ? popUpTitleHotel : "Masterdiskon"
                            }), ratingHotel(popUpRatingHotel), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("h6", {
                              className: "d-flex  ",
                              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("span", {
                                className: `badge badge-lg badge-primary mr-1`,
                                style: {
                                  height: '30px',
                                  fontSize: '15px',
                                  padding: '6px'
                                },
                                children: popUpDetail.reviewScore
                              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("span", {
                                className: "text-grey ",
                                style: {
                                  fontSize: '12px',
                                  marginRight: '5px'
                                },
                                children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("span", {
                                  className: " font-weight-bold",
                                  style: {
                                    fontSize: '13px'
                                  },
                                  children: popUpDetail.reviewScore >= 8.0 ? 'Very Good' : popUpDetail.reviewScore >= 7.0 ? 'Good' : 'Review Score'
                                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("br", {}), " Reviews"]
                              })]
                            }), Number(popUpDetail.reviewScore) == 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("span", {
                              children: "Unrated"
                            })]
                          })]
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
                          className: "col-12 p-0",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("p", {
                            className: "mb-0 text-secondary",
                            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
                              style: {
                                width: '20px',
                                height: '20px',
                                position: 'relative',
                                display: 'inline-block'
                              },
                              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("img", {
                                style: markerStyle,
                                src: "https://toppng.com/uploads/preview/simple-location-map-pin-icon-blue-location-icon-11562928973mg6jeytef4.png"
                              })
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("smal", {
                              style: {
                                fontSize: 14
                              },
                              children: [popUpDetail.address, ",", popUpDetail.city, ",", popUpDetail.country]
                            })]
                          })
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
                        children: [popUpPriceHotel != "Rp0" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.Fragment, {
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("h6", {
                            className: "mt-2 font-weight-bold",
                            children: [popUpTitleHotel, " "]
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("small", {
                            children: " 1 night, 2 adults"
                          }), " "]
                        }) : '', (popUpPromoPriceHotel === null || popUpPromoPriceHotel === void 0 ? void 0 : popUpPromoPriceHotel.isPromo) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("h6", {
                          className: "text-danger",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("s", {
                            children: popUpPriceHotel
                          })
                        }), popUpPriceHotel != "Rp0" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("h5", {
                          className: "mb-0 text-primary font-weight-bold",
                          children: popUpPromoPriceHotel
                        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("h5", {
                          className: "mb-0 text-danger font-weight-bold",
                          children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("br", {}), "Full Booking"]
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("hr", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
                          className: "mb-0",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(next_link__WEBPACK_IMPORTED_MODULE_28__["default"], {
                            href: `/product/hotel/detail?${query_string__WEBPACK_IMPORTED_MODULE_24___default().stringify(_objectSpread(_objectSpread({}, state.options), {}, {
                              productId: popUpIdHotel
                            }))}`,
                            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("a", {
                              className: "btn font-weight-bold btn-primary",
                              target: "_blank",
                              children: "View"
                            })
                          })
                        })]
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx((google_map_react__WEBPACK_IMPORTED_MODULE_10___default()), {
                      bootstrapURLKeys: {
                        key: "AIzaSyC_O0-LKyAboQn0O5_clZnePHSpQQ5slQU"
                      },
                      defaultCenter: coordinates,
                      center: coordinates,
                      defaultZoom: 16,
                      margin: [20],
                      debounced: true // layerTypes={['TrafficLayer']}
                      ,
                      options: '',
                      onChange: e => {
                        setCoordinates({
                          lat: e.center.lat,
                          lng: e.center.lng
                        });
                      },
                      onChildClick: child => {
                        setChildClicked(child);
                      },
                      children: hotel.recommendasiHotel.map(item => {
                        const handleClick = () => {
                          console.log(`You clicked on ${tooltip}`);
                        };

                        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
                          lng: Number(item.longitude),
                          lat: Number(item.latitude),
                          title: item.name + "\n" + (item.starRating > 0 ? item.starRating + "star" : "") + "\n" + (item.promoPrice > 0 ? 'Rp' + item.promoPrice.toLocaleString().replaceAll(',', '.') : item.price > 0 ? 'Rp' + item.price.toLocaleString().replaceAll(',', '.') : 'Full Booking'),
                          onClick: () => (handlePropertyImages(item), setPopUpDetail(item), setPopUpTitleHotel(item.name), setPopUpRatingHotel(item.starRating), setpopUpImages(item.images), setpopUpIdHotel(item.hotelId), setPopUpPriceHotel("Rp" + item.price.toLocaleString().replaceAll(',', '.')), setPopUpPromoPriceHotel("Rp" + item.promoPrice.toLocaleString().replaceAll(',', '.'))),
                          children: Number(item.longitude) === Number(hotel.detail.longitude) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.Fragment, {
                            children: [item.price > 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("img", {
                              style: markerStyle,
                              src: "https://toppng.com/uploads/preview/simple-location-map-pin-icon-blue-location-icon-11562928973mg6jeytef4.png"
                            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("img", {
                              style: markerStyle,
                              src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Map_pin_icon.svg/564px-Map_pin_icon.svg.png"
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(PlaceStyled, {
                              className: "active",
                              lng: Number(hotel.detail.longitude),
                              lat: Number(hotel.detail.latitude),
                              style: {
                                color: '#FFF',
                                padding: 5,
                                marginTop: -10,
                                backgroundColor: '#E0A800',
                                borderWidth: 0
                              },
                              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
                                className: "label row",
                                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.Fragment, {
                                  children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("span", {
                                    style: {
                                      color: '#FFF',
                                      fontSize: '14px'
                                    },
                                    children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_13__.Icon, {
                                      icon: (_iconify_icons_fa_solid_bed__WEBPACK_IMPORTED_MODULE_9___default()),
                                      className: "ml-4"
                                    }), " "]
                                  }), " "]
                                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.Fragment, {
                                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("span", {
                                    style: {
                                      color: '#FFF',
                                      fontSize: '14px',
                                      marginLeft: '5px',
                                      display: item.price > 0 ? 'block' : 'none'
                                    },
                                    children: [" Rp", item.promoPrice.toLocaleString().replaceAll(',', '.')]
                                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("span", {
                                    style: {
                                      color: '#FFF',
                                      fontSize: '14px',
                                      marginLeft: '5px',
                                      display: item.price < 1 ? 'block' : 'none'
                                    },
                                    children: " Full Booking"
                                  })]
                                })]
                              })
                            })]
                          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.Fragment, {
                            children: [item.price > 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("img", {
                              style: markerStyle,
                              src: "https://toppng.com/uploads/preview/simple-location-map-pin-icon-blue-location-icon-11562928973mg6jeytef4.png"
                            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("img", {
                              style: markerStyle,
                              src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Map_pin_icon.svg/564px-Map_pin_icon.svg.png"
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(PlaceStyled, {
                              className: "active",
                              lng: Number(hotel.detail.longitude),
                              lat: Number(hotel.detail.latitude),
                              style: {
                                color: '#FFF',
                                padding: 5,
                                marginTop: -8,
                                backgroundColor: item.price > 0 ? '#005EAA' : '#C74545',
                                borderWidth: 0
                              },
                              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
                                className: "label row",
                                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.Fragment, {
                                  children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("span", {
                                    style: {
                                      color: '#FFF',
                                      fontSize: '12px'
                                    },
                                    children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_13__.Icon, {
                                      icon: (_iconify_icons_fa_solid_bed__WEBPACK_IMPORTED_MODULE_9___default()),
                                      className: "ml-4"
                                    }), " "]
                                  }), " "]
                                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.Fragment, {
                                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("span", {
                                    style: {
                                      color: '#FFF',
                                      fontSize: '13px',
                                      marginLeft: '5px',
                                      display: item.price > 0 ? 'block' : 'none'
                                    },
                                    children: [" Rp", item.promoPrice.toLocaleString().replaceAll(',', '.')]
                                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("span", {
                                    style: {
                                      color: '#FFF',
                                      fontSize: '13px',
                                      marginLeft: '5px',
                                      display: item.price < 1 ? 'block' : 'none'
                                    },
                                    children: " Full Booking"
                                  })]
                                })]
                              })
                            })]
                          })
                        }, 1);
                      })
                    })]
                  })
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(CardDescriptionStyled, {
              className: "card mt-2",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
                className: "card-body",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("p", {
                  className: "font-weight-bold",
                  children: "Deskripsi"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("p", {
                  style: {
                    textAlign: 'justify'
                  },
                  dangerouslySetInnerHTML: {
                    __html: hotel === null || hotel === void 0 ? void 0 : hotel.detail.description
                  }
                })]
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
            className: "col-md-12 mt-3",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_widgets_WidgetHotel__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
              isDetail: true,
              productId: state.options.productId,
              handleChangeOptions: handleChangeOptions,
              options: state.options
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("section", {
            id: "infoprice",
            className: "w-100 mt-3",
            children: (hotel === null || hotel === void 0 ? void 0 : hotel.options.length) > 0 ? hotel === null || hotel === void 0 ? void 0 : (_hotel$options = hotel.options) === null || _hotel$options === void 0 ? void 0 : _hotel$options.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
              className: "col-12 mb-3",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_CardProductHotel__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                hotelKey: hotel.key,
                options: state.options,
                room: item
              })
            })) : state.isLoadingRoomVia ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
              className: "col-12 text-center my-5",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("img", {
                src: "https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/pulse-spinner.svg"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("h4", {
                children: "Silakan tunggu, kami sedang memeriksa ketersediaan dan harga kamar."
              })]
            }) : ((_state$roomvia = state.roomvia) === null || _state$roomvia === void 0 ? void 0 : (_state$roomvia$option = _state$roomvia.options) === null || _state$roomvia$option === void 0 ? void 0 : _state$roomvia$option.length) > 0 ? (_state$roomvia2 = state.roomvia) === null || _state$roomvia2 === void 0 ? void 0 : (_state$roomvia2$optio = _state$roomvia2.options) === null || _state$roomvia2$optio === void 0 ? void 0 : _state$roomvia2$optio.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
              className: "col-12 mb-3",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_CardProductHotelVia__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                hotelKey: state.roomvia.key,
                dateTo: state.options.dateTo,
                dateFrom: state.options.dateFrom,
                options: state.options,
                imgUtama: mainImg[0],
                jmlRoom: state.options.room,
                room: item,
                detailVia: state.roomvia
              })
            })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
              className: "col-12 text-center my-5",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("img", {
                src: "https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/no-room.svg",
                style: {
                  width: '100%',
                  height: "280px"
                }
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("h5", {
                children: "Kamar tidak tersedia  "
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("section", {
            id: "stayRules",
            className: "col-md-12 mt-3",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_shared_AboutAccommodation__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
              hotel: hotel
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("section", {
            id: "stayRules",
            className: "col-md-12 mt-3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
              className: "card",
              style: {
                borderRadius: '20px',
                boxShadow: '2.5px 5px 15px -5px  rgba(0,0,0,.5)'
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
                className: "card-header text-white",
                style: {
                  borderTopRightRadius: '20px',
                  borderTopLeftRadius: '20px',
                  background: '#0070BA'
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("span", {
                  className: "card-title font-weight-bold",
                  children: "Inspired by properties you looked at"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
                className: "card-body",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_12__.Swiper, {
                  slidesPerView: isTabletOrMobile ? 2.5 : 3.5,
                  style: {
                    padding: '0 0 10px 0'
                  },
                  spaceBetween: 10,
                  children: (_hotel$recommendasiHo = hotel.recommendasiHotel) === null || _hotel$recommendasiHo === void 0 ? void 0 : _hotel$recommendasiHo.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_12__.SwiperSlide, {
                    style: {
                      display: hotel.id === item.hotelId ? "none" : item.price < 1 ? "none" : "block"
                    },
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(next_link__WEBPACK_IMPORTED_MODULE_28__["default"], {
                      href: `/product/hotel/detail?${query_string__WEBPACK_IMPORTED_MODULE_24___default().stringify(_objectSpread(_objectSpread({}, state.options), {}, {
                        productId: item.hotelId
                      }))}`,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("a", {
                        target: "_blank",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(CardStyle, {
                          className: "card",
                          img: item.propertyImages,
                          style: {
                            boxShadow: '8px 8px 10px -8px rgba(0,0,0,.5)'
                          },
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
                            className: "d-flex flex-column justify-content-between",
                            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(CardImage, {
                              image: JSON.parse(item.propertyImages) != null ? JSON.parse(item.propertyImages)[0].entries[2].url : 'https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/no-room.svg',
                              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("h5", {
                                className: "font-weight-bold label-name p-2",
                                children: [item.name, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("p", {
                                  className: "mb-0 label-price__text",
                                  children: ratingHotel(item.starRating)
                                })]
                              })
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
                              className: "text-dark label-price p-2",
                              style: {
                                marginBottom: '-20px'
                              },
                              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("p", {
                                className: "mb-0 label-price__text",
                                children: "Starting From"
                              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("p", {
                                className: "font-weight-bold text-primary label-price__price",
                                children: ["Rp.", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("strong", {
                                  children: item.price > 0 ? item.promoPrice.toLocaleString().replaceAll(',', '.') : item.price.toLocaleString().replaceAll(',', '.')
                                })]
                              })]
                            })]
                          })
                        })
                      })
                    })
                  }, item.name))
                })
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("section", {
            id: "guestReviews",
            className: "col-md-12 mt-3",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_HotelReview__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {})
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(GalleryContainer, {
      open: showOtherImage,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_32__.SheetHeader, {
        style: {
          boxShadow: '0 5px 5px -5px rgba(0,0,0,.5)'
        },
        className: "py-3 px-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("button", {
          onClick: handleShowImages,
          type: "button",
          className: "btn btn-secondary btn-md",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("i", {
            class: "fas fa-times    "
          }), " Tutup"]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
        className: "container-fluid",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
          className: "form-row mt-3",
          children: images === null || images === void 0 ? void 0 : images.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
            className: "col-3 mb-2",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
              style: {
                height: '200px',
                position: 'relative'
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("img", {
                src: item,
                layout: "fill",
                style: {
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover'
                },
                objectFit: "cover"
              })
            })
          }))
        })
      })]
    })]
  });
}

const GalleryContainer = styled_components__WEBPACK_IMPORTED_MODULE_31___default()(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_32__.BottomSheet).withConfig({
  displayName: "DetailHotel__GalleryContainer",
  componentId: "sc-gljh9q-0"
})(["min-height:100%;max-height:100%;border-radius:0;"]);
const CardDescriptionStyled = styled_components__WEBPACK_IMPORTED_MODULE_31___default().div.withConfig({
  displayName: "DetailHotel__CardDescriptionStyled",
  componentId: "sc-gljh9q-1"
})(["scrollbar-color:#e4e4e4;scrollbar-width:thin;flex:1;border:1px solid #0070BA;border-radius:20px;height:10px;overflow-y:auto;"]);
const CardStyle = styled_components__WEBPACK_IMPORTED_MODULE_31___default().div.withConfig({
  displayName: "DetailHotel__CardStyle",
  componentId: "sc-gljh9q-2"
})(["  background-repeat:no-repeat;background-position:center center;*/ min-height:270px;min-height:170px;color:white;position:relative;padding:10px;z-index:1;border-radius:10px;border:none;transition:background-position .2s linear;.label-name,.label-price{@media screen and (max-width:1224px){font-size:12px;}}.label-price{.label-price__text{font-size:15px;@media screen and (max-width:1224px){font-size:12px;}}.label-price__price{font-size:17px;@media screen and (max-width:1224px){font-size:14px;}}@media screen and (max-width:1224px){p:nth-child(1){margin-bottom:-5px !important;}}}"]);
const CardImage = styled_components__WEBPACK_IMPORTED_MODULE_31___default().div.withConfig({
  displayName: "DetailHotel__CardImage",
  componentId: "sc-gljh9q-3"
})(["&:hover{background-image:url(", ");}background:linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(", ");width:100%;height:210px;background-size:cover;background-repeat:no-repeat;background-position:center center;border-radius:5px;@media screen and (max-width:1224px){C height:125px;}"], props => props.image, props => props.image);
const ModalStyled = styled_components__WEBPACK_IMPORTED_MODULE_31___default()(reactstrap__WEBPACK_IMPORTED_MODULE_30__.Modal).withConfig({
  displayName: "DetailHotel__ModalStyled",
  componentId: "sc-gljh9q-4"
})([".modal-content{background:transparent;border:0 !important;}"]);
const PlaceStyled = styled_components__WEBPACK_IMPORTED_MODULE_31___default().div.withConfig({
  displayName: "DetailHotel__PlaceStyled",
  componentId: "sc-gljh9q-5"
})(["width:130px;position:absolute;transform:translate(-50%,-50%);padding:10;border-radius:50px;border:1px solid red;cursor:pointer;&:hover{font-weight:bold;border:3px solid red;z-index:1;}.label,.price{font-size:12px;color:red;text-align:center;}.price{margin-top:5px;}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailHotel);
});

/***/ }),

/***/ 603:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _iconify_icons_fa_solid_star__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6103);
/* harmony import */ var _iconify_icons_fa_solid_star__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_star__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5566);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_1__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const star = [1, 2, 3, 4, 5];

function HotelReview() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "card",
    style: {
      borderRadius: '20px',
      boxShadow: '2.5px 5px 15px -5px  rgba(0,0,0,.5)'
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "card-header text-white",
      style: {
        borderTopRightRadius: '20px',
        borderTopLeftRadius: '20px',
        background: '#0070BA'
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
        className: "card-title font-weight-bold",
        children: "Reviews"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "card-body",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "row mb-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "col-md-3 d-flex align-items-center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h4", {
            className: "mr-3 mb-0",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              className: "badge badge-danger",
              children: "0.0"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
            className: "text-primary",
            children: "Belum di review"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-md-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "d-flex align-items-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              children: "Urutkan"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("select", {
              className: "ml-3 form-control",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("option", {
                children: "Paling membantu"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("option", {
                children: "Terbaru"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("option", {
                children: "Rating tertinggi"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("option", {
                children: "Rating terendah"
              })]
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "col-md-3",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "card mb-3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "card-body",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                className: "d-flex justify-content-between",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                  className: "mb-1",
                  children: "Kebersihan"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                  children: star.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: (_iconify_icons_fa_solid_star__WEBPACK_IMPORTED_MODULE_0___default())
                  }, item))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                className: "d-flex justify-content-between",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                  className: "mb-1",
                  children: "Fasilitas"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
                  children: [" ", star.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: (_iconify_icons_fa_solid_star__WEBPACK_IMPORTED_MODULE_0___default())
                  }, item))]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                className: "d-flex justify-content-between",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                  className: "mb-1",
                  children: "Lokasi"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                  children: star.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: (_iconify_icons_fa_solid_star__WEBPACK_IMPORTED_MODULE_0___default())
                  }, item))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                className: "d-flex justify-content-between",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                  className: "mb-1",
                  children: "Layanan"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                  children: star.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: (_iconify_icons_fa_solid_star__WEBPACK_IMPORTED_MODULE_0___default())
                  }, item))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                className: "d-flex justify-content-between",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                  className: "mb-1",
                  children: "Kepantasan"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                  children: star.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: (_iconify_icons_fa_solid_star__WEBPACK_IMPORTED_MODULE_0___default())
                  }, item))
                })]
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "card mb-3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "card-body",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                className: "d-flex justify-content-between",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                  className: "mb-1",
                  children: "Pasangan"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("b", {
                  className: "text-primary",
                  children: "0"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                className: "d-flex justify-content-between",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                  className: "mb-1",
                  children: "Keluarga"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("b", {
                  className: "text-primary",
                  children: "0"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                className: "d-flex justify-content-between",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                  className: "mb-1",
                  children: "Solo"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("b", {
                  className: "text-primary",
                  children: "0"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                className: "d-flex justify-content-between",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                  className: "mb-1",
                  children: "Grup"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("b", {
                  className: "text-primary",
                  children: "0"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                className: "d-flex justify-content-between",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                  className: "mb-1",
                  children: "Liburan"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("b", {
                  className: "text-primary",
                  children: "0"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                className: "d-flex justify-content-between",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                  className: "mb-1",
                  children: "Bisnis"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("b", {
                  className: "text-primary",
                  children: "0"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                className: "d-flex justify-content-between",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                  className: "mb-1",
                  children: "Medis"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("b", {
                  className: "text-primary",
                  children: "0"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                className: "d-flex justify-content-between",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                  className: "mb-1",
                  children: "Lainnya"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("b", {
                  className: "text-primary",
                  children: "0"
                })]
              })]
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-md-9",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "card",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              className: "card-body",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                className: "kotakInfoReview",
                children: "Ulasan belum tersedia"
              })
            })
          })
        })]
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HotelReview);
});

/***/ }),

/***/ 7710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ CHANGE_REDIRECT_URL)
/* harmony export */ });
const CHANGE_REDIRECT_URL = 'CHANGE_REDIRECT_URL';

/***/ }),

/***/ 8923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ changeRedirectUrl)
/* harmony export */ });
/* harmony import */ var _redirectUrlActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7710);

function changeRedirectUrl(payload) {
  return {
    type: _redirectUrlActionTypes__WEBPACK_IMPORTED_MODULE_0__/* .CHANGE_REDIRECT_URL */ .p,
    payload
  };
}

/***/ })

};
;