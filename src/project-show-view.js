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

    //create project edit link
    let a1 = document.createElement("a");
    a1.setAttribute("data-project-id",project.getId());
    a1.setAttribute("href","#");
    a1.setAttribute("id","edit");
    a1.innerHTML = "edit";

    //create project delete link
    let a2 = document.createElement("a");
    a2.setAttribute("data-project-id",project.getId());
    a2.setAttribute("href","#");
    a2.setAttribute("id","delete");
    a2.innerHTML = "delete";
    
    //append to app element
    app.appendChild(title);
    app.appendChild(description);
    app.appendChild(a1);
    app.appendChild(a2);
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
      
      //todo append to app element
      app.appendChild(checkBox);
      app.appendChild(a1);
    }
  }

  function handleClickBack(handler){
    document.querySelector("#back").addEventListener('click', handler);
  }

  function handleClickEditProject(handler){
    const editLinks = document.querySelectorAll("#edit");

    editLinks.forEach( (link) => {
      link.addEventListener('click',handler);
    })
  }

  function handleClickDeleteProject(handler){
    const deleteLinks = document.querySelectorAll("#delete");

    deleteLinks.forEach( (link) => {
      link.addEventListener('click',handler);
    })
  }

  function handleCheckTodo(handler){
    const checkBoxes = document.querySelectorAll("#complete");

    checkBoxes.forEach( (box) => { 
      box.addEventListener('click', handler); 
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

  return { render, handleClickBack, handleClickEditProject, handleClickDeleteProject, handleClickNewTodo, handleCheckTodo, handleClickShowTodo };
})();

export default TodoIndexView;