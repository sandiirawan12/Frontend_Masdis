"use strict";
exports.id = 928;
exports.ids = [928];
exports.modules = {

/***/ 928:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1566);
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_placeholder__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled_blog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(253);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5566);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_4__, _iconify_react__WEBPACK_IMPORTED_MODULE_9__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_4__, _iconify_react__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);













const SliderWrap = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "BlogSlider__SliderWrap",
  componentId: "sc-sj57pb-0"
})([".slick-slider{.slick-list{.slick-track{", "}}}"], props => props.width && 'width : 100% !important;');

function BlogSlider(props) {
  const {
    title
  } = props;
  const {
    data,
    isLoading
  } = props.data;
  const isTabletOrMobile = (0,react_responsive__WEBPACK_IMPORTED_MODULE_6__.useMediaQuery)({
    query: '(max-width: 1224px)'
  });
  const arr = [1, 2, 3, 4];

  if (isLoading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
      className: "row mb-5",
      children: arr.map(i => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('', {
          'col-3': !isTabletOrMobile,
          'col-6': isTabletOrMobile
        }),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((react_placeholder__WEBPACK_IMPORTED_MODULE_5___default()), {
          type: "rect",
          style: {
            minHeight: isTabletOrMobile ? '30px' : '180px',
            width: '100%'
          },
          showLoadingAnimation: true
        })
      }, i))
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_styled_blog__WEBPACK_IMPORTED_MODULE_7__/* .TitleStyled */ .lG, {
      className: "mb-3 font-weight-bold",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_9__.Icon, {
        icon: "solar:notes-bold-duotone",
        className: "mr-2 text-primary"
      }), " ", title]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(SliderWrap, {
      width: (data === null || data === void 0 ? void 0 : data.length) > 3 ? '' : 'true',
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
        style: {
          height: isTabletOrMobile ? '160px' : '270px'
        },
        slidesPerView: isTabletOrMobile ? 1.5 : 3.5,
        spaceBetween: 10,
        children: data === null || data === void 0 ? void 0 : data.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
            href: _services_utils__WEBPACK_IMPORTED_MODULE_3__/* .url.blog */ .H.blog(item.title_slug),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("a", {
              className: "text-decoration-none text-dark",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_styled_blog__WEBPACK_IMPORTED_MODULE_7__/* .CardStyle */ .UE, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_styled_blog__WEBPACK_IMPORTED_MODULE_7__/* .WrapperImage */ .Oq, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("img", {
                    alt: item.title,
                    src: `${item.img}`
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("p", {
                    className: "card-text mb-0",
                    style: {
                      position: 'absolute',
                      bottom: 8,
                      left: 8
                    },
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
                      className: "badge badge-warning font-weight-bold",
                      children: item.category.name_blog_category
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
                  className: "content p-3",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("p", {
                    className: "card-text text-secondary label-name",
                    style: {
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    },
                    children: item.title
                  })
                })]
              })
            })
          })
        }, index))
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogSlider);
});

/***/ }),

/***/ 253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UE": () => (/* binding */ CardStyle),
/* harmony export */   "Oq": () => (/* binding */ WrapperImage),
/* harmony export */   "lG": () => (/* binding */ TitleStyled)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CardStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "blog__CardStyle",
  componentId: "sc-12prn45-0"
})(["background:white;background-size:cover;background-repeat:no-repeat;background-position:center center;min-height:210px;width:100%;border-radius:30px 30px 10px 10px !important;position:relative;z-index:1;border:1px solid #f8f9fa;box-shadow:-1px 3px 11px -7px rgba(156,156,156,0.75);.label-name{font-weight:500;font-size:16px;}.content{height:80px;overflow:hidden;}@media screen and (max-width:1224px){min-height:130px;.content{height:42px;}.label-name{font-weight:500;font-size:10px;line-height:15px;}}"]);
const WrapperImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "blog__WrapperImage",
  componentId: "sc-12prn45-1"
})(["width:100%;height:160px;position:relative;padding:0;img{padding:0;height:100%;width:100%;object-fit:cover;border-radius:30px 30px 0 0 !important;}@media screen and (max-width:1224px){height:100px;p{font-size:12px;}img{border-radius:30px 30px 0 0 !important;}}"]);
const TitleStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "blog__TitleStyled",
  componentId: "sc-12prn45-2"
})(["font-family:blogger-sans,sans-serif;color:#414042;margin-bottom:25px px;@media screen and (max-width:1224px){font-size:14px;}"]);

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