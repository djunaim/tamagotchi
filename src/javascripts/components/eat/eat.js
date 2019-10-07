import utilities from '../../helpers/utilities';
import './eat.scss';

let full = 100;

const feed = (e) => {
  const buttonID = e.target.id;
  if (buttonID === 'dorayaki') {
    full = Math.min((Math.random() * full) + 10, 100);
    console.log(full);
    document.getElementById('eatBar').value = full;
  } else if (buttonID === 'burger') {
    full = Math.max((Math.random() * full) - 3, 0);
    console.log(full);
    document.getElementById('eatBar').value = full;
  }
};

const eventListener = () => {
  document.getElementById('dorayaki').addEventListener('click', feed);
  document.getElementById('burger').addEventListener('click', feed);
};

const eatButton = () => {
  let domString = '<h1>EAT</h1>';
  domString += `<progress max="100" value=${full} id="eatBar"></progress>`;
  domString += '<button id="dorayaki" type="button">dorayaki</button>';
  domString += '<button id="burger">Burger</button>';
  utilities.printToDOM('eat', domString);
  eventListener();
};

export default { eatButton };
