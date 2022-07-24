(() => {
  const $scrollIcon = document.querySelector('.scroll-icon');

  const scrollIconToggle = () => {
    $scrollIcon.style.display = window.pageYOffset > 300 ? 'block' : 'none';
  };

  const goToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // prettier-ignore
  window.addEventListener('scroll', _.throttle(() => scrollIconToggle(), 500));

  $scrollIcon.addEventListener('click', goToTop);
})();

// (() => {
//   const $scrollIcon = document.querySelector('.scroll-icon');

//   const doDisplay = () => {
//     if (window.pageYOffset > 300) $scrollIcon.style.display = 'block';
//     else $scrollIcon.style.display = 'none';
//   };

//   window.addEventListener(
//     'scroll',
//     _.throttle(() => {
//       doDisplay();
//     }, 500)
//   );

//   $scrollIcon.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
// })();
