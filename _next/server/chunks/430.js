"use strict";
exports.id = 430;
exports.ids = [430];
exports.modules = {

/***/ 430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ shared_WidgetSorting)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/sorts/SortButton.jsx



function SortButton({
  sort,
  dispatch
}) {
  const handleSorting = (0,external_react_.useCallback)(value => {
    dispatch({
      type: 'SET_FILTER_VALUE',
      filter: 'orderType',
      value
    });
  }, [dispatch]);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "header-div mb-2 d-flex",
    children: sort.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex-fill  px-1",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "btn btn-sm btn-primary btn-block font-weight-bold",
        onClick: () => handleSorting(item.value),
        children: item.name
      })
    }, index))
  });
}

/* harmony default export */ const sorts_SortButton = (SortButton);
;// CONCATENATED MODULE: ./src/components/sorts/SortSelect.jsx




function SortSelect({
  sort,
  dispatch,
  state
}) {
  const handleSorting = (0,external_react_.useCallback)(e => {
    const {
      value
    } = e.target;
    dispatch({
      type: 'SET_FILTER_VALUE',
      filter: 'orderType',
      value
    });
  }, [dispatch]);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "input-group",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
      id: "sortPrice",
      value: state.filters.orderType,
      name: "sortPrice",
      className: "form-control shortPriceDekstop",
      onChange: handleSorting,
      children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
        value: '',
        children: "Popularity"
      }), sort.map(item => /*#__PURE__*/jsx_runtime_.jsx("option", {
        value: item.value,
        children: item.name
      }, item.value))]
    })
  });
}

/* harmony default export */ const sorts_SortSelect = (SortSelect);
;// CONCATENATED MODULE: ./src/components/shared/WidgetSorting.jsx




const sortComponents = {
  button: sorts_SortButton,
  select: sorts_SortSelect
};

function WidgetSorting(props) {
  const {
    data,
    dispatch,
    state
  } = props;
  const SortComponent = sortComponents[data.type];
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(SortComponent, {
      sort: data.sorts,
      dispatch: dispatch,
      state: state
    })
  });
}

/* harmony default export */ const shared_WidgetSorting = (WidgetSorting);

/***/ })

};
;