function sumar(numero1, numero2) { //numero 1 y 2 son parametros dentro de la funcion 
    console.log(numero1 + numero2);
}

sumar(10, 10); //argumentos o los valores reales
sumar(3, 5);
sumar(1, 10);



const sumar1 = function(numero1, numero2) {
    console.log(numero1 + numero2);
}
sumar1(60, 60);
sumar1(10, 60);
sumar1(90, 60);

//codigo por parametros por defaul si no se le pasa argumentos

function sumar2(n1 = 0, n2 = 0) { //numero 1 y 2 son parametros dentro de la funcion 
    console.log(n1 + n2);
}

sumar2(); //argumentos o los valores reales