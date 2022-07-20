// document.querySelector('.toggle-button').addEventListener('click', () => {
//   if (window.localStorage.getItem('darkMode') === 'on') {
//     window.localStorage.setItem('darkMode', 'off');
//     $body.classList.remove('dark');
//   } else {
//     window.localStorage.setItem('darkMode', 'on');
//     $body.classList.add('dark');
//   }
// });
// TODO: 트렌지션 엔드 버그

(() => {
  const $body = document.querySelector('body');

  window.addEventListener('DOMContentLoaded', () => {
    if (window.localStorage.getItem('darkMode') === 'on' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
      $body.classList.add('dark');
    }

    setTimeout(() => {
      $body.classList.remove('hide');
    }, 200);
  });

  document.querySelector('.toggle-button').addEventListener('click', () => {
    window.localStorage.setItem('darkMode', window.localStorage.getItem('darkMode') === 'on' ? 'off' : 'on');
    $body.classList.toggle('dark');
  });
})();
// 해보고 싶은것 : 실시간 다크모드변경이벤트 반영.
