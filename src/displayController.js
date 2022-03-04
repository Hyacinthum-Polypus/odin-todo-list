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
                <ul>
                </ul>
            </nav>
        </div>
        <main>
        </main>`;

        document.getElementById('add-project-button').addEventListener('click', toogleAddProjectInput);
    }

    const toogleAddProjectInput = () =>
    {
        if(document.querySelector('.add-project-input'))
        {
            document.querySelector('.add-project-input').remove();
        }
        else
        {
            const input = document.createElement('input');
            input.classList.add('add-project-input')
            document.querySelector('.input-bar').appendChild(input);
        }
    }

    return {initHTML}
})()


export default DisplayerController