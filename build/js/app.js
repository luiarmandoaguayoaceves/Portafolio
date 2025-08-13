function verificarTamañoVentana(){
    var tamañoVentana=window.innerWidth;
    if(tamañoVentana<=480){
        desplegarMenu.style.display="block";
    }else{
        desplegarMenu.style.display="none";
    }
}

if(typeof document!="undefined"){
document.addEventListener("DOMContentLoaded",()=>{
    navegador=document.querySelector("#nav");
    desplegarMenu=document.querySelector("#abrir");
    cerrarMenu=document.querySelector("#cerrar");
    seleccionMenu=document.querySelectorAll("a");

    desplegarMenu.addEventListener("click",()=>{
        navegador.classList.add("visible");
        desplegarMenu.style.display="none";
    });
    cerrarMenu.addEventListener("click",()=>{
        navegador.classList.remove("visible");
        desplegarMenu.style.display="block";
    });

    primerosCuatroEnlaces=Array.from(seleccionMenu).slice(0,4);
    seleccionMenu.forEach(seleccion=>{
        seleccion.addEventListener("click",()=>{
            navegador.classList.remove("visible");
            desplegarMenu.style.display="block";
        });
    });

    window.addEventListener("load",verificarTamañoVentana);
    window.addEventListener("resize",verificarTamañoVentana);
});
}

if(typeof module!="undefined"){
    module.exports={verificarTamañoVentana:verificarTamañoVentana};
}
//# sourceMappingURL=app.js.map
