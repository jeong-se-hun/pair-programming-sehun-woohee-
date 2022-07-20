// eslint-disable-next-line import/extensions
import countryCode from './countryCode.js';

// do something!
const $suggester = document.querySelector('.autocomplete-suggester');
const $autocompleteSearch = document.querySelector('.autocomplete-search');
const $autocompleteSuggestList = document.querySelector('.autocomplete-suggest-list');
const $autocompleteToggleButton = document.querySelector('.autocomplete-toggle-button');

const render = str => {
  // prettier-ignore
  $autocompleteSuggestList.innerHTML = countryCode
    .filter(country => (str ? _.includes(country[1].toLowerCase(), str.toLowerCase()) : true))
    .map(([code, country], index) => `
      <li data-id="${index+1}" tabindex="${index + 1}">
        <span class="country">
          <img src="images/flag/${code}.svg" />
          <span>${country}</span>
        </span>
      </li>`).join('');
};

document.querySelector('.autocomplete-toggle-button').addEventListener('click', () => {
  $suggester.style.display = 'block';
  render();
  $autocompleteSearch.focus();
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

$autocompleteSearch.addEventListener('keydown', e => {
  if (e.key === 'Tab') {
    e.preventDefault();
    console.log($autocompleteSuggestList.children[0]);
    $autocompleteSuggestList.children[0].focus();
  }
});
document.querySelector('body').addEventListener('keydown', e => {
  console.log(document.activeElement);
});

$autocompleteSuggestList.addEventListener('focusout', e => {
  if (e.target.parentNode.lastElementChild === e.target) $autocompleteToggleButton.focus();
});

$autocompleteToggleButton.addEventListener('focusout', e => {
  if ($suggester.style.display === 'block' && e.key === 'Tab') {
    $autocompleteSearch.focus();
  }
});
$autocompleteSearch.addEventListener('keydown', e => {
  if (e.key === 'Tab') {
    e.preventDefault();
    $autocompleteSuggestList.firstElementChild.focus();
  }
});
