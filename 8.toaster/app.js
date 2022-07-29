(() => {
  const $body = document.body;
  const TOAST_HEIGHT = 100;

  const toaster = {
    set() {
      [...document.querySelectorAll('.toast')].forEach(($toast, i, arr) => {
        // prettier-ignore
        const location =(arr.length - 1 - i) * TOAST_HEIGHT;
        $toast.style.bottom = `${location}px`;
      });
    },

    make({ type, title, message }) {
      const idx = document.querySelectorAll('.toast').length;
      const $toast = document.createElement('div');

      $toast.classList.add('toast', type);

      $toast.innerHTML = `
      <h4 class="toast-title">${title} ${idx}</h4>
      <div class="toast-message">
      <svg width="24" height="24">
      <use xlink:href="#${type}" />
      </svg>
      <p>${message}</p>
      </div>
      <a class="toast-close">&times;</a>
      `;

      $body.appendChild($toast);

      this.set();

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

  const TOAST_TYPE = {
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
  };

  $body.addEventListener('click', e => {
    if (e.target.classList.contains('toast-close')) {
      toaster.remove(e.target.parentNode);
      toaster.set();
    }

    if (e.target.classList.contains('show-success'))
      toaster.render({ type: TOAST_TYPE.SUCCESS, title: 'Well done!', message: 'this is a success alert' });
    if (e.target.classList.contains('show-error'))
      toaster.render({ type: TOAST_TYPE.ERROR, title: 'Check it out!', message: 'this is an error alert' });
    if (e.target.classList.contains('show-warning'))
      toaster.render({ type: TOAST_TYPE.WARNING, title: 'Check it out!', message: 'this is a warning alert' });
  });
})();

// 객체로 만들고 매서드 이름 이쁘게 짓고 addEvent 부분이 깨끗해야하고
// 책읽듯이 읽혀야하고 함수명은 동사 인수는 목적어  부분만 읽어도 이해가 되도록 전체다 읽어야 알면 안좋은 코드..
// 삭제시 리플로우를 고려하면 한번에 떨어지는 것이 더 낫다.
// 인수로 메세지랑 석세스또는 상황을 보내줘서 생성해야함..

// 삭제시 리플로우를 고려하면 한번에 떨어지는 것이 더 낫다.
// 인수로 메세지랑 석세스또는 상황을 보내줘서 생성해야함..
