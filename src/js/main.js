// const openBtn = document.querySelector('.burger__btn');
// const closeBtn = document.querySelector('.burger__exit-btn');
// const menu = document.querySelector('.burger__menu-fon');

// // Функция закрытия (вынес отдельно, чтобы не дублировать)
// const closeMenu = () => {
//   menu.classList.remove('is-open');
//   document.body.style.overflow = '';
// };

// // Открываем меню
// openBtn.addEventListener('click', () => {
//   menu.classList.add('is-open');
//   document.body.style.overflow = 'hidden';
// });

// // Закрываем по клику на крестик
// closeBtn.addEventListener('click', closeMenu);

// // Закрываем при клике на ЛЮБОЙ элемент внутри списка меню
// // (ссылки .burger__menu-link и кнопки .burger__menu-btn)
// const interactiveElements = document.querySelectorAll(
//   '.burger__menu-link, .burger__menu-btn'
// );

// interactiveElements.forEach((el) => {
//   el.addEventListener('click', closeMenu);
// });

// // Дополнительно: закрытие при клике на темный фон (вне контента)
// menu.addEventListener('click', (e) => {
//   if (e.target === menu) {
//     closeMenu();
//   }
// });

// // ------------------------ Slider ----------------------------
// // Ждем загрузки DOM, чтобы найти элементы
// document.addEventListener('DOMContentLoaded', () => {
//   const track = document.querySelector('.recall__slider-track');
//   const slides = document.querySelectorAll('.recall__slider-item');
//   const nextBtn = document.querySelector('.recall__control-btn:last-child');
//   const prevBtn = document.querySelector('.recall__control-btn:first-child');

//   let currentIndex = 0;

//   // Функция обновления позиции трека
//   function updateSlider() {
//     // Берем ширину одного слайда (твои 980px или сколько будет по факту)
//     const slideWidth = slides[0].offsetWidth;
//     track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//   }

//   // Листаем вперед
//   nextBtn.addEventListener('click', () => {
//     if (currentIndex < slides.length - 1) {
//       currentIndex++;
//     } else {
//       currentIndex = 0; // Зацикливаем в начало
//     }
//     updateSlider();
//   });

//   // Листаем назад
//   prevBtn.addEventListener('click', () => {
//     if (currentIndex > 0) {
//       currentIndex--;
//     } else {
//       currentIndex = slides.length - 1; // Зацикливаем в конец
//     }
//     updateSlider();
//   });

//   // На случай изменения размера окна, чтобы слайд не "съехал"
//   window.addEventListener('resize', updateSlider);
// });
// -----------------------------------------------------------

// --- Burger Logic ---
const menuFon = document.querySelector('.burger__menu-fon');
const openBtn = document.querySelector('.burger__btn');
const closeBtn = document.querySelector('.burger__exit-btn');

const toggleMenu = (isOpen) => {
  menuFon.classList.toggle('is-open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
};

openBtn.addEventListener('click', () => toggleMenu(true));
closeBtn.addEventListener('click', () => toggleMenu(false));

// Делегирование: ловим клики по всему фону меню
menuFon.addEventListener('click', (e) => {
  // Закрываем, если кликнули по ссылке, кнопке или самому фону (вне wrapper)
  if (
    e.target.closest('.burger__menu-link') ||
    e.target.closest('.burger__menu-btn') ||
    e.target === menuFon
  ) {
    toggleMenu(false);
  }
});

// --- Slider Logic ---
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.recall__slider-track');
  const slides = document.querySelectorAll('.recall__slider-item');
  const [prevBtn, nextBtn] = document.querySelectorAll('.recall__control-btn');

  let index = 0;

  const moveSlider = (newIndex) => {
    index = (newIndex + slides.length) % slides.length; // Универсальный круговой индекс
    track.style.transform = `translateX(-${index * 100}%)`;
  };

  nextBtn.addEventListener('click', () => moveSlider(index + 1));
  prevBtn.addEventListener('click', () => moveSlider(index - 1));
});
