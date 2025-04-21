"use strict";

const track = document.querySelector('#carouselTrack');
const slides = Array.from(track.children);

let currentIndex = 0;
let slideWidth = slides[0].getBoundingClientRect().width + 32;
const visibleSlides = 4;

function updateCarousel() {
  const maxIndex = slides.length - visibleSlides;

  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  currentIndex++;
  if (currentIndex > maxIndex) {
    currentIndex = 0;
  }
}

setInterval(updateCarousel, 1000);

window.addEventListener('resize', () => {
  slideWidth = slides[0].getBoundingClientRect().width + 32;
  updateCarousel();
});
