function ProjectFactory(title, description){
  var title = title;
  var description = description;

  function getTitle(){
    return title;
  }

  function getDescription(){
    return description;
  }

  return { getTitle, getDescription }
}

export default ProjectFactory;