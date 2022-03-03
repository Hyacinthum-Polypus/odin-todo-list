import DisplayController from './displayController.js';
import {EventAggregator} from './event.js';
import './style.css';

DisplayController.initHTML();


function Todo(name, description, dueDate, priority)
{    
    return {name, description, dueDate, priority};
}

const Project = (name, description) =>
{
    return {name, description, todos: []}
}

const myTodo = Todo('word', 'word word', '9-10-2001', 1);

console.log(myTodo);

const Default = Project('Default', 'A default area to put all your todos if they have nowhere else to go');


