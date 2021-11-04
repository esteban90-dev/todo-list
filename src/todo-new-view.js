const TodoNewView = (function(){
  const app = document.querySelector("#app");
  const form = _createForm();

  function render(){
    _clearChildren(app);
    app.appendChild(form);
  }

  function handleFormSubmit(handler){
    form.addEventListener('submit',handler);
  }

  function _clearChildren(node){
    while(node.firstChild){
      node.removeChild(node.firstChild);
    }
  }

  function _createForm(){
    const form = document.createElement("form");

    const titleInputLabel = document.createElement("label");
    titleInputLabel.setAttribute("id","titleInputLabel");
    titleInputLabel.innerHTML = "Title:";

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type","text");
    titleInput.setAttribute("name","title");
    titleInput.setAttribute("id","titleInputLabel");

    const descriptionInputLabel = document.createElement("label");
    descriptionInputLabel.setAttribute("id","descriptionInputLabel");
    descriptionInputLabel.innerHTML = "Description:";

    const descriptionInput = document.createElement("input");
    descriptionInput.setAttribute("type","text");
    descriptionInput.setAttribute("name","description");
    descriptionInput.setAttribute("id","descriptionInputLabel");

    const dueDateInputLabel = document.createElement("label");
    dueDateInputLabel.setAttribute("id","dueDateInputLabel");
    dueDateInputLabel.innerHTML = "Due Date:";

    const dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("type","date");
    dueDateInput.setAttribute("name","dueDate");
    dueDateInput.setAttribute("id","dueDateInputLabel");

    const priorityInputLabel = document.createElement("label");
    priorityInputLabel.setAttribute("id","priorityInputLabel");
    priorityInputLabel.innerHTML = "Priority:";

    const priorityInput = document.createElement("input");
    priorityInput.setAttribute("type","text");
    priorityInput.setAttribute("name","priority");
    priorityInput.setAttribute("id","priorityInputLabel");

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

  return { render, handleFormSubmit };
})();

export default TodoNewView;