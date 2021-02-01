//arreglo o arrays

const numero = [10, 20, 30, 40, 50];

console.table(numero);

const meses = new Array('enero', 'febrero', 'marzo', 'abril', 'mayo')
console.table(meses)

//acceder a los valores a los arreglos 

console.log(numero[4]);

//conocer la extencion de un arreglo

console.log(meses.length);


//numero por cada uno de los numeros interar. Se intera por cada uno de los elementos
numero.forEach(function(numero) {
    console.log(numero)
})

//agregar arreglo
//esta forma no es tan cumun

numero[5] = 60;
numero[6] = 70

console.table(numero)

//la forma mas comun de agregar arreglos

numero.push(80); //push se agregan los datos al final 
numero.push(90);
numero.push(100, 50, 56)
numero.unshift(-10, 20, -30); //unshift se agregan datos al inicio

console.table(numero);

//meses.pop(); //elimina el utlimo elemento 
//meses.shift(); //eliminba el primer elemento
//console.table(meses)

meses.splice(2, 1);
console.table(meses);

//rese operator o spread operator es mas recomendado

const nuevoArreglo = [...meses, 'junio'];
console.table(nuevoArreglo);

const nuevoArreglo1 = ['diciembre', ...meses];
console.table(nuevoArreglo1);