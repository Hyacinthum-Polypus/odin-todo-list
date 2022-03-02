const  DisplayerController = (() => {
    const initHTML = () =>
    {
        document.getElementById('content').innerHTML = `
        <div class="sidebar">
            <header>
                <img src="" alt="Logo">
                <h1>Todo List</h1>
            </header>
            <nav>
                <ul>
                    <li>Default</li>
                </ul>
            </nav>
        </div>
        <main>
            <h2>Default</h2>
        </main>`;
    }

    return {initHTML}
})()


export default DisplayerController