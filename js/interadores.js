//for loop

for (let i = 0; i <= 10; i++) {
    console.log(i);
}
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(`el numero ${i} es par`)
    } else {
        console.log(`el numero ${i} es impar`)
    }
}
//
const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Telvisor 50 pulgadas', precio: 700 },
    { nombre: 'Tablet 10 pulgadas', precio: 300 },
    { nombre: 'audifonos', precio: 200 },
    { nombre: 'teclado', precio: 50 },
    { nombre: 'celular', precio: 500 },
    { nombre: 'bocinas', precio: 300 },
    { nombre: 'laptop', precio: 800 },

];
//interando la cadena del carrito de compras de los objetos con length
for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);

}

//while loop, evalua la condicon si se cumple para luego ejecutar el codico 
let n = 0; //indice o valor inicial

while (n <= 10) { //condicion 
    console.log(n);
    n++; //incremento
}

let j = 0; //indice o valor inicial

while (j <= 10) { //condicion 
    if (j % 2 === 0) {
        console.log(`Numero ${j}, es par`)
    } else {
        console.log(`numero ${j}, es impar`)
    }

    j++; //incremento
}

//do while loop, ejecuta una sola vez el codigo para luego evaluar la condicion 

let x = 0;

do {
    console.log(x);
    x++;
} while (x < 10);