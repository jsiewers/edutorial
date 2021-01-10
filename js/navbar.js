window.onscroll = function () { makeNavbarStick() };
console.log("lekker sticky");

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function makeNavbarStick() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
