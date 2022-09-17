export function ToDoList(props) {
    return {
        add: event => {
            const input = event.target.parentNode.querySelector('input[type="text"]')
            const ul = event.target.parentNode.querySelector('ul')
            const text = input.value
            if(text.trim() !== '') {
                ul.innerHTML += `<to-do text='${text}'></to-do>`
                input.value = ''
            }
        },
        html: `
            <div>
                <input type='text' placeholder='To do'>
                <button listener='click-add'>Add</button>
                <ul></ul>
            </div>
        `
    }
}