const popup = (() => {
  const $toggleInput = document.querySelector('.toggle-input');
  const $popupMessage = document.querySelector('.popup-message');

  let isActive = false;

  return {
    toggle() {
      document.querySelector('.toggle-layer').classList.toggle('hide', isActive);
      isActive = !isActive;
    },

    close() {
      this.toggle();
      $toggleInput.value = '';
    },

    showMessage() {
      $popupMessage.textContent = `from popup : ${$toggleInput.value}`;
      this.close();
    },
  };
})();

document.querySelector('.toggle-form').addEventListener('submit', e => {
  e.preventDefault();
  popup.showMessage();
});

document.body.addEventListener('click', e => {
  if (e.target.matches(['.toggle-popup', '.cancel'])) popup.close();
  if (e.target.classList.contains('toggle-layer')) popup.close();
});
