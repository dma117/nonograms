import { cellStates } from "./data.js";

class Cell {
  constructor() {
    this.isFilled = 0;
    this.isCrossed = 0;
  }

  getProp(prop) {
    if (prop === cellStates.fill) {
      return this.isFilled;
    } else if (prop === cellStates.cross) {
      return this.isCrossed;
    }
  }

  setProp(prop, value) {
    if (prop === cellStates.fill) {
      this.isFilled = value;
    } else if (prop === cellStates.cross) {
      this.isCrossed = value;
    }
  }
}

export default Cell;