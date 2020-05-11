/*
import css from "bootstrap/dist/css/bootstrap.min.css";
import '../data/data-corona.js'
class contentBar extends HTMLElement {
    connectedCallback() {

        this.src3 = this.getAttribute("src3") || null;
        this.src2 = this.getAttribute("src2") || null;
        this.src1 = this.getAttribute("src1") || null;
        this.src = this.getAttribute("src") || null;
        this.attachShadow({
            mode: "open"
        });
        this.render();

    }

    render() {

        this.shadowRoot.innerHTML = `
        <style>
            ${css}
            @media only screen and (max-width : 767px) {

                img{

            }
        </style>
        <div class=" container pb-4">
        <h2 class="p-4  text-center" id = "1">Corona Virus Global & Indonesia Live Data</h2>
        <div class="row ">
            <div class="col-md-4 ">
                <div class="bg-danger box mt-2 p-4 pt-5 rounded-top text-white">
                    <div class="row ">
                        <div class="col-md-6 ml-4">
                            <h3>Positif</h3>
                            <h5></h5>
                            <h5>Orang</h5>
                        </div>
                        <img src = "${this.src2}" width="100px"
                    </div>
                </div>
            </div>
            <div class="col-md-4 ">
                <div class="bg-success box mt-2 p-4 pt-5 rounded-top text-white">
                    <div class="row">
                        <div class="col-md-6 ml-4">
                            <h3>Recovery</h3>
                            <h5></h5>
                            <h5>Orang</h5>
                        </div>
                        <div>
                            <img src = "${this.src}" width="100px">
                          
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 ">
                <div class="bg-warning box mt-2 p-4 pt-5 rounded-top text-white">
                    <div class="row">
                        <div class="col-md-6 ml-4">
                            <h3>Meningal</h3>
                            <h5></h5>
                            <h5>Orang</h5>
                        </div>
                        <div>
                            <img src = "${this.src1}" alt="" width="100px">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-4">
                <div class="bg-primary box p-3 pt-5 rounded-top text-white">
                    <div class="row ">
                        <div class="col-md-3 ml-4">
                            <h2>Indonesia</h2>
                            <h5>Positif : 12 Orang
                                <br>
                                Recovery : 200 Orang
                                <br>
                                Meninggal : 29 Orang
                            </h5>
                        </div>
                        <div>
                            <img src = "${this.src3}" width="150px">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="table-responsive">
    <table class="table table-hover overflow-hidden">
    <thead>
      <tr>
        <th scope="col">No</th>
        <th scope="col">Provinsi</th>
        <th scope="col">Positif</th>
        <th scope="col">Recovery</th>
        <th scope="col">Meninggal</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
  </div>
    
        `;
    }
}


customElements.define("content-bar", contentBar);
*/