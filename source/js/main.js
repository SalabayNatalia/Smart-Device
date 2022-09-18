import {iosVhFix} from './utils/ios-vh-fix';
import {createModal} from './modules/modal';
import {anchor, changeElementText} from './modules/anchor';
import {openText, aboutMobileText} from './modules/collapsible';
import {changeCatalogHeader} from './modules/catalogHeader';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    createModal();
    anchor();
    openText();
    changeElementText();
    aboutMobileText();
    changeCatalogHeader();
  });
});
