import TodoModel from './todo-model.js';
import TodoIndexView from './todo-index-view.js';
import TodoNewView from './todo-new-view.js';
import TodoShowView from './todo-show-view.js';

const TodoController = (function(){
  const todoModel = TodoModel;
  const todoIndexView = TodoIndexView;
  const todoNewView = TodoNewView;
  const todoShowView = TodoShowView;

  function index(){
    todoIndexView.render(todoModel.getTodos());

    //bind new button event to the 'new' action
    todoIndexView.handleClickNew(neW);

    //if there are any todos on the index view, bind their 'show' events to the 'show' action
    if (todoModel.getTodos()){
      todoIndexView.handleClickShow(show);
    }
  }

  function neW(){
    todoNewView.render();

    //bind form submission on the new view to the 'create' action
    todoNewView.handleFormSubmit(create);
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

  function show(event){
    todoShowView.render(todoModel.read(event.target.getAttribute("id")));
  }

  return { index };
})(TodoModel,TodoIndexView,TodoNewView, TodoShowView);

export default TodoController;