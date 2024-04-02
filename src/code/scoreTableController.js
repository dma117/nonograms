class ScoreTableController {
  constructor(data) {
    this.data = data;
    for (const el of data) {
      el.time = parseInt(el.time);
    }
  };

  addWinner(winnerData) {
    this.data.push(winnerData);
    if (this.data.length > 5) {
      this.data.shift();
    }
  }

  getScoreTableData() {
    const timeFormatted = (time) => time < 10 ? `0${time}` : `${time}`;
    const dataCopy = JSON.parse(JSON.stringify(this.data));
    dataCopy.sort((a, b) => a.time - b.time || dataCopy.indexOf(a) - dataCopy.indexOf(b));
    for (let i = 0; i < dataCopy.length; i += 1) {
      const winner = dataCopy[i];
      winner.number = `${i + 1}`;
      const [min, sec] = this.getTimeInMinSec(winner.time);
      winner.timeFormatted = `${timeFormatted(min)}:${timeFormatted(sec)}`;
    }
    return dataCopy;
  }

  getTimeInMinSec(seconds) {
    return [ Math.floor(seconds / 60), seconds % 60 ];
  }

  getData() {
    return this.data;
  }
}

export default ScoreTableController;