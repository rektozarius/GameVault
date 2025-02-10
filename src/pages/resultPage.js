import { USER_INTERFACE_ID, API_FILTERS, RESULT_CONTAINER_ID, RESULT_CARD_CLASS} from '../constants.js';
import { cacheGameData } from '../helpers/cacheGameData.js';
import { errorView } from '../helpers/errorView.js';
import { fetchData } from '../helpers/fetchData.js';
import { createResultView } from '../views/resultView.js';
import { initGamePage } from './gamePage.js';

export const initResultPage = (results) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const resultPage = createResultView(results);
  userInterface.appendChild(resultPage);

  resultListener(results);

};

const resultListener = (results) => {
  const resultContainer = document.getElementById(RESULT_CONTAINER_ID);
  let gameId = null;
  resultContainer.addEventListener('click', async (event) => {
    try {
      if (event.target.classList.contains(RESULT_CARD_CLASS)) {
        gameId = event.target.dataset.gameId;
      } else if (event.target.parentElement.classList.contains(RESULT_CARD_CLASS)) {
        gameId = event.target.parentElement.dataset.gameId;
      }
      if (gameId !== null) {
        if (sessionStorage.getItem(gameId)) {
          const cachedGameData = sessionStorage.getItem(gameId);
          initGamePage(JSON.parse(cachedGameData));
        } else {
          const gameSearchData = results.find((game) => (
            game.id == gameId));
          cacheAndLoad(gameSearchData);
        } 
      }
    } catch (error) {
      errorView(error.message);
    }
  });
};


const cacheAndLoad = async (gameSearchData) => {
  try {
    const gameDetailsData = await fetchData(gameSearchData.id, API_FILTERS.game);
    const gameData = cacheGameData(gameSearchData, gameDetailsData);
    initGamePage(gameData);
  } catch (error) {
    throw error;
  }
};

