const $showSuccess = document.querySelector('.show-success');
const $showError = document.querySelector('.show-error');
const $showWarning = document.querySelector('.show-warning');
const $body = document.querySelector('body');

const showMessage = element => {
  const state = element.textContent.toLowerCase();
  const $toast = document.createElement('div');
  $toast.classList.add('toast', state);
  $toast.style.bottom = 0;
  $toast.innerHTML = `
  <h4 class="toast-title">${state === 'success' ? 'Well done!' : 'Check it out!'}</h4>
  <div class="toast-message">
  <svg width="24" height="24">
  <use xlink:href="#${state}" />
  </svg>
  <p>this is a ${state} alert</p>
  </div>
  <a class="toast-close">&times;</a>
 `;
  $body.appendChild($toast);

  $body.querySelectorAll('.toast').forEach((toast, i, arr) => {
    if (i === arr.length - 1) return;
    const bottom = toast.style.bottom.replace(/[^0-9]/g, '');
    toast.style.bottom = `${+bottom + 100}px`;
  });

  setTimeout(() => {
    if ($body.querySelector('.toast') !== null) $body.removeChild($toast);
  }, 10000);
};

$showSuccess.addEventListener('click', e => {
  showMessage(e.target);
});
$showError.addEventListener('click', e => {
  showMessage(e.target);
});
$showWarning.addEventListener('click', e => {
  showMessage(e.target);
});

$body.addEventListener('click', e => {
  if (e.target.classList.contains('toast-close')) {
    $body.removeChild(e.target.parentNode);
    console.log(e.target.parentNode);
  }
});
