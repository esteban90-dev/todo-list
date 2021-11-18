import TodoFactory from './todo-factory.js';

const TodoModel = (function(){
  var todos = [];
  var todoFactory = TodoFactory;

  function create(title, description, dueDate, priority, projectId){
    var todo = todoFactory(title, description, dueDate, priority, projectId);
    todos.push(todo);
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
    var todo = read(id);
    todo.setTitle(title);
    todo.setDescription(description);
    todo.setDueDate(dueDate);
    todo.setPriority(priority);
  }

  function destroy(id){
    var temp = [];
    for(let i=0; i<todos.length; i++){
      if (todos[i].getId() != id) {
        temp.push(todos[i]);
      }
    }
    todos = temp;
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

  return { create, read, update, destroy, destroyByProject, getTodos }
})(TodoFactory);

export default TodoModel;
