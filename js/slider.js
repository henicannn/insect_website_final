const oneBtn = document.querySelector('.oneBtn');
const twoBtn = document.querySelector('.twoBtn');
const threeBtn = document.querySelector('.threeBtn');
// var oneContent = document.querySelector('.info_one')


function one() {
    var z = document.querySelector('.slider');
    z.querySelector(".replace_text").innerHTML = z.querySelector(".info_one").innerHTML;
}


function two() {
    var x = document.querySelector('.slider');
    x.querySelector(".replace_text").innerHTML = x.querySelector(".info_two").innerHTML;

}

function three() {
    var y = document.querySelector('.slider');
    y.querySelector(".replace_text").innerHTML = y.querySelector(".info_three").innerHTML;

}

oneBtn.addEventListener('click', one);
twoBtn.addEventListener('click', two);
threeBtn.addEventListener('click', three);