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

  /// ////////////////////////////////////////////////////////////////////////////////////////////////////////

  document.querySelector('.increase').addEventListener('click', changeCount.increase);
  document.querySelector('.decrease').addEventListener('click', changeCount.decrease);
})();
