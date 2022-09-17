export default {
    createElement: callback => {
        const CEo = function (){
            return Reflect.construct(HTMLElement, [], CEo)
        }

        CEo.prototype = Object.create(HTMLElement.prototype)

        CEo.prototype.connectedCallback = function() {
            this.props = {}
            this.getAttributeNames().forEach(attribute => this.props[attribute] = this.getAttribute(attribute))
            const component = callback(this.props)
            this.functions = component.functions
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
                    !!el.shadowRoot
                        ? el.shadowRoot.addEventListener(a, this.functions[b])
                        : el.addEventListener(a, this.functions[b])
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

        const tag = callback.name.replace(/([a-z0-9])([A-Z])/g, '$1 $2').toLowerCase().replace(' ', '-')
        customElements.define(tag, CEo)

    }
}