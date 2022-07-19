(() => {
  const $body = document.querySelector('body');

  window.addEventListener('DOMContentLoaded', () => {
    if (window.localStorage.getItem('darkMode') === 'on') {
      $body.classList.add('dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      $body.classList.add('dark');
    }
    $body.classList.remove('hide');
  });

  document.querySelector('.toggle-button').addEventListener('click', () => {
    if (window.localStorage.getItem('darkMode') === 'on') {
      window.localStorage.setItem('darkMode', 'off');
      $body.classList.remove('dark');
    } else {
      window.localStorage.setItem('darkMode', 'on');
      $body.classList.add('dark');
    }
  });
})();
