const myButton = document.getElementById("myButton");
const title = document.querySelector("h1");
const divs = document.querySelectorAll("#container1 > div, #container2 > div");
const images = document.querySelectorAll("img");
const cardTitles = document.querySelectorAll("#container1 span, #container2 span");

myButton.addEventListener("click", () => {
    title.textContent = "Titulo cambiado";
    title.style.color = "blue";

    cardTitles.forEach((cardTitle, index) => {
        cardTitle.textContent = `Titulo ${index + 1} cambiado`;
    });

    images.forEach((img) => {
        img.style.display = "none";
    });

    divs.forEach((div) => {
        div.style.backgroundColor = "green";
    });
});
