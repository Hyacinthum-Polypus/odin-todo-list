import './style.css';

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
            <li><a href="">Item three</a></li>
            <li>Item four</li>
        </ul>
        `
    )
}

document.getElementById('content').innerHTML += component();
