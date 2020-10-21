var letters = document.getElementsByTagName('span');

function loopAnimation () {
  
  for (var i = 0; i < letters.length; i++) {
    var letter = letters.item(i);
    animLetter(letter, 100*i);
  }
  
}

function animLetter (letter, delay) {
  setTimeout(function() {

    letter.style.top = '-10px';

    setTimeout(function() {

      letter.style.top = '0px';
    
    }, 500);

  }, delay);
}

loopAnimation();

setInterval(function(){
  loopAnimation();
}, 1000);