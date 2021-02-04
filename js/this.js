//this hace referencia a cada uno de los objetos

const reservacion = {
    nombre: 'Yamith',
    apelliedo: 'Cuervo',
    total: 5000,
    pegado: true,
    informacion: function() {
        console.log(`El cliente ${this.nombre}, reservo y su cantidad a pagar de ${this.total}`)
    }

}

const reservacion1 = {
    nombre: 'Arley',
    apelliedo: 'Cuervo',
    total: 10000,
    pegado: true,
    informacion: function() {
        console.log(`El cliente ${this.nombre}, reservo y su cantidad a pagar de ${this.total}`)
    }

}
reservacion.informacion()
reservacion1.informacion()