export function loadHomePage() {
    const div_Content = document.getElementById("content");
    const H1 = document.createElement("h1");
    H1.textContent = "Wok This Way";
    div_Content.appendChild(H1);


    const discription = document.createElement("p");
    discription.textContent = "This is a superb 5 start restraunt";
    div_Content.appendChild(discription);
    const Hours = document.createElement("p");
    Hours.textContent = "10 AM - 4 PM , 6 PM - 11 PM";
    div_Content.appendChild(Hours);
}