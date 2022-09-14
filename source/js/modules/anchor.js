export const anchor = function () {
  const smoothLink = document.querySelectorAll('[data-anchor]');
    smoothLink.addEventListener('click', function (evt) {
      evt.preventDefault();
      const id = smoothLink.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
