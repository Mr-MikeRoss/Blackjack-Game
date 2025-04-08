// game state
let isAlive = false
let hasBlackjack = true

// DOM
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let startBtnEl = document.getElementById("start-btn")
let newCardBtnEl = document.getElementById("new-card")
let stayBtnEl = document.getElementById("stay-btn")
let dealerSumEl = document.getElementById("dealer-sum")
let dealerCardsEl = document.getElementById("dealer-cards")

// global variables
let cards = []
let dealerCards = []
let sum = 0
let dealerSum = 0
let message = ""
let player = {
    name: "Mike",
    chips: 69
}

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
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        sum = firstCard + secondCard
        cards = [firstCard, secondCard]
        let dealerFirstCard = getRandomCard()
        let dealerSecondCard = getRandomCard()
        dealerSum = dealerFirstCard + dealerSecondCard
        dealerCards = [dealerFirstCard, dealerSecondCard]
        startBtnEl.textContent = "Game in session.."
        renderGame()
    } else {}
}

function renderGame() {
    isAlive = true
    hasBlackjack = false
    dealerCardsEl.textContent = ""
    dealerSumEl.textContent = ""
    newCardBtnEl.style.display = "block" ;
    stayBtnEl.style.display = "block" ;
    cardsEl.textContent = `Cards: `
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += `${cards[i]} `
    }
    sumEl.textContent = `Sum: ${sum}`
    if (sum < 21) {
        message = "Would You like to draw again?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        startBtnEl.textContent = "Play Again?"
        stayBtnEl.style.display = "none" ;
        hasBlackjack = true
    } else {
        message = "You're out of the game"
        startBtnEl.textContent = "Play Again?"
        stayBtnEl.style.display = "none" ;
        isAlive = false
    }
    messageEl.textContent = message
}

function showDealerCards() {
    dealerCardsEl.textContent = `Dealer Cards: `
    for (let i = 0; i < dealerCards.length; i++) {
        dealerCardsEl.textContent += `${dealerCards[i]} `
    }
    dealerSumEl.textContent = `Dealer Sum: ${dealerSum}`
    if (dealerSum > sum && dealerSum < 21) {
        isAlive = false
        message = "Dealer Wins."
        startBtnEl.textContent = "Play Again?"
        stayBtnEl.style.display = "none" ;
    } else if (sum > dealerSum) {
        message = "You beat the Dealer!"
        isAlive = false
        startBtnEl.textContent = "Play Again?"
        stayBtnEl.style.display = "none" ;
    } else if (dealerSum > 21) {
        isAlive = false
        message = "Dealer broke 21.. You Win!"
        startBtnEl.textContent = "Play Again?"
        stayBtnEl.style.display = "none" ;
    } else {
        message = "It's a draw."
        isAlive = false
        startBtnEl.textContent = "Play Again?"
        stayBtnEl.style.display = "none" ;
    }
    messageEl.textContent = message
}

function getNewCard() {
    if (isAlive && !hasBlackjack) {
        let newCard = getRandomCard()
        cards.push(newCard)
        sum += newCard
        let dealerNewCard = getRandomCard()
        dealerCards.push(dealerNewCard)
        dealerSum += dealerNewCard
        renderGame()
    } else {}
}