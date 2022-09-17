export function ToDoList(props) {
    const styles = `
        *{
            margin: 0;
            padding: 0;
        }
        .ToDoContainer {
            border-radius: 2.5px;
            border: 1px solid #bbb;
            display: flex;
            background: #0001;
            padding: 10px;
            flex-direction: column;
        }
        .ToDoInputs{
            background: #fff;
            display: flex;
        }
        .ToDoInput{
            width: 150px;
            padding: 2.5px 5px;
        }
        .ToDoInput:focus{
            outline: none
        }
        .ToDoButton{
            width: 50px;
            background: #0001;
            border: 1px solid #bbb;
            padding: 2.5 10px;
            cursor: pointer;
        }
        .ToDoUl{
            list-style: none;
            background: #fff;
        }
        .ToDoLi{
            display: flex;
            gap: 10px;
            padding: 10px;
        }
    `

    return {
        add: event => {
            if(!event.target.todos) event.target.todos = []

            const input = event.target.parentNode.querySelector('input[type="text"]')
            const ul = event.target.parentNode.parentNode.querySelector('ul')
            const text = input.value

            if(text.trim() !== '') {
                event.target.todos.push(text)
                const todos = event.target.todos.map(todo => `<to-do text='${todo}'></to-do>`)
                ul.innerHTML = todos.join('')
                input.value = ''
            }
        },
        html: `
            <div styles='${styles}' class='ToDoContainer'>
                <div class='ToDoInputs'>
                    <input type='text' placeholder='To do' class='ToDoInput'>
                    <button listener='click-add' class='ToDoButton'>Add</button>
                </div>
                <ul class='ToDoUl'></ul>
            </div>
        `
    }
}