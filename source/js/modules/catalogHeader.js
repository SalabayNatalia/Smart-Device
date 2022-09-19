import {getWindowWidth} from './getWindowWidth';

export const changeCatalogHeader = () => {
  const catalogHeader = document.querySelector('[data-catalog-header');

  if (getWindowWidth() < 770) {
    catalogHeader.textContent = 'Товары и услуги Smart Device';
  } else {
    catalogHeader.textContent = 'Smart Device предлагает следующие товары и услуги';
  }
};
