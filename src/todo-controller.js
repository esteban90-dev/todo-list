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
    //render todos
    todoIndexView.render(todoModel.getTodos());

    //bind new button event to the 'new' method
    todoIndexView.handleClickNew(neW);

    //if there are any todos on the index view, bind their 'show' events to the 'show' method
    if (todoModel.getTodos()){
      todoIndexView.handleClickShow(show);
    }
  }

  function neW(){
    //render the new todo page
    todoNewView.render();

    //bind form submission on the new view to the 'create' method
    todoNewView.handleFormSubmit(create);
  }

  function create(event){
    //prevent page refresh after form submission
    event.preventDefault();

    //gather submitted form data
    const formData = new FormData(event.target);
    const title = formData.get('title');
    const description = formData.get('description');
    const dueDate = formData.get('dueDate');
    const priority = formData.get('priority');

    //create new todo
    TodoModel.create(title, description, dueDate, priority);

    //render the index page
    index();
  }

  function show(event){
    //render the show page for the given todo
    todoShowView.render(todoModel.read(event.target.getAttribute("id")));
  }

  return { index };
})(TodoModel,TodoIndexView,TodoNewView, TodoShowView);

export default TodoController;