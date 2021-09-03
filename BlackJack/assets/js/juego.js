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
    console.log(deck)
    deck = _.shuffle(deck)
    console.log(deck)
}


const GetCard = () =>{
    if(deck.length != 0){
        let newCard = deck.pop()
        return newCard
    }else{
        throw 'No more cards in the deck'
    } 
}

CreateDeck()
console.log(GetCard())
console.log(deck)