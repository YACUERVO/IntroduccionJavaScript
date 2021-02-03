const metodoPago = 'cheque';

switch (metodoPago) {
    case 'tarjeta':
        console.log('pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('el usuario va pagar con cheque, revisaremos los fondos primero')
        break;
    case 'efectivo':
        console.log('pagaste con efectivo');
        break;
    default:
        console.log('aun no has pagado')
        break;

}

const metodoPago1 = 'bitcoin';

switch (metodoPago1) {
    case 'tarjeta':
        console.log('pagaste con tarjeta');
        break;
    default:
        console.log('aun no has pagado')
        break;

}
const metodoPago3 = 'efectivo';

switch (metodoPago3) {
    case 'tarjeta':
        console.log('pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('el usuario va pagar con cheque, revisaremos los fondos primero')
        break;
    case 'efectivo':
        console.log('pagaste con efectivo');
        break;
    default:
        console.log('aun no has pagado')
        break;

}