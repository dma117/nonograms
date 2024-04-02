export const buildPlayArea = (playAreaRows, playAreaCols, leftCluesWidth, topCluesHeight, dividedSize) => {
  const playAreaElement = document.createElement('div');
  playAreaElement.classList.add('play-area');
  playAreaElement.style.gridTemplateRows = `repeat(${playAreaRows}, 1fr)`;
  playAreaElement.style.gridTemplateColumns = `repeat(${playAreaCols}, 1fr)`;

  let cellId = 0;
  for (let i = 0; i < playAreaRows; i += 1) {
    for (let j = 0; j < playAreaCols; j += 1) {
      const button = document.createElement('button');
      let buttonTypeClass = '';
      if (i < topCluesHeight && j < leftCluesWidth) {
        buttonTypeClass = 'button--empty';
      } else if (i < topCluesHeight || j < leftCluesWidth) {
        buttonTypeClass = 'clue';
      } else {
        buttonTypeClass = 'cell';
        button.setAttribute('data-id', cellId++);
      }
      if (buttonTypeClass !== 'button--empty') {
        if (j > 0) {
          button.classList.add('divider-left--thin');
        }
        if (i > 0) {
          button.classList.add('divider-top--thin');
        }
        if (j === leftCluesWidth || j > leftCluesWidth && (j - leftCluesWidth) % dividedSize === 0) {
          button.classList.add('divider-left--bold');
        }
        if (i === topCluesHeight || i > topCluesHeight && (i - topCluesHeight) % dividedSize === 0) {
          button.classList.add('divider-top--bold');
        }
      }
      button.classList.add('button', buttonTypeClass);
      playAreaElement.insertAdjacentElement('beforeend', button);
    }
  }
  return playAreaElement;
}

export const fillClues = (playAreaRows, playAreaCols, cellsAreaSize, cluesCols, cluesRows) => {
  fillColClues(playAreaRows, playAreaCols, cellsAreaSize, cluesCols);
  fillRowClues(playAreaRows, playAreaCols, cellsAreaSize, cluesRows);
}

const fillColClues = (playAreaRows, playAreaCols, cellsAreaSize, cluesCols) => {
  const grid = document.querySelector('.play-area').children;
  for (let i = 0; i < playAreaRows - cellsAreaSize; i += 1) {
    for (let j = playAreaCols - cellsAreaSize - 1; j <= playAreaCols; j += 1) {
      const indInGrid = i * playAreaCols + j;
      grid[indInGrid].innerText = '';
    }
  }
  for (let i = 0; i < cluesCols.length; i += 1) {
    let gridRow = playAreaRows - cellsAreaSize - 1;
    for (let j = cluesCols[i].length - 1; j >= 0; j -= 1) {
      const clueValue = cluesCols[i][j];
      if (clueValue != 0) {
        const indInGrid = gridRow * playAreaCols + (i + playAreaCols - cellsAreaSize);
        grid[indInGrid].innerText = clueValue;
        gridRow -= 1;
      }
    }
  }
}

const fillRowClues = (playAreaRows, playAreaCols, cellsAreaSize, cluesRows) => {
  const grid = document.querySelector('.play-area').children;
  for (let i = playAreaRows - cellsAreaSize - 1; i < playAreaRows; i += 1) {
    for (let j = 0; j < playAreaCols - cellsAreaSize; j += 1) {
      const indInGrid = i * playAreaCols + j;
      grid[indInGrid].innerText = '';
    }
  }
  for (let i = 0; i < cluesRows.length; i += 1) {
    let gridCol = playAreaCols - cellsAreaSize - 1;
    for (let j = cluesRows[i].length - 1; j >= 0; j -= 1) {
      const clueValue = cluesRows[i][j];
      if (clueValue != 0) {
        const indInGrid = (i + playAreaRows - cellsAreaSize) * playAreaCols + gridCol;
        grid[indInGrid].innerText = clueValue;
        gridCol -= 1;
      }
    }
  }
}