import { 
  HOME_CONTAINER_ID, 
  SEARCH_BAR_CONTAINER_ID, 
  SEARCH_BAR_ID, 
  GENRE_CONTAINER_ID,
  GENRE_ID_ATTR,
  API_FILTERS
} from "../constants.js";
import { fetchData } from "../helpers/fetchData.js";
import { initResultPage } from "../pages/resultPage.js";

/**
 * Create the home page
 * @returns {Element}
 */
export const createHomeView = () => {
  const homeContainer = document.createElement('div');
  homeContainer.id = HOME_CONTAINER_ID;

  homeContainer.innerHTML = String.raw`
    <div id="${SEARCH_BAR_CONTAINER_ID}">
      <input id="${SEARCH_BAR_ID}" type="search" placeholder="Search">
    </div>
    <div id="${GENRE_CONTAINER_ID}">
      <h1>Search Games by Genre</h1>
    </div>
  `;
  
  return homeContainer;
};

export const updateHomeView = (data) => {
  const genreContainer = document.getElementById(GENRE_CONTAINER_ID);
  data.forEach((genre) => {
    const element = document.createElement('span');
    element.innerText = genre.name;
    element.setAttribute(GENRE_ID_ATTR, genre.id);
    genreContainer.appendChild(element);
  });
  genreContainer.addEventListener('click', async (event) => {
    if (event.target.tagName === 'SPAN') {
      const data = await fetchData(event.target.dataset.genreId, API_FILTERS.genres);
      initResultPage(data.results);
    }
  });
};
