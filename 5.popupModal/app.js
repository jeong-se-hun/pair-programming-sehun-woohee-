const $toggleLayer = document.querySelector('.toggle-layer');
const $toggleInput = document.querySelector('.toggle-input');

document.querySelector('body').addEventListener('click', e => {
  if (e.target.classList.contains('toggle-popup')) $toggleLayer.classList.toggle('hide');
  if (e.target.classList.contains('cancel') || e.target.classList.contains('toggle-layer'))
    $toggleLayer.classList.toggle('hide');

  if (e.target.classList.contains('ok')) {
    document.querySelector('.popup-message').textContent = `from popup:  ${$toggleInput.value}`;
    $toggleLayer.classList.toggle('hide');
  }
});
