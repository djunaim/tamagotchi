import utilities from '../helpers/utilities';

let energy = 50;

const rest = (e) => {
  const buttonID = e.target.id;
  if (buttonID === 'nap') {
    energy = Math.min(energy + 10, 100);
    utilities.printToDOM('sleepy', energy);
  } else if (buttonID === 'deepSlumber') {
    energy = Math.min(energy + 60, 100);
    utilities.printToDOM('sleepy', energy);
  }
};

const eventListener = () => {
  document.getElementById('nap').addEventListener('click', rest);
  document.getElementById('deepSlumber').addEventListener('click', rest);
};

const sleepButton = () => {
  let domString = '<h1 class="sleepPosition">SLEEP</h1>';
  domString += `<h2 class="sleepPosition" id="sleepy">${energy}</h2>`;
  domString += '<div class="sleepPosition"> <button id="nap" type="button">Nap</button>';
  domString += '<button id="deepSlumber">Deep Slumber</button> </div>';
  utilities.printToDOM('sleep', domString);
  eventListener();
};

export default { sleepButton };
