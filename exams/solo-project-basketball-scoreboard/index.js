//Incrementing points for Home and Guest teams (+1, +2, +3)
//Resetting the scoreboard to 0 - 0

let homeScoreEl = document.getElementById("home-display")
let guestScoreEl = document.getElementById("guest-display")
let homeScore = 0
let guestScore = 0
homeScoreEl.textContent = homeScore
guestScoreEl.textContent = guestScore

function homePlusOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function homePlusTwo() {    
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function homePlusThree() {    
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function guestPlusOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function guestPlusTwo() {    
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function guestPlusThree() {    
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function resetScores() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}