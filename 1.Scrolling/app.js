(() => {
  const $scrollIcon = document.querySelector('.scroll-icon');
  const scrollIconLocation = 300;

  window.addEventListener(
    'scroll',
    _.throttle(() => {
      $scrollIcon.style.display = window.pageYOffset > scrollIconLocation ? 'block' : 'none';
    }, 500)
  );

  $scrollIcon.addEventListener('click', window.scrollTo({ top: 0, behavior: 'smooth' }));
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
