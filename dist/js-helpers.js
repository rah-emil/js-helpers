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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/math */ \"./src/modules/math.js\");\n\nMath.multiply = _modules_math__WEBPACK_IMPORTED_MODULE_0__.multiply;\nNumber.prototype.toPrice = _modules_math__WEBPACK_IMPORTED_MODULE_0__.toPrice;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMtaGVscGVycy5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFBO0FBRUFFLElBQUksQ0FBQ0YsUUFBTCxHQUFnQkEsbURBQWhCO0FBQ0FHLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkgsT0FBakIsR0FBMkJBLGtEQUEzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzSGVscGVycy8uL3NyYy9qcy1oZWxwZXJzLmpzP2QzNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbXVsdGlwbHksIHRvUHJpY2UgfSBmcm9tICcuL21vZHVsZXMvbWF0aCdcclxuXHJcbk1hdGgubXVsdGlwbHkgPSBtdWx0aXBseVxyXG5OdW1iZXIucHJvdG90eXBlLnRvUHJpY2UgPSB0b1ByaWNlIl0sIm5hbWVzIjpbIm11bHRpcGx5IiwidG9QcmljZSIsIk1hdGgiLCJOdW1iZXIiLCJwcm90b3R5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js-helpers.js\n");

/***/ }),

/***/ "./src/modules/math.js":
/*!*****************************!*\
  !*** ./src/modules/math.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"multiply\": () => (/* binding */ multiply),\n/* harmony export */   \"toPrice\": () => (/* binding */ toPrice)\n/* harmony export */ });\nvar multiply = function multiply(x, y) {\n  return x * y;\n};\nvar toPrice = function toPrice(str) {\n  return this.toLocaleString(undefined, {\n    style: \"currency\",\n    currency: \"RUB\"\n  }) + str;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tYXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRU8sSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDakMsU0FBT0QsQ0FBQyxHQUFHQyxDQUFYO0FBQ0EsQ0FGTTtBQUlBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQVNDLEdBQVQsRUFBYztBQUNwQyxTQUFPLEtBQUtDLGNBQUwsQ0FBb0JDLFNBQXBCLEVBQStCO0FBQ3JDQyxJQUFBQSxLQUFLLEVBQUUsVUFEOEI7QUFFckNDLElBQUFBLFFBQVEsRUFBRTtBQUYyQixHQUEvQixJQUdGSixHQUhMO0FBSUEsQ0FMTSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzSGVscGVycy8uL3NyYy9tb2R1bGVzL21hdGguanM/ZmFmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmV4cG9ydCBjb25zdCBtdWx0aXBseSA9ICh4LCB5KSA9PiB7XHJcblx0cmV0dXJuIHggKiB5XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0b1ByaWNlID0gZnVuY3Rpb24oc3RyKSB7XHJcblx0cmV0dXJuIHRoaXMudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XHJcblx0XHRzdHlsZTogXCJjdXJyZW5jeVwiLFxyXG5cdFx0Y3VycmVuY3k6IFwiUlVCXCJcclxuXHR9KSArIHN0clxyXG59Il0sIm5hbWVzIjpbIm11bHRpcGx5IiwieCIsInkiLCJ0b1ByaWNlIiwic3RyIiwidG9Mb2NhbGVTdHJpbmciLCJ1bmRlZmluZWQiLCJzdHlsZSIsImN1cnJlbmN5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/math.js\n");

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