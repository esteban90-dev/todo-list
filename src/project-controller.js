import ProjectModel from "./project-model.js";
import ProjectIndexView from "./project-index-view.js";
import ProjectNewView from "./project-new-view.js";

const ProjectController = (function(){
  const projectModel = ProjectModel;
  const projectIndexView = ProjectIndexView;
  const projectNewView = ProjectNewView;

  function index(){
    //render the projects
    const projects = projectModel.getProjects();
    projectIndexView.render(projects);

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

  return { index };
})(ProjectModel, ProjectIndexView, ProjectNewView);

export default ProjectController;