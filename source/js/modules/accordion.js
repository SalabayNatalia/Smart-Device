const headers = document.querySelectorAll('[data-accordion-header]');
const accordions = document.querySelectorAll('[data-accordion-menu]');
const accordionWrappers = document.querySelectorAll('[data-accordion]');

const openAccordion = () => {
  accordions.forEach((accordion) => {
    accordion.classList.remove('is-open');
  });

  headers.forEach((header) => {
    header.addEventListener('click', (evt) => {
      evt.preventDefault();
      accordionWrappers.forEach((accordionWrap) => {
        if (accordionWrap.classList.contains('is-open')) {
          accordionWrap.classList.remove('is-open');
        } else {
          accordionWrap.classList.add('is-open');
        }
      });
    });
  });
};

export {openAccordion};
