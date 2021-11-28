import clearChildren from "./clear-children.js";

const TodoShowView = (function(){
  const app = document.querySelector("#app");
  const clear = clearChildren;

  function render(todo){
    //clear app container
    clear(app);

    //display 'back to projects' link
    app.appendChild(_createBackLink(todo.getProjectId()));

    //display todo heading (title, description, edit/delete buttons)
    const row = document.createElement("div");
    row.classList.add("row","justify-end");

    const col1 = document.createElement("div");
    col1.classList.add("col-8");

    const col2 = document.createElement("div");
    col2.classList.add("col-2","display-flex","justify-between","align-center");

    const h4 = document.createElement('h4');
    h4.innerHTML = "todo: " + todo.getTitle();
    h4.classList.add("text-center","fw-bold","mb-3");

    const pDescription = document.createElement('p');
    pDescription.innerHTML = "description: " + todo.getDescription();
    pDescription.classList.add("text-center");

    col1.appendChild(h4);
    col1.appendChild(pDescription);

    const editI = document.createElement("i");
    editI.setAttribute("data-todo-id",todo.getId());
    editI.setAttribute("id","edit");
    editI.classList.add("fas","fa-pencil-alt","cursor-pointer");

    const deleteI = document.createElement("i");
    deleteI.setAttribute("data-todo-id",todo.getId());
    deleteI.setAttribute("data-project-id",todo.getProjectId());
    deleteI.setAttribute("id","delete");
    deleteI.classList.add("fas","fa-trash-alt","cursor-pointer");

    col2.appendChild(editI);
    col2.appendChild(deleteI);
    
    //display due date

    const pDueDate = document.createElement('p');
    pDueDate.classList.add("text-center");

    if(todo.getDueDate()){
      pDueDate.innerHTML = "due date: " + todo.getDueDate();
    } else {
      pDueDate.innerHTML = "due date: n/a";
    }

    col1.appendChild(pDueDate);

    //display priority

    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add("display-flex","justify-center","align-center");

    const p1 = document.createElement('p');
    p1.innerHTML = "priority:";

    const p2= document.createElement('p');
    p2.innerHTML = todo.getPriority();
    p2.classList.add("ml-1");

    if(todo.getPriority() === 'medium'){
      p2.classList.add("text-orange");
    } else if (todo.getPriority() === 'high'){
      p2.classList.add("text-red");
    }

    priorityDiv.appendChild(p1);
    priorityDiv.appendChild(p2);

    col1.appendChild(priorityDiv);

    row.appendChild(col1);
    row.appendChild(col2);

    app.appendChild(row);
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