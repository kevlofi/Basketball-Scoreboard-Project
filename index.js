// Home Score Funct

let homeScore = document.getElementById("score-home");

function addOne() {
  let currentScore = parseInt(homeScore.textContent, 10);
  homeScore.textContent = currentScore + 1;
}

function addTwo() {
  let currentScore = parseInt(homeScore.textContent, 10);
  homeScore.textContent = currentScore + 2;
}

function addThree() {
  let currentScore = parseInt(homeScore.textContent, 10);
  homeScore.textContent = currentScore + 3;
}

// Guest Score Funct

let guestScore = document.getElementById("score-guest");

function addOneGuest() {
  let currentScore = parseInt(guestScore.textContent, 10);
  guestScore.textContent = currentScore + 1;
}

function addTwoGuest() {
  let currentScore = parseInt(guestScore.textContent, 10);
  guestScore.textContent = currentScore + 2;
}
function addThreeGuest() {
  let currentScore = parseInt(guestScore.textContent, 10);
  guestScore.textContent = currentScore + 3;
}
