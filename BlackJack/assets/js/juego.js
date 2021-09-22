let deck = []
const letters = ['C', 'H', 'S', 'D']
const highCards = ['K', 'Q', 'J', 'A']

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
    // console.log(deck)
    deck = _.shuffle(deck)  //Organiza el contenido de manera desordenada
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
    
    // isNaN(valCard) 
    // ? 
    //     points = valCard === 'A' ? 11 : 10
    // : 
    //     points = valCard * 1;

    // return points
}

CreateDeck()
// console.log(lastReult.substring(0, lastReult.length - 1))
console.log(CardValue(GetCard()))
// console.log({deck})