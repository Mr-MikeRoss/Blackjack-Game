// //game state
// let isAlive = false
// let hasBlackjack = false

// // Dom Interacters
// let messageEl = document.getElementById("message-el")
// let cardsEl = document.getElementById("cards-el")
// let sumEl = document.getElementById("sum-el")

// // Global Variables
// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard
// let message = ""

// // Game initiation
// function startGame() {
//     renderGame()
// }

// // game functions
// function renderGame() {
//     isAlive = true
//     cardsEl.textContent = `Cards: `
//     for ( let i = 0; i < cards.length; i++) {
//         cardsEl.textContent += `${cards[i]} `
//     }
//     sumEl.textContent = `Sum: ${sum}`
//     if (sum < 21) {
//         message = "Would you like to draw another card?"
//     } else if (sum === 21) {
//         message = "You've got Blackjack!"
//         hasBlackjack = true
//     } else {
//         message = "You're out of the game."
//         isAlive = false
//     }
//     messageEl.textContent = message
// }

// function newCard() {
//     if (isAlive && !hasBlackjack) {
//         let newCard = getRandomCard()
//         sum += newCard
//         cards.push(newCard)
//         renderGame()
//     } else {}
// }

// // random card function
// function getRandomCard() {
//     return 7
// }

// game state
let isAlive = false
let hasBlackjack = false

// DOM Interaction
let messagEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

// Global Variables
let firstCard = randomCard()
let secondCard = randomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let message = ""

// functions
function startGame() {
    renderGame()
}

function randomCard() {
    return 7
}

function renderGame() {
    isAlive = true
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