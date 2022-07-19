const $showSuccess = document.querySelector('.show-success');
const $showError = document.querySelector('.show-error');
const $showWarning = document.querySelector('.show-warning');
const $body = document.querySelector('body');
const messageContainer = document.createElement('div');
$body.appendChild(messageContainer);

const showMessage = (element) => {
  const state = element.textContent.toLowerCase();
  const messageBox = document.createElement('div');
  messageBox.innerHTML = `
  <div class="toast ${state}"">
  <h4 class="toast-title">${
    state === 'success' ? 'Well done!' : 'Check it out!'
  }</h4>
  <div class="toast-message">
  <svg width="24" height="24">
  <use xlink:href="#${state}" />
  </svg>
  <p>this is a ${state} alert</p>
  </div>
  <a class="toast-close">&times;</a>
  </div>`;
  messageContainer.appendChild(messageBox);
  setTimeout(() => {
    if ($body.querySelector('.toast') !== null) $body.removeChild(messageBox);
  }, 3000);
};

$showSuccess.addEventListener('click', (e) => {
  showMessage(e.target);
});

$body.addEventListener('click', (e) => {
  if (e.target.classList.contains('toast-close'))
    $body.removeChild(e.target.parentNode.parentNode.parentNode);
});
