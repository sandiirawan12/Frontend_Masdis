"use strict";
exports.id = 3467;
exports.ids = [3467];
exports.modules = {

/***/ 3467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function withAuth(Component = null, options = {}) {
  function CustomRoute(props) {
    const auth = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => state.auth);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const isTabletOrMobile = (0,react_responsive__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)({
      query: '(max-width: 1224px)'
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
      if (!auth && options.auth) {
        router.push(options.pathAfterFailure);
      } else if (auth && !options.auth) {
        router.push(options.pathAfterFailure);
      }
    }, []);

    if (!auth && options.auth) {
      return null;
    } else if (auth && !options.auth) {
      return null;
    }

    let Layout = (react__WEBPACK_IMPORTED_MODULE_2___default().Fragment);

    if (Component.Layout) {
      var _Component$Layout, _Component$Layout3;

      if ((_Component$Layout = Component.Layout) !== null && _Component$Layout !== void 0 && _Component$Layout.mobile && isTabletOrMobile) {
        var _Component$Layout2;

        Layout = (_Component$Layout2 = Component.Layout) === null || _Component$Layout2 === void 0 ? void 0 : _Component$Layout2.mobile;
      } else if ((_Component$Layout3 = Component.Layout) !== null && _Component$Layout3 !== void 0 && _Component$Layout3.desktop) {
        var _Component$Layout4;

        Layout = (_Component$Layout4 = Component.Layout) === null || _Component$Layout4 === void 0 ? void 0 : _Component$Layout4.desktop;
      } else {
        Layout = Component.Layout;
      }
    }

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Layout, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Component, _objectSpread({}, props))
    });
  }

  return CustomRoute;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withAuth);

/***/ })

};
;