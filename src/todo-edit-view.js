const TodoEditView = (function(){
  const app = document.querySelector('#app');

  function render(todo, id){
    _clearChildren(app);
    app.appendChild(_createTodoForm(todo, id));
  }

  function handleFormSubmit(handler){
    document.querySelector('form').addEventListener('submit',handler);
  }

  function _clearChildren(node){
    while(node.firstChild){
      node.removeChild(node.firstChild);
    }
  }

  function _createTodoForm(todo, id){
    const form = document.createElement("form");
    form.setAttribute("id",id);

    const titleInputLabel = document.createElement("label");
    titleInputLabel.setAttribute("id","titleInput");
    titleInputLabel.innerHTML = "Title:";

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type","text");
    titleInput.setAttribute("name","title");
    titleInput.setAttribute("value",todo.getTitle());
    titleInput.setAttribute("id","titleInput");

    const descriptionInputLabel = document.createElement("label");
    descriptionInputLabel.setAttribute("id","descriptionInput");
    descriptionInputLabel.innerHTML = "Description:";

    const descriptionInput = document.createElement("input");
    descriptionInput.setAttribute("type","text");
    descriptionInput.setAttribute("name","description");
    descriptionInput.setAttribute("value",todo.getDescription());
    descriptionInput.setAttribute("id","descriptionInput");

    const dueDateInputLabel = document.createElement("label");
    dueDateInputLabel.setAttribute("id","dueDateInput");
    dueDateInputLabel.innerHTML = "Due Date:";

    const dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("type","date");
    dueDateInput.setAttribute("name","dueDate");
    dueDateInput.setAttribute("value",todo.getDueDate());
    dueDateInput.setAttribute("id","dueDateInput");

    const priorityInputLabel = document.createElement("label");
    priorityInputLabel.setAttribute("id","priorityInput");
    priorityInputLabel.innerHTML = "Priority:";

    const priorityInput = document.createElement("input");
    priorityInput.setAttribute("type","text");
    priorityInput.setAttribute("name","priority");
    priorityInput.setAttribute("value",todo.getPriority());
    priorityInput.setAttribute("id","priorityInput");

    const submitButton = document.createElement("input");
    submitButton.setAttribute("type","submit");
    submitButton.setAttribute("value","Update Todo");

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

export default TodoEditView;