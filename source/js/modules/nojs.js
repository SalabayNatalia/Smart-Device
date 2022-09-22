// export const nojs = () => {
//   if (document.querySelector('.nojs')) {
//     document.querySelector('.nojs').classList.remove('nojs');
//   }
// };
export const nojs = () => {
  if (document.querySelector('.nojs')) {
    document.querySelector('.nojs').classList.remove('nojs');
    const phones = document.querySelectorAll('[data-phone]');
    phones.forEach(function (item) {
      item.removeAttribute('pattern');
    });
  }
};
//  function closeAccordion() {
//     accordion.forEach(function (item) {
//       item.classList.remove('is-open');
//     });
//   }
