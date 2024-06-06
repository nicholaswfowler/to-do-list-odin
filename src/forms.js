import * as obj from './objects';

// PROJECT FORM
export function showProjectForm(){
    const overlay = document.getElementById("new-project-form");
    overlay.classList.toggle('show');
}

// TO DO FORM
export function showToDoForm(key){
    const overlay = document.querySelector(".new-to-do-form");
    overlay.setAttribute('id', key);
    overlay.classList.toggle('show');
}