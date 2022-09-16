const styles = `
    div {
        background: rgb(225, 225, 225);
        border-radius: 2.5px;
        display: flex;
        flex-direction: column;
        width: 250px;
        gap: 10px;
        padding: 10px;
    }
    input {
        border: 1px solid #aaa;
        border-radius: 2.5px;
        padding: 5px;
    }
    button {
        border: 1px solid #aaa;
        border-radius: 2.5px;
        padding: 5px;
        cursor: pointer;
    }
`

import ToDo from "./ToDo.js"

export default function(props){
    return {
        add: e => {
            if((e.target.parentNode.querySelector('input').value).trim() !== '')
                e.target.parentNode.querySelector('ul').render(ToDo(e.target.parentNode.querySelector('input').value))
            e.target.parentNode.querySelector('input').value = ''
        },
        html: `
            <div>
                <input type='text' placeholder='ToDo'>
                <button listener='click-add'>Add</button>
                <ul>
                </ul>
            </div>
        `
    }
}
