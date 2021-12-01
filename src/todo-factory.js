function TodoFactory(title, description, dueDate, priority, projectId, isComplete, id){
  var title = title;
  var description = description;
  var dueDate = dueDate;
  var priority = priority;
  var id = id;
  var projectId = projectId;
  var isComplete = isComplete;

  TodoFactory.numInstances = (TodoFactory.numInstances || 0) + 1;
  id ||= TodoFactory.numInstances;

  function getTitle(){
    return title;
  }

  function setTitle(newTitle){
    title = newTitle;
  }

  function getDescription(){
    return description;
  }

  function setDescription(newDescription){
    description = newDescription;
  }

  function getDueDate(){
    return dueDate;
  }

  function setDueDate(newDueDate){
    dueDate = newDueDate;
  }

  function getPriority(){
    return priority;
  }

  function setPriority(newPriority){
    priority = newPriority;
  }

  function getIsComplete(){
    return isComplete;
  }

  function setComplete(){
    isComplete = true;
  }

  function setIncomplete(){
    isComplete = false;
  }

  function getProjectId(){
    return projectId;
  }

  function getId(){
    return id;
  }

  function toJSON(){
    return {
      title: title,
      description: description,
      dueDate: dueDate,
      priority: priority,
      id: id,
      projectId: projectId,
      isComplete: isComplete
    };
  }

  return { getTitle, setTitle, getDescription, setDescription, getDueDate, setDueDate, getPriority, setPriority, getIsComplete, setComplete, setIncomplete, getProjectId, getId, toJSON };
}

export default TodoFactory;