import utilities from '../../helpers/utilities';
import './pet.scss';

const petPrint = () => {
  const petPic = '<img src="/src/images/doraemon1.png">';
  utilities.printToDOM('pet', petPic);
};

export default { petPrint };
