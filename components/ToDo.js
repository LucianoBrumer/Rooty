export function ToDo(props) {
    return {
        complete: event => {
            const p = event.target.parentNode.querySelector('p')
            p.styles().textDecoration.includes('line-through')
                ? p.style.textDecoration = 'none'
                : p.style.textDecoration = 'line-through'
        },
        html: `
            <div>
                <input type='checkbox' listener='click-complete'>
                <p>${props.text}</p>
            </div>
        `
    }
}