export function MyCard(props) {
    return {
        sayText: event => {
            console.log(event.target.innerText);
        },
        css: `
            #container{
                background: red;
                overflow: hidden;
                border-radius: 25px;
            }
            * {
                background: blue;
            }
            p {
                color: green;
            }
        `,
        html: `
            <h1 listener='click-sayText'>${props.title}</h1>
            <p listener='click-sayText'>${props.desc}</p>
        `
    }
}