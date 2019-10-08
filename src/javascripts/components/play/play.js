import utilities from '../../helpers/utilities';
import './play.scss';

let fun = 50;

const playing = (e) => {
  const buttonID = e.target.id;
  if (buttonID === 'superFun') {
    fun = Math.min((Math.random() * fun) + 50, 100);
    document.getElementById('playing').value = fun;
  } else if (buttonID === 'slightlyFun') {
    fun = Math.min((Math.random() * fun) + 2, 100);
    document.getElementById('playing').value = fun;
  }
};

const eventListener = () => {
  document.getElementById('superFun').addEventListener('click', playing);
  document.getElementById('slightlyFun').addEventListener('click', playing);
};

const playButton = () => {
  let domString = '<h1 class="playPosition">PLAY</h1>';
  domString += `<div class="playPosition"> <progress max="100" value=${fun} id="playing"></progress></div>`;
  domString += '<div class="playPosition"> <button id="superFun" type="button">Super Fun</button>';
  domString += '<button id="slightlyFun">Slightly Fun</button></div>';
  utilities.printToDOM('play', domString);
  eventListener();
};

export default { playButton };
