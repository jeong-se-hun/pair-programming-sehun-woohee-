// 클로저를 사용하여 유지 및 변경
// 양수 만 카운트

const $container = document.querySelector('.container');

const changeCount = (function () {
  let num = 0;

  return {
    add: () => ++num,
    minus: () => (num <= 0 ? 0 : --num),
  };
})();

$container.addEventListener('click', e => {
  const $counter = document.querySelector('.counter');

  if (e.target.closest('button').classList.contains('increase')) {
    $counter.textContent = changeCount.add();
  }

  if (e.target.closest('button').classList.contains('decrease')) {
    $counter.textContent = changeCount.minus();
  }
});
