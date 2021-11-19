const ProjectIndexView = (function(){
  const app = document.querySelector("#app");

  function render(projects){
    //clear app element
    _clearChildren(app); 

    //display projects
    for(let i=0; i<projects.length; i++){
      //create title element
      let a1 = document.createElement("a");
      a1.setAttribute("data-project-id",projects[i].getId());
      a1.setAttribute("href","#")
      a1.innerHTML = projects[i].getTitle();
      a1.setAttribute("id","show");

      //create description element
      let p = document.createElement("p");
      p.innerHTML = projects[i].getDescription();

      //create edit link
      let a2 = document.createElement("a");
      a2.setAttribute("data-project-id",projects[i].getId());
      a2.setAttribute("href","#");
      a2.setAttribute("id","edit");
      a2.innerHTML = "edit";

      //create delete link
      let a3 = document.createElement("a");
      a3.setAttribute("data-project-id",projects[i].getId());
      a3.setAttribute("href","#");
      a3.setAttribute("id","delete");
      a3.innerHTML = "delete";

      //append to app element
      app.appendChild(a1);
      app.appendChild(p);
      app.appendChild(a2);
      app.appendChild(a3);
    }

    //display new project button
    const button = document.createElement("input");
    button.setAttribute("type","button");
    button.setAttribute("value","new project");
    button.setAttribute("id","new");

    app.appendChild(button);
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

  function handleClickEdit(handler){
    const editLinks = document.querySelectorAll("#edit");

    editLinks.forEach( (link) => {
      link.addEventListener('click',handler);
    })
  }

  function handleClickDelete(handler){
    const deleteLinks = document.querySelectorAll("#delete");

    deleteLinks.forEach( (link) => {
      link.addEventListener('click',handler);
    })
  }

  function _clearChildren(node){
    while(node.firstChild){
      node.removeChild(node.firstChild);
    }
  }

  return { render, handleClickNew, handleClickShow, handleClickEdit, handleClickDelete };
})();

export default ProjectIndexView;

