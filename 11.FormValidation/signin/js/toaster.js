const $body = document.querySelector('body');

const render = () => {
  [...document.querySelectorAll('.toast')].forEach(($toast, i, arr) => {
    $toast.style.bottom = `${
      (arr.length - 1 - i) * parseInt(getComputedStyle($toast).getPropertyValue('--toast-height'), 10)
    }px`;
  });
};

// TODO: render 분리할까요??
export default function showMessage() {
  const $toast = document.createElement('div');

  $toast.classList.add('toast', 'success');
  $toast.innerHTML = `
    <h4 class="toast-title">Well done!</h4>
    <div class="toast-message">
      <svg width="24" height="24">
        <use xlink:href="#success" />
      </svg>
      <p>Signin Successfully</p>
    </div>
    <a class="toast-close">&times;</a>
   `;
  $body.appendChild($toast);

  render();

  setTimeout(() => {
    if ($toast.matches('body>.toast')) $body.removeChild($toast);
  }, 3000);
}
