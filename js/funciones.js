//funciones serie de procedimientos

//declaracion de funciones


function sumar() {
    console.log(10 + 10);
}

sumar()

//expresion de la funcion

const sumar2 = function() {
    console.log(3 + 3);
}

sumar2();

//IIFE

(function() {
    console.log('esto es una funcion');
})();

//declaracion de funciones

// en este caso puede llamar primero la funcion 

// sumar()

// function sumar() {
// console.log(10 + 10);
// }



//expresion de la funcion
// para esta expresin no se puede llamar la funcion debido que sale error 
// sumar2();
// const sumar2 = function() {
// console.log(3 + 3);
// }//

// se conoce com hosting