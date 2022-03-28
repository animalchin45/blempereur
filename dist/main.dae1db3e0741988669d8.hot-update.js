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

/***/ "./src/components/MobileNav.js":
/*!*************************************!*\
  !*** ./src/components/MobileNav.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Social */ \"./src/components/Social.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar MobileNav = function MobileNav() {\n  // Mobile menu state and animation position\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"hamburger hamburger--spring\"),\n      _useState2 = _slicedToArray(_useState, 2),\n      hamburgerClass = _useState2[0],\n      setHamburgerClass = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    opacity: 0,\n    left: '-1200px'\n  }),\n      _useState4 = _slicedToArray(_useState3, 2),\n      mobileNavLinksClass = _useState4[0],\n      setMobileNavLinksClass = _useState4[1]; // Hamburger Menu close on click\n\n\n  var handleMenuClick = function handleMenuClick() {\n    setHamburgerClass(\"hamburger hamburger--spring\");\n    setMobileNavLinksClass({\n      opacity: 0,\n      left: '-1200px'\n    });\n  }; // Hamburger open / close\n\n\n  var handleHamburgerClick = function handleHamburgerClick() {\n    if (hamburgerClass === \"hamburger hamburger--spring\") {\n      setHamburgerClass(\"hamburger hamburger--spring is-active\");\n      setMobileNavLinksClass({\n        opacity: 1,\n        left: '0'\n      });\n    } else {\n      setHamburgerClass(\"hamburger hamburger--spring\");\n      setMobileNavLinksClass({\n        opacity: 0,\n        left: '-1200px'\n      });\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"mobile-nav\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"nav\", {\n    className: \"mobile-nav__links\",\n    onClick: function onClick() {\n      return handleMenuClick();\n    },\n    style: mobileNavLinksClass\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/unified-therapy\"\n  }, \"Unified Therapy Process\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/services\"\n  }, \"Services\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/newclients\"\n  }, \"New Clients\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/aboutme\"\n  }, \"About Me\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/team\"\n  }, \"Unified Therapy Team\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Social__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    className: \"p-link\",\n    href: \"mailto:barbara@blempereur.com\"\n  }, \"barbara@blempereur.com\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    className: \"p-link\",\n    href: \"http://eepurl.com/hHA2NP\"\n  }, \"Join my newsletter\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    className: hamburgerClass,\n    onClick: function onClick() {\n      return handleHamburgerClick();\n    },\n    type: \"button\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"hamburger-box\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"hamburger-inner\"\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileNav);\n\n//# sourceURL=webpack://blempereur/./src/components/MobileNav.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "ec0f65a26574a0fd6ef7"; }
/******/ }();
/******/ 
/******/ }
);