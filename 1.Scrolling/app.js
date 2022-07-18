(() => {
  const $scrollIcon = document.querySelector('.scroll-icon');
  window.addEventListener(
    'scroll',
    _.throttle(() => ($scrollIcon.style.display = window.pageYOffset > 300 ? 'block' : 'none'), 500)
  );

  $scrollIcon.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

// TODO: 스크롤 올라가는 것
//1. 스크롤 300 이하일때 display block!!
// 2. 버튼 클릭시 상단이동.
