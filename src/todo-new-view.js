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
    titleInputLabel.setAttribute("id","titleInput");
    titleInputLabel.innerHTML = "Title:";

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type","text");
    titleInput.setAttribute("name","title");
    titleInput.setAttribute("id","titleInput");

    const descriptionInputLabel = document.createElement("label");
    descriptionInputLabel.setAttribute("id","descriptionInput");
    descriptionInputLabel.innerHTML = "Description:";

    const descriptionInput = document.createElement("input");
    descriptionInput.setAttribute("type","text");
    descriptionInput.setAttribute("name","description");
    descriptionInput.setAttribute("id","descriptionInput");

    const dueDateInputLabel = document.createElement("label");
    dueDateInputLabel.setAttribute("id","dueDateInput");
    dueDateInputLabel.innerHTML = "Due Date:";

    const dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("type","date");
    dueDateInput.setAttribute("name","dueDate");
    dueDateInput.setAttribute("id","dueDateInput");

    const priorityInputLabel = document.createElement("label");
    priorityInputLabel.setAttribute("id","priorityInput");
    priorityInputLabel.innerHTML = "Priority:";

    const priorityInput = document.createElement("input");
    priorityInput.setAttribute("type","text");
    priorityInput.setAttribute("name","priority");
    priorityInput.setAttribute("id","priorityInput");

    const submitButton = document.createElement("input");
    submitButton.setAttribute("type","submit");
    submitButton.setAttribute("value","Create Todo");

    form.appendChild(titleInputLabel);
    form.appendChild(titleInput);
    form.appendChild(descriptionInputLabel);
    form.appendChild(descriptionInput);
    form.appendChild(dueDateInputLabel);
    form.appendChild(dueDateInput);
    form.appendChild(priorityInputLabel);
    form.appendChild(priorityInput);
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