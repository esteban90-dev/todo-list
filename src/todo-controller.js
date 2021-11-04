import TodoModel from './todo-model.js';
import TodoIndexView from './todo-index-view.js';

const TodoController = (function(){
  const todoModel = TodoModel;
  const todoIndexView = TodoIndexView;

  function index(){
    todoIndexView.render(todoModel.getTodos());
  }

  return { index };
})(TodoModel,TodoIndexView);

export default TodoController;