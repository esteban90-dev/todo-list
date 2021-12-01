function ProjectFactory(title, description, id){
  var title = title;
  var description = description;
  var id = id;

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

  function toJSON(){
    return {
      title: title,
      description: description,
      id: id
    };
  }

  return { getTitle, getDescription, setTitle, setDescription, getId, toJSON }
}

export default ProjectFactory;