function ProjectFactory(title, description){
  var title = title;
  var description = description;

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

  return { getTitle, getDescription, setTitle, setDescription }
}

export default ProjectFactory;