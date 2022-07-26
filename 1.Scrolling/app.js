const $scrollIcon = document.querySelector('.scroll-icon');
const scrollIconLocation = 300;

window.addEventListener(
  'scroll',
  _.throttle(() => {
    $scrollIcon.style.display = window.pageYOffset > scrollIconLocation ? 'block' : 'none';
  }, 500)
);

$scrollIcon.addEventListener('click', window.scrollTo({ top: 0, behavior: 'smooth' }));

// 변수명 대문자?
