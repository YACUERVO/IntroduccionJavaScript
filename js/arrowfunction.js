//solo se puede utilizar arrow function en la EXPRECION DE LA FUNCION

const sumar2 = (n1, n2) => console.log(n1 + n2);


sumar2(5, 10);

const aprendiendo = tecnologia => console.log(`aprendiendo ${tecnologia}`);


aprendiendo('javaScrip')

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

meses.forEach(meses => {
    if (meses == "marzo") {
        console.log('marzo si existe')
    }
});


//some idela para arreglo de objetos

resultado1 = carrito.some(producto => producto.nombre === 'celular')

console.log(resultado1);

//para sumer lo que estra dentro del carrito 
let resultado2;

resultado2 = carrito.reduce((total, producto) => total + producto.precio, 0)


console.log(resultado2)

//filter: para optener algun elemento
resultado3 = carrito.filter(producto => producto.precio > 400);


resultado4 = carrito.filter(producto => producto.nombre !== 'celular');

console.log(resultado3);
console.log(resultado4);