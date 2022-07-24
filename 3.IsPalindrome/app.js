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
  // 왕따??
  const $palindromeInp = document.querySelector('.palindrome-input');

  const palindrome = {
    string: '',

    filterStr(str) {
      this.string = str.toUpperCase().replace(/[^A-Za-z0-9가-힣]/gi, '');
    },

    isPalindrome() {
      this.filterStr($palindromeInp.value);
      return this.string && this.string.split('').reverse().join('') === this.string;
    },

    clearInput() {
      document.querySelector('.palindrome-input').value = '';
    },

    print() {
      document.querySelector('.palindrome-result').textContent =
        // prettier ignore
        `"${$palindromeInp.value}" is ${this.isPalindrome($palindromeInp.value) ? '' : 'not'} a palindrome `;
      this.clearInput();
    },
  };

  document.querySelector('.palindrome-checker').addEventListener('submit', e => {
    e.preventDefault();
    palindrome.print();
  });
})();

// (() => {
// const isPalindrome = str => {
//   const string = str.toUpperCase().replace(/[^A-Za-z0-9가-힣]/gi, '');

//   return string && string.split('').reverse().join('') === string;
// };

//   document.querySelector('.palindrome-checker').addEventListener('submit', e => {
//     e.preventDefault();

//     const $palindromeInp = document.querySelector('.palindrome-input');

//     document.querySelector('.palindrome-result').innerHTML =
//       // prettier ignore
//       `"${$palindromeInp.value}" is ${isPalindrome($palindromeInp.value) ? '' : 'not'} a palindrome `;

//     document.querySelector('.palindrome-input').value = '';
//   });
// })();

// - test -
// - “race car” ⇒ true
// - “도제 제도” ⇒ true
// - “대나무 너는 너무 나대” ⇒ true
// - “A man, a plan, a canal - Panama!” ⇒ true
// - “#” ⇒ false
// - “!@!” ⇒ false
