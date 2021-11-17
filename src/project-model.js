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

  function update(projectId, title, description){
    var project = projects[projectId];
    project.setTitle(title);
    project.setDescription(description);
  }

  function getProjects(){
    return projects;
  }

  return { create, read, update, getProjects }
})(ProjectFactory);

export default ProjectModel;