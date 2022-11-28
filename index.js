const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sideMenu = document.querySelector('aside');
const theme = document.querySelector(".theme");
const sun = document.querySelector(".theme span:nth-child(1)");
const moon = document.querySelector(".theme span:nth-child(2)");

// Развернуть меню
menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block';
});

// Свернуть меню
closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none';
});

// Смена темы
theme.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  sun.classList.toggle('active');
  moon.classList.toggle('active');
});
