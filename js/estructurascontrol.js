//estructura de control

const puntaje = 1000;
// si se cumple lo del parentesis se ejecuta lo de corchetes si no se cumple se ejecuta el else
if (puntaje == 1000) {
    console.log('si el puntaje es 1000');
} else {
    console.log('no es igual')
}


const puntaje1 = 1000;
// si se cumple lo del parentesis se ejecuta lo de corchetes si no se cumple se ejecuta el else

//!== si el puntaje es diferente a 1000
if (puntaje1 !== 1000) {
    console.log('no es igual');
} else {
    console.log('son iguales');

}

//condicion para si alcanza los efectivos
const efectivo = 1000;
const carrito = 800;

if (efectivo >= carrito) {
    console.log('fondos suficientes');

} else {
    console.log('fondos insuficientes');
}

//mas de una comndicion, multiples else if 

const rol = 'editor';
if (rol === 'administrador') {
    console.log('acceso al sistema')

} else if (rol === 'editor') {
    console.log('eres editor, puedes entrar pero no puedes hacer mucho')
} else {
    console.log('no tienes acceso')
}