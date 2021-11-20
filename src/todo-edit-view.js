import clearChildren from "./clear-children.js";

const TodoEditView = (function(){
  const app = document.querySelector('#app');
  const clear = clearChildren;

  function render(todo){
    clear(app);
    _renderBackLink(todo.getProjectId())
    app.appendChild(_createTodoForm(todo));
  }

  function handleFormSubmit(handler){
    document.querySelector('form').addEventListener('submit',handler);
  }

  function _createTodoForm(todo){
    const form = document.createElement("form");
    form.setAttribute("data-todo-id",todo.getId());
    form.setAttribute("data-project-id",todo.getProjectId());

    const titleInputLabel = document.createElement("label");
    titleInputLabel.setAttribute("for","titleInput");
    titleInputLabel.innerHTML = "Title:";

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type","text");
    titleInput.setAttribute("name","title");
    titleInput.setAttribute("value",todo.getTitle());
    titleInput.setAttribute("id","titleInput");
    titleInput.setAttribute("required",true);

    const descriptionInputLabel = document.createElement("label");
    descriptionInputLabel.setAttribute("for","descriptionInput");
    descriptionInputLabel.innerHTML = "Description:";

    const descriptionInput = document.createElement("input");
    descriptionInput.setAttribute("type","text");
    descriptionInput.setAttribute("name","description");
    descriptionInput.setAttribute("value",todo.getDescription());
    descriptionInput.setAttribute("id","descriptionInput");
    descriptionInput.setAttribute("required",true);

    const dueDateInputLabel = document.createElement("label");
    dueDateInputLabel.setAttribute("for","dueDateInput");
    dueDateInputLabel.innerHTML = "Due Date:";

    const dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("type","date");
    dueDateInput.setAttribute("name","dueDate");
    dueDateInput.setAttribute("value",todo.getDueDate());
    dueDateInput.setAttribute("id","dueDateInput");

    const prioritySelectLabel = document.createElement("label");
    prioritySelectLabel.setAttribute("for","prioritySelect");
    prioritySelectLabel.innerHTML = "Priority:";

    const prioritySelect = document.createElement("select");
    prioritySelect.setAttribute("name","priority");
    prioritySelect.setAttribute("id","prioritySelect");

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
})(clearChildren);

export default TodoEditView;