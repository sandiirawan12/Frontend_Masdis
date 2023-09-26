"use strict";
exports.id = 4681;
exports.ids = [4681];
exports.modules = {

/***/ 4681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_shop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6385);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6981);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










const RootNav = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Nav).withConfig({
  displayName: "TabPayment__RootNav",
  componentId: "sc-1btqhpw-0"
})(["font-size:12px;@media (max-width:1224px){.nav-item{width:100%;border:0;.nav-link{text-align:left;&:first-child{border-top-left-radius:0 !important;}&:last-child{border-top-right-radius:0 !important;}}}}.nav-item{color:black;font-weight:bold;border-right:.5px solid #eaeaea;.nav-link{color:inherit;border:0 !important;border-radius:0;&.active{background-color:#0070BA;color:white;}&:hover{border:0 !important;}&:first-child{border-top-left-radius:inherit;}&:last-child{border-top-right-radius:inherit;}}&:first-child{border-top-left-radius:20px !important;}&:last-child{border-top-right-radius:20px !important;border-right:none;}}"]);

function TabPayment(props) {
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
    paymentMethodSelected
  } = props;
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    _api_shop__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getPaymentCategory */ .Z.getPaymentCategory(access_token).then(res => {
      if (res.success) {
        setPaymentCategory(res.data);
        handleChangeTab(res.data[0]);
      }
    });
  }, [flightRepricing]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    _api_shop__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getPaymentCategory */ .Z.getPaymentCategory(access_token).then(res => {
      if (res.success) {
        setPaymentCategory(res.data);
        handleChangeTab(res.data[0]);
      }
    });
  }, []);

  const handleChangeTab = item => {
    setActiveTab(item.id_payment_method_category);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(RootNav, {
      tabs: true,
      children: paymentCategory.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavItem, {
        style: {
          cursor: 'pointer'
        },
        onClick: () => {
          handleChangeTab(item);
          handleChangePaymentMethod(item.payment_method[0].id_payment_method);
        },
        className: "flex-grow-1 text-center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('', {
            'active': activeTab === item.id_payment_method_category
          }),
          children: item.name_category
        })
      }, item.id_payment_method_category))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.TabContent, {
      activeTab: activeTab,
      children: paymentCategory.map(item => {
        var _item$payment_method;

        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.TabPane, {
          tabId: item.id_payment_method_category,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            className: "row mt-2",
            children: (_item$payment_method = item.payment_method) === null || _item$payment_method === void 0 ? void 0 : _item$payment_method.map(pm => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
              className: "col-md-6 px-4 mb-2",
              onClick: () => handleChangePaymentMethod(pm.id_payment_method),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("label", {
                style: {
                  border: '1px solid #2121',
                  background: paymentMethodSelected === pm.id_payment_method && 'rgba(145, 196, 255, 0.623)'
                },
                className: "mt-2 d-flex align-items-center rounded p-2 mb-0 pointer",
                htmlFor: "credit_card",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                  className: "mr-3",
                  style: {
                    height: '60px',
                    width: '60px',
                    marginLeft: '.8rem',
                    position: 'relative'
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    layout: "fill",
                    objectFit: "contain",
                    src: `https://cdn.masterdiskon.com/masterdiskon/icon/payment/${pm.img_payment_method}`,
                    className: "icon-payment"
                  })
                }), pm.name_payment_method]
              })
            }))
          })
        }, item.id_payment_method_category);
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabPayment);

/***/ })

};
;