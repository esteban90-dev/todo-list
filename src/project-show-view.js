const TodoIndexView = (function(){
  const app = document.querySelector("#app");

  function render(project, projectId, todos){
    _clearChildren(app);
    _renderBackLink();
    _renderProject(project);
    _renderTodos(todos);
    app.appendChild(_createNewButton(projectId));
  }

  function _renderBackLink(){
    const back = document.createElement("a");
    back.setAttribute("href","#");
    back.innerHTML = "back to projects";
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

      //show link
      let a1 = document.createElement('a');
      a1.setAttribute("data-todo-id",todos[i].getId());
      a1.setAttribute("href","#");
      a1.innerHTML = "show";

      //edit link
      let a2 = document.createElement('a');
      a2.setAttribute("data-todo-id",todos[i].getId());
      a2.setAttribute("href","#");
      a2.innerHTML = "edit";

      //delete link
      let a3 = document.createElement("a");
      a3.setAttribute("data-todo-id",todos[i].getId());
      a3.setAttribute("href","#");
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
    const links = document.querySelectorAll('a');

    links.forEach( (button) => { 
      if (button.innerHTML === 'back to projects'){
        button.addEventListener('click', handler) 
      }
    });
  }

  function handleCheck(handler){
    const checkBoxes = document.querySelectorAll('input');

    checkBoxes.forEach( (box) => { 
      if (box.getAttribute("type") === 'checkbox'){
        box.addEventListener('click', handler) 
      }
    });
  }

  function handleClickNew(handler){
    document.querySelector("#new").addEventListener('click', handler);
  }

  function handleClickShow(handler){
    const links = document.querySelectorAll('a');

    links.forEach( (button) => { 
      if (button.innerHTML === 'show'){
        button.addEventListener('click', handler) 
      }
    });
  }

  function handleClickEdit(handler){
    const links = document.querySelectorAll('a');

    links.forEach( (button) => { 
      if (button.innerHTML === 'edit'){
        button.addEventListener('click', handler) 
      }
    });
  }

  function handleClickDelete(handler){
    const links = document.querySelectorAll('a');

    links.forEach( (button) => { 
      if (button.innerHTML === 'delete'){
        button.addEventListener('click', handler) 
      }
    });
  }

  function _createNewButton(projectId){
    const newButton = document.createElement('input');
    newButton.setAttribute("type","button");
    newButton.setAttribute("value","new todo");
    newButton.setAttribute("id","new");
    newButton.setAttribute("data-project-id",projectId)
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