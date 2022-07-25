// // eslint-disable-next-line import/extensions
// import countryCode from './countryCode.js';

// const $suggester = document.querySelector('.autocomplete-suggester');
// const $autocompleteSearch = document.querySelector('.autocomplete-search');
// const $autocompleteSuggestList = document.querySelector('.autocomplete-suggest-list');
// const $autocompleteToggleButton = document.querySelector('.autocomplete-toggle-button');

// let inputValue = '';

// const render = str => {
//   const reg = new RegExp(`${str}`, 'i');
//   // prettier-ignore
//   inputValue=str

//   $autocompleteSuggestList.innerHTML = countryCode
//     .filter(country => (str ? _.includes(country[1].toLowerCase(), str.toLowerCase()) : true))
//     .map(
//       ([code, country]) => `
//       <li tabindex="0">
//         <span class="country">
//           <img src="images/flag/${code}.svg" />
//           <span>${str ? country.replace(reg, `<b>${country.match(reg).join('')}</b>`) : country}</span>
//         </span>
//       </li>`
//     )
//     .join('');
//   if ($autocompleteSuggestList.textContent === '') $autocompleteSuggestList.innerHTML = `No results matched '${str}'`;
// };

// $autocompleteToggleButton.addEventListener('click', () => {
//   $suggester.style.display = $suggester.style.display === 'block' ? 'none' : 'block';
//   render();
//   $autocompleteSearch.focus();
// });

// $autocompleteSearch.addEventListener(
//   'input',
//   _.throttle(
//     e => {
//       if (inputValue !== e.target.value) render(e.target.value);
//     },
//     400,
//     { leading: false }
//   )
// );

// $autocompleteSearch.addEventListener('keydown', e => {
//   if (e.key === 'Tab') {
//     e.preventDefault();
//     $autocompleteSuggestList.children[0].focus();
//   }
// });

// $autocompleteSuggestList.addEventListener('keydown', e => {
//   if (e.key === 'ArrowUp') {
//     e.preventDefault();
//     e.target.previousElementSibling
//       ? e.target.previousElementSibling.focus()
//       : e.target.parentNode.lastElementChild.focus();
//   }
//   if (e.key === 'ArrowDown') {
//     e.preventDefault();
//     e.target.nextElementSibling ? e.target.nextElementSibling.focus() : e.target.parentNode.firstElementChild.focus();
//   }
//   if (e.key === 'Enter') $autocompleteToggleButton.querySelector('span').innerHTML = e.target.innerHTML;
// });

// document.querySelector('body').addEventListener('click', e => {
//   if (!e.target.closest('.autocomplete')) $suggester.style.display = 'none';
// });

// $autocompleteSuggestList.addEventListener('click', e => {
//   const $li = e.target.closest('li');
//   if (!$li) return;
//   $autocompleteToggleButton.querySelector('span').innerHTML = $li.innerHTML;
// });
// TODO:  공백일 경우
// TODO: updown 하나로
// eslint-disable-next-line import/extensions
import countryCode from './countryCode.js';

const $suggester = document.querySelector('.autocomplete-suggester');
const $autocompleteSearch = document.querySelector('.autocomplete-search');
const $autocompleteSuggestList = document.querySelector('.autocomplete-suggest-list');
const $autocompleteToggleButton = document.querySelector('.autocomplete-toggle-button');
let inputValue = '';

const autocomplete = {
  render(str) {
    const reg = new RegExp(`${str}`, 'i');

    inputValue = str;

    $autocompleteSuggestList.innerHTML = countryCode
      .filter(country => (str ? _.includes(country[1].toLowerCase(), str.toLowerCase()) : true))
      .map(
        ([code, country]) => `
      <li tabindex="0">
        <span class="country">
          <img src="images/flag/${code}.svg" />
          <span>${str ? country.replace(reg, `<b>${country.match(reg).join('')}</b>`) : country}</span>
        </span>
      </li>`
      )
      .join('');
    if ($autocompleteSuggestList.textContent === '') $autocompleteSuggestList.innerHTML = `No results matched '${str}'`;
  },

  toggle(swap) {
    if (swap === 'off') $suggester.style.display = 'none';
    else $suggester.style.display = $suggester.style.display === 'block' ? 'none' : 'block';
  },
};

// focus 함수 뺄까?

$autocompleteToggleButton.addEventListener('click', () => {
  autocomplete.toggle();
  autocomplete.render(inputValue);
  $autocompleteSearch.focus();
});

document.body.addEventListener('click', e => {
  if (!e.target.closest('.autocomplete')) autocomplete.toggle('off');
});

$autocompleteSuggestList.addEventListener('click', e => {
  const $li = e.target.closest('li');
  if ($li) $autocompleteToggleButton.querySelector('span').innerHTML = $li.innerHTML;
});

$autocompleteSearch.addEventListener(
  'input',
  _.throttle(
    e => {
      if (inputValue !== e.target.value) autocomplete.render(e.target.value);
    },
    400,
    { leading: false }
  )
);

$autocompleteSuggestList.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    e.target.previousElementSibling
      ? e.target.previousElementSibling.focus()
      : e.target.parentNode.lastElementChild.focus();
  }
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    e.target.nextElementSibling ? e.target.nextElementSibling.focus() : e.target.parentNode.firstElementChild.focus();
  }
  if (e.key === 'Enter') $autocompleteToggleButton.querySelector('span').innerHTML = e.target.innerHTML;
});
