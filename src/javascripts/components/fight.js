import utilities from '../helpers/utilities';

let strength = 100;

const action = (e) => {
  const buttonID = e.target.id;
  if (buttonID === 'braveRun') {
    strength = Math.min(strength + 1, 100);
    utilities.printToDOM('action', strength);
  } else if (buttonID === 'violence') {
    strength = Math.max(strength - 10, 0);
    utilities.printToDOM('action', strength);
  }
};

const eventListener = () => {
  document.getElementById('braveRun').addEventListener('click', action);
  document.getElementById('violence').addEventListener('click', action);
};

const fightButton = () => {
  let domString = '<h1>FIGHT</h1>';
  domString += `<h2 id="action">${strength}</h2>`;
  domString += '<button id="braveRun" type="button">Running Bravely</button>';
  domString += '<button id="violence">Violence</button>';
  utilities.printToDOM('fight', domString);
  eventListener();
};

export default { fightButton };
