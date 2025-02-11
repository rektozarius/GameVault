import { initHomePage } from './pages/homePage.js';
import { errorView } from './helpers/errorView.js';
import { fetchData } from './helpers/fetchData.js';
import { loadingView } from './helpers/loadingView.js';

/**
 * Initializes the application
 * Handles loading
 */
const loadApp = () => {
  loadingView();
  fetchAndLoad();
};

/**
 * Fetches the genres array and loads the home page
 * Handles errors
 */
const fetchAndLoad = async () => {
  try {
    const data = await fetchData();
    initHomePage(data.results);
  } catch (error) {
    errorView(error.message);
  }
};

window.addEventListener('load', loadApp);
