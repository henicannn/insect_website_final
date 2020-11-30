const openButton = document.querySelector('.openButton');
const closeButton = document.querySelector('.closeButton');


function openNav() {
    document.getElementById("navBar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("navBar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

openButton.addEventListener('click', openNav);
closeButton.addEventListener('click', closeNav);