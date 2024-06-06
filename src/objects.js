export function createProject(title, date, todos){
    return {title, date, todos};
}

export function createToDo(title, description, dueDate, priority){
    return {title, description, dueDate, priority};
}