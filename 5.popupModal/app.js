// TODO:  trim????

(() => {
  const $toggleLayer = document.querySelector('.toggle-layer');
  const $toggleInput = document.querySelector('.toggle-input');
  let isActive = false;

  const displayToggle = () => {
    $toggleLayer.classList.toggle('hide', isActive);
    isActive = !isActive;
  };

  /// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
})();
