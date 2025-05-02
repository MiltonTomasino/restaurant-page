
const Menu = () => {
    let menuBox = document.createElement("div");
    menuBox.classList.add("menu-box");

    const dishes = ["Garlic Pasta", "Lasagna", "Pizza", "Birria Tacos"];

    let list = document.createElement("ul");
    list.classList.add("menu-list");

    for (let i = 0; i < dishes.length; i++) {
        let liElement = document.createElement("li");
        liElement.textContent = dishes[i];

        list.appendChild(liElement);
    }

    menuBox.appendChild(list);

    return menuBox;
}

export default Menu;