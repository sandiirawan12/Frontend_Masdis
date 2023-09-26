"use strict";
exports.id = 2816;
exports.ids = [2816];
exports.modules = {

/***/ 2816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9103);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const userApi = {
  getProfile: token => {
    // eslint-disable-next-line no-undef
    return fetch(`${"https://api.masterdiskon.com/v1/"}user/profile?type=masterdiskon`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  updateProfile: (token, req) => {
    // eslint-disable-next-line no-undef
    return fetch(`${"https://api.masterdiskon.com/v1/"}user/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method: 'put',
      body: JSON.stringify(req)
    }).then(res => res.json());
  },
  submitIssued: (token, req) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}booking/confirmissued`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(req)
    }).then(res => res.json());
  },
  submitInvoice: (token, req) => {
    return fetch(`https://api.masterdiskon.com/v1/order/invoice`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(req)
    }).then(res => res.json());
  },
  submitInvoicexx: (token, req) => {
    return fetch(`https://jsx.masterdiskon.com/createInvoice`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(req)
    }).then(res => res.json());
  },
  getListQuickpick: (token, options) => {
    const params = _objectSpread({}, options); // eslint-disable-next-line no-undef


    return fetch(`${"https://api.masterdiskon.com/v1/"}user/quickpick?${query_string__WEBPACK_IMPORTED_MODULE_0___default().stringify(params)}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getQuickpick: (token, options) => {
    const params = _objectSpread(_objectSpread({}, options), {}, {
      type: 'user'
    }); // eslint-disable-next-line no-undef


    return fetch(`${"https://api.masterdiskon.com/v1/"}user/quickpick/detail?${query_string__WEBPACK_IMPORTED_MODULE_0___default().stringify(params)}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  addQuickpick: (token, req) => {
    // eslint-disable-next-line no-undef
    return fetch(`${"https://api.masterdiskon.com/v1/"}user/quickpick`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(req)
    }).then(res => res.json());
  },
  updateQuickpick: (token, req, id) => {
    // eslint-disable-next-line no-undef
    return fetch(`${"https://api.masterdiskon.com/v1/"}user/quickpick/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method: 'put',
      body: JSON.stringify(req)
    }).then(res => res.json());
  },
  getDetailQuickpick: (token, id) => {
    // eslint-disable-next-line no-undef
    return fetch(`${"https://api.masterdiskon.com/v1/"}user/quickpick/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  deleteQuickpick: (token, id) => {
    // eslint-disable-next-line no-undef
    return fetch(`${"https://api.masterdiskon.com/v1/"}user/quickpick/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      method: 'delete'
    }).then(res => res.json());
  },
  getListPurchase: (token, options) => {
    const params = _objectSpread(_objectSpread({}, options), {}, {
      q: options.keyword
    }); // eslint-disable-next-line no-undef


    return fetch(`${"https://api.masterdiskon.com/v1/"}user/purchase?${query_string__WEBPACK_IMPORTED_MODULE_0___default().stringify(params)}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getListInvoice: (startdate, todate, keyword, iduser, status) => {
    var urlencoded = new URLSearchParams();
    urlencoded.append("start", "0");
    urlencoded.append("length", "-1");
    urlencoded.append("search[value]", keyword);
    urlencoded.append("search[regex]", "false");
    urlencoded.append("startdate", moment__WEBPACK_IMPORTED_MODULE_1___default()(startdate).format('YYYY-MM-DD').toString());
    urlencoded.append("todate", moment__WEBPACK_IMPORTED_MODULE_1___default()(todate).format('YYYY-MM-DD').toString());
    urlencoded.append("iduser", iduser);
    urlencoded.append("status", status);
    return fetch(`https://corporate.masterdiskon.com/api/corporate/document/invoice/getInvoiceB2B/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: urlencoded
    }).then(res => res.json());
  },
  getListFavourite: (token, options) => {
    // eslint-disable-next-line no-undef
    return fetch(`${"https://api.masterdiskon.com/v1/"}product/favourite?${query_string__WEBPACK_IMPORTED_MODULE_0___default().stringify(options)}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getListInbox: (token, options) => {
    // eslint-disable-next-line no-undef
    return fetch(`${"https://api.masterdiskon.com/v1/"}user/notification?${query_string__WEBPACK_IMPORTED_MODULE_0___default().stringify(options)}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getListReview: (token, options) => {
    // eslint-disable-next-line no-undef
    return fetch(`${"https://api.masterdiskon.com/v1/"}product/review?${query_string__WEBPACK_IMPORTED_MODULE_0___default().stringify(options)}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getListCoupon: (token, options) => {
    // eslint-disable-next-line no-undef
    return fetch(`${"https://api.masterdiskon.com/v1/"}promotion/coupon/mycoupon?${query_string__WEBPACK_IMPORTED_MODULE_0___default().stringify(options)}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getPrivateToken: (username, password) => {
    var urlencoded = new URLSearchParams();
    urlencoded.append("client_id", "MDIcid");
    urlencoded.append("client_secret", "MDIcs");
    urlencoded.append("username", username);
    urlencoded.append("password", password);
    urlencoded.append("grant_type", "password"); // eslint-disable-next-line no-undef

    return fetch(`${"https://api.masterdiskon.com/v1/"}auth/token`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: urlencoded
    }).then(res => res.json());
  },
  getPrivateTokenCorp: (username, password) => {
    var urlencoded = new URLSearchParams();
    urlencoded.append("client_id", "MDB2BCID");
    urlencoded.append("client_secret", "MDB2BCS");
    urlencoded.append("username", username);
    urlencoded.append("password", password);
    urlencoded.append("grant_type", "password"); // eslint-disable-next-line no-undef

    return fetch(`${"https://api.masterdiskon.com/v1/"}auth/login/b2b`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: urlencoded
    }).then(res => res.json());
  },
  getCountries: () => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}user/location/country`).then(res => res.json());
  },
  getPurchase: (token, req) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}booking/detail`, {
      method: 'post',
      body: JSON.stringify(req),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  changePaymentMethod: (token, req) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}booking/payment`, {
      method: 'put',
      body: JSON.stringify(req),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  register: req => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}auth/register`, {
      method: 'post',
      body: JSON.stringify(req),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
  },
  setSeen: (token, id) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}user/notification/${id}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  addQuickpick: (token, req) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}user/quickpick`, {
      method: 'post',
      body: JSON.stringify(req),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  addProductFavourite: (token, req) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}product/favourite`, {
      method: 'post',
      body: JSON.stringify(req),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  forgotPassword: email => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}auth/forgotpassword/${email}`).then(res => res.json());
  },
  resetPassword: req => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}auth/resetpassword`, {
      method: 'post',
      body: JSON.stringify(req),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
  },
  deleteProductFavourite: (token, req) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}product/favourite`, {
      method: 'delete',
      body: JSON.stringify(req),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  createCancellation: (token, req) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}booking/cancel/create`, {
      method: 'post',
      body: JSON.stringify(req),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  verifyRegister: req => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}auth/verify?${query_string__WEBPACK_IMPORTED_MODULE_0___default().stringify(req)}`).then(res => res.json());
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userApi);

/***/ })

};
;