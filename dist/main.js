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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-model.js */ \"./src/project-model.js\");\n/* harmony import */ var _todo_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-model.js */ \"./src/todo-model.js\");\n/* harmony import */ var _project_index_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-index-view.js */ \"./src/project-index-view.js\");\n/* harmony import */ var _project_new_view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-new-view.js */ \"./src/project-new-view.js\");\n/* harmony import */ var _project_show_view_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-show-view.js */ \"./src/project-show-view.js\");\n/* harmony import */ var _todo_controller_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-controller.js */ \"./src/todo-controller.js\");\n\n\n\n\n\n\n\nconst ProjectController = (function(){\n  const projectModel = _project_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  const todoModel = _todo_model_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  const projectIndexView = _project_index_view_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n  const projectNewView = _project_new_view_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n  const projectShowView = _project_show_view_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n  const todoController = _todo_controller_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n\n  function index(){\n    //render the projects\n    const projects = projectModel.getProjects();\n    projectIndexView.render(projects);\n\n    //bind project new button to 'new' method\n    projectIndexView.handleClickNew(neW);\n\n    //bind project title to 'show' method\n    projectIndexView.handleClickShow(show);\n  }\n\n  function neW(){\n    //render the new view\n    projectNewView.render();\n\n    //bind the new view's form submission to the 'create' method\n    projectNewView.handleFormSubmit(create);\n  }\n\n  function create(event){\n    //prevent page refresh after form submission\n    event.preventDefault();\n\n    const form = event.target;\n    const formData = new FormData(form);\n    const title = formData.get(\"title\");\n    const description = formData.get(\"description\");\n    \n    //create new project\n    projectModel.create(title, description);\n\n    //render the index\n    index();\n  }\n\n  function show(event){\n    const projectId = event.target.getAttribute(\"data-project-id\");\n    const project = projectModel.read(projectId);\n    const todos = todoModel.getTodos(projectId);\n\n    //render project\n    projectShowView.render(project, projectId, todos);\n\n    //bind new button event to the 'new' method in the TodoController\n    projectShowView.handleClickNew(todoController.neW);\n\n    //if there are any todos on the show view, bind their 'show', 'edit', and 'delete' button events to the appropriate method in the Todo Controller\n    if (todoModel.getTodos()){\n      projectShowView.handleCheck(todoController.complete);\n      projectShowView.handleClickShow(todoController.show);\n      projectShowView.handleClickEdit(todoController.edit);\n      projectShowView.handleClickDelete(todoController.destroy);\n    }\n  }\n\n  return { index, show };\n})(_project_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _todo_model_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _project_index_view_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _project_new_view_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _project_show_view_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectController);\n\n//# sourceURL=webpack://todo-list/./src/project-controller.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ProjectIndexView = (function(){\n  const app = document.querySelector(\"#app\");\n\n  function render(projects){\n    //clear app element\n    _clearChildren(app); \n\n    //display projects\n    for(let i=0; i<projects.length; i++){\n      //create title element\n      let p1 = document.createElement(\"p\");\n      p1.innerHTML = projects[i].getTitle();\n\n      //create description element\n      let p2 = document.createElement(\"p\");\n      p2.innerHTML = projects[i].getDescription();\n\n      //create show link\n      let a = document.createElement(\"a\");\n      a.setAttribute(\"data-project-id\",i);\n      a.setAttribute(\"href\",\"#\")\n      a.innerHTML = \"show\";\n\n      //append to app element\n      app.appendChild(p1);\n      app.appendChild(p2);\n      app.appendChild(a);\n    }\n\n    //display new project button\n    const button = document.createElement(\"input\");\n    button.setAttribute(\"type\",\"button\");\n    button.setAttribute(\"value\",\"new project\");\n    button.setAttribute(\"id\",\"new\");\n\n    app.appendChild(button);\n  }\n\n  function handleClickNew(handler){\n    const newButton = document.querySelector(\"#new\");\n    newButton.addEventListener('click',handler);\n  }\n\n  function handleClickShow(handler){\n    const links = document.querySelectorAll(\"a\");\n\n    links.forEach( (link) => {\n      if(link.innerHTML === \"show\"){\n        link.addEventListener('click',handler);\n      }\n    })\n  }\n\n  function _clearChildren(node){\n    while(node.firstChild){\n      node.removeChild(node.firstChild);\n    }\n  }\n\n  return { render, handleClickNew, handleClickShow };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectIndexView);\n\n\n\n//# sourceURL=webpack://todo-list/./src/project-index-view.js?");

/***/ }),

/***/ "./src/project-model.js":
/*!******************************!*\
  !*** ./src/project-model.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project_factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-factory.js */ \"./src/project-factory.js\");\n\n\nconst ProjectModel = (function(){\n  var projects = [];\n  const projectFactory = _project_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n  function create(title, description){\n    //create new project\n    const project = projectFactory(title, description);\n\n    //store new project in project array\n    projects.push(project);\n  }\n\n  function read(id){\n    return projects[id];\n  }\n\n  function getProjects(){\n    return projects;\n  }\n\n  return { create, read, getProjects }\n})(_project_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectModel);\n\n//# sourceURL=webpack://todo-list/./src/project-model.js?");

/***/ }),

/***/ "./src/project-new-view.js":
/*!*********************************!*\
  !*** ./src/project-new-view.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ProjectNewView = (function(){\n  const app = document.querySelector(\"#app\");\n\n  function render(){\n    //clear out the app area\n    _clearChildren(app);\n\n    //display the new project form\n    app.appendChild(_createProjectForm());\n  }\n\n  function _clearChildren(node){\n    while(node.firstChild){\n      node.removeChild(node.firstChild);\n    }\n  }\n\n  function _createProjectForm(){\n    //create title field\n    const titleLabel = document.createElement(\"label\");\n    titleLabel.setAttribute(\"id\",\"titleInput\");\n    titleLabel.innerHTML = \"Title:\";\n\n    const titleInput = document.createElement(\"input\");\n    titleInput.setAttribute(\"type\",\"text\");\n    titleInput.setAttribute(\"id\",\"titleInput\");\n    titleInput.setAttribute(\"name\",\"title\");\n\n    //create description field\n    const descLabel = document.createElement(\"label\");\n    descLabel.setAttribute(\"id\",\"descInput\");\n    descLabel.innerHTML = \"Description:\";\n\n    const descInput = document.createElement(\"input\");\n    descInput.setAttribute(\"type\",\"text\");\n    descInput.setAttribute(\"id\",\"descInput\");\n    descInput.setAttribute(\"name\",\"description\");\n\n    //create form submission button\n    const submit = document.createElement(\"input\");\n    submit.setAttribute(\"type\",\"submit\");\n    submit.setAttribute(\"value\",\"create project\");\n\n    //create form element\n    const form = document.createElement(\"form\");\n    form.setAttribute(\"action\",\"\");\n    form.setAttribute(\"href\",\"#\");\n    \n    //append fields and submit button to form\n    form.appendChild(titleLabel);\n    form.appendChild(titleInput);\n    form.appendChild(descLabel);\n    form.appendChild(descInput);\n    form.appendChild(submit);\n\n    return form;\n  }\n\n  function handleFormSubmit(handler){\n    const form = document.querySelector(\"form\");\n    form.addEventListener('submit',handler);\n  }\n\n  return { render, handleFormSubmit };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectNewView);\n\n//# sourceURL=webpack://todo-list/./src/project-new-view.js?");

/***/ }),

/***/ "./src/project-show-view.js":
/*!**********************************!*\
  !*** ./src/project-show-view.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst TodoIndexView = (function(){\n  const app = document.querySelector(\"#app\");\n\n  function render(project, projectId, todos){\n    _clearChildren(app);\n    _renderProject(project);\n    _renderTodos(todos);\n    app.appendChild(_createNewButton(projectId));\n  }\n\n  function _renderProject(project){\n    //display title\n    const title = document.createElement(\"h2\");\n    title.innerHTML = project.getTitle();\n\n    //display description\n    const description = document.createElement(\"h3\");\n    description.innerHTML = project.getDescription();\n    \n    //append to app element\n    app.appendChild(title);\n    app.appendChild(description);\n  }\n\n  function _renderTodos(todos){\n    //display the todos\n    for(let i=0; i<todos.length; i++){\n      //todo complete checkbox\n      let checkBox = document.createElement(\"input\");\n      checkBox.setAttribute(\"type\",\"checkbox\");\n      checkBox.setAttribute(\"id\",i);\n\n      //set the checkbox checked if the todo is completed\n      if(todos[i].getIsComplete()){\n        checkBox.setAttribute(\"checked\",true);\n      }\n\n      //todo title\n      let p = document.createElement('p');\n      p.innerHTML = todos[i].getTitle();\n\n      //add a strikethrough if the todo is completed\n      if(todos[i].getIsComplete()){\n        p.classList.add(\"line-through\");\n      }\n\n      //show link\n      let a1 = document.createElement('a');\n      a1.setAttribute(\"id\",i);\n      a1.setAttribute(\"href\",\"#\");\n      a1.innerHTML = \"show\";\n\n      //edit link\n      let a2 = document.createElement('a');\n      a2.setAttribute(\"id\",i);\n      a2.setAttribute(\"href\",\"#\");\n      a2.innerHTML = \"edit\";\n\n      //delete link\n      let a3 = document.createElement(\"a\");\n      a3.setAttribute(\"id\",i);\n      a3.setAttribute(\"href\",\"#\");\n      a3.innerHTML = \"delete\";\n      \n      //append to app element\n      app.appendChild(checkBox);\n      app.appendChild(p);\n      app.appendChild(a1);\n      app.appendChild(a2);\n      app.appendChild(a3);\n    }\n  }\n\n  function handleCheck(handler){\n    const checkBoxes = document.querySelectorAll('input');\n\n    checkBoxes.forEach( (box) => { \n      if (box.getAttribute(\"type\") === 'checkbox'){\n        box.addEventListener('click', handler) \n      }\n    });\n  }\n\n  function handleClickNew(handler){\n    document.querySelector(\"#new\").addEventListener('click', handler);\n  }\n\n  function handleClickShow(handler){\n    const links = document.querySelectorAll('a');\n\n    links.forEach( (button) => { \n      if (button.innerHTML === 'show'){\n        button.addEventListener('click', handler) \n      }\n    });\n  }\n\n  function handleClickEdit(handler){\n    const links = document.querySelectorAll('a');\n\n    links.forEach( (button) => { \n      if (button.innerHTML === 'edit'){\n        button.addEventListener('click', handler) \n      }\n    });\n  }\n\n  function handleClickDelete(handler){\n    const links = document.querySelectorAll('a');\n\n    links.forEach( (button) => { \n      if (button.innerHTML === 'delete'){\n        button.addEventListener('click', handler) \n      }\n    });\n  }\n\n  function _createNewButton(projectId){\n    const newButton = document.createElement('input');\n    newButton.setAttribute(\"type\",\"button\");\n    newButton.setAttribute(\"value\",\"new todo\");\n    newButton.setAttribute(\"id\",\"new\");\n    newButton.setAttribute(\"data-project-id\",projectId)\n    return newButton;\n  }\n  \n  function _clearChildren(node){\n    while(node.firstChild){\n      node.removeChild(node.firstChild);\n    }\n  }\n\n  return { render, handleClickNew, handleCheck, handleClickShow, handleClickEdit, handleClickDelete };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoIndexView);\n\n//# sourceURL=webpack://todo-list/./src/project-show-view.js?");

/***/ }),

/***/ "./src/todo-controller.js":
/*!********************************!*\
  !*** ./src/todo-controller.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-model.js */ \"./src/todo-model.js\");\n/* harmony import */ var _project_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-model.js */ \"./src/project-model.js\");\n/* harmony import */ var _todo_new_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-new-view.js */ \"./src/todo-new-view.js\");\n/* harmony import */ var _todo_show_view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-show-view.js */ \"./src/todo-show-view.js\");\n/* harmony import */ var _todo_edit_view_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-edit-view.js */ \"./src/todo-edit-view.js\");\n/* harmony import */ var _project_show_view_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-show-view.js */ \"./src/project-show-view.js\");\n\n\n\n\n\n\n\nconst TodoController = (function(){\n  const todoModel = _todo_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  const projectModel = _project_model_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  const todoNewView = _todo_new_view_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n  const todoShowView = _todo_show_view_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n  const todoEditView = _todo_edit_view_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n  const projectShowView = _project_show_view_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n\n  function neW(event){\n    const projectId = event.target.getAttribute(\"data-project-id\");\n\n    //render the new todo page\n    todoNewView.render(projectId);\n\n    //bind form submission on the new view to the 'create' method\n    todoNewView.handleFormSubmit(create);\n  }\n\n  function create(event){\n    //prevent page refresh after form submission\n    event.preventDefault();\n\n    //gather submitted form data\n    const formData = new FormData(event.target);\n    const title = formData.get('title');\n    const description = formData.get('description');\n    const dueDate = formData.get('dueDate');\n    const priority = formData.get('priority');\n    const projectId = event.target.getAttribute(\"data-project-id\");\n\n    //create new todo\n    _todo_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(title, description, dueDate, priority, projectId);\n\n    //render the project show view\n    _renderProjectShow(projectId);\n  }\n\n  function show(event){\n    //render the show page for the given todo\n    todoShowView.render(todoModel.read(event.target.getAttribute(\"id\")));\n  }\n\n  function edit(event){\n    //render the edit page for the given todo\n    todoEditView.render(_todo_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].read(event.target.getAttribute(\"id\")),event.target.getAttribute(\"id\"));\n\n    //bind form submission on the edit view to the 'update' method\n    todoEditView.handleFormSubmit(update);\n  }\n\n  function update(event){\n    //prevent page refresh after form submission\n    event.preventDefault();\n\n    //gather submitted form data\n    const formData = new FormData(event.target);\n    const title = formData.get('title');\n    const description = formData.get('description');\n    const dueDate = formData.get('dueDate');\n    const priority = formData.get('priority');\n    const todoId = event.target.getAttribute(\"id\");\n\n    //update the existing todo\n    _todo_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].update(todoId, title, description, dueDate, priority);\n\n    //render the project show view\n    const todo = todoModel.read(todoId);\n    const projectId = todo.getProjectId();\n    _renderProjectShow(projectId);\n  }\n\n  function destroy(event){\n    const todoId = event.target.getAttribute(\"id\");\n    const todo = todoModel.read(todoId);\n    const projectId = todo.getProjectId();\n\n    //prompt user for confirmation\n    const response = confirm(\"Are you sure?\");\n\n    //remove the given todo from the model if the user confirms removal\n    if(response){\n      _todo_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].destroy(todoId);\n    }\n\n    //render the project show view\n    _renderProjectShow(projectId);\n  }\n\n  function complete(event){\n    const todoId = event.target.getAttribute(\"id\");\n    const todo = _todo_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].read(todoId);\n    const projectId = todo.getProjectId();\n\n    //if todo is complete, then mark incomplete.  if todo is incomplete, then mark complete\n    if(todo.getIsComplete()){\n      todo.setIncomplete();\n    } else { \n      todo.setComplete();\n    }\n\n    //render the project show view\n    _renderProjectShow(projectId);\n  }\n\n  function _renderProjectShow(projectId){\n    const project = projectModel.read(projectId);\n    const todos = todoModel.getTodos(projectId);\n\n    //render the project show view\n    projectShowView.render(project, projectId, todos);\n\n    //bind new button event to the 'new' method\n    projectShowView.handleClickNew(neW);\n\n    //for each todo on the show view, bind the 'show', 'edit', and 'delete' button events to the appropriate method\n    projectShowView.handleCheck(complete);\n    projectShowView.handleClickShow(show);\n    projectShowView.handleClickEdit(edit);\n    projectShowView.handleClickDelete(destroy);\n  }\n\n  return { neW, complete, show, edit, destroy };\n})(_todo_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _project_model_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _project_show_view_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _todo_new_view_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _todo_show_view_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _todo_edit_view_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoController);\n\n//# sourceURL=webpack://todo-list/./src/todo-controller.js?");

/***/ }),

/***/ "./src/todo-edit-view.js":
/*!*******************************!*\
  !*** ./src/todo-edit-view.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst TodoEditView = (function(){\n  const app = document.querySelector('#app');\n\n  function render(todo, id){\n    _clearChildren(app);\n    app.appendChild(_createTodoForm(todo, id));\n  }\n\n  function handleFormSubmit(handler){\n    document.querySelector('form').addEventListener('submit',handler);\n  }\n\n  function _clearChildren(node){\n    while(node.firstChild){\n      node.removeChild(node.firstChild);\n    }\n  }\n\n  function _createTodoForm(todo, id){\n    const form = document.createElement(\"form\");\n    form.setAttribute(\"id\",id);\n\n    const titleInputLabel = document.createElement(\"label\");\n    titleInputLabel.setAttribute(\"id\",\"titleInput\");\n    titleInputLabel.innerHTML = \"Title:\";\n\n    const titleInput = document.createElement(\"input\");\n    titleInput.setAttribute(\"type\",\"text\");\n    titleInput.setAttribute(\"name\",\"title\");\n    titleInput.setAttribute(\"value\",todo.getTitle());\n    titleInput.setAttribute(\"id\",\"titleInput\");\n\n    const descriptionInputLabel = document.createElement(\"label\");\n    descriptionInputLabel.setAttribute(\"id\",\"descriptionInput\");\n    descriptionInputLabel.innerHTML = \"Description:\";\n\n    const descriptionInput = document.createElement(\"input\");\n    descriptionInput.setAttribute(\"type\",\"text\");\n    descriptionInput.setAttribute(\"name\",\"description\");\n    descriptionInput.setAttribute(\"value\",todo.getDescription());\n    descriptionInput.setAttribute(\"id\",\"descriptionInput\");\n\n    const dueDateInputLabel = document.createElement(\"label\");\n    dueDateInputLabel.setAttribute(\"id\",\"dueDateInput\");\n    dueDateInputLabel.innerHTML = \"Due Date:\";\n\n    const dueDateInput = document.createElement(\"input\");\n    dueDateInput.setAttribute(\"type\",\"date\");\n    dueDateInput.setAttribute(\"name\",\"dueDate\");\n    dueDateInput.setAttribute(\"value\",todo.getDueDate());\n    dueDateInput.setAttribute(\"id\",\"dueDateInput\");\n\n    const priorityInputLabel = document.createElement(\"label\");\n    priorityInputLabel.setAttribute(\"id\",\"priorityInput\");\n    priorityInputLabel.innerHTML = \"Priority:\";\n\n    const priorityInput = document.createElement(\"input\");\n    priorityInput.setAttribute(\"type\",\"text\");\n    priorityInput.setAttribute(\"name\",\"priority\");\n    priorityInput.setAttribute(\"value\",todo.getPriority());\n    priorityInput.setAttribute(\"id\",\"priorityInput\");\n\n    const submitButton = document.createElement(\"input\");\n    submitButton.setAttribute(\"type\",\"submit\");\n    submitButton.setAttribute(\"value\",\"Update Todo\");\n\n    form.appendChild(titleInputLabel);\n    form.appendChild(titleInput);\n    form.appendChild(descriptionInputLabel);\n    form.appendChild(descriptionInput);\n    form.appendChild(dueDateInputLabel);\n    form.appendChild(dueDateInput);\n    form.appendChild(priorityInputLabel);\n    form.appendChild(priorityInput);\n    form.appendChild(submitButton);\n\n    return form;\n  }\n\n  return { render, handleFormSubmit };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoEditView);\n\n//# sourceURL=webpack://todo-list/./src/todo-edit-view.js?");

/***/ }),

/***/ "./src/todo-factory.js":
/*!*****************************!*\
  !*** ./src/todo-factory.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction TodoFactory(title, description, dueDate, priority, projectId){\n  var title = title;\n  var description = description;\n  var dueDate = dueDate;\n  var priority = priority;\n  var projectId = projectId;\n  var isComplete = false;\n\n  function getTitle(){\n    return title;\n  }\n\n  function setTitle(newTitle){\n    title = newTitle;\n  }\n\n  function getDescription(){\n    return description;\n  }\n\n  function setDescription(newDescription){\n    description = newDescription;\n  }\n\n  function getDueDate(){\n    return dueDate;\n  }\n\n  function setDueDate(newDueDate){\n    dueDate = newDueDate;\n  }\n\n  function getPriority(){\n    return priority;\n  }\n\n  function setPriority(newPriority){\n    priority = newPriority;\n  }\n\n  function getIsComplete(){\n    return isComplete;\n  }\n\n  function setComplete(){\n    isComplete = true;\n  }\n\n  function setIncomplete(){\n    isComplete = false;\n  }\n\n  function getProjectId(){\n    return projectId;\n  }\n\n  return { getTitle, setTitle, getDescription, setDescription, getDueDate, setDueDate, getPriority, setPriority, getIsComplete, setComplete, setIncomplete, getProjectId };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoFactory);\n\n//# sourceURL=webpack://todo-list/./src/todo-factory.js?");

/***/ }),

/***/ "./src/todo-model.js":
/*!***************************!*\
  !*** ./src/todo-model.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo_factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-factory.js */ \"./src/todo-factory.js\");\n\n\nconst TodoModel = (function(){\n  var todos = [];\n  var todoFactory = _todo_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n  function create(title, description, dueDate, priority, projectId){\n    var todo = todoFactory(title, description, dueDate, priority, projectId);\n    todos.push(todo);\n  }\n\n  function read(id){\n    return todos[id];\n  }\n\n  function update(id, title, description, dueDate, priority){\n    var todo = read(id);\n    todo.setTitle(title);\n    todo.setDescription(description);\n    todo.setDueDate(dueDate);\n    todo.setPriority(priority);\n  }\n\n  function destroy(id){\n    var temp = [];\n    for(let i=0; i<todos.length; i++){\n      if (i != id) {\n        temp.push(todos[i]);\n      }\n    }\n    todos = temp;\n  }\n\n  function getTodos(projectId){\n    //return todos with given projectId\n    var temp = []\n\n    for(let i=0; i<todos.length; i++){\n      if (todos[i].getProjectId() === projectId){\n        temp.push(todos[i]);\n      }\n    }\n\n    return temp;\n  }\n\n  return { create, read, update, destroy, getTodos }\n})(_todo_factory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoModel);\n\n\n//# sourceURL=webpack://todo-list/./src/todo-model.js?");

/***/ }),

/***/ "./src/todo-new-view.js":
/*!******************************!*\
  !*** ./src/todo-new-view.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst TodoNewView = (function(){\n  const app = document.querySelector(\"#app\");\n\n  function render(projectId){\n    _clearChildren(app);\n    app.appendChild(_createTodoForm(projectId));\n  }\n\n  function handleFormSubmit(handler){\n    document.querySelector('form').addEventListener('submit',handler);\n  }\n\n  function _clearChildren(node){\n    while(node.firstChild){\n      node.removeChild(node.firstChild);\n    }\n  }\n\n  function _createTodoForm(projectId){\n    const form = document.createElement(\"form\");\n    form.setAttribute(\"data-project-id\",projectId);\n\n    const titleInputLabel = document.createElement(\"label\");\n    titleInputLabel.setAttribute(\"id\",\"titleInput\");\n    titleInputLabel.innerHTML = \"Title:\";\n\n    const titleInput = document.createElement(\"input\");\n    titleInput.setAttribute(\"type\",\"text\");\n    titleInput.setAttribute(\"name\",\"title\");\n    titleInput.setAttribute(\"id\",\"titleInput\");\n\n    const descriptionInputLabel = document.createElement(\"label\");\n    descriptionInputLabel.setAttribute(\"id\",\"descriptionInput\");\n    descriptionInputLabel.innerHTML = \"Description:\";\n\n    const descriptionInput = document.createElement(\"input\");\n    descriptionInput.setAttribute(\"type\",\"text\");\n    descriptionInput.setAttribute(\"name\",\"description\");\n    descriptionInput.setAttribute(\"id\",\"descriptionInput\");\n\n    const dueDateInputLabel = document.createElement(\"label\");\n    dueDateInputLabel.setAttribute(\"id\",\"dueDateInput\");\n    dueDateInputLabel.innerHTML = \"Due Date:\";\n\n    const dueDateInput = document.createElement(\"input\");\n    dueDateInput.setAttribute(\"type\",\"date\");\n    dueDateInput.setAttribute(\"name\",\"dueDate\");\n    dueDateInput.setAttribute(\"id\",\"dueDateInput\");\n\n    const priorityInputLabel = document.createElement(\"label\");\n    priorityInputLabel.setAttribute(\"id\",\"priorityInput\");\n    priorityInputLabel.innerHTML = \"Priority:\";\n\n    const priorityInput = document.createElement(\"input\");\n    priorityInput.setAttribute(\"type\",\"text\");\n    priorityInput.setAttribute(\"name\",\"priority\");\n    priorityInput.setAttribute(\"id\",\"priorityInput\");\n\n    const submitButton = document.createElement(\"input\");\n    submitButton.setAttribute(\"type\",\"submit\");\n    submitButton.setAttribute(\"value\",\"Create Todo\");\n\n    form.appendChild(titleInputLabel);\n    form.appendChild(titleInput);\n    form.appendChild(descriptionInputLabel);\n    form.appendChild(descriptionInput);\n    form.appendChild(dueDateInputLabel);\n    form.appendChild(dueDateInput);\n    form.appendChild(priorityInputLabel);\n    form.appendChild(priorityInput);\n    form.appendChild(submitButton);\n\n    return form;\n  }\n\n  return { render, handleFormSubmit };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoNewView);\n\n//# sourceURL=webpack://todo-list/./src/todo-new-view.js?");

/***/ }),

/***/ "./src/todo-show-view.js":
/*!*******************************!*\
  !*** ./src/todo-show-view.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst TodoShowView = (function(){\n  const app = document.querySelector(\"#app\");\n\n  function render(todo){\n    _clearChildren(app);\n    const pTitle = document.createElement('p');\n    pTitle.innerHTML = \"Title: \" + todo.getTitle();\n\n    const pDescription = document.createElement('p');\n    pDescription.innerHTML = \"Description: \" + todo.getDescription();\n\n    const pDueDate = document.createElement('p');\n    pDueDate.innerHTML = \"Due Date: \" + todo.getDueDate();\n\n    const pPriority = document.createElement('p');\n    pPriority.innerHTML = \"Priority: \" + todo.getPriority();\n\n    const pIsComplete = document.createElement('p');\n    pIsComplete.innerHTML = \"Completed: \" + todo.getIsComplete();\n\n    app.appendChild(pTitle);\n    app.appendChild(pDescription);\n    app.appendChild(pDueDate);\n    app.appendChild(pPriority);\n    app.appendChild(pIsComplete);\n  }\n\n  function _clearChildren(node){\n    while(node.firstChild){\n      node.removeChild(node.firstChild);\n    }\n  }\n\n  return { render };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoShowView);\n\n//# sourceURL=webpack://todo-list/./src/todo-show-view.js?");

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