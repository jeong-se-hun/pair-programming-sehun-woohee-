(() => {
  const $counter = document.querySelector('.counter');

  const changeCount = (function () {
    let count = 0;

    const render = () => {
      $counter.textContent = count;
    };

    return {
      increase() {
        count += 1;
        render();
      },

      decrease() {
        if (count > 0) count -= 1;
        render();
      },
    };

    // 메서드 & 이벤트 합칠지 고민
  })();

  document.querySelector('.increase').addEventListener('click', changeCount.increase);
  document.querySelector('.decrease').addEventListener('click', changeCount.decrease);

  // FIXME: 우리 숫자눌러도 이벤트가 인식되는 버그가있어
  // FIXME: closest button이 중복이긴 한데 변수.... 해야하나 그닥 안길어보여서
  // document.querySelector('.container').addEventListener('click', e => {
  //   if (e.target.closest('button') === null) return;
  //   document.querySelector('.counter').textContent = e.target.closest('button').classList.contains('increase')
  //     ? changeCount.increase()
  //     : changeCount.decrease();
  // });
})();
