import clearChildren from "./clear-children.js";

const ProjectEditView = (function(){
  const app = document.querySelector("#app");
  const clear = clearChildren;

  function render(project){
    //clear out the app area
    clear(app);

    //display 'edit project'
    app.appendChild(_createEditProjectHeading());

    //display the new project form
    app.appendChild(_createProjectForm(project));

    //display cancel button
    app.appendChild(_createCancelButton(project));
  }

  function _createProjectForm(project){
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
    row5.classList.add("row","justify-center");

    //create title field
    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for","titleInput");
    titleLabel.innerHTML = "Title:";
    row1.appendChild(titleLabel);

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type","text");
    titleInput.setAttribute("id","titleInput");
    titleInput.setAttribute("name","title");
    titleInput.setAttribute("required",true);
    titleInput.setAttribute("value",project.getTitle());
    titleInput.classList.add("width-100","p-1","border","border-width-1");
    row2.appendChild(titleInput);

    //create description field
    const descLabel = document.createElement("label");
    descLabel.setAttribute("for","descInput");
    descLabel.innerHTML = "Description:";
    row3.appendChild(descLabel);

    const descInput = document.createElement("input");
    descInput.setAttribute("type","text");
    descInput.setAttribute("id","descInput");
    descInput.setAttribute("name","description");
    descInput.setAttribute("required",true);
    descInput.setAttribute("value",project.getDescription());
    descInput.classList.add("width-100","p-1","border","border-width-1");
    row4.appendChild(descInput);

    //create form submission button
    const submit = document.createElement("input");
    submit.setAttribute("type","submit");
    submit.setAttribute("value","update project");
    submit.classList.add("width-4","bg-white","pr-4","pl-4","pt-2","pb-2","border","border-radius-5", "cursor-pointer", "hover-border","mb-4");
    row5.appendChild(submit);

    //create form element
    const form = document.createElement("form");
    form.setAttribute("action","");
    form.setAttribute("href","#");
    form.setAttribute("data-project-id",project.getId());
    
    //append fields and submit button to form
    form.appendChild(row1);
    form.appendChild(row2);
    form.appendChild(row3);
    form.appendChild(row4);
    form.appendChild(row5);

    return form;
  }

  function _createEditProjectHeading(){
    const h4 = document.createElement("h4");
    h4.innerHTML = "Edit Project";
    h4.classList.add("text-center","fw-bold");
    return h4;
  }

  function _createCancelButton(project){
    const cancel = document.createElement("input");
    cancel.setAttribute("type","submit");
    cancel.setAttribute("value","Cancel");
    cancel.classList.add("width-4","bg-white","pr-4","pl-4","pt-2","pb-2","border","border-radius-5", "cursor-pointer", "hover-border");
    cancel.setAttribute("id","back");
    cancel.setAttribute("data-project-id",project.getId());

    const row = document.createElement("div");
    row.classList.add("row", "justify-center");
    row.appendChild(cancel);

    return row;
  }

  function handleFormSubmit(handler){
    const form = document.querySelector("form");
    form.addEventListener('submit',handler);
  }

  function handleClickBack(handler){
    document.querySelector("#back").addEventListener('click', handler);
  }

  return { render, handleFormSubmit, handleClickBack }
})(clearChildren);

export default ProjectEditView;