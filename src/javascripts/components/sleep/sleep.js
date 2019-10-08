import utilities from '../../helpers/utilities';
import './sleep.scss';

let energy = 50;

const rest = (e) => {
  const buttonID = e.target.id;
  if (buttonID === 'nap') {
    energy = Math.min((Math.random() * energy) + 10, 100);
    document.getElementById('sleepy').value = energy;
  } else if (buttonID === 'deepSlumber') {
    energy = Math.min((Math.random() * energy) + 60, 100);
    document.getElementById('sleepy').value = energy;
  }
};

const eventListener = () => {
  document.getElementById('nap').addEventListener('click', rest);
  document.getElementById('deepSlumber').addEventListener('click', rest);
};

const sleepButton = () => {
  let domString = '<h1 class="sleepPosition">SLEEP</h1>';
  domString += `<div class="sleepPosition"><progress max="100" value=${energy}  id="sleepy"></progress></div>`;
  domString += '<div class="sleepPosition"> <button id="nap" type="button">Nap</button>';
  domString += '<button id="deepSlumber">Deep Slumber</button> </div>';
  utilities.printToDOM('sleep', domString);
  eventListener();
};

export default { sleepButton };
