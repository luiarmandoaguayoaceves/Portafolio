
document.addEventListener('DOMContentLoaded', () => {

    navegador = document.querySelector('#nav');
    desplegarMenu = document.querySelector('#abrir');
    cerrarMenu = document.querySelector('#cerrar');

    desplegarMenu.addEventListener('click', () => {
        navegador.classList.add('visible');
        desplegarMenu.style.display = "none";

    })
    cerrarMenu.addEventListener('click', () => {
        navegador.classList.remove('visible');
        desplegarMenu.style.display = "block";
    })
    
    function verificarTamañoVentana() {
        var tamañoVentana = window.innerWidth;

        if (tamañoVentana <= 480) {
        desplegarMenu.style.display = "block";
        } else {
            desplegarMenu.style.display = "none";
        }
    }

    // Llama a la función al cargar la página y cuando se redimensiona la ventana
    window.addEventListener('load', verificarTamañoVentana);
    window.addEventListener('resize', verificarTamañoVentana);
})

