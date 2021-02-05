function descargarClientes() {
    return new Promise(resolve => {
        console.log('Descargando Clientes.... espere...')
        setTimeout(() => {
            resolve('los cleintes fueron descargadas')
        }, 5000);
    });
}

function descargarUltimosPedidos() {
    return new Promise(resolve => {
        console.log('Descargando Pedido.... espere...')
        setTimeout(() => {
            resolve('los Pedidos fueron descargadas')
        }, 3000);
    });
}
async function app() {
    try {
        // const clientes = await descargarClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);
        // console.log(pedidos);
        const resultado = await Promise.all([descargarClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error)
    }
}


app()

console.log('este codigo no se bloquea');