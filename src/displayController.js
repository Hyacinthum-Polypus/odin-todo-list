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
        </main>`;

        document.getElementById('add-project-button').addEventListener('click', toggleAddProjectInput);

        const projectHeading = document.querySelector('.project-heading');
        projectHeading.addEventListener('input', () => EventAggregator.publish('update project', document.querySelector('.selected').getAttribute('data-id'), {name: projectHeading.value}));

        const projectDescription = document.querySelector('.project-description');
        projectDescription.addEventListener('input',  () => EventAggregator.publish('update project', document.querySelector('.selected').getAttribute('data-id'), {description: projectDescription.value}));

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

    EventAggregator.subscribe('view project', project => {
        if(document.querySelector('.selected') != null) document.querySelector('.selected').classList.remove('selected');
        const selected = document.querySelector(`nav li[data-id="${project.getId()}"]`)
        selected.classList.add('selected');
        selected.textContent = project.name;
        const projectHeading = document.querySelector('.project-heading');
        projectHeading.value = project.name;
        const projectDescription = document.querySelector('.project-description');
        projectDescription.value = project.description;
    });

    return {initHTML}
})()


export default DisplayerController