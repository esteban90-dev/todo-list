import clearChildren from "./clear-children.js";

const TodoShowView = (function(){
  const app = document.querySelector("#app");
  const clear = clearChildren;

  function render(todo){
    //clear app container
    clear(app);

    //display 'back to projects' link
    app.appendChild(_createBackLink(todo.getProjectId()));

    //display 'todo' heading
    app.appendChild(_createTodoHeading(todo.getTitle()));

    //create todo description heading
    app.appendChild(_createHeading("Description"));

    //create todo description element
    app.appendChild(_createElement(todo.getDescription()));

    //create todo due date heading
    app.appendChild(_createHeading("Due Date"));

    //create todo due date element
    app.appendChild(_createDueDateElement(todo.getDueDate()));

    //create todo priority heading
    app.appendChild(_createHeading("Priority"));

    //create todo priority element
    app.appendChild(_createPriorityElement(todo.getPriority()));

    //create todo edit/delete button element
    app.appendChild(_createTodoEditDelete(todo));
  }

  function _createTodoHeading(title){
    const row = document.createElement("div");
    row.classList.add("row");

    const col = document.createElement("div");
    col.classList.add("col-12");

    const h4 = document.createElement('h4');
    h4.innerHTML = "Todo: " + title;
    h4.classList.add("text-center","fw-bold");

    col.appendChild(h4);
    row.appendChild(col);

    return row;
  }

  function _createHeading(text){
    const row = document.createElement("div");
    row.classList.add("row","pb-0");

    const col = document.createElement("div");
    col.classList.add("col-12");

    const p = document.createElement('p');
    p.innerHTML = text;
    p.classList.add("text-center","text-underline");

    col.appendChild(p);
    row.appendChild(col);

    return row;
  }

  function _createElement(text){
    const row = document.createElement("div");
    row.classList.add("row");

    const col = document.createElement("div");
    col.classList.add("col-12");

    const p = document.createElement('p');
    p.innerHTML = text;
    p.classList.add("text-center","mb-3");

    col.appendChild(p);
    row.appendChild(col);

    return row;
  }

  function _createDueDateElement(text){
    const row = document.createElement("div");
    row.classList.add("row");

    const col = document.createElement("div");
    col.classList.add("col-12");

    const p = document.createElement('p');
    p.classList.add("text-center","mb-3");

    if(text.length === 0){
      p.innerHTML = "n/a";
    } else {
      p.innerHTML = text;
    }

    col.appendChild(p);
    row.appendChild(col);

    return row;
  }

  function _createPriorityElement(text){
    const row = document.createElement("div");
    row.classList.add("row");

    const col = document.createElement("div");
    col.classList.add("col-12");

    const p = document.createElement('p');
    p.classList.add("text-center","mb-3");
    p.innerHTML = text;

    if(text === 'medium'){
      p.classList.add("text-orange");
    } else if (text === 'high'){
      p.classList.add("text-red");
    }

    col.appendChild(p);
    row.appendChild(col);

    return row;
  }

  function _createTodoEditDelete(todo){
    const row = document.createElement("div");
    row.classList.add("row");

    const col = document.createElement("div");
    col.classList.add("col-12","display-flex","justify-center");

    const editI = document.createElement("i");
    editI.setAttribute("data-todo-id",todo.getId());
    editI.setAttribute("id","edit");
    editI.classList.add("fas","fa-pencil-alt","cursor-pointer","mr-1");

    const deleteI = document.createElement("i");
    deleteI.setAttribute("data-todo-id",todo.getId());
    deleteI.setAttribute("data-project-id",todo.getProjectId());
    deleteI.setAttribute("id","delete");
    deleteI.classList.add("fas","fa-trash-alt","cursor-pointer","ml-1");

    col.appendChild(editI);
    col.appendChild(deleteI);
    row.appendChild(col);

    return row;
  }

  function _createBackLink(projectId){
    const i = document.createElement("i");
    i.classList.add("fas","fa-arrow-left","mr-2");

    const p = document.createElement("p");
    p.innerHTML = "back to project";

    const a = document.createElement('a');
    a.setAttribute("href","#");
    a.setAttribute("id","back");
    a.setAttribute("data-project-id",projectId);
    a.classList.add("display-flex","align-center","link-no-underline");
    a.appendChild(i);
    a.appendChild(p);

    const row = document.createElement("div");
    row.classList.add("row");
    row.appendChild(a);

    return row;
  }

  function handleClickEditTodo(handler){
    const editLinks = document.querySelectorAll("#edit");

    editLinks.forEach( (button) => { 
      button.addEventListener('click', handler) 
    });
  }

  function handleClickDeleteTodo(handler){
    const deleteLinks = document.querySelectorAll("#delete");

    deleteLinks.forEach( (button) => { 
      button.addEventListener('click', handler); 
    });
  }

  function handleClickBack(handler){
    const back = document.querySelector("#back");
    back.addEventListener('click', handler);
  }

  return { render, handleClickBack, handleClickEditTodo, handleClickDeleteTodo, };
})(clearChildren);

export default TodoShowView