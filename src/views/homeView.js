import { 
  HOME_CONTAINER_ID, 
  SEARCH_BAR_CONTAINER_ID, 
  SEARCH_BAR_ID, 
  HOME_GENRES_CONTAINER_ID
} from "../constants.js";

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
    <div id="${HOME_GENRES_CONTAINER_ID}">
      <h1>Search Games by Genre</h1>
    </div>
  `;
  
  return homeContainer;
};