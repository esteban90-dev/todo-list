import TodoModel from './todo-model.js';
import TodoIndexView from './todo-index-view.js';
import TodoNewView from './todo-new-view.js';
import TodoShowView from './todo-show-view.js';
import TodoEditView from './todo-edit-view.js';

const TodoController = (function(){
  const todoModel = TodoModel;
  const todoIndexView = TodoIndexView;
  const todoNewView = TodoNewView;
  const todoShowView = TodoShowView;
  const todoEditView = TodoEditView;

  function index(){
    //render todos
    todoIndexView.render(todoModel.getTodos());

    //bind new button event to the 'new' method
    todoIndexView.handleClickNew(neW);

    //if there are any todos on the index view, bind their 'show' and 'edit' button events to the 'show' method
    if (todoModel.getTodos()){
      todoIndexView.handleClickShow(show);
      todoIndexView.handleClickEdit(edit);
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

  function edit(event){
    //render the edit page for the given todo
    todoEditView.render(TodoModel.read(event.target.getAttribute("id")),event.target.getAttribute("id"));

    //bind form submission on the edit view to the 'update' method
    todoEditView.handleFormSubmit(update);
  }

  function update(event){
    //prevent page refresh after form submission
    event.preventDefault();

    //gather submitted form data
    const formData = new FormData(event.target);
    const title = formData.get('title');
    const description = formData.get('description');
    const dueDate = formData.get('dueDate');
    const priority = formData.get('priority');
    const id = event.target.getAttribute("id");

    //update the existing todo
    TodoModel.update(id, title, description, dueDate, priority);

    //render the index page
    index();
  }

  return { index };
})(TodoModel,TodoIndexView,TodoNewView, TodoShowView, TodoEditView);

export default TodoController;