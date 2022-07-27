const $toggleInput = document.querySelector('.toggle-input');
const $popupMessage = document.querySelector('.popup-message');

let isActive = false;

const displayToggle = () => {
  document.querySelector('.toggle-layer').classList.toggle('hide', isActive);
  isActive = !isActive;
};

document.body.addEventListener('click', e => {
  if (e.target.matches(['.toggle-popup', '.cancel'])) {
    displayToggle();
    $toggleInput.value = '';
    $popupMessage.textContent = '';
  }
  if (e.target.classList.contains('toggle-layer')) {
    displayToggle();
    $toggleInput.value = '';
  }
});

document.querySelector('.toggle-form').addEventListener('submit', e => {
  e.preventDefault();
  displayToggle();
  $popupMessage.textContent = `from popup : ${$toggleInput.value}`;
});
