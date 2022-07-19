(() => {
  const $container = document.querySelector('.container');

  const changeCount = (function () {
    let num = 0;

    return {
      increase: () => ++num,
      decrease: () => (num <= 0 ? 0 : --num),
    };
  })();

  $container.addEventListener('click', e => {
    const $counter = document.querySelector('.counter');

    if (e.target.closest('button').classList.contains('increase')) {
      $counter.textContent = changeCount.increase();
    }

    if (e.target.closest('button').classList.contains('decrease')) {
      $counter.textContent = changeCount.decrease();
    }
  });
})();
