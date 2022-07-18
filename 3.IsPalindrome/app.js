$palindromeForm = document.querySelector(".palindrome-checker");

$palindromeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const palindromeInput = document.querySelector(".palindrome-input");
  document.querySelector(".palindrome-result").innerHTML = checkPalindrome(
    palindromeInput.value
  )
    ? `"${palindromeInput.value}" is a palindrome`
    : `"${palindromeInput.value}" is not a palindrome`;
  palindromeInput.value = "";
});
// TODO: value까지 변수로 묶는것
// TODO: eslint 따움표
const checkPalindrome = (str) => {
  const string = str
    .toUpperCase()
    .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim, "");
  return !!string && string.split("").reverse().join("") === string;
};
