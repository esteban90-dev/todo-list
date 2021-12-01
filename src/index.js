import ProjectController from './project-controller.js';
import TodoController from './todo-controller.js';
import ProjectModel from './project-model.js';
import Storage from './storage.js';

//initialize controllers
ProjectController.initialize();
TodoController.initialize();

//when the page first loads, display the first project if projects are available,
//otherwise display the project index

if(ProjectModel.getProjects().length > 0){
  ProjectController.show(1);
} else {
  ProjectController.index();
}









