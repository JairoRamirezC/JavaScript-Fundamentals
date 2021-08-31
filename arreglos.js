console.log('Hola Mundo!')

const arreglo = [
    123,
    'Jairo',
    ()=>{console.log('Hola otra vez')},
    ['soy nombre', 'soy apellido', 'soy email']
]

// console.log(arreglo[3][2])
// console.error('Esto es un error')
// console.warn('Esto es un Warning')
// console.info('Esto es una informacion')

const personaje = {
    nombre: 'Iron Man',
    trajes: ['Mark I', 'Mark V', 'HulkBuster']
}

console.log('No. Trajes: ', personaje.trajes.length)
console.log('Ultimo Traje: ', personaje.trajes[personaje.trajes.length - 1])