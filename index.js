// //game state
// let isAlive = false
// let hasBlackjack = true

// // DOM Interacters
// let messageEl = document.getElementById("message-el")
// let cardsEl = document.getElementById("cards-el")
// let sumEl = document.getElementById("sum-el")
// let dealerCardsEl = document.getElementById("dealer-cards")
// let dealerSumEl = document.getElementById("dealer-sum")
// let startBtnEl = document.getElementById("start-btn")
// let newCardBtnEl = document.getElementById("new-card")
// let stayBtnEl = document.getElementById("stay-btn")

// //global variables
// let cards = []
// let sum = 0
// let dealerCards = []
// let dealerSum = 0
// let message = ""

// // functions of game
// function getRandomCard() {
//     let randomCard = Math.floor(Math.random() * 13) + 1
//     if (randomCard === 1) {
//         return 11
//     } else if (randomCard > 10) {
//         return 10
//     } else {
//         return randomCard
//     }
// }

// function endGame() {
//     isAlive = false
//     startBtnEl.textContent = "Play Again?"
//     newCardBtnEl.style.display = "none" ;
//     stayBtnEl.style.display = "none" ;
// }

// function startGame() {
//     if (isAlive) {
//         return
//     }
//     dealerCardsEl.textContent = ""
//     dealerSumEl.textContent = ""
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     sum = firstCard + secondCard
//     cards = [firstCard, secondCard]
//     let dealerFirstCard = getRandomCard()
//     let dealerSecondCard = getRandomCard()
//     dealerSum = dealerFirstCard + dealerSecondCard
//     dealerCards = [dealerFirstCard, dealerSecondCard]
//     startBtnEl.textContent = "Game in session.."
//     newCardBtnEl.style.display = "block" ;
//     stayBtnEl.style.display = "block" ;
//     renderGame()
// }

// function renderGame() {
//     isAlive = true
//     hasBlackjack = false
//     cardsEl.textContent = `Cards: `
//     for (let i = 0; i < cards.length; i++) {
//         cardsEl.textContent += `${cards[i]} `
//     }
//     sumEl.textContent = `Sum: ${sum}`
//     if (sum < 21) {
//         message = "Would you like to draw again?"
//     } else if (sum === 21) {
//         message = "You've got Blackjack!"
//         hasBlackjack = true
//         endGame()

//     } else {
//         message = "You're out of the game."
//         endGame()
//     }
//     messageEl.textContent = message
// }

// function getNewCard() {
//     if (!isAlive) {
//         return
//     }
//     let newCard = getRandomCard()
//     sum += newCard
//     cards.push(newCard)
//     if (dealerSum <= 16) {
//         let dealerNewCard = getRandomCard()
//         dealerSum += dealerNewCard
//         dealerCards.push(dealerNewCard)
//     }
//     renderGame()
// }

// function showDealerCards() {
//     dealerCardsEl.textContent = `Dealer's Cards: `
//     for (let i = 0; i < dealerCards.length; i ++) {
//         dealerCardsEl.textContent += `${dealerCards[i]} `
//     }
//     dealerSumEl.textContent = ` Dealer Sum: ${dealerSum}`
//     if (dealerSum > sum && dealerSum <= 21) {
//         message = "Dealer Wins."
//         endGame()
//     } else if (sum > dealerSum) {
//         message = "You beat the dealer. You Win!"
//         endGame()
//     } else {
//         message = "Dealer broke 21. You Win!"
//         endGame()
//     }
//     messageEl.textContent = message
// }

// global  Variables
let isAlive = false
let hasBlackjack = false
let cards = []
let sum = 0

//Dom Interaction
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let newCardBtn = document.getElementById("new-card")

//functions
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 11) + 1
    return randomNumber
}

function startGame() {
    if (!isAlive) {
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        let sum = firstCard + secondCard
        messageEl.textContent = "Draw again?"
        cardsEl.textContent = `Cards: ${firstCard}, ${secondCard}`
        sumEl.textContent = `Sum: ${sum}`
        newCardBtn.style.display = "block";
        isAlive = true
    } else {}
}

function getNewCard() {
  
}