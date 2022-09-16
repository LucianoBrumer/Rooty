const styles = `
    * {
        background: yellow;
    }
    p {
        color: red;
    }
`

export default ({title}) => ({
    html: `
        <div shadow='${styles}'>
            <h1>${title}</h1>
            <p>TExtooo</p>
        </div>
    `
})