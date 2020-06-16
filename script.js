
/* Hi! here, we're going to get some nav elements going on... */

var mq = true;

function openNav() {
    mq = window.matchMedia("(min-width: 500px)").matches;

    document.querySelector("nav").style.width = "32vh";
    if (mq) {
        document.getElementById("main").style.marginLeft = "32vh";
    }
}

function closeNav() {
    document.querySelector("nav").style.width = "0";
    if (mq) {
        document.getElementById("main").style.marginLeft = "0";
    }
}