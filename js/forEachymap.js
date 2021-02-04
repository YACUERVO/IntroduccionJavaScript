//ForEach

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

carrito.forEach(function(producto) {
    console.log(producto)

})

carrito.forEach(function(producto) {
    console.log(producto.nombre) //para sacar el nombre del carrito de compras
})

//arrow funscion

carrito.forEach(producto => console.log(producto.precio)); //para enviarlos a la caonsola

carrito.map(producto => console.log(producto.nombre)); //crear un nuevo arreglo


const arreglo1 = carrito.forEach(producto => producto.precio); //para enviarlos a la caonsola

const arreglo2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);

console.log(arreglo1); //esta diseñado para interar y mostra los resultados el ForEach
console.log(arreglo2); //si quiere crear un numeo arreglo utilzia el map