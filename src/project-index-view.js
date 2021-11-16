const ProjectIndexView = (function(){
  const app = document.querySelector("#app");

  function render(projects){
    //clear app element
    _clearChildren(app); 
    
    //display projects
    for(let i=0; i<projects.length; i++){
      //create title element
      let p1 = document.createElement("p");
      p1.innerHTML = projects[i].getTitle();

      //create description element
      let p2 = document.createElement("p");
      p2.innerHTML = projects[i].getDescription();

      //append to app element
      app.appendChild(p1);
      app.appendChild(p2);
    }

    //display new project button
    const button = document.createElement("input");
    button.setAttribute("type","button");
    button.setAttribute("value","new project");
    button.setAttribute("id","new");

    app.appendChild(button);
  }

  function handleClickNew(handler){
    const newButton = document.querySelector("#new");
    newButton.addEventListener('click',handler);
  }

  function _clearChildren(node){
    while(node.firstChild){
      node.removeChild(node.firstChild);
    }
  }

  return { render, handleClickNew };
})();

export default ProjectIndexView;

