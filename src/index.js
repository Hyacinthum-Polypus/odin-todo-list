console.log('Hello, world');

const component = () =>
{
    return(
        `
        <h1>Hello, Will</h1>
        <p>going away so soon</p>
        <ul>
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
            <li>Item four</li>
        </ul>
        `
    )
}

document.body.innerHTML = component();