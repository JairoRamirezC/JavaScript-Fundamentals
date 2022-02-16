const dia = 0;
let horaApertura = 0;
const horaActual = 8
let mensaje = ''


horaApertura = [0,6].includes(dia) ? 9 : 11
// console.log({horaApertura})

mensaje = horaActual >= horaApertura ? 'Esta abierto' : `Esta cerrado, abrimos a las ${horaApertura}`
// console.log({mensaje})

// Mayor que
const mayor = (a, b)=> a > b ? a : b

console.log(mayor(10, 20))