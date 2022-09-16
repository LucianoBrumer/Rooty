export default ({text}) => ({
    hola: event => {
        console.log(text + event.target.value);
    },

    iffunc: el => {
        return true
    },

    click: event => {
        console.log('easduasBOM');
    },

    html: `
        <input type='text' if='iffunc' listener='input-hola click'>
    `
})