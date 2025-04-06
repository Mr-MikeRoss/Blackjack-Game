// game state
let isAlive = false
let hasBlackjack = true

// DOM Interacter-ers
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.querySelector("#sum-el")
let startBtnEl = document.getElementById("start-btn")
let newCardBtnEl = document.getElementById("new-card")

// Global Variables
let cards = []
let sum = 0
let message = ""

// Game functions
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

function startGame() {
    if (!isAlive || hasBlackjack) {
        startBtnEl.textContent = "Good Luck"
        newCardBtnEl.style.display = "block" ;
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()
    } else {}
}

function renderGame() {
    isAlive = true
    hasBlackjack = false
    cardsEl.textContent = `Cards: `
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += `${cards[i]} `
    }
    sumEl.textContent = sum
    if (sum < 21) {
        message = "Would you like to draw another card?"
    } else if (sum === 21) {
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