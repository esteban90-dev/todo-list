import ProjectModel from "./project-model.js";
import TodoModel from "./todo-model.js";
import ProjectIndexView from "./project-index-view.js";
import ProjectNewView from "./project-new-view.js";
import ProjectShowView from "./project-show-view.js";
import ProjectEditView from "./project-edit-view.js";
import TodoController from "./todo-controller.js";

const ProjectController = (function(){
  const projectModel = ProjectModel;
  const todoModel = TodoModel;
  const projectIndexView = ProjectIndexView;
  const projectNewView = ProjectNewView;
  const projectShowView = ProjectShowView;
  const projectEditView = ProjectEditView;
  const todoController = TodoController;

  function index(){
    //render the projects
    const projects = projectModel.getProjects();
    projectIndexView.render(projects);

    //bind show buttons to 'show' method
    projectIndexView.handleClickShow(show);

    //bind edit button to 'edit' method
    projectIndexView.handleClickEdit(edit);

    //bind the delete button to 'destroy' method
    projectIndexView.handleClickDelete(destroy);

    //bind project new button to 'new' method
    projectIndexView.handleClickNew(neW);
  }

  function neW(){
    //render the new view
    projectNewView.render();

    //bind the new view's form submission to the 'create' method
    projectNewView.handleFormSubmit(create);
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

    //render the index
    index();
  }

  function edit(event){
    const projectId = event.target.getAttribute("data-project-id");
    const project = projectModel.read(projectId);

    //render edit view
    projectEditView.render(project, projectId);

    //bind form submission to the update method
    projectEditView.handleFormSubmit(update);
  }

  function show(event){
    const projectId = event.target.getAttribute("data-project-id");
    const project = projectModel.read(projectId);
    const todos = todoModel.getTodos(projectId);

    //render project
    projectShowView.render(project, projectId, todos);

    //bind new button event to the 'new' method in the TodoController
    projectShowView.handleClickNew(todoController.neW);

    //if there are any todos on the show view, bind their 'show', 'edit', and 'delete' button events to the appropriate method in the Todo Controller
    if (todoModel.getTodos()){
      projectShowView.handleCheck(todoController.complete);
      projectShowView.handleClickShow(todoController.show);
      projectShowView.handleClickEdit(todoController.edit);
      projectShowView.handleClickDelete(todoController.destroy);
    }
  }

  function update(event){
    //prevent page refresh after form submission
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const newTitle = formData.get("title");
    const newDescription = formData.get("description");
    const projectId = form.getAttribute("data-project-id");

    //update project
    ProjectModel.update(projectId, newTitle, newDescription);

    //render project index
    index();
  }

  function destroy(event){
    const projectId = event.target.getAttribute("data-project-id");

    //prompt user for confirmation before deleting project
    if(confirm("Are you sure?")){
      projectModel.destroy(projectId);
    }
    
    //render project index
    index();
  } 

  return { index, show };
})(ProjectModel, TodoModel, ProjectIndexView, ProjectNewView, ProjectShowView, ProjectEditView);

export default ProjectController;