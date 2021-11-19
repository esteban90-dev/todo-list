const ProjectNewView = (function(){
  const app = document.querySelector("#app");

  function render(){
    //clear out the app area
    _clearChildren(app);

    //display the new project form
    app.appendChild(_createProjectForm());
  }

  function _clearChildren(node){
    while(node.firstChild){
      node.removeChild(node.firstChild);
    }
  }

  function _createProjectForm(){
    //create title field
    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("id","titleInput");
    titleLabel.innerHTML = "Title:";

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type","text");
    titleInput.setAttribute("id","titleInput");
    titleInput.setAttribute("name","title");

    //create description field
    const descLabel = document.createElement("label");
    descLabel.setAttribute("id","descInput");
    descLabel.innerHTML = "Description:";

    const descInput = document.createElement("input");
    descInput.setAttribute("type","text");
    descInput.setAttribute("id","descInput");
    descInput.setAttribute("name","description");

    //create form submission button
    const submit = document.createElement("input");
    submit.setAttribute("type","submit");
    submit.setAttribute("value","create project");

    //create form element
    const form = document.createElement("form");
    form.setAttribute("action","");
    form.setAttribute("href","#");
    
    //append fields and submit button to form
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descLabel);
    form.appendChild(descInput);
    form.appendChild(submit);

    return form;
  }

  function handleFormSubmit(handler){
    document.querySelector("form").addEventListener('submit',handler);
  }

  return { render, handleFormSubmit };
})();

export default ProjectNewView;