"use strict";
exports.id = 1643;
exports.ids = [1643];
exports.modules = {

/***/ 4896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9103);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_0__);

const blogsApi = {
  getBlogs: (token, options) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}promotion/blog?${query_string__WEBPACK_IMPORTED_MODULE_0___default().stringify(options)}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getBlog: (token, slug) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}promotion/blog/${slug}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getCategory: token => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}promotion/blog/category`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blogsApi);

/***/ }),

/***/ 9951:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5566);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _iconify_icons_fa_twitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4178);
/* harmony import */ var _iconify_icons_fa_facebook_square__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9135);
/* harmony import */ var _iconify_icons_fa_instagram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2868);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_0__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];










function BlogLayout({
  children
}) {
  const isTabletOrMobile = (0,react_responsive__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery)({
    query: '(max-width:1224px)'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("nav", {
      className: "navbar navbar-expand-lg w-100 navbar-white",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "container",
        children: [isTabletOrMobile && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
          href: "/",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
            className: "text-dark",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
              class: "fas fa-arrow-left"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
          href: "/blogs",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
            className: "navbar-brand mx-auto",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
              src: "https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/masterdiskon_logo.png"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "collapse navbar-collapse",
          id: "navbarSupportedContent",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: "mr-auto"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("ul", {
            className: "navbar-nav",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
              className: "nav-item mr-3",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: "/",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                  className: "nav-link btn btn-primary",
                  children: "Kembali ke Perjalanan"
                })
              })
            })
          })]
        })]
      })
    }), children, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("footer", {
      className: "pt-4",
      style: {
        background: '#0F2131',
        letterSpacing: '1.6px'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "container text-center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
          src: "https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/masterdiskon_logo.png"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "my-3",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
            href: "https://www.facebook.com/masterdiskonint/",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
              icon: _iconify_icons_fa_facebook_square__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
              style: {
                color: 'white',
                fontSize: '1.4rem',
                width: '40px'
              }
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
            href: "https://www.instagram.com/master.diskon",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
              icon: _iconify_icons_fa_instagram__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
              style: {
                color: 'white',
                fontSize: '1.4rem',
                width: '40px'
              }
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
            href: "https://twitter.com/masterdiskonid",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
              icon: _iconify_icons_fa_twitter__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
              style: {
                color: 'white',
                fontSize: '1.4rem',
                width: '40px'
              }
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: "text-center text-muted pb-2",
          children: "\xA9 2022 Master Diskon Internasional"
        })]
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogLayout);
});

/***/ })

};
;