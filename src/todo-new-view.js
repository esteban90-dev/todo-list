const TodoNewView = (function(){
  const app = document.querySelector("#app");

  function render(projectId){
    _clearChildren(app);
    _renderBackLink(projectId);
    app.appendChild(_createTodoForm(projectId));
  }

  function handleFormSubmit(handler){
    document.querySelector('form').addEventListener('submit',handler);
  }

  function _clearChildren(node){
    while(node.firstChild){
      node.removeChild(node.firstChild);
    }
  }

  function _createTodoForm(projectId){
    const form = document.createElement("form");
    form.setAttribute("data-project-id",projectId);

    const titleInputLabel = document.createElement("label");
    titleInputLabel.setAttribute("for","titleInput");
    titleInputLabel.innerHTML = "Title:";

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type","text");
    titleInput.setAttribute("name","title");
    titleInput.setAttribute("id","titleInput");
    titleInput.setAttribute("required",true);

    const descriptionInputLabel = document.createElement("label");
    descriptionInputLabel.setAttribute("for","descriptionInput");
    descriptionInputLabel.innerHTML = "Description:";

    const descriptionInput = document.createElement("input");
    descriptionInput.setAttribute("type","text");
    descriptionInput.setAttribute("name","description");
    descriptionInput.setAttribute("id","descriptionInput");
    descriptionInput.setAttribute("required",true);

    const dueDateInputLabel = document.createElement("label");
    dueDateInputLabel.setAttribute("for","dueDateInput");
    dueDateInputLabel.innerHTML = "Due Date:";

    const dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("type","date");
    dueDateInput.setAttribute("name","dueDate");
    dueDateInput.setAttribute("id","dueDateInput");

    const prioritySelectLabel = document.createElement("label");
    prioritySelectLabel.setAttribute("for","prioritySelect");
    prioritySelectLabel.innerHTML = "Priority:";

    const prioritySelect = document.createElement("select");
    prioritySelect.setAttribute("name","priority");
    prioritySelect.setAttribute("id","prioritySelect");

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

    form.appendChild(titleInputLabel);
    form.appendChild(titleInput);
    form.appendChild(descriptionInputLabel);
    form.appendChild(descriptionInput);
    form.appendChild(dueDateInputLabel);
    form.appendChild(dueDateInput);
    form.appendChild(prioritySelectLabel);
    form.appendChild(prioritySelect);
    form.appendChild(submitButton);

    return form;
  }

  function _renderBackLink(projectId){
    const back = document.createElement("a");
    back.setAttribute("href","#");
    back.innerHTML = "back to project";
    back.setAttribute("data-project-id",projectId);
    back.setAttribute("id","back");
    app.appendChild(back);
  }

  function handleClickBack(handler){
    document.querySelector("#back").addEventListener('click', handler);
  }

  return { render, handleFormSubmit, handleClickBack };
})();

export default TodoNewView;