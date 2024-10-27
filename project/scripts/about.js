let currentSlide = 0;
const slides = document.querySelectorAll('.slider-frame ul li');
const totalSlides = slides.length;

function showSlide(index) {
    const slider = document.querySelector('.slider-frame ul');
    slider.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides; 
    showSlide(currentSlide);
}, 3000);