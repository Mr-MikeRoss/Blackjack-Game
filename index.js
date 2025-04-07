//game state
let isAlive = false
let hasBlackjack = true

//Dom Interaction
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let startBtnEl = document.getElementById("start-btn")
let newCardBtnEl = document.getElementById("new-card")
let playerEl = document.getElementById("player")

// Global Variables
let sum = 0
let cards = []
let message = ""
let player = {
    name: "Mike",
    chips: 100
}

// functions
function startGame() {
    if (!isAlive || hasBlackjack) {
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        startBtnEl.textContent = "Game in Session.."
        playerEl.textContent = `${player.name}: ${player.chips}$`
        renderGame()
    } else {}
}

function renderGame() {
    isAlive = true
    hasBlackjack = false
    newCardBtnEl.style.display = "block";
    cardsEl.textContent = `Cards: `
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += `${cards[i]} `
    }
    sumEl.textContent = `Sum: ${sum}`
    if (sum < 21) {
        message = "Would you like to draw again?"
    } else if ( sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
        startBtnEl.textContent = "Play Again?"
    } else {
        message = "You're out of the game."
        isAlive = false
        startBtnEl.textContent = "Play Again?"
    }
    messageEl.textContent = message
}

function getNewCard() {
    if (isAlive && !hasBlackjack) {
        let newCard = getRandomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()
    } else {}
}

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard === 1) {
        return 11
    } else if (randomCard > 10) {
        return 10
    } else {
        return randomCard
    }
}