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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/math */ \"./src/modules/math.js\");\n/* harmony import */ var _modules_visual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/visual */ \"./src/modules/visual.js\");\n\n\nNumber.prototype.percentageDifference = _modules_math__WEBPACK_IMPORTED_MODULE_0__.percentageDifference;\nNumber.prototype.minusPercentage = _modules_math__WEBPACK_IMPORTED_MODULE_0__.minusPercentage;\nNumber.prototype.simplifyNumber = _modules_visual__WEBPACK_IMPORTED_MODULE_1__.simplifyNumber;\nNumber.prototype.makeDigit = _modules_visual__WEBPACK_IMPORTED_MODULE_1__.makeDigit;\nNumber.prototype.toCurrency = _modules_visual__WEBPACK_IMPORTED_MODULE_1__.toCurrency;\nMath.randomInteger = _modules_math__WEBPACK_IMPORTED_MODULE_0__.randomInteger;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMtaGVscGVycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQU1BO0FBTUFNLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQlAsb0JBQWpCLEdBQXdDQSwrREFBeEM7QUFDQU0sTUFBTSxDQUFDQyxTQUFQLENBQWlCTixlQUFqQixHQUFtQ0EsMERBQW5DO0FBQ0FLLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkosY0FBakIsR0FBa0NBLDJEQUFsQztBQUNBRyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJILFNBQWpCLEdBQTZCQSxzREFBN0I7QUFDQUUsTUFBTSxDQUFDQyxTQUFQLENBQWlCRixVQUFqQixHQUE4QkEsdURBQTlCO0FBQ0FHLElBQUksQ0FBQ04sYUFBTCxHQUFxQkEsd0RBQXJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNIZWxwZXJzLy4vc3JjL2pzLWhlbHBlcnMuanM/ZDM1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgcGVyY2VudGFnZURpZmZlcmVuY2UsXHJcbiAgICBtaW51c1BlcmNlbnRhZ2UsXHJcbiAgICByYW5kb21JbnRlZ2VyLFxyXG59IGZyb20gJy4vbW9kdWxlcy9tYXRoJ1xyXG5cclxuaW1wb3J0IHtcclxuICAgIHNpbXBsaWZ5TnVtYmVyLFxyXG4gICAgbWFrZURpZ2l0LFxyXG4gICAgdG9DdXJyZW5jeSxcclxufSBmcm9tICcuL21vZHVsZXMvdmlzdWFsJ1xyXG5cclxuTnVtYmVyLnByb3RvdHlwZS5wZXJjZW50YWdlRGlmZmVyZW5jZSA9IHBlcmNlbnRhZ2VEaWZmZXJlbmNlXHJcbk51bWJlci5wcm90b3R5cGUubWludXNQZXJjZW50YWdlID0gbWludXNQZXJjZW50YWdlXHJcbk51bWJlci5wcm90b3R5cGUuc2ltcGxpZnlOdW1iZXIgPSBzaW1wbGlmeU51bWJlclxyXG5OdW1iZXIucHJvdG90eXBlLm1ha2VEaWdpdCA9IG1ha2VEaWdpdFxyXG5OdW1iZXIucHJvdG90eXBlLnRvQ3VycmVuY3kgPSB0b0N1cnJlbmN5XHJcbk1hdGgucmFuZG9tSW50ZWdlciA9IHJhbmRvbUludGVnZXJcclxuXHJcblxyXG4iXSwibmFtZXMiOlsicGVyY2VudGFnZURpZmZlcmVuY2UiLCJtaW51c1BlcmNlbnRhZ2UiLCJyYW5kb21JbnRlZ2VyIiwic2ltcGxpZnlOdW1iZXIiLCJtYWtlRGlnaXQiLCJ0b0N1cnJlbmN5IiwiTnVtYmVyIiwicHJvdG90eXBlIiwiTWF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js-helpers.js\n");

/***/ }),

/***/ "./src/modules/math.js":
/*!*****************************!*\
  !*** ./src/modules/math.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"percentageDifference\": () => (/* binding */ percentageDifference),\n/* harmony export */   \"minusPercentage\": () => (/* binding */ minusPercentage),\n/* harmony export */   \"randomInteger\": () => (/* binding */ randomInteger)\n/* harmony export */ });\n/**\r\n * Percentage difference between numbers X and Y.\r\n * For example, income for the current and last month.\r\n * @param y\r\n * @returns {number}\r\n */\nvar percentageDifference = function percentageDifference(y) {\n  var x = this;\n  if (y === 0) return (y - x) / x * 100;else return (x - y) / y * 100;\n};\n/**\r\n * Subtraction from the number of percentages.\r\n * For example, displaying a discounted price.\r\n * @param percentage\r\n * @returns {number}\r\n */\n\nvar minusPercentage = function minusPercentage(percentage) {\n  var price = this;\n  return price - price * (percentage / 100);\n};\n/**\r\n * Random number from MIN to MAX (integer)\r\n * @param min - Minimum number\r\n * @param max - Maximum number\r\n * @returns {number}\r\n */\n\nvar randomInteger = function randomInteger(min, max) {\n  var rand = min - 0.5 + Math.random() * (max - min + 1);\n  return Math.round(rand);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tYXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBU0MsQ0FBVCxFQUFXO0FBQzlDLE1BQUlDLENBQUMsR0FBRyxJQUFSO0FBRUEsTUFBR0QsQ0FBQyxLQUFLLENBQVQsRUFBWSxPQUFRLENBQUNBLENBQUMsR0FBR0MsQ0FBTCxJQUFVQSxDQUFYLEdBQWdCLEdBQXZCLENBQVosS0FDSyxPQUFRLENBQUNBLENBQUMsR0FBR0QsQ0FBTCxJQUFVQSxDQUFYLEdBQWdCLEdBQXZCO0FBQ0wsQ0FMTTtBQVFQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNRSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQVNDLFVBQVQsRUFBb0I7QUFDbEQsTUFBSUMsS0FBSyxHQUFHLElBQVo7QUFDQSxTQUFPQSxLQUFLLEdBQUlBLEtBQUssSUFBSUQsVUFBVSxHQUFDLEdBQWYsQ0FBckI7QUFDQSxDQUhNO0FBTVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBU0MsR0FBVCxFQUFjQyxHQUFkLEVBQWtCO0FBQzlDLE1BQUlDLElBQUksR0FBR0YsR0FBRyxHQUFHLEdBQU4sR0FBWUcsSUFBSSxDQUFDQyxNQUFMLE1BQWlCSCxHQUFHLEdBQUdELEdBQU4sR0FBWSxDQUE3QixDQUF2QjtBQUNBLFNBQU9HLElBQUksQ0FBQ0UsS0FBTCxDQUFXSCxJQUFYLENBQVA7QUFDQSxDQUhNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNIZWxwZXJzLy4vc3JjL21vZHVsZXMvbWF0aC5qcz9mYWZkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBQZXJjZW50YWdlIGRpZmZlcmVuY2UgYmV0d2VlbiBudW1iZXJzIFggYW5kIFkuXHJcbiAqIEZvciBleGFtcGxlLCBpbmNvbWUgZm9yIHRoZSBjdXJyZW50IGFuZCBsYXN0IG1vbnRoLlxyXG4gKiBAcGFyYW0geVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHBlcmNlbnRhZ2VEaWZmZXJlbmNlID0gZnVuY3Rpb24oeSl7XHJcblx0bGV0IHggPSB0aGlzXHJcblxyXG5cdGlmKHkgPT09IDApIHJldHVybiAoKHkgLSB4KSAvIHgpICogMTAwXHJcblx0ZWxzZSByZXR1cm4gKCh4IC0geSkgLyB5KSAqIDEwMFxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFN1YnRyYWN0aW9uIGZyb20gdGhlIG51bWJlciBvZiBwZXJjZW50YWdlcy5cclxuICogRm9yIGV4YW1wbGUsIGRpc3BsYXlpbmcgYSBkaXNjb3VudGVkIHByaWNlLlxyXG4gKiBAcGFyYW0gcGVyY2VudGFnZVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1pbnVzUGVyY2VudGFnZSA9IGZ1bmN0aW9uKHBlcmNlbnRhZ2Upe1xyXG5cdGxldCBwcmljZSA9IHRoaXNcclxuXHRyZXR1cm4gcHJpY2UgLSAocHJpY2UgKiAocGVyY2VudGFnZS8xMDApKVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFJhbmRvbSBudW1iZXIgZnJvbSBNSU4gdG8gTUFYIChpbnRlZ2VyKVxyXG4gKiBAcGFyYW0gbWluIC0gTWluaW11bSBudW1iZXJcclxuICogQHBhcmFtIG1heCAtIE1heGltdW0gbnVtYmVyXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmFuZG9tSW50ZWdlciA9IGZ1bmN0aW9uKG1pbiwgbWF4KXtcclxuXHRsZXQgcmFuZCA9IG1pbiAtIDAuNSArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSlcclxuXHRyZXR1cm4gTWF0aC5yb3VuZChyYW5kKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwZXJjZW50YWdlRGlmZmVyZW5jZSIsInkiLCJ4IiwibWludXNQZXJjZW50YWdlIiwicGVyY2VudGFnZSIsInByaWNlIiwicmFuZG9tSW50ZWdlciIsIm1pbiIsIm1heCIsInJhbmQiLCJNYXRoIiwicmFuZG9tIiwicm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/math.js\n");

/***/ }),

/***/ "./src/modules/visual.js":
/*!*******************************!*\
  !*** ./src/modules/visual.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"simplifyNumber\": () => (/* binding */ simplifyNumber),\n/* harmony export */   \"makeDigit\": () => (/* binding */ makeDigit),\n/* harmony export */   \"toCurrency\": () => (/* binding */ toCurrency)\n/* harmony export */ });\n/**\r\n * Simplify large numbers for readability.\r\n * For example, to view articles.\r\n * @param fractionDigits - A number of symbols after comma.\r\n * @returns {string} - simplified number.\r\n */\nvar simplifyNumber = function simplifyNumber() {\n  var fractionDigits = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  if (this >= 1000000000) return \"\".concat((this / 1000000000).toFixed(fractionDigits), \"B\");else if (this >= 1000000) return \"\".concat((this / 1000000).toFixed(fractionDigits), \"M\");else if (this >= 1000) return \"\".concat((this / 1000).toFixed(fractionDigits), \"K\");else return \"\".concat(this.toFixed(fractionDigits));\n};\n/**\r\n * Dividing a number into digits.\r\n * @returns {string}\r\n */\n\nvar makeDigit = function makeDigit() {\n  return this.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, String.fromCharCode(160));\n};\n/**\r\n * Format the number in currency format.\r\n * @param currency - desired currency symbol\r\n * @param position - location of the currency symbol\r\n * @param fractionDigits - number of characters after decimal point\r\n * @param withZero - trim trailing zeros or not\r\n * @param separator - decimal separator (default is dot)\r\n * @returns {string} - monetary number\r\n */\n\nvar toCurrency = function toCurrency() {\n  var currency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"$\";\n  var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'after';\n  var fractionDigits = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;\n  var withZero = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n  var separator = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '.';\n  var price = this.toFixed(fractionDigits).toString(); // Add &nbsp; symbol\n\n  price = price.replace(/\\B(?=(\\d{3})+(?!\\d))/g, String.fromCharCode(160)); // Remove latest zeros\n\n  if (!withZero) price = price.replace(/\\.0*$/, ''); // Separator replacement\n\n  if (separator !== '.') price = price.replace('.', separator);\n  if (position === 'before') return currency + price; // Default position\n\n  return price + currency;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy92aXN1YWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUE0QjtBQUFBLE1BQW5CQyxjQUFtQix1RUFBRixDQUFFO0FBQ3RELE1BQUksUUFBUSxVQUFaLEVBQXdCLGlCQUFVLENBQUMsT0FBTyxVQUFSLEVBQW9CQyxPQUFwQixDQUE0QkQsY0FBNUIsQ0FBVixPQUF4QixLQUNLLElBQUksUUFBUSxPQUFaLEVBQXFCLGlCQUFVLENBQUMsT0FBTyxPQUFSLEVBQWlCQyxPQUFqQixDQUF5QkQsY0FBekIsQ0FBVixPQUFyQixLQUNBLElBQUksUUFBUSxJQUFaLEVBQWtCLGlCQUFVLENBQUMsT0FBTyxJQUFSLEVBQWNDLE9BQWQsQ0FBc0JELGNBQXRCLENBQVYsT0FBbEIsS0FDQSxpQkFBVSxLQUFLQyxPQUFMLENBQWFELGNBQWIsQ0FBVjtBQUNSLENBTE07QUFRUDtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFVO0FBQy9CLFNBQU8sS0FBS0MsUUFBTCxHQUFnQkMsT0FBaEIsQ0FBd0IsdUJBQXhCLEVBQWlEQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0IsR0FBcEIsQ0FBakQsQ0FBUDtBQUNILENBRk07QUFLUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBbUc7QUFBQSxNQUExRkMsUUFBMEYsdUVBQS9FLEdBQStFO0FBQUEsTUFBMUVDLFFBQTBFLHVFQUEvRCxPQUErRDtBQUFBLE1BQXREVCxjQUFzRCx1RUFBckMsQ0FBcUM7QUFBQSxNQUFsQ1UsUUFBa0MsdUVBQXZCLEtBQXVCO0FBQUEsTUFBaEJDLFNBQWdCLHVFQUFKLEdBQUk7QUFDekgsTUFBSUMsS0FBSyxHQUFHLEtBQUtYLE9BQUwsQ0FBYUQsY0FBYixFQUE2QkcsUUFBN0IsRUFBWixDQUR5SCxDQUd6SDs7QUFDQVMsRUFBQUEsS0FBSyxHQUFHQSxLQUFLLENBQUNSLE9BQU4sQ0FBYyx1QkFBZCxFQUF1Q0MsTUFBTSxDQUFDQyxZQUFQLENBQW9CLEdBQXBCLENBQXZDLENBQVIsQ0FKeUgsQ0FNekg7O0FBQ0EsTUFBRyxDQUFDSSxRQUFKLEVBQ0lFLEtBQUssR0FBR0EsS0FBSyxDQUFDUixPQUFOLENBQWMsT0FBZCxFQUF1QixFQUF2QixDQUFSLENBUnFILENBVXpIOztBQUNBLE1BQUdPLFNBQVMsS0FBSyxHQUFqQixFQUNJQyxLQUFLLEdBQUdBLEtBQUssQ0FBQ1IsT0FBTixDQUFjLEdBQWQsRUFBbUJPLFNBQW5CLENBQVI7QUFFSixNQUFHRixRQUFRLEtBQUssUUFBaEIsRUFDSSxPQUFPRCxRQUFRLEdBQUdJLEtBQWxCLENBZnFILENBaUJ6SDs7QUFDQSxTQUFPQSxLQUFLLEdBQUdKLFFBQWY7QUFDSCxDQW5CTSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzSGVscGVycy8uL3NyYy9tb2R1bGVzL3Zpc3VhbC5qcz85ZWFjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBTaW1wbGlmeSBsYXJnZSBudW1iZXJzIGZvciByZWFkYWJpbGl0eS5cclxuICogRm9yIGV4YW1wbGUsIHRvIHZpZXcgYXJ0aWNsZXMuXHJcbiAqIEBwYXJhbSBmcmFjdGlvbkRpZ2l0cyAtIEEgbnVtYmVyIG9mIHN5bWJvbHMgYWZ0ZXIgY29tbWEuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IC0gc2ltcGxpZmllZCBudW1iZXIuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2ltcGxpZnlOdW1iZXIgPSBmdW5jdGlvbihmcmFjdGlvbkRpZ2l0cyA9IDApe1xyXG4gICAgaWYgKHRoaXMgPj0gMTAwMDAwMDAwMCkgcmV0dXJuIGAkeyh0aGlzIC8gMTAwMDAwMDAwMCkudG9GaXhlZChmcmFjdGlvbkRpZ2l0cyl9QmBcclxuICAgIGVsc2UgaWYgKHRoaXMgPj0gMTAwMDAwMCkgcmV0dXJuIGAkeyh0aGlzIC8gMTAwMDAwMCkudG9GaXhlZChmcmFjdGlvbkRpZ2l0cyl9TWBcclxuICAgIGVsc2UgaWYgKHRoaXMgPj0gMTAwMCkgcmV0dXJuIGAkeyh0aGlzIC8gMTAwMCkudG9GaXhlZChmcmFjdGlvbkRpZ2l0cyl9S2BcclxuICAgIGVsc2UgcmV0dXJuIGAke3RoaXMudG9GaXhlZChmcmFjdGlvbkRpZ2l0cyl9YFxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIERpdmlkaW5nIGEgbnVtYmVyIGludG8gZGlnaXRzLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1ha2VEaWdpdCA9IGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gdGhpcy50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFN0cmluZy5mcm9tQ2hhckNvZGUoMTYwKSlcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBGb3JtYXQgdGhlIG51bWJlciBpbiBjdXJyZW5jeSBmb3JtYXQuXHJcbiAqIEBwYXJhbSBjdXJyZW5jeSAtIGRlc2lyZWQgY3VycmVuY3kgc3ltYm9sXHJcbiAqIEBwYXJhbSBwb3NpdGlvbiAtIGxvY2F0aW9uIG9mIHRoZSBjdXJyZW5jeSBzeW1ib2xcclxuICogQHBhcmFtIGZyYWN0aW9uRGlnaXRzIC0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgYWZ0ZXIgZGVjaW1hbCBwb2ludFxyXG4gKiBAcGFyYW0gd2l0aFplcm8gLSB0cmltIHRyYWlsaW5nIHplcm9zIG9yIG5vdFxyXG4gKiBAcGFyYW0gc2VwYXJhdG9yIC0gZGVjaW1hbCBzZXBhcmF0b3IgKGRlZmF1bHQgaXMgZG90KVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSAtIG1vbmV0YXJ5IG51bWJlclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHRvQ3VycmVuY3kgPSBmdW5jdGlvbihjdXJyZW5jeSA9IFwiJFwiLCBwb3NpdGlvbiA9ICdhZnRlcicsIGZyYWN0aW9uRGlnaXRzID0gMiwgd2l0aFplcm8gPSBmYWxzZSwgc2VwYXJhdG9yID0gJy4nKXtcclxuICAgIGxldCBwcmljZSA9IHRoaXMudG9GaXhlZChmcmFjdGlvbkRpZ2l0cykudG9TdHJpbmcoKVxyXG5cclxuICAgIC8vIEFkZCAmbmJzcDsgc3ltYm9sXHJcbiAgICBwcmljZSA9IHByaWNlLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFN0cmluZy5mcm9tQ2hhckNvZGUoMTYwKSlcclxuXHJcbiAgICAvLyBSZW1vdmUgbGF0ZXN0IHplcm9zXHJcbiAgICBpZighd2l0aFplcm8pXHJcbiAgICAgICAgcHJpY2UgPSBwcmljZS5yZXBsYWNlKC9cXC4wKiQvLCAnJylcclxuXHJcbiAgICAvLyBTZXBhcmF0b3IgcmVwbGFjZW1lbnRcclxuICAgIGlmKHNlcGFyYXRvciAhPT0gJy4nKVxyXG4gICAgICAgIHByaWNlID0gcHJpY2UucmVwbGFjZSgnLicsIHNlcGFyYXRvcilcclxuXHJcbiAgICBpZihwb3NpdGlvbiA9PT0gJ2JlZm9yZScpXHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbmN5ICsgcHJpY2VcclxuXHJcbiAgICAvLyBEZWZhdWx0IHBvc2l0aW9uXHJcbiAgICByZXR1cm4gcHJpY2UgKyBjdXJyZW5jeVxyXG59Il0sIm5hbWVzIjpbInNpbXBsaWZ5TnVtYmVyIiwiZnJhY3Rpb25EaWdpdHMiLCJ0b0ZpeGVkIiwibWFrZURpZ2l0IiwidG9TdHJpbmciLCJyZXBsYWNlIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwidG9DdXJyZW5jeSIsImN1cnJlbmN5IiwicG9zaXRpb24iLCJ3aXRoWmVybyIsInNlcGFyYXRvciIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/visual.js\n");

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