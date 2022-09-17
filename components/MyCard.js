export function MyCard(props) {
    return {
        functions: {
            sayHello: () => {
                console.log('hello');
            }
        },
        tag: `my-card`,
        html: `
            <div>
                <h1 listener='click-sayHello'>${props.title}</h1>
                <p>${props.desc}</p>
            </div>
        `
    }
}