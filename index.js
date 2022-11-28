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

// Заполнение таблицы
Orders.forEach(order => {
  const tr = document.createElement('tr');
  const tdContent = `<td>${order.product}</td>
                    <td>${order.id}</td>
                    <td>${order.pay}</td>
                    <td class="${order.logistic.includes('Отклонен')? 
                              'dander' : order.logistic.includes('Ожидание')?
                               'warning' : 'primary'}">${order.logistic}</td>
                    <td class='primary'>Детали</td>`;

  tr.innerHTML = tdContent ;
  document.querySelector('table tbody').appendChild(tr);                            
});