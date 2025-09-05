let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.querySelector("#card-el") // same as document.getElementById("card-el") | Use # for id and . for class.

// 2. Store the cards paragraph in a variable called cardsEl
let sumEl = document.querySelector("#sum-el")

// 3. Render the cars on the page using this format -> "Cards: 10 4"
function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " "  + secondCard
    messageEl.textContent = message
}