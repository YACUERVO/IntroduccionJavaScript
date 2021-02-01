//arrays metodos
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'];

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

//foreach se ejecuta una oacacion y acceder en cada uno de los elementos

meses.forEach(function(meses) {
    if (meses == "marzo") {
        console.log('marzo si existe')
    }
});

//include

const resultado = meses.includes('marzo');
console.log(resultado);

//some idela para arreglo de objetos

resultado1 = carrito.some(function(producto) {
    return producto.nombre === 'celular'
})

console.log(resultado1);

//para sumer lo que estra dentro del carrito 

resultado2 = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0);

console.log(resultado2)

//filter: para optener algun elemento
resultado3 = carrito.filter(function(producto) {
    return producto.precio > 400

})
resultado4 = carrito.filter(function(producto) {
    return producto.nombre === 'celular'

})

console.log(resultado3);
console.log(resultado4);