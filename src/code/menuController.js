import { levels, data } from './data.js';

export class MenuController {
  constructor(level, template) {
    this.currentLevel = level;
    this.chosenLevel = level;
    this.currentTemplate = template;
    this.chosenTemplate = null;
    this.isTemplateChosen = false;
  }

  getData() {
    return  {
      'level': ['level', 'Level', Object.values(levels), 'level', this.chosenLevel],
      'template': ['template', 'Template',  data.filter(el => el.level === this.chosenLevel).map(el => el.name), 'template', this.chosenTemplate],
    };
  }

  updateCurrentLevel(level) {
    this.currentLevel = level;
  }

  updateChosenLevel(level) {
    if (Object.keys(levels).includes(level)) {
      this.chosenLevel = level;
      return true;
    }
    return false;
  }

  updateChosenTemplate(template) {
    if (data.filter(el => el.level === this.chosenLevel).filter(el => el.name === template).length !== 0) {
      this.chosenTemplate = template;
      return true;
    }
    return false;
  }

  updateCurrentTemplate(template) {
    this.currentTemplate = template;
  }

  getCurrentGameText() {
    return `${this.currentLevel} / ${this.currentTemplate}`;
  }
}