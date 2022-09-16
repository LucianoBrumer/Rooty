const styles = {
    div: `
        display: flex;
        gap: 25px;
    `,

}

export default (text) => ({
    click: event => {
        event.target.parentNode.remove()
    },
    html: `
        <div style='${styles.div}'>
            <input type='checkbox' listener='click'>
            <li>
                ${text}
            </li>
        </div>
    `
})
