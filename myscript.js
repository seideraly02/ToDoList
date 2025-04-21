"use strict"

const reviewCard = document.querySelectorAll(".review-card");
const previousBtn = document.querySelector (".previous-btn");
const nextBtn = document.querySelector(".next-btn");


let count = 0;

nextBtn.addEventListener("click", () => {
    count++;
    carousel();
});

previousBtn.addEventListener("click", () => {
    count--; 
    carousel();
});

function carousel() {

    if (count === reviewCard.length) {
        count = 0;
    }
    if (count < 0) {
        count = reviewCard.length - 1;
    }

    reviewCard.forEach((card) => {
        let cardWidth = card.offsetWidth;

        card.style.transform = `translateX(${ -(count * cardWidth)}px`
    })

}


// phone navigation 


const navigation = document.querySelector(".navigation");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
    navigation.classList.toggle("navigation-on");
});

window.addEventListener("scroll", () => {
    if (navigation.classList.contains("navigation-on")) {
        navigation.classList.remove("navigation-on");
    }
})
const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');
    let currentSlide = 0;

    function updateSlidePosition() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
    }

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlidePosition();
    });

    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlidePosition();
    });

    window.addEventListener('resize', updateSlidePosition);
    updateSlidePosition();