const TodoIndexView = (function(){
  const app = document.querySelector("#app");

  function render(todos){
    _clearChildren(app);
    _renderTodos(todos);
    app.appendChild(_createNewButton());
  }

  function _renderTodos(todos){
    for(let i=0; i<todos.length; i++){
      let p = document.createElement('p');
      p.innerHTML = todos[i].getTitle();

      let a = document.createElement('a');
      a.setAttribute("id",i);
      a.setAttribute("href","#");
      a.innerHTML = "show";
      
      app.appendChild(p);
      app.appendChild(a);
    }
  }

  function handleClickNew(handler){
    document.querySelector("#new").addEventListener('click', handler);
  }

  function handleClickShow(handler){
    const showButtons = document.querySelectorAll('a');
    showButtons.forEach( (button) => { button.addEventListener('click', handler) } );
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

  return { render, handleClickNew, handleClickShow };
})();

export default TodoIndexView;