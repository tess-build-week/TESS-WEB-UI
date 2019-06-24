const track = document.querySelector(".carousel_track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel_button--right");
const prevButton = document.querySelector(".carousel_button--left");
const dotsNav = document.querySelector(".carousel_nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//Arrange the slide next to one another
// slides[0].style.left = slideWidth * 0 + "px";
// slides[1].style.left = slideWidth * 1 + "px";
// slides[2].style.left = slideWidth * 2 + "px";

slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
});

//when I click left, move slides to the left
//when I click right, move slides to the right
//when I click the nac indicators, move to that slide.
