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
    const string = str.toUpperCase().replace(/[^A-Za-z0-9가-힣]/gi, '');
    return string && string.split('').reverse().join('') === string;
  };

  document.querySelector('.palindrome-checker').addEventListener('submit', e => {
    e.preventDefault();

    const palindromeInp = document.querySelector('.palindrome-input');

    document.querySelector('.palindrome-result').innerHTML =
      // prettier ignore
      `"${palindromeInp.value}" is ${checkPalindrome(palindromeInp.value) ? '' : 'not'} a palindrome `;

    document.querySelector('.palindrome-input').value = '';

  });
})();

// - test -
// - “race car” ⇒ true
// - “도제 제도” ⇒ true
// - “대나무 너는 너무 나대” ⇒ true
// - “A man, a plan, a canal - Panama!” ⇒ true
// - “#” ⇒ false
// - “!@!” ⇒ false
