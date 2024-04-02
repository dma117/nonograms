class TimerController {
  constructor(timerElement) {
    this.timerElement = timerElement;
    this.minutes = 0;
    this.seconds = 0;
    this.intervalID = null;
  }

  startTimer() {
    this.showTime();
    this.intervalID = setInterval(() => {
      this.updateTime();
      this.showTime();
    }, 1000);
  }

  endTimer() {
    clearInterval(this.intervalID);
    this.intervalID = null;
  }

  updateTime() {
    this.seconds += 1;
    if (this.seconds >= 60) {
      this.minutes += 1;
      this.seconds = 0;
    }
    if (this.minutes === 99) {
      this.endTimer();
    }
  }

  continueFromTime(seconds) {
    [this.minutes, this.seconds] = this.getTimeInMinSec(seconds);
    this.startTimer();
  }

  getTimeInSeconds() {
    return this.minutes * 60 + this.seconds;
  }

  getTimeInMinSec(seconds) {
    return [ Math.floor(seconds / 60), seconds % 60 ];
  }

  showTime() {
    const timeFormatted = (time) => time < 10 ? `0${time}` : `${time}`;
    this.timerElement.innerText =`${timeFormatted(this.minutes)}:${timeFormatted(this.seconds)}`;
  }

  resetTime() {
    this.minutes = 0;
    this.seconds = 0;
    this.intervalID = null;
  }

  uploadTime(seconds) {
    [this.minutes, this.seconds] = this.getTimeInMinSec(seconds);
  }
}

export default TimerController;