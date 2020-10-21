var playerChoice = null;
var ordiChoice = null;
var isPlaying = false;
var playerScore = 0;
var cpuScore = 0;

function init() {
  bindEvents();
}

function bindEvents() {
  var buttons = document.getElementsByClassName('button');

  for (var index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", onClickButton);
  }

}


function onClickButton() {

  if (isPlaying) {
    return false;
  }

  isPlaying = true;

  playerChoice = this.getAttribute("data-id");

  var selector = '.player .' + playerChoice
  
  $(selector).fadeIn();

  getRandomChoice();
}

function getRandomChoice () {

  var choices = ['rock', 'paper', 'scissors'];

  var randomIndex = Math.random() * 2;
  randomIndex = Math.round(randomIndex);

  ordiChoice = choices[randomIndex];
 
  var selector = '.computer .' + ordiChoice

  $(selector).fadeIn();

  compare();
}

function compare () {
  var winner = null;

  // gestion de l'égalité 
  if (playerChoice === ordiChoice) {
  
    winner = "egalite";
  
  } 
  // gestion du perdu 
  else if ( ( playerChoice === "rock" && ordiChoice === "paper" ) 
    || ( playerChoice === "paper" && ordiChoice === "scissors" ) 
    || ( playerChoice === "scissors" && ordiChoice === "rock" )) {
    
    winner = "perdu";

    cpuScore += 1;

  } 
  // gestion du gagné 
  else {

    winner = "gagné";
  
    playerScore += 1;

  }
 
  $('#result-message').text(winner);

  setTimeout(updateInterface, 500);
  setTimeout(reset, 1500);
}

// update le score affiché
// affiche le message du résultat (gagné, perdu, égalité)
function updateInterface () {

  $('.player-score').text(playerScore);
  $('.cpu-score').text(cpuScore);

  $('#result-message').fadeIn();
}

function reset () {

  isPlaying = false;

  $('.icon').fadeOut();

  $('#result-message').fadeOut();

}

init();