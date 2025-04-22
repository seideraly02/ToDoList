const track = document.getElementById('carouselTrack');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = 'translateX(-' + (slideWidth * 4 * currentIndex) + 'px)';
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[currentIndex]) dots[currentIndex].classList.add('active');
}

nextButton.addEventListener('click', () => {
  if ((currentIndex + 1) * 4 < slides.length) {
    currentIndex++;
    updateCarousel();
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});
