import './style.css';
import * as obj from './objects';
import * as show from './forms';
import createProjects from './project_card'

const projectFormBtn = document.querySelector('.add-new-project');
projectFormBtn.addEventListener("click", ()=>{
    show.showProjectForm();
})

const submitBtn = document.querySelector('.submit-new-project');
submitBtn.addEventListener("click", ()=>{
    const form = document.querySelector("#new-project-form");
    const formData = new FormData(form);
    console.log(formData);

    var newProjectInfo = [];

    for (const [key, value] of formData) {
        newProjectInfo.push(value);
    }  
    var startingDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    newProjectInfo.push(startingDate);
    const newProject = obj.createProject(newProjectInfo[0], newProjectInfo[1], []);
    localStorage.setItem(`${localStorage.length}`, JSON.stringify(newProject));
})

const submitToDoBtn = document.querySelector('.submit-to-do');
submitToDoBtn.addEventListener("click", ()=>{
    const form = document.querySelector(".new-to-do-form");
    const formData = new FormData(form);
    console.log(formData);

    var newToDoInfo = [];

    for (const [key, value] of formData) {
        newToDoInfo.push(value);
    }  
    const newToDo = obj.createToDo(newToDoInfo[0], newToDoInfo[1], newToDoInfo[2], newToDoInfo[3]);
    var project = JSON.parse(localStorage.getItem(form.id));
    project.todos.push(newToDo);
    localStorage.setItem(form.id, JSON.stringify(project));
})

createProjects();