((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_831a3634f66cb1dada0c ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_831a3634f66cb1dada0c */ "dll-reference dll_831a3634f66cb1dada0c"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components */ "./src/components/index.ts");
var _jsxFileName = "C:\\Users\\Jeffrey\\Documents\\projects\\jberry93.github.io\\pages\\index.tsx";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "site-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_components__WEBPACK_IMPORTED_MODULE_1__["Jumbotron"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Jumbotron/index.tsx":
/*!********************************************!*\
  !*** ./src/components/Jumbotron/index.tsx ***!
  \********************************************/
/*! exports provided: Jumbotron */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jumbotron", function() { return Jumbotron; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Jumbotron_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Jumbotron.scss */ "./src/components/Jumbotron/Jumbotron.scss");
/* harmony import */ var _Jumbotron_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Jumbotron_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Jeffrey\\Documents\\projects\\jberry93.github.io\\src\\components\\Jumbotron\\index.tsx";


var Jumbotron = function Jumbotron() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "jumbotron",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "centerize",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    className: "jumbotron-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Jeffrey Berry"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "social-media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    className: "btn",
    href: "https://www.linkedin.com/in/jeffrey-berry-82154a3a/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "fab fa-linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    className: "btn",
    href: "https://github.com/jberry93",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "fab fa-github-square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })))));
};

/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! exports provided: Jumbotron */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Jumbotron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Jumbotron */ "./src/components/Jumbotron/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Jumbotron", function() { return _Jumbotron__WEBPACK_IMPORTED_MODULE_0__["Jumbotron"]; });



/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/', function() {
module.exports = __webpack_require__(/*! ./pages/index.tsx */"./pages/index.tsx");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_831a3634f66cb1dada0c":
/*!*******************************************!*\
  !*** external "dll_831a3634f66cb1dada0c" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_831a3634f66cb1dada0c;

/***/ })

},[[3,"static/runtime/webpack.js","styles"]]]));;
//# sourceMappingURL=index.js.map