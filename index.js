import Form from "./components/form.js";

if (!customElements.get('ag-form')) {
    customElements.define('ag-form', Form);
}