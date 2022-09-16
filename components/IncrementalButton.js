const styles = {
    button: `
        border-radius: 2.5px;
        border: none;
        color: #fff;
        background: green;
        padding: 5px 25px;
        cursor: pointer;
    `
}
export default ({value}) => ({
    test: event => {
        event.target.innerText = parseInt(event.target.innerText) + 1
    },

    asd: event => {
        console.log('asd');
    },

    html: `
        <button listener='click-test load-asd' style='${styles.button}'>${value}</button>
    `
})