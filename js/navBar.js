const navBtn = document.querySelector('.title .btn'),
  navBtnI = document.querySelector('.title .btn i'),
  navMenu = document.querySelector('#nav .nav');

navBtn.addEventListener('click', function (e) {
  e.preventDefault();
  navMenu.classList.toggle('on');
  if (navMenu.classList.contains('on')) {
    navBtnI.setAttribute('class', 'fa fa-angle-up');
    navBtn.style.lineHeight = '45px';
  } else {
    navBtnI.setAttribute('class', 'fa fa-angle-down');
    navBtn.style.lineHeight = '50px';
  }
});
