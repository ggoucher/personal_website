
/* Hi! here, we're going to get some nav elements going on... */

function openNav() {
    document.querySelector("nav").style.width = "30vh";
    document.getElementById("main").style.marginLeft = "30vh";
}

function closeNav() {
    document.querySelector("nav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}