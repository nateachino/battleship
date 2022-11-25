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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": () => (/* binding */ Board),\n/* harmony export */   \"Player\": () => (/* binding */ Player),\n/* harmony export */   \"Ship\": () => (/* binding */ Ship),\n/* harmony export */   \"boardArray\": () => (/* binding */ boardArray)\n/* harmony export */ });\n/* harmony import */ var _manip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manip.js */ \"./src/manip.js\");\n\r\n\r\nlet boardArray = []\r\nfor (let i=0;i<49;i++){\r\n    boardArray.push('')\r\n}\r\n\r\nconst Ship = (length)=>{\r\n    let hits=0\r\n    let sunk=false\r\n    let placed = false\r\n\r\n    const hit = ()=>{\r\n        hits+=1\r\n    }\r\n\r\n    const isSunk = ()=>{\r\n        if (hits == length){\r\n            return sunk = true\r\n        }\r\n        else{\r\n            return sunk = false\r\n        }\r\n    }\r\n    return {length,hits,sunk,placed, isSunk, hit}\r\n}\r\n\r\nconst Board = (ship, position) =>{\r\n\r\n    const placeShip = ()=>{\r\n        for (let i=0;i<ship.length;i++){\r\n            boardArray.splice(position+i,1,'l')\r\n        }\r\n        return boardArray\r\n    }\r\n\r\n    const recieveAttack = (coord)=>{\r\n        if (boardArray[coord] != ''){\r\n            ship.hit()\r\n            if (ship.isSunk() == true){\r\n                return 'sunk'\r\n            }else{\r\n                return 'not sank'\r\n            }\r\n        }else{\r\n            return false\r\n        }\r\n    }\r\n    return {placeShip,recieveAttack}  \r\n\r\n}\r\n\r\nconst Player = ()=>{\r\n    let turn; \r\n    let obj = {\r\n        carrier: {\r\n            has:1,\r\n            length:5\r\n        },\r\n        battleship:{\r\n            has: 2,\r\n            length:4\r\n        },\r\n        cruiser:{\r\n            has: 3,\r\n            length:3 \r\n        },\r\n        destroyer:{\r\n            has:4,\r\n            length:2\r\n        }\r\n    }\r\n    return obj\r\n}\r\n\r\nconst player = Player()\r\n\r\n;(0,_manip_js__WEBPACK_IMPORTED_MODULE_0__.displayBoard)(player)\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/manip.js":
/*!**********************!*\
  !*** ./src/manip.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayBoard\": () => (/* binding */ displayBoard)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\r\n\r\nfunction displayBoard(playerObj){\r\n    const boardElement = document.querySelector('.board')\r\n    for (let i=0;i<___WEBPACK_IMPORTED_MODULE_0__.boardArray.length;i++){\r\n        const square = document.createElement('div')\r\n        square.classList.add('square')\r\n        boardElement.appendChild(square)\r\n       \r\n        square.addEventListener('click', ()=>{\r\n            ;(0,___WEBPACK_IMPORTED_MODULE_0__.Board)((0,___WEBPACK_IMPORTED_MODULE_0__.Ship)(5),0).placeShip()\r\n            for (let j=0;j<___WEBPACK_IMPORTED_MODULE_0__.boardArray.length;j++){\r\n                if (___WEBPACK_IMPORTED_MODULE_0__.boardArray[i]!=''){\r\n                    square.style.backgroundColor=\"red\"\r\n                }\r\n            }\r\n            \r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://battleship/./src/manip.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;