/*
N'hésitez pas à écrire et découper votre problème dans des commentaires :

Objectif : faire grossir un element <span> quand l'utilisateur clique dessus.

1. stocker mes spans dans une variable.
2. écouter l'événement "click".
3. éxécuter une fonction lors de l'événement clique.

*/


var monContainer = document.getElementById('main-title');
var mesSpans = monContainer.getElementsByTagName('span');

function grossiMonTexte (unSpan) {
  unSpan.style.color = "pink";
}

// attacher un event click sur un span
function attacheUnEvenement (leSpan) {
  leSpan.addEventListener("click", function () {
    grossiMonTexte(leSpan);
  });
}



// parcourir mon tableau de span 
for (var index = 0; index < mesSpans.length; index++) {
 
  var monSpan = mesSpans[index];
  
  attacheUnEvenement(monSpan);
}
