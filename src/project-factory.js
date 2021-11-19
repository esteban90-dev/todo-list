function ProjectFactory(title, description){
  var title = title;
  var description = description;
  var id;

  ProjectFactory.numInstances = (ProjectFactory.numInstances || 0) + 1;
  id ||= ProjectFactory.numInstances;

  function getTitle(){
    return title;
  }

  function getDescription(){
    return description;
  }

  function setTitle(newTitle){
    title = newTitle;
  }

  function setDescription(newDescription){
    description = newDescription;
  }

  function getId(){
    return id;
  }

  return { getTitle, getDescription, setTitle, setDescription, getId }
}

export default ProjectFactory;