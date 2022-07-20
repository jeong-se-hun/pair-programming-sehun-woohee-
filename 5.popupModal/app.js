// (() => {
//   const $toggleLayer = document.querySelector('.toggle-layer');
//   const $toggleInput = document.querySelector('.toggle-input');
//   const $popUpMessage = document.querySelector('.popup-message');
//   // TODO: submit??? trim????
//   const addContent = () => {
//     // if ($toggleInput.value === '') return;
//     $popUpMessage.textContent = `from popup : ${$toggleInput.value}`;
//     $toggleLayer.classList.toggle('hide');
//   };

//   document.querySelector('body').addEventListener('click', e => {
//     if (
//       e.target.classList.contains('toggle-popup') ||
//       e.target.classList.contains('cancel') ||
//       e.target.classList.contains('toggle-layer')
//     ) {
//       $toggleLayer.classList.toggle('hide');
//       $toggleInput.value = '';
//     }

//     if (e.target.classList.contains('ok')) {
//       addContent();
//     }
//   });
//   document.querySelector('body').addEventListener('keyup', e => {
//     if (e.key !== 'Enter') return;
//     addContent();
// //   });
// // })();

// (() => {
//   const $toggleLayer = document.querySelector('.toggle-layer');
//   const $toggleInput = document.querySelector('.toggle-input');
//   // TODO: submit??? trim????
//   const addContent = () => {
//     // if ($toggleInput.value === '') return;
//     document.querySelector('.popup-message').textContent = `from popup : ${$toggleInput.value}`;
//     $toggleLayer.classList.toggle('hide');
//   };

//   document.querySelector('body').addEventListener('click', e => {
//     if (e.target.matches(['.toggle-popup', '.cancel', '.toggle-layer'])) {
//       $toggleLayer.classList.toggle('hide');
//       $toggleInput.value = '';
//     }

//     if (e.target.classList.contains('ok')) {
//       addContent();
//     }
//   });

//   document.querySelector('body').addEventListener('keyup', e => {
//     if (e.key !== 'Enter') return;
//     addContent();
//   });
// })();

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
