import ProjectController from './project-controller.js';
import TodoController from './todo-controller.js';
import ControllerInterface from './controller-interface.js';

//bind controller methods to controller interface
ControllerInterface.setProjectIndex(ProjectController.index);
ControllerInterface.setTodoNew(TodoController.neW);
ControllerInterface.setTodoComplete(TodoController.complete);
ControllerInterface.setTodoShow(TodoController.show);
ControllerInterface.setTodoEdit(TodoController.edit);
ControllerInterface.setTodoDestroy(TodoController.destroy);

//when the page first loads, render the index of projects
ProjectController.index();








