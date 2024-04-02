export const buildMenu = (data, currentGameText, audio, theme) => {
  const nav = document.createElement('nav');
  nav.classList.add('menu');

  const currentGameDiv = document.createElement('div');
  currentGameDiv.classList.add('current-game-container');
  currentGameDiv.classList.add('option');
  const currentGameHeader = document.createElement('h2');
  currentGameHeader.classList.add('option__name');
  currentGameHeader.innerText = 'Current game';
  const p = document.createElement('p');
  p.classList.add('current-game');
  p.classList.add('option__description');
  p.innerText = currentGameText;
  currentGameDiv.append(
    currentGameHeader,
    p,
  );
  nav.append(currentGameDiv);

  const applyButton = document.createElement('button');
  applyButton.classList.add('menu__button');
  applyButton.id = 'apply-button';
  applyButton.innerText = 'Apply!';
  for (let el of data) {
    buildMenuOptions(el, nav);
  }
  nav.append(applyButton);
  const div = document.createElement('div');
  div.classList.add('options-container');
  const themeFormatted = theme[0].toUpperCase() + theme.slice(1);
  const buttonsData = [
    { 'id': 'reset-button', 'class': 'menu__button', 'text': 'Reset game'},
    { 'id': 'save-button', 'class': 'menu__button', 'text': 'Save game'},
    { 'id': 'upload-button', 'class': 'menu__button', 'text': 'Continue last game'},
    { 'id': 'randomize-button', 'class': 'menu__button', 'text': 'Random game'},
    { 'id': 'solution-button', 'class': 'menu__button', 'text': 'Solution'},
    { 'id': 'score-button', 'class': 'menu__button', 'text': 'High score table'},
    { 'id': 'sound-button', 'class': 'menu__button', 'text': `Sound ${audio}`},
    { 'id': 'theme-button', 'class': 'menu__button', 'text': `${themeFormatted} theme`},
  ]
  for (const buttonData of buttonsData) {
    const button = document.createElement('button');
    button.id = buttonData.id;
    button.classList.add(buttonData.class);
    button.innerText = buttonData.text;
    div.append(button);
  }
  nav.append(div);
  return nav;
}

export const setCurrentGameText = (currentGameText) => {
  document.querySelectorAll('.current-game').forEach(el => el.innerText = currentGameText);
};

export const uncheckChosenTemplate = (templateValue) => {
  document.querySelector(`#template-${getIDForTemplateValue(templateValue)}`).checked = false;
}

export const buildTemplates = (data) => {
  clearTemplates(document.querySelector('#template'));
  buildElementsInOption(data, document.querySelector('#template'));
}

const getIDForTemplateValue = (templateValue) => {
  return templateValue.replaceAll(' ', '-');
}

const buildMenuOptions = (data, src) => {
  const divId = data[0]; 
  const levelDiv = document.createElement('div');
  levelDiv.id = divId;
  levelDiv.classList.add('option');
  buildElementsInOption(data, levelDiv);
  src.append(levelDiv);
}

const clearTemplates = (src) => {
  src.textContent = '';
}

const buildElementsInOption = (data, src) => {
  const [divId, headerText, values, idPrefix, chosenOption] = data; 
  const levelHeader = document.createElement('h2');
  levelHeader.classList.add('option__name');
  levelHeader.innerText = headerText;
  src.append(levelHeader);
  const levelOptionsDiv = document.createElement('div');
  levelOptionsDiv.classList.add('option__variants');
  for (const value of values) {
    const input = document.createElement('input');
    input.classList.add('option__input');
    input.type = 'radio';
    input.id = `${idPrefix}-${getIDForTemplateValue(value)}`;
    input.name = idPrefix;
    input.value = value;
    if (value === chosenOption) {
      input.checked = true;
    }
    const label = document.createElement('label');
    label.classList.add('option__label');
    label.setAttribute('for', input.id);
    label.innerText = input.value;
    levelOptionsDiv.append(input, label);
  }
  src.append(levelOptionsDiv);
}



{/* <nav class="menu">
  <div id="current-game" class="option">
      <h2 class="option__name">Current game</h2>
      <p class="option__name">5x5 Plus</p>
  </div>
  <div id="level" class="option">
    <h2 class="option__name">Level</h2>
    <div class="option__variants">
      <input class="option__input" type="radio" id="level-1" name="level" value="easy" checked/>
      <label class="option__label" for="level-1">Easy</label>
      <input class="option__input" type="radio" id="level-2" name="level" value="medium"/>
      <label class="option__label" for="level-2">Medium</label>
      <input class="option__input" type="radio" id="level-3" name="level" value="hard"/>
      <label class="option__label" for="level-3">Hard</label>
    </div>
  </div>
  <div id="template" class="option">
    <h2 class="option__name">Template</h2>
    <div class="option__variants">
      <input class="option__input" type="radio" id="template-1" name="template" value="face"/>
      <label class="option__label" for="template-1">Face</label>
      <input class="option__input" type="radio" id="template-2" name="template" value="tree"/>
      <label class="option__label" for="template-2">tree</label>
      <input class="option__input" type="radio" id="template-3" name="template" value="chess-board"/>
      <label class="option__label" for="template-3">chess-board</label>
    </div>
  </div>
  <button class="menu__button" id="apply-button">Apply!</button>
</nav> */}