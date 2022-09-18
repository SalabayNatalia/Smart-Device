import {getWindowWidth} from './getWindowWidth';

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
  });
};

export const aboutMobileText = () => {
  const aboutMobile = document.querySelector('[data-about-mobile');

  if (getWindowWidth() <= 770) {
    aboutMobile.textContent = 'Наши поставщики - мировые производители электронных компонентов: OSRAM, CREE, HOLGLITRONIC, REFOND.';
  } else {
    aboutMobile.textContent = 'Наши поставщики - мировые производители электронных компонентов: OSRAM, CREE, HOLGLITRONIC, REFOND. Печатные платы и комплектующие Service Devices применяются на предприятиях Российских Железных Дорог (РЖД), РоссАвтоПрома (ВАЗ, АвтоГАЗ), МинАтома, СпецМедТехники. Среди наших клиентов крупнейшие Производители светотехники России.';
  }
};
