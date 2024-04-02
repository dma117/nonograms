export const buildScoreTable = (data) => {
  const container = document.createElement('div');
  container.classList.add('modal-container');
  
  const table = document.createElement('div');
  table.classList.add('score-table');

  const title = document.createElement('h2');
  title.classList.add('score-table__title');
  title.innerText = 'High score table';
  table.append(title);

  const button = document.createElement('button');
  button.classList.add('button-image');
  const img = document.createElement('img');
  img.classList.add('button-image__image');
  img.src = '././assets/icons/xmark.svg';
  img.alt = 'Close the message';
  button.append(img);
  table.append(button);

  const headersData = [
    { 'class': 'score-table__header', 'text': '№' },
    { 'class': 'score-table__header', 'text': 'Difficulty' },
    { 'class': 'score-table__header', 'text': 'Name' },
    { 'class': 'score-table__header', 'text': 'Time' },
  ];

  for (const headerData of headersData) {
    const header = document.createElement('h3');
    header.classList.add(headerData.class);
    header.innerText = headerData.text;
    table.append(header);
  }
  
  const scoreInfoEl = () => {
    const p = document.createElement('p');
    p.classList.add('score-table__info');
    return p;
  }
  for (const winner of data) {
    const number = scoreInfoEl();
    number.innerText = winner.number;
    const difficulty = scoreInfoEl();
    difficulty.innerText = winner.level;
    const name = scoreInfoEl();
    name.innerText = winner.template;
    const time = scoreInfoEl();
    time.innerText = winner.timeFormatted;
    table.append(
      number,
      difficulty,
      name,
      time,
    );
  }

  container.append(table);
  return container;
};


/* <div class="score-table-container">
  <div class="score-table">
    <h2 class="score-table__title">High score table</h2>
    <button class="button-image">
      <img class="button-image__image" src="./assets/icons/xmark.svg" alt="Close the message">
    </button>
    <h3 class="score-table__header">№</h3>
    <h3 class="score-table__header">Difficulty</h3>
    <h3 class="score-table__header">Name</h3>
    <h3 class="score-table__header">Time</h3>
    <p class="score-table__info">1</p>
    <p class="score-table__info">Easy</p>
    <p class="score-table__info">Puzzle</p>
    <p class="score-table__info">01:00</p>
    <p class="score-table__info">1</p>
    <p class="score-table__info">Easy</p>
    <p class="score-table__info">Puzzle</p>
    <p class="score-table__info">01:00</p>
    <p class="score-table__info">1</p>
    <p class="score-table__info">Easy</p>
    <p class="score-table__info">Puzzle</p>
    <p class="score-table__info">01:00</p>
    <p class="score-table__info">1</p>
    <p class="score-table__info">Easy</p>
    <p class="score-table__info">Puzzle</p>
    <p class="score-table__info">01:00</p>
    <p class="score-table__info">1</p>
    <p class="score-table__info">Easy</p>
    <p class="score-table__info">Puzzle</p>
    <p class="score-table__info">01:00</p>
  </div>
</div> */