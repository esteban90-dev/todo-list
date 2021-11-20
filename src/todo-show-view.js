const TodoShowView = (function(){
  const app = document.querySelector("#app");

  function render(todo){
    _clearChildren(app);
    _renderBackLink(todo.getProjectId());

    const pTitle = document.createElement('p');
    pTitle.innerHTML = "Title: " + todo.getTitle();

    const pDescription = document.createElement('p');
    pDescription.innerHTML = "Description: " + todo.getDescription();

    const pDueDate = document.createElement('p');

    if(todo.getDueDate()){
      pDueDate.innerHTML = "Due Date: " + todo.getDueDate();
    } else {
      pDueDate.innerHTML = "Due Date: n/a";
    }

    const pPriority = document.createElement('p');
    pPriority.innerHTML = "Priority: " + todo.getPriority();

    const pIsComplete = document.createElement('p');
    pIsComplete.innerHTML = "Completed: " + todo.getIsComplete();

    app.appendChild(pTitle);
    app.appendChild(pDescription);
    app.appendChild(pDueDate);
    app.appendChild(pPriority);
    app.appendChild(pIsComplete);
  }

  function _clearChildren(node){
    while(node.firstChild){
      node.removeChild(node.firstChild);
    }
  }

  function _renderBackLink(projectId){
    const back = document.createElement("a");
    back.setAttribute("href","#");
    back.innerHTML = "back to project";
    back.setAttribute("data-project-id",projectId);
    back.setAttribute("id","back");
    app.appendChild(back);
  }

  function handleClickBack(handler){
    document.querySelector("#back").addEventListener('click', handler);
  }

  return { render, handleClickBack };
})();

export default TodoShowView