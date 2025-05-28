/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./responsiveIframePCFControl/index.ts":
/*!*********************************************!*\
  !*** ./responsiveIframePCFControl/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   responsiveIframePCFControl: () => (/* binding */ responsiveIframePCFControl)\n/* harmony export */ });\nclass responsiveIframePCFControl {\n  constructor() {}\n  init(context, notifyOutputChanged, state, container) {\n    this._container = container;\n    this._controlViewRendered = false;\n  }\n  updateView(context) {\n    if (!this._controlViewRendered) {\n      this.renderIFrame();\n      this._controlViewRendered = true;\n    }\n    var iframeSrc = context.parameters.source.raw;\n    if (this._Source !== iframeSrc) {\n      this._Source = iframeSrc !== null && iframeSrc !== void 0 ? iframeSrc : \"\";\n      this._iframe.src = this._Source; // better to assign src directly\n    }\n  }\n  renderIFrame() {\n    var wrapper = document.createElement(\"div\");\n    wrapper.className = \"customControl\"; // applies your CSS\n    var iFrameElement = document.createElement(\"iframe\");\n    iFrameElement.className = \"iFrameControl\"; // applies your CSS\n    iFrameElement.frameBorder = \"0\"; // use property instead of attribute\n    // Allow only camera access (no microphone)\n    iFrameElement.setAttribute(\"allow\", \"camera\");\n    this._iframe = iFrameElement;\n    wrapper.appendChild(this._iframe);\n    this._container.appendChild(wrapper);\n  }\n  getOutputs() {\n    return {};\n  }\n  destroy() {\n    // Cleanup logic if needed\n  }\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./responsiveIframePCFControl/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./responsiveIframePCFControl/index.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('NghiemDoan.responsiveIframePCFControl', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.responsiveIframePCFControl);
} else {
	var NghiemDoan = NghiemDoan || {};
	NghiemDoan.responsiveIframePCFControl = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.responsiveIframePCFControl;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}