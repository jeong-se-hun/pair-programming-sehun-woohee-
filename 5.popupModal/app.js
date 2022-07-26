const $toggleInput = document.querySelector('.toggle-input');
let isActive = false;

const displayToggle = () => {
  document.querySelector('.toggle-layer').classList.toggle('hide', isActive);
  isActive = !isActive;
};

document.body.addEventListener('click', e => {
  if (e.target.matches(['.toggle-popup', '.cancel', '.toggle-layer'])) {
    displayToggle();
    $toggleInput.value = '';
  }
});

document.querySelector('.toggle-form').addEventListener('submit', e => {
  e.preventDefault();
  displayToggle();
  document.querySelector('.popup-message').textContent = `from popup : ${$toggleInput.value}`;
});

// 토글시 텍스트 초기화
