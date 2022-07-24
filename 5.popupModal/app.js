(() => {
  const $toggleLayer = document.querySelector('.toggle-layer');
  const $toggleInput = document.querySelector('.toggle-input');
  // TODO:  trim????

  document.querySelector('body').addEventListener('click', e => {
    if (e.target.matches(['.toggle-popup', '.cancel', '.toggle-layer'])) {
      $toggleLayer.classList.toggle('hide');
      $toggleInput.value = '';
    }
  });

  document.querySelector('body').addEventListener('submit', e => {
    e.preventDefault();
    if (!e.target.classList.contains('toggle-form')) return;

    document.querySelector('.popup-message').textContent = `from popup : ${$toggleInput.value}`;

    $toggleLayer.classList.toggle('hide');
  });
})();
