const slides = document.getElementsByClassName('slideBox'),
  dots = document.getElementsByClassName('dot');

let slideIndex = 0,
  autoSlide;

showSlides();

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  autoSlide = setTimeout(showSlides, 4000);
}

function stopSlide() {
  clearTimeout(autoSlide);
}

function plusSlides(n) {
  stopSlide();
  slideIndex += n;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    dots[i].className = dots[i].className.replace(' active', '');
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

function currentSlide(n) {
  stopSlide();
  slideIndex = n;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
