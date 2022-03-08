import EventAggregator from "./event";
import { isDateInThePast } from "./date";

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

        document.getElementById('new-todo').addEventListener('click', () => createTodo())
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

    const updateTodoPriority = (priorityContainer, update) =>
    {
        if(update == 'increase')
        {
            switch(priorityContainer.children[0].textContent)
            {
                case 'low priority':
                    priorityContainer.children[0].textContent = 'medium priority';
                    priorityContainer.classList.remove('priority-low');
                    priorityContainer.classList.add('priority-med');
                break;
                case 'medium priority':
                    priorityContainer.children[0].textContent = 'high priority';
                    priorityContainer.classList.remove('priority-med');
                    priorityContainer.classList.add('priority-high');
                break;
            }
        }
        else if(update == 'decrease')
        {
            switch(priorityContainer.children[0].textContent)
            {
                case 'medium priority':
                    priorityContainer.children[0].textContent = 'low priority';
                    priorityContainer.classList.remove('priority-med');
                    priorityContainer.classList.add('priority-low');
                break;
                case 'high priority':
                    priorityContainer.children[0].textContent = 'medium priority';
                    priorityContainer.classList.remove('priority-high');
                    priorityContainer.classList.add('priority-med');
                break;
            }
        }
    }

    const createTodoCheckboxContainer = (todo, complete, priority) =>
    {
        const checkboxContainer = document.createElement('div');
        checkboxContainer.classList.add('todo-checkbox-container');
        checkboxContainer.classList.add('priority-low');
        todo.appendChild(checkboxContainer);

        const priorityStatus = document.createElement('div');
        checkboxContainer.appendChild(priorityStatus);
        priorityStatus.textContent = priority;

        const checkbox = document.createElement('div');
        checkbox.classList.add('todo-checkbox');
        checkboxContainer.appendChild(checkbox);

        const checkmark = document.createElement('div');
        checkmark.classList.add('todo-checkmark');
        if(complete == false) checkmark.toggleAttribute('hidden');
        checkbox.appendChild(checkmark);

        checkbox.addEventListener('click', () => {
            checkmark.toggleAttribute('hidden');
            recordTodos();
        });

        const priorityButtons = document.createElement('div');
        checkboxContainer.appendChild(priorityButtons);

        const priorityDecreaseButton = document.createElement('button');
        priorityDecreaseButton.textContent = '<';
        priorityDecreaseButton.classList.add('priority-button');
        priorityButtons.appendChild(priorityDecreaseButton);
        priorityDecreaseButton.addEventListener('click', () => updateTodoPriority(checkboxContainer, 'decrease'));

        const priorityIncreaseButton = document.createElement('button');
        priorityIncreaseButton.textContent = '>';
        priorityIncreaseButton.classList.add('priority-button');
        priorityButtons.appendChild(priorityIncreaseButton);
        priorityIncreaseButton.addEventListener('click', () => updateTodoPriority(checkboxContainer, 'increase'));

    }

    const createTodoName = (todo, name) =>
    {
        const todoName = document.createElement('input');
        todoName.classList.add('todo-name');
        console.log(name);
        todoName.value = name;
        todoName.addEventListener('input', recordTodos);
        todo.appendChild(todoName);
    }

    const createTodoDescription = (todo, description) =>
    {
        const todoDescription = document.createElement('textarea');
        todoDescription.classList.add('todo-description');
        todoDescription.value = description;
        todoDescription.addEventListener('input', recordTodos);
        todo.appendChild(todoDescription);
    }

    const createTodoDueDate = (todo, dueDate) =>
    {
        const todoDate = document.createElement('div');
        todoDate.classList.add('todo-date');
        todo.appendChild(todoDate);
        
        const todoButtons = document.createElement('div');
        todoButtons.classList.add('todo-buttons');
        todo.appendChild(todoButtons);

        const date = new Date();
        
        if(dueDate == null) 
        {
            dueDate = {};
            dueDate.day = date.getDate();
            dueDate.month = date.getMonth();
            dueDate.year = date.getFullYear();
        }

        const day = document.createElement('input');
        day.setAttribute('type', 'number');
        day.setAttribute('min', 1);
        day.setAttribute('max', 31);
        day.setAttribute('value', dueDate.day);

        const month = document.createElement('input');
        month.setAttribute('type', 'number');
        month.setAttribute('min', 1);
        month.setAttribute('max', 12);
        month.setAttribute('value', dueDate.month);

        const year = document.createElement('input');
        year.setAttribute('type', 'number');
        year.setAttribute('min', 1985);
        year.setAttribute('max', 9999);
        year.setAttribute('value', dueDate.year);

        todoDate.innerHTML = 'Due date: ' + day.outerHTML + '-' + month.outerHTML + '-' + year.outerHTML;

        Array.from(todoDate.children).forEach(child => child.addEventListener('input', () => {
            recordTodos();
            if(isDateInThePast({
                day: todoDate.children[0].value,
                month: todoDate.children[1].value,
                year: todoDate.children[2].value
            })) todoDate.classList.add('late');
            else todoDate.classList.remove('late');
        }));


        if(isDateInThePast(dueDate)) todoDate.classList.add('late');
        
        const removeTodoButton = document.createElement('button');
        removeTodoButton.classList.add('todo-button');
        removeTodoButton.textContent = 'Delete';
        todoButtons.appendChild(removeTodoButton);
        removeTodoButton.addEventListener('click', () => {
            todo.remove();
            recordTodos();
        });
    }

    const createTodo = (name = " ", description = " ", complete = false, dueDate = null, priority = 'low priority') =>
    {
        const todo = document.createElement('div');
        todo.classList.add('todo');

        createTodoCheckboxContainer(todo, complete, priority);

        createTodoName(todo, name);

        createTodoDescription(todo, description);

        createTodoDueDate(todo, dueDate);

        document.getElementById('todos-container').appendChild(todo);

        recordTodos();
    }

    const recordTodos = () =>
    {
        const todosElements = document.querySelectorAll('.todo');
        const newTodos = Array.from(todosElements).map(todo => {
            let newTodo = {};
            Array.from(todo.children).forEach(child => {
                switch(true)
                {
                    case child.classList.contains('todo-name'):
                        newTodo.name = child.value;
                    break;
                    case child.classList.contains('todo-description'):
                        newTodo.description = child.value;
                    break;
                    case child.classList.contains('todo-checkbox-container'):
                        Array.from(child.children).forEach(child => {
                            switch(true)
                            {
                                case child.classList.contains('todo-checkbox'):
                                    newTodo.complete = child.children[0].getAttribute('hidden') == null;
                                break;
                            }
                        })
                    break;
                    case child.classList.contains('todo-date'):
                        console.log(child.children);
                        newTodo.dueDate = {};
                        newTodo.dueDate.day = child.children[0].value;
                        newTodo.dueDate.month = child.children[1].value;
                        newTodo.dueDate.year = child.children[2].value;
                    break;
                }
            });
            return newTodo;
        });
        console.group('new todo');
        console.log(newTodos);
        console.groupEnd();
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

        document.querySelectorAll('.todo').forEach(todo => todo.remove());

        todos.forEach(todo => {
            console.log(todo); console.log(todo.name);
            createTodo(todo.name, todo.description, todo.complete, todo.dueDate);
        });
    });

    EventAggregator.subscribe('update nav', (id, name) => {
        document.querySelector(`nav li[data-id="${id}"]`).textContent = name;
    });

    return {initHTML}
})()


export default DisplayerController