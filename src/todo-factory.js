function TodoFactory(title, description, dueDate, priority){
  var title = title;
  var description = description;
  var dueDate = dueDate;
  var priority = priority;
  var isComplete = false;

  function getTitle(){
    return title;
  }

  return { getTitle };
}

export default TodoFactory;