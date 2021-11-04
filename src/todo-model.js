import TodoFactory from './todo-factory.js';

const TodoModel = (function(){
  var todos = [];
  var todoFactory = TodoFactory;

  function create(title, description, dueDate, priority){
    var todo = todoFactory(title, description, dueDate, priority);
    todos.push(todo);
  }

  function read(id){
    return todos[id];
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
      if (i != id) {
        temp.push(todos[i]);
      }
    }
    todos = temp;
  }

  function getTodos(){
    return todos;
  }

  return { create, read, update, destroy, getTodos }
})(TodoFactory);

export default TodoModel;
