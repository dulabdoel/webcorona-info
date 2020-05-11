//import style
import 'bootstrap';
import './scss/app.scss';
import "regenerator-runtime";
import "./styles/main.css";
//import custom element
import './script/component/table-element';
import "./script/component/footer-bar";
//
//import gambar
import virusLogo1 from './images/covid.jpg';
import virusMask from './images/mask.jpg';
import home from './images/immune.jpg';
import sad from './images/sad.png';
import happy from './images/positif.png'
import dead from './images/cry.png'
import flag from './images/indonesia.png'
//
//import footer dinamis js
import sticky from "./sticky-nav.js";
//
//data all corona
import main from "./script/view/main.js";
//document
document.addEventListener("DOMContentLoaded", main);
document.addEventListener("DOMContentLoaded", sticky);
document.querySelector('#imageVirus').src = virusLogo1;
document.querySelector('#imageMask').src = virusMask;
document.querySelector('#imageHome').src = home;
document.querySelector('#imageSad').src = sad;
document.querySelector('#imagePositif').src = happy;
document.querySelector('#imageDead').src = dead;
document.querySelector('#imageFlag').src = flag;