// Función para cambiar el tema de la página
const btnTema2 = document.querySelector('#btn_modo');
const body = document.body;
const imagen1 = document.getElementById('miImagen1');
const imagen2 = document.getElementById('miImagen2');
const imagen3 = document.getElementById('miImagen3');
const imagen4 = document.getElementById('miImagen4');
const imagen5 = document.getElementById('miImagen5');
const imagen6 = document.getElementById('miImagen6');

btnTema2.addEventListener('click', () => {
  body.classList.toggle('modo_transparente');

  if (body.classList.contains('modo_transparente')) {
    btnTema2.textContent = ' OPACO (: ';
    imagen1.src = 'img/imagen1-1.jpg';
    imagen2.src = 'img/imagen2-1.jpg';
    imagen3.src = 'img/imagen3-1.jpg';
    imagen4.src = 'img/imagen1-1.jpg';
    imagen5.src = 'img/imagen2-1.jpg';
    imagen6.src = 'img/imagen3-1.jpg';

  } else {
    btnTema2.textContent = ' TRANSPARENTE :) ';
    imagen1.src = 'img/imagen1.jpg';
    imagen2.src = 'img/imagen2.jpg';
    imagen3.src = 'img/imagen3.jpg';
    imagen4.src = 'img/imagen1.jpg';
    imagen5.src = 'img/imagen2.jpg';
    imagen6.src = 'img/imagen3.jpg';
  }
  console.log('Se aplico transparente:', body.classList.contains
    ('modo_transparente'));
});


// Función para validar el formulario
const form = document.getElementById('formulario');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const mensajeInput = document.getElementById('mensaje');
const celularInput = document.getElementById('cel');
const divrespuesta = document.getElementById('respuesta');

form.addEventListener('submit', (event) => {

    event.preventDefault();
    divrespuesta.innerHTML = '';
    const errores = [];
    // Validar nombre
    if (nombreInput.value.trim() === '') {
        errores.push('El campo nombre es obligatorio.');
    }
    // Validar email
    if (emailInput.value.trim() === '') {

        errores.push('El campo email es obligatorio.');

    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        errores.push('El campo email no es válido.');
    }
    // Validar mensaje
    if (mensajeInput.value.trim() === '') {
        errores.push('El campo mensaje es obligatorio.');
    }
    // Validar celular
    if (celularInput.value.trim() === '') {

        errores.push('El campo celular es obligatorio.');

    } else if (!/^\d{10}$/.test(celularInput.value)) {

        errores.push('El campo celular debe contener 10 dígitos.');

    }

    // Mostrar errores
    if (errores.length > 0) {

        divrespuesta.style.color = 'red';

        divrespuesta.innerHTML = errores.join('<br>');

    } else {

        // NO se envía el formulario
        divrespuesta.style.color = 'green';

        divrespuesta.innerHTML = 'Correo validado correctamente.';

    }

});



//////////////////////////////////////////////////////
//cambiar con hover 2
//////////////////////////////////////////////////////
// 1. Cambia a la nueva imagen al pasar el cursor por encima
imagen1.addEventListener('mouseenter', () => {
    imagen1.src = 'img/imagen1-1.jpg';
});

// 2. Regresa a la imagen original al quitar el cursor
imagen1.addEventListener('mouseleave', () => {
    imagen1.src = 'img/imagen1.jpg';
});




//////////////////////////////////////////////////////
// Función para cambiar la imagen con un efecto de desvanecimiento 3
//////////////////////////////////////////////////////
function cambiarConEfecto(nuevaSrc) {
    // 1. Añadimos la clase para que se desvanezca (fade-out)
    imagen2.classList.add('oculto');
    
    // 2. Esperamos a que termine la animación (0.3s = 300ms) para cambiar la ruta
    setTimeout(() => {
        imagen2.src = nuevaSrc;
        // 3. Quitamos la clase para que vuelva a aparecer (fade-in)
        imagen2.classList.remove('oculto');
    }, 300); 
}

// Eventos Hover
imagen2.addEventListener('mouseenter', () => cambiarConEfecto('img/imagen2-1.jpg'));
imagen2.addEventListener('mouseleave', () => cambiarConEfecto('img/imagen2.jpg'));


//////////////////////////////////////////////////////
// Función para cambiar la imagen con un efecto de desvanecimiento 4
//////////////////////////////////////////////////////


// Aplica una transición directamente al estilo del elemento
imagen3.style.transition = 'filter 0.3s ease';

imagen3.addEventListener('mouseenter', () => {
    // Convierte la imagen a blanco y negro y la desenfoca un poco
    imagen3.style.filter = 'grayscale(100%) blur(2px)';
});

imagen3.addEventListener('mouseleave', () => {
    // Devuelve la imagen a su estado original
    imagen3.style.filter = 'grayscale(0%) blur(0px)';
});


//////////////////////////////////////////////////
//efecto zoom
/////////////////////////////////////////////////


// Al pasar el cursor: cambia la imagen y aplica zoom (escala 1.2 = 20% más grande)
imagen4.addEventListener('mouseenter', () => {
    imagen4.src = 'img/imagen1-1.jpg';
    imagen4.style.transform = 'scale(1.1)';
});

// Al quitar el cursor: regresa a la imagen original y tamaño normal
imagen4.addEventListener('mouseleave', () => {
    imagen4.src = 'img/imagen1.jpg';
    imagen4.style.transform = 'scale(1)';
});



//////////////////////////////////////////
//gb b
/////////////////////////////////////////


// Al pasar el cursor: cambia la imagen y rota 15 grados
imagen5.addEventListener('mouseenter', () => {
    imagen5.src = 'img/imagen2-1.jpg';
    imagen5.style.transform = 'rotate(15deg)';
});

// Al quitar el cursor: regresa a la imagen original y endereza la posición
imagen5.addEventListener('mouseleave', () => {
    imagen5.src = 'img/imagen2.jpg';
    imagen5.style.transform = 'rotate(0deg)';
});



