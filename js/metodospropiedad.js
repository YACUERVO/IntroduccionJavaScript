//metodos de propiedad
const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo Cancion con el id: ${id}`)
    },
    pausar: function() {
        console.log('Pausando...')
    },
    crearPlaylist: function(nombre) {
        console.log(`creando la playlist: ${nombre}`)
    },
    reproducirPlaylist: function(nombre) {
        console.log(`reproducion la playlist: ${nombre}`)
    }

}

reproductor.borraCancion = function(id) {
    console.log(`elimando la cancion: ${id}`)
}

reproductor.borraCancion(3840)
reproductor.reproducir(3840);
reproductor.pausar();
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Haavy Metal')