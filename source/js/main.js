import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {anchor} from './modules/anchor';
import {openText} from './modules/collapsible';
import {openAccordion} from './modules/accordion';
import {getMask} from './modules/mask';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    anchor();
    openText();
    openAccordion();
    getMask();
    initModals();
  });
});
