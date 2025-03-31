// game state
let isAlive = false
let hasBlackjack = false

//DOM variables
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")

//global Variables
let message = ""
let firstCard = 10
let secondCard = 6
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard

function startGame() {
    renderGame()
}


function renderGame() {
    isAlive = true
    cardsEl.textContent = `Cards: ${cards[0]}, ${cards[1]}`
    sumEl.textContent = `Sum: ${sum}`
    if (sum < 21) {
        message = "Draw another card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game."
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive && !hasBlackjack) {
        let newCard = 7
        sum += newCard
        cards.push(newCard)
        console.log(cards)
        renderGame()
    } else {}
}
