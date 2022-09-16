HTMLElement.prototype.render = function(component) {
    this.insertAdjacentHTML('beforeend', (component.html).trim())

    document.querySelectorAll('[shadow]').forEach(element => {
        element.attachShadow({mode: 'open'})
        element.shadowRoot.innerHTML = element.outerHTML
    })

    document.querySelectorAll('[listener]').forEach(element => {
        const events = element.getAttribute("listener").split(" ")
        events.forEach(event => {
            const [a, b] = event.split('-')
            element.hasAttribute('shadow')
                ? element.shadowRoot.addEventListener(a, component[b])
                : element.addEventListener(a, component[b])
        })
    })

    document.querySelectorAll('[styles]').forEach(element => {
        element.hasAttribute('shadow')
            ? element.shadowRoot.innerHTML += `<style>${element.getAttribute('styles')}</style>`
            : element.innerHTML += `<style>${element.getAttribute('styles')}</style>`
    })
}