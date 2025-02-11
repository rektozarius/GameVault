import { 
  GAME_GENRES_CONTAINER_ID, 
  USER_INTERFACE_ID, 
  API_FILTERS, 
  GAME_TAGS_CONTAINER_ID
} from '../constants.js';
import { genreTagListener } from '../helpers/genreTagHandlers.js';
import { createGameView, updateGameView } from '../views/gameView.js';

export const initGamePage = (game) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const gameContainer = createGameView(game);
  userInterface.appendChild(gameContainer);

  updateGameView(game);
  genreTagListener(GAME_GENRES_CONTAINER_ID, API_FILTERS.genres);
  genreTagListener(GAME_TAGS_CONTAINER_ID, API_FILTERS.tags);
};

