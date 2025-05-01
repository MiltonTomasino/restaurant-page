import restaurantImage from "./restaurant.jpg";

const Home = () => {
    let box = document.createElement("div");
    box.classList.add("box");

    let header1 = document.createElement("h1");
    header1.textContent = "Welcome to Our Restaurant!";
    box.appendChild(header1);

    let img = document.createElement("img");
    img.classList.add("photo")
    img.src = restaurantImage;

    box.appendChild(img);

    let p = document.createElement("p");
    p.textContent = "This restaurant serves a wide variety of food ranging from Italian, to Chinese!"

    box.appendChild(p);

    return box;
}

export default Home;