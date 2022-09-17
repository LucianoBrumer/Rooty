export default {
    createElement: callback => {

        //Creating a custom element with a function
        const CEo = function (){
            return Reflect.construct(HTMLElement, [], CEo)
        }
        CEo.prototype = Object.create(HTMLElement.prototype)

        //When load the custom element
        CEo.prototype.connectedCallback = function() {

            //setting props of the element
            this.props = {children: this.childNodes[0].nodeValue.trim()}
            this.getAttributeNames().forEach(attribute => this.props[attribute] = this.getAttribute(attribute))

            const component = callback(this.props)

            this.attachShadow({mode: 'open'})
            this.shadowRoot.innerHTML = (`<div>${component.html + this.innerHTML}</div><style>${component.css}</style>`).trim()

            this.shadowRoot.querySelectorAll('[listener]').forEach(element => {
                const listeners = element.getAttribute("listener").split(" ")
                listeners.forEach(event => {
                    const [eventName, methodName] = event.split('-');
                    if(!methodName) this[methodName] = component[eventName]
                    element.addEventListener(eventName, component[methodName])
                    if(eventName === 'load') element.dispatchEvent(new Event('load'))
                })
                element.removeAttribute('listener')
            })
        }

        //Transforming the callback name to a tag name MyCard => my-card
        const tag = callback.name.replace(/([a-z0-9])([A-Z])/g, '$1 $2').toLowerCase().replaceAll(' ', '-')
        customElements.define(tag, CEo)
    }
}