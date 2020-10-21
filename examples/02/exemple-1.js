/*
N'hésitez pas à écrire et découper votre problème dans des commentaires :

Objectif : changer la couleur de mon titre quand je clique dessus.
*/

//J'encapsule tout mon code dans une fonction
function initMyFirstExample () {
  // Je stock mon élément DOM dans une variable
  var myTitle = document.getElementById('title-first-example');

  // Je stock la couleur que je veux appliquer à mon titre au click
  //N.B. j'ai choisi une couleur css prédéfinie mais j'aurai pu mettre une valeur hexadécimal comme "#2896bd" par ex.
  var color = "blue";
  // ou par exemple : 
  var color2 = "#2896bd";


  // Je déclare une fonction qui change la couleur de mon titre
  /**
   * change la couleur de mon titre myTitle
   */
  function changeTextColor () {
    myTitle.style.color = color2;
  }

  // J'attache un écouteur d'événement sur mon element
  // son premier parametre est "click" : c'est le nom du type d'événement que je veux écouter
  // son second parametre est le nom de la fonction à exécuter lors d'un click : changeTextColor
  // N.B. je n'ajoute pas les "()" à la fin de ma fonction, sinon elle va s'exécuter sans même que je clique sur mon titre.
  // voir : https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener

  myTitle.addEventListener("click", changeTextColor);
}

initMyFirstExample();
