//Función Onload 

window.onload = init;
function init() {
    botonEnvio = document.querySelector('[type="button"]');
    nuevaNota = document.querySelector('[type="text"]');
    listaNotas = document.getElementById("listaNotas");

    botonEnvio.addEventListener("click", anadir);
    
}

//Función Añadir

function anadir(e) {
    evento = e || window.event;
    if (nuevaNota.value == "") {
        evento.preventDefault();
    } else {
        var lista = document.createElement("li");
        lista.innerHTML = nuevaNota.value;
        lista.addEventListener("dblclick", eliminarLi);
        listaNotas.appendChild(lista);
        nuevaNota.value = "";
    }
}

// Función Eliminar 

function eliminarLi() {
    this.parentNode.removeChild(this);
}
