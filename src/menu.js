export function loadMenuPage() {
    const menuContent = document.getElementById("content");
    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "Menu";
    const item1 = document.createElement("p");
    item1.textContent = "Ramen";
    const item2 = document.createElement("p");
    item2.textContent = "Sushi";
    const item3 = document.createElement("p");
    item3.textContent = "Pork";
    menuContent.appendChild(menuHeading);
    menuContent.appendChild(item1);
    menuContent.appendChild(item2);
    menuContent.appendChild(item3);
}