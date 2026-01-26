const openBtn = document.querySelector('.burger__btn');
const closeBtn = document.querySelector('.burger__exit-btn');
const menu = document.querySelector('.burger__menu-fon');

// Функция закрытия (вынес отдельно, чтобы не дублировать)
const closeMenu = () => {
  menu.classList.remove('is-open');
  document.body.style.overflow = '';
};

// Открываем меню
openBtn.addEventListener('click', () => {
  menu.classList.add('is-open');
  document.body.style.overflow = 'hidden';
});

// Закрываем по клику на крестик
closeBtn.addEventListener('click', closeMenu);

// Закрываем при клике на ЛЮБОЙ элемент внутри списка меню
// (ссылки .burger__menu-link и кнопки .burger__menu-btn)
const interactiveElements = document.querySelectorAll(
  '.burger__menu-link, .burger__menu-btn'
);

interactiveElements.forEach((el) => {
  el.addEventListener('click', closeMenu);
});

// Дополнительно: закрытие при клике на темный фон (вне контента)
menu.addEventListener('click', (e) => {
  if (e.target === menu) {
    closeMenu();
  }
});
