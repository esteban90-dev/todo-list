const TodoIndexView = (function(){
  const app = document.querySelector("#app");

  function render(todos){
    _clearChildren(app);
    _renderTodos(todos);
    app.appendChild(_createNewButton());
  }

  function _renderTodos(todos){
    //display the todos
    for(let i=0; i<todos.length; i++){
      //todo complete checkbox
      let checkBox = document.createElement("input");
      checkBox.setAttribute("type","checkbox");
      checkBox.setAttribute("id",i);

      //todo title
      let p = document.createElement('p');
      p.innerHTML = todos[i].getTitle();

      //add a strikethrough if the todo is completed
      if(todos[i].getIsComplete()){
        p.classList.add("line-through");
      }

      //show link
      let a1 = document.createElement('a');
      a1.setAttribute("id",i);
      a1.setAttribute("href","#");
      a1.innerHTML = "show";

      //edit link
      let a2 = document.createElement('a');
      a2.setAttribute("id",i);
      a2.setAttribute("href","#");
      a2.innerHTML = "edit";

      //delete link
      let a3 = document.createElement("a");
      a3.setAttribute("id",i);
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

  return { render, handleClickNew, handleCheck, handleClickShow, handleClickEdit, handleClickDelete };
})();

export default TodoIndexView;