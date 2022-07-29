const $palindromeInp = document.querySelector('.palindrome-input');
let palindromeValue = '';

const palindrome = {
  isPalindrome(str) {
    palindromeValue = str.toUpperCase().replace(/[^A-Za-z0-9가-힣]/gi, '');
    return palindromeValue && [...palindromeValue].reverse().join('') === palindromeValue;
  },

  render() {
    document.querySelector('.palindrome-result').textContent =
      // prettier ignore
      `"${$palindromeInp.value}" is ${this.isPalindrome($palindromeInp.value) ? '' : 'not'} a palindrome `;

    $palindromeInp.value = '';
  },
};

document.querySelector('.palindrome-checker').addEventListener('submit', e => {
  e.preventDefault();
  palindrome.render();
});
