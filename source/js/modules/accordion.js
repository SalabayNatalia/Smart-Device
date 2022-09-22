const accordions = document.querySelector('[data-accordion]');
const accordion = document.querySelectorAll('[data-accordion-item]');
const headers = document.querySelectorAll('[data-accordion-header]');

const openAccordion = () => {
  if (accordions) {

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
  }

  function closeAccordion() {
  accordion.forEach((item) => {
    item.classList.remove('is-open');
  });
}
};

export {openAccordion};
