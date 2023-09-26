"use strict";
exports.id = 6074;
exports.ids = [6074];
exports.modules = {

/***/ 6842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const tokenApi = {
  tokenPublic: () => {
    var urlencoded = new URLSearchParams();
    urlencoded.append("client_id", "MDIcid");
    urlencoded.append("client_secret", "MDIcs");
    urlencoded.append("grant_type", "client_credentials"); // eslint-disable-next-line no-undef

    return fetch(`${"https://api.masterdiskon.com/v1/"}auth/token`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: urlencoded
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tokenApi);

/***/ }),

/***/ 2853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ AUTH_LOGIN),
/* harmony export */   "L": () => (/* binding */ AUTH_LOGOUT)
/* harmony export */ });
const AUTH_LOGIN = 'AUTH_LOGIN';
const AUTH_LOGOUT = 'AUTH_LOGOUT';

/***/ }),

/***/ 6074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x4": () => (/* binding */ login),
/* harmony export */   "kS": () => (/* binding */ logout)
/* harmony export */ });
/* unused harmony export logoutSuccess */
/* harmony import */ var _api_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6842);
/* harmony import */ var _store_auth_authActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2853);
/* harmony import */ var _token_tokenActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1349);
/* harmony import */ var _user_userActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2386);




function login() {
  return {
    type: _store_auth_authActionTypes__WEBPACK_IMPORTED_MODULE_1__/* .AUTH_LOGIN */ .C
  };
}
function logout() {
  return dispatch => {
    _api_token__WEBPACK_IMPORTED_MODULE_0__/* ["default"].tokenPublic */ .Z.tokenPublic().then(res => res.json()).then(res => {
      dispatch((0,_token_tokenActions__WEBPACK_IMPORTED_MODULE_2__/* .changeToken */ .p)(res.access_token));
      dispatch((0,_user_userActions__WEBPACK_IMPORTED_MODULE_3__/* .changeUser */ .A)({}));
      dispatch(logoutSuccess());
    });
  };
}
function logoutSuccess() {
  return {
    type: _store_auth_authActionTypes__WEBPACK_IMPORTED_MODULE_1__/* .AUTH_LOGOUT */ .L
  };
}

/***/ }),

/***/ 6077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ CHANGE_TOKEN)
/* harmony export */ });
const CHANGE_TOKEN = 'CHANGE_TOKEN';

/***/ }),

/***/ 1349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ changeToken)
/* harmony export */ });
/* harmony import */ var _tokenActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6077);

function changeToken(access_token) {
  return {
    type: _tokenActionTypes__WEBPACK_IMPORTED_MODULE_0__/* .CHANGE_TOKEN */ .j,
    access_token
  };
}

/***/ }),

/***/ 1208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ CHANGE_USER)
/* harmony export */ });
const CHANGE_USER = 'CHANGE_USER';

/***/ }),

/***/ 2386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ changeUser)
/* harmony export */ });
/* harmony import */ var _userActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1208);

const changeUser = user => {
  return {
    type: _userActionTypes__WEBPACK_IMPORTED_MODULE_0__/* .CHANGE_USER */ .V,
    payload: user
  };
};

/***/ })

};
;