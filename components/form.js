import template from "./template.js";

export default class Form extends HTMLElement {
    connectedCallback() {
        this.data = {
            type: this.type
        }
        this.innerHTML = template.render();
    }
    get type() {
        return this.getAttribute('type')
    }
}