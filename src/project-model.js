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
    var result;

    for(let i=0; i<projects.length; i++){
      if (projects[i].getId() === id){
        result = projects[i];
      }
    }

    return result;
  }

  function update(id, title, description){
    var project = read(id);
    project.setTitle(title);
    project.setDescription(description);
  }

  function destroy(id){
    var temp = [];
    for(let i=0; i<projects.length; i++){
      if (projects[i].getId() != id) {
        temp.push(projects[i]);
      }
    }
    projects = temp;
  }

  function getProjects(){
    return projects;
  }

  return { create, read, update, destroy, getProjects }
})(ProjectFactory);

export default ProjectModel;