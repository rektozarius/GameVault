import { USER_INTERFACE_ID, HOME_GENRES_CONTAINER_ID, SEARCH_BAR_ID, API_FILTERS } from '../constants.js';
import { createHomeView } from '../views/homeView.js';
import { loadingView } from '../helpers/loadingView.js';
import { fetchData } from "../helpers/fetchData.js";
import { initResultPage } from "../pages/resultPage.js";
import { errorView } from "../helpers/errorView.js";
import { genreTagListener, populateView } from '../helpers/genreTagHandlers.js';

export const initHomePage = (results) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  
  const homeContainer = createHomeView();
  userInterface.appendChild(homeContainer);

  populateView(results, HOME_GENRES_CONTAINER_ID);
  genreTagListener(HOME_GENRES_CONTAINER_ID, API_FILTERS.genres);
  searchListener();
};

const searchListener = () => {
  const searchBar = document.getElementById(SEARCH_BAR_ID);
  searchBar.addEventListener('keyup', async (event) => {
    try {
      if (event.key === 'Enter') {
        loadingView();
        const data = await fetchData(event.target.value, API_FILTERS.search);
        initResultPage(data.results);
      }
    } catch (error) {
      errorView(error.message);
    }
  });
};