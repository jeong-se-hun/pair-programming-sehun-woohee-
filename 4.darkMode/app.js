// document.querySelector('.toggle-button').addEventListener('click', () => {
//   if (window.localStorage.getItem('darkMode') === 'on') {
//     window.localStorage.setItem('darkMode', 'off');
//     $body.classList.remove('dark');
//   } else {
//     window.localStorage.setItem('darkMode', 'on');
//     $body.classList.add('dark');
//   }
// });

(() => {
  const $body = document.querySelector('body');

  window.addEventListener('DOMContentLoaded', () => {
    window.localStorage.getItem('darkMode') !== null
      ? $body.classList.toggle('dark', window.localStorage.getItem('darkMode') === 'on')
      : $body.classList.toggle('dark', window.matchMedia('(prefers-color-scheme: dark)').matches);

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
// add랑 toggle을 함수로 뺄수있나?

// TODO: 트렌지션 엔드 버그
// document.querySelector('.toggle-button').addEventListener('transitionend', () => {
//   $body.classList.remove('hide');
// });
// 원오님 공유 할것
