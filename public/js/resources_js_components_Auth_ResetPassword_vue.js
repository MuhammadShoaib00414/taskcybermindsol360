"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Auth_ResetPassword_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Auth/ResetPassword.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Auth/ResetPassword.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Layout.vue */ "./resources/js/components/Layout.vue");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.css");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Home',
  components: {
    Layout: _Layout_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  beforeUnmount: function beforeUnmount() {},
  created: function created() {},
  mounted: function mounted() {},
  data: function data() {
    return {
      password: '',
      password_confirmation: '',
      error: '',
      loading: false
    };
  },
  watch: {},
  methods: {
    updatePassword: function updatePassword() {
      var _this = this;
      this.loading = true;
      if (this.password == '') {
        this.loading = false;
        this.error = 'Please enter your new password';
        return;
      } else if (this.password_confirmation == '') {
        this.loading = false;
        this.error = 'Please confirm your new password';
        return;
      } else if (this.password != this.password_confirmation) {
        this.loading = false;
        this.error = 'Password and confirmed password does not match';
        return;
      }
      axios.post('/api/reset-password', {
        password: this.password,
        password_confirmation: this.password_confirmation,
        id: JSON.parse(localStorage.getItem('user')).id
      }).then(function (response) {
        _this.loading = false;
        if (response.data.status == 'success') {
          _this.$router.push('/sign-in');
        } else {
          _this.error = response.data.message;
        }
      })["catch"](function (error) {
        _this.loading = false;
        _this.error = 'Something went wrong. Please try again later';
      });
      // this.$router.push('/calculator');
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Auth/ResetPassword.vue?vue&type=template&id=710358ee":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Auth/ResetPassword.vue?vue&type=template&id=710358ee ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "my-5"
};
var _hoisted_2 = {
  "class": "card br-10 mw-550 m-auto"
};
var _hoisted_3 = {
  "class": "card-body py-4"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bolder my-2"
}, "Reset Your Password", -1 /* HOISTED */);
var _hoisted_5 = {
  action: "",
  autocomplete: "off"
};
var _hoisted_6 = {
  "class": "form-group"
};
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "exampleInputEmail1",
  "class": "my-2"
}, "New Password", -1 /* HOISTED */);
var _hoisted_8 = {
  "class": "form-group"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "exampleInputEmail1",
  "class": "my-2"
}, "Confirmed Password", -1 /* HOISTED */);
var _hoisted_10 = {
  "class": "error"
};
var _hoisted_11 = {
  key: 0,
  "class": "text-danger w-100 text-center bg-yellow text-red"
};
var _hoisted_12 = {
  key: 0,
  "class": "spinner-border spinner-border-sm text-light",
  role: "status"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "sr-only"
}, "Loading...", -1 /* HOISTED */);
var _hoisted_14 = [_hoisted_13];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_layout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("layout");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_layout, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "password",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.password = $event;
        }),
        "class": "my-2 form-control bg-primary text-white",
        id: "exampleInputEmail1",
        "aria-describedby": "emailHelp",
        placeholder: "********",
        autocomplete: "off"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.password]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "password",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.password_confirmation = $event;
        }),
        "class": "my-2 form-control bg-primary text-white",
        id: "exampleInputEmail1",
        "aria-describedby": "emailHelp",
        placeholder: "********",
        autocomplete: "off"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.password_confirmation]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [$data.error != undefined ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.error), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "btn btn-sm btn-primary my-2",
        onClick: _cache[2] || (_cache[2] = function ($event) {
          return $options.updatePassword();
        })
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Send "), $data.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, _hoisted_14)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])];
    }),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./resources/js/components/Auth/ResetPassword.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Auth/ResetPassword.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ResetPassword_vue_vue_type_template_id_710358ee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=template&id=710358ee */ "./resources/js/components/Auth/ResetPassword.vue?vue&type=template&id=710358ee");
/* harmony import */ var _ResetPassword_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=script&lang=js */ "./resources/js/components/Auth/ResetPassword.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_360Huntertask_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_360Huntertask_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ResetPassword_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ResetPassword_vue_vue_type_template_id_710358ee__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Auth/ResetPassword.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Auth/ResetPassword.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Auth/ResetPassword.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ResetPassword_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ResetPassword_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ResetPassword.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Auth/ResetPassword.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Auth/ResetPassword.vue?vue&type=template&id=710358ee":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Auth/ResetPassword.vue?vue&type=template&id=710358ee ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ResetPassword_vue_vue_type_template_id_710358ee__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ResetPassword_vue_vue_type_template_id_710358ee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ResetPassword.vue?vue&type=template&id=710358ee */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Auth/ResetPassword.vue?vue&type=template&id=710358ee");


/***/ })

}]);