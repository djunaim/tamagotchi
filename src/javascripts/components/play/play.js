import utilities from '../../helpers/utilities';
import './play.scss';

let fun = 50;

const playing = (e) => {
  const buttonID = e.target.id;
  if (buttonID === 'superFun') {
    fun = Math.min(fun + 50, 100);
    utilities.printToDOM('playing', fun);
  } else if (buttonID === 'slightlyFun') {
    fun = Math.min(fun + 2, 100);
    utilities.printToDOM('playing', fun);
  }
};

const eventListener = () => {
  document.getElementById('superFun').addEventListener('click', playing);
  document.getElementById('slightlyFun').addEventListener('click', playing);
};

const playButton = () => {
  let domString = '<h1 class="playPosition">PLAY</h1>';
  domString += `<h2 class="playPosition" id="playing">${fun}</h2>`;
  domString += '<div class="playPosition"> <button id="superFun" type="button">Super Fun</button>';
  domString += '<button id="slightlyFun">Slightly Fun</button></div>';
  utilities.printToDOM('play', domString);
  eventListener();
};

export default { playButton };
