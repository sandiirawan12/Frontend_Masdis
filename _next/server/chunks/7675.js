"use strict";
exports.id = 7675;
exports.ids = [7675];
exports.modules = {

/***/ 7675:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_mobile_header_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3775);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5566);
/* harmony import */ var _iconify_icons_fa_solid_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(922);
/* harmony import */ var _iconify_icons_fa_solid_home__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_home__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_fa_solid_user_alt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9107);
/* harmony import */ var _iconify_icons_fa_solid_user_alt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_user_alt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_fa_solid_briefcase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7492);
/* harmony import */ var _iconify_icons_fa_solid_briefcase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_briefcase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_fa_solid_bell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9306);
/* harmony import */ var _iconify_icons_fa_solid_bell__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_bell__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_1__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];













const LinkStyled = styled_components__WEBPACK_IMPORTED_MODULE_7___default().a.withConfig({
  displayName: "Layout__LinkStyled",
  componentId: "sc-2lkmd5-0"
})(["font-size:12px;color:grey;display:flex;flex-direction:column;align-items:center;cursor:pointer;padding:5px 0;font-weight:bold;.icon{font-size:14px;}&.active{color:#0070BA;}"]);

function Layout({
  children
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("main", {
      className: "pb-3",
      children: children
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("nav", {
      style: {
        borderRadius: '25px 25px 0 0',
        zIndex: '9999'
      },
      className: "navbar bg-white fixed-bottom shadow pb-0 align-items-center text-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(LinkStyled, {
            className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('nav-link', {
              'active': router.pathname === '/'
            }),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
              icon: (_iconify_icons_fa_solid_home__WEBPACK_IMPORTED_MODULE_2___default()),
              className: "icon"
            }), "Home"]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
          href: "/user/purchase",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(LinkStyled, {
            className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('nav-link', {
              'active': router.pathname === '/user/purchase'
            }),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
              icon: (_iconify_icons_fa_solid_briefcase__WEBPACK_IMPORTED_MODULE_4___default()),
              className: "icon"
            }), "Order"]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
          href: "/user/inbox",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(LinkStyled, {
            className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('nav-link', {
              'active': router.pathname === '/user/inbox'
            }),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
              icon: (_iconify_icons_fa_solid_bell__WEBPACK_IMPORTED_MODULE_5___default()),
              className: "icon"
            }), "Notification"]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
          href: "/login",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(LinkStyled, {
            className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('nav-link', {
              'active': router.pathname === '/user/profile'
            }),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
              icon: (_iconify_icons_fa_solid_user_alt__WEBPACK_IMPORTED_MODULE_3___default()),
              className: "icon"
            }), "Account"]
          })
        })]
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);
});

/***/ }),

/***/ 3775:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const LogoStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default().img.withConfig({
  displayName: "Header__LogoStyled",
  componentId: "sc-ecvmsu-0"
})(["height:50px;vertical-align:middle;"]);

function Header() {
  return /*#__PURE__*/_jsx("nav", {
    className: "navbar sticky-top bg-white navbar-expand-lg shadow p-0",
    children: /*#__PURE__*/_jsx("div", {
      className: "container d-flex justify-content-center align-items-center pl-3",
      children: /*#__PURE__*/_jsx(Link, {
        href: "/",
        children: /*#__PURE__*/_jsx("a", {
          className: "navbar-brand",
          children: /*#__PURE__*/_jsx(LogoStyled, {
            placeholder: "blur",
            src: "https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/masterdiskon_logo_big.png"
          })
        })
      })
    })
  });
}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Header)));

/***/ })

};
;