/*
N'hésitez pas à écrire et découper votre problème dans des commentaires :

Objectif : faire grossir un élément <span> quand l'utilisateur clique dessus.

1. stocker mes éléments HTML span dans une variable.
2. écouter l'événement "click".
3. exécuter une fonction lors de l'événement "click".

*/


//J'encapsule tout mon code dans une fonction
function initMySecondExample () {
  // Je stock mon élément titre dans une variable
  var myTitle = document.getElementById('title-second-example');

  // Je stock les éléments de type "span" qui se trouve uniquement dans mon élément myTitle (pour éviter les effets de bords, et d'aller chopper d'autres span qui ne seraient pas dans mon titre).
  var mySpans = myTitle.getElementsByTagName('span');

  // Je déclare une fonction qui change la font size de l'élément que je lui passe en paramètre "element"

  // le commentaire ci-dessous est un exemple de "cartouche" qui décrit une fonction, il apporte les informations nécessaires pour expliquer rapidement et simplement ce que "fait" la fonction. 
  // Il doit contenir : 
  // - ce que fait ma fonction sans entrer dans les détails
  // - la description des paramètres que prend cette fonction (si elle en a)
  // - la valeur retournée de cette fonction (si elle retourne une valeur - on verra ça la prochaine fois)

  /**
   * Augmente la font size d'un élément
   *
   * @param element l'objet qui contient l'élément html dont on va modifier le style 
   */
  function sizeUp (element) {
    element.style.fontSize = "100px";
  }

  /**
   * Attache un écouteur d'événement "click" sur un élément HTML 
   *
   * @param element l'élément html auquel attacher l'événement 
   */
  function attachEvent (element) {

    // On utilise la fonction "addEventListener" 
    // https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
    element.addEventListener("click", function () {
      // J'appelle ma fonction sizeUp et je lui passe en paramètre mon element
      sizeUp(element);
    });

  }

  // Ici, je boucle sur mon tableau "mySpans" de façon à pouvoir récupérer les spans un par un.
  for (var index = 0; index < mySpans.length; index++) {

    // je stock dans la variable theSpan, l'élément à l'index X (0, puis 1, puis 2, ...) de mon tableau mySpans
    var theSpan = mySpans[index];

    // J'exécute ma fonction attachEvent en lui passant en paramètre l'élément span contenu dans la variable theSpan
    attachEvent(theSpan);
  }
}

initMySecondExample();
