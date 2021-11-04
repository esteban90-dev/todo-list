function TodoFactory(title, description, dueDate, priority){
  var title = title;
  var description = description;
  var dueDate = dueDate;
  var priority = priority;
  var isComplete = false;

  function getTitle(){
    return title;
  }

  function getDescription(){
    return description;
  }

  function getDueDate(){
    return dueDate;
  }

  function getPriority(){
    return priority;
  }

  function getIsComplete(){
    return isComplete;
  }

  return { getTitle, getDescription, getDueDate, getPriority, getIsComplete };
}

export default TodoFactory;