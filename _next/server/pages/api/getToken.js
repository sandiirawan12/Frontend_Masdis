"use strict";
(() => {
var exports = {};
exports.id = 6477;
exports.ids = [6477];
exports.modules = {

/***/ 9523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./src/api/token.js
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
/* harmony default export */ const api_token = (tokenApi);
;// CONCATENATED MODULE: ./src/pages/api/getToken.js

async function handler(req, res) {
  const response = await api_token.tokenPublic();
  const token = await response.json();
  res.setPreviewData({
    token
  });
  res.end();
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9523));
module.exports = __webpack_exports__;

})();