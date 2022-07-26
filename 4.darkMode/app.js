let theme = localStorage.getItem('theme');
const transitionTime = getComputedStyle(document.documentElement).getPropertyValue('--transition-duration');

if (!theme) {
  theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.toggle('dark', theme === 'dark');

  setTimeout(() => document.body.classList.remove('hide'), +transitionTime * 1000);
});

document.querySelector('.toggle-button').addEventListener('click', () => {
  document.body.classList.toggle('dark');

  window.localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
});

// TODO: 트렌지션 엔드 버그
// document.querySelector('.toggle-button').addEventListener('transitionend', () => {
//   $body.classList.remove('hide');
// });
