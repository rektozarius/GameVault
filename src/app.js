import { fetchAndLoad } from './helpers/initialFetch.js';


const loadApp = () => {
  fetchAndLoad();
};

window.addEventListener('load', loadApp);
