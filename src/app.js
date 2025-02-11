import { initHomePage } from './pages/homePage.js';
import { errorView } from './helpers/errorView.js';
import { fetchData } from './helpers/fetchData.js';
import { loadingView } from './helpers/loadingView.js';

const loadApp = () => {
  loadingView();
  fetchAndLoad();
};

const fetchAndLoad = async () => {
  try {
    const data = await fetchData();
    initHomePage(data.results);
  } catch (error) {
    errorView(error.message);
  }
};

window.addEventListener('load', loadApp);
