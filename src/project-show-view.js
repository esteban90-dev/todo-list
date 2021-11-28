import clearChildren from "./clear-children.js";

const TodoIndexView = (function(){
  const app = document.querySelector("#app");
  const clear = clearChildren;

  function render(project, todos){
    clear(app);

    //display 'back to projects' link
    app.appendChild(_createBackLink());

    //display project
    app.appendChild(_createProject(project));

    //display todos
    app.appendChild(_createTodos(todos));

    //diplay new todo button
    app.appendChild(_createNewTodoButton(project));
  }

  function _createProject(project){
    //create row for project title
    const row1 = document.createElement("div");
    row1.classList.add("row","pb-0");

    const col1 = document.createElement("div");
    col1.classList.add("col-12");

    const h4 = document.createElement("h4");
    h4.innerHTML = "Project: " + project.getTitle();
    h4.classList.add("text-center","fw-bold","mt-3");

    col1.appendChild(h4);
    row1.appendChild(col1);

    //create row for project description heading
    const row2 = document.createElement("div");
    row2.classList.add("row","pb-0");

    const col2 = document.createElement("div");
    col2.classList.add("col-12");

    const p1 = document.createElement("p");
    p1.innerHTML = "Description";
    p1.classList.add("text-center","text-underline");

    col2.appendChild(p1);
    row2.appendChild(col2);

    //create row for project description
    const row3 = document.createElement("div");
    row3.classList.add("row","pt-0");

    const col3 = document.createElement("div");
    col3.classList.add("col-12");

    const p2 = document.createElement("p");
    p2.innerHTML = project.getDescription();
    p2.classList.add("text-center");

    col3.appendChild(p2);
    row3.appendChild(col3);

    //create row for project edit/delete link
    const row4 = document.createElement("div");
    row4.classList.add("row","pt-0");

    const col4 = document.createElement("div");
    col4.classList.add("col-12","display-flex","justify-center");

    const editI = document.createElement("i");
    editI.setAttribute("data-project-id",project.getId());
    editI.setAttribute("id","edit");
    editI.classList.add("fas","fa-pencil-alt","cursor-pointer","mr-1");

    const deleteI = document.createElement("i");
    deleteI.setAttribute("data-project-id",project.getId());
    deleteI.setAttribute("id","delete");
    deleteI.classList.add("fas","fa-trash-alt","cursor-pointer","ml-1");

    col4.appendChild(editI);
    col4.appendChild(deleteI);
    row4.appendChild(col4);
    
    //add rows to div
    const div = document.createElement("div");
    div.appendChild(row1);
    div.appendChild(row2);
    div.appendChild(row3);
    div.appendChild(row4);

    return div;
  }

  function _createTodos(todos){
    //create div to add rows to
    const div = document.createElement("div");
    div.classList.add("mt-4","mb-4");

    //display todos heading
    const pHeading = document.createElement("p");
    pHeading.innerHTML = "Todos";
    pHeading.classList.add("text-center","text-underline");
    div.appendChild(pHeading);

    if(todos.length === 0){
      //display 'no todos yet''
      const p = document.createElement('p');
      p.classList.add("text-center","mt-3","text-gray-500");
      p.innerHTML = "no todos yet";
      div.appendChild(p);
    } else {

      //display the todos
      for(let i=0; i<todos.length; i++){
        //create row to contain todo in 
        const row = document.createElement("div");
        row.classList.add("row","justify-center");

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

        //add row to div
        div.appendChild(row);
      }
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

  function handleClickBack(handler){
    document.querySelector("#back").addEventListener('click', handler);
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

  return { render, handleClickBack, handleClickEditProject, handleClickDeleteProject, handleClickNewTodo, handleCheckTodo, handleClickShowTodo };
})(clearChildren);

export default TodoIndexView;