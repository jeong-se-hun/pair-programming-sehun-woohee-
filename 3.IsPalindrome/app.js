(() => {
  const $palindromeForm = document.querySelector('.palindrome-checker');

  const checkPalindrome = str => {
    const string = str.toUpperCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]/ ]/gim, '');
    return !!string && string.split('').reverse().join('') === string;
  };

  $palindromeForm.addEventListener('submit', e => {
    e.preventDefault();

    const palindromeInput = document.querySelector('.palindrome-input');

    document.querySelector('.palindrome-result').innerHTML = checkPalindrome(palindromeInput.value)
      ? `"${palindromeInput.value}" is a palindrome`
      : `"${palindromeInput.value}" is not a palindrome`;
    palindromeInput.value = '';
  });
})();
