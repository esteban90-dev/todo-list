import clearChildren from "./clear-children.js";

const TodoEditView = (function(){
  const app = document.querySelector('#app');
  const clear = clearChildren;

  function render(todo){
    //clear app container
    clear(app);

    //display 'edit todo'
    app.appendChild(_createEditTodoHeading());
    
    //display new todo form
    app.appendChild(_createTodoForm(todo));

    //display cancel button
    app.appendChild(_createCancelButton(todo.getProjectId()));
  }

  function _createEditTodoHeading(){
    const h4 = document.createElement("h4");
    h4.innerHTML = "Edit Todo";
    h4.classList.add("text-center","fw-bold");
    return h4;
  }

  function _createTodoForm(todo){
    //create rows to contain elements
    const row1 = document.createElement("div");
    row1.classList.add("row");
    row1.classList.add("pb-0");

    const row2 = document.createElement("div");
    row2.classList.add("row");
    row2.classList.add("pt-0");

    const row3 = document.createElement("div");
    row3.classList.add("row");
    row3.classList.add("pb-0");

    const row4 = document.createElement("div");
    row4.classList.add("row");
    row4.classList.add("pt-0");

    const row5 = document.createElement("div");
    row5.classList.add("row");
    row5.classList.add("pb-0");

    const row6 = document.createElement("div");
    row6.classList.add("row");
    row6.classList.add("pt-0");

    const row7 = document.createElement("div");
    row7.classList.add("row");
    row7.classList.add("pb-0");

    const row8 = document.createElement("div");
    row8.classList.add("row");
    row8.classList.add("pt-0");

    const row9 = document.createElement("div");
    row9.classList.add("row","justify-center");

    const form = document.createElement("form");
    form.setAttribute("data-todo-id",todo.getId());
    form.setAttribute("data-project-id",todo.getProjectId());

    const titleInputLabel = document.createElement("label");
    titleInputLabel.setAttribute("for","titleInput");
    titleInputLabel.innerHTML = "Title:";
    row1.appendChild(titleInputLabel);

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type","text");
    titleInput.setAttribute("name","title");
    titleInput.setAttribute("value",todo.getTitle());
    titleInput.setAttribute("id","titleInput");
    titleInput.setAttribute("required",true);
    titleInput.classList.add("width-100","p-1","border","border-width-1");
    row2.appendChild(titleInput);

    const descriptionInputLabel = document.createElement("label");
    descriptionInputLabel.setAttribute("for","descriptionInput");
    descriptionInputLabel.innerHTML = "Description:";
    row3.appendChild(descriptionInputLabel);

    const descriptionInput = document.createElement("input");
    descriptionInput.setAttribute("type","text");
    descriptionInput.setAttribute("name","description");
    descriptionInput.setAttribute("value",todo.getDescription());
    descriptionInput.setAttribute("id","descriptionInput");
    descriptionInput.setAttribute("required",true);
    descriptionInput.classList.add("width-100","p-1","border","border-width-1");
    row4.appendChild(descriptionInput);

    const dueDateInputLabel = document.createElement("label");
    dueDateInputLabel.setAttribute("for","dueDateInput");
    dueDateInputLabel.innerHTML = "Due Date:";
    row5.appendChild(dueDateInputLabel);

    const dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("type","date");
    dueDateInput.setAttribute("name","dueDate");
    dueDateInput.setAttribute("value",todo.getDueDate());
    dueDateInput.setAttribute("id","dueDateInput");
    dueDateInput.classList.add("width-100","p-1","border","border-width-1");
    row6.appendChild(dueDateInput);

    const prioritySelectLabel = document.createElement("label");
    prioritySelectLabel.setAttribute("for","prioritySelect");
    prioritySelectLabel.innerHTML = "Priority:";
    row7.appendChild(prioritySelectLabel);

    const prioritySelect = document.createElement("select");
    prioritySelect.setAttribute("name","priority");
    prioritySelect.setAttribute("id","prioritySelect");
    prioritySelect.classList.add("width-100","bg-white","p-1","border","border-width-1");
    row8.appendChild(prioritySelect);

    const option1 = document.createElement("option");
    option1.setAttribute("value","low");
    if(todo.getPriority() === 'low'){
      option1.setAttribute("selected",true);
    }
    option1.innerHTML = "low";

    const option2 = document.createElement("option");
    option2.setAttribute("value","medium");
    if(todo.getPriority() === 'medium'){
      option2.setAttribute("selected",true);
    }
    option2.innerHTML = "medium";

    const option3 = document.createElement("option");
    option3.setAttribute("value","high");
    if(todo.getPriority() === 'high'){
      option3.setAttribute("selected",true);
    }
    option3.innerHTML = "high";

    prioritySelect.appendChild(option1);
    prioritySelect.appendChild(option2);
    prioritySelect.appendChild(option3);

    const submitButton = document.createElement("input");
    submitButton.setAttribute("type","submit");
    submitButton.setAttribute("value","Update Todo");
    submitButton.classList.add("width-4","bg-white","pr-4","pl-4","pt-2","pb-2","border","border-radius-5", "cursor-pointer", "hover-border","mb-4");
    row9.appendChild(submitButton);

    form.appendChild(row1);
    form.appendChild(row2);
    form.appendChild(row3);
    form.appendChild(row4);
    form.appendChild(row5);
    form.appendChild(row6);
    form.appendChild(row7);
    form.appendChild(row8);
    form.appendChild(row9);

    return form;
  }

  function _createCancelButton(projectId){
    const cancel = document.createElement("input");
    cancel.setAttribute("type","submit");
    cancel.setAttribute("value","Cancel");
    cancel.setAttribute("data-project-id",projectId);
    cancel.classList.add("width-4","bg-white","pr-4","pl-4","pt-2","pb-2","border","border-radius-5", "cursor-pointer", "hover-border");
    cancel.setAttribute("id","back");

    const row = document.createElement("div");
    row.classList.add("row", "justify-center");
    row.appendChild(cancel);

    return row;
  }

  function handleFormSubmit(handler){
    document.querySelector('form').addEventListener('submit',handler);
  }

  function handleClickBack(handler){
    document.querySelector("#back").addEventListener('click', handler);
  }

  return { render, handleFormSubmit, handleClickBack };
})(clearChildren);

export default TodoEditView;