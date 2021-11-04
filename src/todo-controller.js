import TodoModel from './todo-model.js';
import TodoIndexView from './todo-index-view.js';
import TodoNewView from './todo-new-view.js';

const TodoController = (function(){
  const todoModel = TodoModel;
  const todoIndexView = TodoIndexView;
  const todoNewView = TodoNewView;

  bindHandlers();

  function index(){
    todoIndexView.render(todoModel.getTodos());
  }

  function neW(){
    todoNewView.render();
  }

  function create(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get('title');
    const description = formData.get('description');
    const dueDate = formData.get('dueDate');
    const priority = formData.get('priority');

    TodoModel.create(title, description, dueDate, priority);
    index();
  }

  function bindHandlers(){
    todoIndexView.handleClickNew(neW);
    todoNewView.handleFormSubmit(create);
  }

  return { index };
})(TodoModel,TodoIndexView,TodoNewView);

export default TodoController;