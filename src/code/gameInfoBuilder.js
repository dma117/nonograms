export const buildGameInfo = (currentGameText) => {
  const div = document.createElement('div');
  div.classList.add('game-info-container');
  const p1 = document.createElement('p');
  p1.classList.add('current-game');
  p1.classList.add('game__info');
  p1.innerText = currentGameText;
  const p2 = document.createElement('p');
  p2.id = 'timer';
  p2.classList.add('game__info');
  div.append(
    p1,
    p2
  );
  return div;
}