//programacion orientacion a objetos

//object literal
const reservacion = {
    nombre: 'Yamith',
    apelliedo: 'Cuervo',
    total: 5000,

}
console.log(reservacion);

//object constructor

function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}
Producto.prototype.formatearProductor = function() {
    return `el producto ${this.nombre} tiene un precio de: ${this.precio}`
}
const producto2 = new Producto('Monitor curvo de 49"', 800, false);
const producto3 = new Producto('Laptop', 700, true);
const producto4 = new Producto('Celular', 500, true);
const producto5 = new Producto('Audifonos', 200, false);
//crear funciones que solo se utlizan en un objeto epecifico

//function formatearProductor(producto) {
//return `el producto ${producto.nombre} tiene un precio de: ${producto.precio}`
//}

console.log(producto2.formatearProductor());
console.log(producto3.formatearProductor());
console.log(producto4.formatearProductor());
console.log(producto5.formatearProductor());