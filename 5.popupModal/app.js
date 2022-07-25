// (() => {
//   const $toggleLayer = document.querySelector('.toggle-layer');
//   const $toggleInput = document.querySelector('.toggle-input');
//   const isActive= false

//   const toggleModal = () => $toggleLayer.classList.toggle('hide');
//   const renderMessage = () => {
//     document.querySelector('.popup-message').textContent = `from popup : ${$toggleInput.value}`;
//   };

//   document.querySelector('body').addEventListener('click', e => {
//     if (e.target.matches(['.toggle-popup', '.cancel', '.toggle-layer'])) {
//       toggleModal();
//       $toggleInput.value = '';
//     }
//   });

//   document.querySelector('.toggle-form').addEventListener('submit', e => {
//     e.preventDefault();
//     renderMessage();
//     toggleModal();
//   });
// })();

// TODO:  trim????

(() => {
  const $toggleLayer = document.querySelector('.toggle-layer');
  const $toggleInput = document.querySelector('.toggle-input');
  let isActive = false;

  const displayToggle = () => {
    $toggleLayer.classList.toggle('hide', isActive);
    isActive = !isActive;
  };

  document.querySelector('body').addEventListener('click', e => {
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
  // document.querySelector('.toggle-popup').addEventListener('click', () => {});
  // document.quselector('.');
})();
