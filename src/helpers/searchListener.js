import { SEARCH_BAR_ID, API_FILTERS } from '../constants.js';
import { initResultPage } from "../pages/resultPage.js";
import { errorView } from "./errorView.js";
import { fetchData } from "./fetchData.js";
import { loadingHandler } from './loadingHandler.js';

export const searchListener = () => {
  const searchBar = document.getElementById(SEARCH_BAR_ID);
  searchBar.addEventListener('keyup', async (event) => {
    try {
      if (event.key === 'Enter') {
        loadingHandler();
        const data = await fetchData(event.target.value, API_FILTERS.search);
        initResultPage(data.results);
      }
    } catch (error) {
      errorView(error.message);
    }
  });
};
