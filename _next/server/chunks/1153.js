"use strict";
exports.id = 1153;
exports.ids = [1153];
exports.modules = {

/***/ 2424:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9103);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_shop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6385);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5566);
/* harmony import */ var _widgets_WidgetFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(806);
/* harmony import */ var _shared_MDPagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8069);
/* harmony import */ var _iconify_icons_fa_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7118);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_mobile_header_HeaderBack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8579);
/* harmony import */ var _components_mobile_shared_WidgetFilterFlight__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8019);
/* harmony import */ var _biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9368);
/* harmony import */ var _biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_shared_CardProductGeneral__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3470);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3082);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_mobile_shared_WidgetFilterFlight__WEBPACK_IMPORTED_MODULE_13__, _iconify_react__WEBPACK_IMPORTED_MODULE_6__, _widgets_WidgetFilter__WEBPACK_IMPORTED_MODULE_7__, _components_mobile_header_HeaderBack__WEBPACK_IMPORTED_MODULE_12__]);
([_components_mobile_shared_WidgetFilterFlight__WEBPACK_IMPORTED_MODULE_13__, _iconify_react__WEBPACK_IMPORTED_MODULE_6__, _widgets_WidgetFilter__WEBPACK_IMPORTED_MODULE_7__, _components_mobile_header_HeaderBack__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















react_ga__WEBPACK_IMPORTED_MODULE_16___default().initialize('G-56R5954QCE');
const initialState = {
  options: {},
  filters: {},
  meta: {},
  products: [],
  isLoading: true,
  dataFilters: []
};

function parseQueryOptions(location) {
  const query = query_string__WEBPACK_IMPORTED_MODULE_2___default().parse(location); // category=hotels&limit=9&page=1&tag=&id_city=

  const optionValues = {
    price_from: '',
    price_to: '',
    status: '1'
  };

  if (typeof query.price_from === "string") {
    optionValues.price_from = query.price_from;
  }

  if (typeof query.price_to === "string") {
    optionValues.price_to = query.price_to;
  }

  if (typeof query.status === "string") {
    optionValues.status = query.status;
  }

  return optionValues;
}

function parseQueryFilters(location) {
  const query = query_string__WEBPACK_IMPORTED_MODULE_2___default().parse(location);
  const filterValues = {
    page: 1,
    limit: 12,
    id_city: '',
    tag: '',
    price: '',
    sort: ''
  };
  Object.keys(query).forEach(param => {
    const mr = param.match(/^filter_([-_A-Za-z0-9]+)$/);

    if (!mr) {
      return;
    }

    const filterSlug = mr[1];
    filterValues[filterSlug] = query[param];
  });
  return filterValues;
}

function parseQuery(location) {
  return [parseQueryOptions(location), parseQueryFilters(location)];
}

function buildQuery(options, filters) {
  const params = {};

  if (options.price_from !== "") {
    params.price_from = options.price_from;
  }

  if (options.price_to !== "") {
    params.price_to = options.price_to;
  } // if (options.tag !== "") {
  //     params.tag = options.tag
  // }


  if (options.limit !== "") {
    params.limit = options.limit;
  }

  if (options.page !== "") {
    params.page = options.page;
  }

  if (options.status !== "") {
    params.status = options.status;
  }

  Object.keys(filters).forEach(filterSlug => {
    params[`filter_${filterSlug}`] = filters[filterSlug];
  });
  return query_string__WEBPACK_IMPORTED_MODULE_2___default().stringify(params, {
    encode: false
  });
}

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true
      });

    case 'FETCH_PRODUCTS_SUCCESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        products: action.payload,
        isLoading: false
      });

    case 'SET_FILTER_VALUE':
      let page;

      if (action.filter !== 'page') {
        page = 1;
      } else {
        page = action.value;
      }

      return _objectSpread(_objectSpread({}, state), {}, {
        filters: _objectSpread(_objectSpread({}, state.filters), {}, {
          [action.filter]: action.value,
          page
        })
      });

    case 'SET_DATA_FILTERS':
      return _objectSpread(_objectSpread({}, state), {}, {
        dataFilters: [...state.dataFilters.filter(item => !item.slug.includes(action.value.slug)), action.value]
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

    case 'RESET_FILTER':
      return _objectSpread(_objectSpread({}, state), {}, {
        filters: {
          page: 1,
          limit: 12
        }
      });

    default:
      throw new Error();
  }
}

function init(state) {
  const [options, filters] = parseQuery(window.location.search);
  return _objectSpread(_objectSpread({}, state), {}, {
    options,
    filters
  });
}

function CategoryProductPage() {
  var _state$meta$page, _state$meta8, _state$meta9, _state$meta10, _state$meta11, _state$meta12;

  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState, init);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const {
    access_token
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.token);
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    filter: false,
    sort: false
  });
  const isTabletOrMobile = (0,react_responsive__WEBPACK_IMPORTED_MODULE_10__.useMediaQuery)({
    query: '(max-width:1224px)'
  });

  const handleOpen = field => {
    setOpen(state => _objectSpread(_objectSpread({}, state), {}, {
      [field]: !state[field]
    }));
  };

  const onNext = () => {
    var _state$meta, _state$meta2, _state$meta3, _state$meta4;

    if ((state === null || state === void 0 ? void 0 : (_state$meta = state.meta) === null || _state$meta === void 0 ? void 0 : _state$meta.page) >= 1 && (state === null || state === void 0 ? void 0 : (_state$meta2 = state.meta) === null || _state$meta2 === void 0 ? void 0 : _state$meta2.page) < Math.ceil((state === null || state === void 0 ? void 0 : (_state$meta3 = state.meta) === null || _state$meta3 === void 0 ? void 0 : _state$meta3.total) / (state === null || state === void 0 ? void 0 : (_state$meta4 = state.meta) === null || _state$meta4 === void 0 ? void 0 : _state$meta4.limit))) {
      var _state$meta5;

      handleChangePage((state === null || state === void 0 ? void 0 : (_state$meta5 = state.meta) === null || _state$meta5 === void 0 ? void 0 : _state$meta5.page) + 1);
    }
  };

  const onPrevious = () => {
    var _state$meta6;

    if ((state === null || state === void 0 ? void 0 : (_state$meta6 = state.meta) === null || _state$meta6 === void 0 ? void 0 : _state$meta6.page) > 1) {
      var _state$meta7;

      handleChangePage((state === null || state === void 0 ? void 0 : (_state$meta7 = state.meta) === null || _state$meta7 === void 0 ? void 0 : _state$meta7.page) - 1);
    }
  }; // replace url


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    react_ga__WEBPACK_IMPORTED_MODULE_16___default().pageview(window.location.pathname + window.location.search);

    if (router.isReady) {
      const query = buildQuery(state.options, state.filters);
      const href = query_string__WEBPACK_IMPORTED_MODULE_2___default().stringifyUrl(_objectSpread(_objectSpread({}, query_string__WEBPACK_IMPORTED_MODULE_2___default().parseUrl(router.asPath)), {}, {
        query: query_string__WEBPACK_IMPORTED_MODULE_2___default().parse(query)
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
    }
  }, [state.options, state.filters, router.asPath]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    react_ga__WEBPACK_IMPORTED_MODULE_16___default().pageview(window.location.pathname + window.location.search);
    dispatch({
      type: 'FETCH_PRODUCTS'
    });

    if (router.isReady) {
      _api_shop__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getGeneralProducts */ .Z.getGeneralProducts(access_token, _objectSpread(_objectSpread({}, state.options), {}, {
        category: router.query.slug
      }), state.filters).then(res => {
        if (res.success) {
          dispatch({
            type: 'FETCH_PRODUCTS_SUCCESS',
            payload: res.data
          });
          dispatch({
            type: 'SET_META',
            payload: res.meta || {}
          });
        }
      });
    }
  }, [state.options, state.filters, router.query.slug]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    react_ga__WEBPACK_IMPORTED_MODULE_16___default().pageview(window.location.pathname + window.location.search);

    if (router.isReady) {
      _api_shop__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getTagCategory */ .Z.getTagCategory(access_token, {
        category: router.query.slug
      }).then(res => {
        if (res.success) {
          if (res.data.length > 0) {
            const value = {
              name: 'Tag',
              type: 'check',
              value: [],
              slug: 'tag',
              items: res.data.map(item => ({
                slug: item.slug_product_tag,
                name: item.name_product_tag
              }))
            };
            dispatch({
              type: 'SET_DATA_FILTERS',
              value
            });
          }
        }
      }).then(() => {
        _api_shop__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getFilterCity */ .Z.getFilterCity(access_token).then(res => {
          if (res.success) {
            dispatch({
              type: 'SET_DATA_FILTERS',
              value: {
                name: 'Kisaran Harga',
                type: 'option-button',
                value: '',
                slug: 'price',
                items: [{
                  slug: '0-25000',
                  name: 'Rp0-Rp25.000'
                }, {
                  slug: '25000-50000',
                  name: 'Rp25.000-Rp50.000'
                }, {
                  slug: '50000-100000',
                  name: 'Rp50.000-Rp100.000'
                }, {
                  slug: '100000-0',
                  name: 'Lebih dari Rp100.000'
                }]
              }
            });
            const value = {
              name: 'Lokasi (~10Km)',
              type: 'check',
              value: [],
              slug: 'id_city',
              items: res.data.map(item => ({
                slug: String(item.id_city),
                name: item.city_name
              }))
            };
            dispatch({
              type: 'SET_DATA_FILTERS',
              value
            });
          }
        });
      });
    }
  }, [router.query.slug]);

  const handleChangePage = value => {
    dispatch({
      type: 'SET_FILTER_VALUE',
      filter: 'page',
      value
    });
  };

  const renderContent = () => {
    var _state$products, _state$products2;

    return ((_state$products = state.products) === null || _state$products === void 0 ? void 0 : _state$products.length) > 0 ? (_state$products2 = state.products) === null || _state$products2 === void 0 ? void 0 : _state$products2.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
      className: "col-lg-4 col-6 mb-4",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_shared_CardProductGeneral__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        data: item
      })
    })) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
      className: "d-flex justify-content-center w-100",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
        className: "text-center mt-5 mb-5 opsi-empty",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("img", {
          src: "https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/no-room.svg",
          className: "mt-4",
          height: "280px"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("h5", {
          children: "Hasil pencarian tidak ditemukan"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("p", {
          children: "Silahkan perbaharui pencarian Anda."
        })]
      })
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
    children: [isTabletOrMobile && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_mobile_header_HeaderBack__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      title: "Tours",
      onBack: () => router.back()
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("section", {
      className: "pt-3 pb-5",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
        className: "container",
        children: [!isTabletOrMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
            className: "col-3",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("h4", {
              children: router.query.slug
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
            className: "col-3",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("h5", {
              children: "Hasil pencarian"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
            className: "col-2"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
            className: "col-4",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: "form-group d-flex align-items-center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("label", {
                for: "",
                className: "mr-3",
                children: "Urutkan"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("select", {
                className: "form-control",
                value: state.filters.sort,
                onChange: e => dispatch({
                  type: 'SET_FILTER_VALUE',
                  filter: 'sort',
                  value: e.target.value
                }),
                name: "",
                id: "",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                  value: '',
                  children: "Terbaru"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                  value: 'price-ASC',
                  children: "Harga (Rendah ke tinggi)"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                  value: 'price-DESC',
                  children: "Harga (Tinggi ke rendah)"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                  value: 'name-ASC',
                  children: "Nama (A - Z)"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                  value: 'name-DESC',
                  children: "Nama (Z - A)"
                })]
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: "row",
          children: [!isTabletOrMobile && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
            className: "col-3",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_widgets_WidgetFilter__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              title: "Filter",
              filters: state.dataFilters,
              values: state.filters,
              dispatch: dispatch
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_11___default()("col-9", {
              'col-12': isTabletOrMobile
            }),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
              className: "form-row",
              children: renderContent()
            }), Object.keys(state.meta).length > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
              className: "d-flex justify-content-end w-100",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_shared_MDPagination__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                onPageChange: handleChangePage,
                currentPage: Number(state.meta.page),
                pageSize: Number(state.meta.limit),
                totalCount: Number(state.meta.total),
                className: "pagination-bar"
              })
            })]
          })]
        })]
      })
    }), isTabletOrMobile && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("nav", {
      style: {
        zIndex: '99',
        height: '40px'
      },
      className: "navbar bg-white fixed-bottom shadow pb-0",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: "d-flex justify-content-between align-items-center w-100",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
            onClick: () => handleOpen('sort'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("h6", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_6__.Icon, {
                icon: _iconify_icons_fa_filter__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                className: "text-primary"
              }), "  Sort"]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
            className: "d-flex flex-1 align-items-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("h6", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("i", {
                className: "fas fa-caret-left mr-2",
                onClick: onPrevious
              }), "Page ", (_state$meta$page = state === null || state === void 0 ? void 0 : (_state$meta8 = state.meta) === null || _state$meta8 === void 0 ? void 0 : _state$meta8.page) !== null && _state$meta$page !== void 0 ? _state$meta$page : 1, " - ", !!((state === null || state === void 0 ? void 0 : (_state$meta9 = state.meta) === null || _state$meta9 === void 0 ? void 0 : _state$meta9.total) / (state === null || state === void 0 ? void 0 : (_state$meta10 = state.meta) === null || _state$meta10 === void 0 ? void 0 : _state$meta10.limit)) ? Math.ceil((state === null || state === void 0 ? void 0 : (_state$meta11 = state.meta) === null || _state$meta11 === void 0 ? void 0 : _state$meta11.total) / (state === null || state === void 0 ? void 0 : (_state$meta12 = state.meta) === null || _state$meta12 === void 0 ? void 0 : _state$meta12.limit)) : 1, " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("i", {
                onClick: onNext,
                className: "fas fa-caret-right ml-2"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("h6", {
            onClick: () => handleOpen('filter'),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("i", {
              className: "fas fa-sliders-h text-primary"
            }), " Filter"]
          })]
        })
      })
    }), isTabletOrMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_mobile_shared_WidgetFilterFlight__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        open: open.filter,
        toggle: handleOpen,
        title: "Filter",
        filters: state.dataFilters,
        values: state.filters,
        dispatch: dispatch
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__.BottomSheet, {
        open: open.sort,
        onClose: () => handleOpen('sort'),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__.SheetContent, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("ul", {
            className: "list-group",
            style: {
              border: 'none',
              borderRadius: 0
            },
            children: sorts.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("li", {
              onClick: () => dispatch({
                type: 'SET_FILTER_VALUE',
                filter: 'sort',
                value: item.value
              }),
              className: "list-group-item",
              style: {
                borderBottom: '1px solid #eaeaea',
                cursor: 'pointer',
                borderLeft: 0,
                borderTop: 0,
                borderRight: 0,
                borderRadius: 0
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                className: "form-check p-0",
                style: {
                  cursor: 'pointer'
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("label", {
                  className: "form-check-label w-100 d-flex justify-content-between align-items-center",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                    children: item.name
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("input", {
                      type: "radio",
                      name: "sort",
                      className: "form-check-input position-relative",
                      checked: state.filters.sort === item.value
                    })
                  })]
                })
              })
            }))
          })
        })
      })]
    })]
  });
}

const sorts = [{
  name: 'Terbaru',
  value: ''
}, {
  name: 'Harga (Rendah ke tinggi)',
  value: 'price-ASC'
}, {
  name: 'Harga (Tinggi ke rendah)',
  value: 'price-DESC'
}, {
  name: 'Nama (A - Z)',
  value: 'name-ASC'
}, {
  name: 'Nama (Z - A)',
  value: 'name-DESC'
}];
const ContainerImage = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "CategoryProductPage__ContainerImage",
  componentId: "sc-18o9gge-0"
})(["position:relative;width:100%;height:180px;@media (max-width:1224px){.cp_shadow{font-size:12px;}}.cp_shadow{position:absolute;top:0;height:100%;width:100%;padding:8px 12px;background:-webkit-linear-gradient( top,rgba(0,0,0,0.35),rgba(0,0,0,0) );border-top-right-radius:15px !important;border-top-left-radius:15px !important;}.label-flash{position:absolute;bottom:10px;left:10px;}"]);
const CardDesc = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "CategoryProductPage__CardDesc",
  componentId: "sc-18o9gge-1"
})(["padding:10px;.md-product-name{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;line-height:1.349;height:48px;font-weight:bold;color:#0070BA;max-height:49px;-webkit-box-orient:vertical;-webkit-line-clamp:2;}"]);
const ImgStyled = styled_components__WEBPACK_IMPORTED_MODULE_5___default().img.withConfig({
  displayName: "CategoryProductPage__ImgStyled",
  componentId: "sc-18o9gge-2"
})(["width:100%;height:100%;object-fit:cover;border-top-right-radius:15px !important;border-top-left-radius:15px !important;"]);
const CardStyled = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "CategoryProductPage__CardStyled",
  componentId: "sc-18o9gge-3"
})(["border-radius:15px;box-shadow:5px 5px 5px -5px rgba(0,0,0,.5);.md-label-discount{border-top-left-radius:10px;border-bottom-left-radius:10px;border-top-right-radius:0;border-bottom-right-radius:0;position:relative;margin-bottom:5px;padding:3px 5.7px;font-size:10px;&::after{content:'';position:absolute;background:inherit;width:5px;height:5px;bottom:-5px;right:0;clip-path:polygon(0% 0%,100% 0%,100% 100%);}}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryProductPage);
});

/***/ }),

/***/ 1153:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8938);
/* harmony import */ var _components_page_CategoryProductPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2424);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_0__, _components_page_CategoryProductPage__WEBPACK_IMPORTED_MODULE_1__]);
([_components_Layout__WEBPACK_IMPORTED_MODULE_0__, _components_page_CategoryProductPage__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





function Page() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_page_CategoryProductPage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {});
}

Page.Layout = {
  desktop: _components_Layout__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
  mobile: (react__WEBPACK_IMPORTED_MODULE_2___default().Fragment)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);
});

/***/ })

};
;