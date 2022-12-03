const link3 = document.getElementById('menu-bar2');
const menu2 = document.querySelector('.menu2');
const close = document.getElementById('close');
link3.addEventListener('click', () => {
  menu2.classList.toggle('active');
});
close.addEventListener('click', () => {
  menu2.classList.toggle('active');
});