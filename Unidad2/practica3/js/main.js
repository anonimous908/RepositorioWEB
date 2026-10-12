const boton = document.getElementById("btnCambiar");
const cajas = document.querySelectorAll(".caja");

if (boton) {
  boton.addEventListener("click", () => {
    cajas.forEach((caja) => {
      caja.classList.toggle("activo");
    });
  });
}

