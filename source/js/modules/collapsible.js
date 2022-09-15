export const openText = function () {
  const collapsible = document.querySelector('.about__button');
  const about = document.querySelector('.about');
  collapsible.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (about.classList.contains('is-active')) {
      about.classList.remove('is-active');
      collapsible.textContent = 'Подробнее';
    } else {
    about.classList.add('is-active');
    collapsible.textContent = 'Свернуть';
    }
  }
)};

