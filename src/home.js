import restaurantImage from "./restaurant.jpg";
// Image by Helena Lopes on pexels.com
// https://www.pexels.com/photo/people-drinking-liquor-and-talking-on-dining-table-close-up-photo-696218/

const Home = () => {
    let homeBox = document.createElement("div");
    homeBox.classList.add("home-box");

    let header1 = document.createElement("h1");
    header1.textContent = "Welcome to Our Restaurant!";
    homeBox.appendChild(header1);

    let img = document.createElement("img");
    img.classList.add("photo")
    img.src = restaurantImage;

    homeBox.appendChild(img);

    let p = document.createElement("p");
    p.textContent = "This restaurant serves a wide variety of food ranging from Italian, to Chinese!"

    homeBox.appendChild(p);

    return homeBox;
}

export default Home;