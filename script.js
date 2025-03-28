

function playGame() {
    let isAlive = false
    let hasBlackjack = false
    let cardEl = document.getElementById("card-el")
    let firstCard = 11
    let secondCard = 11
    let sum = firstCard + secondCard 
    let message = ""
    if (sum < 21) {
        message = "Would you like to draw another Card?"
        cardEl.textContent = message
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        cardEl.textContent = message
        hasBlackjack = true
        console.log(hasBlackjack)
    } else {
        message = "You've lost, would you like to play again?"
        cardEl.textContent = message
        isAlive = false
        console.log(isAlive)
    }
}
