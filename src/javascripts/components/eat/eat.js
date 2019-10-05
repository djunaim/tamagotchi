import utilities from '../../helpers/utilities';
import './eat.scss';

let full = 100;

const feed = (e) => {
  const buttonID = e.target.id;
  if (buttonID === 'salad') {
    full = Math.min(full + 10, 100);
    utilities.printToDOM('max', full);
  } else if (buttonID === 'burger') {
    full = Math.max(full - 3, 0);
    utilities.printToDOM('max', full);
  }
};

const eventListener = () => {
  document.getElementById('salad').addEventListener('click', feed);
  document.getElementById('burger').addEventListener('click', feed);
};

const eatButton = () => {
  let domString = '<h1>EAT</h1>';
  domString += `<h2 id="max">${full}</h2>`;
  domString += '<button id="salad" type="button">Salad</button>';
  domString += '<button id="burger">Burger</button>';
  utilities.printToDOM('eat', domString);
  eventListener();
};

export default { eatButton };
