HTMLElement.prototype.render = function(component) {
    this.insertAdjacentHTML('beforeend', (component.html).trim())
    document.querySelectorAll('[listener]').forEach(element => {
        const events = element.getAttribute("listener").split(" ")
        events.forEach(event => {
            const [a, b] = event.split('-')
            element.addEventListener(a, component[b])
        })
    })
    document.querySelectorAll('[shadow]').forEach(element => {
        element.shadow = element.attachShadow({mode: 'open'})
        element.shadow.innerHTML += `${element.outerHTML}<style>${element.getAttribute('shadow')}</style>`
    })
}