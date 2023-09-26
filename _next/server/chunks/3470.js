"use strict";
exports.id = 3470;
exports.ids = [3470];
exports.modules = {

/***/ 3470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







function CardProductGeneral(props) {
  var _data$product_detail$, _data$product_detail$2, _data$product_detail$3, _data$product_detail$4, _data$product_detail$5, _data$product_detail$6;

  const {
    data
  } = props;
  const isTabletOrMobile = (0,react_responsive__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)({
    query: '(max-width:1224px)'
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: `/product/category/detail/${data === null || data === void 0 ? void 0 : data.slug_product}`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
      className: "text-dark",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(CardStyled, {
        className: "card",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(ContainerImage, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(ImgStyled, {
            src: data === null || data === void 0 ? void 0 : data.img_featured_url,
            className: "card-img-top  rounded-top",
            alt: ""
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(CardDesc, {
          className: "card-body",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
            className: "badge badge-warning label-flash",
            children: data === null || data === void 0 ? void 0 : data.product_category.name_product_category
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
            className: "md-product-name",
            children: data === null || data === void 0 ? void 0 : data.product_name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "d-flex justify-content-end align-items-end flex-column",
            children: [(data === null || data === void 0 ? void 0 : (_data$product_detail$ = data.product_detail[0]) === null || _data$product_detail$ === void 0 ? void 0 : _data$product_detail$.discount) != 0 && (data === null || data === void 0 ? void 0 : data.product_detail.length) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
              className: "badge badge-danger md-label-discount",
              children: ["Diskon ", data === null || data === void 0 ? void 0 : (_data$product_detail$2 = data.product_detail[0]) === null || _data$product_detail$2 === void 0 ? void 0 : _data$product_detail$2.discount, "%"]
            }), (data === null || data === void 0 ? void 0 : (_data$product_detail$3 = data.product_detail[0]) === null || _data$product_detail$3 === void 0 ? void 0 : _data$product_detail$3.normal_price) !== (data === null || data === void 0 ? void 0 : (_data$product_detail$4 = data.product_detail[0]) === null || _data$product_detail$4 === void 0 ? void 0 : _data$product_detail$4.price) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("small", {
              className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('', {
                'd-block': isTabletOrMobile
              }),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("s", {
                children: ["Rp", (data === null || data === void 0 ? void 0 : (_data$product_detail$5 = data.product_detail[0]) === null || _data$product_detail$5 === void 0 ? void 0 : _data$product_detail$5.normal_price.toLocaleString()) || 0]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h6", {
              className: "text-danger font-weight-bold",
              children: ["Rp", (data === null || data === void 0 ? void 0 : (_data$product_detail$6 = data.product_detail[0]) === null || _data$product_detail$6 === void 0 ? void 0 : _data$product_detail$6.price.toLocaleString()) || 0]
            })]
          })]
        })]
      })
    })
  });
}

const ContainerImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CardProductGeneral__ContainerImage",
  componentId: "sc-asx2a5-0"
})(["position:relative;width:100%;height:180px;@media (max-width:1224px){.cp_shadow{font-size:12px;}}.cp_shadow{position:absolute;top:0;height:100%;width:100%;padding:8px 12px;background:-webkit-linear-gradient( top,rgba(0,0,0,0.35),rgba(0,0,0,0) );border-top-right-radius:15px !important;border-top-left-radius:15px !important;}.label-flash{position:absolute;bottom:10px;left:10px;}"]);
const CardDesc = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CardProductGeneral__CardDesc",
  componentId: "sc-asx2a5-1"
})(["padding:10px;.md-product-name{display:-webkit-box;overflow:hidden;line-height:1.349;text-overflow:ellipsis;height:48px;font-weight:bold;color:#0070BA;max-height:49px;-webkit-box-orient:vertical;-webkit-line-clamp:2;}"]);
const ImgStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "CardProductGeneral__ImgStyled",
  componentId: "sc-asx2a5-2"
})(["width:100%;height:100%;object-fit:cover;border-top-right-radius:15px !important;border-top-left-radius:15px !important;"]);
const CardStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CardProductGeneral__CardStyled",
  componentId: "sc-asx2a5-3"
})(["border-radius:15px;box-shadow:5px 5px 5px -5px rgba(0,0,0,.5);.md-label-discount{border-top-left-radius:10px;border-bottom-left-radius:10px;border-top-right-radius:0;border-bottom-right-radius:0;position:relative;margin-bottom:5px;padding:3px 5.7px;font-size:10px;&::after{content:'';position:absolute;background:inherit;width:5px;height:5px;bottom:-5px;right:0;clip-path:polygon(0% 0%,100% 0%,100% 100%);}}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardProductGeneral);

/***/ })

};
;