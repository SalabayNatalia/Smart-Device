const headers = document.querySelectorAll('[data-accordion-header]');
const accordions = document.querySelectorAll('[data-accordion-menu]');

const openAccordion = () => {

  accordions.forEach((accordion) => {
    accordion.classList.remove('is-open');
  });

  headers.forEach((header) =>
    header.addEventListener('click', () => {
      const parent = header.parentNode;

      if (parent.classList.contains('is-open')) {
        parent.classList.remove('is-open');
      } else {
        closeAccordion();
        parent.classList.add('is-open');
      }
    })
  );
};

function closeAccordion() {
  accordions.forEach((child) => {
    child.classList.remove('is-open');
  });
}

export {openAccordion};
