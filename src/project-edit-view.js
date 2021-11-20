const ProjectEditView = (function(){
  const app = document.querySelector("#app");

  function render(project){
    //clear out the app area
    _clearChildren(app);

    //display 'back to projects' lnk
    _renderBackLink();

    //display the new project form
    app.appendChild(_createProjectForm(project));
  }

  function _clearChildren(node){
    while(node.firstChild){
      node.removeChild(node.firstChild);
    }
  }

  function _renderBackLink(){
    const back = document.createElement("a");
    back.setAttribute("href","#");
    back.innerHTML = "back to projects";
    back.setAttribute("id","back");
    app.appendChild(back);
  }

  function _createProjectForm(project){
    //create title field
    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for","titleInput");
    titleLabel.innerHTML = "Title:";

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type","text");
    titleInput.setAttribute("id","titleInput");
    titleInput.setAttribute("name","title");
    titleInput.setAttribute("value",project.getTitle());

    //create description field
    const descLabel = document.createElement("label");
    descLabel.setAttribute("for","descInput");
    descLabel.innerHTML = "Description:";

    const descInput = document.createElement("input");
    descInput.setAttribute("type","text");
    descInput.setAttribute("id","descInput");
    descInput.setAttribute("name","description");
    descInput.setAttribute("value",project.getDescription());

    //create form submission button
    const submit = document.createElement("input");
    submit.setAttribute("type","submit");
    submit.setAttribute("value","update project");

    //create form element
    const form = document.createElement("form");
    form.setAttribute("action","");
    form.setAttribute("href","#");
    form.setAttribute("data-project-id",project.getId());
    
    //append fields and submit button to form
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descLabel);
    form.appendChild(descInput);
    form.appendChild(submit);

    return form;
  }

  function handleFormSubmit(handler){
    const form = document.querySelector("form");
    form.addEventListener('submit',handler);
  }

  function handleClickBack(handler){
    document.querySelector("#back").addEventListener('click', handler);
  }

  return { render, handleFormSubmit, handleClickBack }
})();

export default ProjectEditView;