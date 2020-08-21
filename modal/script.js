const modal = document.getElementById('modal');
const modalOpen = document.getElementById('modalOpen');
const modalClose = document.getElementById('modalClose');
let scrollPosition;
const body = document.querySelector('body');

modalOpen.addEventListener('click', function () {
  scrollPosition = window.pageYOffset;

  body.classList.add('is-fix');

  modal.classList.add('is-open');

  body.style.top = -1 * scrollPosition + 'px';
});

modalClose.addEventListener('click', function () {
  body.classList.remove('is-fix');
  modal.classList.remove('is-open');
  body.style.top = 0 + 'px';
  window.scrollTo(0, scrollPosition);
});
