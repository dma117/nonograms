export const buildModal = (time) => {
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');
  const winContainer = document.createElement('div');
  winContainer.classList.add('win-container');
  const p = document.createElement('p');
  p.classList.add('win-message');
  p.innerText = `Great! You have solved the nonogram in ${time} seconds!`;
  const button = document.createElement('button');
  button.classList.add('button-image');
  const img = document.createElement('img');
  img.classList.add('button-image__image');
  img.src = '././assets/icons/xmark.svg';
  img.alt = 'Close the message';
  button.append(img);
  winContainer.append(
    p,
    button,
  );
  modalContainer.append(winContainer);
  return modalContainer;
}

// /* <div class="modal-container">
// <div class="win-container">
//   <p class="win-message">Great! You have solved the nonogram!</p>
//   <button class="button-image">
//     <img class="button-image__image" src="./assets/icons/xmark.svg" alt="Close the message">
//   </button>
// </div>
// </div> */