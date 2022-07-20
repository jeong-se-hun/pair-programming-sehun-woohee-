(() => {
  const $scrollIcon = document.querySelector('.scroll-icon');

  window.addEventListener(
    'scroll',
    _.throttle(() => {
      $scrollIcon.style.display = window.pageYOffset > 300 ? 'block' : 'none';
    }, 500)
  );

  $scrollIcon.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();
