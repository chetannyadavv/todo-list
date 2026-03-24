import './style.css';
import { loadMenuPage } from './menu.js'
import { loadAboutPage } from './about.js'
import { loadHomePage } from './home.js'
loadHomePage();

const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const aboutBtn = document.getElementById('aboutBtn');

const presentContent = document.getElementById("content");

homeBtn.addEventListener('click', () => {
    presentContent.innerHTML = "";
    loadHomePage();
});
menuBtn.addEventListener('click', () => {
    presentContent.innerHTML = "";
    loadMenuPage();
});
aboutBtn.addEventListener('click', () => {
    presentContent.innerHTML = "";
    loadAboutPage();
})