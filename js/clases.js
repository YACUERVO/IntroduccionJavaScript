//classes

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto() {
        return `el producto ${this.nombre} tiene un precio $${this.precio}`;
    }
    obtenerPrecio() {
        console.log(this.precio)
    }
}

const producto1 = new Producto('Monitor currvo de 49"', 800);
const producto2 = new Producto('Laptop', 300);

console.log(producto1);
console.log(producto2);
console.log(producto1.formatearProducto());
console.log(producto2.formatearProducto());

//herencia
class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }
    obtenerPrecio() {
        super.obtenerPrecio();
        console.log('si hay en exitencias');
    }
}

const libro1 = new Libro('JavaScript la revolucion', 120, '121643513');
console.log(libro1.formatearProducto());
console.log(libro1.obtenerPrecio());