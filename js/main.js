
const selectorColor = document.getElementById('selectorColor'); // El input donde el usuario elige el color
const muestraColor = document.querySelector('.muestra-color'); // El div que mostrará el color
const codigoHex = document.getElementById('codigoHex'); // El párrafo donde se muestra el código hexadecimal


selectorColor.addEventListener('input', (evento) => {
    const nuevoColor = evento.target.value;


    muestraColor.style.backgroundColor = nuevoColor;


    codigoHex.textContent = nuevoColor;
});

