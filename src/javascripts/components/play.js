import utilities from '../helpers/utilities';

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
  let domString = '<h1>PLAY</h1>';
  domString += `<h2 id="playing">${fun}</h2>`;
  domString += '<button id="superFun" type="button">Super Fun</button>';
  domString += '<button id="slightlyFun">Slightly Fun</button>';
  utilities.printToDOM('play', domString);
  eventListener();
};

export default { playButton };
