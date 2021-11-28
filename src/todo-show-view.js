import clearChildren from "./clear-children.js";

const TodoShowView = (function(){
  const app = document.querySelector("#app");
  const clear = clearChildren;

  function render(todo){
    //clear app container
    clear(app);

    //display 'back to projects' link
    app.appendChild(_createBackLink(todo.getProjectId()));

    //create row for todo title
    const row1 = document.createElement("div");
    row1.classList.add("row");

    const col1 = document.createElement("div");
    col1.classList.add("col-3");

    const col2 = document.createElement("div");
    col2.classList.add("col-9");

    const h4_1 = document.createElement('h4');
    h4_1.innerHTML = "todo:";
    h4_1.classList.add("text-right","fw-bold","mb-3");

    const h4_2 = document.createElement('h4');
    h4_2.innerHTML = todo.getTitle();
    h4_2.classList.add("text-left","fw-bold","mb-3");

    col1.appendChild(h4_1);
    col2.appendChild(h4_2);
    row1.appendChild(col1);
    row1.appendChild(col2);

    //create row for todo description
    const row2 = document.createElement("div");
    row2.classList.add("row");

    const col3 = document.createElement("div");
    col3.classList.add("col-3");

    const col4 = document.createElement("div");
    col4.classList.add("col-9");

    const pDescription_1 = document.createElement('p');
    pDescription_1.innerHTML = "description:";
    pDescription_1.classList.add("text-right");

    const pDescription_2 = document.createElement('p');
    pDescription_2.innerHTML = todo.getDescription();
    pDescription_2.classList.add("text-left");

    col3.appendChild(pDescription_1);
    col4.appendChild(pDescription_2);
    row2.appendChild(col3);
    row2.appendChild(col4);

    //create row for todo due date
    const row3 = document.createElement("div");
    row3.classList.add("row");

    const col5 = document.createElement("div");
    col5.classList.add("col-3");

    const col6 = document.createElement("div");
    col6.classList.add("col-9");

    const pDueDate_1 = document.createElement('p');
    pDueDate_1.classList.add("text-right");
    pDueDate_1.innerHTML = "due date:";

    const pDueDate_2 = document.createElement('p');
    pDueDate_2.classList.add("text-left");

    if(todo.getDueDate()){
      pDueDate_2.innerHTML = todo.getDueDate();
    } else {
      pDueDate_2.innerHTML = "n/a";
    }

    col5.appendChild(pDueDate_1);
    col6.appendChild(pDueDate_2);
    row3.appendChild(col5);
    row3.appendChild(col6);

    //create row for todo priority
    const row4 = document.createElement("div");
    row4.classList.add("row");

    const col7 = document.createElement("div");
    col7.classList.add("col-3");

    const col8 = document.createElement("div");
    col8.classList.add("col-9");

    const pPriority_1 = document.createElement('p');
    pPriority_1.classList.add("text-right");
    pPriority_1.innerHTML = "priority:";

    const pPriority_2 = document.createElement('p');
    pPriority_2.classList.add("text-left");
    pPriority_2.innerHTML = todo.getPriority();

    if(todo.getPriority() === 'medium'){
      pPriority_2.classList.add("text-orange");
    } else if (todo.getPriority() === 'high'){
      pPriority_2.classList.add("text-red");
    }

    col7.appendChild(pPriority_1);
    col8.appendChild(pPriority_2);
    row4.appendChild(col7);
    row4.appendChild(col8);

    //create row for todo edit/delete buttons
    const row5 = document.createElement("div");
    row5.classList.add("row");

    const col9 = document.createElement("div");
    col9.classList.add("col-12","display-flex","justify-center");

    const editI = document.createElement("i");
    editI.setAttribute("data-todo-id",todo.getId());
    editI.setAttribute("id","edit");
    editI.classList.add("fas","fa-pencil-alt","cursor-pointer","mr-1");

    const deleteI = document.createElement("i");
    deleteI.setAttribute("data-todo-id",todo.getId());
    deleteI.setAttribute("data-project-id",todo.getProjectId());
    deleteI.setAttribute("id","delete");
    deleteI.classList.add("fas","fa-trash-alt","cursor-pointer","ml-1");

    col9.appendChild(editI);
    col9.appendChild(deleteI);
    row5.appendChild(col9);
    
    //append rows to app container
    app.appendChild(row1);
    app.appendChild(row2);
    app.appendChild(row3);
    app.appendChild(row4);
    app.appendChild(row5);
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