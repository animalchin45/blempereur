"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateblempereur"]("main",{

/***/ "./src/components/new-clients/Questions.js":
/*!*************************************************!*\
  !*** ./src/components/new-clients/Questions.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-collapsible */ \"./node_modules/react-collapsible/dist/index.js\");\n/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _faqs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faqs */ \"./src/components/new-clients/faqs.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\n\n\n\nvar Questions = function Questions() {\n  var renderedFaqs = _faqs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map(function (faq) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      key: (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_collapsible__WEBPACK_IMPORTED_MODULE_1___default()), {\n      key: (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n      transitionTime: 200,\n      trigger: faq.title\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n      key: (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n    }, faq.text)));\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", {\n    className: \"questions\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"questions__content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"Fequently Asked Questions\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"questions__collapsible\"\n  }, renderedFaqs)));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Questions);\n\n//# sourceURL=webpack://blempereur/./src/components/new-clients/Questions.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "b168d4644b41b1305a14"; }
/******/ }();
/******/ 
/******/ }
);