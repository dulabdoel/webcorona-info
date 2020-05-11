import css from "bootstrap/dist/css/bootstrap.min.css";
class tableELement extends HTMLElement {

    connectedCallback() {
        this.attachShadow({
            mode: "open"
        });
        this.render();
    }


    render() {
        this.shadowRoot.innerHTML = `
    <style>
        ${css}
    </style>
    <div class = "text-center mb-2">
    <h2>Daftar Kode Negara Seluruh Dunia</h2>
    <p class="text-left ml-3">Gunakan Untuk Mencari Negara</p>
    </div

    <div>



    <table class="table table-hover table-sm table-bordered float-right col-md-5 ml-2 mt-2 ">
    <thead class="thead-dark">
        <tr>
        <th scope="col" class="text-center">Nama Negara</th>
        <th scope="col" class="text-center">Kode Negara</th>
        </tr>
    </thead>
    <tr>
    <th scope="col" class="text-center">Afganistan</th>
    <th scope="col" class="text-center">AF</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Albania</th>
    <th scope="col" class="text-center">AL</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Algeria</th>
    <th scope="col" class="text-center">DZ</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Angola</th>
    <th scope="col" class="text-center">AO</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Argentina</th>
    <th scope="col" class="text-center">AR</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Armenia</th>
    <th scope="col" class="text-center">AM</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Australia</th>
    <th scope="col" class="text-center">AU</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Austria</th>
    <th scope="col" class="text-center">AT</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Azerbaijan</th>
    <th scope="col" class="text-center">AZ</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Bahamas</th>
    <th scope="col" class="text-center">BS</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Bangladesh</th>
    <th scope="col" class="text-center">BD</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Belarus</th>
    <th scope="col" class="text-center">BY</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Belgium</th>
    <th scope="col" class="text-center">BE</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Belize</th>
    <th scope="col" class="text-center">BZ</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Benin</th>
    <th scope="col" class="text-center">BJ</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Bhutan</th>
    <th scope="col" class="text-center">BT</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Bolivia</th>
    <th scope="col" class="text-center">BO</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Bosnia and Herzegovina</th>
    <th scope="col" class="text-center">BA</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Botswana</th>
    <th scope="col" class="text-center">BW</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Brazil</th>
    <th scope="col" class="text-center">BR</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Brunei Darussalam</th>
    <th scope="col" class="text-center">BN</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Bulgaria</th>
    <th scope="col" class="text-center">BG</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Burkina Faso</th>
    <th scope="col" class="text-center">BF</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Burundi</th>
    <th scope="col" class="text-center">BI</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Cambodia</th>
    <th scope="col" class="text-center">KH</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Cameroon</th>
    <th scope="col" class="text-center">CM</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Canada</th>
    <th scope="col" class="text-center">CA</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Central African Republic</th>
    <th scope="col" class="text-center">CF</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Chad</th>
    <th scope="col" class="text-center">TD</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Chile</th>
    <th scope="col" class="text-center">CL</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">China</th>
    <th scope="col" class="text-center">CN</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Colombia</th>
    <th scope="col" class="text-center">CO</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Congo</th>
    <th scope="col" class="text-center">CG</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Democratic Republic of Congo</th>
    <th scope="col" class="text-center">CD</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Costa Rica</th>
    <th scope="col" class="text-center">CR</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Ivory Coast</th>
    <th scope="col" class="text-center">CI</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Croatia</th>
    <th scope="col" class="text-center">HR</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Cuba</th>
    <th scope="col" class="text-center">CU</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Cyprus</th>
    <th scope="col" class="text-center">CY</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Czechia</th>
    <th scope="col" class="text-center">CZ</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Denmark</th>
    <th scope="col" class="text-center">DK</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Djibouti</th>
    <th scope="col" class="text-center">DJ</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Dominican Republic</th>
    <th scope="col" class="text-center">DO</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Ecuador</th>
    <th scope="col" class="text-center">EC</th>
    </tr>
    <tr>
    <th scope="col" class="text-center"></th>
    <th scope="col" class="text-center"></th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Egypt</th>
    <th scope="col" class="text-center">EG</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">"El Salvador</th>
    <th scope="col" class="text-center">SV</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Equatorial Guinea</th>
    <th scope="col" class="text-center">GQ</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Eritrea</th>
    <th scope="col" class="text-center">ER</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Estonia</th>
    <th scope="col" class="text-center">EE</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Ethiopia</th>
    <th scope="col" class="text-center">ET</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Falkland Islands</th>
    <th scope="col" class="text-center">FK</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Fiji</th>
    <th scope="col" class="text-center">FJ</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Finland</th>
    <th scope="col" class="text-center">FI</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">France</th>
    <th scope="col" class="text-center">FR</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">French Guiana</th>
    <th scope="col" class="text-center">GF</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">French Southern Territories</th>
    <th scope="col" class="text-center">TF</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Gabon</th>
    <th scope="col" class="text-center">GA</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Gambia</th>
    <th scope="col" class="text-center">GM</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Georgia</th>
    <th scope="col" class="text-center">GE</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Germany</th>
    <th scope="col" class="text-center">DE</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Ghana</th>
    <th scope="col" class="text-center">GH</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Greece</th>
    <th scope="col" class="text-center">GR</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Greenland</th>
    <th scope="col" class="text-center">GL</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Guatemala</th>
    <th scope="col" class="text-center">GT</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Guinea</th>
    <th scope="col" class="text-center">GN</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Guinea-Bissau</th>
    <th scope="col" class="text-center">GW</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Guyana</th>
    <th scope="col" class="text-center">GY</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Haiti</th>
    <th scope="col" class="text-center">HT</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Honduras</th>
    <th scope="col" class="text-center">HN</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Hungary</th>
    <th scope="col" class="text-center">HU</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Iceland</th>
    <th scope="col" class="text-center">IS</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">India</th>
    <th scope="col" class="text-center">IN</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Indonesia</th>
    <th scope="col" class="text-center">ID</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Iraq</th>
    <th scope="col" class="text-center">IQ</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Ireland</th>
    <th scope="col" class="text-center">IE</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Israel</th>
    <th scope="col" class="text-center">IL</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Italy</th>
    <th scope="col" class="text-center">IT</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Jamaica</th>
    <th scope="col" class="text-center">JM</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Japan</th>
    <th scope="col" class="text-center">JP</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Jordan</th>
    <th scope="col" class="text-center">JO</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Kazakhstan</th>
    <th scope="col" class="text-center">KZ</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Kenya</th>
    <th scope="col" class="text-center"><KE/th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Kenya</th>
    <th scope="col" class="text-center">KP</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">South Korea</th>
    <th scope="col" class="text-center">KR</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Kuwait</th>
    <th scope="col" class="text-center">KW</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Kyrgyzstan</th>
    <th scope="col" class="text-center">KG</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Lao</th>
    <th scope="col" class="text-center">LA</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Latvia</th>
    <th scope="col" class="text-center">LV</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Lebanon</th>
    <th scope="col" class="text-center">LB</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Lesotho</th>
    <th scope="col" class="text-center">LS  </th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Liberia</th>
    <th scope="col" class="text-center">LR</th>
    </tr>
    </tbody>
    </table>











    <table class="table table-hover table-sm table-bordered  col-md-5 ml-2 mt-2">
    <thead class="thead-dark">
        <tr>
        <th scope="col" class="text-center">Nama Negara</th>
        <th scope="col" class="text-center">Kode Negara</th>
        </tr>
    </thead>
    <tr>
    <th scope="col" class="text-center">Libya</th>
    <th scope="col" class="text-center">LY</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Lithuania</th>
    <th scope="col" class="text-center">LT</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Luxembourg</th>
    <th scope="col" class="text-center">LU</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Macedonia</th>
    <th scope="col" class="text-center">MK</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Angola</th>
    <th scope="col" class="text-center">AO</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Madagascar</th>
    <th scope="col" class="text-center">MG</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Malawi</th>
    <th scope="col" class="text-center">MW</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Malaysia</th>
    <th scope="col" class="text-center">MY</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Mali</th>
    <th scope="col" class="text-center">ML</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Mauritania</th>
    <th scope="col" class="text-center">MR</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Mexico</th>
    <th scope="col" class="text-center">MX</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Moldova</th>
    <th scope="col" class="text-center">MD</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Mongolia</th>
    <th scope="col" class="text-center">MN</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Morocco</th>
    <th scope="col" class="text-center">MA</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Mozambique</th>
    <th scope="col" class="text-center">MZ</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Myanmar</th>
    <th scope="col" class="text-center">MM</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Namibia</th>
    <th scope="col" class="text-center">NA</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Nepal</th>
    <th scope="col" class="text-center">NP</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Netherlands</th>
    <th scope="col" class="text-center">NL</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">New Caledonia</th>
    <th scope="col" class="text-center">NC</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">New Zealand</th>
    <th scope="col" class="text-center">NZ</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Nicaragua</th>
    <th scope="col" class="text-center">NI</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Niger</th>
    <th scope="col" class="text-center">NE</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Nigeria</th>
    <th scope="col" class="text-center">NG</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Norway</th>
    <th scope="col" class="text-center">NO</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Oman</th>
    <th scope="col" class="text-center">OM</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Pakistan</th>
    <th scope="col" class="text-center">PK</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Palestine</th>
    <th scope="col" class="text-center">PS</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Panama</th>
    <th scope="col" class="text-center">PA</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Papua New Guinea</th>
    <th scope="col" class="text-center">PA</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Paraguay</th>
    <th scope="col" class="text-center">PY</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Peru</th>
    <th scope="col" class="text-center">PE</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Philippines</th>
    <th scope="col" class="text-center">PH</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Poland</th>
    <th scope="col" class="text-center">PL</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Portugal</th>
    <th scope="col" class="text-center">PT</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Puerto Rico</th>
    <th scope="col" class="text-center">PR</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Qatar</th>
    <th scope="col" class="text-center">QA</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Republic of Kosovo</th>
    <th scope="col" class="text-center">XK</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Romania</th>
    <th scope="col" class="text-center">RO</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Rwanda</th>
    <th scope="col" class="text-center">RW</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Saudi Arabia</th>
    <th scope="col" class="text-center">SA</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Senegal</th>
    <th scope="col" class="text-center">SN</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Serbia</th>
    <th scope="col" class="text-center">SR</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Sierra Leone</th>
    <th scope="col" class="text-center">SL</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Slovakia</th>
    <th scope="col" class="text-center">SK</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Slovenia</th>
    <th scope="col" class="text-center">SI</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Solomon Islands</th>
    <th scope="col" class="text-center">SB</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Somalia</th>
    <th scope="col" class="text-center">SO</th>
    </tr>
    <tr>
    <th scope="col" class="text-center"> South Africa</th>
    <th scope="col" class="text-center">ZA</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">South Sudan</th>
    <th scope="col" class="text-center">SS</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Spain</th>
    <th scope="col" class="text-center">ES</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Sri Lanka</th>
    <th scope="col" class="text-center">LK</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Sudan</th>
    <th scope="col" class="text-center">SD</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Suriname</th>
    <th scope="col" class="text-center">SR</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Svalbard and Jan Mayen</th>
    <th scope="col" class="text-center">SJ</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Swaziland</th>
    <th scope="col" class="text-center">SZ</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Sweden</th>
    <th scope="col" class="text-center">SE</th>
    </tr>
    <tr>
    <th scope="col" class="text-center"> Switzerland</th>
    <th scope="col" class="text-center">CH</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Syrian Arab Republic</th>
    <th scope="col" class="text-center">SY</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Taiwan</th>
    <th scope="col" class="text-center">TW</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Tajikistan</th>
    <th scope="col" class="text-center">TJ</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Tanzania</th>
    <th scope="col" class="text-center">TZ</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Thailand</th>
    <th scope="col" class="text-center">TH</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Timor-Leste</th>
    <th scope="col" class="text-center">TL</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Togo</th>
    <th scope="col" class="text-center">TG</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Trinidad and Tobago</th>
    <th scope="col" class="text-center">TT</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Tunisia</th>
    <th scope="col" class="text-center">TN</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Turkey</th>
    <th scope="col" class="text-center">TR</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Turkmenistan</th>
    <th scope="col" class="text-center">TM</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Uganda</th>
    <th scope="col" class="text-center">UG</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Ukraine</th>
    <th scope="col" class="text-center">UA</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">United Kingdom</th>
    <th scope="col" class="text-center">GB</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">USA</th>
    <th scope="col" class="text-center">US</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Uruguay</th>
    <th scope="col" class="text-center">UY</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Uzbekistan</th>
    <th scope="col" class="text-center">UZ</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Vanuatu</th>
    <th scope="col" class="text-center">VU</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Venezuela</th>
    <th scope="col" class="text-center">VE</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Western Sahara</th>
    <th scope="col" class="text-center">EH</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Yemen</th>
    <th scope="col" class="text-center">YE</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Zambia</th>
    <th scope="col" class="text-center">ZM</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Zimbabwe</th>
    <th scope="col" class="text-center">ZW</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Singapore</th>
    <th scope="col" class="text-center">SG</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Hong Kong</th>
    <th scope="col" class="text-center">HK</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">DR Congo</th>
    <th scope="col" class="text-center">CD</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Kosovo</th>
    <th scope="col" class="text-center">XK</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">"Diamond Princes</th>
    <th scope="col" class="text-center">DP</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Iran</th>
    <th scope="col" class="text-center">IR</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">North Korea</th>
    <th scope="col" class="text-center">KP</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Russia</th>
    <th scope="col" class="text-center">RU</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">UAE</th>
    <th scope="col" class="text-center">AE</th>
    </tr>
    <tr>
    <th scope="col" class="text-center">Vietnam </th>
    <th scope="col" class="text-center">VN</th>
    </tbody>
    </table>
    <p class="ml-3">NB: Gunakan Data Kode Negara Untuk Mencari Nama Negara</p>










    `;
    }
}


customElements.define("table-element", tableELement);