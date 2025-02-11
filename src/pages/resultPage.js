import { USER_INTERFACE_ID, API_FILTERS, RESULT_CONTAINER_ID, RESULT_CARD_CLASS} from '../constants.js';
import { cacheGameData } from '../helpers/cacheGameData.js';
import { errorView } from '../helpers/errorView.js';
import { fetchData } from '../helpers/fetchData.js';
import { loadingView } from '../helpers/loadingView.js';
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
  
  resultContainer.addEventListener('click', async (event) => {
    const gameId = event.target.closest(`.${RESULT_CARD_CLASS}`).dataset.gameId;
    try {
      const cachedGame = sessionStorage.getItem(gameId);
      if (cachedGame) {   
        initGamePage(JSON.parse(cachedGame));
      } else {
        loadingView();
        const gameSearchData = results.find((game) => (game.id == gameId));
        cacheAndLoad(gameSearchData);
      } 
    } catch (error) {
      errorView(error.message);
    }
  });
};


const cacheAndLoad = async (gameSearchData) => {
  try {
    const gameDetailsData = await fetchData(gameSearchData.id, API_FILTERS.game);
    const game = cacheGameData(gameSearchData, gameDetailsData);
    initGamePage(game);
  } catch (error) {
    errorView(error.message);
  }
};