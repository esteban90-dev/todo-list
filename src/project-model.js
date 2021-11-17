import ProjectFactory from "./project-factory.js";

const ProjectModel = (function(){
  var projects = [];
  const projectFactory = ProjectFactory;

  function create(title, description){
    //create new project
    const project = projectFactory(title, description);

    //store new project in project array
    projects.push(project);
  }

  function read(id){
    return projects[id];
  }

  function getProjects(){
    return projects;
  }

  return { create, read, getProjects }
})(ProjectFactory);

export default ProjectModel;