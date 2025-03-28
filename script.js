//game state
let isAlive = true
let hasBlackjack = false

// elements
let testEl = document.getElementById("JS-tester")
console.log(testEl)
let firstCard = 5
let secondCard = 20
let sum = firstCard + secondCard
let message = ""

// game!
function game() {
    if (sum < 21) {
        message = "Would you like to draw again?"
        testEl.textContent = message
    } else if (sum === 21 ) {
        hasBlackjack = true
        message = "You've got BlackJack big dawg!"
        testEl.textContent = message
    } else {
        message = " Damn G, you lost.."
        testEl.textContent = message
        isAlive = false
    }
}
game()