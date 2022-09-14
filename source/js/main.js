import {iosVhFix} from './utils/ios-vh-fix';
import {modal} from './modules/modal';
import {anchor} from './modules/anchor';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    modal();
    anchor();
  });
});
