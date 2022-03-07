import EventAggregator from "./event";

const  DisplayerController = (() => {
    const initHTML = () =>
    {
        document.getElementById('content').innerHTML = `
        <div class="sidebar">
            <header>
                <img src="" alt="Logo">
                <h1>Todo List</h1>
            </header>
            <div class="toolbar">
                    <button id="add-project-button">+</button>
            </div>
            <div class="input-bar"></div>
            <nav>
                <h3>Projects</h3>
                <ul>
                </ul>
            </nav>
        </div>
        <main>
            <input placeholder="Project title here..." type="type" class="project-heading">
            <textarea placeholder="Project description here..." class="project-description" rows="10"></textarea>
            <div id="todo-container-buttons">
                <button id="new-todo">+</button>
            </div>
            <div id="todos-container">

            </div>
        </main>`;

        document.getElementById('add-project-button').addEventListener('click', toggleAddProjectInput);

        const projectHeading = document.querySelector('.project-heading');
        projectHeading.addEventListener('input', () => {
            EventAggregator.publish('update project', getSelectedProjectId(), {name: projectHeading.value});
            document.querySelector('.selected').textContent = projectHeading.value == '' ? 'Untitled Project' : projectHeading.value;
        });

        const projectDescription = document.querySelector('.project-description');
        projectDescription.addEventListener('input',  () => EventAggregator.publish('update project', getSelectedProjectId(), {description: projectDescription.value}));

        document.getElementById('new-todo').addEventListener('click', createTodo)
    }

    const getSelectedProjectId = () =>
    {
        return document.querySelector('.selected').getAttribute('data-id');
    }

    const addProjectToNav = (project, id) =>
    {
        const listItem = document.createElement('li');
        listItem.textContent = project;
        listItem.setAttribute('data-id', id);
        listItem.addEventListener('click', () => {EventAggregator.publish('select project', id);});
        document.querySelector('ul').appendChild(listItem);
    }
    EventAggregator.subscribe('project created', (projectName, id) => addProjectToNav(projectName, id));

    const toggleAddProjectInput = () =>
    {
        if(document.querySelector('.add-project-input'))
        {
            document.querySelector('.add-project-input').remove();
        }
        else
        {
            const input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.classList.add('add-project-input')
            document.querySelector('.input-bar').appendChild(input);
            input.focus();
            input.addEventListener('keydown', e => {if(e.key == 'Enter') {EventAggregator.publish('add project', input.value); toggleAddProjectInput()};});
        }
    }

    const createTodo = () =>
    {
        const todo = document.createElement('div');
        todo.classList.add('todo');

        const checkboxContainer = document.createElement('div');
        checkboxContainer.classList.add('todo-checkbox-container');
        todo.appendChild(checkboxContainer);

        const todoName = document.createElement('input');
        todoName.classList.add('todo-name');
        todoName.addEventListener('input', recordTodos);
        todo.appendChild(todoName);

        const todoDescriptoion = document.createElement('textarea');
        todoDescriptoion.classList.add('todo-description');
        todoDescriptoion.addEventListener('input', recordTodos);
        todo.appendChild(todoDescriptoion);

        document.getElementById('todos-container').appendChild(todo);

        recordTodos();
    }

    const recordTodos = () =>
    {
        const todosElements = document.querySelectorAll('.todo');
        const newTodos = Array.from(todosElements).map(todo => {
            let newTodo = {};
            Array.from(todo.children).forEach(child => {
                switch(child.getAttribute('class'))
                {
                    case 'todo-name':
                        newTodo.name = child.value;
                    break;
                    case 'todo-description':
                        newTodo.description = child.value;
                    break;
                    case '.todo-checkbox-container':

                    break;
                }
            });
            return newTodo;
        });
        console.log(newTodos);
        EventAggregator.publish('update project', getSelectedProjectId(),{todos: newTodos});
    }

    EventAggregator.subscribe('view project', (id, name, description, todos) => {
        if(document.querySelector('.selected') != null) document.querySelector('.selected').classList.remove('selected');
        const selected = document.querySelector(`nav li[data-id="${id}"]`)
        selected.classList.add('selected');
        const projectHeading = document.querySelector('.project-heading');
        projectHeading.value = name;
        const projectDescription = document.querySelector('.project-description');
        projectDescription.value = description;
    });

    EventAggregator.subscribe('update nav', (id, name) => {
        document.querySelector(`nav li[data-id="${id}"]`).textContent = name;
    });

    return {initHTML}
})()


export default DisplayerController