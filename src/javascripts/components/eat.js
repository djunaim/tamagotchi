import utilities from '../helpers/utilities';

let full = 100;

const eventListener = () => {
  document.getElementById('salad').addEventListener('click', feed);
  document.getElementById('burger').addEventListener('click', feed);
};

const feed = (e) => {
  const buttonID = e.target.id;
  if (buttonID === 'salad' && maxFeed !== 100) {
    const newFull = full + 10;
    utilities.printToDOM('max', newFull);
  } else if (buttonID === 'burger') {
    const badFull = full - 3;
    utilities.printToDOM('max', badFull);
  }
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
