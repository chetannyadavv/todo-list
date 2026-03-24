export function loadAboutPage() {
    const aboutSection = document.getElementById("content");
    const aboutHeading = document.createElement("h1");
    const aboutContent = document.createElement("p");

    aboutHeading.textContent = "About US";
    aboutContent.textContent = "Wok This Way was founded in 2010 with a simple mission — to bring bold, authentic Asian flavors to your table. Our chefs have over 20 years of experience crafting dishes that warm the soul. Whether you're dining in or taking out, every meal is made with love.";

    aboutSection.appendChild(aboutHeading);
    aboutSection.appendChild(aboutContent);
}