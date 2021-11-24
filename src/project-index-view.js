import clearChildren from "./clear-children.js";

const ProjectIndexView = (function(){
  const app = document.querySelector("#app");
  const clear = clearChildren;

  function render(projects){
    //clear app element
    clear(app); 

    //display projects heading
    app.appendChild(_createProjectHeading());

    //display column headings
    app.appendChild(_createColumnHeadings());

    //display projects
    app.appendChild(_createProjectElements(projects));

    //display new project button
    app.appendChild(_createNewProjectButton());
  }

  function _createProjectHeading(){
    const h4 = document.createElement("h4");
    h4.innerHTML = "Projects";
    h4.classList.add("fw-bold","text-center");
    return h4;
  }

  function _createColumnHeadings(){
    const pTitle = document.createElement("p");
    pTitle.innerHTML = "Title";
    pTitle.classList.add("text-underline");

    const col1 = document.createElement("div");
    col1.classList.add("col-4");
    col1.appendChild(pTitle);

    const pDesc = document.createElement("p");
    pDesc.innerHTML = "Description";
    pDesc.classList.add("text-underline");

    const col2 = document.createElement("div");
    col2.classList.add("col-6");
    col2.appendChild(pDesc);

    const row = document.createElement("row");
    row.classList.add("row");
    row.appendChild(col1);
    row.appendChild(col2);

    return row;
  }

  function _createProjectElements(projects){
    const row = document.createElement("div");

    for(let i=0; i<projects.length; i++){
      //create title element
      const a1 = document.createElement("a");
      a1.setAttribute("data-project-id",projects[i].getId());
      a1.setAttribute("href","#")
      a1.innerHTML = projects[i].getTitle();
      a1.setAttribute("id","show");

      //add title element to column
      const col1 = document.createElement("div");
      col1.classList.add("col-4");
      col1.appendChild(a1);

      //create description element
      const p = document.createElement("p");
      p.innerHTML = projects[i].getDescription();

      //add desc element to column
      const col2 = document.createElement("div");
      col2.classList.add("col-6");
      col2.appendChild(p);

      //create project edit link
      const editI = document.createElement("i");
      editI.setAttribute("data-project-id",projects[i].getId());
      editI.setAttribute("id","edit");
      editI.classList.add("fas","fa-pencil-alt","cursor-pointer");

      //create project delete link
      const deleteI = document.createElement("i");
      deleteI.setAttribute("data-project-id",projects[i].getId());
      deleteI.setAttribute("id","delete");
      deleteI.classList.add("fas","fa-trash-alt","cursor-pointer");

      //add edit/delete links to column
      const col3 = document.createElement("div");
      col3.classList.add("col-2", "display-flex","justify-between");
      col3.appendChild(editI);
      col3.appendChild(deleteI);

      //add columns to row
      row.classList.add("row","pt-0","pb-0");
      row.appendChild(col1);
      row.appendChild(col2);
      row.appendChild(col3);
    }
    return row;
  }

  function _createNewProjectButton(){
    const button = document.createElement("input");
    button.setAttribute("type","button");
    button.setAttribute("value","New Project");
    button.setAttribute("id","new");
    button.classList.add("width-4","bg-white","mt-3","pr-4","pl-4","pt-2","pb-2","border","border-radius-5", "cursor-pointer", "hover-border");

    const row = document.createElement("div");
    row.classList.add("row", "justify-center");
    row.appendChild(button);

    return row;
  }

  function handleClickEditProject(handler){
    const editLinks = document.querySelectorAll("#edit");

    editLinks.forEach( (link) => {
      link.addEventListener('click',handler);
    })
  }

  function handleClickDeleteProject(handler){
    const deleteLinks = document.querySelectorAll("#delete");

    deleteLinks.forEach( (link) => {
      link.addEventListener('click',handler);
    })
  }

  function handleClickNew(handler){
    document.querySelector("#new").addEventListener('click',handler);
  }

  function handleClickShow(handler){
    const showLinks = document.querySelectorAll("#show");

    showLinks.forEach( (link) => {
      link.addEventListener('click',handler);
    })
  }

  return { render, handleClickNew, handleClickEditProject, handleClickDeleteProject, handleClickShow };
})(clearChildren);

export default ProjectIndexView;

