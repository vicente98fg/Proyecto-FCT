document.addEventListener('DOMContentLoaded', () => {


// Avance del tiempo

let mes = 1;
let year = 1;

document.getElementById("tiempo").innerHTML = "Año " + year + " Mes " + mes;
document.getElementById("avanzar-mes").onclick = avanzarTiempo;

function avanzarTiempo() {
    if (mes < 12) {
        mes = mes + 1;
        document.getElementById("tiempo").innerHTML = "Año " + year + " Mes " + mes;
    } 

    else 
    if (mes == 12) {
        mes = 1;
        year = year + 1;
        document.getElementById("tiempo").innerHTML = "Año " + year + " Mes " + mes;
    }
}


let produccion = 0;

document.getElementById("triangle-left").onclick = disminuirRecurso;
document.getElementById("triangle-right").onclick = aumentarRecurso;


function disminuirRecurso() {
    if (produccion != 0){
    produccion = produccion - 1;
    document.getElementById("image").innerHTML = produccion;
    } 
}

function aumentarRecurso() {
    produccion = produccion + 1;
    document.getElementById("image").innerHTML = produccion;
}





});


