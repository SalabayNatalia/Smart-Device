import {iosVhFix} from './utils/ios-vh-fix';
import {createModal} from './modules/modal';
import {anchor} from './modules/anchor';
import {openText} from './modules/collapsible';
import {openAccordion} from './modules/accordion';
import {getMask} from './modules/mask';

const body = document.querySelector('body');

body.classList.remove('nojs');

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    createModal();
    anchor();
    openText();
    openAccordion();
    getMask();
  });
});
