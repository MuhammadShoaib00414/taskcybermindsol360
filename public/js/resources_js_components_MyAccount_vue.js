"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_MyAccount_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MyAccount.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MyAccount.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue */ "./resources/js/components/Layout.vue");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.css");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "About us",
  components: {
    Layout: _Layout_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  beforeUnmount: function beforeUnmount() {},
  created: function created() {},
  mounted: function mounted() {
    var _this = this;
    this.getUsers();
    var authToken = "Bearer " + localStorage.getItem("token"); // Replace with your storage method
    axios.get("/api/user", {
      headers: {
        Authorization: authToken
      }
    }).then(function (response) {
      _this.user = response.data;
    })["catch"](function (error) {
      console.error("Error fetching user data:", error);
    });
  },
  data: function data() {
    return {
      errors: {
        firstName: [],
        lastName: [],
        email: [],
        password: [],
        password_confirmation: [],
        fromemail: []
      },
      user: {
        id: null,
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: ""
        // other user properties
      },
      loading: false,
      successMessage: null,
      errorMessage: null
    };
  },
  watch: {},
  methods: {
    UpdateUserInfo: function UpdateUserInfo() {
      var _this2 = this;
      var authToken = "Bearer " + localStorage.getItem("token"); // Replace with your storage method
      // Check if passwords match before making the API request
      if (this.user.password !== this.user.password_confirmation) {
        this.passwordsDoNotMatch = true;
        return;
      }
      // Clear the error message if passwords match
      this.passwordsDoNotMatch = false;

      // Make the API request
      axios.put("/api/user/update", {
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        password: this.user.password,
        password_confirmation: this.user.password_confirmation
      }, {
        headers: {
          Authorization: authToken
        }
      }).then(function (response) {
        // Handle success, show a success message or redirect
        _this2.successMessage = "User Account updated Successfully.";
        _this2.user.password = ""; // Clear the password field
        _this2.user.password_confirmation = ""; // Clear the password confirmation field
        setTimeout(function () {
          _this2.successMessage = null;
        }, 3000);
      })["catch"](function (error) {
        // Handle error, show an error message or log the error
        console.error("Error updating user:", error);
        _this2.errorMessage = "The password field must be at least 8 characters";
        setTimeout(function () {
          _this2.errorMessage = null;
        }, 3000);
      });
    },
    getUsers: function getUsers() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response, _response$data$stats, total_users, active_subscriptions, total_subscriptions, total_revenue;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios.get('/api/get-users');
            case 3:
              response = _context.sent;
              if (response && response.data && response.data.stats) {
                _response$data$stats = response.data.stats, total_users = _response$data$stats.total_users, active_subscriptions = _response$data$stats.active_subscriptions, total_subscriptions = _response$data$stats.total_subscriptions, total_revenue = _response$data$stats.total_revenue;
                _this3.users = response.data.stats.users;
                _this3.stats = {
                  total_users: total_users,
                  active_subscriptions: active_subscriptions,
                  total_subscriptions: total_subscriptions,
                  total_revenue: total_revenue
                };

                // this.monthlyRevenueData = monthly_revenue;

                // this.renderChart();
              } else {
                console.error('Invalid response format');
                _this3.errorMessage = 'Invalid response format';
              }
              _context.next = 11;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error('Error getting data:', _context.t0);
              _this3.errorMessage = 'Error getting data';
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }))();
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MyAccount.vue?vue&type=template&id=14f426f4&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MyAccount.vue?vue&type=template&id=14f426f4&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-14f426f4"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "choose-sect pb-5"
};
var _hoisted_2 = {
  "class": "container"
};
var _hoisted_3 = {
  "class": "row"
};
var _hoisted_4 = {
  "class": "col-12 col-sm-12 col-md-4 col-lg-12 text-center"
};
var _hoisted_5 = {
  key: 0,
  "class": "text-white w-50 p-2 bg-green pb-2"
};
var _hoisted_6 = {
  key: 1,
  "class": "text-danger w-50 p-2 bg-yellow text-red pb-2"
};
var _hoisted_7 = {
  "class": "card col-lg-12"
};
var _hoisted_8 = {
  "class": ""
};
var _hoisted_9 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": "pt-2 pb-0"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Personal Information")], -1 /* HOISTED */);
});
var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
    "class": "hr_line"
  }, null, -1 /* HOISTED */);
});
var _hoisted_11 = {
  "class": "form-row"
};
var _hoisted_12 = {
  "class": "col-md-4 mb-3 text-left"
};
var _hoisted_13 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "validationTooltip01"
  }, "First name", -1 /* HOISTED */);
});
var _hoisted_14 = {
  "class": "col-md-4 mb-3 text-left"
};
var _hoisted_15 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "validationTooltip02"
  }, "Last name", -1 /* HOISTED */);
});
var _hoisted_16 = {
  "class": "col-md-4 mb-3 text-left"
};
var _hoisted_17 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "validationTooltipUsername"
  }, "Email", -1 /* HOISTED */);
});
var _hoisted_18 = {
  "class": "input-group"
};
var _hoisted_19 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row pb-2"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-md-12 ml-1"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "data-toggle": "modal",
    "class": "btn btn-sm btn-primary"
  }, " Update Account ")])], -1 /* HOISTED */);
});
var _hoisted_20 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": "pt-2 pb-0"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Change Password")], -1 /* HOISTED */);
});
var _hoisted_21 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
    "class": "hr_line"
  }, null, -1 /* HOISTED */);
});
var _hoisted_22 = {
  "class": "form-row"
};
var _hoisted_23 = {
  "class": "col-md-4 mb-3 text-left"
};
var _hoisted_24 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "validationTooltip03"
  }, "Password", -1 /* HOISTED */);
});
var _hoisted_25 = {
  "class": "col-md-4 mb-3 text-left"
};
var _hoisted_26 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "validationTooltip04"
  }, "Confirm Password", -1 /* HOISTED */);
});
var _hoisted_27 = {
  key: 0,
  "class": "text-danger"
};
var _hoisted_28 = {
  "class": "row pb-2"
};
var _hoisted_29 = {
  "class": "col-md-12 text-left pb-3"
};
var _hoisted_30 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_layout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("layout");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_layout, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [$data.successMessage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.successMessage), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Error Message "), $data.errorMessage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.errorMessage), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        "class": "needs-validation",
        novalidate: "",
        onSubmit: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return $options.UpdateUserInfo && $options.UpdateUserInfo.apply($options, arguments);
        }, ["prevent"]))
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control",
        id: "validationTooltip01",
        placeholder: "First name",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.user.first_name = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.user.first_name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control",
        id: "validationTooltip02",
        placeholder: "Last name",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.user.last_name = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.user.last_name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control",
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.user.email = $event;
        }),
        placeholder: "Email",
        disabled: ""
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.user.email]])])]), _hoisted_19]), _hoisted_20, _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "password",
        "class": "form-control",
        id: "validationTooltip03",
        placeholder: "Password",
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $data.user.password = $event;
        }),
        required: ""
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.user.password]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "password",
        "class": "form-control",
        id: "validationTooltip04",
        placeholder: "Confirm Password",
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $data.user.password_confirmation = $event;
        }),
        required: ""
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.user.password_confirmation]]), _ctx.passwordsDoNotMatch ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_27, " Passwords do not match. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-sm btn-primary",
        type: "submit",
        disabled: _ctx.passwordsDoNotMatch
      }, " Update Password ", 8 /* PROPS */, _hoisted_30)])])])])], 32 /* HYDRATE_EVENTS */)])])])])];
    }),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MyAccount.vue?vue&type=style&index=0&id=14f426f4&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MyAccount.vue?vue&type=style&index=0&id=14f426f4&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/**\n * Fonts\n */\n/* @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap'); */\n\n/* Chrome, Safari, Edge, Opera */\ninput[data-v-14f426f4]::-webkit-outer-spin-button,\ninput[data-v-14f426f4]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\ninput[type=\"number\"][data-v-14f426f4] {\n  -moz-appearance: textfield;\n}\n[data-v-14f426f4]::-moz-placeholder {\n  color: white !important;\n  opacity: 1;\n  /* Firefox */\n}\n[data-v-14f426f4]::placeholder {\n  color: white !important;\n  opacity: 1;\n  /* Firefox */\n}\n[data-v-14f426f4]::-ms-input-placeholder {\n  /* Edge 12-18 */\n  color: white !important;\n}\n[data-v-14f426f4]:-ms-input-placeholder {\n  /* Edge 19+ */\n  color: white !important;\n}\n\n/* Chrome, Safari, and Opera */\ninput[data-v-14f426f4]::-moz-placeholder {\n  color: white !important;\n}\ninput[data-v-14f426f4]::placeholder {\n  color: white !important;\n}\n\n/**\n * Article Block\n */\n.article-block[data-v-14f426f4] {\n  text-align: center;\n}\n.article-block .entry-content>p[data-v-14f426f4] {\n  color: #666;\n}\n\n/**\n * Tabs Container\n */\n.tabs-container[data-v-14f426f4] {\n  padding: 2rem;\n}\n\n/**\n * Tabs Block\n */\n.tabs-block[data-v-14f426f4] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/**\n * Tabs\n */\n.tabs[data-v-14f426f4] {\n  display: flex;\n}\nsection p[data-v-14f426f4] {\n  font-size: 24px;\n  color: #000;\n  margin-bottom: 0;\n  font-weight: 400;\n  padding-bottom: 15px;\n  line-height: 37px;\n}\n.tabs>ul[data-v-14f426f4] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 15%;\n}\n.tabs>ul li[data-v-14f426f4] {\n  display: block;\n}\n.tabs>ul li[data-v-14f426f4]:not(:last-child) {\n  border-bottom: 1px solid #262626;\n}\n.tabs>ul li a[data-v-14f426f4],\n.tabs>ul li a[data-v-14f426f4]:visited {\n  display: flex;\n  border-bottom: none;\n  text-decoration: none;\n  background-color: #cae7f7;\n  color: black;\n  padding: 1rem 1.5rem;\n  transition: all 0.2s ease-in-out;\n  word-wrap: break-word;\n  cursor: pointer;\n}\n.tabs>ul li a[data-v-14f426f4]:hover,\n.tabs>ul li a[data-v-14f426f4]:focus,\n.tabs>ul li a[data-v-14f426f4]:active {\n  border-bottom: none;\n  outline: 0;\n}\n.tabs>ul li a.active[data-v-14f426f4] {\n  background-color: #000;\n  color: white;\n}\n.tabs>ul li a[data-v-14f426f4]:hover:not(.active) {\n  color: #0067b8;\n}\n.tabs>ul li a>span[data-v-14f426f4] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.tabs>ul li a>span.tab-label[data-v-14f426f4] {\n  display: none;\n}\n.tabs section[data-v-14f426f4] {\n  width: 85%;\n  background-color: #fff;\n  padding: 1rem;\n  display: none;\n  word-wrap: break-word;\n  border-bottom: 6px solid #0067b8;\n}\n.tabs section>*[data-v-14f426f4] {\n  opacity: 0;\n  transform: translateY(20px);\n  transition: opacity 0.2s, transform 0.2s;\n}\n.tabs section>*[data-v-14f426f4]:nth-child(1) {\n  transition-delay: 0.2s;\n}\n.tabs section>*[data-v-14f426f4]:nth-child(2) {\n  transition-delay: 0.3s;\n}\n.tabs section>*[data-v-14f426f4]:nth-child(3) {\n  transition-delay: 0.4s;\n}\n.tabs section>*[data-v-14f426f4]:nth-child(4) {\n  transition-delay: 0.5s;\n}\n.tabs section>*[data-v-14f426f4]:nth-child(5) {\n  transition-delay: 0.6s;\n}\n.tabs section>*[data-v-14f426f4]:nth-child(6) {\n  transition-delay: 0.7s;\n}\n.tabs section>*[data-v-14f426f4]:nth-child(7) {\n  transition-delay: 0.8s;\n}\n.tabs section>*[data-v-14f426f4]:nth-child(8) {\n  transition-delay: 0.9s;\n}\n.tabs section>*[data-v-14f426f4]:nth-child(9) {\n  transition-delay: 1s;\n}\n.tabs section>*[data-v-14f426f4]:nth-child(10) {\n  transition-delay: 1.1s;\n}\n.tabs section>*[data-v-14f426f4]:nth-child(11) {\n  transition-delay: 1.2s;\n}\n.tabs section>*[data-v-14f426f4]:nth-child(12) {\n  transition-delay: 1.3s;\n}\n.tabs section>*[data-v-14f426f4]:nth-child(13) {\n  transition-delay: 1.4s;\n}\n.tabs section>*[data-v-14f426f4]:nth-child(14) {\n  transition-delay: 1.5s;\n}\n.tabs section>*[data-v-14f426f4]:nth-child(15) {\n  transition-delay: 1.6s;\n}\n.tabs section>*[data-v-14f426f4]:nth-child(16) {\n  transition-delay: 1.7s;\n}\n.tabs section>*[data-v-14f426f4]:nth-child(17) {\n  transition-delay: 1.8s;\n}\n.tabs section>*[data-v-14f426f4]:nth-child(18) {\n  transition-delay: 1.9s;\n}\n.tabs section>*[data-v-14f426f4]:nth-child(19) {\n  transition-delay: 2s;\n}\n.tabs section>*[data-v-14f426f4]:nth-child(20) {\n  transition-delay: 2.1s;\n}\n.tabs section.active[data-v-14f426f4] {\n  display: block;\n}\n.tabs section.active-content>*[data-v-14f426f4] {\n  opacity: 1;\n  transform: translateY(0);\n}\n@media (min-width: 576px) {\n.tabs>ul[data-v-14f426f4] {\n    width: 150px;\n}\n.tabs>ul li a[data-v-14f426f4] {\n    flex-wrap: wrap;\n}\n.tabs>ul li a>span[data-v-14f426f4] {\n    width: 100%;\n}\n.tabs>ul li a>span.tab-label[data-v-14f426f4] {\n    width: 100%;\n    display: block;\n    margin-top: 0.2rem;\n}\n.tabs section[data-v-14f426f4] {\n    width: calc(100% - 150px);\n    padding: 0rem 1rem;\n}\n}\n@media (min-width: 768px) {\nbody[data-v-14f426f4] {\n    font-size: 1.125rem;\n}\n.tabs-container[data-v-14f426f4] {\n    padding: 4rem 4rem;\n}\n}\n@media (min-width: 992px) {\n.tabs[data-v-14f426f4] {\n    width: 1200px;\n}\n}\n.modal-header[data-v-14f426f4] {\n  display: block !important;\n}\n.form-control[data-v-14f426f4] {\n  background-color: #4472c4 !important;\n}\n.hr_line[data-v-14f426f4] {\n  margin-top: 10px !important;\n  margin-bottom: 10px !important;\n  border: 0 !important;\n  border-top: 2px solid rgb(0 0 0 / 38%) !important;\n}\n.bg-green[data-v-14f426f4] {\n  background-color: rgb(17, 199, 231);\n}\n.text-danger[data-v-14f426f4] {\n  color: #dc3545 !important;\n  font-size: 15px;\n}\n.text-white[data-v-14f426f4] {\n  font-size: 15px;\n}\n.user-text-black[data-v-14f426f4] {\n  color: black;\n  font-weight: 500;\n  font-size: 18px;\n}\n.user-number-black[data-v-14f426f4] {\n  color: black;\n  /* font-weight: 700; */\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MyAccount.vue?vue&type=style&index=0&id=14f426f4&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MyAccount.vue?vue&type=style&index=0&id=14f426f4&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyAccount_vue_vue_type_style_index_0_id_14f426f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MyAccount.vue?vue&type=style&index=0&id=14f426f4&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MyAccount.vue?vue&type=style&index=0&id=14f426f4&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyAccount_vue_vue_type_style_index_0_id_14f426f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyAccount_vue_vue_type_style_index_0_id_14f426f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/MyAccount.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/MyAccount.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MyAccount_vue_vue_type_template_id_14f426f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAccount.vue?vue&type=template&id=14f426f4&scoped=true */ "./resources/js/components/MyAccount.vue?vue&type=template&id=14f426f4&scoped=true");
/* harmony import */ var _MyAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyAccount.vue?vue&type=script&lang=js */ "./resources/js/components/MyAccount.vue?vue&type=script&lang=js");
/* harmony import */ var _MyAccount_vue_vue_type_style_index_0_id_14f426f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyAccount.vue?vue&type=style&index=0&id=14f426f4&scoped=true&lang=css */ "./resources/js/components/MyAccount.vue?vue&type=style&index=0&id=14f426f4&scoped=true&lang=css");
/* harmony import */ var C_laragon_www_360Huntertask_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_laragon_www_360Huntertask_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_MyAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MyAccount_vue_vue_type_template_id_14f426f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-14f426f4"],['__file',"resources/js/components/MyAccount.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/MyAccount.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/MyAccount.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MyAccount.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MyAccount.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/MyAccount.vue?vue&type=template&id=14f426f4&scoped=true":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/MyAccount.vue?vue&type=template&id=14f426f4&scoped=true ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyAccount_vue_vue_type_template_id_14f426f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyAccount_vue_vue_type_template_id_14f426f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MyAccount.vue?vue&type=template&id=14f426f4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MyAccount.vue?vue&type=template&id=14f426f4&scoped=true");


/***/ }),

/***/ "./resources/js/components/MyAccount.vue?vue&type=style&index=0&id=14f426f4&scoped=true&lang=css":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/MyAccount.vue?vue&type=style&index=0&id=14f426f4&scoped=true&lang=css ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyAccount_vue_vue_type_style_index_0_id_14f426f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MyAccount.vue?vue&type=style&index=0&id=14f426f4&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MyAccount.vue?vue&type=style&index=0&id=14f426f4&scoped=true&lang=css");


/***/ })

}]);