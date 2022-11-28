const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sideMenu = document.querySelector('aside');

// Развернуть меню
menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block';
});

// Свернуть меню
closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none';
});

