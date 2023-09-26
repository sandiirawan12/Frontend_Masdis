"use strict";
exports.id = 9889;
exports.ids = [9889];
exports.modules = {

/***/ 9889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2816);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function QuickpickForm(props) {
  var _quickpick$type, _quickpick$title, _quickpick$firstname, _quickpick$lastname, _quickpick$email, _quickpick$phone, _quickpick$phone_code, _quickpick$nationalit, _quickpick$nationalit2, _quickpick$nationalit3, _quickpick$birthdate, _quickpick$passport_n, _quickpick$passport_e, _quickpick$passport_c, _quickpick$passport_c2, _quickpick$identity_c, _quickpick$identity_c2, _quickpick$identity_d, _quickpick$identity_d2;

  const {
    quickpick,
    from,
    id
  } = props;
  const {
    0: countries,
    1: setCountries
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const {
    access_token
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.token);
  const isTabletOrMobile = (0,react_responsive__WEBPACK_IMPORTED_MODULE_9__.useMediaQuery)({
    query: '(max-width: 1224px)'
  });
  const validationSchema = yup__WEBPACK_IMPORTED_MODULE_7__.object().shape({
    type: yup__WEBPACK_IMPORTED_MODULE_7__.string().required('Tidak boleh kosong'),
    title: yup__WEBPACK_IMPORTED_MODULE_7__.string().required('Tidak boleh kosong'),
    firstname: yup__WEBPACK_IMPORTED_MODULE_7__.string().required('Nama Depan tidak boleh kosong'),
    lastname: yup__WEBPACK_IMPORTED_MODULE_7__.string().required('Nama Keluarga tidak boleh kosong'),
    email: yup__WEBPACK_IMPORTED_MODULE_7__.string().required('Email tidak boleh kosong').email('Alamat email tidak valid'),
    phone: yup__WEBPACK_IMPORTED_MODULE_7__.string().required('Nomor telepon tidak boleh kosong'),
    nationality_id: yup__WEBPACK_IMPORTED_MODULE_7__.string().required('Kebangsaan tidak boleh kosong'),
    birthdate: yup__WEBPACK_IMPORTED_MODULE_7__.string().required('Tanggal lahir tidak boleh kosong'),
    identity_card_number: yup__WEBPACK_IMPORTED_MODULE_7__.number().typeError('Nomor kartu identitas tidak valid'),
    passport_number: yup__WEBPACK_IMPORTED_MODULE_7__.number().typeError('Nomor kartu identitas tidak valid')
  });
  const formik = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormik)({
    initialValues: {
      type: (_quickpick$type = quickpick === null || quickpick === void 0 ? void 0 : quickpick.type) !== null && _quickpick$type !== void 0 ? _quickpick$type : 'ADT',
      title: (_quickpick$title = quickpick === null || quickpick === void 0 ? void 0 : quickpick.title) !== null && _quickpick$title !== void 0 ? _quickpick$title : 'Mr',
      firstname: (_quickpick$firstname = quickpick === null || quickpick === void 0 ? void 0 : quickpick.firstname) !== null && _quickpick$firstname !== void 0 ? _quickpick$firstname : '',
      lastname: (_quickpick$lastname = quickpick === null || quickpick === void 0 ? void 0 : quickpick.lastname) !== null && _quickpick$lastname !== void 0 ? _quickpick$lastname : '',
      email: (_quickpick$email = quickpick === null || quickpick === void 0 ? void 0 : quickpick.email) !== null && _quickpick$email !== void 0 ? _quickpick$email : '',
      phone: (_quickpick$phone = quickpick === null || quickpick === void 0 ? void 0 : quickpick.phone) !== null && _quickpick$phone !== void 0 ? _quickpick$phone : '',
      phone_code: (_quickpick$phone_code = quickpick === null || quickpick === void 0 ? void 0 : quickpick.phone_code) !== null && _quickpick$phone_code !== void 0 ? _quickpick$phone_code : '62',
      nationality: (_quickpick$nationalit = quickpick === null || quickpick === void 0 ? void 0 : quickpick.nationality) !== null && _quickpick$nationalit !== void 0 ? _quickpick$nationalit : '',
      nationality_id: (_quickpick$nationalit2 = quickpick === null || quickpick === void 0 ? void 0 : quickpick.nationality_id) !== null && _quickpick$nationalit2 !== void 0 ? _quickpick$nationalit2 : 'ID',
      nationality_phone_code: (_quickpick$nationalit3 = quickpick === null || quickpick === void 0 ? void 0 : quickpick.nationality_phone_code) !== null && _quickpick$nationalit3 !== void 0 ? _quickpick$nationalit3 : '',
      birthdate: (_quickpick$birthdate = quickpick === null || quickpick === void 0 ? void 0 : quickpick.birthdate) !== null && _quickpick$birthdate !== void 0 ? _quickpick$birthdate : '',
      passport_number: (_quickpick$passport_n = quickpick === null || quickpick === void 0 ? void 0 : quickpick.passport_number) !== null && _quickpick$passport_n !== void 0 ? _quickpick$passport_n : '',
      passport_expiry_date: (_quickpick$passport_e = quickpick === null || quickpick === void 0 ? void 0 : quickpick.passport_expiry_date) !== null && _quickpick$passport_e !== void 0 ? _quickpick$passport_e : '',
      passport_country: (_quickpick$passport_c = quickpick === null || quickpick === void 0 ? void 0 : quickpick.passport_country) !== null && _quickpick$passport_c !== void 0 ? _quickpick$passport_c : '',
      passport_country_id: (_quickpick$passport_c2 = quickpick === null || quickpick === void 0 ? void 0 : quickpick.passport_country_id) !== null && _quickpick$passport_c2 !== void 0 ? _quickpick$passport_c2 : '',
      identity_card_number: (_quickpick$identity_c = quickpick === null || quickpick === void 0 ? void 0 : quickpick.identity_card_number) !== null && _quickpick$identity_c !== void 0 ? _quickpick$identity_c : '',
      identity_country: (_quickpick$identity_c2 = quickpick === null || quickpick === void 0 ? void 0 : quickpick.identity_country) !== null && _quickpick$identity_c2 !== void 0 ? _quickpick$identity_c2 : '',
      identity_date_issue: (_quickpick$identity_d = quickpick === null || quickpick === void 0 ? void 0 : quickpick.identity_date_issue) !== null && _quickpick$identity_d !== void 0 ? _quickpick$identity_d : '',
      identity_date_expiry: (_quickpick$identity_d2 = quickpick === null || quickpick === void 0 ? void 0 : quickpick.identity_date_expiry) !== null && _quickpick$identity_d2 !== void 0 ? _quickpick$identity_d2 : ''
    },
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values, actions) => {
      let req = {
        type: values.type,
        guest: {
          "title": values.title,
          "firstname": values.firstname,
          "lastname": values.lastname,
          "email": values.email,
          "phone": values.phone,
          "phone_code": values.nationality_phone_code,
          "nationality_id": values.nationality_id,
          "birthdate": values.birthdate
        },
        "identity_card": {
          "card_number": values.identity_card_number || '',
          "country_id": values.identity_country || '',
          "date_issue": values.identity_date_issue || '',
          "date_expiry": values.identity_date_expiry || ''
        },
        "passport": {
          "number": values.passport_number || '',
          "expiry_date": values.passport_expiry_date || '',
          "country_id": values.passport_country_id || ''
        }
      };

      if (from === 'edit') {
        _api_user__WEBPACK_IMPORTED_MODULE_0__/* ["default"].updateQuickpick */ .Z.updateQuickpick(access_token, req, id).then(res => {
          if (res.success) {
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success('Quickpik berhasil diubah');
            next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/user/quickpick');
          } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error('Quickpik gagal diubah');
          }

          actions.setSubmitting(false);
        });
      } else {
        _api_user__WEBPACK_IMPORTED_MODULE_0__/* ["default"].addQuickpick */ .Z.addQuickpick(access_token, req).then(res => {
          if (res.success) {
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success('Quickpik berhasil ditambahkan');
            next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/user/quickpick');
          } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error('Quickpik gagal ditambahkan');
          }

          actions.setSubmitting(false);
        });
      }
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    _api_user__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getCountries */ .Z.getCountries().then(res => {
      if (res.success) {
        setCountries(res.data);
      }
    });
  }, []);
  const {
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    getFieldProps
  } = formik;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(RootStyled, {
    children: [!isTabletOrMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("h3", {
        className: "title",
        children: "Masukkan data Penumpang"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("p", {
        className: "sub-title",
        children: "Sisipkan dengan identitas yang benar"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.FormikProvider, {
      value: formik,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("form", {
        onSubmit: handleSubmit,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
          className: "card",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "card-body",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("h4", {
              className: "title",
              children: "Umum"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
                className: "col-md-2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("label", {
                    htmlFor: "type",
                    children: "Tipe*"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("select", _objectSpread(_objectSpread({}, getFieldProps('type')), {}, {
                    name: "type",
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("form-control", {
                      "is-invalid": Boolean(touched.type && errors.type)
                    }),
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("option", {
                      value: "ADT",
                      children: "Dewasa"
                    }, 'adt'), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("option", {
                      value: "CHD",
                      children: "Anak-anak"
                    }, 'chd'), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("option", {
                      value: "INF",
                      children: "Bayi"
                    }, 'inf')]
                  })), Boolean(touched.type && errors.type) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("small", {
                    className: "invalid-feedback",
                    children: touched.type && errors.type
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
                className: "col-md-2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("label", {
                    children: "Sebutan/Panggilan*"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                    className: "pilihan_title",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("select", _objectSpread(_objectSpread({}, getFieldProps('title')), {}, {
                      name: "title",
                      id: "title",
                      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("form-control", {
                        "is-invalid": Boolean(touched.title && errors.title)
                      }),
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("option", {
                        value: "Mr",
                        children: "Mr."
                      }, 'mr'), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("option", {
                        value: "Mrs",
                        children: "Mrs."
                      }, 'mrs'), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("option", {
                        value: "Ms",
                        children: "Ms."
                      }, 'ms')]
                    })), Boolean(touched.title && errors.title) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("small", {
                      className: "invalid-feedback",
                      children: touched.title && errors.title
                    })]
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
                className: "col-md-4",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("label", {
                    children: "Nama depan*"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("input", _objectSpread(_objectSpread({}, getFieldProps('firstname')), {}, {
                    type: "text",
                    name: "firstname",
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("form-control", {
                      "is-invalid": Boolean(touched.firstname && errors.firstname)
                    }),
                    placeholder: "Masukkan Nama depan"
                  })), Boolean(touched.firstname && errors.firstname) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("small", {
                    className: "invalid-feedback",
                    children: touched.firstname && errors.firstname
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
                className: "col-md-4",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("label", {
                    children: "Nama keluarga*"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("input", _objectSpread(_objectSpread({}, getFieldProps('lastname')), {}, {
                    type: "text",
                    name: "lastname",
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("form-control", {
                      "is-invalid": Boolean(touched.lastname && errors.lastname)
                    }),
                    placeholder: "Masukkan Nama keluarga"
                  })), Boolean(touched.lastname && errors.lastname) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("small", {
                    className: "invalid-feedback",
                    children: touched.lastname && errors.lastname
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("label", {
                    children: "Surel*"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("input", _objectSpread(_objectSpread({}, getFieldProps('email')), {}, {
                    type: "text",
                    name: "email",
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("form-control", {
                      "is-invalid": Boolean(touched.email && errors.email)
                    }),
                    placeholder: "Masukkan Surel"
                  })), Boolean(touched.email && errors.email) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("small", {
                    className: "invalid-feedback",
                    children: touched.email && errors.email
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("label", {
                    children: "Nomor telepon*"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("input", _objectSpread(_objectSpread({
                    type: "text",
                    name: "phone"
                  }, getFieldProps('phone')), {}, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("form-control", {
                      "is-invalid": Boolean(touched.phone && errors.phone)
                    }),
                    placeholder: "Masukkan Nomor telepon"
                  })), Boolean(touched.phone && errors.phone) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("small", {
                    className: "invalid-feedback",
                    children: touched.phone && errors.phone
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("label", {
                    children: "Kebangsaan*"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("select", _objectSpread(_objectSpread({}, getFieldProps('nationality_id')), {}, {
                    name: "nationality_id",
                    id: "nationality_id",
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("form-control", {
                      "is-invalid": Boolean(touched.nationality_id && errors.nationality_id)
                    }),
                    children: countries.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("option", {
                      value: item.id,
                      children: item.country_name
                    }))
                  })), Boolean(touched.nationality_id && errors.nationality_id) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("small", {
                    className: "invalid-feedback",
                    children: touched.nationality_id && errors.nationality_id
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("label", {
                    children: "Tanggal lahir*"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("input", _objectSpread(_objectSpread({}, getFieldProps('birthdate')), {}, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("form-control", {
                      "is-invalid": Boolean(touched.birthdate && errors.birthdate)
                    }),
                    type: "date",
                    name: "birthdate",
                    placeholder: "Masukkan Tanggal lahir"
                  })), Boolean(touched.birthdate && errors.birthdate) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("small", {
                    className: "invalid-feedback",
                    children: touched.birthdate && errors.birthdate
                  })]
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("hr", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("h4", {
              className: "title",
              children: "Kartu identitas"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("label", {
                    children: "Nomor kartu identitas"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("input", _objectSpread(_objectSpread({
                    type: "text"
                  }, getFieldProps('identity_card_number')), {}, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("form-control", {
                      "is-invalid": Boolean(touched.identity_card_number && errors.identity_card_number)
                    }),
                    placeholder: "Masukkan Nomor kartu identitas"
                  })), Boolean(touched.identity_card_number && errors.identity_card_number) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("small", {
                    className: "invalid-feedback",
                    children: touched.identity_card_number && errors.identity_card_number
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("label", {
                    children: "Negara yang mengeluarkan "
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("select", _objectSpread(_objectSpread({}, getFieldProps('identity_country')), {}, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("form-control", {
                      "is-invalid": Boolean(touched.identity_country && errors.identity_country)
                    }),
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("option", {
                      value: "",
                      children: "Pilih negara"
                    }), countries.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("option", {
                      value: item.id,
                      children: item.country_name
                    }))]
                  })), Boolean(touched.identity_country && errors.identity_country) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("small", {
                    className: "invalid-feedback",
                    children: touched.identity_country && errors.identity_country
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("label", {
                    children: "Tanggal terbit/pengeluaran"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("input", _objectSpread(_objectSpread({
                    type: "date"
                  }, getFieldProps('identity_date_issue')), {}, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("form-control", {
                      "is-invalid": Boolean(touched.identity_date_issue && errors.identity_date_issue)
                    }),
                    placeholder: "Masukkan Tanggal terbit/pengeluaran"
                  })), Boolean(touched.identity_date_issue && errors.identity_date_issue) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("small", {
                    className: "invalid-feedback",
                    children: touched.identity_date_issue && errors.identity_date_issue
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("label", {
                    children: "Tanggal Kadaluarsa"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("input", _objectSpread(_objectSpread({
                    type: "date"
                  }, getFieldProps('identity_date_expiry')), {}, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("form-control", {
                      "is-invalid": Boolean(touched.identity_date_expiry && errors.identity_date_expiry)
                    }),
                    placeholder: "Masukkan Tanggal Kadaluarsa"
                  })), Boolean(touched.identity_date_expiry && errors.identity_date_expiry) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("small", {
                    className: "invalid-feedback",
                    children: touched.identity_date_expiry && errors.identity_date_expiry
                  })]
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("hr", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("h4", {
              className: "title",
              children: "Paspor"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("label", {
                    children: "Nomor paspor"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("input", _objectSpread(_objectSpread({
                    type: "text"
                  }, getFieldProps('passport_number')), {}, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("form-control", {
                      "is-invalid": Boolean(touched.passport_number && errors.passport_number)
                    }),
                    placeholder: "Masukkan Nomor paspor"
                  })), Boolean(touched.passport_number && errors.passport_number) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("small", {
                    className: "invalid-feedback",
                    children: touched.passport_number && errors.passport_number
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("label", {
                    children: "Tanggal Kadaluwarsa Paspor"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("input", _objectSpread(_objectSpread({
                    type: "date"
                  }, getFieldProps('passport_expiry_date')), {}, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("form-control", {
                      "is-invalid": Boolean(touched.passport_expiry_date && errors.passport_expiry_date)
                    }),
                    placeholder: "Masukkan Tanggal Kadaluwarsa Paspor"
                  })), Boolean(touched.passport_expiry_date && errors.passport_expiry_date) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("small", {
                    className: "invalid-feedback",
                    children: touched.passport_expiry_date && errors.passport_expiry_date
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("label", {
                    children: "Negara Penerbit Paspor"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("select", _objectSpread(_objectSpread({}, getFieldProps('passport_country_id')), {}, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("form-control", {
                      "is-invalid": Boolean(touched.passport_country_id && errors.passport_country_id)
                    }),
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("option", {
                      value: "",
                      children: "Pilih negara"
                    }), countries.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("option", {
                      value: item.id,
                      children: item.country_name
                    }))]
                  })), Boolean(touched.passport_country_id && errors.passport_country_id) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("small", {
                    className: "invalid-feedback",
                    children: touched.passport_country_id && errors.passport_country_id
                  })]
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
              className: "btn-submit",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("button", {
                disabled: isSubmitting,
                type: "submit",
                className: "btn btn-primary",
                children: "Simpan"
              })
            })]
          })
        })
      })
    })]
  });
}

const RootStyled = styled_components__WEBPACK_IMPORTED_MODULE_8___default().div.withConfig({
  displayName: "QuickpickForm__RootStyled",
  componentId: "sc-7komka-0"
})(["@media screen and (max-width:1224px){padding:1.5rem;padding-bottom:3.3rem;.btn-submit{position:fixed;bottom:0;left:0;background:#F5F6FA;width:100%;padding:10px;button{font-size:12px;width:100%;}}label,input,select{font-size:12px;}label{margin-bottom:0;}.title{font-weight:bold;font-size:17px;}.sub-title{margin-top:-10px;font-size:14px;}.card{background:transparent !important;border:0;.card-body{padding:0;}}}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuickpickForm);

/***/ })

};
;