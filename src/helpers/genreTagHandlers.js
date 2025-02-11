import { FILTER_ID_ATTR } from '../constants.js';
import { fetchData } from "./fetchData.js";
import { initResultPage } from "../pages/resultPage.js";
import { errorView } from './errorView.js';
import { loadingView } from './loadingView.js';

/**
 * Listens to click events from genres or tags
 * Fetches search results by genre or tag name and loads the result page
 * Handles loading and errors
 * @param {String} containerId
 * @param {String} filter
 */
export const genreTagListener = (containerId, filter) => {
  const container = document.getElementById(containerId);
  container.addEventListener('click', async (event) => {
    try {
      if (event.target.tagName === 'SPAN') {
        loadingView();
        const data = await fetchData(event.target.dataset.filterId, filter);
        initResultPage(data.results);
      }
    } catch (error) {
      errorView(error);
    }
  });
};

/**
 * Populates container with genres or tags
 * @param {String} list
 * @param {String} containerId
 */
export const populateView = (list, containerId) => {
  const container = document.getElementById(containerId);
  list.forEach((item) => {
    const element = document.createElement('span');
    element.innerText = item.name;
    element.setAttribute(FILTER_ID_ATTR, item.id);
    container.appendChild(element);
  });
};