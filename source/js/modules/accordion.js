const headers = document.querySelectorAll('[data-accordion-header]');
const accordions = document.querySelectorAll('[data-accordion-menu]');
const ss = document.querySelectorAll('.footer__accordion');

const openAccordion = () => {

  accordions.forEach((accordion) => {
    accordion.classList.remove('is-open');
  });
  if (headers) {

    headers.forEach((header) =>
      header.addEventListener('click', () => {
        const parent = header.parentNode;
        ss.forEach((acc) => {
          if (acc.classList.contains('is-open')) {
            acc.classList.remove('is-open');
          }
        });
        if (parent.classList.contains('is-open')) {
          parent.classList.remove('is-open');
        } else {
          closeAccordion();
          parent.classList.add('is-open');
        }
      })
    );
  }
};

function closeAccordion() {
  accordions.forEach((child) => {
    child.classList.remove('is-open');
  });
}

export {openAccordion};
