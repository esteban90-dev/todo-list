const TodoIndexView = (function(){
  const app = document.querySelector("#app");
  const newButton = _createNewButton();

  function render(todos){
    _clearChildren(app);
    _renderTodos(todos);
    app.appendChild(newButton);
  }

  function handleClickNew(handler){
    newButton.addEventListener('click', handler);
  }

  function _renderTodos(todos){
    for(let i=0; i<todos.length; i++){
      let p = document.createElement('p');
      p.innerHTML = todos[i].getTitle();
      app.appendChild(p);
    }
  }

  function _createNewButton(){
    const newButton = document.createElement('input');
    newButton.setAttribute("type","button");
    newButton.setAttribute("value","new todo");
    newButton.setAttribute("id","new");
    return newButton;
  }
  
  function _clearChildren(node){
    while(node.firstChild){
      node.removeChild(node.firstChild);
    }
  }

  return { render, handleClickNew };
})();

export default TodoIndexView;