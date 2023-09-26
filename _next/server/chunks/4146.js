"use strict";
exports.id = 4146;
exports.ids = [4146];
exports.modules = {

/***/ 8809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9103);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1566);
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_placeholder__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function CardHotel(props) {
  var _hotel$detail, _hotel$detail2, _Number;

  const {
    hotel,
    loading,
    options,
    refProp,
    selected
  } = props;
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (selected) {
      var _document, _document$querySelect, _refProp$current;

      (_document = document) === null || _document === void 0 ? void 0 : (_document$querySelect = _document.querySelector('#hotels')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.scrollTo({
        behavior: 'smooth',
        top: refProp === null || refProp === void 0 ? void 0 : (_refProp$current = refProp.current) === null || _refProp$current === void 0 ? void 0 : _refProp$current.offsetTop
      }); // window..querySelector('#hotels').scrollTo(0, refProp?.current?.offsetTop)   
      // refProp?.current?.scroolIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selected]);

  const renderStar = () => {
    let arr = [];

    for (let index = 0; index < hotel.class; index++) {
      arr[index] = index;
    }

    return arr.map(() => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      style: {
        width: '15px',
        height: '15px',
        position: 'relative',
        display: 'inline-block'
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(next_image__WEBPACK_IMPORTED_MODULE_6__["default"], {
        src: "https://cdn.masterdiskon.com/masterdiskon/icon/fe/star.png",
        layout: "fill",
        objectFit: "cover"
      })
    }));
  };

  const RootComponent = loading ? react__WEBPACK_IMPORTED_MODULE_4__.Fragment : next_link__WEBPACK_IMPORTED_MODULE_1__["default"];
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(RootComponent, {
    href: `/product/hotel/detail?${query_string__WEBPACK_IMPORTED_MODULE_2___default().stringify(_objectSpread(_objectSpread({}, options), {}, {
      keyword: hotel.name,
      productId: hotel.id
    }))}`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("a", {
      className: "text-dark d-block mb-3",
      target: "_blank",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(RootStyled, {
        className: "card mb-2",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: "card-body p-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
              className: "col-4 pr-0",
              children: loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((react_placeholder__WEBPACK_IMPORTED_MODULE_3___default()), {
                style: {
                  borderRadius: '10px',
                  height: '180px'
                },
                type: "rect"
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(ImageHotelStyled, {
                img: hotel.image
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
              className: "col-8",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                  className: "col-11",
                  children: loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((react_placeholder__WEBPACK_IMPORTED_MODULE_3___default()), {
                    type: "text",
                    widths: [100, 100, 100]
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h5", {
                      className: "title",
                      children: hotel === null || hotel === void 0 ? void 0 : hotel.name
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                      className: "d-flex align-items-center",
                      style: {
                        fontSize: '12px'
                      },
                      children: renderStar()
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                      className: "d-flex",
                      style: {
                        fontSize: '12px'
                      },
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                        className: "align-items-center d-flex",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                          className: "d-inline-block",
                          style: {
                            width: '15px',
                            height: '15px',
                            position: 'relative'
                          },
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(next_image__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            src: 'https://cdn.masterdiskon.com/masterdiskon/icon/fe/location.png',
                            layout: "fill"
                          })
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                        children: hotel === null || hotel === void 0 ? void 0 : (_hotel$detail = hotel.detail) === null || _hotel$detail === void 0 ? void 0 : _hotel$detail.region
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("small", {
                      className: "address",
                      children: hotel === null || hotel === void 0 ? void 0 : (_hotel$detail2 = hotel.detail) === null || _hotel$detail2 === void 0 ? void 0 : _hotel$detail2.address
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                  className: "col-12 text-right mt-3",
                  children: !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                    children: [(hotel === null || hotel === void 0 ? void 0 : hotel.isPromo) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                        class: "badge px-2 badge-danger font-weight-bold",
                        children: "Promo"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("small", {
                        className: "text-secondary d-block",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("s", {
                          children: ["Rp", Number(hotel.price).toLocaleString().replaceAll(',', '.')]
                        })
                      })]
                    }), hotel !== null && hotel !== void 0 && hotel.promoPrice ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("h6", {
                        className: "text-primary font-weight-bold",
                        style: {
                          marginBottom: '-7px'
                        },
                        children: ["Rp", (_Number = Number(hotel === null || hotel === void 0 ? void 0 : hotel.promoPrice)) === null || _Number === void 0 ? void 0 : _Number.toLocaleString().replaceAll(',', '.')]
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("small", {
                        className: "text-secondary",
                        style: {
                          fontSize: '11px'
                        },
                        children: "per kamar per malam"
                      })]
                    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h6", {
                      className: "text-danger font-weight-bold",
                      children: "Full Booking"
                    })]
                  })
                })]
              })
            })]
          })
        })
      })
    })
  });
}

const ImageHotelStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CardHotel__ImageHotelStyled",
  componentId: "sc-1j4sd6p-0"
})(["background:url(", ");background-size:cover;background-position:center center;background-repeat:no-repeat;width:100%;height:100%;border-radius:15px;"], props => props.img);
const RootStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CardHotel__RootStyled",
  componentId: "sc-1j4sd6p-1"
})(["border-radius:15px;box-shadow:5px 5px 15px -5px rgba(0,0,0,.5);.title{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;font-weight:bold;color:#0070BA;overflow:hidden;text-overflow:ellipsis;}.address{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;font-size:10px;line-height:15px;}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardHotel);

/***/ }),

/***/ 2525:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_icons_fa_solid_heart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5957);
/* harmony import */ var _iconify_icons_fa_solid_heart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_heart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_fa_solid_calendar_times__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4359);
/* harmony import */ var _iconify_icons_fa_solid_calendar_times__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_calendar_times__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_fa_solid_parking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1334);
/* harmony import */ var _iconify_icons_fa_solid_parking__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_parking__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_fa_solid_wifi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8863);
/* harmony import */ var _iconify_icons_fa_solid_wifi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_wifi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_fa_solid_utensils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8494);
/* harmony import */ var _iconify_icons_fa_solid_utensils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_utensils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_fa_solid_check_circle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7129);
/* harmony import */ var _iconify_icons_fa_solid_check_circle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_check_circle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_fa_solid_concierge_bell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4150);
/* harmony import */ var _iconify_icons_fa_solid_concierge_bell__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_concierge_bell__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_fa_solid_swimmer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3726);
/* harmony import */ var _iconify_icons_fa_solid_swimmer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_swimmer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5566);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1664);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9103);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1566);
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_placeholder__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5675);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3082);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_9__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















react_ga__WEBPACK_IMPORTED_MODULE_16___default().initialize('G-56R5954QCE');

function CardHotel(props) {
  var _hotel$facilities, _hotel$facilities2, _hotel$facilities3, _hotel$facilities4;

  const {
    hotel,
    loading,
    options,
    forMaps,
    refProp,
    selected,
    type
  } = props;
  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(() => {
    react_ga__WEBPACK_IMPORTED_MODULE_16___default().pageview(window.location.pathname + window.location.search);

    if (selected) {
      var _document, _document$querySelect, _refProp$current;

      (_document = document) === null || _document === void 0 ? void 0 : (_document$querySelect = _document.querySelector('#hotels')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.scrollTo({
        behavior: 'smooth',
        top: refProp === null || refProp === void 0 ? void 0 : (_refProp$current = refProp.current) === null || _refProp$current === void 0 ? void 0 : _refProp$current.offsetTop
      }); // window..querySelector('#hotels').scrollTo(0, refProp?.current?.offsetTop)   
      // refProp?.current?.scroolIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selected]);

  const renderStar = () => {
    let arr = [];

    for (let index = 0; index < Number(hotel.class); index++) {
      arr[index] = index;
    }

    return arr.map(() => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
      style: {
        width: '17px',
        height: '17px',
        position: 'relative',
        display: 'inline-block'
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(next_image__WEBPACK_IMPORTED_MODULE_15__["default"], {
        src: "https://cdn.masterdiskon.com/masterdiskon/icon/fe/star.png",
        layout: "fill",
        objectFit: "cover"
      })
    }));
  };

  const RootComponent = loading ? react__WEBPACK_IMPORTED_MODULE_13__.Fragment : next_link__WEBPACK_IMPORTED_MODULE_10__["default"];
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(RootComponent, {
    href: `/product/hotel/detail?${query_string__WEBPACK_IMPORTED_MODULE_11___default().stringify(_objectSpread(_objectSpread({}, options), {}, {
      keyword: hotel.name,
      productId: hotel.id
    }))}`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("a", {
      className: "text-dark d-block mb-3",
      target: "_blank",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(RootStyled, {
        className: "card mb-2",
        style: {
          boxShadow: type == 'terdekat' ? '5px 5px 15px -5px rgb(80, 0, 255)' : '5px 5px 15px - 5px rgba(0, 0, 0, .5)',
          background: type == 'terdekat' ? '#FFF4D3' : '#FFF'
        },
        children: [(hotel === null || hotel === void 0 ? void 0 : hotel.isPromo) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("img", {
          style: {
            width: '104px',
            position: 'absolute',
            zIndex: '99',
            left: '4.7px',
            top: '8px'
          },
          src: "/assets/Icon/card-promo-new.png",
          alt: ""
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
          className: "card-body px-2 py-2 py-1-sm",
          style: {
            margin: type == 'terdekat' ? '10px' : '0px'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
              className: "col-md-4 d-flex",
              children: loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((react_placeholder__WEBPACK_IMPORTED_MODULE_12___default()), {
                style: {
                  borderRadius: '10px',
                  height: '180px'
                },
                type: "rect"
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(ImageHotelStyled, {
                img: hotel.image,
                children: !hotel.image && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                  className: "d-flex justify-content-center align-items-center h-100",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("p", {
                    children: "Tidak ada gambar"
                  })
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
              className: "col-md-8",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                  className: "col-md-8",
                  children: loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((react_placeholder__WEBPACK_IMPORTED_MODULE_12___default()), {
                    showLoadingAnimation: true,
                    style: {
                      paddingTop: '10px'
                    },
                    rows: 4,
                    type: "text",
                    widths: [140]
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
                    children: [type == 'terdekat' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
                      children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("h6", {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                          style: {
                            textTransform: 'capitalize'
                          },
                          className: `badge badge-lg badge-warning mr-2`,
                          children: ["Akomodasi terdekat dari Anda, jarak ", hotel === null || hotel === void 0 ? void 0 : hotel.distance_in_km, " km"]
                        })
                      }), " "]
                    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("h5", {
                      className: classnames__WEBPACK_IMPORTED_MODULE_14___default()("titlex text-primary font-weight-bold", {
                        'title': forMaps
                      }),
                      children: [" ", hotel.name]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                      className: "mb-1 d-flex align-items-center",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("h6", {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
                          style: {
                            textTransform: 'capitalize'
                          },
                          className: `badge badge-lg badge-warning mr-2`,
                          children: hotel === null || hotel === void 0 ? void 0 : hotel.type
                        })
                      }), renderStar().length > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
                          className: "bintang ml-1",
                          children: renderStar()
                        })
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                      children: !forMaps && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                        className: "card-text mb-2 d-flex",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                          className: "d-inline-block",
                          style: {
                            width: '20px',
                            height: '20px',
                            position: 'relative'
                          },
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(next_image__WEBPACK_IMPORTED_MODULE_15__["default"], {
                            src: 'https://cdn.masterdiskon.com/masterdiskon/icon/fe/location.png',
                            layout: "fill"
                          })
                        }), type == 'terdekat' ? hotel.detail.city : hotel.detail.region]
                      })
                    }), !forMaps && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_9__.Icon, {
                        icon: (_iconify_icons_fa_solid_parking__WEBPACK_IMPORTED_MODULE_3___default()),
                        className: classnames__WEBPACK_IMPORTED_MODULE_14___default()(`mr-3 `, {
                          'text-success': hotel === null || hotel === void 0 ? void 0 : (_hotel$facilities = hotel.facilities) === null || _hotel$facilities === void 0 ? void 0 : _hotel$facilities.parkingIncluded
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_9__.Icon, {
                        icon: (_iconify_icons_fa_solid_wifi__WEBPACK_IMPORTED_MODULE_4___default()),
                        className: classnames__WEBPACK_IMPORTED_MODULE_14___default()(`mr-3 `, {
                          'text-success': hotel === null || hotel === void 0 ? void 0 : (_hotel$facilities2 = hotel.facilities) === null || _hotel$facilities2 === void 0 ? void 0 : _hotel$facilities2.wifiIncluded
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_9__.Icon, {
                        icon: (_iconify_icons_fa_solid_utensils__WEBPACK_IMPORTED_MODULE_5___default()),
                        className: classnames__WEBPACK_IMPORTED_MODULE_14___default()(`mr-3 `, {
                          'text-success': hotel === null || hotel === void 0 ? void 0 : (_hotel$facilities3 = hotel.facilities) === null || _hotel$facilities3 === void 0 ? void 0 : _hotel$facilities3.breakfastIncluded
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_9__.Icon, {
                        icon: (_iconify_icons_fa_solid_swimmer__WEBPACK_IMPORTED_MODULE_8___default()),
                        className: classnames__WEBPACK_IMPORTED_MODULE_14___default()('', {
                          'text-success': hotel === null || hotel === void 0 ? void 0 : (_hotel$facilities4 = hotel.facilities) === null || _hotel$facilities4 === void 0 ? void 0 : _hotel$facilities4.poolIncluded
                        })
                      })]
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                  className: classnames__WEBPACK_IMPORTED_MODULE_14___default()("text-right", {
                    'col-4': !forMaps,
                    'col-12': forMaps
                  }),
                  children: !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_14___default()("d-flex flex-column h-100 justify-content-end align-items-end"),
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                      style: {
                        margin: '13px 0'
                      },
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("h6", {
                        className: "d-flex align-items-center",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                          className: "text-grey ",
                          style: {
                            fontSize: '12px',
                            marginRight: '5px'
                          },
                          children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
                            className: " font-weight-bold",
                            style: {
                              fontSize: '15px'
                            },
                            children: hotel.reviewScore >= 9 ? 'Superb' : hotel.reviewScore >= 8 ? 'Impressive' : hotel.reviewScore >= 7 ? 'Convenient' : hotel.reviewScore >= 6 ? 'Good' : 'Review Score'
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("br", {}), " Reviews"]
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
                          className: `badge badge-lg badge-warning mr-1`,
                          style: {
                            height: '30px',
                            fontSize: '15px',
                            padding: '6px'
                          },
                          children: hotel.reviewScore
                        })]
                      }), Number(hotel.reviewScore) == 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
                        children: "Unrated"
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("small", {
                      className: "text-secondary",
                      children: "1 night, 1 room"
                    }), (hotel === null || hotel === void 0 ? void 0 : hotel.isPromo) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("h6", {
                        className: "text-danger",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("s", {
                          children: ["Rp", Number(hotel.price).toLocaleString().replaceAll(',', '.')]
                        })
                      })
                    }), Number(hotel.promoPrice) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("h5", {
                        className: "text-primary mb-0 font-weight-bold",
                        children: ["Rp", Number(hotel.promoPrice).toLocaleString().replaceAll(',', '.')]
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("small", {
                        className: "text-secondary",
                        children: "Includes taxes and charges"
                      })]
                    }), Number(hotel.promoPrice) == 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("h5", {
                        className: "text-primary mb-0 font-weight-bold",
                        children: "See availability"
                      })
                    })]
                  })
                })]
              })
            })]
          })
        })]
      })
    })
  });
}

const ImageHotelStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CardHotel__ImageHotelStyled",
  componentId: "sc-1tb5epm-0"
})(["background:url(", ");background-size:cover;background-position:center center;background-repeat:no-repeat;background-color:darkgray;width:100%;flex:1;border-radius:15px;"], props => props.img);
const RootStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CardHotel__RootStyled",
  componentId: "sc-1tb5epm-1"
})(["border-radius:15px;padding:6px;position:relative;box-shadow:5px 5px 15px -5px rgba(0,0,0,.5);.title{width:250px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.titlex:hover:{color:'#D2232A !important';}#titlex:hover:{color:'#D2232A !important';}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardHotel);
});

/***/ })

};
;