import clearChildren from "./clear-children.js";

const ProjectIndexView = (function(){
  const app = document.querySelector("#app");
  const clear = clearChildren;

  function render(projects){
    //clear app element
    clear(app); 

    //display projects heading
    app.appendChild(_createProjectHeading());

    //display column headings if projects exist
    if(projects.length > 0){
      app.appendChild(_createColumnHeadings());
    }
    
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
    col1.classList.add("col-6","text-center");
    col1.appendChild(pTitle);

    const pDesc = document.createElement("p");
    pDesc.innerHTML = "Description";
    pDesc.classList.add("text-underline");

    const col2 = document.createElement("div");
    col2.classList.add("col-6","text-center");
    col2.appendChild(pDesc);

    const row = document.createElement("row");
    row.classList.add("row");
    row.appendChild(col1);
    row.appendChild(col2);

    return row;
  }

  function _createProjectElements(projects){
    const row = document.createElement("div");

    if(projects.length === 0){
      //display 'no new projects'
      const p = document.createElement('p');
      p.classList.add("text-center","mt-3");
      p.innerHTML = "no projects yet";
      app.appendChild(p);
    } else {
      for(let i=0; i<projects.length; i++){
        //create title element
        const a1 = document.createElement("a");
        a1.setAttribute("data-project-id",projects[i].getId());
        a1.setAttribute("href","#")
        a1.innerHTML = projects[i].getTitle();
        a1.setAttribute("id","show");

        //add title element to column
        const col1 = document.createElement("div");
        col1.classList.add("col-6","text-center");
        col1.appendChild(a1);

        //create description element
        const p = document.createElement("p");
        p.innerHTML = projects[i].getDescription();

        //add desc element to column
        const col2 = document.createElement("div");
        col2.classList.add("col-6","text-center");
        col2.appendChild(p);

        //add columns to row
        row.classList.add("row","pt-0","pb-0");
        row.appendChild(col1);
        row.appendChild(col2);
        //row.appendChild(col3);
      }
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

  function handleClickNew(handler){
    document.querySelector("#new").addEventListener('click',handler);
  }

  function handleClickShow(handler){
    const showLinks = document.querySelectorAll("#show");

    showLinks.forEach( (link) => {
      link.addEventListener('click',handler);
    })
  }

  return { render, handleClickNew, handleClickShow };
})(clearChildren);

export default ProjectIndexView;

