import "./style.css";
import restaurantImage from "./restaurant.jpg"
import Home from "./home";

let content = document.querySelector("#content");
content.appendChild(Home());

console.log("Hello from index.js!");
