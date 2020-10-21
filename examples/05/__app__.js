var playerScore = 0;
var cpuScore = 0;

var rockButton = document.querySelector('#button-rock');
var paperButton = document.querySelector('#button-paper');
var scissorsButton = document.querySelector('#button-scissors');

var playerScoreElement = document.querySelector('#player-score');
var cpuScoreElement = document.querySelector('#cpu-score');

var playerHandElement = document.querySelector('.game__part--player');
var cpuHandElement = document.querySelector('.game__part--cpu');

var playerSelection = null;
var cpuSelection = null;

var playerIsPlaying = false;

var choices = ['rock', 'paper', 'scissors'];

function init () {
  reset();
  bindActions();
}

function bindActions () {
  rockButton.addEventListener('click', playerSelect);
  paperButton.addEventListener('click', playerSelect);
  scissorsButton.addEventListener('click', playerSelect);
}

function playerSelect () {

  if (playerIsPlaying) return null;
  playerIsPlaying = true;

  var id = this.getAttribute('id');
  playerSelection = id.replace('button-', '');

  document.querySelector('#player-' + playerSelection).style.opacity = 1;

  setTimeout(cpuRandom, 500)
}


function cpuRandom () {
  var randomIndex = Math.round(Math.random() * (choices.length-1));

  cpuSelection = choices[randomIndex]

  document.querySelector('#cpu-' + cpuSelection).style.opacity = 1;

  battle();
}

function battle () {
  var winner = null;

  switch (playerSelection) {
    case 'paper': 
      if (cpuSelection === "rock") {
        winner = 'player';
      } else if (cpuSelection === "scissors") {
        winner = 'cpu';
      }
    break;
    case 'rock': 
      if (cpuSelection === "scissors") {
        winner = 'player';
      } else if (cpuSelection === "paper") {
        winner = 'cpu';
      }
    break;
    case 'scissors': 
      if (cpuSelection === "paper") {
        winner = 'player';
      } else if (cpuSelection === "rock") {
        winner = 'cpu';
      }
    break;
  }

  if (winner === "player") {
    playerScore += 1;
  } else if (winner === "cpu") {
    cpuScore += 1;
  }

  showMessage(winner);
  
  updateScore();

  setTimeout(reset, 1100);
}

function reset () {
  var pictos = document.getElementsByClassName('picto');
  
  for (var i = 0; i < pictos.length; i++) {
    pictos[i].style.opacity = 0;
  }

  playerIsPlaying = false;
}



var message = document.querySelector('#game-message');

function showMessage (winner) {
  message.classList.add('is-active');

  if (winner === "player") {
    message.querySelector('.is-win').style.display = "block";
  } else if (winner === "cpu") {
    message.querySelector('.is-loose').style.display = "block";
  } else {
    message.querySelector('.is-equal').style.display = "block";
  }

  setTimeout(hideMessage, 1000);
}

function hideMessage () {
  message.classList.remove('is-active');

  setTimeout(function() {
    var spans = message.getElementsByTagName('span');
    for (var i = 0; i < spans.length; i++) {
      spans[i].style.display = 'none';
    }
  }, 300);
}

function updateScore () {
  playerScoreElement.innerText = playerScore;
  cpuScoreElement.innerText = cpuScore;
}

init();