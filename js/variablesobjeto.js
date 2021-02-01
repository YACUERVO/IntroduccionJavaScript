const producto3 = {
    nombreProductor: 'Monitor 20 pulgadas',
    precio1: 300,
    disponible: true,

}

//forma anterior
const precioProducto = producto3.precio1;
const nombreProducto = producto3.nombreProductor;
console.log(precioProducto);
console.log(nombreProducto);

//forma actual Destrucuring

const { precio1 } = producto3;

console.log(precio1);