const character = (id) => {
    return new Promise ((resolve, reject) => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        // fetch(`https://jefferspet.myvtex.com/api/catalog_system/pub/products/search?fq=alternateIds_RefId:${id}&sc=1`)
        .then(response => response.json())
        .then(data => {
            if(data){
                resolve(data)
            }else{
                reject('Not data found')
            }
        })
    })
}

character(1).then( ({name, status, location, episode}) => {
    console.log(episode[0])
    console.log(`Se encontro a ${name} ${status}, ubicado en ${location.name}`)
}).catch(console.error)

// const location = (id) => {
//     return new Promise((resolve, reject) => {
//         fetch(`https://rickandmortyapi.com/api/location/${id}`)
//         .then(response => response.json())
//         .then(data => {
//             if(data){
//                 resolve(data)
//             }else{
//                 reject('Not data found')
//             }
//         })
//     })
// }

// character('NWBH').then(console.log)

// Llamando dos Promesas al tiempo}

// const start = (value) => {
//     Promise.all([character(value), location(value)]).then(([person, planet]) => {
//         console.log(`Se encontro a ${person.name} en estado ${person.status}, ubicado en ${planet.name}`)
//     })
// }

// Promise.all([promesa(1), promesa(10)]).then( ([person1, person2] ) => {
//     console.log(`Se encontro a ${person1.name} en estado ${person1.status} junto con ${person2.name} en estado ${person2.status}, ubicados en ${person1.location.name} y ${person2.location.name} respectivamente`)
// })

console.log('Promesas')