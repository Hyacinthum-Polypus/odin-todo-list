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
                    <button id="add-project">+</button>
                </div>
            <nav>
                <ul>
                </ul>
            </nav>
        </div>
        <main>
        </main>`;
    }

    return {initHTML}
})()


export default DisplayerController