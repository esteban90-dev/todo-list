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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-controller.js */ \"./src/project-controller.js\");\n\n\n//when the page first loads, render the index of projects\n_project_controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].index();\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project-controller.js":
/*!***********************************!*\
  !*** ./src/project-controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-model.js */ \"./src/project-model.js\");\n/* harmony import */ var _project_index_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-index-view.js */ \"./src/project-index-view.js\");\n/* harmony import */ var _project_new_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-new-view.js */ \"./src/project-new-view.js\");\n\n\n\n\nconst ProjectController = (function(){\n  const projectModel = _project_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  const projectIndexView = _project_index_view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  const projectNewView = _project_new_view_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\n  function index(){\n    //render the projects\n    const projects = projectModel.getProjects();\n    projectIndexView.render(projects);\n\n    //bind project new button to 'new' method\n    projectIndexView.handleClickNew(neW);\n  }\n\n  function neW(){\n    //render the new view\n    projectNewView.render();\n\n    //bind the new view's form submission to the 'create' method\n    projectNewView.handleFormSubmit(create);\n  }\n\n  function create(event){\n    //prevent page refresh after form submission\n    event.preventDefault();\n\n    const form = event.target;\n    const formData = new FormData(form);\n    const title = formData.get(\"title\");\n    const description = formData.get(\"description\");\n    \n    //create new project\n    projectModel.create(title, description);\n\n    //render the index\n    index();\n  }\n\n  return { index };\n})(_project_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _project_index_view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _project_new_view_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectController);\n\n//# sourceURL=webpack://todo-list/./src/project-controller.js?");

/***/ }),

/***/ "./src/project-factory.js":
/*!********************************!*\
  !*** ./src/project-factory.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction ProjectFactory(title, description){\n  var title = title;\n  var description = description;\n\n  function getTitle(){\n    return title;\n  }\n\n  function getDescription(){\n    return description;\n  }\n\n  return { getTitle, getDescription }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectFactory);\n\n//# sourceURL=webpack://todo-list/./src/project-factory.js?");

/***/ }),

/***/ "./src/project-index-view.js":
/*!***********************************!*\
  !*** ./src/project-index-view.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ProjectIndexView = (function(){\n  const app = document.querySelector(\"#app\");\n\n  function render(projects){\n    //clear app element\n    _clearChildren(app); \n    \n    //display projects\n    for(let i=0; i<projects.length; i++){\n      //create title element\n      let p1 = document.createElement(\"p\");\n      p1.innerHTML = projects[i].getTitle();\n\n      //create description element\n      let p2 = document.createElement(\"p\");\n      p2.innerHTML = projects[i].getDescription();\n\n      //append to app element\n      app.appendChild(p1);\n      app.appendChild(p2);\n    }\n\n    //display new project button\n    const button = document.createElement(\"input\");\n    button.setAttribute(\"type\",\"button\");\n    button.setAttribute(\"value\",\"new project\");\n    button.setAttribute(\"id\",\"new\");\n\n    app.appendChild(button);\n  }\n\n  function handleClickNew(handler){\n    const newButton = document.querySelector(\"#new\");\n    newButton.addEventListener('click',handler);\n  }\n\n  function _clearChildren(node){\n    while(node.firstChild){\n      node.removeChild(node.firstChild);\n    }\n  }\n\n  return { render, handleClickNew };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectIndexView);\n\n\n\n//# sourceURL=webpack://todo-list/./src/project-index-view.js?");

/***/ }),

/***/ "./src/project-model.js":
/*!******************************!*\
  !*** ./src/project-model.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project_factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-factory.js */ \"./src/project-factory.js\");\n\n\nconst ProjectModel = (function(){\n  var projects = [];\n  const projectFactory = _project_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n  function create(title, description){\n    //create new project\n    const project = projectFactory(title, description);\n\n    //store new project in project array\n    projects.push(project);\n  }\n\n  function getProjects(){\n    return projects;\n  }\n\n  return { create, getProjects }\n})(_project_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectModel);\n\n//# sourceURL=webpack://todo-list/./src/project-model.js?");

/***/ }),

/***/ "./src/project-new-view.js":
/*!*********************************!*\
  !*** ./src/project-new-view.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ProjectNewView = (function(){\n  const app = document.querySelector(\"#app\");\n\n  function render(){\n    //clear out the app area\n    _clearChildren(app);\n\n    //display the new project form\n    app.appendChild(_createProjectForm());\n  }\n\n  function _clearChildren(node){\n    while(node.firstChild){\n      node.removeChild(node.firstChild);\n    }\n  }\n\n  function _createProjectForm(){\n    //create title field\n    const titleLabel = document.createElement(\"label\");\n    titleLabel.setAttribute(\"id\",\"titleInput\");\n    titleLabel.innerHTML = \"Title:\";\n\n    const titleInput = document.createElement(\"input\");\n    titleInput.setAttribute(\"type\",\"text\");\n    titleInput.setAttribute(\"id\",\"titleInput\");\n    titleInput.setAttribute(\"name\",\"title\");\n\n    //create description field\n    const descLabel = document.createElement(\"label\");\n    descLabel.setAttribute(\"id\",\"descInput\");\n    descLabel.innerHTML = \"Description:\";\n\n    const descInput = document.createElement(\"input\");\n    descInput.setAttribute(\"type\",\"text\");\n    descInput.setAttribute(\"id\",\"descInput\");\n    descInput.setAttribute(\"name\",\"description\");\n\n    //create form submission button\n    const submit = document.createElement(\"input\");\n    submit.setAttribute(\"type\",\"submit\");\n    submit.setAttribute(\"value\",\"create project\");\n\n    //create form element\n    const form = document.createElement(\"form\");\n    form.setAttribute(\"action\",\"\");\n    form.setAttribute(\"href\",\"#\");\n    \n    //append fields and submit button to form\n    form.appendChild(titleLabel);\n    form.appendChild(titleInput);\n    form.appendChild(descLabel);\n    form.appendChild(descInput);\n    form.appendChild(submit);\n\n    return form;\n  }\n\n  function handleFormSubmit(handler){\n    const form = document.querySelector(\"form\");\n    form.addEventListener('submit',handler);\n  }\n\n  return { render, handleFormSubmit };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectNewView);\n\n//# sourceURL=webpack://todo-list/./src/project-new-view.js?");

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