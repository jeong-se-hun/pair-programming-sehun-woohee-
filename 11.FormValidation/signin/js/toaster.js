const $body = document.body;

const toaster = {
  make({ type, title, message }) {
    const $toast = document.createElement('div');

    $toast.classList.add('toast', type);
    $toast.style.bottom = `0px`;
    $toast.innerHTML = `
      <h4 class="toast-title">${title}</h4>
      <div class="toast-message">
      <svg width="24" height="24">
      <use xlink:href="#${type}" />
      </svg>
      <p>${message}</p>
      </div>
      <a class="toast-close">&times;</a>
      `;

    $body.appendChild($toast);

    return $toast;
  },

  remove(toast) {
    if (toast.matches('body>.toast')) $body.removeChild(toast);
  },

  render(toastContent) {
    const $newToast = this.make(toastContent);
    setTimeout(() => this.remove($newToast), 3000);
  },
};

export default toaster;
