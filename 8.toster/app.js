(() => {
  const $body = document.querySelector('body');
  const $toastContainer = document.createElement('div');
  $body.appendChild($toastContainer);

  const render = () => {
    [...$toastContainer.children].forEach((toast, i, arr) => {
      toast.style.bottom = `${(arr.length - 1 - i) * 100}px`;
    });
  };

  // TODO: render 분리할까요??
  const showMessage = (element) => {
    const state = element.textContent.toLowerCase();
    const $toast = document.createElement('div');

    $toast.classList.add('toast', state);
    $toast.innerHTML = `
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
   `;
    $toastContainer.appendChild($toast);

    render();

    setTimeout(() => {
      if ($toast.matches('div>.toast')) $toastContainer.removeChild($toast);
    }, 7000);
  };

  $body.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') showMessage(e.target);

    if (e.target.classList.contains('toast-close')) {
      $toastContainer.removeChild(e.target.parentNode);

      render();
    }
  });
})();
