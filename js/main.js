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

    const button = document.querySelector("email-btn");
    const input = document.querySelector("email-input")
    
    /*button.addEventListener("click"), function(event) {
       /*event.preventDefault();
       let msg = input.value
       console.log(msg);

       function validation(){
        if (!email-input) {
            RegExp = /@/;
            return true,
            alert('Thank you for subscribing')}
        else {
            return false,
            alert('Please enter a valid email')
        }
    }}*/
});