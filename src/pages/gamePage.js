import { USER_INTERFACE_ID} from '../constants.js';
import { createGameView } from '../views/gameView.js';

export const initGamePage = (gameData) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const gamePage = createGameView(gameData);
  userInterface.appendChild(gamePage);

  
};