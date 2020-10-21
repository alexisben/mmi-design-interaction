var images = document.querySelectorAll('.image');
var titles = document.querySelectorAll('.title');

function showImage (index) {
  var activeImage = document.querySelector('.image.is-active');
  activeImage.classList.remove('is-active');
  images[index].classList.add('is-active');
}

for (var i = 0; i < titles.length; i+=1) {
  titles[i].addEventListener('mouseenter',  function () {
    var titleIndex = this.getAttribute('data-image');
    showImage(titleIndex);
  }); 
}
