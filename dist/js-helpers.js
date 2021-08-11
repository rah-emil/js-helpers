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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/math */ \"./src/modules/math.js\");\n/* harmony import */ var _modules_visual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/visual */ \"./src/modules/visual.js\");\n\n\nNumber.prototype.percentageDifference = _modules_math__WEBPACK_IMPORTED_MODULE_0__.percentageDifference;\nNumber.prototype.minusPercentage = _modules_math__WEBPACK_IMPORTED_MODULE_0__.minusPercentage;\nNumber.prototype.simplifyNumber = _modules_visual__WEBPACK_IMPORTED_MODULE_1__.simplifyNumber;\nNumber.prototype.toCurrency = _modules_visual__WEBPACK_IMPORTED_MODULE_1__.toCurrency;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMtaGVscGVycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUtBO0FBS0FJLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkwsb0JBQWpCLEdBQXdDQSwrREFBeEM7QUFDQUksTUFBTSxDQUFDQyxTQUFQLENBQWlCSixlQUFqQixHQUFtQ0EsMERBQW5DO0FBQ0FHLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkgsY0FBakIsR0FBa0NBLDJEQUFsQztBQUNBRSxNQUFNLENBQUNDLFNBQVAsQ0FBaUJGLFVBQWpCLEdBQThCQSx1REFBOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc0hlbHBlcnMvLi9zcmMvanMtaGVscGVycy5qcz9kMzVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBwZXJjZW50YWdlRGlmZmVyZW5jZSxcclxuICAgIG1pbnVzUGVyY2VudGFnZSxcclxufSBmcm9tICcuL21vZHVsZXMvbWF0aCdcclxuXHJcbmltcG9ydCB7XHJcbiAgICBzaW1wbGlmeU51bWJlcixcclxuICAgIHRvQ3VycmVuY3ksXHJcbn0gZnJvbSAnLi9tb2R1bGVzL3Zpc3VhbCdcclxuXHJcbk51bWJlci5wcm90b3R5cGUucGVyY2VudGFnZURpZmZlcmVuY2UgPSBwZXJjZW50YWdlRGlmZmVyZW5jZVxyXG5OdW1iZXIucHJvdG90eXBlLm1pbnVzUGVyY2VudGFnZSA9IG1pbnVzUGVyY2VudGFnZVxyXG5OdW1iZXIucHJvdG90eXBlLnNpbXBsaWZ5TnVtYmVyID0gc2ltcGxpZnlOdW1iZXJcclxuTnVtYmVyLnByb3RvdHlwZS50b0N1cnJlbmN5ID0gdG9DdXJyZW5jeVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJwZXJjZW50YWdlRGlmZmVyZW5jZSIsIm1pbnVzUGVyY2VudGFnZSIsInNpbXBsaWZ5TnVtYmVyIiwidG9DdXJyZW5jeSIsIk51bWJlciIsInByb3RvdHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js-helpers.js\n");

/***/ }),

/***/ "./src/modules/math.js":
/*!*****************************!*\
  !*** ./src/modules/math.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"percentageDifference\": () => (/* binding */ percentageDifference),\n/* harmony export */   \"minusPercentage\": () => (/* binding */ minusPercentage)\n/* harmony export */ });\n/**\r\n * Percentage difference between numbers X and Y.\r\n * For example, income for the current and last month.\r\n * @param y\r\n * @returns {number}\r\n */\nvar percentageDifference = function percentageDifference(y) {\n  var x = this;\n  if (y === 0) return (y - x) / x * 100;else return (x - y) / y * 100;\n};\n/**\r\n * Subtraction from the number of percentages.\r\n * For example, displaying a discounted price.\r\n * @param percentage\r\n * @returns {number}\r\n */\n\nvar minusPercentage = function minusPercentage(percentage) {\n  var price = this;\n  return price - price * (percentage / 100);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tYXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFTQyxDQUFULEVBQVc7QUFDOUMsTUFBSUMsQ0FBQyxHQUFHLElBQVI7QUFFQSxNQUFHRCxDQUFDLEtBQUssQ0FBVCxFQUFZLE9BQVEsQ0FBQ0EsQ0FBQyxHQUFHQyxDQUFMLElBQVVBLENBQVgsR0FBZ0IsR0FBdkIsQ0FBWixLQUNLLE9BQVEsQ0FBQ0EsQ0FBQyxHQUFHRCxDQUFMLElBQVVBLENBQVgsR0FBZ0IsR0FBdkI7QUFDTCxDQUxNO0FBUVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1FLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBU0MsVUFBVCxFQUFvQjtBQUNsRCxNQUFJQyxLQUFLLEdBQUcsSUFBWjtBQUNBLFNBQU9BLEtBQUssR0FBSUEsS0FBSyxJQUFJRCxVQUFVLEdBQUMsR0FBZixDQUFyQjtBQUNBLENBSE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc0hlbHBlcnMvLi9zcmMvbW9kdWxlcy9tYXRoLmpzP2ZhZmQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFBlcmNlbnRhZ2UgZGlmZmVyZW5jZSBiZXR3ZWVuIG51bWJlcnMgWCBhbmQgWS5cclxuICogRm9yIGV4YW1wbGUsIGluY29tZSBmb3IgdGhlIGN1cnJlbnQgYW5kIGxhc3QgbW9udGguXHJcbiAqIEBwYXJhbSB5XHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcGVyY2VudGFnZURpZmZlcmVuY2UgPSBmdW5jdGlvbih5KXtcclxuXHRsZXQgeCA9IHRoaXNcclxuXHJcblx0aWYoeSA9PT0gMCkgcmV0dXJuICgoeSAtIHgpIC8geCkgKiAxMDBcclxuXHRlbHNlIHJldHVybiAoKHggLSB5KSAvIHkpICogMTAwXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogU3VidHJhY3Rpb24gZnJvbSB0aGUgbnVtYmVyIG9mIHBlcmNlbnRhZ2VzLlxyXG4gKiBGb3IgZXhhbXBsZSwgZGlzcGxheWluZyBhIGRpc2NvdW50ZWQgcHJpY2UuXHJcbiAqIEBwYXJhbSBwZXJjZW50YWdlXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbWludXNQZXJjZW50YWdlID0gZnVuY3Rpb24ocGVyY2VudGFnZSl7XHJcblx0bGV0IHByaWNlID0gdGhpc1xyXG5cdHJldHVybiBwcmljZSAtIChwcmljZSAqIChwZXJjZW50YWdlLzEwMCkpXHJcbn1cclxuIl0sIm5hbWVzIjpbInBlcmNlbnRhZ2VEaWZmZXJlbmNlIiwieSIsIngiLCJtaW51c1BlcmNlbnRhZ2UiLCJwZXJjZW50YWdlIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/math.js\n");

/***/ }),

/***/ "./src/modules/visual.js":
/*!*******************************!*\
  !*** ./src/modules/visual.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"simplifyNumber\": () => (/* binding */ simplifyNumber),\n/* harmony export */   \"toCurrency\": () => (/* binding */ toCurrency)\n/* harmony export */ });\n/**\r\n * Simplify large numbers for readability.\r\n * For example, to view articles.\r\n * @param fractionDigits - A number of symbols after comma.\r\n * @returns {string} - simplified number.\r\n */\nvar simplifyNumber = function simplifyNumber() {\n  var fractionDigits = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  if (this >= 1000000000) return \"\".concat((this / 1000000000).toFixed(fractionDigits), \"B\");else if (this >= 1000000) return \"\".concat((this / 1000000).toFixed(fractionDigits), \"M\");else if (this >= 1000) return \"\".concat((this / 1000).toFixed(fractionDigits), \"K\");else return \"\".concat(this.toFixed(fractionDigits));\n};\n/**\r\n * Format the number in currency format.\r\n * @param currency - desired currency symbol\r\n * @param position - location of the currency symbol\r\n * @param fractionDigits - number of characters after decimal point\r\n * @param withZero - trim trailing zeros or not\r\n * @param separator - decimal separator (default is dot)\r\n * @returns {string} - monetary number\r\n */\n\nvar toCurrency = function toCurrency() {\n  var currency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"$\";\n  var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'after';\n  var fractionDigits = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;\n  var withZero = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n  var separator = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '.';\n  var price = this.toFixed(fractionDigits).toString(); // Add &nbsp; symbol\n\n  price = price.replace(/\\B(?=(\\d{3})+(?!\\d))/g, String.fromCharCode(160)); // Remove latest zeros\n\n  if (!withZero) price = price.replace(/\\.0*$/, ''); // Separator replacement\n\n  if (separator !== '.') price = price.replace('.', separator);\n  if (position === 'before') return currency + price; // Default position\n\n  return price + currency;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy92aXN1YWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQTRCO0FBQUEsTUFBbkJDLGNBQW1CLHVFQUFGLENBQUU7QUFDdEQsTUFBSSxRQUFRLFVBQVosRUFBd0IsaUJBQVUsQ0FBQyxPQUFPLFVBQVIsRUFBb0JDLE9BQXBCLENBQTRCRCxjQUE1QixDQUFWLE9BQXhCLEtBQ0ssSUFBSSxRQUFRLE9BQVosRUFBcUIsaUJBQVUsQ0FBQyxPQUFPLE9BQVIsRUFBaUJDLE9BQWpCLENBQXlCRCxjQUF6QixDQUFWLE9BQXJCLEtBQ0EsSUFBSSxRQUFRLElBQVosRUFBa0IsaUJBQVUsQ0FBQyxPQUFPLElBQVIsRUFBY0MsT0FBZCxDQUFzQkQsY0FBdEIsQ0FBVixPQUFsQixLQUNBLGlCQUFVLEtBQUtDLE9BQUwsQ0FBYUQsY0FBYixDQUFWO0FBQ1IsQ0FMTTtBQVFQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFtRztBQUFBLE1BQTFGQyxRQUEwRix1RUFBL0UsR0FBK0U7QUFBQSxNQUExRUMsUUFBMEUsdUVBQS9ELE9BQStEO0FBQUEsTUFBdERKLGNBQXNELHVFQUFyQyxDQUFxQztBQUFBLE1BQWxDSyxRQUFrQyx1RUFBdkIsS0FBdUI7QUFBQSxNQUFoQkMsU0FBZ0IsdUVBQUosR0FBSTtBQUN6SCxNQUFJQyxLQUFLLEdBQUcsS0FBS04sT0FBTCxDQUFhRCxjQUFiLEVBQTZCUSxRQUE3QixFQUFaLENBRHlILENBR3pIOztBQUNBRCxFQUFBQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ0UsT0FBTixDQUFjLHVCQUFkLEVBQXVDQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0IsR0FBcEIsQ0FBdkMsQ0FBUixDQUp5SCxDQU16SDs7QUFDQSxNQUFHLENBQUNOLFFBQUosRUFDSUUsS0FBSyxHQUFHQSxLQUFLLENBQUNFLE9BQU4sQ0FBYyxPQUFkLEVBQXVCLEVBQXZCLENBQVIsQ0FScUgsQ0FVekg7O0FBQ0EsTUFBR0gsU0FBUyxLQUFLLEdBQWpCLEVBQ0lDLEtBQUssR0FBR0EsS0FBSyxDQUFDRSxPQUFOLENBQWMsR0FBZCxFQUFtQkgsU0FBbkIsQ0FBUjtBQUVKLE1BQUdGLFFBQVEsS0FBSyxRQUFoQixFQUNJLE9BQU9ELFFBQVEsR0FBR0ksS0FBbEIsQ0FmcUgsQ0FpQnpIOztBQUNBLFNBQU9BLEtBQUssR0FBR0osUUFBZjtBQUNILENBbkJNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNIZWxwZXJzLy4vc3JjL21vZHVsZXMvdmlzdWFsLmpzPzllYWMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFNpbXBsaWZ5IGxhcmdlIG51bWJlcnMgZm9yIHJlYWRhYmlsaXR5LlxyXG4gKiBGb3IgZXhhbXBsZSwgdG8gdmlldyBhcnRpY2xlcy5cclxuICogQHBhcmFtIGZyYWN0aW9uRGlnaXRzIC0gQSBudW1iZXIgb2Ygc3ltYm9scyBhZnRlciBjb21tYS5cclxuICogQHJldHVybnMge3N0cmluZ30gLSBzaW1wbGlmaWVkIG51bWJlci5cclxuICovXHJcbmV4cG9ydCBjb25zdCBzaW1wbGlmeU51bWJlciA9IGZ1bmN0aW9uKGZyYWN0aW9uRGlnaXRzID0gMCl7XHJcbiAgICBpZiAodGhpcyA+PSAxMDAwMDAwMDAwKSByZXR1cm4gYCR7KHRoaXMgLyAxMDAwMDAwMDAwKS50b0ZpeGVkKGZyYWN0aW9uRGlnaXRzKX1CYFxyXG4gICAgZWxzZSBpZiAodGhpcyA+PSAxMDAwMDAwKSByZXR1cm4gYCR7KHRoaXMgLyAxMDAwMDAwKS50b0ZpeGVkKGZyYWN0aW9uRGlnaXRzKX1NYFxyXG4gICAgZWxzZSBpZiAodGhpcyA+PSAxMDAwKSByZXR1cm4gYCR7KHRoaXMgLyAxMDAwKS50b0ZpeGVkKGZyYWN0aW9uRGlnaXRzKX1LYFxyXG4gICAgZWxzZSByZXR1cm4gYCR7dGhpcy50b0ZpeGVkKGZyYWN0aW9uRGlnaXRzKX1gXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogRm9ybWF0IHRoZSBudW1iZXIgaW4gY3VycmVuY3kgZm9ybWF0LlxyXG4gKiBAcGFyYW0gY3VycmVuY3kgLSBkZXNpcmVkIGN1cnJlbmN5IHN5bWJvbFxyXG4gKiBAcGFyYW0gcG9zaXRpb24gLSBsb2NhdGlvbiBvZiB0aGUgY3VycmVuY3kgc3ltYm9sXHJcbiAqIEBwYXJhbSBmcmFjdGlvbkRpZ2l0cyAtIG51bWJlciBvZiBjaGFyYWN0ZXJzIGFmdGVyIGRlY2ltYWwgcG9pbnRcclxuICogQHBhcmFtIHdpdGhaZXJvIC0gdHJpbSB0cmFpbGluZyB6ZXJvcyBvciBub3RcclxuICogQHBhcmFtIHNlcGFyYXRvciAtIGRlY2ltYWwgc2VwYXJhdG9yIChkZWZhdWx0IGlzIGRvdClcclxuICogQHJldHVybnMge3N0cmluZ30gLSBtb25ldGFyeSBudW1iZXJcclxuICovXHJcbmV4cG9ydCBjb25zdCB0b0N1cnJlbmN5ID0gZnVuY3Rpb24oY3VycmVuY3kgPSBcIiRcIiwgcG9zaXRpb24gPSAnYWZ0ZXInLCBmcmFjdGlvbkRpZ2l0cyA9IDIsIHdpdGhaZXJvID0gZmFsc2UsIHNlcGFyYXRvciA9ICcuJyl7XHJcbiAgICBsZXQgcHJpY2UgPSB0aGlzLnRvRml4ZWQoZnJhY3Rpb25EaWdpdHMpLnRvU3RyaW5nKClcclxuXHJcbiAgICAvLyBBZGQgJm5ic3A7IHN5bWJvbFxyXG4gICAgcHJpY2UgPSBwcmljZS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBTdHJpbmcuZnJvbUNoYXJDb2RlKDE2MCkpXHJcblxyXG4gICAgLy8gUmVtb3ZlIGxhdGVzdCB6ZXJvc1xyXG4gICAgaWYoIXdpdGhaZXJvKVxyXG4gICAgICAgIHByaWNlID0gcHJpY2UucmVwbGFjZSgvXFwuMCokLywgJycpXHJcblxyXG4gICAgLy8gU2VwYXJhdG9yIHJlcGxhY2VtZW50XHJcbiAgICBpZihzZXBhcmF0b3IgIT09ICcuJylcclxuICAgICAgICBwcmljZSA9IHByaWNlLnJlcGxhY2UoJy4nLCBzZXBhcmF0b3IpXHJcblxyXG4gICAgaWYocG9zaXRpb24gPT09ICdiZWZvcmUnKVxyXG4gICAgICAgIHJldHVybiBjdXJyZW5jeSArIHByaWNlXHJcblxyXG4gICAgLy8gRGVmYXVsdCBwb3NpdGlvblxyXG4gICAgcmV0dXJuIHByaWNlICsgY3VycmVuY3lcclxufSJdLCJuYW1lcyI6WyJzaW1wbGlmeU51bWJlciIsImZyYWN0aW9uRGlnaXRzIiwidG9GaXhlZCIsInRvQ3VycmVuY3kiLCJjdXJyZW5jeSIsInBvc2l0aW9uIiwid2l0aFplcm8iLCJzZXBhcmF0b3IiLCJwcmljZSIsInRvU3RyaW5nIiwicmVwbGFjZSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/visual.js\n");

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