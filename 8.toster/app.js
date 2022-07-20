(() => {
  const $body = document.querySelector('body');

  const render = () => {
    [...document.querySelectorAll('.toast')].forEach(($toast, i, arr) => {
      $toast.style.bottom = `${
        (arr.length - 1 - i) * parseInt(getComputedStyle($toast).getPropertyValue('--toast-height'), 10)
      }px`;
    });
  };

  // TODO: render 분리할까요??
  const showMessage = element => {
    const state = element.textContent.toLowerCase();
    const $toast = document.createElement('div');

    $toast.classList.add('toast', state);
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

    render();

    setTimeout(() => {
      if ($toast.matches('body>.toast')) $body.removeChild($toast);
    }, 3000);
  };

  $body.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') showMessage(e.target);

    if (e.target.classList.contains('toast-close')) {
      $body.removeChild(e.target.parentNode);
      render();
    }
  });
})();
