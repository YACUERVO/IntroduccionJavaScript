//objetos

const nombreProductor = 'Monitor 20 pulgadas';
const precio = 300;
const disponible = true;

const producto = {
    nombreProductor: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,

}

console.log(producto);

console.log(producto.precio);
console.log(producto.nombreProductor);

console.log(producto["precio"]);

//agregar propiedades
producto.imagen = 'imagen.jpg';

//elimnar propuedades
delete producto.disponible;
console.log(producto);