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
  setSuggestItem($selectedItem) {
    $autocompleteToggleButton.querySelector('span').innerHTML = $selectedItem.innerHTML;
  },
};

$autocompleteToggleButton.addEventListener('click', () => {
  autocomplete.toggle();
  autocomplete.render(inputValue);
  $autocompleteSearch.focus();
});

document.body.addEventListener('click', e => {
  if (!$suggester.classList.contains('hide') || !e.target.closest('.autocomplete')) autocomplete.toggle('off');
});

$autocompleteSuggestList.addEventListener('click', e => {
  const $li = e.target.closest('li');
  if ($li) autocomplete.setSuggestItem($li);
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
  if (e.key === 'Enter') autocomplete.setSuggestItem(e.target);
});
