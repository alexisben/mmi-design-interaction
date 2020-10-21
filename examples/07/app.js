var cursor = document.querySelector('#cursor');

function onMoveCursor (event) {
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
}

document.body.addEventListener('mousemove', onMoveCursor);


var cursor = document.querySelector('#cursor');

function onMoveCursor (event) {
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
}

document.body.addEventListener('mousemove', onMoveCursor);