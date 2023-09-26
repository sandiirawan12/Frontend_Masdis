"use strict";
exports.id = 8458;
exports.ids = [8458];
exports.modules = {

/***/ 8458:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5566);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8938);
/* harmony import */ var _iconify_icons_fa_solid_id_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2073);
/* harmony import */ var _iconify_icons_fa_solid_id_card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_id_card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_fa_solid_bolt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7917);
/* harmony import */ var _iconify_icons_fa_solid_bolt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_bolt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_fa_solid_shopping_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2973);
/* harmony import */ var _iconify_icons_fa_solid_shopping_cart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_shopping_cart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_fa_solid_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6315);
/* harmony import */ var _iconify_icons_fa_solid_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_fa_solid_thumbs_up__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5954);
/* harmony import */ var _iconify_icons_fa_solid_thumbs_up__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_thumbs_up__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_fa_solid_certificate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1058);
/* harmony import */ var _iconify_icons_fa_solid_certificate__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_certificate__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_fa_solid_envelope_open_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8677);
/* harmony import */ var _iconify_icons_fa_solid_envelope_open_text__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_envelope_open_text__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _iconify_icons_fa_solid_sign_out_alt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4826);
/* harmony import */ var _iconify_icons_fa_solid_sign_out_alt__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_sign_out_alt__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shared_AppLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8506);
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8442);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _store_auth_authActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6074);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_0__, _Layout__WEBPACK_IMPORTED_MODULE_1__]);
([_iconify_react__WEBPACK_IMPORTED_MODULE_0__, _Layout__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





















function AccountLayout({
  children
}) {
  const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(state => state.user);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();
  const activeUrl = router.asPath;

  const handleLogout = () => {
    dispatch((0,_store_auth_authActions__WEBPACK_IMPORTED_MODULE_14__/* .logout */ .kS)());
    router.push('/');
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", {
      className: "container my-5",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", {
          className: "col-md-3 d-flex",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", {
            className: "card flex-grow-1",
            style: {
              borderRadius: '15px',
              boxShadow: '5px 5px 5px -5px rgba(0,0,0,.5)'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
              className: "card-body",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
                className: "mb-3",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("h4", {
                  className: "font-weight-bold text-primary",
                  children: user.username || user.name
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("span", {
                  class: "badge badge-warning rounded px-2 py-1",
                  children: "New Traveler"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("nav", {
                className: "nav flex-column",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_shared_AppLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                  href: _services_utils__WEBPACK_IMPORTED_MODULE_12__/* .url.accountProfile */ .H.accountProfile(),
                  className: "nav-link d-flex align-items-center text-dark",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
                    icon: (_iconify_icons_fa_solid_id_card__WEBPACK_IMPORTED_MODULE_2___default())
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("span", {
                    className: "ml-2",
                    children: "Akun"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_shared_AppLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                  href: _services_utils__WEBPACK_IMPORTED_MODULE_12__/* .url.accountQuickpick */ .H.accountQuickpick(),
                  className: "nav-link d-flex align-items-center text-dark",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
                    icon: (_iconify_icons_fa_solid_bolt__WEBPACK_IMPORTED_MODULE_3___default())
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("span", {
                    className: "ml-2",
                    children: "Quickpick"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_shared_AppLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                  href: _services_utils__WEBPACK_IMPORTED_MODULE_12__/* .url.accountPurchase */ .H.accountPurchase(),
                  className: "nav-link d-flex align-items-center text-dark border-bottom",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
                    icon: (_iconify_icons_fa_solid_shopping_cart__WEBPACK_IMPORTED_MODULE_4___default())
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("span", {
                    className: "ml-2",
                    children: "History"
                  })]
                }), user.role != 'user' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_shared_AppLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                  href: _services_utils__WEBPACK_IMPORTED_MODULE_12__/* .url.accountInvoice */ .H.accountInvoice(),
                  className: "nav-link d-flex align-items-center text-dark",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
                    icon: (_iconify_icons_fa_solid_envelope_open_text__WEBPACK_IMPORTED_MODULE_8___default())
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("span", {
                    className: "ml-2",
                    children: "Invoice"
                  })]
                }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_shared_AppLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                  href: _services_utils__WEBPACK_IMPORTED_MODULE_12__/* .url.accountCoupon */ .H.accountCoupon(),
                  className: "nav-link d-flex align-items-center text-dark border-bottom",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
                    icon: (_iconify_icons_fa_solid_tag__WEBPACK_IMPORTED_MODULE_5___default())
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("span", {
                    className: "ml-2",
                    children: "Coupon"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_shared_AppLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                  href: _services_utils__WEBPACK_IMPORTED_MODULE_12__/* .url.accountFavourite */ .H.accountFavourite(),
                  className: "nav-link d-flex align-items-center text-dark",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
                    icon: (_iconify_icons_fa_solid_thumbs_up__WEBPACK_IMPORTED_MODULE_6___default())
                  }), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("span", {
                    className: "ml-2",
                    children: "Favorite"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_shared_AppLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                  href: _services_utils__WEBPACK_IMPORTED_MODULE_12__/* .url.accountReview */ .H.accountReview(),
                  className: "nav-link d-flex align-items-center text-dark",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
                    icon: (_iconify_icons_fa_solid_certificate__WEBPACK_IMPORTED_MODULE_7___default())
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("span", {
                    className: "ml-2",
                    children: "My Review"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_shared_AppLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                  href: _services_utils__WEBPACK_IMPORTED_MODULE_12__/* .url.accountInbox */ .H.accountInbox(),
                  className: "nav-link d-flex align-items-center text-dark",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
                    icon: (_iconify_icons_fa_solid_envelope_open_text__WEBPACK_IMPORTED_MODULE_8___default())
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("span", {
                    className: "ml-2",
                    children: "Inbox"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("a", {
                  className: "nav-link text-danger d-flex align-items-center text-dark",
                  onClick: handleLogout,
                  href: "#",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
                    icon: (_iconify_icons_fa_solid_sign_out_alt__WEBPACK_IMPORTED_MODULE_9___default())
                  }), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("span", {
                    className: "ml-2",
                    children: "Logout"
                  })]
                })]
              })]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", {
          className: "col-9",
          children: children
        })]
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountLayout);
});

/***/ }),

/***/ 8442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ url)
/* harmony export */ });
const url = {
  home: () => '/',
  blogs: () => '/blogs/',
  blog: slug => `/blogs/${slug}`,
  category: category => `/shop/catalog/${category.slug}`,
  product: product => `/shop/products/${product.slug}`,
  generalProduct: slug => `/product/category/detail/${slug}`,
  accountProfile: () => ({
    href: '/user/profile'
  }),
  accountQuickpick: () => ({
    href: '/user/quickpick',
    as: '/user/quickpick'
  }),
  accountPurchase: () => ({
    href: '/user/purchase',
    as: '/user/purchase'
  }),
  accountInvoice: () => ({
    href: '/user/invoice',
    as: '/user/invoice'
  }),
  accountCoupon: () => ({
    href: '/user/coupon'
  }),
  accountFavourite: () => ({
    href: '/user/favorite'
  }),
  accountReview: () => ({
    href: '/user/review'
  }),
  accountInbox: () => ({
    href: '/user/inbox'
  })
};

/***/ })

};
;