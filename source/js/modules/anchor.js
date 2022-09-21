const smoothLink = document.querySelector('[data-anchor]');

const anchor = function () {
  if (smoothLink) {
    smoothLink.addEventListener('click', function (evt) {
      evt.preventDefault();
      const id = smoothLink.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
};

export {anchor};
