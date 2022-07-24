(() => {
  const $body = document.querySelector('body');

  // const append = () => {};
  // const remove = () => {};
  // const set = () => {};

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
    const idx = document.querySelectorAll('.toast').length;

    $toast.classList.add('toast', state);
    $toast.innerHTML = `
    <h4 class="toast-title">${state === 'success' ? `Well done! ${idx}` : `Check it out! ${idx}`}</h4>
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

// const animation = document.styleSheets[1].cssRules[10];

// const render = () => {
//   [...document.querySelectorAll('.toast')].forEach(($toast, i, arr) => {
//     animation.appendRule(`0% {transform: translate3D(100%,-${i * 100}%,0)}`);
//     animation.appendRule(`100% {transform: translate3D(0,${i * 100}%,0)}`);
//   });
// };
// 객체로 만들고 매서드 이름 이쁘게 짓고 addEvent 부분이 깨끗해야하고
// 책읽듯이 읽혀야하고 함수명은 동사 인수는 목적어  부분만 읽어도 이해가 되도록 전체다 읽어야 알면 안좋은 코드..
