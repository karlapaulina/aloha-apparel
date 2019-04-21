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

    const input = document.querySelector("#email-input")
    const button = document.querySelector("#email-btn");

    button.addEventListener("click", function(event) {

        console.log(input.value)
        if (input.value.includes("@")){
        alert("Thank you for subscribing!")

        } else {
        alert("Please enter a valid e-mail")

        }});
});