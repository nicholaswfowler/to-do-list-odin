import * as obj from './objects';

export function showToDos(todos){
    const projectContent = document.querySelector('.project-content');
    for(var i = 0; i < todos.length; i++){
        console.log(todos[i]);
        const todo = document.createElement('div')

        const title = document.createElement('div')
        title.textContent = todos[i].title;

        const desc = document.createElement('div')
        desc.textContent = todos[i].description;
        
        const date = document.createElement('div')
        date.textContent = todos[i].dueDate;

        const priority = document.createElement('div')
        priority.textContent = todos[i].priority;

        todo.appendChild(title);
        todo.appendChild(desc);
        todo.appendChild(date);
        todo.appendChild(priority);

        projectContent.appendChild(todo);
    }
}

export function hideToDos(){
    const projectContent = document.querySelector('.project-content');
    while(projectContent.lastChild != projectContent.firstChild){
        projectContent.lastChild.remove();
    }
}