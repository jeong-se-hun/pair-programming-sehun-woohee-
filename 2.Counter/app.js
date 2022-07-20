// (() => {
//   const $container = document.querySelector('.container');

//   const changeCount = (function () {
//     let num = 0;

//     return {
//       increase: () => ++num,
//       decrease: () => (num <= 0 ? 0 : --num),
//     };
//   })();

//   $container.addEventListener('click', e => {
//     const $counter = document.querySelector('.counter');

//     if (e.target.closest('button').classList.contains('increase')) $counter.textContent = changeCount.increase();

//     if (e.target.closest('button').classList.contains('decrease')) $counter.textContent = changeCount.decrease();
//   });
// })();

// 변수 삭제 ,  함수 축약문 설정, 변수 추가

(() => {
  const changeCount = (function () {
    let num = 0;

    return {
      increase() {
        return ++num;
      },

      decrease() {
        return num <= 0 ? 0 : --num;
      },
    };
  })();

  document.querySelector('.container').addEventListener('click', e => {
    const $counter = document.querySelector('.counter');
    const buttonClass = e.target.closest('button').classList;

    if (buttonClass.contains('increase')) $counter.textContent = changeCount.increase();

    if (buttonClass.contains('decrease')) $counter.textContent = changeCount.decrease();
  });
})();
