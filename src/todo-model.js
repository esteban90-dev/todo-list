import TodoFactory from './todo-factory.js';
import Storage from './storage.js';

const TodoModel = (function(){
  var todos = [];
  var todoFactory = TodoFactory;
  const storage = Storage;

  //retrieve any todos from localStorage
  _retrieve();

  function create(title, description, dueDate, priority, projectId, isComplete, id = null){
    var todo = todoFactory(title, description, dueDate, priority, projectId, isComplete, id);
    todos.push(todo);

    //update localStorage
    _store();
  }

  function read(id){
    var result; 

    for(let i=0; i<todos.length; i++){
      if(todos[i].getId() === id){
        result = todos[i];
      }
    }
    
    return result;
  }

  function update(id, title, description, dueDate, priority){
    const todo = read(id);
    todo.setTitle(title);
    todo.setDescription(description);
    todo.setDueDate(dueDate);
    todo.setPriority(priority);

    //update localStorage
    _store();
  }

  function destroy(id){
    var temp = [];
    for(let i=0; i<todos.length; i++){
      if (todos[i].getId() != id) {
        temp.push(todos[i]);
      }
    }
    todos = temp;

    //update localStorage
    _store();
  }

  function destroyByProject(projectId){
    //destroy todos with the given projectId
    var temp = [];
    for(let i=0; i<todos.length; i++){
      if (todos[i].getProjectId() != projectId) {
        temp.push(todos[i]);
      }
    }
    todos = temp;

    //update localStorage
    _store();
  }

  function getTodos(projectId){
    //return todos with given projectId
    var temp = []

    for(let i=0; i<todos.length; i++){
      if (todos[i].getProjectId() === projectId){
        temp.push(todos[i]);
      }
    }

    return temp;
  }

  function setComplete(todoId){
    const todo = read(todoId);
    
    todo.setComplete();

    //update localStorage
    _store();
  }

  function setIncomplete(todoId){
    const todo = read(todoId);
    
    todo.setIncomplete();

    //update localStorage
    _store();
  }

  function _store(){
    if(storage.isAvailable('localStorage')){
      let todosJSON = JSON.stringify(todos);
      localStorage.setItem("todos",todosJSON);
    }
  }

  function _retrieve(){
    //retrieve todo data from local storage and re-instantiate todo objects
    if(storage.isAvailable('localStorage')){
      let todosJSON = localStorage.getItem("todos");
      let todos = JSON.parse(todosJSON);
      if(todos){
        todos.forEach( (todo) => {
          create(todo.title, todo.description, todo.dueDate, todo.priority, todo.projectId, todo.isComplete, todo.id);
        });
      }
    }
    //after todos have been reinstantiated, set the numInstances to the highest todo id #
    //so new objects have distinct ids
    todoFactory.numInstances = _getMaxTodoId();
  }

  function _getMaxTodoId(){
    //return the highest todo id #
    var temp = 0;
    todos.forEach( (todo) => {
      if (todo.getId() > temp){
        temp = todo.getId();
      }
    });
    return temp;
  }

  return { create, read, update, destroy, destroyByProject, getTodos, setComplete, setIncomplete }
})(TodoFactory, Storage);

export default TodoModel;
