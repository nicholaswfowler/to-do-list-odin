import * as td from './todo_page';
import * as obj from './objects';
import * as form from './forms';

function createProjects(){
    const body = document.querySelector('.projects');

    Object.keys(localStorage).forEach(function(key){
        var project = JSON.parse(localStorage.getItem(key));
        const projectContent = document.createElement('div');
        projectContent.classList.add('project-content');

        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.id = key;

        const showToDoBtn = document.createElement('button');
        showToDoBtn.textContent = "Show To Do's"
        var toDoBool = false;
        showToDoBtn.addEventListener('click', ()=>{
            if(toDoBool == false){
                td.showToDos(project.todos);
                toDoBool = true;
            }
            else{
                td.hideToDos();
                toDoBool = false;
            }
        });
        
        const projectDate = document.createElement('div');
        projectDate.textContent = project.date;
    
        const projectTitle = document.createElement('div');
        projectTitle.textContent = `${project.title} (To-Do: ${project.todos.length})`;
    
        const createToDoBtn = document.createElement('button');
        createToDoBtn.classList.add('delete-project-btn');
        createToDoBtn.textContent = 'Add To Do';
        
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-project-btn');
        deleteBtn.textContent = 'Remove Project';
        
        createToDoBtn.addEventListener('click', ()=>{
            form.showToDoForm(key);
        });

        deleteBtn.addEventListener('click', ()=>{
            localStorage.removeItem(key);
            location.reload();
        });
    
        projectCard.appendChild(projectDate);
        projectCard.appendChild(projectTitle);
        projectCard.appendChild(createToDoBtn);
        projectCard.appendChild(showToDoBtn);
        projectCard.appendChild(deleteBtn);
    
        projectContent.appendChild(projectCard);

        body.appendChild(projectContent);
     });
}

export default createProjects;