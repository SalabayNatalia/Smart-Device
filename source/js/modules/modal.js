export const createModal = function () {
  const openBtn = document.querySelector('[data-button-open-modal]');
  const closeBtn = document.querySelector('[data-close-modal]');
  const header = document.querySelector('[data-header]');
  const body = document.querySelector('body');
  const overlay = document.querySelector('[data-overlay]');
  const modalName = document.querySelector('[data-modal-name');
  const modal = document.querySelector('[data-modal');


  body.classList.remove('nojs');

  const onModalEscKeydown = (evt) => {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      header.classList.remove('is-open');
      body.classList.remove('no-scroll');
    }
  };

  const onModalOpened = () => {
    header.classList.add('is-open');
    body.classList.add('no-scroll');
  };

  const onModalClosed = () => {
    header.classList.remove('is-open');
    body.classList.remove('no-scroll');
  };

  const modalShow = () => {
    modalName.setAttribute('tabindex', '1');
    modalName.focus();
  };

  const focusRestrict = () => {
    document.addEventListener('focus', (evt) => {
      if (onModalOpened && !modal.contains(evt.target)) {
        evt.stopPropagation();
        modalName.focus();
      }
    }, true);
  };

  openBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    onModalOpened();
    document.addEventListener('keydown', onModalEscKeydown);
    modalShow();
    focusRestrict();
  });

  closeBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (header.classList.contains('is-open')) {
      onModalClosed();
      document.removeEventListener('keydown', onModalEscKeydown);
    }
  });

  overlay.addEventListener('click', (evt) => {
    evt.preventDefault();
    let target = evt.target;
    if (target === overlay) {
      if (header.classList.contains('is-open')) {
        onModalClosed();
        document.removeEventListener('keydown', onModalEscKeydown);
      }
    }
  });
};
