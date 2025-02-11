import { FILTER_ID_ATTR } from '../constants.js';
import { fetchData } from "./fetchData.js";
import { initResultPage } from "../pages/resultPage.js";
import { errorView } from './errorView.js';
import { loadingView } from './loadingView.js';

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

export const populateView = (list, containerId) => {
  const container = document.getElementById(containerId);
  list.forEach((item) => {
    const element = document.createElement('span');
    element.innerText = item.name;
    element.setAttribute(FILTER_ID_ATTR, item.id);
    container.appendChild(element);
  });
};