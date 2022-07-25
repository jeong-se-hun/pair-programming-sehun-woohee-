// document.querySelector('.toggle-button').addEventListener('click', () => {
//   if (window.localStorage.getItem('darkMode') === 'on') {
//     window.localStorage.setItem('darkMode', 'off');
//     $body.classList.remove('dark');
//   } else {
//     window.localStorage.setItem('darkMode', 'on');
//     $body.classList.add('dark');
//   }
// });

// (() => {
//   const $body = document.querySelector('body');

//   const theme = localStorage.getItem('darkMode');

//   const isDark = () =>
//     window.localStorage.getItem('darkMode') !== null
//       ? window.localStorage.getItem('darkMode') === 'on'
//       : window.matchMedia('(prefers-color-scheme: dark)').matches;

//   const setTheme = () => {
//     window.localStorage.setItem('darkMode', isDark() ? 'off' : 'on');
//     $body.classList.toggle('dark', isDark());
//   };
//   // TODO: render가 최선인가 변수명 더 고민해보자
//   const render = () => {
//     $body.classList.remove('hide');
//   };

//   window.addEventListener('DOMContentLoaded', () => {
//     setTheme();
//     setTimeout(render, 200);
//   });

//   document.querySelector('.toggle-button').addEventListener('click', () => setTheme());
// })();

// 해보고 싶은것 : 실시간 다크모드변경이벤트 반영.
// add랑 toggle을 함수로 뺄수있나?

// TODO: 트렌지션 엔드 버그
// document.querySelector('.toggle-button').addEventListener('transitionend', () => {
//   $body.classList.remove('hide');
// });
// 원오님 공유 할것

let theme = localStorage.getItem('theme');
const transitionTime = getComputedStyle(document.documentElement).getPropertyValue('--transition-duration');

if (!theme) {
  theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

window.addEventListener('DOMContentLoaded', () => {
  //  윈도우 테마 저장유무 고민
  // window.localStorage.setItem('theme', theme);

  document.body.classList.toggle('dark', theme === 'dark');

  setTimeout(() => document.body.classList.remove('hide'), +transitionTime * 1000);
});

document.querySelector('.toggle-button').addEventListener('click', () => {
  document.body.classList.toggle('dark');

  window.localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
});
