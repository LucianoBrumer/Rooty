export function ToDo(props) {
    return {
        complete: event => {
            const p = event.target.parentNode.querySelector('p')
            getComputedStyle(p).textDecoration.includes('line-through')
                ? p.style.textDecoration = 'none'
                : p.style.textDecoration = 'line-through'
        },
        html: `
            <li class='ToDoLi'>
                <input type='checkbox' listener='click-complete'>
                <p>${props.text}</p>
            </li>
        `
    }
}