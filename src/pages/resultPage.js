import { 
  USER_INTERFACE_ID, 
  API_FILTERS, 
  RESULT_CONTAINER_ID, 
  RESULT_CARD_CLASS
} from '../constants.js';
import { cacheGameData } from '../helpers/cacheGameData.js';
import { errorView } from '../helpers/errorView.js';
import { fetchData } from '../helpers/fetchData.js';
import { loadingView } from '../helpers/loadingView.js';
import { createResultView } from '../views/resultView.js';
import { initGamePage } from './gamePage.js';

/**
 * Initializes the result page
 * Updates the result page with search results
 * Calls the listener for the search results
 * @param {Array} results
 */
export const initResultPage = (results) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const resultPage = createResultView(results);
  userInterface.appendChild(resultPage);

  resultListener(results);

};

/**
 * Listens to click events from result cards
 * Loads the game page with cached game object or calls cache handler with incomplete game search object
 * Handles loading
 * @param {Array} results
 */
const resultListener = (results) => {
  const resultContainer = document.getElementById(RESULT_CONTAINER_ID);
  
  resultContainer.addEventListener('click', (event) => {
    const gameId = event.target.closest(`.${RESULT_CARD_CLASS}`).dataset.gameId;
    const cachedGame = sessionStorage.getItem(gameId);
    if (cachedGame) {   
      initGamePage(JSON.parse(cachedGame));
    } else {
      loadingView();
      const gameSearchData = results.find((game) => (game.id == gameId));
      cacheAndLoad(gameSearchData);
    } 
  });
};

/**
 * Fetches game details object
 * Calls cache function with game search object and game details object
 * Loads game page with cached game object
 * Handles errors
 * @param {Object} gameSearchData
 */
const cacheAndLoad = async (gameSearchData) => {
  try {
    const gameDetailsData = await fetchData(gameSearchData.id, API_FILTERS.game);
    const game = cacheGameData(gameSearchData, gameDetailsData);
    initGamePage(game);
  } catch (error) {
    errorView(error.message);
  }
};