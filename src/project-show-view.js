import clearChildren from "./clear-children.js";

const TodoIndexView = (function(){
  const app = document.querySelector("#app");
  const clear = clearChildren;

  function render(project, todos){
    clear(app);

    //display 'back to projects' link
    app.appendChild(_createBackLink());

    //display project title
    app.appendChild(_createProjectTitleHeading(project));

    //display project description
    app.appendChild(_createProjectDescHeading(project));

    //display todos
    app.appendChild(_createTodos(todos));

    //diplay new todo button
    app.appendChild(_createNewTodoButton(project));
  }

  function _createProjectTitleHeading(project){
    const h4 = document.createElement("h4");
    h4.innerHTML = "project: " + project.getTitle();
    h4.classList.add("text-center","fw-bold","mt-3");
    return h4;
  }

  function _createProjectDescHeading(project){
    const p = document.createElement("p");
    p.innerHTML = "description: " + project.getDescription();
    p.classList.add("text-center","mb-3");
    return p;
  }

  function _createTodos(todos){
    //create div to add rows to
    const div = document.createElement("div");

    //display the todos
    for(let i=0; i<todos.length; i++){
      //create row to contain todo in 
      const row = document.createElement("div");
      row.classList.add("row");

      //create todo complete checkbox
      let checkBox = document.createElement("input");
      checkBox.setAttribute("type","checkbox");
      checkBox.setAttribute("id","complete");
      checkBox.setAttribute("data-todo-id",todos[i].getId());
      checkBox.setAttribute("data-project-id",todos[i].getProjectId());

      //set the checkbox checked if the todo is completed
      if(todos[i].getIsComplete()){
        checkBox.setAttribute("checked",true);
      }

      //add checkbox to column and add column to row
      const col1 = document.createElement("div");
      col1.classList.add("col-1","display-flex","justify-center","align-center");
      col1.appendChild(checkBox);
      row.appendChild(col1);

      //create todo title (contains show link), add to column, then add to row
      let a1 = document.createElement('a');
      a1.setAttribute("data-todo-id",todos[i].getId());
      a1.setAttribute("href","#");
      a1.setAttribute("id","show");
      a1.innerHTML = todos[i].getTitle();

      //add a strikethrough if the todo is completed
      if(todos[i].getIsComplete()){
        a1.classList.add("line-through");
      }

      //add todo title to column
      const col2 = document.createElement("div");
      col2.classList.add("col-9");
      col2.appendChild(a1);
      
      //create todo due date and add to same column as todo title, then add both to row
      let p2 = document.createElement('p');
      p2.innerHTML = todos[i].getDueDate();
      p2.classList.add("text-gray-600");
      col2.appendChild(p2);
      row.appendChild(col2);

      //create todo edit/delete links, add to column, then add to row
      const editI = document.createElement("i");
      editI.setAttribute("data-todo-id",todos[i].getId());
      editI.setAttribute("id","edit");
      editI.classList.add("fas","fa-pencil-alt","cursor-pointer");

      const deleteI = document.createElement("i");
      deleteI.setAttribute("data-todo-id",todos[i].getId());
      deleteI.setAttribute("data-project-id",todos[i].getProjectId());
      deleteI.setAttribute("id","delete");
      deleteI.classList.add("fas","fa-trash-alt","cursor-pointer");

      const col3 = document.createElement("div");
      col3.classList.add("col-2","display-flex","justify-between","align-center");
      col3.appendChild(editI);
      col3.appendChild(deleteI);
      row.appendChild(col3);

      //add row to div
      div.appendChild(row);
    }
    return div;
  }

  function _createNewTodoButton(project){
    const button = document.createElement('input');
    button.setAttribute("type","button");
    button.setAttribute("value","new todo");
    button.setAttribute("id","new");
    button.setAttribute("data-project-id",project.getId());
    button.classList.add("width-4","bg-white","mt-3","pr-4","pl-4","pt-2","pb-2","border","border-radius-5", "cursor-pointer", "hover-border");
    
    const row = document.createElement("div");
    row.classList.add("row", "justify-center");
    row.appendChild(button);

    return row;
  }

  function _createBackLink(){
    const i = document.createElement("i");
    i.classList.add("fas","fa-arrow-left","mr-2");

    const p = document.createElement("p");
    p.innerHTML = "back to projects";

    const a = document.createElement('a');
    a.setAttribute("href","#");
    a.setAttribute("id","back");
    a.classList.add("display-flex","align-center","link-no-underline");
    a.appendChild(i);
    a.appendChild(p);

    const row = document.createElement("div");
    row.classList.add("row");
    row.appendChild(a);

    return row;
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
      button.addEventListener('click', handler); 
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

  return { render, handleClickBack, handleClickEditTodo, handleClickDeleteTodo, handleClickNewTodo, handleCheckTodo, handleClickShowTodo };
})(clearChildren);

export default TodoIndexView;