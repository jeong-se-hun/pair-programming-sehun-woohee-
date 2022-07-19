(() => {
  $palindromeForm = document.querySelector('.palindrome-checker');

  $palindromeForm.addEventListener('submit', e => {
    e.preventDefault();

    const palindromeInputValue = document.querySelector('.palindrome-input').value;

    document.querySelector('.palindrome-result').innerHTML = checkPalindrome(palindromeInputValue)
      ? `"${palindromeInputValue}" is a palindrome`
      : `"${palindromeInputValue}" is not a palindrome`;
    palindromeInputValue = '';
  });

  const checkPalindrome = str => {
    const string = str.toUpperCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim, '');
    return !!string && string.split('').reverse().join('') === string;
  };
})();
