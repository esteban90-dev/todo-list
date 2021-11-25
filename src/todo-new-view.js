import clearChildren from "./clear-children.js";

const TodoNewView = (function(){
  const app = document.querySelector("#app");
  const clear = clearChildren;

  function render(projectId){
    //clear app container
    clear(app);

    //display 'new todo'
    app.appendChild(_createNewTodoHeading());
    
    //display new todo form
    app.appendChild(_createTodoForm(projectId));

    //display cancel button
    app.appendChild(_createCancelButton(projectId));
  }

  function handleFormSubmit(handler){
    document.querySelector('form').addEventListener('submit',handler);
  }

  function _createTodoForm(projectId){
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
    form.setAttribute("data-project-id",projectId);

    const titleInputLabel = document.createElement("label");
    titleInputLabel.setAttribute("for","titleInput");
    titleInputLabel.innerHTML = "Title:";
    row1.appendChild(titleInputLabel);

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type","text");
    titleInput.setAttribute("name","title");
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
    option1.innerHTML = "low";

    const option2 = document.createElement("option");
    option2.setAttribute("value","medium");
    option2.innerHTML = "medium";

    const option3 = document.createElement("option");
    option3.setAttribute("value","high");
    option3.innerHTML = "high";

    prioritySelect.appendChild(option1);
    prioritySelect.appendChild(option2);
    prioritySelect.appendChild(option3);

    const submitButton = document.createElement("input");
    submitButton.setAttribute("type","submit");
    submitButton.setAttribute("value","Create Todo");
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

  function _createNewTodoHeading(){
    const h4 = document.createElement("h4");
    h4.innerHTML = "New Todo";
    h4.classList.add("text-center","fw-bold");
    return h4;
  }

  function handleClickBack(handler){
    document.querySelector("#back").addEventListener('click', handler);
  }

  return { render, handleFormSubmit, handleClickBack };
})(clearChildren);

export default TodoNewView;