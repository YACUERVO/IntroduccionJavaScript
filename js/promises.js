const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = false

    if (auth) {
        resolve('usuario autenticado'); //el promise se cumple

    } else {
        reject('no se pudo iniciar seccion'); //el promise no se cumple
    }

});

usuarioAutenticado
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error))


//en los promises existen 3 valores
//pending: no se ha cumplido pero tampoco se ha rechazo
//fulfilled: ya se cumplio promise
//rejected: se ha rechazado o no se cumplir