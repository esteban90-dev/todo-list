const TodoIndexView = (function(){
  const app = document.querySelector("#app");

  function render(todos){
    _renderTodos(todos);
  
    //display 'new todo' button
    const createButton = document.createElement('input');
    createButton.setAttribute("type","button");
    createButton.setAttribute("value","new todo");
    app.appendChild(createButton);
  }

  function _renderTodos(todos){
    for(let i=0; i<todos.length; i++){
      let p = document.createElement('p');
      p.innerHTML = todos[i].getTitle();
      app.appendChild(p);
    }
  }

  return { render };
})();

export default TodoIndexView;