import ProjectModel from "./project-model.js";
import TodoModel from "./todo-model.js";
import ProjectIndexView from "./project-index-view.js";
import ProjectNewView from "./project-new-view.js";
import ProjectShowView from "./project-show-view.js";
import ProjectEditView from "./project-edit-view.js";
import ControllerInterface from "./controller-interface.js";

const ProjectController = (function(){
  const projectModel = ProjectModel;
  const todoModel = TodoModel;
  const projectIndexView = ProjectIndexView;
  const projectNewView = ProjectNewView;
  const projectShowView = ProjectShowView;
  const projectEditView = ProjectEditView;
  const controllerInterface = ControllerInterface;

  function initialize(){
    //bind controller methods to controller interface
    controllerInterface.setProjectIndex(index);
    controllerInterface.setProjectShow(show);
  }

  function index(){
    const projects = projectModel.getProjects();

    //render index view
    projectIndexView.render(projects);

    //bind buttons to controller methods
    _bindIndexButtons();
  }

  function neW(){
    //render the new view
    projectNewView.render();

    //bind buttons to controller methods
    _bindNewButtons();
  }

  function create(event){
    //prevent page refresh after form submission
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const title = formData.get("title");
    const description = formData.get("description");
    
    //create new project
    projectModel.create(title, description);

    //render the index view
    index();
  }

  function edit(event){
    const projectId = parseInt(event.target.getAttribute("data-project-id"));
    const project = projectModel.read(projectId);

    //render edit view
    projectEditView.render(project);

    //bind buttons to controller methods
    _bindEditButtons();
  }

  function show(event){
    //normally this method is called by a clicking on a project's title and the event 
    //parameter will be an 'event' object but when the application first loads, 
    //the show method is called by index.js. In this case the 'event' parameter will 
    //not be an 'event' object but just an integer representing the projectId

    if(event.target){
      //use 'currentTarget' instead of 'target' because the 'back to project' link on 
      //the todo show view has nested children which may be the target even though the 
      //listener is attached to the parent anchor element
      var projectId = parseInt(event.currentTarget.getAttribute("data-project-id"));
    } else {
      var projectId = event;
    }
    
    const project = projectModel.read(projectId);
    const todos = todoModel.getTodos(projectId);

    //render project
    projectShowView.render(project, todos);

    //bind buttons to controller methods
    _bindShowButtons(todos);
  }

  function update(event){
    //prevent page refresh after form submission
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const newTitle = formData.get("title");
    const newDescription = formData.get("description");
    const projectId = parseInt(form.getAttribute("data-project-id"));

    //update project
    ProjectModel.update(projectId, newTitle, newDescription);

    //render project show
    show(event);
  }

  function destroy(event){
    const projectId = parseInt(event.target.getAttribute("data-project-id"));

    //prompt user for confirmation
    const response = confirm("Are you sure?");
  
    if (response) { 
      //delete todos associated with project
      todoModel.destroyByProject(projectId);

      //delete project
      projectModel.destroy(projectId);
    }
    
    //render project index
    index();
  } 

  function _bindIndexButtons(){
    //bind buttons to appropriate controller methods
    projectIndexView.handleClickShow(show);
    //projectIndexView.handleClickEditProject(edit);
    //projectIndexView.handleClickDeleteProject(destroy);

    //bind project new button to 'new' method
    projectIndexView.handleClickNew(neW);
  }

  function _bindNewButtons(){
    //bind buttons to appropriate controller methods
    projectNewView.handleFormSubmit(create);
    projectNewView.handleClickBack(index);
  }

  function _bindEditButtons(){
    //bind buttons to appropriate controller methods
    projectEditView.handleFormSubmit(update);
    projectNewView.handleClickBack(index);
  }

  function _bindShowButtons(todos){
    //bind buttons to appropriate controller methods
    projectShowView.handleClickBack(index);
    projectShowView.handleClickEditProject(edit);
    projectShowView.handleClickDeleteProject(destroy);
    projectShowView.handleClickNewTodo(controllerInterface.getTodoNew());

    //if there are any todos on the show view, bind their button events to the appropriate method in the Todo Controller
    if (todos.length > 0){
      projectShowView.handleCheckTodo(controllerInterface.getTodoComplete());
      projectShowView.handleClickShowTodo(controllerInterface.getTodoShow());
      projectShowView.handleClickEditTodo(controllerInterface.getTodoEdit());
      projectShowView.handleClickDeleteTodo(controllerInterface.getTodoDestroy());
    }
  }

  return { initialize, show };
})(ProjectModel, TodoModel, ProjectIndexView, ProjectNewView, ProjectShowView, ProjectEditView, ControllerInterface);

export default ProjectController;