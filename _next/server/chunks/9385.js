"use strict";
exports.id = 9385;
exports.ids = [9385];
exports.modules = {

/***/ 9581:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5566);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_0__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];







function FilterCheck(props) {
  const {
    data,
    value,
    onChangeValue
  } = props;
  const {
    0: showMore,
    1: setShowMore
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: limit,
    1: setLimit
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(10);

  const handleShowMore = () => {
    if (!showMore) {
      setLimit(data.items.length);
    } else {
      setLimit(10);
    }

    setShowMore(prev => !prev);
  };

  const updateValue = newValue => {
    if (onChangeValue) {
      onChangeValue({
        filter: data,
        value: newValue
      });
    }
  };

  const handleChange = e => {
    if (data.items.length < 2) {
      if (e.target.checked && !value.includes(e.target.value)) {
        updateValue([e.target.value]);
      }

      if (!e.target.checked && value.includes(e.target.value)) {
        updateValue(value.filter(x => x !== e.target.value));
      }
    } else {
      if (e.target.checked && !value.includes(e.target.value)) {
        updateValue([...value, e.target.value]);
      }

      if (!e.target.checked && value.includes(e.target.value)) {
        updateValue(value.filter(x => x !== e.target.value));
      }
    }
  };

  const itemList = data.items.slice(0, limit).map((item, index) => {
    let label;

    if (item.icon) {
      if (item.loop) {
        label = [];

        for (let index = 0; index < Number(item.slug); index++) {
          if (item.isImg) {
            label[index] = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              style: {
                width: '20px',
                height: '20px',
                position: 'relative',
                display: 'inline-block'
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                src: item.icon,
                layout: "fill",
                objectFit: "cover"
              })
            });
          } else {
            label[index] = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
              icon: item.icon,
              className: item.className
            });
          }
        }
      } else {
        if (item.isImg) {
          label[index] = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            style: {
              width: '20px',
              height: '20px',
              position: 'relative',
              display: 'inline-block'
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
              src: item.icon,
              layout: "fill",
              objectFit: "cover"
            })
          });
        } else {
          label = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
            icon: item.icon,
            className: item.className
          });
        }
      }
    } else {
      label = item.name;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "custom-control custom-checkbox",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
        type: "checkbox",
        className: "custom-control-input",
        id: `${item.slug}_${index}`,
        name: "transit",
        value: item.slug,
        checked: value.find(v => v == item.slug),
        onChange: handleChange
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("label", {
        className: "custom-control-label",
        htmlFor: `${item.slug}_${index}`,
        children: label
      })]
    }, item.slug);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h6", {
      className: "font-weight-bold",
      children: data.name
    }), itemList, data.items.length >= limit && data.items.length > 10 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
      className: "text-white mt-4 d-flex align-items-center",
      href: "javascript:void(0)",
      onClick: handleShowMore,
      children: showMore ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: ['Lihat sebagian', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
          className: "fas fa-angle-up ml-2 mt-1"
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [`Lihat semua (${data.items.length})`, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
          class: "fas fa-angle-down ml-2 mt-1"
        })]
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterCheck);
});

/***/ }),

/***/ 6765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);





function FilterOptionButton(props) {
  const {
    data,
    value,
    onChangeValue
  } = props;

  const updateValue = newValue => {
    if (onChangeValue) {
      onChangeValue({
        filter: data,
        value: newValue
      });
    }
  };

  const items = data.items.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
    type: "button",
    onClick: () => updateValue(item.slug),
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("btn btn-block", {
      'btn-primary': value === item.slug,
      'btn-secondary': value !== item.slug
    }),
    children: item.name
  }));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h6", {
      children: data.name
    }), items]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterOptionButton);

/***/ }),

/***/ 1824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



function FilterSearch(props) {
  const {
    data,
    value,
    onChangeValue
  } = props;

  const updateValue = newValue => {
    onChangeValue({
      filter: data,
      value: newValue
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "form-group mb-0",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
      className: "font-weight-bold",
      children: data.name
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
      type: "text",
      id: "cari-hotel",
      onChange: e => updateValue(e.target.value),
      value: value,
      className: "form-control",
      style: {
        border: '1px solid black',
        borderRadius: '0'
      },
      placeholder: "Cari hotel impian anda ...",
      autoComplete: "off",
      autoFocus: true
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterSearch);

/***/ }),

/***/ 2071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1817);
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rc_slider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);





const {
  createSliderWithTooltip
} = (rc_slider__WEBPACK_IMPORTED_MODULE_0___default());
const Range = (rc_slider__WEBPACK_IMPORTED_MODULE_0___default().Range);

function FilterSlider(props) {
  const {
    data,
    value,
    onChangeValue
  } = props;

  const updateValue = newValue => {
    if (onChangeValue) {
      onChangeValue({
        filter: data,
        value: newValue.toString()
      });
    }
  };

  function formatRupiah(angka) {
    var number_string = String(angka).replace(/[^,\d]/g, '').toString(),
        split = number_string.split(','),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
      let separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }

    return `Rp. ${rupiah}`;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h6", {
      className: "mb-1 font-weight-bold",
      children: data.name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "flex-column",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("small", {
        children: formatRupiah(value[0])
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("small", {
        className: "float-right",
        children: formatRupiah(value[1])
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      style: {
        margin: '0 35px'
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Range, {
        defaultValue: data.defaultValue,
        onChange: updateValue,
        min: data.defaultValue[0],
        max: data.defaultValue[1]
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterSlider);

/***/ }),

/***/ 7016:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5566);
/* harmony import */ var _iconify_icons_fa_regular_moon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4939);
/* harmony import */ var _iconify_icons_fa_regular_moon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_regular_moon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_fa_solid_moon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5129);
/* harmony import */ var _iconify_icons_fa_solid_moon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_moon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_fa_regular_sun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9687);
/* harmony import */ var _iconify_icons_fa_regular_sun__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_regular_sun__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_fa_solid_sun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(724);
/* harmony import */ var _iconify_icons_fa_solid_sun__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_sun__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_0__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];









const icon = {
  moonRegular: (_iconify_icons_fa_regular_moon__WEBPACK_IMPORTED_MODULE_1___default()),
  sunRegular: (_iconify_icons_fa_regular_sun__WEBPACK_IMPORTED_MODULE_3___default()),
  moonSolid: (_iconify_icons_fa_solid_moon__WEBPACK_IMPORTED_MODULE_2___default()),
  sunSolid: (_iconify_icons_fa_solid_sun__WEBPACK_IMPORTED_MODULE_4___default())
};

function FilterTime(props) {
  const {
    data,
    value,
    onChangeValue
  } = props;

  const updateValue = newValue => {
    if (onChangeValue) {
      onChangeValue({
        filter: data,
        value: newValue
      });
    }
  };

  const handleChange = e => {
    if (data.items.length < 2) {
      if (e.target.checked && !value.includes(e.target.value)) {
        updateValue([e.target.value]);
      }

      if (!e.target.checked && value.includes(e.target.value)) {
        updateValue(value.filter(x => x !== e.target.value));
      }
    } else {
      if (e.target.checked && !value.includes(e.target.value)) {
        updateValue([...value, e.target.value]);
      }

      if (!e.target.checked && value.includes(e.target.value)) {
        updateValue(value.filter(x => x !== e.target.value));
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h6", {
      className: "font-weight-bold",
      children: data.name
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: "form-row mb-0 pb-0",
      children: data.items.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "col-6 py-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
          style: {
            fontSize: '11px',
            width: '100%',
            display: 'inline-block'
          },
          className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("btn btn-light border form-check-label", {
            'btn-primary': value.includes(item.slug),
            'btn-light': value.includes(item.slug)
          }),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
            icon: icon[item.icon]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("input", {
            type: "checkbox",
            value: item.slug,
            onChange: handleChange,
            style: {
              opacity: 0,
              width: '100%',
              height: '100%',
              marginTop: '-15%',
              cursor: 'pointer'
            },
            className: "form-check-input bg-danger p-0 check_box filter-check",
            autoComplete: "off"
          }), item.name, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("br", {}), "(", item.slug, ")"]
        })
      }, `${item.slug}_${data.slug}`))
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterTime);
});

/***/ }),

/***/ 806:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_filters_FilterCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9581);
/* harmony import */ var _filters_FilterSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2071);
/* harmony import */ var _filters_FilterSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1824);
/* harmony import */ var _filters_FilterOptionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6765);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3901);
/* harmony import */ var _filters_FilterTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7016);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_filters_FilterTime__WEBPACK_IMPORTED_MODULE_6__, _components_filters_FilterCheck__WEBPACK_IMPORTED_MODULE_0__]);
([_filters_FilterTime__WEBPACK_IMPORTED_MODULE_6__, _components_filters_FilterCheck__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);











const filterComponents = {
  check: _components_filters_FilterCheck__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
  range: _filters_FilterSlider__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  search: _filters_FilterSearch__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
  'option-button': _filters_FilterOptionButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
  time: _filters_FilterTime__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z
};

function WidgetFilter(props) {
  const {
    filters,
    title,
    dispatch,
    values,
    forCom
  } = props;
  const handleValueChange = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(({
    filter,
    value
  }) => {
    const handler = (0,_services_filters__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(filter);

    if (handler) {
      dispatch({
        type: "SET_FILTER_VALUE",
        filter: filter.slug,
        value: handler.isDefaultValue(filter, value) ? undefined : handler.serialize(value)
      });
    }
  }, [dispatch]);

  const handleReset = () => {
    dispatch({
      type: 'RESET_FILTER'
    });
  };

  const filterList = filters.map((item, index) => {
    let filterView;
    let borderView;
    let {
      value
    } = item;
    const handler = (0,_services_filters__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(item);

    if (handler && item.slug in values) {
      value = handler.deserialize(values[item.slug]) || handler.getDefaultValue(item);
    }

    const FilterComponent = filterComponents[item.type];

    if (index !== filters.length - 1) {
      borderView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        style: {
          borderBottom: '6px solid white'
        }
      });
    }

    if (FilterComponent) {
      filterView = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "card-body d-flex flex-column justify-content-center py-3 px-3",
          children: [item.slug.includes('recomendedOnly') && forCom === 'hotel' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "d-flex justify-content-between align-items-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h6", {
              className: "font-weight-bold",
              children: title
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h6", {
              className: "font-weight-bold",
              onClick: handleReset,
              style: {
                cursor: 'pointer'
              },
              children: "Reset"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(FilterComponent, {
            data: item,
            value: value,
            onChangeValue: handleValueChange
          }, item.slug)]
        }), borderView]
      });
    }

    return filterView;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [forCom !== 'hotel' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "d-flex text-primary justify-content-between align-items-center mb-2",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h6", {
        className: "font-weight-bold",
        children: title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
        type: "button",
        onClick: handleReset,
        className: "btn btn-sm btn-danger font-weight-bold",
        children: "Reset"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(RootStyled, {
      className: "card border-0",
      children: filterList
    })]
  });
}

const RootStyled = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
  displayName: "WidgetFilter__RootStyled",
  componentId: "sc-1rctptw-0"
})(["background:rgb(93,156,209);border-radius:15px;color:white;box-shadow:6px 6px 10px -5px rgba(0,0,0,.5);"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidgetFilter);
});

/***/ }),

/***/ 3901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getFilterHandler)
/* harmony export */ });
const SearchFilterHandler = {
  type: "search",
  serialize: value => value,
  deserialize: value => value,
  isDefaultValue: (filter, value) => SearchFilterHandler.getDefaultValue() === value,
  getDefaultValue: () => ''
};
const CheckFilterHandler = {
  type: "check",
  serialize: value => value.join(","),
  deserialize: value => value ? value.split(",") : [],
  isDefaultValue: (filter, value) => value.length === 0,
  getDefaultValue: () => []
};
const RangeFilterHandler = {
  type: "range",
  serialize: value => value,
  deserialize: value => {
    return value ? value.split(',') : RangeFilterHandler.getDefaultValue();
  },
  isDefaultValue: (filter, value) => value.split(',')[0] === RangeFilterHandler.getDefaultValue()[0] && value.split(',')[1] === RangeFilterHandler.getDefaultValue()[1],
  getDefaultValue: () => [0, 0]
};
const OptionButtonFilterHandler = {
  type: "option-button",
  serialize: value => value,
  deserialize: value => value,
  isDefaultValue: value => value === OptionButtonFilterHandler.getDefaultValue(),
  getDefaultValue: () => ''
};
const TimeFilterHandler = {
  type: "time",
  serialize: value => value.join(","),
  deserialize: value => value ? value.split(",") : [],
  isDefaultValue: (filter, value) => value.length === 0,
  getDefaultValue: () => []
};
const handlers = [SearchFilterHandler, CheckFilterHandler, RangeFilterHandler, OptionButtonFilterHandler, TimeFilterHandler];
function getFilterHandler(filter) {
  return handlers.find(x => x.type === filter.type);
}

/***/ }),

/***/ 7118:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var data = {
	"body": "<path d=\"M1403 39q17 41-14 70L896 602v742q0 42-39 59q-13 5-25 5q-27 0-45-19l-256-256q-19-19-19-45V602L19 109Q-12 80 5 39Q22 0 64 0h1280q42 0 59 39z\" fill=\"currentColor\"/>",
	"width": 1408,
	"height": 1408
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);


/***/ })

};
;