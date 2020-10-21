var letters = document.getElementsByTagName('span');
var colors = ['pink', 'red', 'blue'];

function init () {

  for (var i = 0; i < letters.length; i++) {
    var letter = letters.item(i);

    bindEvent(letter);
  }
}

function bindEvent (letter) {
  letter.addEventListener('mouseover', function() {
    letter.style.color = 'pink';
    letter.style.top = '-10px';

  });

  letter.addEventListener('mouseout', function() {
    letter.style.color = 'blue';
    letter.style.top = '0px';
  });
}

init();
