import '../styles/main.scss';
import eat from './components/eat/eat';
import sleep from './components/sleep/sleep';
import fight from './components/fight/fight';
import play from './components/play/play';

const init = () => {
  eat.eatButton();
  sleep.sleepButton();
  fight.fightButton();
  play.playButton();
};

init();
