// Visor de imagen interactivo por hover
const imagenVisor = document.getElementById('imagen-visor');
const itemsIngredientes = document.querySelectorAll('.item-ingrediente');

itemsIngredientes.forEach(item => {
    item.addEventListener('mouseenter', () => {
        imagenVisor.src = item.getAttribute('data-img');
        imagenVisor.alt = item.textContent;
    });
});

// Botón de modo oscuro
const btnModo = document.getElementById('btn_modo');

btnModo.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
