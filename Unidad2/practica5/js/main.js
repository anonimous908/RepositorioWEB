const myButton = document.getElementById("myButton");
const title = document.querySelector("h1");
const divs = document.querySelectorAll("#container1 > div, #container2 > div");

myButton.addEventListener("click", () => {
    title.textContent = "Titulo cambiado";
    divs.forEach((div) => {
        div.style.backgroundColor = "red";
    });
});
