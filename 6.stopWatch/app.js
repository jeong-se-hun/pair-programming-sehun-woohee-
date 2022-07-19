const $stopwatch = document.querySelector('.stopwatch');
const $laps = document.querySelector('.laps');

const stopwatch = {
  defaultTime: '00:00:00',
  startTime: 0,
  elapsedTime: 0,
  interval: null,

  print(text) {
    document.querySelector('.display').innerHTML = text;
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
    return `${this.addZero(minutes)}:${this.addZero(seconds)}:${this.addZero(
      millisecond
    )}`;
  },

  startTimer() {
    this.elapsedTime = Date.now() - this.startTime;
    const time = this.timeToString(this.elapsedTime);
    this.print(time);
  },

  start() {
    clearInterval(this.interval);
    this.startTime = Date.now() - this.elapsedTime;
    this.interval = setInterval(this.startTimer.bind(this, 10));
  },

  stop() {
    console.log(this.interval);
    clearInterval(this.interval);
  },

  reset() {
    clearInterval(this.interval);
    this.print(this.defaultTime);
    this.startTime = 0;
    this.elapsedTime = 0;
    this.interval = null;
  },

  laps() {
    const lapsId = document.createElement('div');
    lapsId.textContent = document.querySelector('.laps').children.length / 2;
    document.querySelector('.laps').appendChild(lapsId);
    const lapsValue = document.createElement('div');
    lapsValue.textContent = this.timeToString(this.elapsedTime);
    document.querySelector('.laps').appendChild(lapsValue);
  },
};
$stopwatch.addEventListener('click', (e) => {
  if (e.target.textContent === 'Start') {
    e.target.nextElementSibling.textContent = 'Lap';
    e.target.nextElementSibling.disabled = false;
    e.target.textContent = 'Stop';
    stopwatch.start();
  } else if (e.target.textContent === 'Stop') {
    e.target.nextElementSibling.textContent = 'Reset';
    e.target.textContent = 'Start';
    stopwatch.stop();
  }

  if (e.target.textContent === 'Reset') {
    stopwatch.reset();
    $laps.style.display = 'none';
    e.target.disabled = true;
    document.querySelector('.laps').innerHTML = `
    <div class="lap-title">Laps</div>
    <div class="lap-title">Time</div>`;
  }

  if (e.target.textContent === 'Lap') {
    $laps.style.display = 'grid';
    stopwatch.laps();
  }
});
