import {getWindowWidth} from './getWindowWidth';

const smoothLink = document.querySelector('[data-anchor]');

const anchor = function () {
  smoothLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
};

const changeElementText = () => {
  if (getWindowWidth() <= 770) {
    smoothLink.textContent = 'Бесплатная консультация';
  } else {
    smoothLink.textContent = 'Получить бесплатную консультацию';
  }
};

export {anchor, changeElementText};
