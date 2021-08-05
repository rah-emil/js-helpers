/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var jsHelpers;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js-helpers.js":
/*!***************************!*\
  !*** ./src/js-helpers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/math */ \"./src/modules/math.js\");\nconsole.log('Hello (1) from jsHelpers');\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_modules_math__WEBPACK_IMPORTED_MODULE_0__.multiply);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMtaGVscGVycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWjtBQUVBO0FBRUEsaUVBQWVDLG1EQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNIZWxwZXJzLy4vc3JjL2pzLWhlbHBlcnMuanM/ZDM1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnSGVsbG8gKDEpIGZyb20ganNIZWxwZXJzJylcclxuXHJcbmltcG9ydCB7IG11bHRpcGx5IH0gZnJvbSAnLi9tb2R1bGVzL21hdGgnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtdWx0aXBseTsiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIm11bHRpcGx5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js-helpers.js\n");

/***/ }),

/***/ "./src/modules/math.js":
/*!*****************************!*\
  !*** ./src/modules/math.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"multiply\": () => (/* binding */ multiply)\n/* harmony export */ });\nfunction multiply(x, y) {\n  return x * y;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tYXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxRQUFULENBQWtCQyxDQUFsQixFQUFxQkMsQ0FBckIsRUFBd0I7QUFDOUIsU0FBT0QsQ0FBQyxHQUFHQyxDQUFYO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc0hlbHBlcnMvLi9zcmMvbW9kdWxlcy9tYXRoLmpzP2ZhZmQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KHgsIHkpIHtcclxuXHRyZXR1cm4geCAqIHlcclxufSJdLCJuYW1lcyI6WyJtdWx0aXBseSIsIngiLCJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/math.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js-helpers.js");
/******/ 	jsHelpers = __webpack_exports__;
/******/ 	
/******/ })()
;