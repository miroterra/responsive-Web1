const navBtn = document.querySelector('.title .btn'),
  navBtnI = document.querySelector('.title .btn i'),
  navMenu = document.querySelector('#nav .nav');

navBtn.addEventListener('click', function (e) {
  e.preventDefault();
  navMenu.style.display = 'block';
  navBtnI.className.replace('fa fa-angle-down', 'fa fa-angle-up');
});
