export const nojs = () => {
  if (document.querySelector('.nojs')) {
    document.querySelector('.nojs').classList.remove('nojs');
  }
};
