const TodoShowView = (function(){
  const app = document.querySelector("#app");

  function render(todo){
    _clearChildren(app);
    const pTitle = document.createElement('p');
    pTitle.innerHTML = "Title: " + todo.getTitle();

    const pDescription = document.createElement('p');
    pDescription.innerHTML = "Description: " + todo.getDescription();

    const pDueDate = document.createElement('p');
    pDueDate.innerHTML = "Due Date: " + todo.getDueDate();

    const pPriority = document.createElement('p');
    pPriority.innerHTML = "Priority: " + todo.getPriority();

    const pIsComplete = document.createElement('p');
    pIsComplete.innerHTML = "Completed: " + todo.getIsComplete();

    //todo edit link
    let a2 = document.createElement('a');
    a2.setAttribute("data-todo-id",todo.getId());
    a2.setAttribute("href","#");
    a2.setAttribute("id","edit");
    a2.innerHTML = "edit";

    //todo delete link
    let a3 = document.createElement("a");
    a3.setAttribute("data-todo-id",todo.getId());
    a3.setAttribute("href","#");
    a3.setAttribute("id","delete");
    a3.innerHTML = "delete";

    app.appendChild(pTitle);
    app.appendChild(pDescription);
    app.appendChild(pDueDate);
    app.appendChild(pPriority);
    app.appendChild(pIsComplete);
    app.appendChild(a2);
    app.appendChild(a3);
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
      button.addEventListener('click', handler) 
    });
  }

  function _clearChildren(node){
    while(node.firstChild){
      node.removeChild(node.firstChild);
    }
  }

  return { render, handleClickEditTodo, handleClickDeleteTodo };
})();

export default TodoShowView