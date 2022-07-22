// (() => {
//   const changeCount = (function () {
//     let num = 0;

//     return {
//       increase() {
//         return ++num;
//       },

//       decrease() {
//         return num <= 0 ? 0 : --num;
//       },
//     };
//   })();

//   document.querySelector('.container').addEventListener('click', e => {
//     console.log('AA');
//     const $counter = document.querySelector('.counter');
//     const buttonClass = e.target.closest('button').classList;

//     if (buttonClass.contains('increase')) $counter.textContent = changeCount.increase();

//     if (buttonClass.contains('decrease')) $counter.textContent = changeCount.decrease();
//   });
// })();

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

  // FIXME: 우리 숫자눌러도 이벤트가 인식되는 버그가있어
  // FIXME: closest button이 중복이긴 한데 변수.... 해야하나 그닥 안길어보여서
  document.querySelector('.container').addEventListener('click', e => {
    if (e.target.closest('button') === null) return;

    document.querySelector('.counter').textContent = e.target.closest('button').classList.contains('increase')
      ? changeCount.increase()
      : changeCount.decrease();
  });
})();
