import css from "bootstrap/dist/css/bootstrap.min.css";
import './corona-item.js';

class CoronaItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    set datac(datac) {
        this._datac = datac;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._datac.forEach(data => {
            const coronaDataGlobal = document.createElement("corona-data");
            coronaDataGlobal.data = data;
            this.shadowDOM.appendChild(coronaDataGlobal);
        })
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
    ${css}
        </style>`;
        this.shadowDOM.innerHTML += `<h2 class="placeholder text-center text-black-50">${message}</h2>`;
    }
}

customElements.define("corona-item", CoronaItem);