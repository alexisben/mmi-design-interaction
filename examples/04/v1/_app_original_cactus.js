
function init () {
  var expander = document.querySelector('.expander');
  var button = expander.querySelector('.btn');
  var isExpanded = false;

  function toggleExpand () {
    if (!isExpanded) {
      isExpanded = true;
      expander.classList.add('is-expanded');
    } else {
      isExpanded = false;
      expander.classList.remove('is-expanded');
    }
  }

  button.addEventListener("click", toggleExpand);
}

init();
