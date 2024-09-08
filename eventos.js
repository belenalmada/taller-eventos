document.addEventListener('DOMContentLoaded', (event) => {
    const miDiv = document.getElementById('miDiv');
    const boton = document.querySelector('button');
    
    miDiv.addEventListener('click', () => {
        alert('Hola! Soy el div');
    });
    
    boton.addEventListener('click', (event) => {
        event.stopPropagation();
        alert('Hola!');
    });
});
