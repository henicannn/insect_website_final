// var video = document.getElementById('video');

// var slider = document.getElementById("slider_range");
// video.currentTime = slider.value;

// slider.oninput = function() {
//     video.currentTime = this.value / 30;
//     console.log(this.value / 30)
// }

const explode = document.querySelector('.explode');
const assemble = document.querySelector('.assemble');
var video = document.getElementById('video');
const circles = document.querySelectorAll(".circle");
var circleOne = document.getElementById('circle0');
var circleTwo = document.getElementById('circle1');
var circleThree = document.getElementById('circle2');
var circleFour = document.getElementById('circle3');
var circleFive = document.getElementById('circle4');



function explodeBug() {
    video.playbackRate = 3;
    video.duration = 9
    video.play();
    circleOne.classList.remove("hidden");
    circleTwo.classList.remove("hidden");
    circleThree.classList.remove("hidden");
    circleFour.classList.remove("hidden");
    circleFive.classList.remove("hidden");
    gsap.to(circles[0], 1, { delay: 2, opacity: 1, ease: Power2.easeOut });
    gsap.to(circles[1], 1, { delay: 2, opacity: 1, ease: Power2.easeOut });
    gsap.to(circles[2], 2, { delay: 2, opacity: 1, ease: Power2.easeOut });
    gsap.to(circles[3], 2, { delay: 2, opacity: 1, ease: Power2.easeOut });
    gsap.to(circles[4], 2, { delay: 2, opacity: 1, ease: Power2.easeOut });

}


function assembleBug() {
    video.currentTime = 0;
    circleOne.classList.add("hidden");
    circleTwo.classList.add("hidden");
    circleThree.classList.add("hidden");
    circleFour.classList.add("hidden");
    circleFive.classList.add("hidden");
    gsap.to(circles[0], 1, { opacity: 0, ease: Power2.easeOut });
    gsap.to(circles[1], 1, { opacity: 0, ease: Power2.easeOut });
    gsap.to(circles[2], 2, { opacity: 0, ease: Power2.easeOut });
    gsap.to(circles[3], 2, { opacity: 0, ease: Power2.easeOut });
    gsap.to(circles[4], 2, { opacity: 0, ease: Power2.easeOut });
}


assemble.addEventListener('click', assembleBug);
explode.addEventListener('click', explodeBug);