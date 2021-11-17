const ProjectEditView = (function(){
  const app = document.querySelector("#app");

  function render(project, projectId){
    //clear out the app area
    _clearChildren(app);

    //display the new project form
    app.appendChild(_createProjectForm(project, projectId));
  }

  function _clearChildren(node){
    while(node.firstChild){
      node.removeChild(node.firstChild);
    }
  }

  function _createProjectForm(project, projectId){
    //create title field
    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("id","titleInput");
    titleLabel.innerHTML = "Title:";

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type","text");
    titleInput.setAttribute("id","titleInput");
    titleInput.setAttribute("name","title");
    titleInput.setAttribute("value",project.getTitle());

    //create description field
    const descLabel = document.createElement("label");
    descLabel.setAttribute("id","descInput");
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
    form.setAttribute("data-project-id",projectId);
    
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

  return { render, handleFormSubmit }
})();

export default ProjectEditView;