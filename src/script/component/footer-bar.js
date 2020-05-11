  import css from "bootstrap/dist/css/bootstrap.min.css";
  class footerBar extends HTMLElement {

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
            

p {
  color: #999;
  line-height: 25px;
}

h2,
h3 {
  color: #fff;
}

h2 {
  font-size: 18px;
}

.footer-top {
  background: #111;
  padding: 80px;
}


.segment-one h3 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #fff;
  letter-spacing: 3px;
  margin: 10px 0;
}

.segment-two h3 {
  font-family: 'Times New Roman', Times, serif;
  color: #fff;
  text-transform: uppercase;
}

.segment-two h2:before {
  content: '|';
  color: #c65039;
  padding-right: 10px;
}

.segment-two ul {
  margin: 0px;
  padding: 0px;
  list-style: none;
}

.segment-two ul li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  line-height: 40px;
}

.segment-two ul li a {
  color: #999;
  text-decoration: none;
}

.segment-tiga h2 {
  font-family: sans-serif;
  color: #fff;
  text-transform: uppercase;
}

.segment-tiga h2:before {
  content: '|';
  color: #c65039;
  padding-right: 10px;
}

.segment-tiga a {
  background: #494848;
  width: 50px;
  height: 50px;
  display: inline-block;
  border-radius: 50%;
}

.segment-tiga a i {
  font-size: 20px;
  color: #fff;
  padding: 10px 12px;
}

.segment-empat h2 {
  color: #fff;
  font-family: monospace;
  text-transform: uppercase;
}

.segment-empat h2:before {
  content: '|';
  color: #c65039;
  padding-right: 10px;
}

.segment-empat input[type=submit] {
  background: #c65039;
  border: none;
  padding: 3px 15px;
  color: white;
  margin-top: 10px;
}

.footer-bottom-text {
  line-height: 75px;
  text-align: center;
  background: #000;
}

@media only screen and (min-widht: 768px) and (max-width: 991px) {
  .md-mb-30 {
      margin-bottom: 30px;
  }
}

@media only screen and (max-width: 767px) {
  .sm-mb-30 {
      margin-bottom: 30px;
  }

  .footer-top {
      padding: 50px 0;
  }
  .footer-bottom{
    font-style: oblique;
  }
}

        </style>
        <footer>
        <div class="footer-top mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-6 col-xs-12 segment-one md-mb-30 sm-mb-30">
                        <h3>Apala</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic asperiores provident quam
                            itaque. Commodi, veniam reiciendis. Assumenda, saepe iure ea, dolorem voluptatibus
                            tempora
                            nesciunt dicta quisquam enim culpa perferendis maxime?</p>
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12 segment-two md-mb-30 sm-mb-30">
                        <h2>Informasi</h2>
                        <ul>

                            <li><a href="https://www.kompas.com/" target="_blank">Berita Terkini</a></li>
                            <li><a href="https://infeksiemerging.kemkes.go.id/" target="_blank">Tentang Covid 19</a>
                            </li>
                            <li><a href="https://covid19.go.id/peta-sebaran" target="_blank">Data Case</a></li>
                            <li><a href="https://covid19.go.id/" target="_blank">Website Resmi Pemerintah</a></li>
                            <li><a href="https://covid19.go.id/" target="_blank">Hotline 119 Covid 19</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12 segment-tiga md-mb-30 sm-mb-30">
                        <h2>Follow US</h2>
                        <p>Please FollowUs On Our Social Media To Keep Updated</p>
                        <a href=""><i id=""></i></a>
                        <a href=""><i id=""></i></a>
                        <a href=""><i id=""></i></a>

                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12 segment-empat md-mb-30 sm-mb-30">
                        <h2>Our NewsLetter</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fugiat explicabo dolor
                            consequuntur. Aliquam repellendus fugit quas error similique! Provident ipsum sed
                            placeat
                            doloribus blanditiis mollitia quas, nulla saepe dolore.</p>
                        <form action="">
                            <input type="email">
                            <input type="submit" value="Subscribe">
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <p class="footer-bottom-text font-italic ">All Right Reserved By &copy:AbdulRahman_2020</p>
    </footer>
        `;
    }
  }


  customElements.define("footer-bar", footerBar);