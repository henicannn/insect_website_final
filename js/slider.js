const oneBtn = document.querySelector('.oneBtn');
const twoBtn = document.querySelector('.twoBtn');
const threeBtn = document.querySelector('.threeBtn');
var infoOne = document.querySelector('.info_one')
var infoTwo = document.querySelector('.info_two')
var infoThree = document.querySelector('.info_three')




function one() {
    infoOne.classList.remove("hidden");
    infoTwo.classList.add("hidden");
    infoThree.classList.add("hidden");

}


function two() {
    infoTwo.classList.remove("hidden");
    infoOne.classList.add("hidden");
    infoThree.classList.add("hidden");
}

function three() {
    infoThree.classList.remove("hidden");
    infoOne.classList.add("hidden");
    infoTwo.classList.add("hidden");
}


oneBtn.addEventListener('click', one);
twoBtn.addEventListener('click', two);
threeBtn.addEventListener('click', three);