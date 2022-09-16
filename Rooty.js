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

HTMLElement.prototype.isInShadow = function(node) {
    return node.getRootNode() instanceof ShadowRoot;
}

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}