//variables dom
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
// game state
let isAlive = false
let hasBlackjack= false
//elements of game
let firstCard = 11
let secondCard = 6
let sum = firstCard + secondCard
let message = ""
// When game starts
function startGame() {
    isAlive = true
    cardsEl.textContent = `Cards: ${firstCard}, ${secondCard}`
    sumEl.textContent = `Sum: ${sum}`
    if (sum < 21) {
        message = "Would you like to draw another card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
        console.log(hasBlackjack)
    } else {
        message = "You're out of the game."
        isAlive = false
        console.log(isAlive)
    }
    messageEl.textContent = message
}

function newCard() {
    let newCard = 10
    if(isAlive && hasBlackjack === false) {
        sum += newCard
        startGame()
    } else {

    }
}


