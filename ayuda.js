let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
  });
  slides[index].classList.add('active');

  // Mueve el contenedor
  const carousel = document.querySelector('.carousel');
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Cambia de imagen cada 5 segundos (5000 ms)
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}, 5000);
