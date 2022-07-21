// (() => {
//   const $palindromeForm = document.querySelector('.palindrome-checker');

//   const checkPalindrome = str => {
//     const string = str.toUpperCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/ ]/gim, '');
//     return !!string && string.split('').reverse().join('') === string;
//   };

//   $palindromeForm.addEventListener('submit', e => {
//     e.preventDefault();
//     let palindromeInputValue = document.querySelector('.palindrome-input').value;
//     document.querySelector('.palindrome-result').innerHTML = checkPalindrome(palindromeInputValue)
//       ? `"${palindromeInputValue}" is a palindrome`
//       : `"${palindromeInputValue}" is not a palindrome`;
//     palindromeInputValue = '';
//   });
// })();

(() => {
  const checkPalindrome = str => {
    const string = str.toUpperCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/ ]/gim, '');
    return !!string && string.split('').reverse().join('') === string;
  };

  document.querySelector('.palindrome-checker').addEventListener('submit', e => {
    e.preventDefault();
    let palindromeInputValue = document.querySelector('.palindrome-input').value;
    document.querySelector('.palindrome-result').innerHTML = checkPalindrome(palindromeInputValue)
      ? `"${palindromeInputValue}" is a palindrome`
      : `"${palindromeInputValue}" is not a palindrome`;
    palindromeInputValue = '';
  });
})();
