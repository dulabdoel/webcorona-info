import css from "bootstrap/dist/css/bootstrap.min.css";
class CoronaData extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    set data(data) {
        this._data = data;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
           <style>
              ${css}
              
@media screen and (max-width: 991.98px) {
 
    .card > ul>li{
        width:100%!important;
    }
    .list-group{
        width:100%!important;
    }
    .card{
        width:100%!important;
    }             
}           
</style>
      <div class=" card mt-4 mx-auto  " style="width: 80rem;">
  <ul class="list-group list-group-flush ">
    <li class="list-group-item bg-info text-white font-weight-bold btn btn-outline-primary"><h4>Nama Negara : ${this._data.info.title}<h4></li>
    <li class="list-group-item btn-outline-dark font-weight-bold ">Kasus Positif : ${this._data.total_cases}</li>
    <li class="list-group-item btn-outline-dark font-weight-bold">Kasus Sembuh :${this._data.total_recovered} </li>
    <li class="list-group-item btn-outline-dark font-weight-bold">Kasus Meninggal :${this._data.total_deaths} </li>
    <li class="list-group-item btn-outline-dark font-weight-bold">Kasus Baru Hari Ini :${this._data.total_new_cases_today} </li>
    <li class="list-group-item btn-outline-dark font-weight-bold">Kasus Kasus Kematian Hari Ini :${this._data.total_new_deaths_today} </li>
    <li class="list-group-item btn-outline-dark font-weight-bold">Kasus Dalam Perawatan :${this._data.total_active_cases} </li>
    
  </ul>
</div>`
    }
}

customElements.define("corona-data", CoronaData);