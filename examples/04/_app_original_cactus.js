
function init () {
  var expander = document.querySelector('.expander');
  var button = expander.querySelector('.btn');
  var content = document.querySelector('.expander__content');

  function openExpander () {
    content.style.display = "block";
  }

  button.addEventListener("click", openExpander);
}

init();
