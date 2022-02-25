(() => {
    let deck = []
    const letters = ['C', 'H', 'S', 'D']
    const highCards = ['K', 'Q', 'J', 'A']
    let pointsPlayer = 0
    let pointsComputer = 0

    // variables del HTML
    const btnStartGame = document.querySelector('#btnNewCard')
    btnStartGame.disabled = true
    const btnGetCard = document.querySelector('#btnGetCard');
    const btnStopGame = document.querySelector('#btnStopCard')
    const small = document.querySelectorAll('small')
    let divCards = document.querySelector('#cards-game')
    let divCardsComputer = document.querySelector('#computadora-cartas')


    // CreateDeck: llena el array deck con las cartas del blackjack
    const CreateDeck = () => {
        // Ciclo para crear las cartas con numeros del 2 - 10
        for(let i = 2; i <= 10; i++){
            for(letter of letters){
                deck.push(`${i}${letter}`)
            }
        }
        // Ciclo para crear las cartas con letras 'K', 'Q', 'J', 'A'
        for(highCard of highCards){
            for(letter of letters){
                deck.push(highCard + letter)
            }
        }
        
        deck = _.shuffle(deck) //Altera el contenido de deck de manera desordenada
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

    // Computer turn
    const ComputerTurn = (pointsmin) => {
        do {
            let card = GetCard()
            pointsComputer = pointsComputer + CardValue(card)
            small[1].innerText = pointsComputer
        
            // Agrega carta a la etiqueta IMG
            let imgCards = document.createElement('img')
            imgCards.src = `assets/cartas/${card}.png`
            imgCards.classList.add('card-view')
            divCardsComputer.append(imgCards)

            if(pointsmin > 21){
                break
            }
        } while (pointsComputer < pointsmin && pointsmin <= 21);

        setTimeout(() => {
            finalScore(pointsComputer, pointsmin)
        }, 100);
    }

    CreateDeck()

    // Funciones de logicas

    btnGetCard.addEventListener('click', () => {
        //Agregar valor a la etiqueta SMALL
        let card = GetCard()
        pointsPlayer = pointsPlayer + CardValue(card)
        small[0].innerText = pointsPlayer

        // Agrega carta a la etiqueta IMG
        let imgCards = document.createElement('img')
        imgCards.src = `assets/cartas/${card}.png`
        imgCards.classList.add('card-view')
        divCards.append(imgCards)

        if(pointsPlayer > 21){
            console.warn('Lo siento, perdiste')
            btnGetCard.disabled = true
            btnStopGame.disabled = true
            ComputerTurn(pointsPlayer)
        }else if(pointsPlayer === 21){
            console.log('Genial, sacaste 21')
            btnGetCard.disabled = true
            btnStopGame.disabled = true
            ComputerTurn(pointsPlayer)
        }
    })

    btnStopGame.addEventListener('click', () => {
        btnGetCard.disabled = true
        btnStopGame.disabled = true
        ComputerTurn(pointsPlayer)
    })

    btnStartGame.addEventListener('click', () => {
        btnGetCard.disabled = false
        btnStopGame.disabled = false
        pointsPlayer = 0
        pointsComputer = 0
        small[0].innerText = 0
        small[1].innerText = 0
        divCards.innerHTML = ''
        divCardsComputer.innerHTML = ''
        deck = []
        CreateDeck()
        btnStartGame.disabled = true
    })

    const finalScore = (scoreComputer, scorePlayer) => {
        console.log({scoreComputer})
        console.log({scorePlayer})
        if(scoreComputer > 21){
            alert('Ganaste')
        }else if(scorePlayer > 21){
            alert('Gano la compu')
        }else{
            let message = scoreComputer > scorePlayer ? 'Gano la compu' : scoreComputer === scorePlayer ? 'Empate' : 'Ganaste'
            alert(message)
        }
        btnStartGame.disabled = false
    }
})()