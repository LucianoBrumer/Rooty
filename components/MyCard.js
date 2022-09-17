export function MyCard(props) {
    return {
        sayHello: event => {
            console.log(event.target.innerText);
        },
        html: `
            <div>
                <h1 listener='click-sayHello'>${props.title}</h1>
                <p>${props.desc}</p>
            </div>
        `
    }
}