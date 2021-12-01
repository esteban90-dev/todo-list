import ProjectFactory from "./project-factory.js";
import Storage from "./storage.js";

const ProjectModel = (function(){
  var projects = [];
  const projectFactory = ProjectFactory;
  const storage = Storage;

  //retrieve project data from localStorage
  _retrieve();

  //create defaut project if no projects exist
  _createDefaut();

  function create(title, description, id = null){
    //create new project
    const project = projectFactory(title, description, id);

    console.log("created object with title: " + title + ", description: " + description + ", and id: " + id);

    //store new project in project array
    projects.push(project);

    //store project data in localStorage
    _store();
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

    //store project data in localStorage
    _store();
  }

  function destroy(id){
    var temp = [];
    for(let i=0; i<projects.length; i++){
      if (projects[i].getId() != id) {
        temp.push(projects[i]);
      }
    }
    projects = temp;

    //store project data in localStorage
    _store();
  }

  function getProjects(){
    return projects;
  }

  function _store(){
    //store project data in local storage
    if(storage.isAvailable('localStorage')){ // test for local storage support
      localStorage.setItem("projects",JSON.stringify(projects));
    }
  }

  function _retrieve(){
    //retrieve project data from local storage and re-instantiate project objects
    if(storage.isAvailable('localStorage')){ // test for local storage support
      let projectData = JSON.parse(localStorage.getItem("projects"));
      if(projectData){
        projectData.forEach( (item) => {
          create(item.title, item.description, item.id);
        });
        //after projects have been reinstantiated, set the numInstances to the highest project id #
        //so new objects have distinct ids
        projectFactory.numInstances = _getMaxProjectId();
      }
    }
  }

  function _getMaxProjectId(){
    //return the highest project id #
    var temp = 0;
    projects.forEach( (project) => {
      if (project.getId() > temp){
        temp = project.getId();
      }
    });
    return temp;
  }

  function _createDefaut(){
    if (projects.length === 0){
      create("defaut","n/a");
    }
  }

  return { create, read, update, destroy, getProjects }
})(ProjectFactory, Storage);

export default ProjectModel;