"use strict";
exports.id = 1003;
exports.ids = [1003];
exports.modules = {

/***/ 27:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const masterApi = {
  getPayments: token => {
    // eslint-disable-next-line no-undef
    return fetch(`${"https://api.masterdiskon.com/v1/"}master/payments`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (masterApi);

/***/ }),

/***/ 6659:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header_HeaderBack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8579);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AccountPurchaseFlightDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9303);
/* harmony import */ var _AccountPurchaseHotelDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2816);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_DrawerPayments__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5742);
/* harmony import */ var _components_mobile_account_AccountPurchaseProductDetail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2361);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6981);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _api_master__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(27);
/* harmony import */ var _components_shared_StatusLabel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4264);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_header_HeaderBack__WEBPACK_IMPORTED_MODULE_0__]);
_header_HeaderBack__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















const purchaseComponent = {
  hotel: _AccountPurchaseHotelDetail__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
  flight: _AccountPurchaseFlightDetail__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
  product: _components_mobile_account_AccountPurchaseProductDetail__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z
};

function AccountPurchaseDetail() {
  var _purchase$contact, _purchase$contact2, _purchase$contact3, _purchase$contact4, _purchase$contact5, _purchase$payments, _purchase$price, _purchase$price$total, _purchase$payments2, _purchase$payments3;

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    access_token
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.token);
  const {
    0: purchase,
    1: setPurchase
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);
  const {
    0: countDown,
    1: setCountDown
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const {
    0: openPaymentChange,
    1: setOpenPaymentChange
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
  const {
    0: clickable,
    1: setClickable
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const {
    0: openSsr,
    1: setOpenSsr
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const {
    0: cancelRequest,
    1: setCancelRequest
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({});
  const {
    0: listSsr,
    1: setListSsr
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);
  const {
    0: openPrice,
    1: setOpenPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const {
    0: openFormRefund,
    1: setOpenFormRefund
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const {
    0: tokenIssued,
    1: setTokenIssued
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");
  const {
    0: bank,
    1: setBank
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);

  const handleOpenPayment = () => {
    setOpenPaymentChange(state => !state);
  };

  const handleChangePayment = id => {
    _api_user__WEBPACK_IMPORTED_MODULE_7__/* ["default"].changePaymentMethod */ .Z.changePaymentMethod(access_token, {
      product: purchase.product,
      key: router.query.id,
      paymentMethod: id
    }).then(res => {
      setLoading(true);
      _api_user__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getPurchase */ .Z.getPurchase(access_token, {
        key: router.query.id
      }).then(res => {
        if (res.success) {
          setPurchase(res.data);
        }

        setLoading(false);
      });

      if (res.success) {
        react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.success('Metode pembayaran berhasil diubah');
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error(res.message);
      }

      handleOpenPayment();
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    if (purchase) {
      setInterval(() => {
        const time = Date.parse(moment__WEBPACK_IMPORTED_MODULE_8___default()(purchase === null || purchase === void 0 ? void 0 : purchase.status.timelimit).toDate()) - Date.parse(new Date());

        if (time < 0) {
          setCountDown({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
          });
        } else {
          const seconds = Math.floor(time / 1000 % 60);
          const minutes = Math.floor(time / 1000 / 60 % 60);
          const hours = Math.floor(time / (1000 * 60 * 60) % 24);
          const days = Math.floor(time / (1000 * 60 * 60 * 24));
          setCountDown({
            days,
            hours,
            minutes,
            seconds
          });
        }
      }, 1000);
    }
  }, [purchase]);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    setLoading(true);

    if (router.isReady) {
      _api_user__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getPurchase */ .Z.getPurchase(access_token, {
        key: router.query.id
      }).then(res => {
        if (res.success) {
          setPurchase(res.data);
        }

        setLoading(false);
      });
    }
  }, [router.query.id]);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    _api_master__WEBPACK_IMPORTED_MODULE_14__/* ["default"].getPayments */ .Z.getPayments(access_token).then(res => {
      if (res.success) {
        setBank(res.data);
      }
    });
  }, []);

  const getRate = () => {
    if (purchase) {
      let arr = Object.keys(purchase === null || purchase === void 0 ? void 0 : purchase.price.perpax);
      let perPax = purchase === null || purchase === void 0 ? void 0 : purchase.price.perpax;
      arr = arr.map(item => {
        let obj;

        for (let index = 0; index < perPax[item].count; index++) {
          obj = _objectSpread(_objectSpread({}, perPax[item]), {}, {
            type: item
          });
        }

        return obj;
      });
      return arr;
    }
  };

  const handleOpenSsr = ssr => {
    setListSsr(ssr);
    setOpenSsr(prev => !prev);
  };

  const handleSubmitIssued = () => {
    let obj = tokenIssued;

    try {
      if (obj === '') {
        react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error(`Token tidak boleh kosong`);
      } else {
        sweetalert2__WEBPACK_IMPORTED_MODULE_16___default().fire({
          title: "Apakah Anda sudah yakin?",
          text: "Dengan menyetujuinya, Anda yakin untuk melanjutkan pemesanan ini.",
          icon: "info",
          buttons: ['Tidak, batalkan!', 'Ya, saya yakin!'],
          dangerMode: false
        }).then(function (isConfirm) {
          if (isConfirm) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_16___default().fire({
              title: 'Pesanan diproses!',
              text: 'Pesanan Anda sedang kami proses.!',
              icon: 'success',
              closeOnClickOutside: false,
              closeOnEsc: false,
              timer: 1000
            }).then(function () {
              const req = {
                "product": purchase.product,
                "key": purchase.period.codeId,
                "token": obj
              };
              const number = purchase.period.codeId;
              const reqInv = {
                "note": 'B2B',
                "tags": purchase.product,
                "id_order": [number.toString()],
                "idOrder": [number.toString()]
              };
              _api_user__WEBPACK_IMPORTED_MODULE_7__/* ["default"].submitIssued */ .Z.submitIssued(access_token, req).then(res => {
                if (res.success) {
                  console.log("body", JSON.stringify(reqInv));
                  _api_user__WEBPACK_IMPORTED_MODULE_7__/* ["default"].submitInvoice */ .Z.submitInvoice(access_token, reqInv).then(res => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_16___default().fire({
                      title: 'Berhasil!',
                      text: 'Pesanan Anda berhasil!',
                      icon: 'success',
                      closeOnClickOutside: false,
                      closeOnEsc: false,
                      showConfirmButton: false,
                      timer: 2000
                    }).then(function () {
                      window.location.reload();
                    });
                  });
                } else {
                  react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error('Pesanan Gagal Dipesan "' + res.message + '"');
                }
              });
            });
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_16___default().fire("Dibatalkan", "Anda membatalkan untuk melakukan pemesanan ini.", "error");
          }
        });
      } // let objString = JSON.parse(JSON.stringify(obj));

    } catch (error) {
      console.error(error); // output: TypeError: cyclic object value
    }
  };

  const handleCancelled = () => {
    sweetalert2__WEBPACK_IMPORTED_MODULE_16___default().fire({
      title: 'Anda yakin ingin membatalkan pesanan?',
      icon: 'info',
      text: purchase.room.cancellationPolicy,
      confirmButtonText: 'Yakin',
      confirmButtonColor: '#0070BA'
    }).then(res => {
      if (res.isConfirmed) {
        if (cancelRequest['accountNumber'] && cancelRequest['customerName'] && cancelRequest['customerName'] && cancelRequest['reason']) {
          _api_user__WEBPACK_IMPORTED_MODULE_7__/* ["default"].createCancellation */ .Z.createCancellation(access_token, _objectSpread(_objectSpread({}, cancelRequest), {}, {
            key: router.query.id,
            product: purchase.product
          })).then(res => {
            if (res.success) {
              react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.success('Pembatalan anda sedang dalam proses');
            } else {
              react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error(res.message);
            }
          });
        } else {
          react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error('Data tidak lengkap');
        }
      }
    });
  };

  const handleChangeCancelRequest = e => {
    const {
      name,
      value
    } = e.target;
    setCancelRequest(v => _objectSpread(_objectSpread({}, v), {}, {
      [name]: value
    }));
  };

  if (loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
      style: {
        height: '50vh',
        marginBottom: '5rem'
      },
      className: "d-flex flex-column align-items-center justify-content-center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("img", {
        src: "https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/pulse-spinner.svg"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("h4", {
        children: "Sedang menyiapkan data..."
      })]
    });
  }

  if (!purchase) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
      style: {
        height: '50vh',
        marginBottom: '5rem'
      },
      className: "d-flex flex-column align-items-center justify-content-center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("h4", {
        children: "Data pesanan tidak ditemukan"
      })
    });
  }

  const PurchaseComponent = purchaseComponent[purchase.product];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(RootStyled, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_header_HeaderBack__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
      onBack: () => router.push('/user/purchase'),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
        className: "col-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: "d-flex flex-column align-items-center justify-content-center text-white",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("p", {
            className: "d-block font-weight-bold",
            style: {
              marginBottom: '-8px'
            },
            children: "Pembayaran"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("small", {
            className: "d-block",
            children: ["No. Order: ", purchase === null || purchase === void 0 ? void 0 : purchase.codev]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
        className: "col-2 text-right d-flex align-items-center justify-content-end text-white",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("i", {
          className: "fas fa-home mr-3 icon",
          onClick: () => router.push('/')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("i", {
          className: "fas fa-sync icon",
          onClick: () => window.location.reload()
        })]
      })]
    }), purchase.status.id === 9 || purchase.status.vendor === 'CONFIRMED' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
      style: {
        boxShadow: '2px 2px 5px -5px rgba(0,0,0,.5)'
      },
      className: "bg-white",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("a", {
        href: purchase.doc.eticket,
        style: {
          cursor: 'pointer'
        },
        target: "_blank",
        className: "d-flex justify-content-between text-dark border-bottom w-100 d-block py-3 px-4 rounded-0",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
          children: "eVoucher"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("i", {
            class: "fas fa-arrow-right"
          })
        })]
      })
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
      class: `alert 
                    ${purchase.status.id === 3 && (purchase.product === 'hotel' || purchase.product === 'product') ? 'alert-white' : 'alert-secondary'} 
                    mb-0`,
      role: "alert",
      children: purchase.status.id === 13 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
        className: `card-body border-bottom bg-danger py-2 bayar-disini rounded-bottom text-white`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_shared_StatusLabel__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
          clickable: clickable,
          handleOpenPayment: handleOpenPayment,
          handleSubmitIssued: handleSubmitIssued,
          purchase: purchase,
          setClickable: setClickable,
          setTokenIssued: setTokenIssued
        })
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
        className: `card-body border-bottom bg-warning py-2 bayar-disini rounded-bottom`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_shared_StatusLabel__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
          clickable: clickable,
          handleOpenPayment: handleOpenPayment,
          handleSubmitIssued: handleSubmitIssued,
          purchase: purchase,
          setClickable: setClickable,
          setTokenIssued: setTokenIssued
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
      className: "container",
      children: [moment__WEBPACK_IMPORTED_MODULE_8___default()().isBefore(moment__WEBPACK_IMPORTED_MODULE_8___default()(purchase.status.timelimit)) && purchase.status.id === 3 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
        className: "card-container card-container-payment",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
          className: "mr-3 text-primary font-weight-bold",
          children: "Batas Pembayaran"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
          id: "hitungmundur",
          className: "d-flex align-items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "rounded opacity-50 bg-warning text-center p-1",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("b", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
                className: "angka",
                children: countDown.hours
              })
            }), " "]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
            className: "mx-1",
            children: " :"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "rounded bg-warning opacity-50 text-center p-1",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("b", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
                className: "angka",
                children: countDown.minutes
              })
            }), " "]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
            className: "mx-1",
            children: ":"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
            className: "rounded bg-warning opacity-50 text-center p-1 mr-2",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("b", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
                className: "angka",
                children: countDown.seconds
              })
            })
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(PurchaseComponent, {
        purchase: purchase
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
        className: "card-container card-container-contact",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("p", {
          className: "font-weight-bold text-primary mb-1 title",
          children: "Contact's Name"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("p", {
          className: "mb-0",
          children: `${purchase === null || purchase === void 0 ? void 0 : (_purchase$contact = purchase.contact) === null || _purchase$contact === void 0 ? void 0 : _purchase$contact.title} ${purchase === null || purchase === void 0 ? void 0 : (_purchase$contact2 = purchase.contact) === null || _purchase$contact2 === void 0 ? void 0 : _purchase$contact2.firstName} ${purchase === null || purchase === void 0 ? void 0 : (_purchase$contact3 = purchase.contact) === null || _purchase$contact3 === void 0 ? void 0 : _purchase$contact3.lastName}`
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: "d-flex justify-content-between align-items-center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
            children: "Phone"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
            children: purchase === null || purchase === void 0 ? void 0 : (_purchase$contact4 = purchase.contact) === null || _purchase$contact4 === void 0 ? void 0 : _purchase$contact4.phone
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: "d-flex justify-content-between align-items-center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
            children: "Email"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
            children: purchase === null || purchase === void 0 ? void 0 : (_purchase$contact5 = purchase.contact) === null || _purchase$contact5 === void 0 ? void 0 : _purchase$contact5.email
          })]
        })]
      }), purchase.status.id === 3 && (purchase.product === 'hotel' || purchase.product === 'product' || purchase.product === 'flight') ? user.role == 'user' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
        className: "card-container card-container-pay",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
          children: [!(purchase !== null && purchase !== void 0 && (_purchase$payments = purchase.payments) !== null && _purchase$payments !== void 0 && _purchase$payments.token) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("p", {
              className: "font-weight-bold text-primary mb-1 title",
              children: "Metode Pembayaran"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("button", {
              type: "button",
              onClick: handleOpenPayment,
              className: "btn btn-primary btn-sm btn-block font-weight-bold mt-3",
              children: "Pilih Metode Pembayaran"
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "btn-group btn-block btn-sm",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("button", {
              id: "pay-button",
              onClick: () => {
                setClickable(true);
                window.snap.pay(purchase === null || purchase === void 0 ? void 0 : purchase.payments.token, {
                  onSuccess: function () {
                    setClickable(false);
                  },
                  onPending: function () {
                    setClickable(false);
                  },
                  onError: function () {
                    setClickable(false);
                  },
                  onClose: function () {
                    setClickable(false);
                  }
                });
              },
              disabled: clickable,
              style: {
                width: '70%'
              },
              className: "btn btn-primary btn-sm",
              children: "BAYAR SEKARANG"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("button", {
              onClick: handleOpenPayment,
              type: "button",
              className: "btn btn-info btn-sm",
              children: "Ganti Metode"
            })]
          }), " "]
        })
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
        className: "card-container card-container-pay",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("p", {
            children: "Silahkan cek email untuk mendapatkan kode token issued."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
              className: "col-12",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                className: "form-group",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("input", {
                  type: "text",
                  className: "textonly form-control",
                  name: "tokis",
                  id: "tokis",
                  onChange: e => setTokenIssued(e.target.value),
                  placeholder: "Masukan Token"
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
              className: "col-12",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                className: "form-group",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("button", {
                  type: "button",
                  class: "btn btn-block btn-primary ",
                  onClick: handleSubmitIssued,
                  children: "ISSUED"
                })
              })
            })]
          })]
        })
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
        className: "card-container card-container-pay",
        children: ["Total Pembayaran", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
          onClick: () => setOpenPrice(prev => !prev),
          className: "font-weight-bold text-primary mb-2",
          style: {
            fontSize: '18px'
          },
          children: ["Rp", purchase === null || purchase === void 0 ? void 0 : (_purchase$price = purchase.price) === null || _purchase$price === void 0 ? void 0 : (_purchase$price$total = _purchase$price.total) === null || _purchase$price$total === void 0 ? void 0 : _purchase$price$total.toLocaleString().replaceAll(',', '.'), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
            className: "ml-1 text-dark",
            children: openPrice ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("i", {
              class: "fas fa-angle-up"
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("i", {
              class: "fas fa-angle-down"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_13__.Collapse, {
          isOpen: openPrice,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "d-flex justify-content-between my-2",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("strong", {
                children: "Subtotal"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
              children: ["Rp", purchase === null || purchase === void 0 ? void 0 : purchase.price.subtotal.toLocaleString()]
            })]
          }), purchase.product === 'flight' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "d-flex justify-content-between my-2",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("strong", {
                children: "Pajak dan lainnya "
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
              className: "tax-and-more",
              children: ["Rp", ((purchase === null || purchase === void 0 ? void 0 : purchase.price.tax) + (purchase === null || purchase === void 0 ? void 0 : purchase.price.iwjr) + (purchase === null || purchase === void 0 ? void 0 : purchase.price.fee2)).toLocaleString()]
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "d-flex justify-content-between my-2",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("strong", {
                children: "Pajak"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
              className: "tax-and-more text-success",
              children: "Termasuk "
            })]
          }), purchase.product === 'flight' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "d-flex justify-content-between my-2",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("strong", {
                children: "Tambahan"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
              className: "extra-flight",
              children: ["Rp", purchase === null || purchase === void 0 ? void 0 : purchase.price.addon]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "d-flex justify-content-between my-2",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("strong", {
                children: "Biaya"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
              children: ["Rp", purchase === null || purchase === void 0 ? void 0 : purchase.price.fee.toLocaleString()]
            })]
          }), (purchase === null || purchase === void 0 ? void 0 : purchase.price.point) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "d-flex justify-content-between my-2",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("strong", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("small", {
                  children: "Point digunakan"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
              className: "text-danger",
              children: ["-Rp", purchase === null || purchase === void 0 ? void 0 : purchase.price.point.toLocaleString()]
            })]
          }), (purchase === null || purchase === void 0 ? void 0 : purchase.price.discount) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "d-flex justify-content-between my-2",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
              className: "font-weight-bold",
              children: "Diskon"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
              className: "text-danger",
              children: ["-Rp", purchase === null || purchase === void 0 ? void 0 : purchase.price.discount.toLocaleString()]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "d-flex justify-content-between my-2",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("strong", {
                children: "Total tagihan"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("b", {
              children: ["Rp", purchase === null || purchase === void 0 ? void 0 : purchase.price.total.toLocaleString()]
            })]
          })]
        }), purchase.status.id === 3 && (purchase.product === 'hotel' || purchase.product === 'product') && !(purchase !== null && purchase !== void 0 && (_purchase$payments2 = purchase.payments) !== null && _purchase$payments2 !== void 0 && _purchase$payments2.token) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("button", {
          type: "button",
          className: classnames__WEBPACK_IMPORTED_MODULE_12___default()("btn btn-sm btn-block font-weight-bold", {
            'btn-secondary': purchase.status.id === 3 && (purchase.product === 'hotel' || purchase.product === 'product') && !(purchase !== null && purchase !== void 0 && (_purchase$payments3 = purchase.payments) !== null && _purchase$payments3 !== void 0 && _purchase$payments3.token)
          }),
          children: "Belum Pilih Metode Pembayaran"
        })]
      }), purchase.isCancel && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("button", {
        onClick: () => setOpenFormRefund(v => !v),
        type: "button",
        className: "btn mt-3 btn-danger btn-sm btn-block",
        children: "Batalkan Pesanan"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_shared_DrawerPayments__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      open: openPaymentChange,
      toggle: handleOpenPayment,
      handleChangePaymentMethod: handleChangePayment,
      flightRepricing: purchase
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_13__.Modal, {
      isOpen: openFormRefund,
      toggle: () => setOpenFormRefund(v => !v),
      centered: true,
      size: "md",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__.ModalHeader, {
        toggle: () => setOpenFormRefund(v => !v),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("h5", {
          className: "font-weight-bold",
          children: "Form Refund"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__.ModalBody, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("label", {
                children: "No Rekening"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("input", {
                onChange: handleChangeCancelRequest,
                name: "accountNumber",
                value: cancelRequest['accountNumber'],
                type: "text",
                className: "form-control",
                "aria-describedby": "helpId",
                placeholder: "Masukan no rekening anda..."
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("label", {
                children: "Pemilik Rekening"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("input", {
                onChange: handleChangeCancelRequest,
                name: "customerName",
                value: cancelRequest['customerName'],
                type: "text",
                className: "form-control",
                "aria-describedby": "helpId",
                placeholder: "Masukan nama pemilik rekening..."
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("label", {
                children: "Bank"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("select", {
                onChange: handleChangeCancelRequest,
                value: cancelRequest['idPayment'],
                class: "form-control",
                name: "idPayment",
                id: "",
                children: bank.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                  value: item.id_payment,
                  children: item.bank_name
                }))
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("label", {
                htmlFor: true,
                children: "Alasan Pembatalan"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("textarea", {
                onChange: handleChangeCancelRequest,
                name: "reason",
                value: cancelRequest['reason'],
                className: "form-control",
                rows: 3,
                placeholder: "Masukan alasan pembatalan..."
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
            className: "col-12 d-flex justify-content-end",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("button", {
              type: "button",
              onClick: handleCancelled,
              className: "btn btn-primary",
              children: "Kirim"
            })
          })]
        })
      })]
    })]
  });
}

const RootStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "AccountPurchaseDetail__RootStyled",
  componentId: "sc-1922hbc-0"
})([".container{padding-top:15px;padding-bottom:15px;}font-size:14px;.icon{font-size:16px;}.card-container{background:white;border-radius:15px;box-shadow:5px 5px 10px -5px rgba(0,0,0,.5);margin-top:10px;&.card-container-payment{padding:15px;display:flex;align-items:center;width:100%;justify-content:space-between;}&.card-container-contact{padding:10px 15px;.title{font-size:16px;}}&.card-container-pay{padding:10px 15px;.title{font-size:16px;}}}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountPurchaseDetail);
});

/***/ }),

/***/ 9303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






function AccountPurchaseFlightDetail(props) {
  var _purchase$detail, _purchase$detail$onwa, _purchase$detail$onwa2, _purchase$detail2, _purchase$detail2$onw, _purchase$detail2$onw2, _purchase$detail3, _purchase$detail3$onw, _purchase$detail4, _purchase$detail4$onw, _purchase$detail4$onw2, _purchase$detail5, _purchase$detail6, _purchase$detail6$ret, _purchase$detail6$ret2, _purchase$detail7, _purchase$detail7$ret, _purchase$detail7$ret2, _purchase$detail8, _purchase$detail8$ret, _purchase$detail9, _purchase$detail9$ret, _purchase$detail9$ret2;

  const {
    purchase
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "card-container card-container-contact",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
      className: "font-weight-bold text-primary mb-1 title",
      children: "Flight"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
      className: "font-weight-bold mt-2 mb-0 text-primary ml-1",
      children: "Departure"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "d-flex justify-content-between align-items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
        children: [purchase === null || purchase === void 0 ? void 0 : (_purchase$detail = purchase.detail) === null || _purchase$detail === void 0 ? void 0 : (_purchase$detail$onwa = _purchase$detail.onwardFlight) === null || _purchase$detail$onwa === void 0 ? void 0 : (_purchase$detail$onwa2 = _purchase$detail$onwa.from) === null || _purchase$detail$onwa2 === void 0 ? void 0 : _purchase$detail$onwa2.code, " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("i", {
          class: "fas fa-arrow-right  mx-1  "
        }), " ", purchase === null || purchase === void 0 ? void 0 : (_purchase$detail2 = purchase.detail) === null || _purchase$detail2 === void 0 ? void 0 : (_purchase$detail2$onw = _purchase$detail2.onwardFlight) === null || _purchase$detail2$onw === void 0 ? void 0 : (_purchase$detail2$onw2 = _purchase$detail2$onw.to) === null || _purchase$detail2$onw2 === void 0 ? void 0 : _purchase$detail2$onw2.code]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("i", {
          class: "fas fa-clock    "
        }), " ", purchase === null || purchase === void 0 ? void 0 : (_purchase$detail3 = purchase.detail) === null || _purchase$detail3 === void 0 ? void 0 : (_purchase$detail3$onw = _purchase$detail3.onwardFlight) === null || _purchase$detail3$onw === void 0 ? void 0 : _purchase$detail3$onw.flight[0].flyTime]
      })]
    }), purchase === null || purchase === void 0 ? void 0 : (_purchase$detail4 = purchase.detail) === null || _purchase$detail4 === void 0 ? void 0 : (_purchase$detail4$onw = _purchase$detail4.onwardFlight) === null || _purchase$detail4$onw === void 0 ? void 0 : (_purchase$detail4$onw2 = _purchase$detail4$onw.flight) === null || _purchase$detail4$onw2 === void 0 ? void 0 : _purchase$detail4$onw2.map(item => {
      var _item$departure, _item$departure2, _item$departure3, _item$departure4, _item$arrival, _item$arrival2, _item$arrival3, _item$arrival4;

      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(TimeLineStyled, {
        className: "mb-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "position-absolute",
              style: {
                left: '-90px'
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
                className: "mb-0",
                children: moment__WEBPACK_IMPORTED_MODULE_1___default()(item === null || item === void 0 ? void 0 : (_item$departure = item.departure) === null || _item$departure === void 0 ? void 0 : _item$departure.time, 'HH:mm:ss').format('HH.mm')
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("small", {
                children: item === null || item === void 0 ? void 0 : (_item$departure2 = item.departure) === null || _item$departure2 === void 0 ? void 0 : _item$departure2.date
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
              className: "mb-0",
              children: [item === null || item === void 0 ? void 0 : (_item$departure3 = item.departure) === null || _item$departure3 === void 0 ? void 0 : _item$departure3.name, " (", item === null || item === void 0 ? void 0 : (_item$departure4 = item.departure) === null || _item$departure4 === void 0 ? void 0 : _item$departure4.code, ")"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
              className: "py-2 mb-0",
              children: [item === null || item === void 0 ? void 0 : item.code, " . ", item === null || item === void 0 ? void 0 : item.class]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            className: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "position-absolute",
              style: {
                left: '-90px'
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
                className: "mb-0",
                children: moment__WEBPACK_IMPORTED_MODULE_1___default()(item === null || item === void 0 ? void 0 : (_item$arrival = item.arrival) === null || _item$arrival === void 0 ? void 0 : _item$arrival.time, 'HH:mm:s').format('HH.mm')
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("small", {
                children: item === null || item === void 0 ? void 0 : (_item$arrival2 = item.arrival) === null || _item$arrival2 === void 0 ? void 0 : _item$arrival2.date
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
              className: "mb-0",
              children: [item === null || item === void 0 ? void 0 : (_item$arrival3 = item.arrival) === null || _item$arrival3 === void 0 ? void 0 : _item$arrival3.name, " (", item === null || item === void 0 ? void 0 : (_item$arrival4 = item.arrival) === null || _item$arrival4 === void 0 ? void 0 : _item$arrival4.code, ")"]
            })]
          })]
        })
      });
    }), (purchase === null || purchase === void 0 ? void 0 : (_purchase$detail5 = purchase.detail) === null || _purchase$detail5 === void 0 ? void 0 : _purchase$detail5.returnFlight) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
        className: "font-weight-bold mt-2 mb-0 text-primary ml-1",
        children: "Return"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "d-flex justify-content-between align-items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
          children: [purchase === null || purchase === void 0 ? void 0 : (_purchase$detail6 = purchase.detail) === null || _purchase$detail6 === void 0 ? void 0 : (_purchase$detail6$ret = _purchase$detail6.returnFlight) === null || _purchase$detail6$ret === void 0 ? void 0 : (_purchase$detail6$ret2 = _purchase$detail6$ret.from) === null || _purchase$detail6$ret2 === void 0 ? void 0 : _purchase$detail6$ret2.code, " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("i", {
            class: "fas fa-arrow-right  mx-1  "
          }), " ", purchase === null || purchase === void 0 ? void 0 : (_purchase$detail7 = purchase.detail) === null || _purchase$detail7 === void 0 ? void 0 : (_purchase$detail7$ret = _purchase$detail7.returnFlight) === null || _purchase$detail7$ret === void 0 ? void 0 : (_purchase$detail7$ret2 = _purchase$detail7$ret.to) === null || _purchase$detail7$ret2 === void 0 ? void 0 : _purchase$detail7$ret2.code]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("i", {
            class: "fas fa-clock"
          }), " ", purchase === null || purchase === void 0 ? void 0 : (_purchase$detail8 = purchase.detail) === null || _purchase$detail8 === void 0 ? void 0 : (_purchase$detail8$ret = _purchase$detail8.returnFlight) === null || _purchase$detail8$ret === void 0 ? void 0 : _purchase$detail8$ret.flight[0].flyTime]
        })]
      }), purchase === null || purchase === void 0 ? void 0 : (_purchase$detail9 = purchase.detail) === null || _purchase$detail9 === void 0 ? void 0 : (_purchase$detail9$ret = _purchase$detail9.returnFlight) === null || _purchase$detail9$ret === void 0 ? void 0 : (_purchase$detail9$ret2 = _purchase$detail9$ret.flight) === null || _purchase$detail9$ret2 === void 0 ? void 0 : _purchase$detail9$ret2.map(item => {
        var _item$departure5, _item$departure6, _item$departure7, _item$departure8, _item$arrival5, _item$arrival6, _item$arrival7, _item$arrival8;

        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(TimeLineStyled, {
          className: "mb-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "position-absolute",
                style: {
                  left: '-90px'
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
                  className: "mb-0",
                  children: moment__WEBPACK_IMPORTED_MODULE_1___default()(item === null || item === void 0 ? void 0 : (_item$departure5 = item.departure) === null || _item$departure5 === void 0 ? void 0 : _item$departure5.time, 'HH:mm:ss').format('HH.mm')
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("small", {
                  children: item === null || item === void 0 ? void 0 : (_item$departure6 = item.departure) === null || _item$departure6 === void 0 ? void 0 : _item$departure6.date
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
                className: "mb-0",
                children: [item === null || item === void 0 ? void 0 : (_item$departure7 = item.departure) === null || _item$departure7 === void 0 ? void 0 : _item$departure7.name, " (", item === null || item === void 0 ? void 0 : (_item$departure8 = item.departure) === null || _item$departure8 === void 0 ? void 0 : _item$departure8.code, ")"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
                className: "py-2 mb-0",
                children: [item === null || item === void 0 ? void 0 : item.code, " . ", item === null || item === void 0 ? void 0 : item.class]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
              className: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "position-absolute",
                style: {
                  left: '-90px'
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
                  className: "mb-0",
                  children: moment__WEBPACK_IMPORTED_MODULE_1___default()(item === null || item === void 0 ? void 0 : (_item$arrival5 = item.arrival) === null || _item$arrival5 === void 0 ? void 0 : _item$arrival5.time, 'HH:mm:s').format('HH.mm')
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("small", {
                  children: item === null || item === void 0 ? void 0 : (_item$arrival6 = item.arrival) === null || _item$arrival6 === void 0 ? void 0 : _item$arrival6.date
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
                className: "mb-0",
                children: [item === null || item === void 0 ? void 0 : (_item$arrival7 = item.arrival) === null || _item$arrival7 === void 0 ? void 0 : _item$arrival7.name, " (", item === null || item === void 0 ? void 0 : (_item$arrival8 = item.arrival) === null || _item$arrival8 === void 0 ? void 0 : _item$arrival8.code, ")"]
              })]
            })]
          })
        });
      })]
    })]
  });
}

const TimeLineStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "AccountPurchaseFlightDetail__TimeLineStyled",
  componentId: "sc-v15xr2-0"
})(["position:relative;margin-top:15px;li{margin-left:50px;min-height:33px;position:relative;background-color:#fff;list-style:none;}li:nth-last-child(0n+1)::before{width:0;border:0;}li::before{content:'';position:absolute;border:1.8px dashed #FFC107;left:-18.5px;background-color:#E7E7E7;top:3px;bottom:0;height:100%;}li::after{text-align:center;z-index:10;content:'';position:absolute;width:25px;height:25px;border:3px solid #fff;background-color:#036cb4;border-radius:50%;top:0;left:-30px;}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountPurchaseFlightDetail);

/***/ }),

/***/ 5692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





function AccountPurchaseHotelDetail(props) {
  const {
    purchase
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(RootStyled, {
    className: "card mb-2 mt-2",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "card-body p-2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-4 pr-0",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(ImageHotelStyled, {
            img: 'https://cdn.masterdiskon.com/masterdiskon/product/hotel/img/featured/2021/1983203/a.jpg'
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-8",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "row h-100 justify-content-between",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "col-10",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h5", {
                className: "title mb-0",
                children: purchase.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "d-flex align-items-center",
                style: {
                  fontSize: '12px'
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                  className: "d-flex",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "d-inline-block mr-1",
                    style: {
                      width: '15px',
                      height: '15px',
                      position: 'relative'
                    },
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_image__WEBPACK_IMPORTED_MODULE_0__["default"], {
                      src: 'https://cdn.masterdiskon.com/masterdiskon/icon/fe/location.png',
                      layout: "fill"
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("small", {
                  style: {
                    fontSize: '10px',
                    lineHeight: '15px',
                    display: 'block'
                  },
                  children: purchase.detail.address
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "col-12 d-flex flex-column justify-content-end",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                style: {
                  fontSize: '12px'
                },
                className: "d-flex mb-0 justify-content-between align-items-center",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("small", {
                  className: "d-block",
                  children: "Check in"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("small", {
                  className: "d-block",
                  children: purchase.period.dateFrom
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                style: {
                  fontSize: '12px',
                  marginTop: '-10px'
                },
                className: "d-flex justify-content-between align-items-center",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("small", {
                  className: "d-block",
                  children: "Check out"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("small", {
                  className: "d-block",
                  children: purchase.period.dateTo
                })]
              })]
            })]
          })
        })]
      })
    })
  });
}

const ImageHotelStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "AccountPurchaseHotelDetail__ImageHotelStyled",
  componentId: "sc-1t1ev27-0"
})(["background:url(", ");background-size:cover;background-position:center center;background-repeat:no-repeat;width:100%;height:100%;border-radius:15px;"], props => props.img);
const RootStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "AccountPurchaseHotelDetail__RootStyled",
  componentId: "sc-1t1ev27-1"
})(["border-radius:15px;box-shadow:5px 5px 15px -5px rgba(0,0,0,.5);.title{width:200px;white-space:wrap;font-size:16px;font-weight:bold;color:#0070BA;overflow:hidden;text-overflow:ellipsis;}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountPurchaseHotelDetail);

/***/ }),

/***/ 2361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);




function AccountPurchaseProductDetail(props) {
  var _purchase$guests, _purchase$guests$list;

  const {
    purchase
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      classname: "card",
      style: {
        background: 'white',
        borderRadius: '15px',
        boxShadow: '5px 5px 10px -5px rgba(0, 0, 0, .5) ',
        marginTop: '10px',
        padding: '15px'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        classname: "card-body",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          class: "badge badge-warning",
          children: "Product"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "row mt-2",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-4",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              src: purchase.image,
              style: {
                width: '100%',
                objectFit: 'cover',
                height: '100px',
                borderRadius: '15px'
              }
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-8",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
              className: "mb-0 font-weight-bold text-primary",
              children: purchase.name
            })
          })]
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      classname: "card",
      style: {
        background: 'white',
        borderRadius: '15px',
        boxShadow: '5px 5px 10px -5px rgba(0, 0, 0, .5) ',
        marginTop: '10px',
        padding: '15px'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        classname: "card-body",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
          className: "font-weight-bold",
          children: "Guest"
        }), purchase === null || purchase === void 0 ? void 0 : (_purchase$guests = purchase.guests) === null || _purchase$guests === void 0 ? void 0 : (_purchase$guests$list = _purchase$guests.list) === null || _purchase$guests$list === void 0 ? void 0 : _purchase$guests$list.map(item => {
          var _item$nationality;

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
              className: "font-weight-bold d-block",
              style: {
                marginBottom: '-8px'
              },
              children: [item === null || item === void 0 ? void 0 : item.title, " ", item === null || item === void 0 ? void 0 : item.firstName, " ", item === null || item === void 0 ? void 0 : item.lastName]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
              children: (_item$nationality = item === null || item === void 0 ? void 0 : item.nationality) !== null && _item$nationality !== void 0 ? _item$nationality : 'Nationality'
            })]
          });
        })]
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountPurchaseProductDetail);

/***/ }),

/***/ 5742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_shop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6385);
/* harmony import */ var _biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9368);
/* harmony import */ var _biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








function DrawerPayments(props) {
  var _paymentCategory$find, _paymentCategory$find2;

  const {
    access_token
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.token);
  const {
    0: paymentCategory,
    1: setPaymentCategory
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const {
    0: activeTab,
    1: setActiveTab
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
  const {
    flightRepricing,
    handleChangePaymentMethod,
    toggle,
    open
  } = props;
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    _api_shop__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getPaymentCategory */ .Z.getPaymentCategory(access_token).then(res => {
      if (res.success) {
        setPaymentCategory(res.data);
      }
    });
  }, [flightRepricing]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    _api_shop__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getPaymentCategory */ .Z.getPaymentCategory(access_token).then(res => {
      if (res.success) {
        setPaymentCategory(res.data);
      }
    });
  }, []);

  const handleChangeTab = item => {
    setActiveTab(item === null || item === void 0 ? void 0 : item.id_payment_method_category);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__.BottomSheet, {
    open: open,
    onClose: toggle,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__.SheetContent, {
      style: {
        padding: '20px'
      },
      children: [activeTab && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h6", {
        className: "mb-3",
        onClick: handleChangeTab,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
          class: "fas fa-arrow-left"
        }), " Kembali"]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("ul", {
        class: "list-group",
        children: activeTab ? (_paymentCategory$find = paymentCategory.find(item => item.id_payment_method_category === activeTab)) === null || _paymentCategory$find === void 0 ? void 0 : (_paymentCategory$find2 = _paymentCategory$find.payment_method) === null || _paymentCategory$find2 === void 0 ? void 0 : _paymentCategory$find2.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
          onClick: () => handleChangePaymentMethod(item.id_payment_method),
          style: {
            cursor: 'pointer'
          },
          className: "list-group-item d-flex align-items-center border-right-0 border-left-0 border-top-0",
          children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: "mr-3",
            style: {
              height: '45px',
              width: '45px',
              position: 'relative'
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
              layout: "fill",
              objectFit: "contain",
              src: `https://cdn.masterdiskon.com/masterdiskon/icon/payment/${item.img_payment_method}`,
              className: "icon-payment"
            })
          }), " ", item.name_payment_method]
        })) : paymentCategory.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
          style: {
            cursor: 'pointer'
          },
          onClick: () => handleChangeTab(item),
          className: "list-group-item border-right-0 border-left-0 border-top-0",
          children: item.name_category
        }))
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawerPayments);

/***/ }),

/***/ 7255:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5566);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var _iconify_icons_fa_solid_clock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1673);
/* harmony import */ var _iconify_icons_fa_solid_clock__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_clock__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_fa_solid_angle_down__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3438);
/* harmony import */ var _iconify_icons_fa_solid_angle_down__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_angle_down__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6981);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_0__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];











function AccountPurchaseFlightDetail(props) {
  const {
    purchase
  } = props;
  const {
    0: departureOpen,
    1: setDepartueOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const {
    0: returnOpen,
    1: setReturnOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "card-body departure-flights",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h6", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("u", {
          children: "Departure"
        })
      }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("a", {
        href: "#",
        onClick: () => setDepartueOpen(!departureOpen),
        className: "float-right collapsed",
        children: ["Rincian", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
          icon: (_iconify_icons_fa_solid_angle_down__WEBPACK_IMPORTED_MODULE_3___default()),
          className: "ml-2"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "d-flex",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(ImageStyled, {
          src: purchase === null || purchase === void 0 ? void 0 : purchase.detail.onwardFlight.flight[0].image
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("h5", {
          className: "mb-0 ml-3",
          children: [" ", purchase === null || purchase === void 0 ? void 0 : purchase.detail.onwardFlight.flight[0].name]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: "d-flex justify-content-between",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(TimeLineStyled, {
          className: "mb-0 mt-1",
          children: purchase === null || purchase === void 0 ? void 0 : purchase.detail.onwardFlight.flight.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
              children: [" ", item.departure.time, " ", item.departure.name, " (", item.departure.code, ")", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
                className: "mb-0 text-muted",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("small", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("i", {
                    className: "fa fa-clock"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
                    className: "duration",
                    children: [" ", item.flyTime]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
                    className: "airline_code",
                    children: [" ", item.code, " "]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                    className: "mb-0 transit",
                    children: (purchase === null || purchase === void 0 ? void 0 : purchase.detail.onwardFlight.flight.length) === 1 ? 'Direct' : 'Transit'
                  })]
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
              children: [" ", item.arrival.time, " ", item.arrival.name, " (", item.arrival.code, ")"]
            })]
          }))
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Collapse, {
        isOpen: departureOpen,
        children: purchase === null || purchase === void 0 ? void 0 : purchase.detail.onwardFlight.flight.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "col-md-12 text-right",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("hr", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
              className: "badge badge-primary",
              children: ++index
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            className: "col-md-3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(ImageStyled, {
                src: item.image
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
                  children: [item.code, " | ", item.class]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                  children: item.name
                })]
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            className: "col-md-8",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(TimeLineStyled, {
              className: "mb-0",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
                  className: "mb-0",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("b", {
                    className: "fs-med",
                    children: [item.departure.time, " "]
                  }), item.departure.code, " ", item.departure.name]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                  children: item.departure.date
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                  className: "py-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
                      icon: (_iconify_icons_fa_solid_clock__WEBPACK_IMPORTED_MODULE_2___default())
                    }), " ", item.flyTime, " "]
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
                  className: "mb-0",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("b", {
                    className: "fs-med",
                    children: [item.arrival.time, " "]
                  }), " ", item.arrival.code, " ", item.arrival.name]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                  children: item.arrival.date
                })]
              })]
            })
          })]
        }))
      })]
    }), (purchase === null || purchase === void 0 ? void 0 : purchase.detail.returnFlight) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "card-body return-flights",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h6", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("u", {
          children: "Return"
        })
      }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("a", {
        href: "#",
        onClick: () => setReturnOpen(!returnOpen),
        className: "float-right collapsed",
        children: ["Rincian", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
          icon: (_iconify_icons_fa_solid_angle_down__WEBPACK_IMPORTED_MODULE_3___default()),
          className: "ml-2"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "d-flex",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(ImageStyled, {
          src: purchase === null || purchase === void 0 ? void 0 : purchase.detail.returnFlight.flight[0].image
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("h5", {
          className: "mb-0 ml-3",
          children: [" ", purchase === null || purchase === void 0 ? void 0 : purchase.detail.returnFlight.flight[0].name]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: "d-flex justify-content-between",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(TimeLineStyled, {
          className: "mb-0 mt-1",
          children: purchase === null || purchase === void 0 ? void 0 : purchase.detail.returnFlight.flight.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
              children: [" ", item.departure.time, " ", item.departure.name, " (", item.departure.code, ")", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
                className: "mb-0 text-muted",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("small", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("i", {
                    className: "fa fa-clock"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
                    className: "duration",
                    children: [" ", item.flyTime]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
                    className: "airline_code",
                    children: [" ", item.code, " "]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                    className: "mb-0 transit",
                    children: (purchase === null || purchase === void 0 ? void 0 : purchase.detail.returnFlight.flight.length) === 1 ? 'Direct' : 'Transit'
                  })]
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
              children: [" ", item.arrival.time, " ", item.arrival.name, " (", item.arrival.code, ")"]
            })]
          }))
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Collapse, {
        isOpen: returnOpen,
        children: purchase === null || purchase === void 0 ? void 0 : purchase.detail.returnFlight.flight.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "col-md-12 text-right",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("hr", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
              className: "badge badge-primary",
              children: ++index
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            className: "col-md-3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(ImageStyled, {
                src: item.image
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
                  children: [item.code, " | ", item.class]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                  children: item.name
                })]
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            className: "col-md-8",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(TimeLineStyled, {
              className: "mb-0",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
                  className: "mb-0",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("b", {
                    className: "fs-med",
                    children: [item.departure.time, " "]
                  }), item.departure.code, " ", item.departure.name]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                  children: item.departure.date
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                  className: "py-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
                      icon: (_iconify_icons_fa_solid_clock__WEBPACK_IMPORTED_MODULE_2___default())
                    }), " ", item.flyTime, " "]
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
                  className: "mb-0",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("b", {
                    className: "fs-med",
                    children: [item.arrival.time, " "]
                  }), " ", item.arrival.code, " ", item.arrival.name]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                  children: item.arrival.date
                })]
              })]
            })
          })]
        }))
      })]
    })]
  });
}

const TimeLineStyled = styled_components__WEBPACK_IMPORTED_MODULE_4___default().ul.withConfig({
  displayName: "AccountPurchaseFlightDetail__TimeLineStyled",
  componentId: "sc-18lq72t-0"
})(["position:relative;li{margin-left:0;min-height:33px;position:relative;background-color:#fff;list-style:none;}li:nth-last-child(0n+1)::before{width:0;}li::before{content:'';position:absolute;width:1px;background-color:#E7E7E7;top:3px;bottom:0;left:-18px;height:100%;}li::after{text-align:center;z-index:10;content:'';position:absolute;width:25px;height:25px;border:3px solid #fff;background-color:#036cb4;border-radius:50%;top:0;left:-30px;}"]);
const ImageStyled = styled_components__WEBPACK_IMPORTED_MODULE_4___default().img.withConfig({
  displayName: "AccountPurchaseFlightDetail__ImageStyled",
  componentId: "sc-18lq72t-1"
})(["padding:.25rem !important;background-color:#fff !important;border:1px solid #dee2e6 !important;border-radius:.25rem !important;width:130px;position:relative;height:60px !important;"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountPurchaseFlightDetail);
});

/***/ }),

/***/ 6035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);




function AccountPurchaseHotelDetail(props) {
  var _purchase$options$, _purchase$room, _purchase$room2, _purchase$room3, _purchase$specialRequ;

  const {
    purchase
  } = props;

  const renderStar = () => {
    let arr = [];

    for (let index = 0; index < Number(purchase.class); index++) {
      arr[index] = index;
    }

    return arr.map(() => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
      className: "text-warning fa fa-star"
    }));
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "card-product",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "card-body",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-md-3 col-3",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              src: purchase.image,
              className: "mr-3 img-fluid",
              style: {
                height: '140px !important'
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "col-md-9 col-9",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
              className: "mb-0 text-primary",
              children: [purchase.name, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: renderStar()
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "mb-0",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                  className: "fa fa-map-marker"
                }), " ", purchase.detail.city]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              children: purchase.detail.address
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "d-flex flex-row justify-content-between",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "mb-0",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                      children: "Check-in"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), purchase.period.dateFrom]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "mb-0",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                      children: "Check-out"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), purchase.period.dateTo]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "mb-0",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                      children: "Durasi"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), purchase.period.type]
                    })]
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                  className: "mt-1",
                  children: "Detail Kamar"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "d-flex my-2 flex-row justify-content-between",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: "Room type"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: (purchase === null || purchase === void 0 ? void 0 : (_purchase$options$ = purchase.options[0]) === null || _purchase$options$ === void 0 ? void 0 : _purchase$options$.name) || '-'
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "d-flex my-2 flex-row justify-content-between",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: "Fasilitas sarapan"
                  }), purchase !== null && purchase !== void 0 && (_purchase$room = purchase.room) !== null && _purchase$room !== void 0 && _purchase$room.breakfastIncluded ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-success",
                    children: "Termasuk sarapan"
                  }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-danger",
                    children: "Tidak termasuk sarapan"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "d-flex my-2 flex-row justify-content-between",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: "Tamu"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    children: [purchase === null || purchase === void 0 ? void 0 : (_purchase$room2 = purchase.room) === null || _purchase$room2 === void 0 ? void 0 : _purchase$room2.numOfAdults, " Tamu"]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "d-flex my-2 flex-row justify-content-between",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: "Kamar"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    children: [purchase === null || purchase === void 0 ? void 0 : (_purchase$room3 = purchase.room) === null || _purchase$room3 === void 0 ? void 0 : _purchase$room3.numOfRoom, " Kamar"]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "d-flex my-2 flex-row justify-content-between",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: "Permintaan Khusus"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: (_purchase$specialRequ = purchase.specialRequest) !== null && _purchase$specialRequ !== void 0 ? _purchase$specialRequ : '-'
                  })]
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                  className: "mb-0",
                  children: ["Checkin:  ", purchase.period.dateFrom]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-4",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                  className: "mb-0",
                  children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "font-weight-bold",
                    children: "Kebijakan Pembatalan:"
                  }), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), " ", purchase.room.cancellationPolicy]
                })
              })]
            })]
          })]
        })
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountPurchaseHotelDetail);

/***/ }),

/***/ 8719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



function AccountPurchaseProductDetail(props) {
  const {
    purchase
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "card-body",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-md-4",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          src: purchase.image,
          className: "mr-3 img-fluid",
          alt: purchase.name
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "col-md-8",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          children: purchase.code
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
          className: "mb-0",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
            children: purchase.name
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "mt-2",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "mb-0",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
          children: "Description"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        dangerouslySetInnerHTML: {
          __html: purchase.detail.description
        }
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "d-flex justify-content-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        className: "mb-0",
        children: [purchase.detail.price.qty, " x Rp", purchase.detail.price.price.toLocaleString()]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
        className: "mb-0 text-primary",
        children: ["Rp", purchase.price.subtotal.toLocaleString()]
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountPurchaseProductDetail);

/***/ }),

/***/ 7342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function StarRating(props) {
  const {
    rating,
    setRating
  } = props;
  const {
    0: hover,
    1: setHover
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: "d-flex",
    children: [...Array(5)].map((star, index) => {
      index += 1;
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
        style: {
          fontSize: '18px'
        },
        className: index <= (hover || rating) ? 'text-warning' : 'text-dark',
        onClick: () => setRating(index),
        onMouseEnter: () => setHover(index),
        onMouseLeave: () => setHover(rating),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("i", {
          class: "fas fa-star    "
        })
      }, index);
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StarRating);

/***/ }),

/***/ 4264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








function StatusLabel(props) {
  var _purchase$payments, _purchase$payments2, _purchase$payments3;

  const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.user);
  const {
    purchase,
    setClickable,
    clickable,
    handleOpenPayment,
    handleSubmitIssued,
    setTokenIssued
  } = props;
  const isTabletOrMobile = (0,react_responsive__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)({
    query: '(max-width:1224px)'
  });
  console.log(purchase, user);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [purchase.status.id === 13 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
        className: "mb-0",
        children: "Batas waktu pembayaran habis."
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h4", {
        className: "mt-0",
        children: "Pesanan Dibatalkan"
      })]
    }), purchase.status.id === 3 && (purchase.product === 'hotel' || purchase.product === 'product') && !isTabletOrMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [" ", user.role == 'user' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
          children: "Lakukan pembayaran untuk melanjutkan pesanan"
        }), purchase !== null && purchase !== void 0 && (_purchase$payments = purchase.payments) !== null && _purchase$payments !== void 0 && _purchase$payments.token ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "btn-group btn-block",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
            id: "pay-button",
            onClick: () => {
              setClickable(true);
              window.snap.pay(purchase === null || purchase === void 0 ? void 0 : purchase.payments.token, {
                onSuccess: function () {
                  setClickable(false);
                },
                onPending: function () {
                  setClickable(false);
                },
                onError: function () {
                  setClickable(false);
                },
                onClose: function () {
                  setClickable(false);
                }
              });
            },
            disabled: clickable,
            style: {
              width: '70%'
            },
            className: "btn btn-primary",
            children: "BAYAR SEKARANG"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
            onClick: handleOpenPayment,
            type: "button",
            className: "btn btn-info",
            children: "Ganti Metode"
          })]
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
          onClick: handleOpenPayment,
          type: "button",
          className: "btn btn-block btn-info",
          children: "Pilih Metode Pembayaran"
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
          children: "Silahkan cek email untuk mendapatkan kode token issued."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "col-9",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: "form-group",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", {
                type: "text",
                className: "textonly form-control",
                name: "tokis",
                id: "tokis",
                onChange: e => setTokenIssued(e.target.value)
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "col-3",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: "form-group",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                type: "button",
                class: "btn btn-block btn-primary ",
                onClick: handleSubmitIssued,
                children: "ISSUED"
              })
            })
          })]
        })]
      })]
    }), purchase.status.id === 3 && purchase.status.vendor === 'BLOCKINGINPROGRESS' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h5", {
      children: "Mohon menunggu, pesanan sedang diproses maskapai"
    }), purchase.status.id === 3 && purchase.status.vendor === 'BLOCKED' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [" ", user.role == 'user' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
          children: "Lakukan pembayaran untuk melanjutkan pesanan"
        }), purchase !== null && purchase !== void 0 && (_purchase$payments2 = purchase.payments) !== null && _purchase$payments2 !== void 0 && _purchase$payments2.token ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "btn-group btn-block",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
            id: "pay-button",
            onClick: () => {
              setClickable(true);
              window.snap.pay(purchase === null || purchase === void 0 ? void 0 : purchase.payments.token, {
                onSuccess: function () {
                  setClickable(false);
                },
                onPending: function () {
                  setClickable(false);
                },
                onError: function () {
                  setClickable(false);
                },
                onClose: function () {
                  setClickable(false);
                }
              });
            },
            disabled: clickable,
            style: {
              width: '70%'
            },
            className: "btn btn-primary",
            children: "BAYAR SEKARANG"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
            onClick: handleOpenPayment,
            type: "button",
            className: "btn btn-info",
            children: "Ganti Metode"
          })]
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
          onClick: handleOpenPayment,
          type: "button",
          className: "btn btn-block btn-info",
          children: "Pilih Metode Pembayaran"
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
          children: "Silahkan cek email untuk mendapatkan kode token issued."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "col-9",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: "form-group",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", {
                type: "text",
                className: "textonly form-control ",
                name: "lastName",
                onChange: e => setTokenIssued(e.target.value)
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "col-3",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: "form-group",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                type: "button",
                class: "btn btn-block btn-primary  ",
                onClick: handleSubmitIssued,
                children: "ISSUED"
              })
            })
          })]
        })]
      })]
    }), purchase.status.id === 3 && purchase.status.vendor === 'DIRECT' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [" ", user.role == 'user' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
          children: "Lakukan pembayaran untuk melanjutkan pesanan"
        }), purchase !== null && purchase !== void 0 && (_purchase$payments3 = purchase.payments) !== null && _purchase$payments3 !== void 0 && _purchase$payments3.token ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "btn-group btn-block",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
            id: "pay-button",
            onClick: () => {
              setClickable(true);
              window.snap.pay(purchase === null || purchase === void 0 ? void 0 : purchase.payments.token, {
                onSuccess: function () {
                  setClickable(false);
                },
                onPending: function () {
                  setClickable(false);
                },
                onError: function () {
                  setClickable(false);
                },
                onClose: function () {
                  setClickable(false);
                }
              });
            },
            disabled: clickable,
            style: {
              width: '70%'
            },
            className: "btn btn-primary",
            children: "BAYAR SEKARANG"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
            onClick: handleOpenPayment,
            type: "button",
            className: "btn btn-info",
            children: "Ganti Metode"
          })]
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
          onClick: handleOpenPayment,
          type: "button",
          className: "btn btn-block btn-info",
          children: "Pilih Metode Pembayaran"
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
          children: "Silahkan cek email untuk mendapatkan kode token issued."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "col-9",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: "form-group",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", {
                type: "text",
                className: "textonly form-control ",
                name: "lastName",
                onChange: e => setTokenIssued(e.target.value)
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "col-3",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: "form-group",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                type: "button",
                class: "btn btn-block btn-primary  ",
                onClick: handleSubmitIssued,
                children: "ISSUED"
              })
            })
          })]
        })]
      })]
    }), purchase.status.id === 25 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
      children: "Pesanan anda masih dalam proses pembatalan"
    }), purchase.status.id === 5 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
      children: "Pembayaran sudah diterima. Mohon menunggu, pesanan sedang diproses"
    }), (purchase.status.id === 9 || purchase.status.vendor === 'CONFIRMED' && !isTabletOrMobile) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: ["Pesanan berhasil ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "col-md-12",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
            href: purchase.doc.eticket,
            target: "_blank",
            className: "btn btn-primary btn-block mt-3",
            children: "eVoucher"
          })
        })
      })]
    }), purchase.status.id === 11 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h5", {
      children: "Pesanan Dibatalkan."
    }), purchase.status.id === 19 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h5", {
      children: "Terjadi kesalahan sistem."
    }), purchase.status.id === 17 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h5", {
      children: "Pembayaran anda ditolak"
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatusLabel);

/***/ })

};
;