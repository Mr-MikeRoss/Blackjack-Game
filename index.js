//game state
let isAlive = false
let hasBlackjack = true

// DOM Interacters
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let dealerCardsEl = document.getElementById("dealer-cards")
let dealerSumEl = document.getElementById("dealer-sum")
let startBtnEl = document.getElementById("start-btn")
let newCardBtnEl = document.getElementById("new-card")
let stayBtnEl = document.getElementById("stay-btn")

//global variables
let cards = []
let sum = 0
let dealerCards = []
let dealerSum = 0
let message = ""

// functions of game
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
        dealerCardsEl.textContent = ""
        dealerSumEl.textContent = ""
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        sum = firstCard + secondCard
        cards = [firstCard, secondCard]
        let dealerFirstCard = getRandomCard()
        let dealerSecondCard = getRandomCard()
        dealerSum = dealerFirstCard + dealerSecondCard
        dealerCards = [dealerFirstCard, dealerSecondCard]
        startBtnEl.textContent = "Game in session.."
        newCardBtnEl.style.display = "block" ;
        stayBtnEl.style.display = "block" ;
        renderGame()
    }
}

function renderGame() {
    isAlive = true
    hasBlackjack = false
    cardsEl.textContent = `Cards: `
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += `${cards[i]} `
    }
    sumEl.textContent = `Sum: ${sum}`
    if (sum < 21) {
        message = "Would you like to draw again?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
        startBtnEl.textContent = "Play Again?"
        newCardBtnEl.style.display = "none" ;
        stayBtnEl.style.display = "none" ;

    } else {
        message = "You're out of the game."
        isAlive = false
        startBtnEl.textContent = "Play Again?"
        newCardBtnEl.style.display = "none" ;
        stayBtnEl.style.display = "none" ;
    }
    messageEl.textContent = message
}

function getNewCard() {
    if (isAlive && !hasBlackjack) {
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        if (dealerSum <= 16) {
            let dealerNewCard = getRandomCard()
            dealerSum += dealerNewCard
            dealerCards.push(dealerNewCard)
        }
    }
    renderGame()
}

function showDealerCards() {
    dealerCardsEl.textContent = `Dealer's Cards: `
    for (let i = 0; i < dealerCards.length; i ++) {
        dealerCardsEl.textContent += `${dealerCards[i]} `
    }
    dealerSumEl.textContent = ` Dealer Sum: ${dealerSum}`
    if (dealerSum > sum && dealerSum <= 21) {
        message = "Dealer Wins."
        isAlive = false
        startBtnEl.textContent = "Play Again?"
        newCardBtnEl.style.display = "none" ;
        stayBtnEl.style.display = "none" ;
    } else if (sum > dealerSum) {
        isAlive = false
        message = "You beat the dealer. You Win!"
        startBtnEl.textContent = "Play Again?"
        newCardBtnEl.style.display = "none" ;
        stayBtnEl.style.display = "none" ;
    } else {
        isAlive = false
        message = "Dealer broke 21. You Win!"
        startBtnEl.textContent = "Play Again?"
        newCardBtnEl.style.display = "none" ;
        stayBtnEl.style.display = "none" ;
    }
    messageEl.textContent = message
}