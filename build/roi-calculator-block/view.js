/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/roi-calculator-block/block.json":
/*!*********************************************!*\
  !*** ./src/roi-calculator-block/block.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/roi-calculator-block","version":"0.1.0","title":"ROI Calculator Block","category":"widgets","icon":"calculator","description":"ROI Calculator Block.","example":{},"supports":{"html":false},"attributes":{"percentageIncrease":{"type":"number","default":1},"percentageIncreaseLabel":{"type":"string","default":"Percentage Increase"},"hours":{"type":"number","default":12},"hoursLabel":{"type":"string","default":"Hours"},"days":{"type":"number","default":5},"daysLabel":{"type":"string","default":"Days"},"weeksPerYear":{"type":"number","default":52},"weeksPerYearLabel":{"type":"string","default":"Weeks per year"},"unitsPerHour":{"type":"number","default":22500},"unitsPerHourLabel":{"type":"string","default":"Units per hour"},"profitPerUnit":{"type":"number","default":2},"profitPerUnitLabel":{"type":"string","default":"Profit per unit"},"profitPerYearLabel":{"type":"string","default":"Profit per year"},"unitsPerYearLabel":{"type":"string","default":"Units per year"},"hoursInWeekLabel":{"type":"string","default":"Hours in a week 24/7"},"extraHoursLabel":{"type":"string","default":"Extra hours"},"extraUnitsPerWeekLabel":{"type":"string","default":"Extra units per week"}},"textdomain":"roi-calculator-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ }),

/***/ "./src/roi-calculator-block/calculatorUtils.js":
/*!*****************************************************!*\
  !*** ./src/roi-calculator-block/calculatorUtils.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateResults: () => (/* binding */ calculateResults)
/* harmony export */ });
function calculateResults({
  percentageIncrease,
  hours,
  days,
  weeksPerYear,
  unitsPerHour,
  profitPerUnit
}) {
  const hoursInWeek = hours * days;
  const extraHours = hoursInWeek * (percentageIncrease / 100);
  const extraUnitsPerWeek = unitsPerHour * extraHours;
  const unitsPerYear = extraUnitsPerWeek * weeksPerYear;
  const profitPerYear = unitsPerYear * profitPerUnit;
  return {
    hoursInWeek,
    extraHours,
    extraUnitsPerWeek,
    unitsPerYear,
    profitPerYear
  };
}

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************************************!*\
  !*** ./src/roi-calculator-block/view.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _calculatorUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculatorUtils */ "./src/roi-calculator-block/calculatorUtils.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/roi-calculator-block/block.json");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
console.log("Hello World! (from create-block-roi-calculator-block block)");
/* eslint-enable no-console */






function ROICalculatorFrontEnd(props) {
  const [inputs, setInputs] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    ...props
  });
  const handleChange = (key, value) => {
    setInputs(prev => ({
      ...prev,
      [key]: value
    }));
  };
  const results = (0,_calculatorUtils__WEBPACK_IMPORTED_MODULE_1__.calculateResults)(inputs);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "roi-calculator-block",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        children: props.percentageIncreaseLabel || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(_block_json__WEBPACK_IMPORTED_MODULE_2__.attributes.percentageIncreaseLabel.default, "roi-calculator-block")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
        type: "range",
        min: 1,
        max: 100,
        value: inputs.percentageIncrease,
        onChange: e => handleChange("percentageIncrease", Number(e.target.value))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
        children: [inputs.percentageIncrease, "%"]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        children: props.hoursLabel || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(_block_json__WEBPACK_IMPORTED_MODULE_2__.attributes.hoursLabel.default, "roi-calculator-block")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
        type: "range",
        min: 1,
        max: 24,
        value: inputs.hours,
        onChange: e => handleChange("hours", Number(e.target.value))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        children: inputs.hours
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        children: props.daysLabel || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(_block_json__WEBPACK_IMPORTED_MODULE_2__.attributes.daysLabel.default, "roi-calculator-block")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
        type: "range",
        min: 1,
        max: 31,
        value: inputs.days,
        onChange: e => handleChange("days", Number(e.target.value))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        children: inputs.days
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        children: props.weeksPerYearLabel || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(_block_json__WEBPACK_IMPORTED_MODULE_2__.attributes.weeksPerYearLabel.default, "roi-calculator-block")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
        type: "range",
        min: 1,
        max: 52,
        value: inputs.weeksPerYear,
        onChange: e => handleChange("weeksPerYear", Number(e.target.value))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        children: inputs.weeksPerYear
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        children: props.unitsPerHourLabel || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(_block_json__WEBPACK_IMPORTED_MODULE_2__.attributes.unitsPerHourLabel.default, "roi-calculator-block")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
        type: "number",
        min: 0,
        value: inputs.unitsPerHour,
        onChange: e => handleChange("unitsPerHour", Number(e.target.value))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        children: props.profitPerUnitLabel || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(_block_json__WEBPACK_IMPORTED_MODULE_2__.attributes.profitPerUnitLabel.default, "roi-calculator-block")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
        type: "number",
        min: 0,
        step: 0.01,
        value: inputs.profitPerUnit.toFixed(2),
        onChange: e => handleChange("profitPerUnit", parseFloat(e.target.value))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: [inputs.profitPerYearLabel || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(_block_json__WEBPACK_IMPORTED_MODULE_2__.attributes.profitPerYearLabel.default, "roi-calculator-block"), results.profitPerYear]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: [inputs.unitsPerYearLabel || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(_block_json__WEBPACK_IMPORTED_MODULE_2__.attributes.unitsPerYearLabel.default, "roi-calculator-block"), results.unitsPerYear]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: [inputs.hoursInWeekLabel || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(_block_json__WEBPACK_IMPORTED_MODULE_2__.attributes.hoursInWeekLabel.default, "roi-calculator-block"), results.hoursInWeek]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: [inputs.extraHoursLabel || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(_block_json__WEBPACK_IMPORTED_MODULE_2__.attributes.extraHoursLabel.default, "roi-calculator-block"), results.extraHours]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: [inputs.extraUnitsPerWeekLabel || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(_block_json__WEBPACK_IMPORTED_MODULE_2__.attributes.extraUnitsPerWeekLabel.default, "roi-calculator-block"), results.extraUnitsPerWeek]
    })]
  });
}

// Render the block on the frontend
document.querySelectorAll(".wp-block-create-block-roi-calculator-block").forEach(el => {
  // Parse attributes from data attributes or use defaults
  const props = JSON.parse(el.dataset.attributes || "{}");
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ROICalculatorFrontEnd, {
    ...props
  }), el);
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map