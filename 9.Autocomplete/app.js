// eslint-disable-next-line import/extensions
import countryCode from './countryCode.js';

// do something!
const $suggester = document.querySelector('.autocomplete-suggester');
const $autocompleteSearch = document.querySelector('.autocomplete-search');
const $autocompleteSuggestList = document.querySelector('.autocomplete-suggest-list');
const $autocompleteToggleButton = document.querySelector('.autocomplete-toggle-button');

const render = str => {
  $autocompleteSuggestList.innerHTML = countryCode
    .filter(country => (str ? _.includes(country[1].toLowerCase(), str.toLowerCase()) : true))
    .map(
      (country, index) =>
        `
   <li data-id="${index}" tabindex="${index + 1}">
     <span class="country">
       <img src="images/flag/${country[0]}.svg" />
       <span>${country[1]}</span>
     </span>
   </li>
   `
    )
    .join('');
};

document.querySelector('.autocomplete-toggle-button').addEventListener('click', () => {
  $suggester.style.display = 'block';
  render();
  $autocompleteSearch.focus();
  // TODO: foreach 밖에 없나???
});

$autocompleteSearch.addEventListener(
  'keyup',
  _.throttle(
    e => {
      render(e.target.value);
    },
    400,
    { leading: false }
  )
);

$autocompleteSuggestList.addEventListener('focusout', e => {
  if (e.target.parentNode.lastElementChild === e.target) console.log('jo');
});

// $autocompleteSuggestList.lastElementChild.addEventListener('keydown', e => {
//   if (e.keyCode !== 9) return;
//   const lastTabStop = $autocompleteSuggestList.lastElementChild;
//   const firstTabStop = $autocompleteToggleButton;
//   if (document.activeElement === lastTabStop) {
//     e.preventDefault();
//     firstTabStop.focus();
//   }
// });

// let focusedElementBeforeModal;
// const modal = document.querySelector('.modal');
// const modalOverlay = document.querySelector('.modal-overlay');
// const modalToggle = document.querySelector('.modal-toggle');

// modalToggle.addEventListener('click', openModal);

// function openModal() {
//   focusedElementBeforeModal = document.activeElement; // focus된게 아니라 'active'된 el.

//   modal.addEventListener('keydown', trapTabKey); // key를 누르고 있을때
//   modalOverlay.addEventListener('click', closeModal);

//   const signUpBtn = modal.querySelector('#signup');
//   signUpBtn.addEventListener('click', closeModal);

//   const focusableElementsString =
//     'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]'; // 포커스가 갈 수 있는 엘레먼트
//   let focusableElements = modal.querySelectorAll(focusableElementsString); // querySelectorAll은 nodelist로 반환함
//   focusableElements = Array.prototype.slice.call(focusableElements); // 노드 목록을 어레이로 변환, 변환하지 않아도 firstTabStop, lastTabStop 값 가져올 수 있음

//   const firstTabStop = focusableElements[0];
//   const lastTabStop = focusableElements[focusableElements.length - 1];

//   modal.style.display = 'block';
//   modalOverlay.style.display = 'block';

//   firstTabStop.focus();

//   function trapTabKey(e) {
//     // Check for TAB key press
//     if (e.keyCode === 9) {
//       // SHIFT + TAB
//       if (e.shiftKey) {
//         if (document.activeElement === firstTabStop) {
//           e.preventDefault();
//           lastTabStop.focus();
//         }

//         // TAB
//       } else if (document.activeElement === lastTabStop) {
//         e.preventDefault();
//         firstTabStop.focus();
//       }
//     }

//     // ESCAPE
//     if (e.keyCode === 27) {
//       closeModal();
//     }
//   }
// }

// function closeModal() {
//   modal.style.display = 'none';
//   modalOverlay.style.display = 'none';

//   focusedElementBeforeModal.focus();
// }
