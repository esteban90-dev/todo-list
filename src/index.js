import ProjectController from './project-controller.js';
import TodoController from './todo-controller.js';
import ProjectModel from './project-model.js';
import Storage from './storage.js';

//initialize controllers
ProjectController.initialize();
TodoController.initialize();

//when the page first loads, display the 'default' project
ProjectController.show(1);








