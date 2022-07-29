let theme = '';

const transitionTime = getComputedStyle(document.documentElement).getPropertyValue('--transition-duration');

window.addEventListener('DOMContentLoaded', () => {
  theme = localStorage.getItem('theme');

  if (!theme) {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  }

  document.body.classList.toggle('dark', theme === 'dark');

  setTimeout(() => document.body.classList.remove('hide'), +transitionTime * 1000);
});

const changeTheme = () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
  document.body.classList.toggle('dark');
};

document.querySelector('.toggle-button').addEventListener('click', changeTheme);
