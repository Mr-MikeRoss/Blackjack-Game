// game state
let isAlive = false
let hasBlackjack = true

// DOM Interaction
let messagEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

// Global Variables
let cards = []
let sum = 0
let message = ""

// functions
function startGame() {
    if (!isAlive || hasBlackjack) {
        let firstCard = randomCard()
        let secondCard = randomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()
    } else {}
}

function randomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber < 2) {
        return 11
    } else if (randomNumber >= 10) {
        return 10
    } else {
        return randomNumber
    }
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
    } else {
        message = "You're out of the game."
        isAlive = false
    }
    messagEl.textContent = message
}

function newCard() {
    if (isAlive && !hasBlackjack) {
        let newCard = randomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    } else {}
}