import TodoModel from './todo-model.js';
import ProjectModel from './project-model.js';
import TodoNewView from './todo-new-view.js';
import TodoShowView from './todo-show-view.js';
import TodoEditView from './todo-edit-view.js';
import ProjectShowView from './project-show-view.js';

const TodoController = (function(){
  const todoModel = TodoModel;
  const projectModel = ProjectModel;
  const todoNewView = TodoNewView;
  const todoShowView = TodoShowView;
  const todoEditView = TodoEditView;
  const projectShowView = ProjectShowView;

  function neW(event){
    const projectId = event.target.getAttribute("data-project-id");

    //render the new todo page
    todoNewView.render(projectId);

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
    const projectId = event.target.getAttribute("data-project-id");

    //create new todo
    TodoModel.create(title, description, dueDate, priority, projectId);

    //render the project show view
    _renderProjectShow(projectId);
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
    const todoId = event.target.getAttribute("id");

    //update the existing todo
    TodoModel.update(todoId, title, description, dueDate, priority);

    //render the project show view
    const todo = todoModel.read(todoId);
    const projectId = todo.getProjectId();
    _renderProjectShow(projectId);
  }

  function destroy(event){
    const todoId = event.target.getAttribute("id");
    const todo = todoModel.read(todoId);
    const projectId = todo.getProjectId();

    //prompt user for confirmation
    const response = confirm("Are you sure?");

    //remove the given todo from the model if the user confirms removal
    if(response){
      TodoModel.destroy(todoId);
    }

    //render the project show view
    _renderProjectShow(projectId);
  }

  function complete(event){
    const todoId = event.target.getAttribute("id");
    const todo = TodoModel.read(todoId);
    const projectId = todo.getProjectId();

    //if todo is complete, then mark incomplete.  if todo is incomplete, then mark complete
    if(todo.getIsComplete()){
      todo.setIncomplete();
    } else { 
      todo.setComplete();
    }

    //render the project show view
    _renderProjectShow(projectId);
  }

  function _renderProjectShow(projectId){
    const project = projectModel.read(projectId);
    const todos = todoModel.getTodos(projectId);

    //render the project show view
    projectShowView.render(project, projectId, todos);

    //bind new button event to the 'new' method
    projectShowView.handleClickNew(neW);

    //for each todo on the show view, bind the 'show', 'edit', and 'delete' button events to the appropriate method
    projectShowView.handleCheck(complete);
    projectShowView.handleClickShow(show);
    projectShowView.handleClickEdit(edit);
    projectShowView.handleClickDelete(destroy);
  }

  return { neW, complete, show, edit, destroy };
})(TodoModel, ProjectModel, ProjectShowView, TodoNewView, TodoShowView, TodoEditView);

export default TodoController;