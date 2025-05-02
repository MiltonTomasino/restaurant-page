import "./style.css";
import Home from "./home";
import Menu from "./menu";
import About from "./about";

let content = document.querySelector("#content");
content.appendChild(Home());

let homeBtn = document.querySelector("#home");
let menuBtn = document.querySelector("#menu");
let abouBtn = document.querySelector("#about");


homeBtn.addEventListener("click", () => changeModule(Home()));
menuBtn.addEventListener("click", () => changeModule(Menu()));
abouBtn.addEventListener("click", () => changeModule(About()));

function changeModule(node) {
    content.innerHTML = "";
    content.appendChild(node);
}

// content.appendChild(Home());

console.log("Hello from index.js!");
