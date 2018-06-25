
//scrolling effect for navigation menu

$('.navbar').localScroll();


    /*Toggle responsive class */
function myFunction() {
    var x = document.getElementById("navbar-nav");
    if (x.className ==="navbar") {
        x.className += " responsive";
    } else {
        x.className ="navbar";
    }
};

    


