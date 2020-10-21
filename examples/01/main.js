var index = 0;

setInterval( function() {

    var colors = ['red', 'blue'];
    
    var element = document.getElementById('image-description');

    index += 1;

    element.style.color = colors[index % 2];

}, 1000 );