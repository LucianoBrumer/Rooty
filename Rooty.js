const root = document.getElementById('root')
root.render = component => {
    root.insertAdjacentHTML('beforeend', component.html)
    document.querySelectorAll('[listener]').forEach(element => {
        const events = element.getAttribute("listener").split(" ")
        events.forEach(event => {
            const [a, b] = event.split('-')
            element.addEventListener(a, component[b])
        })
    })
}
export default root