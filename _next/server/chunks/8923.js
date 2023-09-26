"use strict";
exports.id = 8923;
exports.ids = [8923];
exports.modules = {

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