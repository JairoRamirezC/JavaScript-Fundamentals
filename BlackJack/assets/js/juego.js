let deck = []
const letters = ['C', 'H', 'S', 'D']
const highCards = ['K', 'Q', 'J', 'A']
let pointsCard = 0

// variables del HTML
const btnGetCard = document.querySelector('#btnGetCard');
const small = document.querySelector('small')
let divCards = document.querySelector('#cards-game')


const CreateDeck = () => {
    for(let i = 2; i <= 10; i++){
        for(letter of letters){
            deck.push(`${i}${letter}`)
        }
    }

    for(highCard of highCards){
        for(letter of letters){
            deck.push(highCard + letter)
        }
    }
    //Organiza el contenido de manera desordenada
    deck = _.shuffle(deck)
    console.log(deck)
}

const GetCard = () => {
    if(deck.length != 0){
        let newCard = deck.pop()
        return newCard
    }else{
        throw 'No more cards in the deck'
    }
}

const CardValue = card => {
    let valCard = card.substring(0, card.length - 1)

    return (isNaN(valCard) 
            ? valCard === 'A' ? 11 : 10 
            : valCard * 1)
    
    // Otra forma de realizar el return de esta funcion es:
    //
    // isNaN(valCard) 
    // ? 
    //     points = valCard === 'A' ? 11 : 10
    // : 
    //     points = valCard * 1;

    // return points
}

CreateDeck()

// Funciones de logicas

btnGetCard.addEventListener('click', () => {
    //Agregar valor a la etiqueta SMALL
    let card = GetCard()
    pointsCard = pointsCard + CardValue(card)
    small.innerText = pointsCard
    // console.log(pointsCard)

    // Agrega carta a la etiqueta IMG
    let imgCards = document.createElement('img')
    imgCards.src = `assets/cartas/${card}.png`
    imgCards.classList.add('card-view')
    divCards.append(imgCards)
})