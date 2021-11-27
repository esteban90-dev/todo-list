import clearChildren from "./clear-children.js";

const TodoShowView = (function(){
  const app = document.querySelector("#app");
  const clear = clearChildren;

  function render(todo){
    //clear app container
    clear(app);

    //display 'back to projects' link
    app.appendChild(_createBackLink(todo.getProjectId()));

    const h4 = document.createElement('h4');
    h4.innerHTML = todo.getTitle();
    h4.classList.add("text-center","fw-bold","mb-3");

    const pDescription = document.createElement('p');
    pDescription.innerHTML = "Description: " + todo.getDescription();
    pDescription.classList.add("text-center");

    const pDueDate = document.createElement('p');
    pDueDate.classList.add("text-center");

    if(todo.getDueDate()){
      pDueDate.innerHTML = "Due Date: " + todo.getDueDate();
    } else {
      pDueDate.innerHTML = "Due Date: n/a";
    }

    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add("display-flex","justify-center","align-center");

    const p1 = document.createElement('p');
    p1.innerHTML = "Priority:";

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

    app.appendChild(h4);
    app.appendChild(pDescription);
    app.appendChild(pDueDate);
    app.appendChild(priorityDiv);
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

  function handleClickBack(handler){
    const back = document.querySelector("#back");
    back.addEventListener('click', handler);
  }

  return { render, handleClickBack };
})(clearChildren);

export default TodoShowView