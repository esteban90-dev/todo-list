import TodoModel from './todo-model.js';
import TodoNewView from './todo-new-view.js';
import TodoShowView from './todo-show-view.js';
import TodoEditView from './todo-edit-view.js';
import ControllerInterface from './controller-interface.js';

const TodoController = (function(){
  const todoModel = TodoModel;
  const todoNewView = TodoNewView;
  const todoShowView = TodoShowView;
  const todoEditView = TodoEditView
  const controllerInterface = ControllerInterface;

  function initialize(){
    //bind controller methods to controller interface
    controllerInterface.setTodoNew(neW);
    controllerInterface.setTodoComplete(complete);
    controllerInterface.setTodoShow(show);
    controllerInterface.setTodoEdit(edit);
    controllerInterface.setTodoDestroy(destroy);
  }

  function neW(event){
    const projectId = parseInt(event.target.getAttribute("data-project-id"));

    //render the new todo page
    todoNewView.render(projectId);

    //bind buttons to controller methods 
    _bindNewButtons();
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
    const projectId = parseInt(event.target.getAttribute("data-project-id"));

    //create new todo
    TodoModel.create(title, description, dueDate, priority, projectId);

    //render the project show view
    controllerInterface.getProjectShow()(event);
  }

  function show(event){
    //render the show page for the given todo
    const todo = todoModel.read(parseInt(event.target.getAttribute("data-todo-id")));

    todoShowView.render(todo);

    //bind buttons to controller methods 
    _bindShowButtons(todo.getProjectId());
  }

  function edit(event){
    //render the edit page for the given todo
    const todo = TodoModel.read(parseInt(event.target.getAttribute("data-todo-id")))
    todoEditView.render(todo);

    //bind buttons to controller methods 
    _bindEditButtons();
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
    const todoId = parseInt(event.target.getAttribute("data-todo-id"));

    //update the existing todo
    TodoModel.update(todoId, title, description, dueDate, priority);

    //render the todo show view
    show(event);
  }

  function destroy(event){
    const todoId = parseInt(event.target.getAttribute("data-todo-id"));

    //prompt user for confirmation
    const response = confirm("Are you sure?");

    //remove the given todo from the model if the user confirms removal
    if(response){
      TodoModel.destroy(todoId);
    }

    //render the project show view
    controllerInterface.getProjectShow()(event);
  }

  function complete(event){
    const todoId = parseInt(event.target.getAttribute("data-todo-id"));
    const todo = TodoModel.read(todoId);

    //if todo is complete, then mark incomplete.  if todo is incomplete, then mark complete
    if(todo.getIsComplete()){
      todo.setIncomplete();
    } else { 
      todo.setComplete();
    }

    //render the project show view
    controllerInterface.getProjectShow()(event);
  }

  function _bindNewButtons(){
    //bind buttons to appropriate controller methods
    todoNewView.handleFormSubmit(create);
    todoNewView.handleClickBack(controllerInterface.getProjectShow());
  }

  function _bindShowButtons(){
    //bind buttons to appropriate controller methods
    todoShowView.handleClickBack(controllerInterface.getProjectShow());
    todoShowView.handleClickEditTodo(edit);
    todoShowView.handleClickDeleteTodo(destroy);
  }

  function _bindEditButtons(){
    //bind buttons to appropriate controller methods
    todoEditView.handleFormSubmit(update);
    todoEditView.handleClickBack(show);
  }

  return { initialize, neW, complete, show, edit, destroy };
})(TodoModel, TodoNewView, TodoShowView, TodoEditView, ControllerInterface);

export default TodoController;