/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/app.config.ts":
/*!**********************************!*\
  !*** ./src/config/app.config.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.PORT_NUMBER = void 0;\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nconst parseNumber = (variable) => {\n    if (variable === undefined)\n        return 0;\n    return parseInt(variable);\n};\nexports.PORT_NUMBER = parseNumber(process.env.PORT);\n\n\n//# sourceURL=webpack://self-work-api/./src/config/app.config.ts?");

/***/ }),

/***/ "./src/constants/russelSentimentModel.ts":
/*!***********************************************!*\
  !*** ./src/constants/russelSentimentModel.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.RUSSEL_SENTIMENT_MODEL = void 0;\nexports.RUSSEL_SENTIMENT_MODEL = [\n    {\n        sentiment: \"happy\",\n        min: 0,\n        max: 22.5,\n    },\n    {\n        sentiment: \"energy\",\n        min: 22.5,\n        max: 45,\n    },\n    {\n        sentiment: \"excite\",\n        min: 45,\n        max: 67.5,\n    },\n    {\n        sentiment: \"alert\",\n        min: 67.5,\n        max: 90,\n    },\n    {\n        sentiment: \"tense\",\n        min: 90,\n        max: 112.5,\n    },\n    {\n        sentiment: \"nervous\",\n        min: 112.5,\n        max: 135,\n    },\n    {\n        sentiment: \"stressed\",\n        min: 135,\n        max: 157.5,\n    },\n    {\n        sentiment: \"anxiety\",\n        min: 157.5,\n        max: 180,\n    },\n    {\n        sentiment: \"sad\",\n        min: -180,\n        max: -157.5,\n    },\n    {\n        sentiment: \"depressed\",\n        min: -157.5,\n        max: -135,\n    },\n    {\n        sentiment: \"lethargy\",\n        min: -135,\n        max: -112.5,\n    },\n    {\n        sentiment: \"tired\",\n        min: -112.5,\n        max: -90,\n    },\n    {\n        sentiment: \"calm\",\n        min: -90,\n        max: -67.5,\n    },\n    {\n        sentiment: \"relaxed\",\n        min: -67.5,\n        max: -45,\n    },\n    {\n        sentiment: \"serene\",\n        min: -45,\n        max: -22.5,\n    },\n    {\n        sentiment: \"contented\",\n        min: -22.5,\n        max: 0,\n    },\n];\n\n\n//# sourceURL=webpack://self-work-api/./src/constants/russelSentimentModel.ts?");

/***/ }),

/***/ "./src/feature/index.ts":
/*!******************************!*\
  !*** ./src/feature/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.FeatEmotionalMusic = void 0;\nconst musicAdjustEmotion_1 = __webpack_require__(/*! ./musicAdjustEmotion */ \"./src/feature/musicAdjustEmotion.ts\");\nObject.defineProperty(exports, \"FeatEmotionalMusic\", ({ enumerable: true, get: function () { return musicAdjustEmotion_1.musicAdjustEmotion; } }));\n\n\n//# sourceURL=webpack://self-work-api/./src/feature/index.ts?");

/***/ }),

/***/ "./src/feature/musicAdjustEmotion.ts":
/*!*******************************************!*\
  !*** ./src/feature/musicAdjustEmotion.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.musicAdjustEmotion = void 0;\nconst useNaturalLanguage_1 = __webpack_require__(/*! ../app/useNaturalLanguage */ \"./src/app/useNaturalLanguage.js\");\nconst russelSentimentModel_1 = __webpack_require__(/*! ../constants/russelSentimentModel */ \"./src/constants/russelSentimentModel.ts\");\n// type returnData = {\n//   score: number;\n//   magnitude: number;\n// };\nconst computeVector2 = (x, y) => {\n    const angle = (Math.atan2(y, x) * 180) / Math.PI;\n    const scalar = Math.pow(Math.pow(x, 2) + Math.pow(y, 2), 0.5);\n    return {\n        angle,\n        scalar,\n    };\n};\nconst classifySentiment = (angle) => {\n    let sentiment = \"neutral\";\n    russelSentimentModel_1.RUSSEL_SENTIMENT_MODEL.forEach((condition) => {\n        const isWithinRange = condition.min <= angle && angle < condition.max;\n        if (isWithinRange)\n            sentiment = condition.sentiment;\n    });\n    // 算出した感情の角度がモデルのどこにも当たらない場合\n    return sentiment;\n};\nconst musicAdjustEmotion = (req) => __awaiter(void 0, void 0, void 0, function* () {\n    const query = req.query;\n    if (typeof req.query.text !== \"string\") {\n        throw new Error(\"Parameter date must be string\");\n    }\n    else {\n        const analyzeSentiment = yield (0, useNaturalLanguage_1.useNaturalLanguage)(query.text);\n        const { score: x, magnitude: y } = analyzeSentiment.documentSentiment;\n        const { angle, scalar } = computeVector2(x, y);\n        const { angle: angle2, scalar: scalar2 } = computeVector2(x, -y);\n        // const sentiment: string = classifySentiment(angle);\n        return [\n            { sentiment: classifySentiment(angle), scalar },\n            { sentiment: classifySentiment(angle2), scalar: scalar2 },\n        ];\n    }\n});\nexports.musicAdjustEmotion = musicAdjustEmotion;\n\n\n//# sourceURL=webpack://self-work-api/./src/feature/musicAdjustEmotion.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst app_config_1 = __webpack_require__(/*! ./config/app.config */ \"./src/config/app.config.ts\");\nconst feature_1 = __webpack_require__(/*! ./feature */ \"./src/feature/index.ts\");\nconst app = (0, express_1.default)();\nconst port = app_config_1.PORT_NUMBER || 8080;\nconst handleListenServer = () => {\n    console.log(`server listening on port ${port}`);\n};\napp.use((req, res, next) => {\n    res.header(\"Access-Control-Allow-Origin\", \"*\");\n    res.header(\"Access-Control-Allow-Headers\", \"Origin, X-Requested-With, Content-Type, Accept\");\n    next();\n});\napp.listen(port, handleListenServer);\napp.get(\"/emotionalMusic/\", (req, res) => {\n    (0, feature_1.FeatEmotionalMusic)(req).then((data) => {\n        res.send(data);\n    });\n});\n\n\n//# sourceURL=webpack://self-work-api/./src/index.ts?");

/***/ }),

/***/ "./src/app/useNaturalLanguage.js":
/*!***************************************!*\
  !*** ./src/app/useNaturalLanguage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useNaturalLanguage\": () => (/* binding */ useNaturalLanguage)\n/* harmony export */ });\n/* harmony import */ var _google_cloud_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @google-cloud/language */ \"@google-cloud/language\");\n/* harmony import */ var _google_cloud_language__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_google_cloud_language__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst useNaturalLanguage = async (text) => {\n  const client = new (_google_cloud_language__WEBPACK_IMPORTED_MODULE_0___default().LanguageServiceClient)();\n  const document = {\n    content: text,\n    type: \"PLAIN_TEXT\",\n  };\n  const [result] = await client.analyzeSentiment({ document });\n  return result;\n};\n\n\n//# sourceURL=webpack://self-work-api/./src/app/useNaturalLanguage.js?");

/***/ }),

/***/ "@google-cloud/language":
/*!*****************************************!*\
  !*** external "@google-cloud/language" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@google-cloud/language");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;