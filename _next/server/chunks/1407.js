"use strict";
exports.id = 1407;
exports.ids = [1407];
exports.modules = {

/***/ 114:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9103);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1585);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled_bestCity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5306);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5566);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, _iconify_react__WEBPACK_IMPORTED_MODULE_8__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, _iconify_react__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);













function BestCity(props) {
  const {
    data,
    isLoading
  } = props.data;
  const isTabletOrMobile = (0,react_responsive__WEBPACK_IMPORTED_MODULE_6__.useMediaQuery)({
    query: '(max-width: 1224px)'
  });
  let arr = [1, 2, 3, 4];

  if (!isTabletOrMobile) {
    arr = arr.concat([6, 5]);
  }

  if (isLoading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
      className: "row mb-5",
      children: arr.map((a, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
        style: {
          width: isTabletOrMobile ? '25%' : '100%'
        },
        className: "col-lg-2",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styled_bestCity__WEBPACK_IMPORTED_MODULE_7__/* .CardLoading */ .o, {
          type: "rect",
          showLoadingAnimation: true
        })
      }, index))
    });
  }

  const makeUrl = item => {
    let params = {
      adult: 1,
      from: item.cityid,
      dateFrom: moment__WEBPACK_IMPORTED_MODULE_4___default()(new Date()).format('DD-MM-YYYY').toString(),
      dateTo: moment__WEBPACK_IMPORTED_MODULE_4___default()(new Date()).add(1, 'days').format('DD-MM-YYYY').toString(),
      room: 1,
      keyword: item.name
    };
    return `/product/hotel?${query_string__WEBPACK_IMPORTED_MODULE_2___default().stringify(params)}`;
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_styled_home_page__WEBPACK_IMPORTED_MODULE_5__/* .TitleBackgroundStyled */ .q, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_8__.Icon, {
        icon: "solar:bed-line-duotone",
        className: "mr-2 text-info"
      }), " Temukan hotel yang kamu suka di setiap wilayah"]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
      className: "mt-3",
      slidesPerView: isTabletOrMobile ? 2.5 : 5.5,
      style: {
        padding: '0 0 10px 0'
      },
      spaceBetween: 10,
      children: data === null || data === void 0 ? void 0 : data.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
          href: makeUrl(item),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("a", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styled_bestCity__WEBPACK_IMPORTED_MODULE_7__/* .CardStyle */ .UE, {
              className: "card",
              img: item.image,
              style: {
                boxShadow: '-1px 3px 11px -7px rgba(156,156,156,0.75)',
                border: '1px solid #f8f9fa'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                className: "d-flex flex-column justify-content-between",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styled_bestCity__WEBPACK_IMPORTED_MODULE_7__/* .CardImage */ .xu, {
                  image: item.image,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("h5", {
                    className: "font-weight-bold label-name p-2",
                    style: {
                      display: 'none'
                    },
                    children: item.name
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                  className: "text-dark label-price p-3",
                  style: {
                    marginBottom: '-10px'
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
                    className: "font-weight-bold mb-0 text-primary label-price__text",
                    style: {
                      display: '-webkit-box',
                      WebkitLineClamp: '2',
                      fontSize: '18px',
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      height: isTabletOrMobile ? '37px' : '37px'
                    },
                    children: ["Kota ", item.name]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
                    className: "font-weight-bold mb-2 text-small label-price__text text-info",
                    children: [item.total.toLocaleString().replaceAll(',', '.'), " akomondasi"]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("p", {
                    className: "font-weight-bold mb-0 label-price__text",
                    children: "Mulai dari"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
                    className: "font-weight-bold label-price__price",
                    style: {
                      color: '#de0309'
                    },
                    children: ["Rp ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("strong", {
                      children: item.price.toLocaleString().replaceAll(',', '.')
                    })]
                  })]
                })]
              })
            })
          })
        })
      }, item.name))
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BestCity);
});

/***/ }),

/***/ 2790:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9103);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1585);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled_bestCity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5306);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5566);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5675);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, _iconify_react__WEBPACK_IMPORTED_MODULE_8__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, _iconify_react__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);














function HotelTerdekat(props) {
  const {
    data,
    isLoading
  } = props.data;
  const isTabletOrMobile = (0,react_responsive__WEBPACK_IMPORTED_MODULE_6__.useMediaQuery)({
    query: '(max-width: 1224px)'
  });
  let arr = [1, 2, 3, 4];

  if (!isTabletOrMobile) {
    arr = arr.concat([6, 5]);
  }

  if (isLoading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
      className: "row mb-5",
      children: arr.map((a, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
        style: {
          width: isTabletOrMobile ? '25%' : '100%'
        },
        className: "col-lg-2",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styled_bestCity__WEBPACK_IMPORTED_MODULE_7__/* .CardLoading */ .o, {
          type: "rect",
          showLoadingAnimation: true
        })
      }, index))
    });
  }

  const makeUrl = item => {
    let params = {
      adult: 1,
      child: 0,
      from: '',
      dateFrom: moment__WEBPACK_IMPORTED_MODULE_4___default()(new Date()).add(1, 'days').format('DD-MM-YYYY').toString(),
      dateTo: moment__WEBPACK_IMPORTED_MODULE_4___default()(new Date()).add(2, 'days').format('DD-MM-YYYY').toString(),
      room: 1,
      productId: item.hotelId,
      keyword: item.name
    };
    return `/product/hotel/detail?${query_string__WEBPACK_IMPORTED_MODULE_2___default().stringify(params)}`;
  };

  const renderClass = item => {
    let arr = [];

    for (let index = 0; index < item.starRating; index++) {
      arr[index] = index;
    }

    return arr.map(() => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
      style: {
        width: '15px',
        height: '15px',
        position: 'relative',
        display: 'inline-block'
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(next_image__WEBPACK_IMPORTED_MODULE_9__["default"], {
        src: "https://cdn.masterdiskon.com/masterdiskon/icon/fe/star.png",
        layout: "fill",
        objectFit: "cover"
      })
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_styled_home_page__WEBPACK_IMPORTED_MODULE_5__/* .TitleBackgroundStyled */ .q, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_8__.Icon, {
        icon: "pepicons-print:map",
        className: "mr-2 text-primary"
      }), " Hotel Terdekat dari lokasimu"]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
      className: "mt-3",
      slidesPerView: isTabletOrMobile ? 2.5 : 5.5,
      style: {
        padding: '0 0 10px 0'
      },
      spaceBetween: 10,
      children: data === null || data === void 0 ? void 0 : data.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
          target: "_blank",
          href: makeUrl(item),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("a", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styled_bestCity__WEBPACK_IMPORTED_MODULE_7__/* .CardStyle */ .UE, {
              className: "card",
              img: item.image,
              style: {
                boxShadow: '-1px 3px 11px -7px rgba(156,156,156,0.75)',
                border: '1px solid #f8f9fa'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                className: "d-flex flex-column justify-content-between",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styled_bestCity__WEBPACK_IMPORTED_MODULE_7__/* .CardImage */ .xu, {
                  image: item.image,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("h5", {
                    className: "font-weight-bold label-name p-2",
                    style: {
                      display: 'none'
                    },
                    children: item.name
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  className: "text-dark label-price p-2",
                  style: {
                    marginBottom: '-0px'
                  },
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("p", {
                    className: "font-weight-bold mb-1 text-primary label-price__text",
                    style: {
                      display: '-webkit-box',
                      WebkitLineClamp: '2',
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      height: isTabletOrMobile ? '37px' : '50px'
                    },
                    children: item.name
                  }), renderClass(item), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("h6", {
                    className: "d-flex justify-content-between align-items-center mt-1 mb-1",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("span", {
                      className: "text-grey ",
                      style: {
                        fontSize: '12px',
                        marginRight: '15px'
                      },
                      children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
                        className: " font-weight-bold",
                        style: {
                          fontSize: '15px'
                        },
                        children: item.reviewScore >= 9 ? 'Superb' : item.reviewScore >= 8 ? 'Impressive' : item.reviewScore >= 7 ? 'Convenient' : item.reviewScore >= 6 ? 'Good' : 'Review Score'
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("br", {}), " Reviews"]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
                        className: `badge badge-sm badge-warning text-white mr-1`,
                        style: {
                          padding: '4px',
                          fontSize: '12px'
                        },
                        children: item.propertyType
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("p", {
                      className: "font-weight-bold mb-0 label-price__text text-danger",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("s", {
                        children: ["Rp ", item.price.toLocaleString().replaceAll(',', '.')]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("p", {
                      className: "font-weight-bold label-price__price text-primary",
                      children: ["Rp ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("strong", {
                        children: item.promoPrice.toLocaleString().replaceAll(',', '.')
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                    className: "d-flex justify-content-between align-items-center",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("p", {
                      className: "mb-0 label-price__text",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("strong", {
                        style: {
                          display: '-webkit-box',
                          WebkitLineClamp: '2',
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          height: isTabletOrMobile ? '37px' : '50px'
                        },
                        children: item.address
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
                      className: `badge badge-md badge-info text-white`,
                      style: {
                        height: '30px',
                        fontSize: '15px',
                        padding: '6px'
                      },
                      children: item.reviewScore
                    })]
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
                  className: "text-center bg-primary mt-1",
                  style: {
                    borderRadius: '0px 0px 10px 10px'
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("small", {
                    className: "mb-0 font-weight-bold text-white",
                    children: ["Jarak ", item.distance, " km"]
                  })
                })]
              })
            })
          })
        })
      }, item.name))
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HotelTerdekat);
});

/***/ })

};
;