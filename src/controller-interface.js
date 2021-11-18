//this object allows the Project Controller and Todo Controller to communicate with each other

const ControllerInterface = (function(){
  var projectIndex;
  var todoNew;
  var todoComplete;
  var todoShow;
  var todoEdit;
  var todoDestroy;

  function setProjectIndex(handler){
    projectIndex = handler;
  }

  function getProjectIndex(){
    return projectIndex;
  }

  function setTodoNew(handler){
    todoNew = handler;
  }

  function getTodoNew(handler){
    return todoNew;
  }

  function setTodoComplete(handler){
    todoComplete = handler;
  }

  function getTodoComplete(){
    return todoComplete;
  }

  function setTodoShow(handler){
    todoShow = handler;
  }

  function getTodoShow(){
    return todoShow;
  }

  function setTodoEdit(handler){
    todoEdit = handler;
  }

  function getTodoEdit(){
    return todoEdit;
  }

  function setTodoDestroy(handler){
    todoDestroy = handler;
  }

  function getTodoDestroy(){
    return todoDestroy;
  }

  return { setProjectIndex, getProjectIndex, setTodoNew, getTodoNew, setTodoComplete, getTodoComplete, setTodoShow, getTodoShow, setTodoEdit, getTodoEdit, setTodoDestroy, getTodoDestroy }
})();

export default ControllerInterface;