// seleciona as classes para interagir
const btnMenu = document.querySelector('.btn_menu_mobile');
const menu = document.querySelector('.mobile_menu');

// abrir menu mobile
btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// fechar ao clicar fora
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !btnMenu.contains(e.target)) {
    menu.classList.remove('active');
  }
});