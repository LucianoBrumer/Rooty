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

export default function(props){
    return {
        add: e => {
            console.log('pedro');
            // e.target.parentNode.querySelector('ul').innerHTML += `<li>${e.target.parentNode.querySelector('input').value}</li>`
        },
        html: `
            <div styles='${styles}'>
                <input type='text' placeholder='ToDo'>
                <button listener='click-add'>Add</button>
                <ul>
                </ul>
            </div>
        `
    }
}