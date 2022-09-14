import {iosVhFix} from './utils/ios-vh-fix';
import {createModal} from './modules/modal';
import {anchor} from './modules/anchor';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    createModal();
    anchor();
  });
});
