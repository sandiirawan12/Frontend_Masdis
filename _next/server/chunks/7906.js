"use strict";
exports.id = 7906;
exports.ids = [7906];
exports.modules = {

/***/ 7906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9103);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_0__);

const homeApi = {
  getBlogs: (token, params) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}promotion/blog?${query_string__WEBPACK_IMPORTED_MODULE_0___default().stringify(params)}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getGeocoder: (lat, lon) => {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&types=premise&language=id&key=AIzaSyC_O0-LKyAboQn0O5_clZnePHSpQQ5slQU`).then(res => res.json());
  },
  getCoupon: token => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}promotion/coupon/active?coupon_type=unik`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getPromo: (token, params) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}promotion/promo?${query_string__WEBPACK_IMPORTED_MODULE_0___default().stringify(params)}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getBestTenCity: token => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}product/hotel/besttencity`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getHotelTerdekat: (lat, lon) => {
    // return fetch(`${process.env.NEXT_PUBLIC_API_URL}product/hotel/hotelTerdekat?city=${area}&lat=${lat}&lon=${lon}`, {
    return fetch(`${"https://api.masterdiskon.com/v1/"}apitrav/booking/hotelTerdekat?lat=${lat}&lang=${lon}`).then(res => res.json());
  },
  searchHotelTerdekat: (token, search, lat, lon) => {
    // return fetch(`${process.env.NEXT_PUBLIC_API_URL}product/hotel/hotelTerdekat?city=${area}&lat=${lat}&lon=${lon}`, {
    return fetch(`https://jsx.masterdiskon.com/tbuddy/nearBySearch?search=${search}&lat=${lat}&lang=${lon}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getPopularFlight: token => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}product/flight/popular`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getBanner: token => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}front/beranda/banner`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getAutocomplete: (token, params, lat, lng) => {
    const link = params.product === 'hotel' ? "https://api.masterdiskon.com/v1/apitrav/" : "https://api.masterdiskon.com/v1/";
    return fetch(`${link}booking/autocomplete?${query_string__WEBPACK_IMPORTED_MODULE_0___default().stringify(params)}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getAutocompleteTrain: (token, params) => {
    return fetch(`${"https://staging-api.masterdiskon.com/"}KAI/station/get-station?search=${params.q}`).then(res => res.json());
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeApi);

/***/ })

};
;