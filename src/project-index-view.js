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

      //append to app element
      app.appendChild(a1);
      app.appendChild(p);
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

  function _clearChildren(node){
    while(node.firstChild){
      node.removeChild(node.firstChild);
    }
  }

  return { render, handleClickNew, handleClickShow };
})();

export default ProjectIndexView;

