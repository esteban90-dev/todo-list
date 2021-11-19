const TodoIndexView = (function(){
  const app = document.querySelector("#app");

  function render(project, todos){
    _clearChildren(app);
    _renderBackLink();
    _renderProject(project);
    _renderTodos(todos);
    app.appendChild(_createNewButton(project));
  }

  function _renderBackLink(){
    const back = document.createElement("a");
    back.setAttribute("href","#");
    back.innerHTML = "back to projects";
    back.setAttribute("id","back");
    app.appendChild(back);
  }

  function _renderProject(project){
    //display project title
    const title = document.createElement("h2");
    title.innerHTML = project.getTitle();

    //display project description
    const description = document.createElement("h3");
    description.innerHTML = project.getDescription();
    
    //append to app element
    app.appendChild(title);
    app.appendChild(description);
  }

  function _renderTodos(todos){
    //display the todos
    for(let i=0; i<todos.length; i++){
      //todo complete checkbox
      let checkBox = document.createElement("input");
      checkBox.setAttribute("type","checkbox");
      checkBox.setAttribute("id","complete");
      checkBox.setAttribute("data-todo-id",todos[i].getId());

      //set the checkbox checked if the todo is completed
      if(todos[i].getIsComplete()){
        checkBox.setAttribute("checked",true);
      }

      //todo title
      let p = document.createElement('p');
      p.innerHTML = todos[i].getTitle();

      //add a strikethrough if the todo is completed
      if(todos[i].getIsComplete()){
        p.classList.add("line-through");
      }  
      
      //todo show link
      let a1 = document.createElement('a');
      a1.setAttribute("data-todo-id",todos[i].getId());
      a1.setAttribute("href","#");
      a1.setAttribute("id","show");
      a1.innerHTML = "details";

      //todo edit link
      let a2 = document.createElement('a');
      a2.setAttribute("data-todo-id",todos[i].getId());
      a2.setAttribute("href","#");
      a2.setAttribute("id","edit");
      a2.innerHTML = "edit";

      //todo delete link
      let a3 = document.createElement("a");
      a3.setAttribute("data-todo-id",todos[i].getId());
      a3.setAttribute("href","#");
      a3.setAttribute("id","delete");
      a3.innerHTML = "delete";
      
      //append to app element
      app.appendChild(checkBox);
      app.appendChild(p);
      app.appendChild(a1);
      app.appendChild(a2);
      app.appendChild(a3);
    }
  }

  function handleClickBack(handler){
    document.querySelector("#back").addEventListener('click', handler);
  }

  function handleCheckTodo(handler){
    const checkBoxes = document.querySelectorAll("#complete");

    checkBoxes.forEach( (box) => { 
      box.addEventListener('click', handler); 
    });
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

  function handleClickNewTodo(handler){
    document.querySelector("#new").addEventListener('click', handler);
  }

  function handleClickShowTodo(handler){
    const showLinks = document.querySelectorAll("#show");

    showLinks.forEach( (button) => { 
      button.addEventListener('click', handler);
    });
  }

  function _createNewButton(project){
    const newButton = document.createElement('input');
    newButton.setAttribute("type","button");
    newButton.setAttribute("value","new todo");
    newButton.setAttribute("id","new");
    newButton.setAttribute("data-project-id",project.getId())
    return newButton;
  }
  
  function _clearChildren(node){
    while(node.firstChild){
      node.removeChild(node.firstChild);
    }
  }

  return { render, handleClickBack, handleClickEditTodo, handleClickDeleteTodo, handleClickNewTodo, handleCheckTodo, handleClickShowTodo };
})();

export default TodoIndexView;