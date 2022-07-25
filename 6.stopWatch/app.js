// (() => {
//   const $laps = document.querySelector('.laps');
//   const [$startStopBtn, $resetLapBtn] = document.querySelectorAll('.control');

//   const stopwatch = {
//     defaultTime: '00:00:00',
//     startTime: 0,
//     elapsedTime: 0,
//     interval: null,

//     print(time) {
//       document.querySelector('.display').textContent = time;
//     },

//     addZero(number) {
//       if (number < 10) {
//         return '0' + number;
//       }
//       if (number > 99) {
//         return number.toString().slice(0, -1);
//       }
//       return number;
//     },

//     timeToString(time) {
//       const date = new Date(time);
//       const minutes = date.getUTCMinutes();
//       const seconds = date.getUTCSeconds();
//       const millisecond = date.getMilliseconds();
//       return `${this.addZero(minutes)}:${this.addZero(seconds)}:${this.addZero(millisecond)}`;
//     },

//     startTimer() {
//       this.elapsedTime = Date.now() - this.startTime;
//       const time = this.timeToString(this.elapsedTime);
//       this.print(time);
//     },

//     changeTextContent(leftBtnTxt, rightBtnTxt) {
//       $startStopBtn.textContent = leftBtnTxt;
//       $resetLapBtn.textContent = rightBtnTxt;
//     },

//     start() {
//       clearInterval(this.interval);
//       this.startTime = Date.now() - this.elapsedTime;
//       this.interval = setInterval(this.startTimer.bind(this, 10));
//       $resetLapBtn.disabled = false;
//       this.changeTextContent('Stop', 'Lap');
//     },

//     stop() {
//       clearInterval(this.interval);
//       this.changeTextContent('Start', 'Reset');
//     },

//     reset() {
//       clearInterval(this.interval);
//       this.print(this.defaultTime);
//       this.startTime = 0;
//       this.elapsedTime = 0;
//       this.interval = null;
//       $resetLapBtn.disabled = true;
//       $laps.style.display = 'none';
//       $laps.innerHTML = `
//       <div class="lap-title">Laps</div>
//       <div class="lap-title">Time</div>`;
//     },

//     laps() {
//       const lapsFragment = document.createDocumentFragment();
//       const lapsId = document.createElement('span');
//       const lapsValue = document.createElement('span');
//       lapsId.textContent = $laps.children.length / 2;
//       lapsValue.textContent = this.timeToString(this.elapsedTime);
//       lapsFragment.append(lapsId, lapsValue);
//       $laps.append(lapsFragment);
//       $laps.style.display = 'grid';
//     },
//   };

//   document.querySelector('.stopwatch').addEventListener('click', e => {
//     if (e.target.textContent === 'Start') return stopwatch.start();
//     if (e.target.textContent === 'Reset') return stopwatch.reset();
//     if (e.target.textContent === 'Stop') return stopwatch.stop();
//     if (e.target.textContent === 'Lap') return stopwatch.laps();
//   });
// })();

// (() => {
//   const $laps = document.querySelector('.laps');
//   const $resetLapBtn = document.querySelectorAll('.control')[1];

//   const stopwatch = {
//     defaultTime: '00:00:00',
//     startTime: 0,
//     elapsedTime: 0,
//     interval: null,

//     print(text) {
//       document.querySelector('.display').innerHTML = text;
//     },

//     addZero(number) {
//       if (number < 10) {
//         return '0' + number;
//       }
//       if (number > 99) {
//         return number.toString().slice(0, -1);
//       }
//       return number;
//     },

//     timeToString(time) {
//       const date = new Date(time);
//       const minutes = date.getUTCMinutes();
//       const seconds = date.getUTCSeconds();
//       const millisecond = date.getMilliseconds();
//       return `${this.addZero(minutes)}:${this.addZero(seconds)}:${this.addZero(millisecond)}`;
//     },

//     startTimer() {
//       this.elapsedTime = Date.now() - this.startTime;
//       const time = this.timeToString(this.elapsedTime);
//       this.print(time);
//     },

//     start() {
//       clearInterval(this.interval);
//       this.startTime = Date.now() - this.elapsedTime;
//       this.interval = setInterval(this.startTimer.bind(this, 10));
//     },

//     stop() {
//       clearInterval(this.interval);
//     },

//     reset() {
//       clearInterval(this.interval);
//       this.print(this.defaultTime);
//       this.startTime = 0;
//       this.elapsedTime = 0;
//       this.interval = null;
//     },

//     laps() {
//       const $lapsId = document.createElement('span');
//       const $lapsValue = document.createElement('span');
//       $lapsId.textContent = $laps.children.length / 2;
//       $lapsValue.textContent = this.timeToString(this.elapsedTime);
//       $laps.append($lapsId);
//       $laps.appendChild($lapsValue);
//     },
//   };

//   document.querySelector('.stopwatch').addEventListener('click', e => {
//     if (e.target.textContent === 'Start') {
//       $resetLapBtn.disabled = false;
//       $resetLapBtn.textContent = 'Lap';

//       e.target.textContent = 'Stop';

//       stopwatch.start();
//     } else if (e.target.textContent === 'Stop') {
//       $resetLapBtn.textContent = 'Reset';

//       e.target.textContent = 'Start';

//       stopwatch.stop();
//     }

//     if (e.target.textContent === 'Reset') {
//       stopwatch.reset();

//       e.target.disabled = true;
//       $laps.style.display = 'none';
//       $laps.innerHTML = `
//       <div class="lap-title">Laps</div>
//       <div class="lap-title">Time</div>`;
//     }

//     if (e.target.textContent === 'Lap') {
//       $laps.style.display = 'grid';

//       stopwatch.laps();
//     }

//     // 함수형 고려??
//   });
// })();
// 익스플로어에서 appendChild 지원
// 여러번 호출시 reflow가 많이 일어남

// const $lapsFragment = document.createDocumentFragment();
// const $lapsId = document.createElement('span');
// const $lapsValue = document.createElement('span');
// $lapsId.textContent = $laps.children.length / 2;
// $lapsValue.textContent = this.timeToString(this.elapsedTime);
// $lapsFragment.appendChild($lapsId);
// $lapsFragment.appendChild($lapsValue);
// $laps.append($lapsFragment);

// const $lapsId = document.createElement('span');
// const $lapsValue = document.createElement('span');
// $lapsId.textContent = $laps.children.length / 2;
// $lapsValue.textContent = this.timeToString(this.elapsedTime);
// $laps.append($lapsId);
// $laps.appendChild($lapsValue);
// $laps.style.display = 'grid';

(() => {
  const $laps = document.querySelector('.laps');
  const [$startStopBtn, $resetLapBtn] = document.querySelectorAll('.control');
  let isRuning = false;

  const stopwatch = {
    defaultTime: '00:00:00',
    startTime: 0,
    elapsedTime: 0,
    interval: null,

    print(time) {
      document.querySelector('.display').textContent = time;
    },

    addZero(number) {
      if (number < 10) {
        return '0' + number;
      }
      if (number > 99) {
        return number.toString().slice(0, -1);
      }
      return number;
    },

    timeToString(time) {
      const date = new Date(time);
      const minutes = date.getUTCMinutes();
      const seconds = date.getUTCSeconds();
      const millisecond = date.getMilliseconds();
      return `${this.addZero(minutes)}:${this.addZero(seconds)}:${this.addZero(millisecond)}`;
    },

    startTimer() {
      this.elapsedTime = Date.now() - this.startTime;
      const time = this.timeToString(this.elapsedTime);
      this.print(time);
    },

    changeTextContent(leftBtnTxt, rightBtnTxt) {
      $startStopBtn.textContent = leftBtnTxt;
      $resetLapBtn.textContent = rightBtnTxt;
    },

    start() {
      clearInterval(this.interval);
      this.startTime = Date.now() - this.elapsedTime;
      this.interval = setInterval(this.startTimer.bind(this, 10));
      $resetLapBtn.disabled = false;
      this.changeTextContent('Stop', 'Lap');
      isRuning = true;
    },

    stop() {
      clearInterval(this.interval);
      this.changeTextContent('Start', 'Reset');
      isRuning = false;
    },

    reset() {
      clearInterval(this.interval);
      this.print(this.defaultTime);
      this.startTime = 0;
      this.elapsedTime = 0;
      this.interval = null;
      $resetLapBtn.disabled = true;
      $laps.style.display = 'none';
      $laps.innerHTML = `
      <div class="lap-title">Laps</div>
      <div class="lap-title">Time</div>`;
      isRuning = false;
    },

    laps() {
      const lapsFragment = document.createDocumentFragment();
      const lapsId = document.createElement('span');
      const lapsValue = document.createElement('span');
      lapsId.textContent = $laps.children.length / 2;
      lapsValue.textContent = this.timeToString(this.elapsedTime);
      lapsFragment.append(lapsId, lapsValue);
      $laps.append(lapsFragment);
      $laps.style.display = 'grid';
    },
  };
  $startStopBtn.addEventListener('click', () => {
    if (isRuning) stopwatch.stop();
    else stopwatch.start();
  });
  $resetLapBtn.addEventListener('click', () => {
    if (isRuning) stopwatch.laps();
    else stopwatch.reset();
  });
})();
