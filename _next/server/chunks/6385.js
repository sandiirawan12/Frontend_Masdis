"use strict";
exports.id = 6385;
exports.ids = [6385];
exports.modules = {

/***/ 6385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ shop)
});

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: external "query-string"
var external_query_string_ = __webpack_require__(9103);
var external_query_string_default = /*#__PURE__*/__webpack_require__.n(external_query_string_);
;// CONCATENATED MODULE: ./src/api/metadata.js
const metadataApi = {
  getIp: () => {
    return fetch('http://ipinfo.io').then(res => res.json());
  }
};
/* harmony default export */ const metadata = ((/* unused pure expression or super */ null && (metadataApi)));
;// CONCATENATED MODULE: ./src/api/shop.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const shopApi = {
  submitIssued: (token, req) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}booking/confirmissued`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(req)
    }).then(res => res.json());
  },
  getFlightProducts: (token, options, filters) => {
    const req = _objectSpread(_objectSpread({}, options), {}, {
      pax: {
        adult: Number(options['adult']),
        child: Number(options['child']),
        infant: Number(options['infant'])
      },
      filter: {
        airlines: [],
        direct: options['direct']
      }
    });

    return fetch(`${"https://api.masterdiskon.com/v1/"}booking/search`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(req)
    }).then(res => res.json()).then(res => {
      if (res.success) {
        let options = res.data.options.filter(item => {
          var _filters$transit, _filters$transit2;

          let indexOfTwo = (_filters$transit = filters.transit) === null || _filters$transit === void 0 ? void 0 : _filters$transit.indexOf(2);
          return filters.transit ? ((_filters$transit2 = filters.transit) === null || _filters$transit2 === void 0 ? void 0 : _filters$transit2.includes(item.filter.transit)) || item.filter.transit >= filters.transit[indexOfTwo] : true;
        }).filter(item => {
          return filters.departure_time ? filters.departure_time.split(',').reduce((prev, val) => {
            let timeFilter = val.split('-');
            const time = external_moment_default()(item.filter.departure_time, 'hh:ss'),
                  after = external_moment_default()(timeFilter[1], 'hh:ss'),
                  before = external_moment_default()(timeFilter[0], 'hh:ss');
            return time.isBetween(before, after) || time.isSame(after) || time.isSame(before) || prev;
          }, Boolean()) : item;
        }).filter(item => {
          return filters.arrival_time ? filters.arrival_time.split(',').reduce((prev, val) => {
            let timeFilter = val.split('-');
            const time = external_moment_default()(item.filter.arrival_time, 'hh:ss'),
                  after = external_moment_default()(timeFilter[1], 'hh:ss'),
                  before = external_moment_default()(timeFilter[0], 'hh:ss');
            return time.isBetween(before, after) || time.isSame(after) || time.isSame(before) || prev;
          }, Boolean()) : item;
        }).filter(item => filters.facility ? filters.facility.split(',').reduce((a, c) => item.filter[c] && a, true) : item).filter(item => filters.price ? item.filter.price >= filters.price.split(',')[0] && item.filter.price <= filters.price.split(',')[1] : item).filter(item => filters.airline_code ? filters.airline_code.split(',').includes(item.filter.airline_code) : item);
        const optionsRt = res.data.optionsRt.filter(item => {
          var _filters$transit3, _filters$transit4;

          let indexOfTwo = (_filters$transit3 = filters.transit) === null || _filters$transit3 === void 0 ? void 0 : _filters$transit3.indexOf(2);
          return filters.transit ? ((_filters$transit4 = filters.transit) === null || _filters$transit4 === void 0 ? void 0 : _filters$transit4.includes(item.filter.transit)) || item.filter.transit >= filters.transit[indexOfTwo] : true;
        }).filter(item => {
          return filters.departure_time ? filters.departure_time.split(',').reduce((prev, val) => {
            let timeFilter = val.split('-');
            const time = external_moment_default()(item.filter.departure_time, 'hh:ss'),
                  after = external_moment_default()(timeFilter[1], 'hh:ss'),
                  before = external_moment_default()(timeFilter[0], 'hh:ss');
            return time.isBetween(before, after) || time.isSame(after) || time.isSame(before) || prev;
          }, Boolean()) : item;
        }).filter(item => {
          return filters.arrival_time ? filters.arrival_time.split(',').reduce((prev, val) => {
            let timeFilter = val.split('-');
            const time = external_moment_default()(item.filter.arrival_time, 'hh:ss'),
                  after = external_moment_default()(timeFilter[1], 'hh:ss'),
                  before = external_moment_default()(timeFilter[0], 'hh:ss');
            return time.isBetween(before, after) || time.isSame(after) || time.isSame(before) || prev;
          }, Boolean()) : item;
        }).filter(item => filters.facility ? filters.facility.split(',').reduce((a, c) => item.filter[c] && a, true) : item).filter(item => filters.price ? item.filter.price >= filters.price.split(',')[0] && item.filter.price <= filters.price.split(',')[1] : item).filter(item => filters.airline_code ? filters.airline_code.split(',').includes(item.filter.airline_code) : item);
        if (filters.statSort[filters.orderType]) options = options.sort((a, b) => {
          var _a$filter, _b$filter;

          return parseInt(a === null || a === void 0 ? void 0 : (_a$filter = a.filter) === null || _a$filter === void 0 ? void 0 : _a$filter[filters === null || filters === void 0 ? void 0 : filters.orderType]) > parseInt(b === null || b === void 0 ? void 0 : (_b$filter = b.filter) === null || _b$filter === void 0 ? void 0 : _b$filter[filters === null || filters === void 0 ? void 0 : filters.orderType]) ? 1 : -1;
        });else options = options.sort((a, b) => {
          var _a$filter2, _b$filter2;

          return parseInt(a === null || a === void 0 ? void 0 : (_a$filter2 = a.filter) === null || _a$filter2 === void 0 ? void 0 : _a$filter2[filters === null || filters === void 0 ? void 0 : filters.orderType]) > parseInt(b === null || b === void 0 ? void 0 : (_b$filter2 = b.filter) === null || _b$filter2 === void 0 ? void 0 : _b$filter2[filters === null || filters === void 0 ? void 0 : filters.orderType]) ? -1 : 1;
        });
        return _objectSpread(_objectSpread({}, res), {}, {
          data: _objectSpread(_objectSpread({}, res.data), {}, {
            options,
            optionsRt
          })
        });
      }

      return res;
    });
  },
  getTrainProducts: (token, options, filters) => {
    // Tanggal dalam format "DD-MM-YYYY" diubah menjadi "YYYY-MM-DD"
    const tanggalBerangkat = options['dateFrom'];
    const tanggalPecah = tanggalBerangkat.split('-');
    const hari = tanggalPecah[0];
    const bulan = tanggalPecah[1];
    const tahun = tanggalPecah[2];
    const tanggalBerangkatAkhir = tahun + '-' + bulan + '-' + hari;
    const tanggalPulang = options['dateTo'];
    const tanggalPecah1 = tanggalPulang.split('-');
    const hari1 = tanggalPecah1[0];
    const bulan1 = tanggalPecah1[1];
    const tahun1 = tanggalPecah1[2];
    const tanggalPulangAkhir = tahun1 + '-' + bulan1 + '-' + hari1;
    const req = {
      origin: options['from'],
      destination: options['to'],
      departure_date: tanggalBerangkatAkhir,
      return_date: tanggalPulangAkhir,
      direction: options['direct'],
      adult: Number(options['adult']),
      child: Number(options['child']),
      infant: Number(options['infant']),
      filter: {
        price_range: filters.price === undefined ? [0, 1500000] : [parseInt(filters.price.split(',')[0]), parseInt(filters.price.split(',')[1])],
        departure_time: filters.departure_time === undefined ? [] : filters.departure_time.split(','),
        class_name: filters.kelas === undefined ? [] : filters.kelas.split(','),
        train_name: []
      }
    };
    return fetch(`${"https://staging-api.masterdiskon.com/"}KAI/station/search-station`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req)
    }).then(res => res.json());
  },
  getSelectTrainSchedule: (token, email, options, item) => {
    // Tanggal dalam format "DD-MM-YYYY" diubah menjadi "YYYY-MM-DD"
    const tanggalBerangkat = options['dateFrom'];
    const tanggalPecah = tanggalBerangkat.split('-');
    const hari = tanggalPecah[0];
    const bulan = tanggalPecah[1];
    const tahun = tanggalPecah[2];
    const tanggalBerangkatAkhir = tahun + '-' + bulan + '-' + hari;
    const tanggalPulang = options['dateTo'];
    const tanggalPecah1 = tanggalPulang.split('-');
    const hari1 = tanggalPecah1[0];
    const bulan1 = tanggalPecah1[1];
    const tahun1 = tanggalPecah1[2];
    const tanggalPulangAkhir = tahun1 + '-' + bulan1 + '-' + hari1;
    const req = {
      email: email,
      origin: options['from'],
      destination: options['to'],
      departure_date: tanggalBerangkatAkhir,
      return_date: tanggalPulangAkhir,
      direction: options['direct'],
      adult: Number(options['adult']),
      child: Number(options['child']),
      infant: Number(options['infant']),
      data_schedule: item
    };
    return fetch(`${"https://staging-api.masterdiskon.com/"}KAI/station/select-schedule`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req)
    }).then(res => res.json());
  },
  getDataSchedule: (id_schedule, email) => {
    return fetch(`${"https://staging-api.masterdiskon.com/"}KAI/station/get-schedule?id_schedule=${id_schedule}&email=${email}`).then(res => res.json());
  },
  getFlightProduct: (token, req) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}booking/detail`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(req)
    }).then(res => res.json());
  },
  getPaymentCategory: token => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}order/payment/category`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getFlightRepricing: (token, req) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}booking/repricing`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(req)
    }).then(res => res.json());
  },
  getCountPrice: (token, req) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}booking/count`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(req)
    }).then(res => res.json());
  },
  submitCheckout: (token, req) => {
    const baseUrl = req.product == 'hotel' ? "https://api.masterdiskon.com/v1/apitrav/" : "https://api.masterdiskon.com/v1/";
    return fetch(`${baseUrl}booking/checkout`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(req)
    }).then(res => res.json());
  },
  submitCheckoutTrain: req => {
    return fetch(`${"https://staging-api.masterdiskon.com/"}KAI/booking/create-booking`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req)
    }).then(res => res.json());
  },
  cekCoupon: (token, req) => {
    const baseUrl = req.product == 'hotel' ? "https://api.masterdiskon.com/v1/apitrav/" : "https://api.masterdiskon.com/v1/";
    return fetch(`https://jsx.masterdiskon.com/voucher/makeotp?code=${req}`, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  aktifCoupon: (token, code, otp) => {
    return fetch(`https://jsx.masterdiskon.com/voucher/aktifotp?code=${code}&otp=${otp}`, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getHotelProducts: (token, options, filters) => {
    const req = _objectSpread(_objectSpread({}, options), {}, {
      product: 'hotel',
      "classFrom": '0',
      "classTo": '5',
      showDetail: false,
      pax: {
        "room": options.room,
        "adult": options.adult,
        "child": options.child,
        "infant": options.infant,
        "childAge": options.childAge
      }
    });

    let obj;
    Object.keys(filters).forEach(slug => {
      if (slug === 'price') {
        const priceRange = filters[slug] ? filters[slug].split(',').map(item => Number(item)) : [0, 0];
        obj = _objectSpread(_objectSpread({}, req.filter), {}, {
          priceFrom: priceRange[0],
          priceTo: priceRange[1]
        });
      } else if (slug !== 'orderType' && slug !== 'class' && slug !== 'reviews' && slug !== 'recomendedOnly' && slug !== 'amenities' && slug !== 'search') {
        obj = _objectSpread(_objectSpread({}, req.filter), {}, {
          [slug]: Number(filters[slug])
        });
      } else if (slug === 'class') {
        obj = _objectSpread(_objectSpread({}, req.filter), {}, {
          [slug]: filters[slug] ? filters[slug].split(',').map(item => Number(item)) : []
        });
      } else if (slug === 'reviews') {
        obj = _objectSpread(_objectSpread({}, req.filter), {}, {
          [slug]: filters[slug] ? filters[slug].split(',').map(item => Number(item)) : []
        });
      } else if (slug === 'recomendedOnly') {
        obj = _objectSpread(_objectSpread({}, req.filter), {}, {
          [slug]: filters[slug] === 'true'
        });
      } else if (slug === 'amenities') {
        let amenities = filters[slug] == undefined ? [] : req.filter.amenities ? req.filter.amenities.concat(filters[slug].split(',')) : filters[slug].split(',');
        obj = _objectSpread(_objectSpread({}, req.filter), {}, {
          amenities
        });
      } else {
        obj = _objectSpread(_objectSpread({}, req.filter), {}, {
          [slug]: filters[slug]
        });
      }

      req.filter = obj;
    });
    return fetch(`${"https://api.masterdiskon.com/v1/apitrav/"}booking/search`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(req)
    }).then(res => res.json());
  },
  getDetailHotel: (token, options) => {
    const req = _objectSpread(_objectSpread({}, options), {}, {
      product: 'hotel',
      "classFrom": '0',
      "classTo": '5',
      showDetail: false,
      productDetail: options.productId,
      pax: {
        "room": options.room,
        "adult": options.adult,
        "child": options.child,
        "infant": options.infant,
        "childAge": options.childAge
      }
    });

    return fetch(`${"https://api.masterdiskon.com/v1/apitrav/"}booking/offerdetail`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(req)
    }).then(res => res.json());
  },
  //////////////// VIA HOTEL \\\\\\\\\\\\\\\\\\\\
  getDetailHotelVia: (token, options) => {
    const req = {
      idHotel: options.productId,
      // '3000010029705', //
      dateFrom: options.dateFrom,
      //'19-04-2023', 
      dateTo: options.dateTo //"20-04-2023",Silahkan pilih ulang pesanan anda

    };
    console.log("idHotel" + JSON.stringify(req));
    return fetch(`https://jsx.masterdiskon.com/getRoomVia`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(req)
    }).then(res => res.json());
  },
  getAvailHotelVia: (token, req) => {
    return fetch(`https://api.masterdiskon.com/v1/booking/prebook`, {
      method: 'post',
      body: JSON.stringify(req),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
  },
  getPrebookHotelVia: (token, options) => {
    const req = _objectSpread(_objectSpread({}, options), {}, {
      product: 'hotel'
    });

    return fetch(`https://api.masterdiskon.com/v1/booking/prebook`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(req)
    }).then(res => res.json());
  },
  getCheckoutHotelVia: (token, options) => {
    return fetch(`https://api.masterdiskon.com/v1/booking/checkout?${external_query_string_default().stringify(options)}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  submitCheckoutVia: (token, req) => {
    const baseUrl = req.product == 'hotel' ? "https://api.masterdiskon.com/v1/apitrav/" : "https://api.masterdiskon.com/v1/";
    return fetch(`https://api.masterdiskon.com/v1/booking/checkout`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(req)
    }).then(res => res.json());
  },
  //////////////// END VIA HOTEL \\\\\\\\\\\\\\\\\\\\
  getPrebookHotel: (token, options) => {
    const req = _objectSpread(_objectSpread({}, options), {}, {
      product: 'hotel'
    });

    return fetch(`${"https://api.masterdiskon.com/v1/apitrav/"}booking/prebook`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(req)
    }).then(res => res.json());
  },
  getCheckoutHotel: (token, options) => {
    return fetch(`${"https://api.masterdiskon.com/v1/apitrav/"}booking/checkout?${external_query_string_default().stringify(options)}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getCategoryGeneralProduct: (token, params) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}product/category?${external_query_string_default().stringify(params)}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getGeneralProducts: (token, options, filters) => {
    let params = _objectSpread({}, options);

    Object.keys(filters).forEach(slug => {
      let obj;

      if (slug === 'id_city' || slug === 'tag') {
        obj = _objectSpread(_objectSpread({}, params), {}, {
          [`${slug}[]`]: filters[slug] ? filters[slug].split(',') : []
        });
      } else if (slug === 'price') {
        obj = _objectSpread(_objectSpread({}, params), {}, {
          price_from: filters[slug].split('-')[0],
          price_to: filters[slug].split('-')[1]
        });
      } else if (slug === 'sort') {
        obj = _objectSpread(_objectSpread({}, params), {}, {
          order: filters[slug].split('-')[0],
          order_type: filters[slug].split('-')[1]
        });
      } else {
        obj = _objectSpread(_objectSpread({}, params), {}, {
          [slug]: filters[slug]
        });
      }

      params = obj;
    });
    return fetch(`${"https://api.masterdiskon.com/v1/"}product?${external_query_string_default().stringify(params)}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getGeneralProduct: (token, slug) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}product/${slug}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getCheckoutGeneralProduct: (token, options) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}booking/checkout?${external_query_string_default().stringify(options)}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getTagCategory: (token, params) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}product/tag?${external_query_string_default().stringify(params)}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getFilterCity: token => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}product/city`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getFilterCity: token => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}product/city`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getListPromo: (token, options) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}promotion/promo?${external_query_string_default().stringify(options)}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getDetailPromo: (token, slug) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}promotion/promo/${slug}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  claimPromo: (token, req) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}promotion/coupon/claim`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(req)
    }).then(res => res.json());
  },
  getReviews: (token, options) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}product/review?${external_query_string_default().stringify(options)}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getReviewType: token => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}product/review/type`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  addReview: (data, token) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}product/review`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(data)
    }).then(res => res.json());
  },
  getStore: (id, token) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}partner/store/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
  },
  getProductByStore: (token, options) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}product?${external_query_string_default().stringify(options)}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
  },
  getTagEvent: (token, options) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}product/events/tag`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
  },
  getEventSchedule: (token, param) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}product/events/schedule/${param}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
  },
  getAvailHotel: (token, req) => {
    return fetch(`${"https://api.masterdiskon.com/v1/apitrav/"}booking/avail`, {
      method: 'post',
      body: JSON.stringify(req),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
  },
  getVendorOffices: token => {
    return fetch(`${"https://api.masterdiskon.com/v1/apitrav/"}product/offices`, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getDetailVendorOffice: (token, id) => {
    return fetch(`${"https://api.masterdiskon.com/v1/apitrav/"}product/offices/${id}`, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getArenaByCategory: (token, slug) => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}product/events/arena/${slug}`, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  },
  getTagArena: token => {
    return fetch(`${"https://api.masterdiskon.com/v1/"}product/events/tag-arena`, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());
  }
};
/* harmony default export */ const shop = (shopApi);

/***/ })

};
;