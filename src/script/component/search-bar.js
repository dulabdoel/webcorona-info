import css from "bootstrap/dist/css/bootstrap.min.css";
class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        ${css}
        
@media screen and (max-width: 991.98px) {
    .search-container {
        flex-direction: column;
        position: static;
    }

    .search-container > input {
        width: 50%;
     
    }

    .search-container > button {
        width: 20%;
        margin-bottom :5px;
        padding:4px;
    }
    h2{
        font-size :22px;
    }
}
        </style>
        <h2 class ="text-center" >Data Kasus Corona Berdasarkan Negara Di Seluruh Dunia</h2>
        <div id="search-container" class="search-container  mt-4">
            <input placeholder="Cari Negara" id="searchElement" type="search" class="form-control-lg col-md-9 offset-1 bg-light " >
            <button id="searchButtonElement" type="submit" class="btn btn-outline-primary ml-2 mb-3 btn-lg  ">Search</button>
        </div>
        `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);