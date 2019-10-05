import '../styles/main.scss';
import eat from './components/eat/eat';
import sleep from './components/sleep/sleep';
import fight from './components/fight/fight';
import play from './components/play/play';
import pet from './components/pet/pet';

const init = () => {
  eat.eatButton();
  sleep.sleepButton();
  fight.fightButton();
  play.playButton();
  pet.petPrint();
};

init();
