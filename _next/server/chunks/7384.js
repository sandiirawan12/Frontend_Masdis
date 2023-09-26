"use strict";
exports.id = 7384;
exports.ids = [7384];
exports.modules = {

/***/ 7384:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6981);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2816);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_TabPayment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4681);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _AccountPurchaseHotelDetail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6035);
/* harmony import */ var _AccountPurchaseFlightDetail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7255);
/* harmony import */ var _shared_StatusLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4264);
/* harmony import */ var _AccountPurchaseProductDetail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8719);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shared_StarRating__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7342);
/* harmony import */ var _api_shop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6385);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _api_master__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(27);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9103);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AccountPurchaseFlightDetail__WEBPACK_IMPORTED_MODULE_9__]);
_AccountPurchaseFlightDetail__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















const purchaseComponent = {
  hotel: _AccountPurchaseHotelDetail__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
  flight: _AccountPurchaseFlightDetail__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
  product: _AccountPurchaseProductDetail__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z
};

function AccountPurchaseDetail() {
  var _purchase$status2, _purchase$guest$, _purchase$guest$2, _purchase$guest$3, _purchase$guest$4, _purchase$guest$5, _purchase$guest$5$pas, _purchase$guest$6, _purchase$guest$6$pas, _purchase$guest$7, _purchase$guest$7$pas, _purchase$guest$8, _getRate, _purchase$payments, _purchase$payments2, _purchase$payments2$h, _purchase$payments3, _purchase$payments3$h, _purchase$payments4, _purchase$payments4$s, _purchase$payments5, _purchase$payments5$s;

  const {
    access_token
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.token);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    0: purchase,
    1: setPurchase
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  const {
    0: countDown,
    1: setCountDown
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const {
    0: openPaymentChange,
    1: setOpenPaymentChange
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const {
    0: openFormRefund,
    1: setOpenFormRefund
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: clickable,
    1: setClickable
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: tokenIssued,
    1: setTokenIssued
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: paymentMethodSelected,
    1: setPaymentMethodSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
  const {
    0: openSsr,
    1: setOpenSsr
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: listSsr,
    1: setListSsr
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: changePayment,
    1: setChangePayment
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: rating,
    1: setRating
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  const {
    0: helpful,
    1: setHelpful
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  const {
    0: fullReview,
    1: setFullReview
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    kebersihan: 0,
    kenyamanan: 0,
    lokasi: 0,
    fasilitas: 0,
    staff: 0,
    harga: 0,
    layanan: 0,
    parkir: 0,
    makanan: 0
  });
  const {
    0: bank,
    1: setBank
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: cancelRequest,
    1: setCancelRequest
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});

  const handleSetFullReview = (name, value) => {
    setFullReview(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  const {
    0: review,
    1: setReview
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    title_review: '',
    content_review: ''
  });

  const handleChangeReview = e => {
    const {
      value,
      name
    } = e.target;
    setReview(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  const handleSubmitIssued = () => {
    let obj = tokenIssued;

    try {
      if (obj === '') {
        react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(`Token tidak boleh kosong`);
      } else {
        sweetalert2__WEBPACK_IMPORTED_MODULE_15___default().fire({
          title: "Apakah Anda sudah yakin?",
          text: "Dengan menyetujuinya, Anda yakin untuk melanjutkan pemesanan ini.",
          icon: "info",
          buttons: ['Tidak, batalkan!', 'Ya, saya yakin!'],
          dangerMode: false
        }).then(function (isConfirm) {
          if (isConfirm) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_15___default().fire({
              title: 'Pesanan diproses!',
              text: 'Pesanan Anda sedang kami proses.!',
              icon: 'success',
              closeOnClickOutside: false,
              closeOnEsc: false,
              timer: 15000,
              showConfirmButton: false
            }).then(function () {
              const req = {
                "product": purchase.product,
                "key": purchase.codeId,
                "token": obj
              };
              const number = purchase.period.codeId;
              const reqInv = {
                "note": 'B2B',
                "tags": purchase.product,
                "id_order": [number.toString()],
                "idOrder": [number.toString()]
              };
              _api_user__WEBPACK_IMPORTED_MODULE_4__/* ["default"].submitIssued */ .Z.submitIssued(access_token, req).then(res => {
                if (res.success) {
                  console.log("body", JSON.stringify(reqInv));
                  _api_user__WEBPACK_IMPORTED_MODULE_4__/* ["default"].submitInvoice */ .Z.submitInvoice(access_token, reqInv).then(res => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_15___default().fire({
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
                  react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error('Pesanan Gagal Dipesan "' + res.message + '"');
                }
              });
            });
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_15___default().fire("Dibatalkan", "Anda membatalkan untuk melakukan pemesanan ini.", "error");
          }
        });
      } // let objString = JSON.parse(JSON.stringify(obj));

    } catch (error) {
      console.error(error); // output: TypeError: cyclic object value
    }
  };

  const handleSubmitInvoice = () => {
    let obj = tokenIssued;

    try {
      // if (obj === '') {
      //     toast.error(`Token tidak boleh kosong`)
      // } else {
      sweetalert2__WEBPACK_IMPORTED_MODULE_15___default().fire({
        title: "Lanjut Cetak Invoice?",
        // text: "Dengan menyetujuinya, Anda yakin untuk melanjutkan pemesanan ini.",
        icon: "info",
        buttons: ['Tidak, batalkan!', 'Ya, saya yakin!'],
        dangerMode: false
      }).then(function (isConfirm) {
        if (isConfirm) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_15___default().fire({
            title: 'Pesanan diproses!',
            text: 'Pesanan Anda sedang kami proses.!',
            icon: 'success',
            closeOnClickOutside: false,
            closeOnEsc: false,
            timer: 1000
          }).then(function () {
            const reqInv = {
              "tags": purchase.product,
              "id_order": [purchase.codeId],
              "idOrder": purchase.codeId,
              "note": purchase.code
            };
            _api_user__WEBPACK_IMPORTED_MODULE_4__/* ["default"].submitInvoice */ .Z.submitInvoice(access_token, reqInv).then(res => {
              if (res.success) {
                react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(`Pesanan Anda berhasil kami proses ` + param_issud);
              } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error('Gagal, ' + res.message);
              }
            });
          });
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_15___default().fire("Dibatalkan", "Anda membatalkan untuk melakukan pemesanan ini.", "error");
        }
      }); // }
      // let objString = JSON.parse(JSON.stringify(obj));
    } catch (error) {
      console.error(error); // output: TypeError: cyclic object value
    }
  };

  const handleSubmitReview = () => {
    const data = _objectSpread(_objectSpread({}, review), {}, {
      id_order: router.query.id,
      id_review_type: 2,
      helpful,
      rating,
      fullreview: fullReview
    });

    _api_shop__WEBPACK_IMPORTED_MODULE_14__/* ["default"].addReview */ .Z.addReview(data, access_token).then(res => {
      if (res.success) {
        react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(`Ulasan berhasil dikirim`);
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error('Ulasan tidak lengap');
      }
    });
  };

  const handleOpenPayment = () => {
    setOpenPaymentChange(state => !state);
  };

  const handleChangePaymentMethod = id => {
    setPaymentMethodSelected(id);
  };

  const handleChangePayment = () => {
    _api_user__WEBPACK_IMPORTED_MODULE_4__/* ["default"].changePaymentMethod */ .Z.changePaymentMethod(access_token, {
      product: purchase.product,
      key: router.query.id,
      paymentMethod: paymentMethodSelected
    }).then(res => {
      if (res.success) {
        react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success('Metode pembayaran berhasil diubah');
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error('Metode pembayaran sudah tidak diubah');
      }

      setChangePayment(prev => !prev);
      handleOpenPayment();
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (purchase) {
      setInterval(() => {
        var _purchase$status;

        const time = Date.parse(moment__WEBPACK_IMPORTED_MODULE_5___default()(purchase === null || purchase === void 0 ? void 0 : (_purchase$status = purchase.status) === null || _purchase$status === void 0 ? void 0 : _purchase$status.timelimit, 'DD MMM YYYY HH:mm').toDate()) - Date.parse(new Date());

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
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setLoading(true);

    if (router.isReady) {
      _api_user__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getPurchase */ .Z.getPurchase(access_token, {
        key: router.query.id
      }).then(res => {
        if (res.success) {
          setPurchase(res.data);
        }

        setLoading(false);
      });
    }
  }, [router.query.id, changePayment]);

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

  const handleCancelled = () => {
    sweetalert2__WEBPACK_IMPORTED_MODULE_15___default().fire({
      title: 'Anda yakin ingin membatalkan pesanan?',
      icon: 'info',
      text: purchase.room.cancellationPolicy,
      confirmButtonText: 'Yakin',
      confirmButtonColor: '#0070BA'
    }).then(res => {
      if (res.isConfirmed) {
        let condition = purchase !== null && purchase !== void 0 && purchase.isRefund ? cancelRequest['accountNumber'] && cancelRequest['customerName'] && cancelRequest['customerName'] && cancelRequest['reason'] : true;

        if (condition) {
          _api_user__WEBPACK_IMPORTED_MODULE_4__/* ["default"].createCancellation */ .Z.createCancellation(access_token, _objectSpread(_objectSpread({}, cancelRequest), {}, {
            key: router.query.id,
            product: purchase.product
          })).then(res => {
            if (res.success) {
              react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success('Pembatalan berhasil');
              window.location.reload();
            } else {
              react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(res.message);
            }
          });
        } else {
          react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error('Data tidak lengkap');
        }
      }
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    _api_master__WEBPACK_IMPORTED_MODULE_16__/* ["default"].getPayments */ .Z.getPayments(access_token).then(res => {
      if (res.success) {
        setBank(res.data);
      }
    });
  }, []);

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
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
      style: {
        height: '50vh',
        marginBottom: '5rem'
      },
      className: "d-flex flex-column align-items-center justify-content-center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("img", {
        src: "https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/pulse-spinner.svg"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("h4", {
        children: "Sedang menyiapkan data..."
      })]
    });
  }

  if (!purchase) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
      style: {
        height: '50vh',
        marginBottom: '5rem'
      },
      className: "d-flex flex-column align-items-center justify-content-center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("h4", {
        children: "Data pesanan tidak ditemukan"
      })
    });
  }

  const PurchaseComponent = purchaseComponent[purchase.product];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Fragment, {
    children: [moment__WEBPACK_IMPORTED_MODULE_5___default()(Date()).isBefore(moment__WEBPACK_IMPORTED_MODULE_5___default()(purchase === null || purchase === void 0 ? void 0 : (_purchase$status2 = purchase.status) === null || _purchase$status2 === void 0 ? void 0 : _purchase$status2.timelimit, 'DD MMM YYYY HH:mm')) && purchase.status.id === 3 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("section", {
      id: "timer",
      className: "bg-danger py-2",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
          className: "d-flex justify-content-center align-items-center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("span", {
            className: "mr-3 text-white",
            children: "Batas Pembayaran"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("span", {
            id: "hitungmundur",
            className: "d-flex",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
              className: "rounded bg-light opacity-50 border border-dark text-center p-1 mr-2",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("b", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("span", {
                  className: "angka",
                  children: countDown.hours
                })
              }), " h "]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
              className: "rounded bg-white opacity-50 border border-dark text-center p-1 mr-2",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("b", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("span", {
                  className: "angka",
                  children: countDown.minutes
                })
              }), " m "]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
              className: "rounded bg-white opacity-50 border border-dark text-center p-1 mr-2",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("b", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("span", {
                  className: "angka",
                  children: countDown.seconds
                })
              }), " s "]
            })]
          })]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("section", {
      className: "my-3",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
            className: "col-md-8 kotak-md-1 px-0-sm",
            children: [purchase.isCancel && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("button", {
              onClick: () => purchase !== null && purchase !== void 0 && purchase.isRefund ? setOpenFormRefund(v => !v) : handleCancelled(),
              type: "button",
              className: "btn mb-3 btn-danger btn-md btn-block",
              children: "Batalkan Pesanan"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
              className: "card mb-4",
              style: {
                borderRadius: '15px'
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
                className: "card-header py-3",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("h6", {
                  className: "font-weight-bold text-primary",
                  children: "Detail Pesanan"
                })
              }), purchase.status.id === 13 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
                className: `card-body border-bottom bg-danger py-2 bayar-disini rounded-bottom text-white`,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_shared_StatusLabel__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                  clickable: clickable,
                  handleOpenPayment: handleOpenPayment,
                  handleSubmitIssued: handleSubmitIssued,
                  purchase: purchase,
                  setClickable: setClickable,
                  setTokenIssued: setTokenIssued
                })
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
                className: `card-body border-bottom bg-warning py-2 bayar-disini rounded-bottom`,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_shared_StatusLabel__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                  clickable: clickable,
                  handleOpenPayment: handleOpenPayment,
                  handleSubmitIssued: handleSubmitIssued,
                  purchase: purchase,
                  setClickable: setClickable,
                  setTokenIssued: setTokenIssued
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
              className: "card mb-4",
              style: {
                borderRadius: '20px'
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
                className: "card-header border-top",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("span", {
                  className: "card-title",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("b", {
                    children: "Produk"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                className: "card-product",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(PurchaseComponent, {
                  purchase: purchase
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("hr", {}), purchase.guest && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                  className: "card-body",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("h5", {
                    children: "Tamu"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
                    className: "table-responsive",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("table", {
                      id: "myTable",
                      className: "table m-0 table-striped table-hover table-sm",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("thead", {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("tr", {
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("th", {
                            children: "No"
                          }), ((_purchase$guest$ = purchase.guest[0]) === null || _purchase$guest$ === void 0 ? void 0 : _purchase$guest$.title) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("th", {
                            children: "Title"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("th", {
                            children: "Nama"
                          }), ((_purchase$guest$2 = purchase.guest[0]) === null || _purchase$guest$2 === void 0 ? void 0 : _purchase$guest$2.dob) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("th", {
                            children: "Tanggal Lahir"
                          }), ((_purchase$guest$3 = purchase.guest[0]) === null || _purchase$guest$3 === void 0 ? void 0 : _purchase$guest$3.type) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("th", {
                            children: "Tipe"
                          }), ((_purchase$guest$4 = purchase.guest[0]) === null || _purchase$guest$4 === void 0 ? void 0 : _purchase$guest$4.identificationNumber) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("th", {
                            children: "NIK"
                          }), ((_purchase$guest$5 = purchase.guest[0]) === null || _purchase$guest$5 === void 0 ? void 0 : (_purchase$guest$5$pas = _purchase$guest$5.passport) === null || _purchase$guest$5$pas === void 0 ? void 0 : _purchase$guest$5$pas.nat) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("th", {
                            children: "Negara"
                          }), ((_purchase$guest$6 = purchase.guest[0]) === null || _purchase$guest$6 === void 0 ? void 0 : (_purchase$guest$6$pas = _purchase$guest$6.passport) === null || _purchase$guest$6$pas === void 0 ? void 0 : _purchase$guest$6$pas.doi) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("th", {
                            children: "Passport Issue"
                          }), ((_purchase$guest$7 = purchase.guest[0]) === null || _purchase$guest$7 === void 0 ? void 0 : (_purchase$guest$7$pas = _purchase$guest$7.passport) === null || _purchase$guest$7$pas === void 0 ? void 0 : _purchase$guest$7$pas.doe) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("th", {
                            children: "Expired Passport"
                          }), ((_purchase$guest$8 = purchase.guest[0]) === null || _purchase$guest$8 === void 0 ? void 0 : _purchase$guest$8.ssr) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("th", {
                            children: "Addon"
                          })]
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("tbody", {
                        children: purchase.guest.map((item, index) => {
                          var _item$passport, _item$passport2, _item$passport3, _item$passport4, _item$passport5, _item$passport6;

                          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("tr", {
                            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("td", {
                              children: ++index
                            }), (item === null || item === void 0 ? void 0 : item.title) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("td", {
                              children: item === null || item === void 0 ? void 0 : item.title
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("td", {
                              children: [item.firstName, " ", item.lastName]
                            }), (item === null || item === void 0 ? void 0 : item.dob) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("td", {
                              children: item.dob
                            }), (item === null || item === void 0 ? void 0 : item.type) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("td", {
                              children: item.type
                            }), (item === null || item === void 0 ? void 0 : item.identificationNumber) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("td", {
                              children: item.identificationNumber
                            }), (item === null || item === void 0 ? void 0 : (_item$passport = item.passport) === null || _item$passport === void 0 ? void 0 : _item$passport.nat) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("td", {
                              children: item === null || item === void 0 ? void 0 : (_item$passport2 = item.passport) === null || _item$passport2 === void 0 ? void 0 : _item$passport2.nat
                            }), (item === null || item === void 0 ? void 0 : (_item$passport3 = item.passport) === null || _item$passport3 === void 0 ? void 0 : _item$passport3.doi) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("td", {
                              children: item === null || item === void 0 ? void 0 : (_item$passport4 = item.passport) === null || _item$passport4 === void 0 ? void 0 : _item$passport4.doi
                            }), (item === null || item === void 0 ? void 0 : (_item$passport5 = item.passport) === null || _item$passport5 === void 0 ? void 0 : _item$passport5.doe) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("td", {
                              children: item === null || item === void 0 ? void 0 : (_item$passport6 = item.passport) === null || _item$passport6 === void 0 ? void 0 : _item$passport6.doe
                            }), (item === null || item === void 0 ? void 0 : item.ssr) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("td", {
                              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("button", {
                                onClick: () => handleOpenSsr(item.ssr),
                                type: "button",
                                className: "btn btn-sm btn-primary",
                                children: "Check"
                              })
                            })]
                          }, index);
                        })
                      })]
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("hr", {}), purchase.product === 'flight' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                  className: "card-body",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("h5", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("b", {
                      children: "Tarif"
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
                    className: "table-responsive",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("table", {
                      className: "table table-bordered mb-0",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("thead", {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("tr", {
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("th", {
                            children: "No"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("th", {
                            children: "Type"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("th", {
                            children: "Qty"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("th", {
                            children: "Price"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("th", {
                            children: "Fee"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("th", {
                            children: "Tax"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("th", {
                            children: "Addons"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("th", {
                            children: "Total"
                          })]
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("tbody", {
                        className: "price-flight-list",
                        children: (_getRate = getRate()) === null || _getRate === void 0 ? void 0 : _getRate.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("tr", {
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("td", {
                            children: ++index
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("td", {
                            children: item.type
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("td", {
                            children: item.count
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("td", {
                            children: ["Rp", item.subtotal.toLocaleString()]
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("td", {
                            children: ["Rp", item.fee.toLocaleString()]
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("td", {
                            children: ["Rp", item.tax.toLocaleString()]
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("td", {
                            children: ["Rp", item.addon.toLocaleString()]
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("td", {
                            children: ["Rp", item.total.toLocaleString()]
                          })]
                        }))
                      })]
                    })
                  })]
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
                className: "card-header",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("span", {
                  className: "card-title",
                  children: "Kontak"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
                className: "card-body",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
                    className: "col-md-4",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("strong", {
                          children: "Nama"
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("p", {
                        children: [purchase === null || purchase === void 0 ? void 0 : purchase.contact.firstName, " ", purchase === null || purchase === void 0 ? void 0 : purchase.contact.lastName]
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
                    className: "col-md-4",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("strong", {
                          children: "Telepon"
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("p", {
                        children: ["+", purchase === null || purchase === void 0 ? void 0 : purchase.contact.phoneCode, " ", purchase === null || purchase === void 0 ? void 0 : purchase.contact.phone]
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
                    className: "col-md-4",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("strong", {
                          children: "Email"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("p", {
                        children: purchase === null || purchase === void 0 ? void 0 : purchase.contact.email
                      })]
                    })
                  })]
                })
              })]
            }), purchase.product === 'hotel' && purchase.status.id === 9 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
              className: "row",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
                  class: "card",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                    class: "card-body",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("h4", {
                      children: "Ulasan"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                        children: "Judul Ulasan"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("input", {
                        type: "text",
                        onChange: handleChangeReview,
                        name: "title_review",
                        value: review.title_review,
                        className: "form-control"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                        children: "Isi Ulasan"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("textarea", {
                        onChange: handleChangeReview,
                        name: "content_review",
                        value: review.content_review,
                        className: "form-control",
                        rows: 3
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                      className: "row",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                        className: "col-md-4",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                          className: "form-group",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                            children: "Rating"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_shared_StarRating__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            rating: rating,
                            setRating: setRating
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                          className: "form-group",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                            children: "HelpFull"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_shared_StarRating__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            rating: helpful,
                            setRating: setHelpful
                          })]
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                        className: "col-md-4",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                          className: "form-group",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                            children: "Kebersihan"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_shared_StarRating__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            rating: fullReview['kebersihan'],
                            setRating: val => handleSetFullReview('kebersihan', val)
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                          className: "form-group",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                            children: "Kenyamanan"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_shared_StarRating__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            rating: fullReview['kenyamanan'],
                            setRating: val => handleSetFullReview('kenyamanan', val)
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                          className: "form-group",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                            children: "Lokasi"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_shared_StarRating__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            rating: fullReview['lokasi'],
                            setRating: val => handleSetFullReview('lokasi', val)
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                          className: "form-group",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                            children: "Layanan"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_shared_StarRating__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            rating: fullReview['layanan'],
                            setRating: val => handleSetFullReview('layanan', val)
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                          className: "form-group",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                            children: "Makanan"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_shared_StarRating__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            rating: fullReview['makanan'],
                            setRating: val => handleSetFullReview('makanan', val)
                          })]
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                        className: "col-md-4",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                          className: "form-group",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                            children: "Fasilitas"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_shared_StarRating__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            rating: fullReview['fasilitas'],
                            setRating: val => handleSetFullReview('fasilitas', val)
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                          className: "form-group",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                            children: "Staff"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_shared_StarRating__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            rating: fullReview['staff'],
                            setRating: val => handleSetFullReview('staff', val)
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                          className: "form-group",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                            children: "Harga"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_shared_StarRating__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            rating: fullReview['harga'],
                            setRating: val => handleSetFullReview('harga', val)
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                          className: "form-group",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                            children: "Parkir"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_shared_StarRating__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            rating: fullReview['parkir'],
                            setRating: val => handleSetFullReview('parkir', val)
                          })]
                        })]
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
                      className: "d-flex justify-content-end w-100",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("button", {
                        type: "button",
                        onClick: handleSubmitReview,
                        className: "btn btn-primary",
                        children: "Submit"
                      })
                    })]
                  })
                })
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
            className: "col-md-4 kotak-md-2 order-1 px-0-sm",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
              className: "card shadow card-body mb-3 border-0 bg-primary text-white",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("p", {
                className: "mb-0",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("small", {
                  children: "TOTAL PEMBELIAN"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("h3", {
                children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("b", {
                  children: ["Rp", purchase === null || purchase === void 0 ? void 0 : purchase.price.total.toLocaleString()]
                })]
              })]
            }), (purchase === null || purchase === void 0 ? void 0 : purchase.codeinv) != 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
              className: `card-body border-bottom bg-warning py-2 bayar-disini rounded-bottom`,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
                  className: "col-md-12",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
                    className: "form-group",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("a", {
                      href: `https://cdn.masterdiskon.com/masterdiskon/order/invoice/2023/` + (purchase === null || purchase === void 0 ? void 0 : purchase.codeinv) + `.pdf?`,
                      target: "_blank",
                      type: "button",
                      class: "btn btn-block btn-primary  ",
                      children: "Cetak Invoice"
                    })
                  })
                })
              })
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Fragment, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
              className: "card shadow mb-3 border-0",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                className: "card-body border-bottom",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("p", {
                  className: "mb-0 text-muted",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("small", {
                    children: "NO PESANAN"
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("span", {
                  children: purchase === null || purchase === void 0 ? void 0 : purchase.code
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                className: "card-body border-bottom",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("p", {
                  className: "mb-0 text-muted",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("small", {
                    children: "STATUS PESANAN"
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("p", {
                  className: `badge badge-${purchase === null || purchase === void 0 ? void 0 : purchase.status.color} mb-0`,
                  children: purchase === null || purchase === void 0 ? void 0 : purchase.status.name
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("p", {
                  className: "mb-0",
                  children: purchase === null || purchase === void 0 ? void 0 : purchase.status.description
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                className: "card-body border-bottom",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("p", {
                  className: "mb-0 text-muted",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("small", {
                    children: "RIWAYAT PESANAN"
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
                  className: "riwayat-pesanan",
                  children: purchase === null || purchase === void 0 ? void 0 : purchase.status.history.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                    className: "d-flex justify-content-between my-2",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("span", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("strong", {
                        children: item.status
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("span", {
                      children: item.date
                    })]
                  }))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                className: "card-body",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("p", {
                  className: "mb-0 text-muted",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("small", {
                    children: "RINCIAN PEMBAYARAN"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                  className: "d-flex justify-content-between my-2",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("span", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("strong", {
                      children: "Subtotal"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("span", {
                    children: ["Rp", purchase === null || purchase === void 0 ? void 0 : purchase.price.subtotal.toLocaleString()]
                  })]
                }), purchase.product === 'flight' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                  className: "d-flex justify-content-between my-2",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("span", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("strong", {
                      children: "Pajak dan lainnya "
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("span", {
                    className: "tax-and-more",
                    children: ["Rp", ((purchase === null || purchase === void 0 ? void 0 : purchase.price.tax) + (purchase === null || purchase === void 0 ? void 0 : purchase.price.iwjr) + (purchase === null || purchase === void 0 ? void 0 : purchase.price.fee2)).toLocaleString()]
                  })]
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                  className: "d-flex justify-content-between my-2",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("span", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("strong", {
                      children: "Pajak"
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("span", {
                    className: "text_fee",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("strong", {
                      children: ["Rp", ((purchase === null || purchase === void 0 ? void 0 : purchase.price.total) - (purchase === null || purchase === void 0 ? void 0 : purchase.price.subtotal)).toLocaleString()]
                    })
                  })]
                }), purchase.product === 'flight' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                  className: "d-flex justify-content-between my-2",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("span", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("strong", {
                      children: "Tambahan"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("span", {
                    className: "extra-flight",
                    children: ["Rp", purchase === null || purchase === void 0 ? void 0 : purchase.price.addon]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                  className: "d-flex justify-content-between my-2",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("span", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("strong", {
                      children: "Biaya Penanganan"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("span", {
                    children: ["Rp", purchase === null || purchase === void 0 ? void 0 : purchase.price.fee.toLocaleString()]
                  })]
                }), (purchase === null || purchase === void 0 ? void 0 : purchase.price.point) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                  className: "d-flex justify-content-between my-2",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("span", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("strong", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("small", {
                        children: "Point digunakan"
                      })
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("span", {
                    className: "text-danger",
                    children: ["-", purchase === null || purchase === void 0 ? void 0 : purchase.price.point.toLocaleString()]
                  })]
                }), (purchase === null || purchase === void 0 ? void 0 : purchase.price.discount) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                  className: "d-flex justify-content-between my-2",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("span", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("strong", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("small", {
                        children: "Diskon"
                      })
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("span", {
                    className: "text-danger",
                    children: ["-Rp", purchase === null || purchase === void 0 ? void 0 : purchase.price.discount.toLocaleString()]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                  className: "d-flex justify-content-between my-2",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("span", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("strong", {
                      children: "Total tagihan"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("b", {
                    children: ["Rp", purchase === null || purchase === void 0 ? void 0 : purchase.price.total.toLocaleString()]
                  })]
                })]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
              className: "list-group-item ",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                className: "d-flex w-100 justify-content-between",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("b", {
                    children: purchase === null || purchase === void 0 ? void 0 : (_purchase$payments = purchase.payments) === null || _purchase$payments === void 0 ? void 0 : _purchase$payments.id
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("p", {
                    className: "mb-0",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("span", {
                      className: "badge badge-success",
                      children: purchase === null || purchase === void 0 ? void 0 : (_purchase$payments2 = purchase.payments) === null || _purchase$payments2 === void 0 ? void 0 : (_purchase$payments2$h = _purchase$payments2.history[0]) === null || _purchase$payments2$h === void 0 ? void 0 : _purchase$payments2$h.status
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
                  className: "text-right",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("small", {
                    children: purchase === null || purchase === void 0 ? void 0 : (_purchase$payments3 = purchase.payments) === null || _purchase$payments3 === void 0 ? void 0 : (_purchase$payments3$h = _purchase$payments3.history[0]) === null || _purchase$payments3$h === void 0 ? void 0 : _purchase$payments3$h.date
                  })
                })]
              })
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_0__.Modal, {
      isOpen: openPaymentChange,
      toggle: handleOpenPayment,
      centered: true,
      size: "lg",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_0__.ModalBody, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_shared_TabPayment__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          handleChangePaymentMethod: handleChangePaymentMethod,
          paymentMethodSelected: purchase !== null && purchase !== void 0 && (_purchase$payments4 = purchase.payments) !== null && _purchase$payments4 !== void 0 && (_purchase$payments4$s = _purchase$payments4.selected) !== null && _purchase$payments4$s !== void 0 && _purchase$payments4$s.id ? purchase === null || purchase === void 0 ? void 0 : (_purchase$payments5 = purchase.payments) === null || _purchase$payments5 === void 0 ? void 0 : (_purchase$payments5$s = _purchase$payments5.selected) === null || _purchase$payments5$s === void 0 ? void 0 : _purchase$payments5$s.id : paymentMethodSelected,
          flightRepricing: purchase
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_0__.ModalFooter, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("button", {
          type: "button",
          className: "btn btn-primary",
          onClick: handleChangePayment,
          children: "Simpan perubahan"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_0__.Modal, {
      isOpen: openSsr,
      centered: true,
      size: "lg",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_0__.ModalHeader, {
        toggle: () => handleOpenSsr([]),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("h4", {
          children: "Additional Details of Baggage and Meal"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_0__.ModalBody, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("table", {
          className: "table",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("tr", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("th", {
                children: "No"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("th", {
                children: "Tipe"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("th", {
                children: "Nama"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("th", {
                children: "Harga"
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("tbody", {
            children: listSsr.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("tr", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("td", {
                scope: "row",
                children: ++index
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("td", {
                children: item.ssrType
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("td", {
                children: item.ssrType === 'meal' ? item.code.split('=')[0] : `${Math.floor(item.code.split(';')[0])}Kg`
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("td", {
                children: item.ssrType === 'meal' ? `Rp${Math.floor(item.code.split('=')[1]).toLocaleString()}` : `Rp${Math.floor(item.code.split(';')[1]).toLocaleString()}`
              })]
            }))
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_0__.Modal, {
      isOpen: openFormRefund,
      toggle: () => setOpenFormRefund(v => !v),
      centered: true,
      size: "md",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_0__.ModalHeader, {
        toggle: () => setOpenFormRefund(v => !v),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("h5", {
          className: "font-weight-bold",
          children: "Form Refund"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_0__.ModalBody, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                children: "No Rekening"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("input", {
                onChange: handleChangeCancelRequest,
                name: "accountNumber",
                value: cancelRequest['accountNumber'],
                type: "text",
                className: "form-control",
                "aria-describedby": "helpId",
                placeholder: "Masukan no rekening anda..."
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                children: "Pemilik Rekening"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("input", {
                onChange: handleChangeCancelRequest,
                name: "customerName",
                value: cancelRequest['customerName'],
                type: "text",
                className: "form-control",
                "aria-describedby": "helpId",
                placeholder: "Masukan nama pemilik rekening..."
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                children: "Bank"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("select", {
                onChange: handleChangeCancelRequest,
                value: cancelRequest['idPayment'],
                class: "form-control",
                name: "idPayment",
                id: "",
                children: bank.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("option", {
                  value: item.id_payment,
                  children: item.bank_name
                }))
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                htmlFor: true,
                children: "Alasan Pembatalan"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("textarea", {
                onChange: handleChangeCancelRequest,
                name: "reason",
                value: cancelRequest['reason'],
                className: "form-control",
                rows: 3,
                placeholder: "Masukan alasan pembatalan..."
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
            className: "col-12 d-flex justify-content-end",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("button", {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountPurchaseDetail);
});

/***/ })

};
;