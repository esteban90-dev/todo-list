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
    //display title
    const title = document.createElement("h2");
    title.innerHTML = project.getTitle();

    //display description
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
      let a1 = document.createElement('a');
      a1.setAttribute("data-todo-id",todos[i].getId());
      a1.setAttribute("href","#");
      a1.setAttribute("id","show");
      a1.innerHTML = "show";
      a1.innerHTML = todos[i].getTitle();

      //add a strikethrough if the todo is completed
      if(todos[i].getIsComplete()){
        a1.classList.add("line-through");
      }

      //edit link
      let a2 = document.createElement('a');
      a2.setAttribute("data-todo-id",todos[i].getId());
      a2.setAttribute("href","#");
      a2.setAttribute("id","edit");
      a2.innerHTML = "edit";

      //delete link
      let a3 = document.createElement("a");
      a3.setAttribute("data-todo-id",todos[i].getId());
      a3.setAttribute("href","#");
      a3.setAttribute("id","delete");
      a3.innerHTML = "delete";      
      
      //append to app element
      app.appendChild(checkBox);
      app.appendChild(a1);
      app.appendChild(a2);
      app.appendChild(a3);
    }
  }

  function handleClickBack(handler){
    document.querySelector("#back").addEventListener('click', handler);
  }

  function handleCheck(handler){
    const checkBoxes = document.querySelectorAll("#complete");

    checkBoxes.forEach( (box) => { 
      box.addEventListener('click', handler); 
    });
  }

  function handleClickNew(handler){
    document.querySelector("#new").addEventListener('click', handler);
  }

  function handleClickShow(handler){
    const showLinks = document.querySelectorAll("#show");

    showLinks.forEach( (button) => { 
      button.addEventListener('click', handler);
    });
  }

  function handleClickEdit(handler){
    const editLinks = document.querySelectorAll("#edit");

    editLinks.forEach( (button) => { 
      button.addEventListener('click', handler) 
    });
  }

  function handleClickDelete(handler){
    const deleteLinks = document.querySelectorAll("#delete");

    deleteLinks.forEach( (button) => { 
      button.addEventListener('click', handler) 
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

  return { render, handleClickBack, handleClickNew, handleCheck, handleClickShow, handleClickEdit, handleClickDelete };
})();

export default TodoIndexView;