
const Menu = () => {
    let homeBox = document.createElement("div");
    homeBox.classList.add("home-box");

    const dishes = ["Garlic Pasta", "Lasagna", "Pizza", "Birria Tacos"];

    let list = document.createElement("ul");
    list.className.add("menu-list");

    for (let i = 0; i < dishes.length; i++) {
        let liElement = document.createElement("li");
        liElement.textContent = dishes[i];

        list.appendChild(liElement);
    }

    homeBox.appendChild(list);

    return homeBox;
}

export default Menu;