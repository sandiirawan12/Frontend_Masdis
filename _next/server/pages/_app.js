(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
// EXTERNAL MODULE: external "moment/locale/id"
var id_ = __webpack_require__(5518);
;// CONCATENATED MODULE: external "regenerator-runtime/runtime"
const runtime_namespaceObject = require("regenerator-runtime/runtime");
;// CONCATENATED MODULE: external "redux-persist/integration/react"
const react_namespaceObject = require("redux-persist/integration/react");
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
// EXTERNAL MODULE: ./src/store/auth/authActionTypes.js
var authActionTypes = __webpack_require__(2853);
;// CONCATENATED MODULE: ./src/store/auth/authReducer.js
// application

const AUTH_NAMESPACE = 'auth';
const initialState = false;
function authReducer(state = initialState, action) {
  switch (action.type) {
    case authActionTypes/* AUTH_LOGIN */.C:
      return state = true;

    case authActionTypes/* AUTH_LOGOUT */.L:
      return state = false;

    default:
      return state;
  }
} // const authReducer = withClientState(authBaseReducer, AUTH_NAMESPACE);
// export default authReducer;
// EXTERNAL MODULE: ./src/store/redirectUrl/redirectUrlActionTypes.js
var redirectUrlActionTypes = __webpack_require__(7710);
;// CONCATENATED MODULE: ./src/store/redirectUrl/redirectUrlReducer.js
// application

const REDIRECT_URL_NAMESPACE = 'redirectUrl';
const redirectUrlReducer_initialState = '';
function redirectUrlReducer(state = redirectUrlReducer_initialState, action) {
  switch (action.type) {
    case redirectUrlActionTypes/* CHANGE_REDIRECT_URL */.p:
      return state = action.payload;

    default:
      return state;
  }
}
// EXTERNAL MODULE: ./src/store/token/tokenActionTypes.js
var tokenActionTypes = __webpack_require__(6077);
;// CONCATENATED MODULE: ./src/store/token/tokenReducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// application

const TOKEN_NAMESPACE = 'token';
const tokenReducer_initialState = {
  access_token: ''
};
function tokenReducer(state = tokenReducer_initialState, action) {
  switch (action.type) {
    case tokenActionTypes/* CHANGE_TOKEN */.j:
      return _objectSpread(_objectSpread({}, state), {}, {
        access_token: action.access_token
      });

    default:
      return state;
  }
}
// EXTERNAL MODULE: ./src/store/user/userActionTypes.js
var userActionTypes = __webpack_require__(1208);
;// CONCATENATED MODULE: ./src/store/user/userReducer.js

const USER_NAMESPACE = 'user';
const userReducer_initialState = {};
function userReducer(state = userReducer_initialState, action) {
  switch (action.type) {
    case userActionTypes/* CHANGE_USER */.V:
      return state = action.payload;

    default:
      return state;
  }
}
;// CONCATENATED MODULE: ./src/store/rootReducer.js





/* harmony default export */ const rootReducer = ((0,external_redux_namespaceObject.combineReducers)({
  [AUTH_NAMESPACE]: authReducer,
  [TOKEN_NAMESPACE]: tokenReducer,
  [USER_NAMESPACE]: userReducer,
  [REDIRECT_URL_NAMESPACE]: redirectUrlReducer
}));
;// CONCATENATED MODULE: external "redux-persist-transform-encrypt"
const external_redux_persist_transform_encrypt_namespaceObject = require("redux-persist-transform-encrypt");
;// CONCATENATED MODULE: external "redux-persist/lib/storage"
const storage_namespaceObject = require("redux-persist/lib/storage");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_namespaceObject);
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: external "redux-persist"
const external_redux_persist_namespaceObject = require("redux-persist");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/store/store.js
function store_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function store_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { store_ownKeys(Object(source), true).forEach(function (key) { store_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { store_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function store_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









let store;
const encryptor = (0,external_redux_persist_transform_encrypt_namespaceObject.encryptTransform)({
  secretKey: "masdis-eureka-key"
});
const persistConfig = {
  key: 'primary',
  storage: (storage_default()),
  transforms: [encryptor]
};
const persistedReducer = (0,external_redux_persist_namespaceObject.persistReducer)(persistConfig, rootReducer);

function makeStore() {
  return (0,external_redux_namespaceObject.createStore)(persistedReducer, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default()))));
}

const initializeStore = () => {
  var _store2;

  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : makeStore(); // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store


  if (store) {
    _store = makeStore(store_objectSpread({}, store.getState())); // Reset the current store

    store = undefined;
  } // For SSG and SSR always create a new store


  if (true) return _store; // Create the store once in the client

  if (!store) store = _store;
  return _store;
};
function useStore() {
  const store = (0,external_react_.useMemo)(() => initializeStore(), []);
  return store;
}
// EXTERNAL MODULE: ./src/api/token.js
var token = __webpack_require__(6842);
// EXTERNAL MODULE: ./src/api/user.js
var user = __webpack_require__(2816);
// EXTERNAL MODULE: ./src/store/auth/authActions.js
var authActions = __webpack_require__(6074);
// EXTERNAL MODULE: ./src/store/token/tokenActions.js
var tokenActions = __webpack_require__(1349);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__(6666);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6981);
// EXTERNAL MODULE: external "sweetalert2"
var external_sweetalert2_ = __webpack_require__(271);
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Root.jsx

















function Root(props) {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    access_token
  } = (0,external_react_redux_.useSelector)(state => state.token);
  const isTabletOrMobile = (0,external_react_responsive_.useMediaQuery)({
    query: '(max-width: 1224px)'
  });
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,external_react_.useState)(true);
  const router = (0,router_.useRouter)();
  (0,external_react_.useEffect)(() => {
    if (!router.pathname.includes('/auth/login/success/[slug]')) {
      setIsLoading(true);
      user/* default.getProfile */.Z.getProfile(access_token).then(res => {
        if (!res.success) {
          token/* default.tokenPublic */.Z.tokenPublic().then(res => res.json()).then(res => {
            dispatch((0,authActions/* logout */.kS)());
            dispatch((0,tokenActions/* changeToken */.p)(res.access_token));
            setIsLoading(false);
          });
        } else {
          setIsLoading(false);
        }
      }).catch(err => {
        external_sweetalert2_default().fire({
          icon: 'error',
          title: 'Tidak Ada Koneksi',
          text: 'Periksa kembali koneksi internet anda',
          confirmButtonColor: '#0070BA',
          allowOutsideClick: false
        }).then(res => {
          if (res.isConfirmed) {
            window.location.reload();
          }
        }); // alert('Perika akses internet anda')
      });
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        minHeight: '100vh',
        background: 'rgba(255,255,255,.5)'
      },
      className: "w-100  d-flex justify-content-center align-items-center",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "position-relative",
        style: {
          width: '220px',
          height: '220px'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
          layout: "fill",
          objectFit: "contain",
          src: "https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/pulse-spinner.svg",
          alt: "loading.."
        })
      })
    });
  }

  if (false) {}

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {
      autoClose: 5000,
      hideProgressBar: true
    }), props.children]
  });
}

/* harmony default export */ const components_Root = (Root);
;// CONCATENATED MODULE: ./src/pages/_app.js
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

























function MyApp({
  Component,
  pageProps
}) {
  const store = useStore();
  const persistor = (0,external_redux_persist_namespaceObject.persistStore)(store, {}, function () {
    persistor.persist();
  });
  const isTabletOrMobile = (0,external_react_responsive_.useMediaQuery)({
    query: '(max-width: 1224px)'
  });
  const content = (0,external_react_.useMemo)(() => {
    let Layout = (external_react_default()).Fragment;

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

    return /*#__PURE__*/jsx_runtime_.jsx(components_Root, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
      })
    });
  }, [Component, pageProps, components_Root]);
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
    store: store,
    children: /*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.PersistGate, {
      persistor: persistor,
      loading: null,
      children: content
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 7710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ CHANGE_REDIRECT_URL)
/* harmony export */ });
const CHANGE_REDIRECT_URL = 'CHANGE_REDIRECT_URL';

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 2245:
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ 5518:
/***/ ((module) => {

"use strict";
module.exports = require("moment/locale/id");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9103:
/***/ ((module) => {

"use strict";
module.exports = require("query-string");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 6666:
/***/ ((module) => {

"use strict";
module.exports = require("react-responsive");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6981:
/***/ ((module) => {

"use strict";
module.exports = require("reactstrap");

/***/ }),

/***/ 271:
/***/ ((module) => {

"use strict";
module.exports = require("sweetalert2");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [639,5675,6074,2816], () => (__webpack_exec__(826)));
module.exports = __webpack_exports__;

})();