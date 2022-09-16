export default ({text}) => ({
    hola: event => {
        console.log(text + event.target.value);
    },

    html: `
        <input type='text' listener='input-hola'>
    `
})