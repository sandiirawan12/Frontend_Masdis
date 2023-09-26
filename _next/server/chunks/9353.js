"use strict";
exports.id = 9353;
exports.ids = [9353];
exports.modules = {

/***/ 9353:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header_HeaderBack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8579);
/* harmony import */ var _api_shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6385);
/* harmony import */ var _biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9368);
/* harmony import */ var _biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5566);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5675);
/* harmony import */ var _components_shared_FormPassenger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5896);
/* harmony import */ var _iconify_icons_fa_solid_sign_in_alt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2239);
/* harmony import */ var _iconify_icons_fa_solid_sign_in_alt__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_sign_in_alt__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _iconify_icons_fa_solid_times_circle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(507);
/* harmony import */ var _iconify_icons_fa_solid_times_circle__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_times_circle__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _iconify_icons_fa_solid_question_circle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(564);
/* harmony import */ var _iconify_icons_fa_solid_question_circle__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_question_circle__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2816);
/* harmony import */ var _iconify_icons_fa_solid_clock__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1673);
/* harmony import */ var _iconify_icons_fa_solid_clock__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_clock__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_shared_ButtonChekout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6610);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6981);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9103);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_3__, _header_HeaderBack__WEBPACK_IMPORTED_MODULE_0__]);
([_iconify_react__WEBPACK_IMPORTED_MODULE_3__, _header_HeaderBack__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















 // import flight_passanger from "fake-data/flight-passanger";




const initialState = {
  key: ''
};

function parseQueryOptions(location) {
  const query = query_string__WEBPACK_IMPORTED_MODULE_19___default().parse(location);
  let key = '';

  if (typeof query.key === "string") {
    key = query.key;
  }

  return key;
}

function parseQuery(location) {
  return [parseQueryOptions(location)];
}

function buildQuery(options) {
  let key = '';

  if (options.key !== "") {
    key = options.key;
  }

  return query_string__WEBPACK_IMPORTED_MODULE_19___default().stringify(key, {
    encode: false
  });
}

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_FLIGHT':
      return _objectSpread(_objectSpread({}, state), {}, {
        key: action.payload
      });

    default:
      throw new Error();
  }
}

function init(state) {
  const [key] = parseQuery(window.location.search);
  return _objectSpread(_objectSpread({}, state), {}, {
    key
  });
}

function FlightPassanger() {
  var _flightRepricing$deta, _flightRepricing$deta2, _flightRepricing$deta3, _flightRepricing$deta4, _passenger$adult, _passenger$child, _passenger$infant, _price$user;

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const {
    0: state
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useReducer)(reducer, initialState, init);
  const {
    id
  } = router.query;
  const {
    token,
    user
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state);
  const {
    0: flightRepricing,
    1: setFlightRepricing
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
  const {
    0: paymentMethodSelected,
    1: setPaymentMethodSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);
  const {
    0: price,
    1: setPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
  const {
    access_token
  } = token;
  const {
    0: countries,
    1: setCountries
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);
  const {
    0: passenger,
    1: setPassenger
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
    "adult": [],
    "child": [],
    "infant": []
  });
  const {
    0: contact,
    1: setContact
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(user);
  const {
    0: contactAsPassenger,
    1: setContactAsPassenger
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const {
    0: coupon,
    1: setCoupon
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
  const {
    0: point,
    1: setPoint
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const {
    0: isOpenCoupon,
    1: setIsOpenCoupon
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const {
    0: textCoupon,
    1: setTextCoupon
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('');
  const {
    0: ssr,
    1: setSsr
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
  const {
    0: drawerOpen,
    1: setDrawerOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({});

  const handleDrawerOpen = field => {
    setDrawerOpen(state => _objectSpread(_objectSpread({}, state), {}, {
      [field]: !state[field]
    }));
  };

  const isOpenSelected = field => {
    return drawerOpen[field];
  }; // replace url


  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (router.isReady) {
      const query = buildQuery(state.key);
      const href = query_string__WEBPACK_IMPORTED_MODULE_19___default().stringifyUrl(_objectSpread(_objectSpread({}, query_string__WEBPACK_IMPORTED_MODULE_19___default().parseUrl(router.asPath)), {}, {
        query: query_string__WEBPACK_IMPORTED_MODULE_19___default().parse(query)
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
  }, [state.key, router.asPath]);

  const handleChangePaymentMethod = id => {
    setPaymentMethodSelected(id);
  };

  const handleSetAsPassenger = () => {
    if (!contactAsPassenger) {
      var _contact$title;

      const newPassenger = [...passenger['adult']];
      newPassenger[0] = _objectSpread(_objectSpread({}, newPassenger[0]), {}, {
        firstName: contact.first,
        lastName: contact.last,
        title: (_contact$title = contact.title) !== null && _contact$title !== void 0 ? _contact$title : 'Mr',
        dob: contact.birthdate
      });
      setPassenger(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        ['adult']: newPassenger
      }));
    } else {
      var _newPassenger$;

      const newPassenger = [...passenger['adult']];
      newPassenger[0] = {
        id: (_newPassenger$ = newPassenger[0]) === null || _newPassenger$ === void 0 ? void 0 : _newPassenger$.id,
        firstName: '',
        lastName: '',
        title: '',
        dob: ''
      };
      setPassenger(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        ['adult']: newPassenger
      }));
    }

    setContactAsPassenger(!contactAsPassenger);
  };

  const handleSend = () => {
    const req = {
      "product": "flight",
      "key": flightRepricing.key,
      price: _objectSpread(_objectSpread({}, price), {}, {
        discount: price.discount.grandTotal
      }),
      coupon,
      "paymentMethod": paymentMethodSelected,
      contact: _objectSpread(_objectSpread({}, contact), {}, {
        firstName: contact.first,
        lastName: contact.last
      }),
      "guest": passenger.adult.map(item => {
        var _item$num, _moment$format, _moment$format2;

        return _objectSpread(_objectSpread({}, item), {}, {
          type: 'adult',
          dob: item.dob === '-' ? '' : moment__WEBPACK_IMPORTED_MODULE_16___default()(item.dob).format('DD-MM-YYYY'),
          "passport": {
            "nat": item.nat,
            "num": (_item$num = item.num) !== null && _item$num !== void 0 ? _item$num : '',
            "doi": (_moment$format = moment__WEBPACK_IMPORTED_MODULE_16___default()(item.doi).format('DD-MM-YYYY')) !== null && _moment$format !== void 0 ? _moment$format : '',
            "doe": (_moment$format2 = moment__WEBPACK_IMPORTED_MODULE_16___default()(item.doe).format('DD-MM-YYYY')) !== null && _moment$format2 !== void 0 ? _moment$format2 : ''
          }
        });
      }).concat(passenger.child.map(item => {
        var _item$num2, _moment$format3, _moment$format4;

        return _objectSpread(_objectSpread({}, item), {}, {
          type: 'child',
          dob: moment__WEBPACK_IMPORTED_MODULE_16___default()(item.dob).format('DD-MM-YYYY'),
          "passport": {
            "nat": item.nat,
            "num": (_item$num2 = item.num) !== null && _item$num2 !== void 0 ? _item$num2 : '',
            "doi": (_moment$format3 = moment__WEBPACK_IMPORTED_MODULE_16___default()(item.doi).format('DD-MM-YYYY')) !== null && _moment$format3 !== void 0 ? _moment$format3 : '',
            "doe": (_moment$format4 = moment__WEBPACK_IMPORTED_MODULE_16___default()(item.doe).format('DD-MM-YYYY')) !== null && _moment$format4 !== void 0 ? _moment$format4 : ''
          }
        });
      })).concat(passenger.infant.map(item => {
        var _item$num3, _moment$format5, _moment$format6;

        return _objectSpread(_objectSpread({}, item), {}, {
          type: 'infant',
          dob: moment__WEBPACK_IMPORTED_MODULE_16___default()(item.dob).format('DD-MM-YYYY'),
          "passport": {
            "nat": item.nat,
            "num": (_item$num3 = item.num) !== null && _item$num3 !== void 0 ? _item$num3 : '',
            "doi": (_moment$format5 = moment__WEBPACK_IMPORTED_MODULE_16___default()(item.doi).format('DD-MM-YYYY')) !== null && _moment$format5 !== void 0 ? _moment$format5 : '',
            "doe": (_moment$format6 = moment__WEBPACK_IMPORTED_MODULE_16___default()(item.doe).format('DD-MM-YYYY')) !== null && _moment$format6 !== void 0 ? _moment$format6 : ''
          }
        });
      }))
    };
    _api_shop__WEBPACK_IMPORTED_MODULE_1__/* ["default"].submitCheckout */ .Z.submitCheckout(access_token, req).then(res => {
      if (res.success) {
        router.push(`/user/purchase/detail/${res.data.id_order}`);
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_18__.toast.error(res.message, {
          position: 'top-right',
          toastId: 'checkout'
        });
      }
    });
  };

  const handleSubmitCoupon = value => {
    const arr = new Set([...coupon]);
    arr.add(value);
    setCoupon([...arr]);
    handleOpenCoupon();
  };

  const handleRemoveCoupon = value => {
    if (value.type === 'umum') {
      setCoupon(coupon.filter(item => item !== value.code));
    } else {
      setCoupon(coupon.filter(item => item !== value.id.toString()));
    }
  };

  const handleOpenCoupon = () => {
    setIsOpenCoupon(prevState => !prevState);
  };

  const getDataArray = count => {
    let arr = [];
    let id = 1;

    for (let index = 0; index < count; index++) {
      arr[index] = {
        id: id++,
        title: 'Mr',
        nat: 'ID'
      };
    }

    return arr;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    setLoading(true);
    _api_shop__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getFlightRepricing */ .Z.getFlightRepricing(access_token, {
      product: 'flight',
      productOption: [id, state.key]
    }).then(res => {
      if (res.success) {
        const {
          pax
        } = res.data.query;
        const ps = {
          adult: getDataArray(pax.adult),
          child: getDataArray(pax.child),
          infant: getDataArray(pax.infant)
        };
        setFlightRepricing(res.data);
        setPassenger(ps);
        setLoading(false);
      } else {
        sweetalert2__WEBPACK_IMPORTED_MODULE_20___default().fire({
          icon: 'info',
          title: 'Penerbangan sudah tidak tersedia',
          allowOutsideClick: false
        }).then(result => {
          if (result.isConfirmed) {
            router.back();
          }
        });
      }
    }).catch(() => {
      sweetalert2__WEBPACK_IMPORTED_MODULE_20___default().fire({
        icon: 'info',
        title: 'Penerbangan sudah tidak tersedia',
        allowOutsideClick: false
      }).then(result => {
        if (result.isConfirmed) {
          router.back();
        }
      });
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    const req = {
      "product": "flight",
      "key": flightRepricing === null || flightRepricing === void 0 ? void 0 : flightRepricing.key,
      "insurance": false,
      point,
      coupon,
      paymentMethod: paymentMethodSelected,
      "platform": "web",
      ssr
    };

    if (flightRepricing) {
      setLoading(true);
      _api_shop__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getCountPrice */ .Z.getCountPrice(access_token, req).then(res => {
        if (res.success) {
          setPrice(res.data);
          setLoading(false);
        } else {
          if (res.message.includes('coupon')) {
            setCoupon([...coupon].filter(item => item !== res.note));
            react_toastify__WEBPACK_IMPORTED_MODULE_18__.toast.error(res.message, {
              position: 'top-right',
              toastId: 'coupon'
            });
          }
        }
      });
    }
  }, [flightRepricing, paymentMethodSelected, point, coupon, ssr]);

  const handleAddFromQuickpick = (name, target, {
    title,
    firstname,
    lastname,
    identificationNumber,
    dob
  }) => {
    const detailPassenger = _objectSpread(_objectSpread({}, passenger[name].find(item => item.id === target.id)), {}, {
      type: name
    });

    const indexOf = passenger[name].findIndex(item => item.id === target.id);
    const newPassenger = [...passenger[name]];
    newPassenger[indexOf] = _objectSpread(_objectSpread({}, detailPassenger), {}, {
      title,
      firstName: firstname,
      lastName: lastname,
      identificationNumber: identificationNumber,
      dob: dob
    });
    setPassenger(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      [name]: newPassenger
    }));
  };

  const handleInputChange = (name, target, data) => {
    const detailPassenger = _objectSpread(_objectSpread({}, passenger[name].find(item => item.id === target.id)), {}, {
      type: name
    });

    if (!detailPassenger.ssr) {
      detailPassenger.ssr = [];
    }

    if (data.field === 'ssr') {
      let ssrObj = JSON.parse(data.value);
      ssrObj.id = target.id;

      if (Object.keys(ssrObj).length > 3) {
        var _detailPassenger$ssr;

        // set ssr to passanger
        detailPassenger['ssr'] = [...((_detailPassenger$ssr = detailPassenger.ssr) === null || _detailPassenger$ssr === void 0 ? void 0 : _detailPassenger$ssr.filter(item => item.key !== JSON.parse(data.value).key || item.ssrType !== JSON.parse(data.value).ssrType)), ssrObj]; // set ssr to count

        setSsr([...new Set([...ssr.filter(item => item.id !== target.id || item.key !== JSON.parse(data.value).key || item.ssrType !== JSON.parse(data.value).ssrType), ...detailPassenger.ssr])]);
      } else {
        // remove ssr to passanger
        let indexOf = detailPassenger.ssr.map(item => `${item.key},${item.ssrType}`).indexOf(`${ssrObj.key},${ssrObj.ssrType}`);
        detailPassenger.ssr.splice(indexOf, 1); // remove ssr to count

        let indexOfSsr = ssr.map(item => `${item.id},${item.key},${item.ssrType}`).indexOf(`${ssrObj.id},${ssrObj.key},${ssrObj.ssrType}`);
        ssr.splice(indexOfSsr, 1);
        setSsr([...new Set([...ssr, ...detailPassenger.ssr.reduce((a, c) => a.concat(c), [])])]);
      }
    } else {
      detailPassenger[data.field] = data.value;
    }

    const indexOf = passenger[name].findIndex(item => item.id === target.id);
    const newPassenger = [...passenger[name]];
    newPassenger[indexOf] = detailPassenger;
    setPassenger(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      [name]: newPassenger
    }));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    let canceled = true;

    if (canceled) {
      _api_user__WEBPACK_IMPORTED_MODULE_13__/* ["default"].getCountries */ .Z.getCountries().then(res => {
        if (res.success) {
          setCountries(res.data);
        }
      });
    }

    return () => {
      canceled = false;
    };
  }, []);

  const handleChangeContact = e => {
    const {
      name,
      value
    } = e.target;
    setContact(_objectSpread(_objectSpread({}, contact), {}, {
      [name]: value
    }));
  }; // loading && !flightRepricing && !price


  if (loading && !flightRepricing && !price) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
      style: {
        height: '50vh',
        marginBottom: '5rem'
      },
      className: "d-flex flex-column align-items-center justify-content-center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("img", {
        src: "https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/pulse-spinner.svg"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("h4", {
        children: "Sedang menyiapkan data..."
      })]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_header_HeaderBack__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
      title: "Booking",
      onBack: router.back
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
      className: "container py-3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
          className: "col-12",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
            className: "card",
            style: {
              borderRadius: '13px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
              className: "card-body p-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                className: "row align-items-center justify-content-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                  className: "col-5 text-center",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                    style: {
                      fontSize: '12px'
                    },
                    children: "From"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("h5", {
                    className: "mb-0",
                    children: flightRepricing === null || flightRepricing === void 0 ? void 0 : flightRepricing.detail.onwardFlight.flight[0].departure.code
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                    style: {
                      fontSize: '12px'
                    },
                    children: flightRepricing === null || flightRepricing === void 0 ? void 0 : flightRepricing.detail.onwardFlight.flight[0].departure.name
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                  className: "col-1 d-flex justify-content-center align-items-center",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                      style: {
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        borderRadius: '50%',
                        background: '#eaeaea',
                        textAlign: 'center',
                        color: '#0070BA'
                      },
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("i", {
                        className: "fas fa-plane"
                      }), (flightRepricing === null || flightRepricing === void 0 ? void 0 : flightRepricing.detail.returnFlight) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("i", {
                        className: "fas fa-plane",
                        style: {
                          transform: 'rotate(180deg)'
                        }
                      })]
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                  className: "col-5 text-center",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                    style: {
                      fontSize: '12px'
                    },
                    children: "To"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("h5", {
                    className: "mb-0",
                    children: flightRepricing === null || flightRepricing === void 0 ? void 0 : (_flightRepricing$deta = flightRepricing.detail) === null || _flightRepricing$deta === void 0 ? void 0 : _flightRepricing$deta.onwardFlight.flight[0].arrival.code
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                    style: {
                      fontSize: '12px'
                    },
                    children: flightRepricing === null || flightRepricing === void 0 ? void 0 : (_flightRepricing$deta2 = flightRepricing.detail) === null || _flightRepricing$deta2 === void 0 ? void 0 : _flightRepricing$deta2.onwardFlight.flight[0].arrival.name
                  })]
                })]
              }), flightRepricing === null || flightRepricing === void 0 ? void 0 : flightRepricing.detail.onwardFlight.flight.map(fl => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                className: "row align-items-end mt-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                  className: "col-8",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                    style: {
                      width: '60px',
                      height: '25px',
                      position: 'relative',
                      marginBottom: '-10px'
                    },
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(next_image__WEBPACK_IMPORTED_MODULE_8__["default"], {
                      src: fl.image,
                      layout: "fill",
                      objectFit: "contain"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("small", {
                    style: {
                      fontSize: '10px'
                    },
                    children: [fl.departure.code, "-", fl.arrival.code, " | ", fl.departure.date, " | ", fl.departure.time]
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                  className: "col-4 text-right",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                    style: {
                      fontSize: '10px'
                    },
                    className: "text-primary font-weight-bold",
                    children: "Departure"
                  })
                }), fl.layover && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                  className: "col-12",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                    classname: "d-flex justify-content-between px-3 mb-0",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("small", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                        icon: (_iconify_icons_fa_solid_clock__WEBPACK_IMPORTED_MODULE_14___default()),
                        className: "mr-1"
                      }), " Lama menunggu transit ", fl.layover]
                    })
                  })
                })]
              })), flightRepricing === null || flightRepricing === void 0 ? void 0 : (_flightRepricing$deta3 = flightRepricing.detail.returnFlight) === null || _flightRepricing$deta3 === void 0 ? void 0 : (_flightRepricing$deta4 = _flightRepricing$deta3.flight) === null || _flightRepricing$deta4 === void 0 ? void 0 : _flightRepricing$deta4.map(fl => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                className: "row align-items-end mt-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                  className: "col-8",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                    style: {
                      width: '60px',
                      height: '25px',
                      position: 'relative',
                      marginBottom: '-10px'
                    },
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(next_image__WEBPACK_IMPORTED_MODULE_8__["default"], {
                      src: fl.image,
                      layout: "fill",
                      objectFit: "contain"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("small", {
                    style: {
                      fontSize: '10px'
                    },
                    children: [fl.departure.code, "-", fl.arrival.code, " | ", fl.departure.date, " | ", fl.departure.time]
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                  className: "col-4 text-right",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                    style: {
                      fontSize: '10px'
                    },
                    className: "text-primary font-weight-bold",
                    children: "Return"
                  })
                }), fl.layover && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                  className: "col-12",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                    classname: "d-flex justify-content-between px-3 mb-0",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("small", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                        icon: (_iconify_icons_fa_solid_clock__WEBPACK_IMPORTED_MODULE_14___default()),
                        className: "mr-1"
                      }), " Lama menunggu transit ", fl.layover]
                    })
                  })
                })]
              }))]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
          className: "col-12 mt-1",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
            className: "card",
            style: {
              borderRadius: '10px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
              className: "card-body p-2",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                className: "text-primary font-weight-bold",
                children: "Detail Pemesanan"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                className: "d-flex justify-content-between align-items-center py-2 px-3",
                style: {
                  background: '#eaeaea',
                  borderRadius: '10px'
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                    className: "d-block mb-0",
                    style: {
                      fontSize: '10px'
                    },
                    children: "Contact"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("small", {
                    style: {
                      marginTop: '-7px',
                      display: 'block'
                    },
                    children: [contact.first, " ", contact.last]
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("i", {
                    onClick: () => handleDrawerOpen('contact'),
                    style: {
                      fontSize: '12px'
                    },
                    className: "fas fa-edit mr-3 text-primary"
                  })
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("hr", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                className: "text-primary font-weight-bold",
                children: "Detail Penumpang"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                className: "d-flex justify-content-between",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                  className: "d-block",
                  children: "Sama dengan pemesan"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                  className: "custom-control custom-switch",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("input", {
                    type: "checkbox",
                    onClick: handleSetAsPassenger,
                    checked: contactAsPassenger,
                    className: "custom-control-input",
                    id: "directOnly"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("label", {
                    style: {
                      fontSize: '12px'
                    },
                    className: "custom-control-label",
                    htmlFor: "directOnly"
                  })]
                })]
              }), (_passenger$adult = passenger.adult) === null || _passenger$adult === void 0 ? void 0 : _passenger$adult.map((item, index) => {
                var _item$firstName, _item$lastName;

                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                    className: "d-flex mb-1 justify-content-between align-items-center py-2 px-3",
                    style: {
                      background: '#eaeaea',
                      borderRadius: '10px'
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("small", {
                        className: "d-block mb-0",
                        style: {
                          fontSize: '10px'
                        },
                        children: ["Penumpang ", item.id, " : Dewasa"]
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                        style: {
                          marginTop: '-7px',
                          display: 'block'
                        },
                        children: `${(_item$firstName = item.firstName) !== null && _item$firstName !== void 0 ? _item$firstName : ''} ${(_item$lastName = item.lastName) !== null && _item$lastName !== void 0 ? _item$lastName : ''}`
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("i", {
                        onClick: () => handleDrawerOpen(`drawer-adult-${index}`),
                        style: {
                          fontSize: '12px'
                        },
                        className: "fas fa-edit mr-3 text-primary"
                      })
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(DrawerPassanger, {
                    onClose: () => handleDrawerOpen(`drawer-adult-${index}`),
                    open: isOpenSelected(`drawer-adult-${index}`),
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__.SheetContent, {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_components_shared_FormPassenger__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        onClose: () => handleDrawerOpen(`drawer-adult-${index}`),
                        style: {
                          boxShadow: 'none'
                        },
                        handleAddFromQuickpick: handleAddFromQuickpick,
                        countries: countries,
                        handleChange: handleInputChange,
                        name: "adult",
                        flightRepricing: flightRepricing,
                        item: item
                      }, index), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                        className: "col-4 offset-8",
                        style: {
                          marginTop: '-28px',
                          marginBottom: '10px'
                        },
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("button", {
                          type: "button",
                          onClick: () => handleDrawerOpen(`drawer-adult-${index}`),
                          class: "btn btn-sm btn-primary btn-block",
                          children: "Simpan"
                        })
                      })]
                    })
                  })]
                });
              }), (_passenger$child = passenger.child) === null || _passenger$child === void 0 ? void 0 : _passenger$child.map((item, index) => {
                var _item$firstName2, _item$lastName2;

                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                    className: "d-flex mb-1 justify-content-between align-items-center py-2 px-3",
                    style: {
                      background: '#eaeaea',
                      borderRadius: '10px'
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("small", {
                        className: "d-block mb-0",
                        style: {
                          fontSize: '10px'
                        },
                        children: ["Penumpang ", item.id, " : Anak-anak"]
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                        style: {
                          marginTop: '-7px',
                          display: 'block'
                        },
                        children: `${(_item$firstName2 = item.firstName) !== null && _item$firstName2 !== void 0 ? _item$firstName2 : ''} ${(_item$lastName2 = item.lastName) !== null && _item$lastName2 !== void 0 ? _item$lastName2 : ''}`
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("i", {
                        onClick: () => handleDrawerOpen(`drawer-child-${index}`),
                        style: {
                          fontSize: '12px'
                        },
                        className: "fas fa-edit mr-3 text-primary"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("i", {
                        style: {
                          fontSize: '12px'
                        },
                        className: "fas fa-search text-primary"
                      })]
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(DrawerPassanger, {
                    onClose: () => handleDrawerOpen(`drawer-child-${index}`),
                    open: isOpenSelected(`drawer-child-${index}`),
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__.SheetContent, {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_components_shared_FormPassenger__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        onClose: () => handleDrawerOpen(`drawer-child-${index}`),
                        style: {
                          boxShadow: 'none'
                        },
                        handleAddFromQuickpick: handleAddFromQuickpick,
                        countries: countries,
                        handleChange: handleInputChange,
                        name: "child",
                        flightRepricing: flightRepricing,
                        item: item
                      }, index)
                    })
                  })]
                });
              }), (_passenger$infant = passenger.infant) === null || _passenger$infant === void 0 ? void 0 : _passenger$infant.map((item, index) => {
                var _item$firstName3, _item$lastName3;

                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                    className: "d-flex mb-1 justify-content-between align-items-center py-2 px-3",
                    style: {
                      background: '#eaeaea',
                      borderRadius: '10px'
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("small", {
                        className: "d-block mb-0",
                        style: {
                          fontSize: '10px'
                        },
                        children: ["Penumpang ", item.id, " : Bayi"]
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                        style: {
                          marginTop: '-7px',
                          display: 'block'
                        },
                        children: `${(_item$firstName3 = item.firstName) !== null && _item$firstName3 !== void 0 ? _item$firstName3 : ''} ${(_item$lastName3 = item.lastName) !== null && _item$lastName3 !== void 0 ? _item$lastName3 : ''}`
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("i", {
                        onClick: () => handleDrawerOpen(`drawer-infant-${index}`),
                        style: {
                          fontSize: '12px'
                        },
                        className: "fas fa-edit mr-3 text-primary"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("i", {
                        style: {
                          fontSize: '12px'
                        },
                        className: "fas fa-search text-primary"
                      })]
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(DrawerPassanger, {
                    onClose: () => handleDrawerOpen(`drawer-infant-${index}`),
                    open: isOpenSelected(`drawer-infant-${index}`),
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__.SheetContent, {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_components_shared_FormPassenger__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        onClose: () => handleDrawerOpen(`drawer-infant-${index}`),
                        style: {
                          boxShadow: 'none'
                        },
                        handleAddFromQuickpick: handleAddFromQuickpick,
                        countries: countries,
                        handleChange: handleInputChange,
                        name: "infant",
                        flightRepricing: flightRepricing,
                        item: item
                      }, index)
                    })
                  })]
                });
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                className: "d-flex justify-content-between align-items-center my-2",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("p", {
                  className: "mb-0 font-weight-bold",
                  children: "Pilih Kupon"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("button", {
                  type: "button",
                  class: "btn btn-primary btn-sm",
                  onClick: handleOpenCoupon,
                  children: "Gunakan"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                className: "d-flex justify-content-between align-items-center",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                  className: "d-block text-secondary",
                  children: "Jumlah Pembayaran"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("small", {
                  className: "d-block",
                  children: ["Rp", price === null || price === void 0 ? void 0 : price.subtotal.toLocaleString()]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                className: "d-flex justify-content-between align-items-center",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                  className: "d-block text-secondary",
                  children: "Pajak dan Lainnya"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("small", {
                  className: "d-block",
                  children: ["Rp", ((price === null || price === void 0 ? void 0 : price.tax) + (price === null || price === void 0 ? void 0 : price.iwjr) + (price === null || price === void 0 ? void 0 : price.fee2)).toLocaleString()]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                className: "d-flex justify-content-between align-items-center",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                  className: "d-block text-secondary",
                  children: "Biaya Penanganan"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("small", {
                  className: "d-block",
                  children: ["Rp", price === null || price === void 0 ? void 0 : price.fee.toLocaleString()]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                className: "d-flex justify-content-between align-items-center",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                  className: "d-block text-secondary",
                  children: "Poin"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                  className: "total_poin",
                  children: price === null || price === void 0 ? void 0 : (_price$user = price.user) === null || _price$user === void 0 ? void 0 : _price$user.point.toLocaleString()
                })]
              }), price === null || price === void 0 ? void 0 : price.coupon.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                className: "d-flex justify-content-between",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                  className: "pb-2 text-danger",
                  children: item.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("small", {
                  className: "text-danger",
                  children: ["- Rp", item.amount.toLocaleString(), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                    style: {
                      cursor: 'pointer'
                    },
                    icon: (_iconify_icons_fa_solid_times_circle__WEBPACK_IMPORTED_MODULE_11___default()),
                    onClick: () => handleRemoveCoupon(item)
                  })]
                })]
              })), (price === null || price === void 0 ? void 0 : price.point) > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                className: "d-flex justify-content-end align-items-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("small", {
                  className: "total_poin text-danger",
                  children: ["- ", price === null || price === void 0 ? void 0 : price.point.toLocaleString()]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                className: "d-flex justify-content-between align-items-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("p", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("input", {
                    onClick: () => setPoint(!point),
                    checked: point,
                    type: "checkbox",
                    id: "ambilpoint"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                    className: "font-weight-bold font-italic text-success",
                    htmlFor: "ambilpoint",
                    children: "Gunakan poin untuk pembayaran"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                className: "d-flex justify-content-between align-items-center",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
                  className: "d-block text-secondary",
                  children: "Total"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("small", {
                  className: "d-block",
                  children: ["Rp", price === null || price === void 0 ? void 0 : price.total.toLocaleString()]
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("button", {
                onClick: handleSend,
                type: "button",
                style: {
                  borderRadius: '10px'
                },
                className: "btn font-weight-bold btn-warning btn-sm mt-2 btn-block",
                children: "Book Now"
              })]
            })
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__.BottomSheet, {
      open: isOpenSelected('contact'),
      onClose: () => handleDrawerOpen('contact'),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__.SheetContent, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
          className: "card mb-3",
          style: {
            borderRadius: '20px',
            boxShadow: 'none',
            border: 0
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
            className: "card-header d-flex justify-content-between text-white",
            style: {
              borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px',
              background: '#0070BA'
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("h5", {
              className: "mb-0 card-title font-weight-bold",
              children: "Detail Pemesan"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("h5", {
              onClick: () => handleDrawerOpen('contact'),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("i", {
                className: "fas fa-times"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
            className: "card-body mt-0",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
              children: "untuk identitas voucher"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
              className: "form-row",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                className: "col-2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("label", {
                    htmlFor: "exampleInputEmail1",
                    children: "Title"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("select", {
                    onChange: handleChangeContact,
                    name: "title",
                    value: contact.title,
                    className: "form-control title contact_title",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("option", {
                      value: "Mr",
                      selected: "selected",
                      children: "Mr."
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("option", {
                      value: "Mrs",
                      children: "Mrs."
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("option", {
                      value: "Ms",
                      children: "Ms."
                    })]
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                className: "col-5",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("label", {
                    htmlFor: "exampleInputEmail1",
                    children: "Nama Depan"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("input", {
                    onChange: handleChangeContact,
                    name: "first",
                    value: contact.first,
                    type: "text",
                    className: "textonly form-control",
                    required: true
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                className: "col-5",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("label", {
                    htmlFor: "exampleInputEmail1",
                    children: "Nama Belakang"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("input", {
                    onChange: handleChangeContact,
                    name: "last",
                    type: "text",
                    value: contact.last,
                    className: "textonly form-control",
                    required: true
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                className: "col-md-5",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("label", {
                    htmlFor: "exampleInputEmail1",
                    children: "Telepon"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                    className: "input-group",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("select", {
                      onChange: handleChangeContact,
                      value: contact.phoneCode,
                      name: "phoneCode",
                      className: "form-control",
                      style: {
                        width: '31%'
                      },
                      children: countries.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("option", {
                        value: item.phone,
                        children: item.phone
                      }))
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("input", {
                      required: true,
                      onChange: handleChangeContact,
                      name: "phone",
                      value: contact.phone,
                      type: "text",
                      className: "textonly form-control",
                      style: {
                        width: '69%'
                      }
                    })]
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                className: "col-md-5",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("label", {
                    htmlFor: "exampleInputEmail1",
                    children: "Email"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("input", {
                    onChange: handleChangeContact,
                    name: "email",
                    type: "text",
                    className: "textonly form-control",
                    value: contact.email,
                    required: true
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                className: "col-4 offset-8",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("button", {
                  type: "button",
                  onClick: () => handleDrawerOpen('contact'),
                  class: "btn btn-sm btn-primary btn-block",
                  children: "Simpan"
                })
              })]
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__.Modal, {
      isOpen: false,
      toggle: '',
      centered: true,
      size: "lg",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_17__.ModalHeader, {
        className: "bg-primary text-white",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("h5", {
          className: "m-0 font-weight-bold",
          children: "Detail Pemesanan"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__.ModalBody, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("small", {
          children: "untuk identitas voucher"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
          className: "form-row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
            className: "col-2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("label", {
                htmlFor: "exampleInputEmail1",
                children: "Title"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("select", {
                onChange: handleChangeContact,
                name: "title",
                value: contact.title,
                className: "form-control title contact_title",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("option", {
                  value: "Mr",
                  selected: "selected",
                  children: "Mr."
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("option", {
                  value: "Mrs",
                  children: "Mrs."
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("option", {
                  value: "Ms",
                  children: "Ms."
                })]
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
            className: "col-5",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("label", {
                htmlFor: "exampleInputEmail1",
                children: "Nama Depan"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("input", {
                onChange: handleChangeContact,
                name: "first",
                value: contact.first,
                type: "text",
                className: "textonly form-control",
                required: true
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
            className: "col-5",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("label", {
                htmlFor: "exampleInputEmail1",
                children: "Nama Belakang"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("input", {
                onChange: handleChangeContact,
                name: "last",
                type: "text",
                value: contact.last,
                className: "textonly form-control",
                required: true
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
            className: "col-md-5",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("label", {
                htmlFor: "exampleInputEmail1",
                children: "Telepon"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                className: "input-group",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("select", {
                  onChange: handleChangeContact,
                  value: contact.phoneCode,
                  name: "phoneCode",
                  className: "form-control",
                  style: {
                    width: '31%'
                  },
                  children: countries.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("option", {
                    value: item.phone,
                    children: item.phone
                  }))
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("input", {
                  required: true,
                  onChange: handleChangeContact,
                  name: "phone",
                  value: contact.phone,
                  type: "text",
                  className: "textonly form-control",
                  style: {
                    width: '69%'
                  }
                })]
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
            className: "col-md-5",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("label", {
                htmlFor: "exampleInputEmail1",
                children: "Email"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("input", {
                onChange: handleChangeContact,
                name: "email",
                type: "text",
                className: "textonly form-control",
                value: contact.email,
                required: true
              })]
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__.Modal, {
      isOpen: isOpenCoupon,
      toggle: handleOpenCoupon,
      centered: true,
      size: "lg",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_17__.ModalHeader, {
        toggle: handleOpenCoupon,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("h5", {
          children: ["Pilih kupon ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            icon: (_iconify_icons_fa_solid_question_circle__WEBPACK_IMPORTED_MODULE_12___default())
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__.ModalBody, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
          className: "input-group mb-3",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("input", {
            type: "text",
            value: textCoupon,
            onChange: e => setTextCoupon(e.target.value),
            className: "form-control",
            placeholder: "Enter Code . . . "
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
            className: "input-group-append",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("button", {
              onClick: () => handleSubmitCoupon(textCoupon),
              className: "btn btn-outline-primary",
              type: "button",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                icon: (_iconify_icons_fa_solid_sign_in_alt__WEBPACK_IMPORTED_MODULE_10___default())
              })
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
          className: "container",
          children: price === null || price === void 0 ? void 0 : price.user.coupon.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
            className: "row border rounded",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
              className: "col-3 rounded d-flex bg-warning align-items-center justify-content-center",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("h6", {
                children: item.name
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
              className: "col-9 d-flex justify-content-between p-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("h6", {
                  children: ["Potongan ", item.amount.toLocaleString()]
                }), item.minimum_transaction > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("p", {
                  children: ["Min.Blnj Rp", item.minimum_transaction.toLocaleString()]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("button", {
                  onClick: () => handleSubmitCoupon(item.id.toString()),
                  type: "button",
                  className: "btn btn-primary",
                  children: "Gunakan"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("small", {
                  children: ["Hingga: ", item.expired]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("p", {
                  children: item.term
                })]
              })]
            })]
          }))
        })]
      })]
    })]
  });
}

const ModalStyled = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(reactstrap__WEBPACK_IMPORTED_MODULE_17__.Modal).withConfig({
  displayName: "FlightPassanger__ModalStyled",
  componentId: "sc-1r6tcmu-0"
})([".modal-content{border:0;background:transparent;}"]);
const DrawerPassanger = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__.BottomSheet).withConfig({
  displayName: "FlightPassanger__DrawerPassanger",
  componentId: "sc-1r6tcmu-1"
})(["z-index:999;"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlightPassanger);
});

/***/ }),

/***/ 5896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2816);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6981);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MDPagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8069);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function FormPassenger(props) {
  var _flightRepricing$cond;

  const {
    item,
    name,
    handleChange,
    flightRepricing,
    style,
    countries,
    handleAddFromQuickpick,
    onClose
  } = props;
  const {
    0: openSsr,
    1: setOpenSsr
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: quickpick,
    1: setQuickpick
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    access_token
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.token);
  const {
    0: options,
    1: setOptions
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    page: 1,
    limit: 5
  });
  const {
    0: meta,
    1: setMeta
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: openQuickpick,
    1: setOpenQuickpick
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const handleChangeInput = e => {
    const {
      name: field,
      value
    } = e.target;
    handleChange(name, item, {
      field,
      value
    });
  };

  const handleChooseQuickpick = data => {
    handleAddFromQuickpick(name, item, data);
    handleOpenQuickpick();
  };

  const renderTitle = () => {
    switch (name) {
      case 'adult':
        return 'Dewasa';

      case 'child':
        return 'Anak-anak';

      case 'infant':
        return 'Bayi';
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    _api_user__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getListQuickpick */ .Z.getListQuickpick(access_token, _objectSpread({
      type: name
    }, options)).then(res => {
      if (res.success) {
        setMeta(res.meta);
        setQuickpick(res.data);
      }
    });
  }, [name, options]);

  const handleOpenQuickpick = () => {
    setOpenQuickpick(prev => !prev);
  };

  const handlePageChange = page => {
    setOptions(state => _objectSpread(_objectSpread({}, state), {}, {
      page
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
      className: "bg-white mb-3",
      style: _objectSpread({
        borderRadius: '20px',
        listStyle: 'none',
        boxShadow: '5px 5px 15px -5px rgba(0, 0, 0, .5)'
      }, style),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "p-3 d-flex flex-row justify-content-between align-items-center",
        style: {
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
          background: '#0070BA'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h5", {
          className: "text-white font-weight-bold",
          children: [onClose && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
            className: "fas fa-times mr-2",
            onClick: onClose
          }), renderTitle(), " ", item.id]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: "dropdown",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
            onClick: handleOpenQuickpick,
            className: "btn btn-sm btn-light dropdown-toggle",
            type: "button",
            id: "dropdownMenuButton",
            children: "Quickpick"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "form-row p-3",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: "col-md-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "form-group",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("label", {
              htmlFor: "exampleInputEmail1",
              children: "Title"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
              value: item.title,
              onChange: handleChangeInput,
              className: "form-control",
              name: "title",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("option", {
                value: "Mr",
                children: "Mr."
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("option", {
                value: "Mrs",
                children: "Mrs."
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("option", {
                value: "Ms",
                children: "Ms."
              })]
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: "col-md-5",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "form-group",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("label", {
              htmlFor: "exampleInputEmail1",
              children: "Nama Depan"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", {
              value: item.firstName,
              type: "text",
              className: "textonly form-control",
              name: "firstName",
              onChange: handleChangeInput
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: "col-md-5",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "form-group",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("label", {
              htmlFor: "exampleInputEmail1",
              children: "Nama Belakang"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", {
              type: "text",
              value: item.lastName,
              className: "textonly form-control",
              onChange: handleChangeInput,
              name: "lastName",
              required: true
            })]
          })
        }), flightRepricing.conditions.dobReq && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: "col-md-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "form-group",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("label", {
              htmlFor: "exampleInputEmail1",
              children: "Tanggal Lahir"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", {
              type: "date",
              value: item.dob,
              className: "textonly form-control",
              onChange: handleChangeInput,
              name: "dob",
              required: true
            })]
          })
        }), ((_flightRepricing$cond = flightRepricing.conditions.identificationNumbers) === null || _flightRepricing$cond === void 0 ? void 0 : _flightRepricing$cond.mandatory) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: "col-md-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "form-group",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("label", {
              htmlFor: "exampleInputEmail1",
              children: "No KTP / NIK"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", {
              type: "text",
              value: item.identificationNumber,
              className: "form-control",
              onChange: handleChangeInput,
              name: "identificationNumber"
            })]
          })
        }), flightRepricing.conditions.passport.mandatory && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: "col-md-4",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("label", {
                children: "No Paspor"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", {
                type: "text",
                onChange: handleChangeInput,
                value: item === null || item === void 0 ? void 0 : item.num,
                className: "form-control form-control",
                name: "num",
                required: true
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: "col-md-4",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("label", {
                children: "Tgl Terbit Paspor"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", {
                type: "date",
                className: "form-control",
                value: item === null || item === void 0 ? void 0 : item.doi,
                name: "doi",
                onChange: handleChangeInput,
                required: true
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: "col-md-4",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("label", {
                children: "Tgl Kadaluarsa Paspor"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", {
                type: "date",
                onChange: handleChangeInput,
                value: item === null || item === void 0 ? void 0 : item.doe,
                className: "form-control",
                name: "doe",
                required: true
              })]
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: "col-md-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "form-group",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("label", {
              children: "Negara"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("select", {
              name: "nat",
              value: item.nat,
              onChange: handleChangeInput,
              className: "form-control",
              children: countries === null || countries === void 0 ? void 0 : countries.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("option", {
                value: item.id,
                children: item.country_name
              }))
            })]
          })
        }), (flightRepricing.extra.meal.length > 0 || flightRepricing.extra.baggage.length > 0) && name !== 'infant' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: "col-md-12 add_bag_mean",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
            className: "mr-md-2 btn btn-warning font-weight-bold btn-sm float-right",
            type: "button",
            onClick: () => setOpenSsr(prev => !prev),
            children: " Tambah Bagasi dan makanan"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: "col-md-12",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Collapse, {
            isOpen: openSsr,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("hr", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
              className: "row",
              children: flightRepricing.extra.baggage.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                    children: ["Tambah bagasi penerbangan ", item.name]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
                    className: "form-control",
                    name: "ssr",
                    onChange: handleChangeInput,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("option", {
                      value: JSON.stringify({
                        key: item.key,
                        ssrType: 'baggage'
                      }),
                      children: "Tidak tambah bagasi"
                    }), item.data.map(d => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("option", {
                      value: JSON.stringify({
                        key: item.key,
                        ssrType: 'baggage',
                        code: d.code
                      }),
                      children: [d.desc, " - ", d.amount == 0 ? 'Gratis' : `Rp${d.amount.toLocaleString()}`]
                    }))]
                  })]
                })
              }))
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
              className: "row",
              children: flightRepricing.extra.meal.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                    children: ["Tambah Makanan ", item.name]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
                    className: "form-control",
                    onChange: handleChangeInput,
                    name: "ssr",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("option", {
                      value: JSON.stringify({
                        key: item.key,
                        ssrType: 'meal'
                      }),
                      children: "Tidak tambah makanan"
                    }), item.data.map(d => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("option", {
                      value: JSON.stringify({
                        key: item.key,
                        ssrType: 'meal',
                        code: d.code
                      }),
                      children: [d.desc, " - Rp", d.amount.toLocaleString()]
                    }))]
                  })]
                })
              }))
            })]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Modal, {
      isOpen: openQuickpick,
      centered: true,
      size: "lg",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.ModalHeader, {
        toggle: handleOpenQuickpick,
        children: "List Quickpick"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.ModalBody, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("ul", {
          className: "list-group",
          children: quickpick.map(qp => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
            className: "list-group-item d-flex justify-content-between align-items-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h6", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("strong", {
                children: [qp.title, " ", qp.firstname, " ", qp.lastname, ", ID: ", qp.identificationNumber, ", Tgl Lahir: ", qp.tglLahir]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
              type: "button",
              className: "btn btn-primary",
              onClick: () => {
                handleChooseQuickpick(qp);
              },
              children: "Pilih"
            })]
          }))
        }), meta && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: "mt-4 d-flex justify-content-end w-100",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_MDPagination__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            onPageChange: handlePageChange,
            currentPage: meta.page,
            pageSize: meta.limit,
            totalCount: meta.total,
            className: "pagination-bar"
          })
        })]
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormPassenger);

/***/ })

};
;