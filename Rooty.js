HTMLElement.prototype.render = function(component) {
    this.insertAdjacentHTML('beforeend', (component.html).trim())

    this.querySelectorAll('[if]').forEach(el => {
        if(component[el.getAttribute('if')](el) === false) el.style.display = 'none'
        el.removeAttribute('if')
    })

    this.querySelectorAll('[shadow]').forEach(el => {
        el.attachShadow({mode: 'open'})
        el.shadowRoot.innerHTML = el.outerHTML
        el.removeAttribute('shadow')
    })

    this.querySelectorAll('[listener]').forEach(el => {
        const events = el.getAttribute("listener").split(" ")
        events.forEach(event => {
            const [a, b] = event.split('-')
            if(!b) component[b] = component[a]
            !!el.shadowRoot
                ? el.shadowRoot.addEventListener(a, component[b])
                : el.addEventListener(a, component[b])
            if(a === 'load') el.dispatchEvent(new Event('load'))
        })
        el.removeAttribute('listener')
    })

    this.querySelectorAll('[styles]').forEach(el => {
        !!el.shadowRoot
            ? el.shadowRoot.innerHTML += `<style>${el.getAttribute('styles')}</style>`
            : el.innerHTML += `<style>${el.getAttribute('styles')}</style>`
        el.removeAttribute('styles')
    })
}