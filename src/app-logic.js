import { Project } from './Project.js';
import { Todo } from './Todo.js';

const projects = [];

export function saveToStorage() {
    localStorage.setItem('projects', JSON.stringify(projects));
}

export function loadFromStorage() {
    const data = localStorage.getItem('projects');

    if (!data) {
        projects.push(new Project('Default'));
        return;
    }

    const parsed = JSON.parse(data);
    parsed.forEach(projData => {
        const project = new Project(projData.name);
        project.todos = projData.todos.map(todoData => {
            return new Todo(todoData.title, todoData.description, todoData.dueDate, todoData.priority);
        });
        projects.push(project);
    });
}

export function addProject(name) {
    projects.push(new Project(name));
    saveToStorage();
}

export function deleteProject(index) {
    projects.splice(index, 1);
    saveToStorage();
}

export function createTodo(title, description, dueDate, priority) {
    return new Todo(title, description, dueDate, priority);
}

export { projects };