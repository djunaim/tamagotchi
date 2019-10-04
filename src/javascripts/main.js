import '../styles/main.scss';
import eat from './components/eat';
import sleep from './components/sleep';
import fight from './components/fight';
import play from './components/play';
import '../styles/eat.scss';
import '../styles/fight.scss';
import '../styles/play.scss';
import '../styles/sleep.scss';

const init = () => {
  eat.eatButton();
  sleep.sleepButton();
  fight.fightButton();
  play.playButton();
};

init();
