import Cell from './cell.js';
import { cellStates, data, sizes } from './data.js';

class PlayAreaController {
  constructor(size, level, template) {
    this.size = size;
    this.level = level;
    this.data = JSON.parse(JSON.stringify(data));
    this.setTemplateName(template);
    this.setCells();
  }

  setSize(size) {
    this.size = size;
  }
  
  setLevel(level) {
    this.level = level;
  }

  setTemplateName(template) {
    const ind = this.data.findIndex(el => el.level === this.level && el.name === template);
    if (ind !== -1) {
      this.gameInd = ind;
      this.template = template;
    }
  }

  getTemplateName() {
    return this.data[this.gameInd].name;
  }

  getCellById(id) {
    const col = id % this.size;
    const row = (id - col) / this.size;
    return this.cells[row][col];
  }

  shuffleData() {
    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }
  
    const size = this.data.length;
    for (let i = 0; i < size - 1; i += 1) {
      const randomI = getRandomInt(i + 1, size);
      const tmp = this.data[i]; 
      this.data[i] = this.data[randomI];
      this.data[randomI] = tmp;
    }
  }

  randomizeData() {
    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }
    let newGameInd = getRandomInt(0, this.data.length);
    while (newGameInd === this.gameInd) {
      newGameInd = getRandomInt(0, this.data.length);
    }
    this.gameInd = newGameInd;
    this.level = this.data[this.gameInd].level;
    this.template = this.data[this.gameInd].name;
    this.size = sizes[this.level];
    this.setCells();
    return [this.level, this.template];
  }

  setCells() {
    this.cells = [];
    for (let i = 0; i < this.size; i += 1) {
      this.cells.push([]);
      for (let j = 0; j < this.size; j += 1) {
        this.cells[i].push(new Cell());
      }
    }
  }

  toggleCellById(id, state) {
    id = parseInt(id);
    const cell = this.getCellById(id);
    if (cell.getProp(state)) {
      cell.setProp(state, 0);
    } else {
      cell.setProp(state, 1);
    }
  }

  setCellStateById(id, state) {
    id = parseInt(id);
    const cell = this.getCellById(id);
    cell.setProp(state, 1);
  }

  resetCellById(id, state) {
    id = parseInt(id);
    const cell = this.getCellById(id);
    cell.setProp(state, 0);
  }

  checkWin() {
    for (let i = 0; i < this.size; i += 1) {
      for (let j = 0; j < this.size; j += 1) {
        if (this.cells[i][j].isFilled !== this.data[this.gameInd].key[i][j]) {
          return false;
        }
      }
    }
    return true;
  }

  setNextGame(size, level, template) {
    this.size = size;
    this.setLevel(level);
    this.setTemplateName(template);
    this.setCells();
  }

  resetTheGame() {
    this.setCells();
  }

  getCluesForColumns() {
    const colValues = [];
    for (let i = 0; i < this.size; i += 1) {
      let prevValue =  this.data[this.gameInd].key[0][i];
      colValues.push([prevValue]);
      for (let j = 1; j < this.size; j += 1) {
        const value = this.data[this.gameInd].key[j][i];
        if (prevValue === value) {
          colValues[i][colValues[i].length - 1] += value;
        } else {
          colValues[i].push(value);
        }
        prevValue = value;
      }
    }
    return colValues;
  }

  getCluesForRows() {
    const rowValues = [];
    for (let i = 0; i < this.size; i += 1) {
      let prevValue =  this.data[this.gameInd].key[i][0];
      rowValues.push([prevValue]);
      for (let j = 1; j < this.size; j += 1) {
        const value = this.data[this.gameInd].key[i][j];
        if (prevValue === value) {
          rowValues[i][rowValues[i].length - 1] += value;
        } else {
          rowValues[i].push(value);
        }
        prevValue = value;
      }
    }
    return rowValues;
  }

  getCluesForRow(row) {
    let prevValue = this.data[this.gameInd].key[row][0];
    const rowValues = [prevValue];
    for (let j = 1; j < this.size; j += 1) {
      const value = this.data[this.gameInd].key[row][j];
      if (prevValue === value) {
        rowValues[rowValues.length - 1] += value;
      } else {
        rowValues.push(value);
      }
      prevValue = value;
    }
    return rowValues;
  }

  getCellsToSave() {
    const cellsFormatted = [];
    for (let i = 0; i < this.size; i += 1) {
      cellsFormatted.push([]);
      for (let j = 0; j < this.size; j += 1) {
        cellsFormatted[i].push({
          [cellStates.fill]: this.cells[i][j].getProp(cellStates.fill),
          [cellStates.cross]: this.cells[i][j].getProp(cellStates.cross),
        });
      }
    }
    return cellsFormatted;
  }

  
  uploadCells(cellsFormatted) {
    this.cells = [];
    for (let i = 0; i < this.size; i += 1) {
      this.cells.push([]);
      for (let j = 0; j < this.size; j += 1) {
        const cell = new Cell();
        for (const [prop, value] of Object.entries(cellsFormatted[i][j])) {
          cell.setProp(prop, value);
        }
        this.cells[i].push(cell);
      }
    }
  }

  setSolution() {
    for (let i = 0; i < this.size; i += 1) {
      for (let j = 0; j < this.size; j += 1) {
        const isFilled = this.data[this.gameInd].key[i][j];
        this.cells[i][j].setProp(cellStates.fill, isFilled);
        if (isFilled) {
          this.cells[i][j].setProp(cellStates.cross, 0);
        }
      }
    }
  }
}

export default PlayAreaController;