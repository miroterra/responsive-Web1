const slides = document.getElementsByClassName('slideBox'),
  dots = document.getElementsByClassName('dot');
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  autoSlide();
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  autoSlide();
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  autoSlide();
  function autoSlide() {
    slideIndex++;
    setTimeout(showSlides, 2000);
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
  }
}
// function autoSlide() {
//   let j;
//   for (j = 0; j < slides.length; j++) {
//     slides[j].style.display = 'none';
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   for (j = 0; j < dots.length; j++) {
//     dots[j].className = dot[j].className.replace(' active', '');
//   }
//   slides[slideIndex - 1].style.display = 'block';
//   dots[slideIndex - 1].className += ' active';
//   setTimeout(autoSlide, 2000);
// }
