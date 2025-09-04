
const selectorColor = document.getElementById('selectorColor'); 
const muestraColor = document.querySelector('.muestra-color'); 
const codigoHex = document.getElementById('codigoHex'); 


selectorColor.addEventListener('input', (evento) => {
    const nuevoColor = evento.target.value;


    muestraColor.style.backgroundColor = nuevoColor;


    codigoHex.textContent = nuevoColor;
});

