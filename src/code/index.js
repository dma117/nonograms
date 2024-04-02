import { buildPlayArea, fillClues } from './playAreaBuilder.js';
import PlayAreaController from './playAreaController.js';
import { levels, gameStates, sizes, data, cellStates, soundsEffects, themes } from './data.js';
import { buildMenu, buildTemplates, setCurrentGameText, uncheckChosenTemplate } from './menuBuilder.js';
import { MenuController } from './menuController.js';
import { buildGameInfo } from './gameInfoBuilder.js';
import TimerController from './timerController.js';
import { buildModal } from './modalBuilder.js';
import ScoreTableController from './scoreTableController.js';
import { buildScoreTable } from './scoreTableBuilder.js';
import AudioController from './audioController.js';
import ThemeController from './themeController.js';


let currentLevel = levels.easy;
let currentTemplate = data.filter(el => el.level === currentLevel)[0].name;
let currentGameState = gameStates.startGame;

const cellsAreaSize = () => sizes[currentLevel];

const dividedSize = 5;
const playAreaController = new PlayAreaController(cellsAreaSize(), currentLevel, currentTemplate);
const menuController = new MenuController(currentLevel, currentTemplate);
const localStorageKeys = {
  'last-game': (prefix) => `${prefix}-last`,
  'current-game': (prefix) => `${prefix}-current`,
  'score-table': (prefix) => `${prefix}-score`,
  'sound': (prefix) => `${prefix}-sound`,
  'theme': (prefix) => `${prefix}-theme`,
};

const topCluesHeight = () => {
  const colClues = playAreaController.getCluesForColumns();
  let maxLength = -1;
  for (let i = 0; i < colClues.length; i += 1) {
    const colCluesFiltered = colClues[i].filter(el => el !== 0);
    if (colCluesFiltered.length > maxLength) {
      maxLength = colCluesFiltered.length;
    }
  }
  return maxLength;
}
const leftCluesWidth = () => {
  const rowClues = playAreaController.getCluesForRows();
  let maxLength = -1;
  for (let i = 0; i < rowClues.length; i += 1) {
    const rowCluesFiltered = rowClues[i].filter(el => el !== 0);
    if (rowCluesFiltered.length > maxLength) {
      maxLength = rowCluesFiltered.length;
    }
  }
  return maxLength;
}

const playAreaRows = () => cellsAreaSize() + topCluesHeight();
const playAreaCols = () => cellsAreaSize() + leftCluesWidth();
const canPlayGame = () => {
  return currentGameState === gameStates.startGame ||
    currentGameState === gameStates.inProgress;
}
const themeToDisplay = (theme) => {
  if (theme === themes.light) {
    return themes.dark;
  }
  return themes.light;
}

(() => {
  const div = document.createElement('div');
  div.classList.add('play-area-container');
  div.append(
    buildGameInfo(menuController.getCurrentGameText()),
    buildPlayArea(playAreaRows(), playAreaCols(), leftCluesWidth(), topCluesHeight(), dividedSize),
  );
  let sound = 'off';
  if (!getSavedSound()) {
    sound = 'on';
  }
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main-container');
  document.querySelector('body').append(mainContainer);
  document.querySelector('.main-container').append(
    div,
    buildMenu(Object.values(menuController.getData()), menuController.getCurrentGameText(), sound, themeToDisplay(getSavedTheme())),
  );
  if (getSavedTheme() === themes.dark) {
    document.querySelector('.main-container').classList.add('main-container--dark');
  }
})();

const timerController = new TimerController(document.querySelector('#timer'));
timerController.showTime();

const scoreTableController = (() => {
  return new ScoreTableController(getSavedScoreData());
})();

const audioController = new AudioController(getSavedSound());
const themeController = new ThemeController(getSavedTheme());

fillClues(
  playAreaRows(),
  playAreaCols(),
  cellsAreaSize(),
  playAreaController.getCluesForColumns(),
  playAreaController.getCluesForRows()
);

disableContextMenu();
handleOnClickCell();

function disableContextMenu() {
  document.querySelector('.play-area').addEventListener(
    'contextmenu', (e) => {
      e.preventDefault();
      return false;
    }
  ); 
}

function handleOnClickCell() {
  document.querySelectorAll('.cell').forEach(el => {
    el.addEventListener('click', (e) => {
      if (!canPlayGame()) return;
      if (e.button === 0) {  // Main button pressed (left)
        if (currentGameState === gameStates.startGame) {
          currentGameState = gameStates.inProgress;
          timerController.startTimer();
        }
        e.target.classList.toggle('cell--darken');
        e.target.classList.remove('cell--crossed');
        const buttonId = el.getAttribute('data-id');
        playAreaController.toggleCellById(buttonId, cellStates.fill);
        playAreaController.resetCellById(buttonId, cellStates.cross);
        if (e.target.classList.contains('cell--darken')) {
          audioController.playAudio(soundsEffects.fill);
        } else {
          audioController.playAudio(soundsEffects.unfill);
        }
        handleWin();
      }
    });
    let isRightMouseDown = false;
    el.addEventListener('mousedown', (e) => {
      if (!canPlayGame()) return;
      if (e.button === 2) {
        isRightMouseDown = true;
      }
    });
    el.addEventListener('mouseup', (e) => {
      if (!canPlayGame()) return;
      if (e.button === 2 && isRightMouseDown && e.target === el) {
        if (currentGameState === gameStates.startGame) {
          currentGameState = gameStates.inProgress;
          timerController.startTimer();
        }
        e.target.classList.toggle('cell--crossed');
        e.target.classList.remove('cell--darken');
        const buttonId = el.getAttribute('data-id');
        playAreaController.toggleCellById(buttonId, cellStates.cross);
        playAreaController.resetCellById(buttonId, cellStates.fill);
        if (e.target.classList.contains('cell--crossed')) {
          audioController.playAudio(soundsEffects.cross);
        } else {
          audioController.playAudio(soundsEffects.uncross);
        }
        handleWin();
      }
      isRightMouseDown = false;
    });
  });
}

function handleWin() {
  if (playAreaController.checkWin()) {
    audioController.playAudio(soundsEffects.win);
    currentGameState = gameStates.win;
    timerController.endTimer();
    showModal();
    const winnerData = {
      'level': currentLevel,
      'template': currentTemplate,
      'time': timerController.getTimeInSeconds(),
    };
    scoreTableController.addWinner(winnerData);
    saveScoreData();
  }
}

function saveScoreData() {
  const data = scoreTableController.getData();
  const prefix = 'dma117';
  localStorage.setItem(localStorageKeys["score-table"](prefix), JSON.stringify(data));
}

function getSavedScoreData() {
  const prefix = 'dma117';
  if (!localStorage.hasOwnProperty(localStorageKeys["score-table"](prefix))) {
    return [];
  }
  const data = JSON.parse(localStorage.getItem(localStorageKeys["score-table"](prefix)));
  return data;
}

handleOnClickTemplate();
document.querySelectorAll('#level .option__input').forEach(el => {
  el.addEventListener('click', (e) => {
    if (menuController.chosenLevel === e.target.value) return;
    if (menuController.updateChosenLevel(e.target.value)) {
      audioController.playAudio(soundsEffects.other);
      menuController.isTemplateChosen = false;
      menuController.chosenTemplate = null;
      buildTemplates(menuController.getData().template);
      handleOnClickTemplate();
    }
  });
});

function handleOnClickTemplate() {
  document.querySelectorAll('#template .option__input').forEach(el => {
    el.addEventListener('click', (e) => {
      audioController.playAudio(soundsEffects.other);
      if (e.target.value === menuController.chosenTemplate) {
        menuController.isTemplateChosen = false;
        menuController.chosenTemplate = null;
        uncheckChosenTemplate(e.target.value);
      } else {
        menuController.isTemplateChosen = true;
        menuController.updateChosenTemplate(e.target.value);
      }
    });
  });
}

document.querySelector('#apply-button').addEventListener('click', () => {
  if (!menuController.isTemplateChosen) return;  // TODO add a visual effect for button (person should choose a template)
  audioController.playAudio(soundsEffects.other);
  timerController.endTimer();
  timerController.resetTime();
  timerController.showTime();
  currentGameState = gameStates.startGame;
  currentTemplate = menuController.chosenTemplate;
  currentLevel = menuController.chosenLevel;
  uncheckChosenTemplate(menuController.chosenTemplate);
  menuController.updateCurrentTemplate(menuController.chosenTemplate);
  menuController.updateCurrentLevel(menuController.chosenLevel);
  menuController.updateChosenTemplate(null);
  setCurrentGameText(menuController.getCurrentGameText());
  updatePlayArea(currentLevel, currentTemplate);
  menuController.isTemplateChosen = false;
});

function updatePlayArea(level, template) {
  playAreaController.setNextGame(cellsAreaSize(), level, template);
  document.querySelector('.play-area').innerContent = '';
  document.querySelector('.play-area').remove();
  document.querySelector('.play-area-container').append(
    buildPlayArea(playAreaRows(), playAreaCols(), leftCluesWidth(), topCluesHeight(), dividedSize),
  );
  disableContextMenu();
  handleOnClickCell();
  fillClues(
    playAreaRows(),
    playAreaCols(),
    cellsAreaSize(),
    playAreaController.getCluesForColumns(),
    playAreaController.getCluesForRows()
  );
}

document.querySelector('#reset-button').addEventListener('click', () => {
  if (currentGameState === gameStates.inProgress) {
    audioController.playAudio(soundsEffects.other);
    document.querySelectorAll('.cell').forEach(el => {
      el.classList.remove('cell--darken');
      el.classList.remove('cell--crossed');
    });
    playAreaController.resetTheGame();
  }
});

document.querySelector('#save-button').addEventListener('click', () => {
  audioController.playAudio(soundsEffects.other);
  const gameStatesObj = {
    'gameState': currentGameState,
    'level': currentLevel,
    'template': currentTemplate,
    'seconds': timerController.getTimeInSeconds(),
    'cells': playAreaController.getCellsToSave(),
  };
  const prefix = 'dma117';
  localStorage.setItem(localStorageKeys["last-game"](prefix), JSON.stringify(gameStatesObj));
});

document.querySelector('#upload-button').addEventListener('click', () => {
  const prefix = 'dma117';
  if (!localStorage.hasOwnProperty(localStorageKeys["last-game"](prefix))) return;
  audioController.playAudio(soundsEffects.other);
  const gameStatesObj = JSON.parse(localStorage.getItem(localStorageKeys["last-game"](prefix)));
  currentGameState = gameStatesObj.gameState;
  currentLevel = gameStatesObj.level;
  currentTemplate = gameStatesObj.template;
  timerController.endTimer();
  timerController.resetTime();
  timerController.showTime();
  if (currentGameState === gameStates.inProgress) {
    timerController.continueFromTime(gameStatesObj.seconds);
  } else {
    timerController.updateTime(gameStatesObj.seconds);
    timerController.showTime();
  }
  menuController.updateCurrentLevel(currentLevel);
  menuController.updateCurrentTemplate(currentTemplate);
  setCurrentGameText(menuController.getCurrentGameText());
  updatePlayArea(currentLevel, currentTemplate);
  playAreaController.uploadCells(gameStatesObj.cells);
  document.querySelectorAll('.cell').forEach(el => {
    const id = parseInt(el.getAttribute('data-id'));
    const cell = playAreaController.getCellById(id);
    if (cell.getProp(cellStates.fill)) {
      el.classList.add('cell--darken');
    }
    if (cell.getProp(cellStates.cross)) {
      el.classList.add('cell--crossed');
    }
  });
});

document.querySelector('#randomize-button').addEventListener('click', () => {
  audioController.playAudio(soundsEffects.randomize);
  const [level, template] = playAreaController.randomizeData();
  timerController.endTimer();
  timerController.resetTime();
  timerController.showTime();
  currentGameState = gameStates.startGame;
  currentTemplate = template;
  currentLevel = level;
  menuController.updateCurrentTemplate(currentTemplate);
  menuController.updateCurrentLevel(currentLevel);
  setCurrentGameText(menuController.getCurrentGameText());
  updatePlayArea(currentLevel, currentTemplate);
});

document.querySelector('#solution-button').addEventListener('click', () => {
  if (currentGameState === gameStates.win ||
    currentGameState === gameStates.solution) return;
  audioController.playAudio(soundsEffects.solution);
  timerController.endTimer();
  timerController.showTime();
  currentGameState = gameStates.solution;
  playAreaController.setSolution();
  document.querySelectorAll('.cell').forEach(el => {
    const id = parseInt(el.getAttribute('data-id'));
    const cell = playAreaController.getCellById(id);
    if (el.classList.contains('cell--darken') && !cell.getProp(cellStates.fill)) {
      el.classList.remove('cell--darken');
    }
    if (!el.classList.contains('cell--darken') && cell.getProp(cellStates.fill)) {
      el.classList.add('cell--darken');
      el.classList.remove('cell--crossed');
    }
  });
});

document.querySelector('#sound-button').addEventListener('click', (e) => {
  if (audioController.soundsOn) {
    audioController.playAudio(soundsEffects.other);
  }
  audioController.toggleSoundOn();
  if (audioController.soundsOn) {
    e.target.innerText = 'Sound off';
  } else {
    e.target.innerText = 'Sound on';
  }
  saveSound();
});

document.querySelector('#theme-button').addEventListener('click', (e) => {
  const strFormatted = (str) => {
    return str[0].toUpperCase() + str.slice(1) + ' theme';
  }
  audioController.playAudio(soundsEffects.other);
  themeController.toggleTheme();
  if (themeController.theme === themes.light) {
    e.target.innerText = strFormatted(themes.dark);
    document.querySelector('.main-container').classList.remove('main-container--dark');
  } else {
    e.target.innerText = strFormatted(themes.light);
    document.querySelector('.main-container').classList.add('main-container--dark');
  }
  saveTheme();
});

function saveSound() {
  const data = audioController.soundsOn;
  const prefix = 'dma117';
  localStorage.setItem(localStorageKeys["sound"](prefix), data);
}

function getSavedSound() {
  const prefix = 'dma117';
  if (!localStorage.hasOwnProperty(localStorageKeys["sound"](prefix))) {
    return 1;
  }
  const data = parseInt(localStorage.getItem(localStorageKeys["sound"](prefix)));
  return data;
}

function saveTheme() {
  const data = themeController.theme;
  const prefix = 'dma117';
  localStorage.setItem(localStorageKeys["theme"](prefix), data);
}

function getSavedTheme() {
  const prefix = 'dma117';
  if (!localStorage.hasOwnProperty(localStorageKeys["theme"](prefix))) {
    return themes.dark;
  }
  const data = localStorage.getItem(localStorageKeys["theme"](prefix));
  return data;
}

document.querySelector('#score-button').addEventListener('click', () => {
  showScoreTable();
  audioController.playAudio(soundsEffects.score);
});

function showScoreTable() {
  document.querySelector('.main-container').append(buildScoreTable(scoreTableController.getScoreTableData()));
  handleModal();
}

function showModal() {
  document.querySelector('.main-container').append(buildModal(timerController.getTimeInSeconds()));
  handleModal();
}

function handleModal() {
  document.querySelector('.modal-container')
    .addEventListener('click', (e) => e.stopImmediatePropagation());
  document.querySelector('.modal-container .button-image')
    .addEventListener('click', (e) => {
      e.stopImmediatePropagation();
      closeModal();
    });
}

function closeModal() {
  document.querySelector('.modal-container').innerContent = '';
  document.querySelector('.modal-container').remove();
  audioController.playAudio(soundsEffects.close);
}