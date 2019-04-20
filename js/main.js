document.addEventListener("DOMContentLoaded", function() { 

    var elem = document.querySelector('.carousel');
    var flkty = new Flickity( elem, {
        cellAlign: 'left',
        contain: true,
        percentPosition: false,
        imagesLoaded: true,
        autoPlay: false,
        prevNextButtons: false
    });

   /* var flkty = new Flickity( '.carousel', {
        // options
     
      });*/
});

//const collectionTitle = document.getElementsByTagName('h3');
//collectionTitle[0] .innerHTML = 'Spring Collection';

//console.log(collectionTitle);

/* 
const button = document.querySelector("#message-form");
const input = document.querySelector("message-form input");

button.addEventListener("click", function(event)) {
    event.preventDefault();
    let value = event.target
    console.log(value);
});
*/

