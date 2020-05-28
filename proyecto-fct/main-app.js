document.addEventListener('DOMContentLoaded', () => {


// Trabajadores

let trabajadores = 4;
let trabajadoresTotales = 4;
document.getElementById("workCant").innerHTML = trabajadores;

let poblacion = 6;
document.getElementById("poblacion").innerHTML = poblacion;

let puntosInvestigacion = 0;
document.getElementById("image-inv-blue").innerHTML = puntosInvestigacion;




//


document.getElementById("cajaherramientas").addEventListener('click', function(){
    abrirFabrica(0);
});

document.getElementById("cajatelar").addEventListener('click', function(){
    abrirFabrica(1);
});


function abrirFabrica (numero) {
    if (document.getElementById(`content${numero}`).style.display == "block") {

        document.getElementById(`triangle-open${numero}`).style.display = "none";
        document.getElementById(`triangle-closed${numero}`).style.display = "inline-block";
        document.getElementById(`content${numero}`).style.display = "none";
        

    }
    else {
        document.getElementById(`triangle-closed${numero}`).style.display = "none";
        document.getElementById(`triangle-open${numero}`).style.display = "inline-block";
        document.getElementById(`content${numero}`).style.display = "block";

    }
}











// Produccion


let produccion = [0,0,0,0,0,0,0,0,0,0];
//Madera, Piedra, Arcilla, Comida, Tools1, Arch1, Pesca, ToolPesca, Carbon, Ladrillos

document.getElementById("image0").innerHTML = produccion[0];
document.getElementById("image1").innerHTML = produccion[1];
document.getElementById("image2").innerHTML = produccion[2];
document.getElementById("image3").innerHTML = produccion[3];
document.getElementById("image4").innerHTML = produccion[4];
document.getElementById("image5").innerHTML = produccion[5];
document.getElementById("image6").innerHTML = produccion[6];
document.getElementById("image7").innerHTML = produccion[7];



document.getElementById("triangle-left-0").addEventListener('click', function(){
    disminuirRecurso(0);
});
document.getElementById("triangle-right-0").addEventListener('click', function(){
    aumentarRecurso(0);
});


document.getElementById("triangle-left-1").addEventListener('click', function(){
    disminuirRecurso(1);
});
document.getElementById("triangle-right-1").addEventListener('click', function(){
    aumentarRecurso(1);
});


document.getElementById("triangle-left-2").addEventListener('click', function(){
    disminuirRecurso(2);
});
document.getElementById("triangle-right-2").addEventListener('click', function(){
    aumentarRecurso(2);
});


document.getElementById("triangle-left-3").addEventListener('click', function(){
    disminuirRecurso(3);
});
document.getElementById("triangle-right-3").addEventListener('click', function(){
    aumentarRecurso(3);
});


document.getElementById("triangle-left-tools1").addEventListener('click', function(){
    disminuirRecurso(4);
});
document.getElementById("triangle-right-tools1").addEventListener('click', function(){
    aumentarRecurso(4);
});


document.getElementById("triangle-left-arch1").addEventListener('click', function(){
    disminuirRecurso(5);
});
document.getElementById("triangle-right-arch1").addEventListener('click', function(){
    aumentarRecurso(5);
});


document.getElementById("triangle-left-pesca").addEventListener('click', function(){
    disminuirRecurso(6);
});
document.getElementById("triangle-right-pesca").addEventListener('click', function(){
    aumentarRecurso(6);
});


document.getElementById("triangle-left-toolpesca").addEventListener('click', function(){
    disminuirRecurso(7);
});
document.getElementById("triangle-right-toolpesca").addEventListener('click', function(){
    aumentarRecurso(7);
});


document.getElementById("triangle-left-carbon").addEventListener('click', function(){
    disminuirRecurso(8);
});
document.getElementById("triangle-right-carbon").addEventListener('click', function(){
    aumentarRecurso(8);
});


document.getElementById("triangle-left-ladrillo").addEventListener('click', function(){
    disminuirRecurso(9);
});
document.getElementById("triangle-right-ladrillo").addEventListener('click', function(){
    aumentarRecurso(9);
});


function disminuirRecurso(x) {
    if (produccion[x] != 0){
        produccion[x] = produccion[x] - 1;
        document.getElementById(`image${[x]}`).innerHTML = produccion[x];

        trabajadores = trabajadores + 1;
        document.getElementById("workCant").innerHTML = trabajadores;

    }

}

function aumentarRecurso(y) {
    if (trabajadores != 0) {
        produccion[y] = produccion[y] + 1;
        console.log(`image${y}`);
        document.getElementById(`image${y}`).innerHTML = produccion[y];

        trabajadores = trabajadores - 1;
        document.getElementById("workCant").innerHTML = trabajadores;

    }

}




// Logros, Objetivos, Hitos, esas cosas que requieres para completar el juego


// Map Logros -> ID y Nombre

let logrosID = new Map();
logrosID.set(0,"El Comienzo");                  // Construye una choza
logrosID.set(1,"Cuidado con las astillas");     // 100 Madera
logrosID.set(2,"La buena cantera");             // 100 Piedra
logrosID.set(3,"Cocinando el futuro");          // Cocina un Ladrillo
logrosID.set(4,"La edad del Hierro");           // Fabrica un Lingote de Hierro
logrosID.set(5,"Población en aumento");         // 20 Población
logrosID.set(6,"Dieta balanceada");             // Investiga todas las comidas
logrosID.set(7,"Hora imperial");                // Fabrica Acero Imperial y Tela Imperial
logrosID.set(8,"Día del Trabajo");              // 10 Trabajadores
logrosID.set(9,"Cocinando el futuro");          // Fabrica 15 Ropajes
logrosID.set(10,"Cientifico");                  // Adquiere todas las investigaciones
logrosID.set(11,"Nuestro imperio");             // Construye el Castillo
logrosID.set(12,"Maestro pescador");            // 200 Pescados
logrosID.set(13,"Cocinando el futuro");         // Fabrica todas las recetas agricolas
logrosID.set(14,"Pueblo feliz");                // 50% Felicidad
logrosID.set(14,"Pueblo radiante");             // 100% Felicidad



// Map Logros -> Conseguido o no

let logrosAdquiridos = new Map();
logrosAdquiridos.set(0,0);
logrosAdquiridos.set(1,0);
logrosAdquiridos.set(2,0);
logrosAdquiridos.set(3,0);



// Aplicar Produccion y Avanzar Tiempo

// Tiempo
let mes = 1;
let year = 1;
document.getElementById("tiempo").innerHTML = "Año " + year + " Mes " + mes;


// Produccion
let cantMadera = 0;
document.getElementById("cantMadera").innerHTML = cantMadera;

let cantPiedra = 0;
document.getElementById("cantPiedra").innerHTML = cantPiedra;

let cantArcilla = 0;
document.getElementById("cantArcilla").innerHTML = cantArcilla;

let cantCarbon = 0;
document.getElementById("cantCarbon").innerHTML = cantCarbon;

let cantLadrillo = 0;
document.getElementById("cantLadrillo").innerHTML = cantLadrillo;

let cantHierro = 0;
document.getElementById("cantHierro").innerHTML = cantHierro;

let cantAcero = 0;
document.getElementById("cantAcero").innerHTML = cantAcero;

let cantAceroImp = 0;
document.getElementById("cantAceroImp").innerHTML = cantAceroImp;

let cantComida = 10;
document.getElementById("cantComida").innerHTML = cantComida;

let cantPesca = 0;
document.getElementById("cantPesca").innerHTML = cantPesca;

let cantCaza = 0;
document.getElementById("cantCaza").innerHTML = cantCaza;

let cantAgricultura = 0;
document.getElementById("cantAgricultura").innerHTML = cantAgricultura;

let cantComidaTotal = cantComida + cantPesca;
document.getElementById("cantComidaTotal").innerHTML = cantComidaTotal;

let cantTools1 = 0;
document.getElementById("cantTools1").innerHTML = cantTools1;

let cantTools2 = 0;
document.getElementById("cantTools2").innerHTML = cantTools2;

let cantTools3 = 0;
document.getElementById("cantTools3").innerHTML = cantTools3;

let cantTools4 = 0;
document.getElementById("cantTools4").innerHTML = cantTools4;

let cantArch1 = 0;
document.getElementById("cantArch1").innerHTML = cantArch1;

let cantArch2 = 0;
document.getElementById("cantArch2").innerHTML = cantArch2;

let cantCastillo = 0;
document.getElementById("cantCastillo").innerHTML = cantCastillo;

let cantTaller = 0;
document.getElementById("cantTaller").innerHTML = cantTaller;

let cantToolPesca = 0;
document.getElementById("cantToolPesca").innerHTML = cantToolPesca;

let cantToolCaza = 0;
document.getElementById("cantToolCaza").innerHTML = cantToolCaza;

let cantRopa = 0;
document.getElementById("cantRopa").innerHTML = cantRopa;

let cantRopaImp = 0;
document.getElementById("cantRopaImp").innerHTML = cantRopaImp;





// Repartir Comida

let cantAsignedFood = 0;
let asignedFood = [0,0,0,0];
// Comida, Pescado

document.getElementById("cantidad-asignar0").innerHTML = asignedFood[0];
document.getElementById("cantidad-asignar1").innerHTML = asignedFood[1];


document.getElementById("less-asignar0").addEventListener('click', function(){
    removeFood(0);
});
document.getElementById("more-asignar0").addEventListener('click', function(){
    addFood(0);
});


document.getElementById("less-asignar1").addEventListener('click', function(){
    removeFood(1);
});
document.getElementById("more-asignar1").addEventListener('click', function(){
    addFood(1);
});


function removeFood(valorFood) {
    if (asignedFood[valorFood] != 0) {
        asignedFood[valorFood] = asignedFood[valorFood] - 1;
        document.getElementById(`cantidad-asignar${valorFood}`).textContent = asignedFood[valorFood];

        cantAsignedFood = cantAsignedFood - 1;

    }
}

function addFood(valorFood) {
    if (cantComidaTotal > 0 && cantAsignedFood < poblacion) {
        asignedFood[valorFood] = asignedFood[valorFood] + 1;
        document.getElementById(`cantidad-asignar${valorFood}`).textContent = asignedFood[valorFood];

        cantAsignedFood = cantAsignedFood + 1; 
    }
}



// Añadir Herramientas

let cantAsignedTools1 = 0;
let asignedTool1 = [0,0,0,0,0,0,0,0,0,0,0];
// Madera, Piedra, Arcilla

document.getElementById("cantidadTool-asignar0").innerHTML = asignedTool1[0];
document.getElementById("cantidadTool-asignar1").innerHTML = asignedTool1[1];
document.getElementById("cantidadTool-asignar2").innerHTML = asignedTool1[2];


document.getElementById("lessTool-asignar0").addEventListener('click', function(){
    removeTool(0);
});
document.getElementById("moreTool-asignar0").addEventListener('click', function(){
    addTool(0);
});


document.getElementById("lessTool-asignar1").addEventListener('click', function(){
    removeTool(1);
});
document.getElementById("moreTool-asignar1").addEventListener('click', function(){
    addTool(1);
});


document.getElementById("lessTool-asignar2").addEventListener('click', function(){
    removeTool(2);
});
document.getElementById("moreTool-asignar2").addEventListener('click', function(){
    addTool(2);
});


function removeTool(valorTool) {
    if (asignedTool1[valorTool] != 0) {
        asignedTool1[valorTool] = asignedTool1[valorTool] - 1;
        document.getElementById(`cantidadTool-asignar${valorTool}`).textContent = asignedTool1[valorTool];

        cantAsignedTools1 = cantAsignedTools1 - 1;
        cantTools1 = cantTools1 + 1;
        document.getElementById("cantTools1").innerHTML = cantTools1;
    }
}

function addTool(valorTool) {
    if (cantTools1 != 0 && cantAsignedTools1 < trabajadoresTotales) {
        asignedTool1[valorTool] = asignedTool1[valorTool] + 1;
        document.getElementById(`cantidadTool-asignar${valorTool}`).textContent = asignedTool1[valorTool];

        cantAsignedTools1 = cantAsignedTools1 + 1;
        cantTools1 = cantTools1 - 1;
        document.getElementById("cantTools1").innerHTML = cantTools1;
    }
}









// Informacion
let elemP = document.createElement("p");
elemP.id = "daily";

let elemP2 = document.createElement("p");
elemP2.id = "mensaje";

let elemP3 = document.createElement("p");
elemP3.id = "mensaje";

let elemP4 = document.createElement("p");
elemP4.id = "mensaje";

let elemP5 = document.createElement("p");
elemP5.id = "mensaje";

let elemP6 = document.createElement("p");
elemP6.id = "mensajeRojo";

let elemP7 = document.createElement("p");
elemP7.id = "mensajeAzul";

let elemP8 = document.createElement("p");
elemP8.id = "mensaje";

let elemP9 = document.createElement("p");
elemP9.id = "mensaje";

let elemP10 = document.createElement("p");
elemP10.id = "mensaje";

let elemP11 = document.createElement("p");
elemP11.id = "mensaje";

let elemP12 = document.createElement("p");
elemP12.id = "mensaje";

let elemP13 = document.createElement("p");
elemP13.id = "mensaje";

let elemPInv = document.createElement("p");
elemPInv.id = "mensajeAzul";

let elemPLogro = document.createElement("p");
elemPLogro.id = "mensajeVerde";

let elemPNoComida = document.createElement("p");
elemPNoComida.id = "mensajeRojo";

let elemPError = document.createElement("p");
elemPError.id = "mensajeRojo";



// Activar
document.getElementById("avanzar-mes").onclick = aplicarProduccion;

function aplicarProduccion() {

    elemP2.remove();
    elemP3.remove();
    elemP4.remove();
    elemP5.remove();
    elemP6.remove();
    elemP7.remove();
    elemP8.remove();
    elemP9.remove();
    elemP10.remove();
    elemP11.remove();
    elemP12.remove();
    elemP13.remove();
    elemPInv.remove();
    elemPLogro.remove();
    elemPNoComida.remove();
    elemPError.remove();

    let permiso1 = true;

    // Herramientas 1
    if (cantMadera >= 1 && produccion[4] >= 1) {     
        if (cantPiedra >= 1) {
            cantTools1 = cantTools1 + produccion[4];
            cantMadera = cantMadera - produccion[4];
            cantPiedra = cantPiedra - produccion[4];

            document.getElementById("cantMadera").innerHTML = cantMadera;
            document.getElementById("cantPiedra").innerHTML = cantPiedra;
            document.getElementById("cantTools1").innerHTML = cantTools1;

        }
        else
        if (cantPiedra == 0 && produccion[4] >= 1) {
            permiso1 = false;
            mensajeError = "No tienes suficiente piedra para crear Herramientas Básicas";

        }
    } 
    else
    if (cantMadera == 0 && produccion[4] >= 1) {
        permiso1 = false;
        mensajeError = "No tienes suficiente madera para crear Herramientas Básicas";
    }

    // Arquitectura 1
    if (cantMadera >= 4 && produccion[5] >= 1){
        if (cantPiedra >= 2) {
            cantArch1 = cantArch1 + produccion[5];
            cantMadera = cantMadera - (produccion[5]*4);
            cantPiedra = cantPiedra - produccion[5]*2;

            document.getElementById("cantMadera").innerHTML = cantMadera;
            document.getElementById("cantPiedra").innerHTML = cantPiedra;
            document.getElementById("cantArch1").innerHTML = cantArch1;

        }       
        else
        if (cantPiedra == 0 && produccion[5] >= 1) {
            permiso1 = false;
            mensajeError = "No tienes suficiente piedra para crear Choza";
        }

    } 
    else
    if (cantMadera == 0 && produccion[5] >= 1) {
        permiso1 = false;
        mensajeError = "No tienes suficiente madera para crear Choza";
    }

    // Cañas Pesca
    if (cantMadera >= 2 && produccion[7] >= 1){
        cantToolPesca = cantToolPesca + produccion[7];
        cantMadera = cantMadera - (produccion[7]*2);

        document.getElementById("cantMadera").innerHTML = cantMadera;
        document.getElementById("cantToolPesca").innerHTML = cantToolPesca;

    } 
    else
    if (cantMadera == 0 && produccion[7] >= 1) {
        permiso1 = false;
        mensajeError = "No tienes suficiente madera para crear Caña de Pescar";
    }

    // Pescado
    if (cantToolPesca < produccion[6] >= 1) {
        permiso1 = false;
        mensajeError = "No dispones de suficientes Cañas de Pescar";
    }
    else
    if (cantToolPesca >= 1 && produccion[6] >= 1){
        cantPesca = cantPesca + produccion[6]*2;

        document.getElementById("cantPesca").innerHTML = cantPesca;
    }

    // Ladrillos
    if (cantArcilla >= 2 && produccion[9] >= 1) {     
        if (cantCarbon >= 1) {
            cantLadrillo = cantLadrillo + produccion[9];
            cantArcilla = cantArcilla - produccion[9]*2;
            cantCarbon = cantCarbon - produccion[9];

            document.getElementById("cantArcilla").innerHTML = cantArcilla;
            document.getElementById("cantCarbon").innerHTML = cantCarbon;
            document.getElementById("cantLadrillo").innerHTML = cantLadrillo;

        }
        else
        if (cantCarbon == 0 && produccion[9] >= 1) {
            permiso1 = false;
            mensajeError = "No tienes suficiente carbon para crear Ladrillos";

        }
    } 
    else
    if (cantArcilla == 0 && produccion[9] >= 1) {
        permiso1 = false;
        mensajeError = "No tienes suficiente arcilla para crear Ladrillos";
    }

    
    // El jugador cumple el requisito
    if (permiso1 == true) {

        elemP.remove();


        let sobreproduccion = 0;

        cantMadera = cantMadera + (produccion[0]*2);
        if (produccion[0] >= 1){
            for (let i=0; i<asignedTool1[0]; i++) {
                cantMadera = cantMadera + 0.5;
            }

            if (asignedTool1[0] > produccion[0]) {
                console.log(sobreproduccion);
                sobreproduccion = asignedTool1[0] - produccion[0];
                cantMadera = cantMadera - (0.5*sobreproduccion);
            }  
        }
        document.getElementById("cantMadera").innerHTML = cantMadera;


        cantPiedra = cantPiedra + (produccion[1]);
        if (produccion[1] >= 1){
            for (let i=0; i<asignedTool1[1]; i++) {
                cantPiedra = cantPiedra + 0.25;
            }

            if (asignedTool1[1] > produccion[1]) {
                console.log(sobreproduccion);
                sobreproduccion = asignedTool1[1] - produccion[1];
                cantPiedra = cantPiedra - (0.25*sobreproduccion);
            } 
        }    
        document.getElementById("cantPiedra").innerHTML = cantPiedra;


        cantArcilla = cantArcilla + (produccion[2]);
        if (produccion[2] >= 1){
            for (let i=0; i<asignedTool1[2]; i++) {
                cantArcilla = cantArcilla + 0.25;
            }

            if (asignedTool1[2] > produccion[2]) {
                console.log(sobreproduccion);
                sobreproduccion = asignedTool1[2] - produccion[2];
                cantArcilla = cantArcilla - (0.25*sobreproduccion);
            } 
        }    
        document.getElementById("cantArcilla").innerHTML = cantArcilla;


        cantCarbon = cantCarbon + (produccion[8]);
        document.getElementById("cantCarbon").innerHTML = cantCarbon;


        cantComida = cantComida + (produccion[3]*3);
        document.getElementById("cantComida").innerHTML = cantComida;


        puntosInvestigacion = puntosInvestigacion + investigadores;
        document.getElementById("image-inv-blue").innerHTML = puntosInvestigacion;



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

        elemP.textContent = "Año " + year + " Mes " + mes;
        document.getElementById("info").insertAdjacentElement("beforeend",elemP);


        let comida0 = parseInt(document.getElementById('cantidad-asignar0').textContent);
        let comida1 = parseInt(document.getElementById('cantidad-asignar1').textContent);

        let cantComidaInfo = comida0 + comida1;
        let poblacionSinComida = poblacion - cantComidaInfo;

        cantComida = cantComida - comida0;
        cantPesca = cantPesca - comida1;
        cantComidaTotal = cantComida + cantPesca;

        document.getElementById("cantComida").innerHTML = cantComida;
        document.getElementById("cantPesca").innerHTML = cantPesca;
        document.getElementById("cantComidaTotal").innerHTML = cantComidaTotal;



        elemP6.textContent = "Tu población ha consumido " + cantComidaInfo + " de comida";
        document.getElementById("info").insertAdjacentElement("beforeend",elemP6);

        if (poblacionSinComida != 0) {
            elemPNoComida.textContent = poblacionSinComida + " personas no han comido...";
            document.getElementById("info").insertAdjacentElement("beforeend",elemPNoComida);
        }

        if (produccion[0] != 0) {
            elemP2.textContent = "Has generado " + produccion[0]*2 + " de madera";
            document.getElementById("info").insertAdjacentElement("beforeend",elemP2);
        }

        if (produccion[1] != 0) {
            elemP3.textContent = "Has generado " + produccion[1] + " de piedra";
            document.getElementById("info").insertAdjacentElement("beforeend",elemP3);
        }

        if (produccion[2] != 0) {
            elemP4.textContent = "Has generado " + produccion[2] + " de arcilla";
            document.getElementById("info").insertAdjacentElement("beforeend",elemP4);
        }

        if (produccion[3] != 0) {
            elemP5.textContent = "Has generado " + produccion[3]*3 + " de comida varia";
            document.getElementById("info").insertAdjacentElement("beforeend",elemP5);
        }

        if (investigadores != 0) {
            elemP7.textContent = "Has generado " + puntosInvestigacion + " puntos de investigación";
            document.getElementById("info").insertAdjacentElement("beforeend",elemP7);
        }

        if (produccion[4] != 0 && permiso1 == true) {
            elemP8.textContent = "Has fabricado " + produccion[4] + " herramientas básicas";
            document.getElementById("info").insertAdjacentElement("beforeend",elemP8);
        }

        if (produccion[5] != 0) {
            elemP9.textContent = "Has construido " + produccion[5] + " chozas";
            document.getElementById("info").insertAdjacentElement("beforeend",elemP9);
        }

        if (produccion[6] != 0) {
            elemP10.textContent = "Has pescado " + produccion[6] + " pescados";
            document.getElementById("info").insertAdjacentElement("beforeend",elemP10);
        }

        if (produccion[7] != 0) {
            elemP11.textContent = "Has fabricado " + produccion[7] + " cañas de pescar";
            document.getElementById("info").insertAdjacentElement("beforeend",elemP11);
        }

        if (produccion[8] != 0) {
            elemP12.textContent = "Has generado " + produccion[8] + " de carbón";
            document.getElementById("info").insertAdjacentElement("beforeend",elemP12);
        }

        if (produccion[9] != 0) {
            elemP13.textContent = "Has fabricado " + produccion[9] + " ladrillos";
            document.getElementById("info").insertAdjacentElement("beforeend",elemP13);
        }
   
    }

    // Si el jugador no cumple un requisito
    else
    if (permiso1 == false) {
        elemPError.textContent = mensajeError;
        document.getElementById("info").insertAdjacentElement("beforeend",elemPError);
    }



    // Completar los logros

    // Logro ID 0
    if (cantArch1 >= 1 && logrosAdquiridos.get(0) == 0) {
        elemPLogro.textContent = "Has completado el logro: " + `${logrosID.get(0)}`;
        document.getElementById("info").insertAdjacentElement("beforeend",elemPLogro);

        document.getElementById("logro-adquirido-0").style.background = "limegreen";
        logrosAdquiridos.set(0,1);

    }

    // Logro ID 1
    if (cantMadera >= 100 && logrosAdquiridos.get(1) == 0) {
        elemPLogro.textContent = "Has completado el logro: " + `${logrosID.get(1)}`;
        document.getElementById("info").insertAdjacentElement("beforeend",elemPLogro);

        document.getElementById("logro-adquirido-1").style.background = "limegreen";
        logrosAdquiridos.set(1,1);
    }

    // Logro ID 2
    if (cantPiedra >= 100 && logrosAdquiridos.get(2) == 0) {
        elemPLogro.textContent = "Has completado el logro: " + `${logrosID.get(2)}`;
        document.getElementById("info").insertAdjacentElement("beforeend",elemPLogro);

        document.getElementById("logro-adquirido-2").style.background = "limegreen";
        logrosAdquiridos.set(2,1);
    }

    // Logro ID 3
    if (cantLadrillo >= 1 && logrosAdquiridos.get(3) == 0) {
        elemPLogro.textContent = "Has completado el logro: " + `${logrosID.get(3)}`;
        document.getElementById("info").insertAdjacentElement("beforeend",elemPLogro);

        document.getElementById("logro-adquirido-3").style.background = "limegreen";
        logrosAdquiridos.set(3,1);
    }


}




// Investigacion


let investigadores = 0;

document.getElementById("image").innerHTML = investigadores;


document.getElementById("triangle-left-inv").addEventListener('click', function(){
    disminuirInvestigadores();
});
document.getElementById("triangle-right-inv").addEventListener('click', function(){
    aumentarInvestigadores();
});



function disminuirInvestigadores() {
    if (investigadores != 0){
        investigadores = investigadores - 1;
        document.getElementById("image").innerHTML = investigadores;

        trabajadores = trabajadores + 1;
        document.getElementById("workCant").innerHTML = trabajadores;

    }

}

function aumentarInvestigadores() {
    if (trabajadores != 0) {
        console.log("funciona");
        investigadores = investigadores + 1;
        document.getElementById("image").innerHTML = investigadores;

        trabajadores = trabajadores - 1;
        document.getElementById("workCant").innerHTML = trabajadores;

    }

}


// Map -> ID y nombre investigacion

let investigaciones = new Map();
investigaciones.set('tools1','Herramientas Artesanales');
investigaciones.set('arch1','Arquitectura Básica');
investigaciones.set('pesca','Pesca');
investigaciones.set('carbon','Carbón y Ladrillos');
investigaciones.set('hierro','Minería de Hierro');
investigaciones.set('acero','Fabricación de Acero');
investigaciones.set('aceroImp','Fabricación de Acero Imperial');
investigaciones.set('cuero','Cuero y Ropajes Básicos');
investigaciones.set('telaImp','Tela Imperial y Ropajes Avanzados');
investigaciones.set('arch2','Arquitectura Avanzada');
investigaciones.set('tools2','Herramientas de Hierro');
investigaciones.set('tools3','Herramientas de Acero');
investigaciones.set('tools4','Herramientas de Acero Imperial');
investigaciones.set('taller','Talleres');
investigaciones.set('castillo','Castillo y Murallas');
investigaciones.set('caza','Caza');
investigaciones.set('agricultura','Agricultura');


// Map -> Comprobar si ha sido adquirida la investigacion

let invAdquirida = new Map();
invAdquirida.set('tools1',1);
invAdquirida.set('arch1',1);
invAdquirida.set('pesca',1);
invAdquirida.set('carbon',1);
invAdquirida.set('hierro',1);
invAdquirida.set('acero',1);
invAdquirida.set('aceroImp',1);
invAdquirida.set('cuero',1);
invAdquirida.set('telaImp',1);
invAdquirida.set('arch2',1);
invAdquirida.set('tools2',1);
invAdquirida.set('tools3',1);
invAdquirida.set('tools4',1);
invAdquirida.set('taller',1);
invAdquirida.set('castillo',1);
invAdquirida.set('caza',1);
invAdquirida.set('agricultura',1);




document.getElementById("research-1").addEventListener('click', function(){
    realizarInvestigacionPoints5('tools1');
});

document.getElementById("research-2").addEventListener('click', function(){
    realizarInvestigacionPoints5('arch1');
});

document.getElementById("research-3").addEventListener('click', function(){
    realizarInvestigacionPoints8('pesca');
});

document.getElementById("research-4").addEventListener('click', function(){
    realizarInvestigacionPoints8('carbon');
});

document.getElementById("research-15").addEventListener('click', function(){
    realizarInvestigacionPoints10('hierro');
});

document.getElementById("research-16").addEventListener('click', function(){
    realizarInvestigacionPoints12('acero');
});

document.getElementById("research-17").addEventListener('click', function(){
    realizarInvestigacionPoints20('aceroImp');
});

document.getElementById("research-11").addEventListener('click', function(){
    realizarInvestigacionPoints10('cuero');
});

document.getElementById("research-12").addEventListener('click', function(){
    realizarInvestigacionPoints15('telaImp');
});

document.getElementById("research-8").addEventListener('click', function(){
    realizarInvestigacionPoints12('arch2');
});

document.getElementById("research-5").addEventListener('click', function(){
    realizarInvestigacionPoints10('tools2');
});

document.getElementById("research-6").addEventListener('click', function(){
    realizarInvestigacionPoints15('tools3');
});

document.getElementById("research-7").addEventListener('click', function(){
    realizarInvestigacionPoints20('tools4');
});

document.getElementById("research-9").addEventListener('click', function(){
    realizarInvestigacionPoints12('taller');
});

document.getElementById("research-10").addEventListener('click', function(){
    realizarInvestigacionPoints25('castillo');
});

document.getElementById("research-13").addEventListener('click', function(){
    realizarInvestigacionPoints8('caza');
});

document.getElementById("research-14").addEventListener('click', function(){
    realizarInvestigacionPoints15('agricultura');
});


function realizarInvestigacionPoints5(valorInv) {
    if (puntosInvestigacion >= 5) {

        if (invAdquirida.get(valorInv) == 1) {
            elemPInv.textContent = "Has investigado con éxito: " + `${investigaciones.get(valorInv)}`;
            document.getElementById("info").insertAdjacentElement("beforeend",elemPInv);

            puntosInvestigacion = puntosInvestigacion - 5;
            document.getElementById("image-inv-blue").innerHTML = puntosInvestigacion;

            invAdquirida.set(valorInv,0);

            document.getElementById(`caja${[valorInv]}`).style.display = "inline";
            document.getElementById(`recurso-${[valorInv]}`).style.display = "inline";

            let modal = document.getElementById("myModal");
            let span = document.getElementsByClassName("close")[0];

            modal.style.display = "block";

            span.onclick = function() {
                modal.style.display = "none";
            }


            if (valorInv == "tools1") {
                document.getElementById(`caja-inv-1`).style.display = "none";

                document.getElementById(`modal-title`).textContent = "Tutorial";
                document.getElementById(`modal-text`).innerHTML = 
                'Has desbloqueado las Herramientas Básicas.<br /> <br />' +
                'Estas te ayudaran a producir más recursos de un tipo. Se asigna automaticamente una herramienta a cada trabajador asi que intenta tener un número equivalente para maximizar la eficiencia.<br /> <br />' +
                'En la pestaña de Asignar podrás decidir a que recurso quieres dedicar un número de herramientas si dispones de un número limitado.';
            }

            if (valorInv == "arch1") {
                document.getElementById(`caja-inv-2`).style.display = "none";
                document.getElementById(`caja-inv-10`).style.display = "inline";
                document.getElementById(`caja-inv-11`).style.display = "inline";
            }


        } 
        else {
            elemPInv.textContent = "Ya has descubierto esta investigación";
            document.getElementById("info").insertAdjacentElement("beforeend",elemPInv);
        }
    }  
}


function realizarInvestigacionPoints8(valorInv) {
    if (puntosInvestigacion >= 8) {

        if (invAdquirida.get(valorInv) == 1) {
            elemPInv.textContent = "Has investigado con éxito: " + `${investigaciones.get(valorInv)}`;
            document.getElementById("info").insertAdjacentElement("beforeend",elemPInv);

            puntosInvestigacion = puntosInvestigacion - 8;
            document.getElementById("image-inv-blue").innerHTML = puntosInvestigacion;

            invAdquirida.set(valorInv,0);

            document.getElementById(`caja${[valorInv]}`).style.display = "inline";
            document.getElementById(`recurso-${[valorInv]}`).style.display = "inline";

            if (valorInv == "pesca") {
                document.getElementById(`cajatoolpesca`).style.display = "inline";
                document.getElementById(`recurso-toolPesca`).style.display = "inline";

                document.getElementById(`caja-inv-3`).style.display = "none";
                document.getElementById(`caja-inv-9`).style.display = "inline";

                document.getElementById(`comida-asignar-hidden`).style.display = "inline";
            }
            
            if (valorInv == "carbon") {
                document.getElementById(`cajaladrillo`).style.display = "inline";
                document.getElementById(`recurso-ladrillo`).style.display = "inline";

                document.getElementById(`caja-inv-4`).style.display = "none";
                document.getElementById(`caja-inv-6`).style.display = "inline";
            }

            if (valorInv == "caza") {
                document.getElementById(`cajatoolcaza`).style.display = "inline";
                document.getElementById(`recurso-toolCaza`).style.display = "inline";

                document.getElementById(`caja-inv-9`).style.display = "none";
                document.getElementById(`caja-inv-14`).style.display = "inline";
            }
        }     
    }  
}


function realizarInvestigacionPoints10(valorInv) {
    if (puntosInvestigacion >= 10) {

        if (invAdquirida.get(valorInv) == 1) {
            elemPInv.textContent = "Has investigado con éxito: " + `${investigaciones.get(valorInv)}`;
            document.getElementById("info").insertAdjacentElement("beforeend",elemPInv);

            puntosInvestigacion = puntosInvestigacion - 10;
            document.getElementById("image-inv-blue").innerHTML = puntosInvestigacion;

            invAdquirida.set(valorInv,0);

            document.getElementById(`caja${[valorInv]}`).style.display = "inline";
            document.getElementById(`recurso-${[valorInv]}`).style.display = "inline";

            if (valorInv == "cuero") {
                document.getElementById(`cajaropa`).style.display = "inline";
                document.getElementById(`recurso-ropa`).style.display = "inline";

                document.getElementById(`caja-inv-9`).style.display = "none";
                document.getElementById(`caja-inv-12`).style.display = "inline";
            }

            if (valorInv == "hierro") {
                document.getElementById(`caja-inv-6`).style.display = "none";
                document.getElementById(`caja-inv-8`).style.display = "inline";
                document.getElementById(`caja-inv-5`).style.display = "inline";

            }

            if (valorInv == "tools2") {
                document.getElementById(`cajatools2`).style.display = "inline";
                document.getElementById(`recurso-tools2`).style.display = "inline";

                document.getElementById(`caja-inv-5`).style.display = "none";
            }
        }     
    }  
}


function realizarInvestigacionPoints12(valorInv) {
    if (puntosInvestigacion >= 12) {

        if (invAdquirida.get(valorInv) == 1) {
            elemPInv.textContent = "Has investigado con éxito: " + `${investigaciones.get(valorInv)}`;
            document.getElementById("info").insertAdjacentElement("beforeend",elemPInv);

            puntosInvestigacion = puntosInvestigacion - 12;
            document.getElementById("image-inv-blue").innerHTML = puntosInvestigacion;

            invAdquirida.set(valorInv,0);

            document.getElementById(`caja${[valorInv]}`).style.display = "inline";
            document.getElementById(`recurso-${[valorInv]}`).style.display = "inline";

            if (valorInv == "arch2") {
                document.getElementById(`caja-inv-10`).style.display = "none";
                document.getElementById(`caja-inv-17`).style.display = "inline";
            }

            if (valorInv == "taller") {
                document.getElementById(`caja-inv-11`).style.display = "none";
            }

            if (valorInv == "acero") {
                document.getElementById(`caja-inv-8`).style.display = "none";
                document.getElementById(`caja-inv-13`).style.display = "inline";
                document.getElementById(`caja-inv-15`).style.display = "inline";
            }
        }     
    }  
}


function realizarInvestigacionPoints15(valorInv) {
    if (puntosInvestigacion >= 15) {

        if (invAdquirida.get(valorInv) == 1) {
            elemPInv.textContent = "Has investigado con éxito: " + `${investigaciones.get(valorInv)}`;
            document.getElementById("info").insertAdjacentElement("beforeend",elemPInv);

            puntosInvestigacion = puntosInvestigacion - 15;
            document.getElementById("image-inv-blue").innerHTML = puntosInvestigacion;

            invAdquirida.set(valorInv,0);

            document.getElementById(`caja${[valorInv]}`).style.display = "inline";
            document.getElementById(`recurso-${[valorInv]}`).style.display = "inline";

            if (valorInv == "tools3") {
                document.getElementById(`caja-inv-15`).style.display = "none";
            }

            if (valorInv == "telaImp") {
                document.getElementById(`cajaropaImp`).style.display = "inline";
                document.getElementById(`recurso-ropaImp`).style.display = "inline";

                document.getElementById(`caja-inv-12`).style.display = "none";
            }

            if (valorInv == "agricultura") {
                document.getElementById(`caja-inv-14`).style.display = "none";
            }
        }     
    }  
}


function realizarInvestigacionPoints20(valorInv) {
    if (puntosInvestigacion >= 20) {

        if (invAdquirida.get(valorInv) == 1) {
            elemPInv.textContent = "Has investigado con éxito: " + `${investigaciones.get(valorInv)}`;
            document.getElementById("info").insertAdjacentElement("beforeend",elemPInv);

            puntosInvestigacion = puntosInvestigacion - 20;
            document.getElementById("image-inv-blue").innerHTML = puntosInvestigacion;

            invAdquirida.set(valorInv,0);

            document.getElementById(`caja${[valorInv]}`).style.display = "inline";
            document.getElementById(`recurso-${[valorInv]}`).style.display = "inline";

            if (valorInv == "aceroImp") {
                document.getElementById(`caja-inv-13`).style.display = "none";
                document.getElementById(`caja-inv-16`).style.display = "inline";
            }

            if (valorInv == "tools4") {
                document.getElementById(`caja-inv-16`).style.display = "none";
            }
        }     
    }  
}


function realizarInvestigacionPoints25(valorInv) {
    if (puntosInvestigacion >= 25) {

        if (invAdquirida.get(valorInv) == 1) {
            elemPInv.textContent = "Has investigado con éxito: " + `${investigaciones.get(valorInv)}`;
            document.getElementById("info").insertAdjacentElement("beforeend",elemPInv);

            puntosInvestigacion = puntosInvestigacion - 25;
            document.getElementById("image-inv-blue").innerHTML = puntosInvestigacion;

            invAdquirida.set(valorInv,0);

            document.getElementById(`caja${[valorInv]}`).style.display = "inline";
            document.getElementById(`recurso-${[valorInv]}`).style.display = "inline";

            if (valorInv == "castillo") {
                document.getElementById(`caja-inv-17`).style.display = "none";
            }
        }     
    }  
}












});


