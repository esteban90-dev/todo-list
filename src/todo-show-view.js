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

  return { render };
})();

export default TodoShowView