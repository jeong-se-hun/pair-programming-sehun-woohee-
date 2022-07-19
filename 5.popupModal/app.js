(() => {
  const $toggleLayer = document.querySelector('.toggle-layer');
  const $toggleInput = document.querySelector('.toggle-input');
  const $popUpMessage = document.querySelector('.popup-message');
  // TODO: submit???
  const addContent = () => {
    $popUpMessage.textContent = `from popup:  ${$toggleInput.value}`;
    $toggleLayer.classList.toggle('hide');
  };

  document.querySelector('body').addEventListener('click', (e) => {
    if (
      e.target.classList.contains('toggle-popup') ||
      e.target.classList.contains('cancel') ||
      e.target.classList.contains('toggle-layer')
    ) {
      $toggleLayer.classList.toggle('hide');
      $toggleInput.value = '';
    }

    if (e.target.classList.contains('ok')) {
      addContent(e);
    }
  });
  document.querySelector('body').addEventListener('keyup', (e) => {
    if (e.key !== 'Enter') return;
    addContent(e);
  });
})();
