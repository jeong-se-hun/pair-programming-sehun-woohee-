const $laps = document.querySelector('.laps');
const [$startStopBtn, $resetLapBtn] = document.querySelectorAll('.control');
let isRunning = false;

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
    this.startTime = Date.now() - this.elapsedTime;
    this.interval = setInterval(this.startTimer.bind(this, 10));
    $resetLapBtn.disabled = false;
    this.changeTextContent('Stop', 'Lap');
    isRunning = true;
  },

  stop() {
    clearInterval(this.interval);
    this.changeTextContent('Start', 'Reset');
    isRunning = false;
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
    isRunning = false;
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
  if (isRunning) stopwatch.stop();
  else stopwatch.start();
});

$resetLapBtn.addEventListener('click', () => {
  if (isRunning) stopwatch.laps();
  else stopwatch.reset();
});
