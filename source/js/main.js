import {iosVhFix} from './utils/ios-vh-fix';
import {createModal} from './modules/modal';
import {anchor} from './modules/anchor';
import {openText} from './modules/collapsible';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    createModal();
    anchor();
    openText();
  });
});
