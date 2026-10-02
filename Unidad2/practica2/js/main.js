const boton = document.getElementById("boton");
boton.addEventListener("click", () => {
  document.body.classList.toggle("modo-oscuro");
});

const btnCambio2 = document.getElementById("btn_cambio2");
const padre = document.querySelector(".padre");

btnCambio2.addEventListener("click", () => {
  padre.classList.toggle("modo_transparente");
});


