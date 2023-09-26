"use strict";
exports.id = 7307;
exports.ids = [7307];
exports.modules = {

/***/ 7307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2816);
/* harmony import */ var _store_user_userActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2386);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const LabelStyled = styled_components__WEBPACK_IMPORTED_MODULE_6___default().label.withConfig({
  displayName: "AccountProfileForm__LabelStyled",
  componentId: "sc-6u1xln-0"
})(["font-size:16px;font-weight:bold;@media screen and (max-width:1224px){margin-bottom:1px;font-size:12px;}"]);
const ButtonStyled = styled_components__WEBPACK_IMPORTED_MODULE_6___default().button.withConfig({
  displayName: "AccountProfileForm__ButtonStyled",
  componentId: "sc-6u1xln-1"
})(["@media screen and (max-width:1224px){width:100%;}"]);

function AccountProfileForm(props) {
  const {
    user,
    handleOpen
  } = props;
  const {
    0: phoneCodes,
    1: setPhoneCodes
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const {
    0: updateUser,
    1: setUpdateUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(user !== null && user !== void 0 ? user : {});
  const isTabletOrMobile = (0,react_responsive__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)({
    query: '(max-width: 1224px)'
  });
  const {
    access_token
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.token);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    _api_user__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getCountries */ .Z.getCountries().then(res => {
      if (res.success) {
        setPhoneCodes(res.data.map(item => ({
          code: item.phone,
          country: item.country_name
        })));
      }
    });
  }, []);

  const handleChangeUpdateUser = e => {
    const {
      value,
      name
    } = e.target;
    setUpdateUser(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  const handleSubmit = () => {
    var _updateUser$birthdate;

    updateUser.birthdate = updateUser === null || updateUser === void 0 ? void 0 : (_updateUser$birthdate = updateUser.birthdate) === null || _updateUser$birthdate === void 0 ? void 0 : _updateUser$birthdate.replaceAll('-', '');
    _api_user__WEBPACK_IMPORTED_MODULE_0__/* ["default"].updateProfile */ .Z.updateProfile(access_token, _objectSpread(_objectSpread({}, updateUser), {}, {
      birthdate: updateUser !== null && updateUser !== void 0 && updateUser.birthdate ? moment__WEBPACK_IMPORTED_MODULE_1___default()(updateUser === null || updateUser === void 0 ? void 0 : updateUser.birthdate).format('YYYY-MM-DD') : ""
    })).then(res => {
      if (res.success) {
        react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success('Profile berhasil diubah');
        dispatch((0,_store_user_userActions__WEBPACK_IMPORTED_MODULE_8__/* .changeUser */ .A)(updateUser));
        handleOpen();
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(res.message);
      }
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(RootStyled, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "form-row",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: "col-md-12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "form-group",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(LabelStyled, {
            children: "Nama Pengguna"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("input", {
            type: "text",
            name: "username",
            className: "form-control",
            value: updateUser.username == '' ? updateUser.email : updateUser.username,
            readOnly: true
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: "col-md-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "form-group",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(LabelStyled, {
            children: "Panggilan/Sebutan"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("select", {
            onChange: handleChangeUpdateUser,
            value: updateUser.title,
            name: "title",
            className: "form-control gender",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("option", {
              value: "Mr",
              selected: "selected",
              children: "Mr."
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("option", {
              value: "Mrs",
              children: "Mrs."
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("option", {
              value: "Ms",
              children: "Ms."
            })]
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: "col-md-5 col-xs-12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "form-group",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(LabelStyled, {
            children: "Nama Depan"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("input", {
            onChange: handleChangeUpdateUser,
            type: "text",
            name: "first",
            className: "form-control",
            value: updateUser.first
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: "col-md-5 col-xs-12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "form-group",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(LabelStyled, {
            children: "Nama Keluarga/Belakang"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("input", {
            onChange: handleChangeUpdateUser,
            type: "text",
            name: "last",
            className: "form-control",
            value: updateUser.last
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: "col-md-6 col-xs-12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "form-group",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(LabelStyled, {
            children: "Tanggal Lahir"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("input", {
            type: "date",
            name: "birthdate",
            className: "form-control datepickertest ",
            onChange: handleChangeUpdateUser,
            value: moment__WEBPACK_IMPORTED_MODULE_1___default()(updateUser.birthdate).format('YYYY-MM-DD')
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: "col-md-6 col-xs-12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "form-group",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(LabelStyled, {
            children: "Surel"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("input", {
            required: true,
            readOnly: true,
            type: "text",
            name: "email",
            className: "form-control",
            value: updateUser.email
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: "col-md-6 col-xs-12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "form-group",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(LabelStyled, {
            children: "Kode Telepon"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "input-group",
            style: {
              width: '100%'
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("select", {
              onChange: handleChangeUpdateUser,
              value: updateUser.phoneCode,
              name: "phoneCode",
              className: "form-control",
              style: {
                width: '30%'
              },
              children: phoneCodes.map(pc => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("option", {
                value: pc.code,
                children: ["[", pc.country, "]", ' ', " ", pc.code]
              }, pc.code))
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("input", {
              type: "number",
              onChange: handleChangeUpdateUser,
              name: "phone",
              className: "form-control",
              value: updateUser.phone,
              style: {
                width: '70%'
              }
            })]
          })]
        })
      }), isTabletOrMobile ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        style: {
          background: '#F5F6FA'
        },
        className: "col-md-12 d-flex justify-content-end fixed-bottom p-3",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(ButtonStyled, {
          type: "submit",
          onClick: handleSubmit,
          className: "btn btn-primary btn-save",
          children: "Simpan Perubahan"
        })
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: "col-md-12 d-flex justify-content-end",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(ButtonStyled, {
          onClick: handleSubmit,
          type: "submit",
          className: "btn btn-primary btn-save",
          children: "Simpan Perubahan"
        })
      })]
    })
  });
}

const RootStyled = styled_components__WEBPACK_IMPORTED_MODULE_6___default().div.withConfig({
  displayName: "AccountProfileForm__RootStyled",
  componentId: "sc-6u1xln-2"
})(["@media screen and (max-width:1224px){padding-bottom:3rem;input,select,button{font-size:12px;}}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountProfileForm);

/***/ })

};
;