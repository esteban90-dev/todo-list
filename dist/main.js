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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-model.js */ \"./src/todo-model.js\");\n\n\n_todo_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create('take out the trash','all the way to the trash can','today','low');\n_todo_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create('take out the recycling','all the way to the trash can','today','low');\n_todo_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create('take out the girlfriend','all the way to the trash can','today','low');\n\n_todo_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].destroy(0);\n\nconsole.log(_todo_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].read(0).getTitle());\nconsole.log(_todo_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].read(1).getTitle());\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/todo-factory.js":
/*!*****************************!*\
  !*** ./src/todo-factory.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction TodoFactory(title, description, dueDate, priority){\n  var title = title;\n  var description = description;\n  var dueDate = dueDate;\n  var priority = priority;\n  var isComplete = false;\n\n  function getTitle(){\n    return title;\n  }\n\n  function setTitle(newTitle){\n    title = newTitle;\n  }\n\n  function getDescription(){\n    return description;\n  }\n\n  function setDescription(newDescription){\n    description = newDescription;\n  }\n\n  function getDueDate(){\n    return dueDate;\n  }\n\n  function setDueDate(newDueDate){\n    dueDate = newDueDate;\n  }\n\n  function getPriority(){\n    return priority;\n  }\n\n  function setPriority(newPriority){\n    priority = newPriority;\n  }\n\n  function getIsComplete(){\n    return isComplete;\n  }\n\n  function setComplete(){\n    isComplete = true;\n  }\n\n  function setIncomplete(){\n    isComplete = false;\n  }\n\n  return { getTitle, setTitle, getDescription, setDescription, getDueDate, setDueDate, getPriority, setPriority, getIsComplete, setComplete, setIncomplete };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoFactory);\n\n//# sourceURL=webpack://todo-list/./src/todo-factory.js?");

/***/ }),

/***/ "./src/todo-model.js":
/*!***************************!*\
  !*** ./src/todo-model.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo_factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-factory.js */ \"./src/todo-factory.js\");\n\n\nconst TodoModel = (function(){\n  var todos = [];\n  var todoFactory = _todo_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n  function create(title, description, dueDate, priority){\n    var todo = todoFactory(title, description, dueDate, priority);\n    todos.push(todo);\n  }\n\n  function read(id){\n    return todos[id];\n  }\n\n  function update(id, title, description, dueDate, priority){\n    var todo = read(id);\n    todo.setTitle(title);\n    todo.setDescription(description);\n    todo.setDueDate(dueDate);\n    todo.setPriority(priority);\n  }\n\n  function destroy(id){\n    var temp = [];\n    for(let i=0; i<todos.length; i++){\n      if (i != id) {\n        temp.push(todos[i]);\n      }\n    }\n    todos = temp;\n  }\n\n  return { create, read, update, destroy }\n})(_todo_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoModel);\n\n\n//# sourceURL=webpack://todo-list/./src/todo-model.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;