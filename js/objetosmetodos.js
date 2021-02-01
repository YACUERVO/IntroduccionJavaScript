//"use strict"; //corre JS en modo estricto
const producto3 = {
        nombreProductor: 'Monitor 20 pulgadas',
        precio1: 300,
        disponible: true,

    }
    //para agragar propiedad nuevas a un objeto

//Object.freeze(producto3); //permite que el objeto no se pueda modificar  nueva propiedad ni elimar 

producto3.imagen = 'iamgen.jpg';

console.log(Object.isFrozen(producto3))

console.log(producto3);

Object.seal(producto3); //Permite permite modificar las propiedad exstentes

producto3.precio1 = 'NUEVO PRECIO';
console.log(producto3);