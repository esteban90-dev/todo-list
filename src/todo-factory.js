function TodoFactory(title, description, dueDate, priority, projectId){
  var title = title;
  var description = description;
  var dueDate = dueDate;
  var priority = priority;
  var projectId = projectId;
  var isComplete = false;

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

  return { getTitle, setTitle, getDescription, setDescription, getDueDate, setDueDate, getPriority, setPriority, getIsComplete, setComplete, setIncomplete, getProjectId };
}

export default TodoFactory;