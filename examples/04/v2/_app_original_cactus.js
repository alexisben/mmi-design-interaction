
function init () {
  var expander = document.querySelector('.expander');
  var button = expander.querySelector('.btn');
  var isExpanded = false;
  var expanderContent = expander.querySelector('.expander__content');

  expanderContent.parentElement.style.height = "0px";

  function toggleExpand () {
    if (!isExpanded) {
      isExpanded = true;
      expander.classList.add('is-expanded');
      expanderContent.parentElement.style.height = expanderContent.clientHeight + "px";
    } else {
      isExpanded = false;
      expander.classList.remove('is-expanded');
      expanderContent.parentElement.style.height = "0px";
    }
  }

  button.addEventListener("click", toggleExpand);
}

init();
