"use strict";
exports.id = 8019;
exports.ids = [8019];
exports.modules = {

/***/ 8019:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6981);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_filters_FilterCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9581);
/* harmony import */ var _components_filters_FilterSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2071);
/* harmony import */ var _components_filters_FilterSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1824);
/* harmony import */ var _components_filters_FilterOptionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6765);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_filters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3901);
/* harmony import */ var _components_filters_FilterTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7016);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9368);
/* harmony import */ var _biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_filters_FilterTime__WEBPACK_IMPORTED_MODULE_7__, _components_filters_FilterCheck__WEBPACK_IMPORTED_MODULE_1__]);
([_components_filters_FilterTime__WEBPACK_IMPORTED_MODULE_7__, _components_filters_FilterCheck__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);













const filterComponents = {
  check: _components_filters_FilterCheck__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  range: _components_filters_FilterSlider__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
  search: _components_filters_FilterSearch__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
  'option-button': _components_filters_FilterOptionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
  time: _components_filters_FilterTime__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
};

function WidgetFilterFlight(props) {
  const {
    filters,
    title,
    dispatch,
    values,
    forCom,
    open,
    toggle,
    handleApplyFilter
  } = props;
  const handleValueChange = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(({
    filter,
    value
  }) => {
    const handler = (0,_services_filters__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(filter);

    if (handler) {
      dispatch({
        type: "SET_FILTER_VALUE",
        filter: filter.slug,
        value: handler.isDefaultValue(filter, value) ? undefined : handler.serialize(value)
      }); // toggle('filter')
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
    const handler = (0,_services_filters__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(item);

    if (handler && item.slug in values) {
      value = handler.deserialize(values[item.slug]) || handler.getDefaultValue(item);
    }

    const FilterComponent = filterComponents[item.type];

    if (index !== filters.length - 1) {
      borderView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
        style: {
          borderBottom: '6px solid white'
        }
      });
    }

    if (FilterComponent) {
      filterView = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "card-body d-flex flex-column justify-content-center py-3 px-3",
          children: [item.slug.includes('recomendedOnly') && forCom === 'hotel' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "d-flex justify-content-between align-items-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("h6", {
              className: "font-weight-bold",
              children: title
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("h6", {
              className: "font-weight-bold",
              onClick: handleReset,
              style: {
                cursor: 'pointer'
              },
              children: "Reset"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(FilterComponent, {
            data: item,
            value: value,
            onChangeValue: handleValueChange
          }, item.slug)]
        }), borderView]
      });
    }

    return filterView;
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(DrawerStyled, {
    open: open,
    onClose: () => toggle('filter'),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__.SheetContent, {
      style: {
        background: 'rgb(93,156,209)',
        color: 'white',
        height: '100vh',
        overflowY: 'auto',
        overflowX: 'hidden',
        paddingTop: '20px'
      },
      children: [forCom !== 'hotel' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "d-flex px-4 justify-content-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("h6", {
          onClick: () => toggle('filter'),
          className: "font-weight-bold",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("i", {
            className: "fas fa-times mr-2"
          }), title]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("h6", {
          className: "font-weight-bold",
          onClick: handleApplyFilter,
          style: {
            cursor: 'pointer'
          },
          children: "Apply"
        })]
      }), filterList]
    })
  });
}

const DrawerStyled = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_biotic_ui_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__.BottomSheet).withConfig({
  displayName: "WidgetFilterFlight__DrawerStyled",
  componentId: "sc-dr0bbe-0"
})(["max-height:100%;min-height:100%;border-radius:0;"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidgetFilterFlight);
});

/***/ })

};
;