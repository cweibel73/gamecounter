let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function addPoints(score,num){
    score.textContent = +score.textContent + num
}

function newgame(){
    homeScore.textContent = 0
    guestScore.textContent = 0
}

